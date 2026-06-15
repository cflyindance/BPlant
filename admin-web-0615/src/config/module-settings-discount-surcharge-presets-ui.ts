/**
 * 订单 · 折扣与加收：seq 446 折扣预设、447 加收预设（名称 + 百分比/固定金额）。
 */

import { MODULE_SETTING_CHOICE_CONTROL_CLASS } from "./module-settings-choice-ui";
import {
  readModuleSettingJson,
  writeModuleSettingJson,
} from "./module-settings-form-ui";

export const ORDER_DISCOUNT_PRESET_SEQ = 446;
export const ORDER_SURCHARGE_PRESET_SEQ = 447;

export type RatePresetKind = "percent" | "fixed";

export type RatePresetItem = {
  id: string;
  name: string;
  kind: RatePresetKind;
  value: number;
};

const PRESET_SEQ = new Set([ORDER_DISCOUNT_PRESET_SEQ, ORDER_SURCHARGE_PRESET_SEQ]);

const STORAGE_BY_SEQ: Record<number, string> = {
  [ORDER_DISCOUNT_PRESET_SEQ]: "446-discount-presets",
  [ORDER_SURCHARGE_PRESET_SEQ]: "447-surcharge-presets",
};

const CONFIG_BY_SEQ: Record<
  number,
  { addLabel: string; nameHeader: string; namePlaceholder: string }
> = {
  [ORDER_DISCOUNT_PRESET_SEQ]: {
    addLabel: "新增折扣",
    nameHeader: "折扣名称",
    namePlaceholder: "请输入折扣名称",
  },
  [ORDER_SURCHARGE_PRESET_SEQ]: {
    addLabel: "新增加收",
    nameHeader: "加收名称",
    namePlaceholder: "请输入加收名称",
  },
};

