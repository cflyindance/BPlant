/**
 * 设置滑层：菜单组多选（599 全店默认 / 560 设备级，原型 localStorage JSON）。
 */

import { readModuleSettingJson, writeModuleSettingJson } from "./module-settings-form-ui";

export type MenuGroupTag = { id: string; name: string };

/** 原型菜单组库（组类菜结构 · 组层级，后续对接菜单 API） */
export const MODULE_SETTING_MOCK_MENU_GROUPS: MenuGroupTag[] = [
  { id: "mg-hot", name: "热菜" },
  { id: "mg-cold", name: "冷菜" },
  { id: "mg-staple", name: "主食" },
  { id: "mg-soup", name: "汤品" },
  { id: "mg-drink", name: "饮品" },
  { id: "mg-dessert", name: "甜品" },
];

const MENU_GROUP_SELECT_SEQS = new Set([560, 599]);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isModuleSettingMenuGroupSelectSeq(seq: number): boolean {
  return MENU_GROUP_SELECT_SEQS.has(seq);
}

export function menuGroupStorageFieldId(seq: number): string {
  return `${seq}-menu-groups`;
}

export function readMenuGroupTags(storageFieldId: string): MenuGroupTag[] {
  const raw = readModuleSettingJson<MenuGroupTag[]>(storageFieldId, []);
  return Array.isArray(raw) ? raw.filter((t) => t?.id && t?.name) : [];
}

export function writeMenuGroupTags(storageFieldId: string, tags: MenuGroupTag[]): void {
  writeModuleSettingJson(storageFieldId, tags);
}

function groupSelectOptions(selectedIds: Set<string>): string {
  const opts = MODULE_SETTING_MOCK_MENU_GROUPS.filter((g) => !selectedIds.has(g.id))
    .map((g) => `<option value="${escapeHtml(g.id)}">${escapeHtml(g.name)}</option>`)
    .join("");
  return `<option value="">选择菜单组</option>${opts}`;
}

function renderMenuGroupTag(tag: MenuGroupTag): string {
  return `
    <span
      data-menu-group-tag
      data-group-id="${escapeHtml(tag.id)}"
      data-group-name="${escapeHtml(tag.name)}"
      class="inline-flex max-w-full items-center gap-1 rounded-md border border-border bg-muted/80 px-2 py-0.5 text-xs text-foreground"
    >
      <span class="truncate">${escapeHtml(tag.name)}</span>
      <button
        type="button"
        class="shrink-0 rounded p-0.5 text-muted-foreground hover:bg-background hover:text-foreground"
        data-menu-group-tag-remove
        aria-label="移除 ${escapeHtml(tag.name)}"
      >×</button>
    </span>`;
}

function collectTagsFromPicker(picker: Element): MenuGroupTag[] {
  return [...picker.querySelectorAll("[data-menu-group-tag]")].map((el) => ({
    id: el.getAttribute("data-group-id") ?? "",
    name: el.getAttribute("data-group-name") ?? "",
  }));
}

function refreshPickerSelect(picker: HTMLElement): void {
  const selectedIds = new Set(collectTagsFromPicker(picker).map((t) => t.id));
  const select = picker.querySelector<HTMLSelectElement>("[data-menu-group-picker-add]");
  if (!select) return;
  const current = select.value;
  select.innerHTML = groupSelectOptions(selectedIds);
  if (current && !selectedIds.has(current)) select.value = current;
  else select.value = "";
}

function appendGroupTag(picker: HTMLElement, group: MenuGroupTag): void {
  const select = picker.querySelector<HTMLSelectElement>("[data-menu-group-picker-add]");
  if (!select || collectTagsFromPicker(picker).some((t) => t.id === group.id)) return;
  select.insertAdjacentHTML("beforebegin", renderMenuGroupTag(group));
  refreshPickerSelect(picker);
}

function renderMenuGroupPickerInner(seq: number, groups: MenuGroupTag[]): string {
  const selectedIds = new Set(groups.map((g) => g.id));
  const tags = groups.map(renderMenuGroupTag).join("");
  return `
    <div
      class="module-setting-menu-group-picker flex min-h-9 min-w-0 flex-1 flex-wrap items-center gap-1.5 rounded-md border border-input bg-background px-2 py-1.5"
      data-menu-group-picker
      data-setting-seq="${seq}"
    >
      ${tags}
      <select
        class="min-w-[6.5rem] flex-1 border-0 bg-transparent py-0.5 text-sm text-foreground focus:outline-none focus:ring-0"
        data-menu-group-picker-add
        aria-label="添加菜单组"
      >${groupSelectOptions(selectedIds)}</select>
    </div>`;
}

export function renderMenuGroupPickerHtml(seq: number, storageFieldId: string): string {
  const groups = readMenuGroupTags(storageFieldId);
  return `
    <div
      class="w-full min-w-0"
      data-standalone-menu-group-picker
      data-storage-id="${escapeHtml(storageFieldId)}"
      data-setting-seq="${seq}"
    >
      ${renderMenuGroupPickerInner(seq, groups)}
    </div>`;
}

function persistStandaloneMenuGroupPicker(picker: HTMLElement): void {
  const wrap = picker.closest<HTMLElement>("[data-standalone-menu-group-picker]");
  const storageId = wrap?.getAttribute("data-storage-id");
  if (!storageId) return;
  writeMenuGroupTags(storageId, collectTagsFromPicker(picker));
}

export function bindModuleSettingMenuGroupPickers(): void {
  document.querySelectorAll<HTMLElement>("[data-standalone-menu-group-picker]").forEach((wrap) => {
    if (wrap.dataset.menuGroupPickerBound === "1") return;
    wrap.dataset.menuGroupPickerBound = "1";
    wrap.addEventListener("click", (e) => {
      const removeBtn = (e.target as HTMLElement).closest("[data-menu-group-tag-remove]");
      if (!removeBtn) return;
      const tag = removeBtn.closest("[data-menu-group-tag]");
      const picker = tag?.closest<HTMLElement>("[data-menu-group-picker]");
      tag?.remove();
      if (picker) {
        refreshPickerSelect(picker);
        persistStandaloneMenuGroupPicker(picker);
      }
    });
    wrap.addEventListener("change", (e) => {
      const select = (e.target as HTMLElement).closest<HTMLSelectElement>("[data-menu-group-picker-add]");
      if (!select) return;
      const group = MODULE_SETTING_MOCK_MENU_GROUPS.find((g) => g.id === select.value);
      const picker = select.closest<HTMLElement>("[data-menu-group-picker]");
      if (!group || !picker) return;
      appendGroupTag(picker, group);
      select.value = "";
      persistStandaloneMenuGroupPicker(picker);
    });
  });
}
