/**
 * 后厨 · 厨房单·版式格式：打印边距（seq 43）+ 打印边距范围（seq 44）合并为一行。
 */

import {
  readModuleSettingNumber,
  readModuleSettingRadio,
  writeModuleSettingNumber,
  writeModuleSettingRadio,
} from "./module-settings-form-ui";
import type { ModuleSettingCatalogItem } from "./module-settings-catalog";

export const KITCHEN_TICKET_MARGIN_HOST_SEQ = 43;
export const KITCHEN_TICKET_MARGIN_SKIP_SEQ = 44;

export const KITCHEN_TICKET_MARGIN_SIZE_FIELD_ID = "43-print-margin-size";
export const KITCHEN_TICKET_MARGIN_RANGE_FIELD_ID = "44-print-margin-range";

export const KITCHEN_TICKET_MARGIN_RANGE_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "top-bottom", label: "Top & Bottom" },
  { value: "top-only", label: "Top margin only" },
  { value: "bottom-only", label: "Bottom margin only" },
] as const;

const INPUT_CLASS =
  "h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isKitchenTicketMarginHostSeq(seq: number): boolean {
  return seq === KITCHEN_TICKET_MARGIN_HOST_SEQ;
}

export function shouldSkipKitchenTicketMarginRangeRow(seq: number): boolean {
  return seq === KITCHEN_TICKET_MARGIN_SKIP_SEQ;
}

export function renderKitchenTicketMarginRowHtml(_item: ModuleSettingCatalogItem): string {
  const margin = readModuleSettingNumber(KITCHEN_TICKET_MARGIN_SIZE_FIELD_ID, 0);
  const range = readModuleSettingRadio(KITCHEN_TICKET_MARGIN_RANGE_FIELD_ID, "top-bottom");
  const options = KITCHEN_TICKET_MARGIN_RANGE_OPTIONS.map(
    (opt) =>
      `<option value="${escapeHtml(opt.value)}" ${range === opt.value ? "selected" : ""}>${escapeHtml(opt.label)}</option>`,
  ).join("");

  return `
    <div class="mt-3 space-y-3" data-kitchen-ticket-margin-controls>
      <input
        type="number"
        inputmode="decimal"
        step="1"
        min="0"
        class="${INPUT_CLASS} tabular-nums"
        value="${escapeHtml(String(margin))}"
        data-module-setting-field="${escapeHtml(KITCHEN_TICKET_MARGIN_SIZE_FIELD_ID)}"
        data-default-value="0"
        aria-label="打印边距"
      />
      <div class="space-y-1.5">
        <span class="block text-sm font-medium text-foreground">打印边距范围</span>
        <select
          class="${INPUT_CLASS}"
          data-kitchen-ticket-margin-range
          data-margin-range-field="${escapeHtml(KITCHEN_TICKET_MARGIN_RANGE_FIELD_ID)}"
          aria-label="打印边距范围"
        >${options}</select>
      </div>
    </div>`;
}

export function bindKitchenTicketMarginControls(): void {
  document.querySelectorAll<HTMLSelectElement>("[data-kitchen-ticket-margin-range]").forEach((select) => {
    if (select.dataset.kitchenTicketMarginBound === "1") return;
    select.dataset.kitchenTicketMarginBound = "1";
    const fieldId = select.getAttribute("data-margin-range-field");
    if (!fieldId) return;
    select.addEventListener("change", () => {
      writeModuleSettingRadio(fieldId, select.value);
    });
  });
}