const INPUT_CLASS =
  "h-8 w-full min-w-0 rounded-md border border-input bg-background px-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function newPresetId(): string {
  return `preset-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function storageFieldId(seq: number): string {
  return STORAGE_BY_SEQ[seq] ?? `${seq}-rate-presets`;
}

function normalizePreset(raw: Partial<RatePresetItem>): RatePresetItem {
  const kind: RatePresetKind = raw.kind === "fixed" ? "fixed" : "percent";
  const value = Number(raw.value);
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
  const clamped =
    kind === "percent" ? Math.min(100, safeValue) : safeValue;
  return {
    id: typeof raw.id === "string" && raw.id ? raw.id : newPresetId(),
    name: typeof raw.name === "string" ? raw.name : "",
    kind,
    value: clamped,
  };
}

export function readRatePresets(seq: number): RatePresetItem[] {
  const fieldId = storageFieldId(seq);
  const raw = readModuleSettingJson<Partial<RatePresetItem>[]>(fieldId, []);
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => normalizePreset(item));
}

export function writeRatePresets(seq: number, items: RatePresetItem[]): void {
  writeModuleSettingJson(
    storageFieldId(seq),
    items.map((item) => normalizePreset(item)),
  );
}

export function isDiscountSurchargePresetSeq(seq: number): boolean {
  return PRESET_SEQ.has(seq);
}

function valueSuffix(kind: RatePresetKind): string {
  return kind === "fixed" ? "元" : "%";
}

function renderPresetKindRadios(item: RatePresetItem): string {
  const groupName = `rate-preset-kind-${escapeHtml(item.id)}`;
  const kinds: { value: RatePresetKind; label: string }[] = [
    { value: "percent", label: "百分比" },
    { value: "fixed", label: "固定金额" },
  ];
  return kinds
    .map((k) => {
      const checked = item.kind === k.value;
      return `
        <label class="inline-flex cursor-pointer items-center gap-1.5 text-sm text-foreground">
          <input
            type="radio"
            name="${groupName}"
            value="${k.value}"
            class="${MODULE_SETTING_CHOICE_CONTROL_CLASS}"
            ${checked ? "checked" : ""}
            data-rate-preset-kind
            aria-label="${escapeHtml(k.label)}"
          />
          <span>${escapeHtml(k.label)}</span>
        </label>`;
    })
    .join("");
}

function renderPresetRow(item: RatePresetItem, namePlaceholder: string): string {
  const suffix = valueSuffix(item.kind);
  const maxAttr = item.kind === "percent" ? ' max="100"' : "";
  return `
    <tr class="border-t border-border" data-rate-preset-row data-preset-id="${escapeHtml(item.id)}">
      <td class="px-3 py-2.5">
        <input
          type="text"
          class="${INPUT_CLASS}"
          value="${escapeHtml(item.name)}"
          placeholder="${escapeHtml(namePlaceholder)}"
          data-rate-preset-name
        />
      </td>
      <td class="px-3 py-2.5">
        <div class="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3" role="radiogroup" aria-label="比例类型">
          ${renderPresetKindRadios(item)}
        </div>
      </td>
      <td class="px-3 py-2.5">
        <div class="flex items-center gap-1.5">
          <input
            type="number"
            inputmode="decimal"
            class="${INPUT_CLASS} max-w-[8rem] tabular-nums"
            value="${escapeHtml(String(item.value))}"
            min="0"
            step="0.01"${maxAttr}
            data-rate-preset-value
            aria-label="比例数值"
          />
          <span class="shrink-0 text-sm text-muted-foreground" data-rate-preset-suffix>${escapeHtml(suffix)}</span>
        </div>
      </td>
      <td class="px-3 py-2.5 text-right whitespace-nowrap">
        <button
          type="button"
          class="text-sm font-medium text-destructive hover:underline"
          data-rate-preset-remove
        >删除</button>
      </td>
    </tr>`;
}

/** 有数据时才渲染表头与行（无数据时不展示空状态表格） */
function renderPresetTableInner(seq: number, items: RatePresetItem[]): string {
  const cfg = CONFIG_BY_SEQ[seq];
  if (!cfg || items.length === 0) return "";
  const rows = items
    .map((item) => renderPresetRow(item, cfg.namePlaceholder))
    .join("");

  return `
    <div class="overflow-x-auto rounded-md border border-border">
      <table class="w-full min-w-[28rem] border-collapse text-left text-sm">
        <thead class="bg-muted/40 text-xs text-muted-foreground">
          <tr>
            <th class="px-3 py-2 font-medium">${escapeHtml(cfg.nameHeader)}</th>
            <th class="px-3 py-2 font-medium w-[8.5rem]">比例类型</th>
            <th class="px-3 py-2 font-medium w-[10rem]">比例</th>
            <th class="px-3 py-2 text-right font-medium w-[4.5rem]">操作</th>
          </tr>
        </thead>
        <tbody data-rate-preset-list>${rows}</tbody>
      </table>
    </div>`;
}

function renderPresetTableWrap(seq: number, items: RatePresetItem[]): string {
  const visible = items.length > 0;
  const inner = visible ? renderPresetTableInner(seq, items) : "";
  return `
    <div
      data-rate-preset-table-wrap
      class="${visible ? "" : "hidden"}"
      ${visible ? "" : 'aria-hidden="true"'}
    >${inner}</div>`;
}

export function renderDiscountSurchargePresetEditorHtml(seq: number): string {
  const cfg = CONFIG_BY_SEQ[seq];
  if (!cfg) return "";
  const items = readRatePresets(seq);
  return `
    <div
      class="space-y-3"
      data-rate-preset-editor
      data-preset-seq="${seq}"
      data-storage-id="${escapeHtml(storageFieldId(seq))}"
    >
      ${renderPresetTableWrap(seq, items)}
      <div class="flex justify-start">
        <button
          type="button"
          class="inline-flex h-8 items-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground shadow-sm hover:bg-muted"
          data-rate-preset-add
        >${escapeHtml(cfg.addLabel)}</button>
      </div>
    </div>`;
}

function readRowKind(row: HTMLElement): RatePresetKind {
  const checked = row.querySelector<HTMLInputElement>("[data-rate-preset-kind]:checked");
  return checked?.value === "fixed" ? "fixed" : "percent";
}

function syncRowKindUi(row: HTMLElement): void {
  const kind = readRowKind(row);
  const suffix = row.querySelector("[data-rate-preset-suffix]");
  if (suffix) suffix.textContent = valueSuffix(kind);
  const valueInput = row.querySelector<HTMLInputElement>("[data-rate-preset-value]");
  if (!valueInput) return;
  if (kind === "percent") {
    valueInput.setAttribute("max", "100");
    const n = Number(valueInput.value);
    if (Number.isFinite(n) && n > 100) valueInput.value = "100";
  } else {
    valueInput.removeAttribute("max");
  }
}

function collectPresetsFromEditor(editor: HTMLElement): RatePresetItem[] {
  const items: RatePresetItem[] = [];
  editor.querySelectorAll<HTMLElement>("[data-rate-preset-row]").forEach((row) => {
    const id = row.getAttribute("data-preset-id") ?? newPresetId();
    const name =
      row.querySelector<HTMLInputElement>("[data-rate-preset-name]")?.value.trim() ?? "";
    const kind = readRowKind(row);
    const value = Number(row.querySelector<HTMLInputElement>("[data-rate-preset-value]")?.value);
    items.push(
      normalizePreset({
        id,
        name,
        kind,
        value: Number.isFinite(value) ? value : 0,
      }),
    );
  });
  return items;
}

function persistEditor(editor: HTMLElement): void {
  const seq = Number(editor.getAttribute("data-preset-seq"));
  if (!PRESET_SEQ.has(seq)) return;
  writeRatePresets(seq, collectPresetsFromEditor(editor));
}

function rerenderEditor(editor: HTMLElement): void {
  const seq = Number(editor.getAttribute("data-preset-seq"));
  if (!PRESET_SEQ.has(seq)) return;
  const items = readRatePresets(seq);
  const wrap = editor.querySelector<HTMLElement>("[data-rate-preset-table-wrap]");
  if (!wrap) return;

  if (items.length === 0) {
    wrap.innerHTML = "";
    wrap.classList.add("hidden");
    wrap.setAttribute("aria-hidden", "true");
    return;
  }

  wrap.innerHTML = renderPresetTableInner(seq, items);
  wrap.classList.remove("hidden");
  wrap.removeAttribute("aria-hidden");
  wrap.querySelectorAll<HTMLElement>("[data-rate-preset-row]").forEach(syncRowKindUi);
}

function appendPreset(editor: HTMLElement): void {
  const seq = Number(editor.getAttribute("data-preset-seq"));
  if (!PRESET_SEQ.has(seq)) return;
  const items = readRatePresets(seq);
  items.push({
    id: newPresetId(),
    name: "",
    kind: "percent",
    value: 10,
  });
  writeRatePresets(seq, items);
  rerenderEditor(editor);
  const rows = editor.querySelectorAll("[data-rate-preset-row]");
  const last = rows[rows.length - 1];
  last?.querySelector<HTMLInputElement>("[data-rate-preset-name]")?.focus();
}

function removePreset(editor: HTMLElement, row: HTMLElement): void {
  const seq = Number(editor.getAttribute("data-preset-seq"));
  if (!PRESET_SEQ.has(seq)) return;
  const presetId = row.getAttribute("data-preset-id");
  const items = readRatePresets(seq).filter((item) => item.id !== presetId);
  writeRatePresets(seq, items);
  rerenderEditor(editor);
}

export function bindDiscountSurchargePresetEditors(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>("[data-rate-preset-editor]").forEach((editor) => {
    if (editor.dataset.ratePresetEditorBound === "1") return;
    editor.dataset.ratePresetEditorBound = "1";

    editor.querySelectorAll<HTMLElement>("[data-rate-preset-row]").forEach(syncRowKindUi);

    editor.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-rate-preset-add]")) {
        appendPreset(editor);
        return;
      }
      const removeBtn = target.closest("[data-rate-preset-remove]");
      if (removeBtn) {
        const row = removeBtn.closest<HTMLElement>("[data-rate-preset-row]");
        if (row) removePreset(editor, row);
      }
    });

    editor.addEventListener("input", (e) => {
      const el = e.target as HTMLElement;
      if (
        el.matches("[data-rate-preset-name]") ||
        el.matches("[data-rate-preset-value]")
      ) {
        persistEditor(editor);
      }
    });

    editor.addEventListener("change", (e) => {
      const el = e.target as HTMLElement;
      if (el.matches("[data-rate-preset-kind]")) {
        const row = el.closest<HTMLElement>("[data-rate-preset-row]");
        if (row) syncRowKindUi(row);
        persistEditor(editor);
        return;
      }
      if (
        el.matches("[data-rate-preset-name]") ||
        el.matches("[data-rate-preset-value]")
      ) {
        const row = el.closest<HTMLElement>("[data-rate-preset-row]");
        if (row) syncRowKindUi(row);
        persistEditor(editor);
      }
    });
  });
}
