/**
 * 设置滑层中展示开关控件的 seq（原型：本地 localStorage 持久化）。
 */

/** POS 按钮显隐：193–195、197–215（不含 196 分割线，归点单页工具栏） */
export const POS_BUTTON_VISIBILITY_TOGGLE_SEQ: readonly number[] = [
  ...Array.from({ length: 3 }, (_, i) => 193 + i),
  ...Array.from({ length: 19 }, (_, i) => 197 + i),
];

/** 桌台与餐位：清桌、企台等运营策略（平面图 seq 428 见餐位平面图功能页） */
const TABLES_FLOOR_TOGGLE_SEQ: readonly number[] = [169, 347, 351, 534, 642];

/** 后厨 · 送厨触发与路由（seq 36 为订单类型多选，见 module-settings-kitchen-order-type-ui） */
export const KITCHEN_SEND_ROUTING_TOGGLE_SEQ: readonly number[] = [32, 37, 62, 304];

/** 后厨 · 厨房单·分组与拆单（52/53 见行级合并矩阵） */
export const KITCHEN_TICKET_GROUPING_TOGGLE_SEQ: readonly number[] = [54, 40, 47, 51, 61];

/** 后厨 · 行级合并矩阵（含打包单 301/302、食客收据 287/288，由矩阵内开关控制） */
export const KITCHEN_LINE_MERGE_MATRIX_TOGGLE_SEQ: readonly number[] = [52, 53, 287, 288, 301, 302];

/** 后厨 · 厨房单·票面信息 */
export const KITCHEN_TICKET_FIELDS_TOGGLE_SEQ: readonly number[] = [
  35, 42, 45, 46, 48, 49, 50, 55, 56, 57, 58,
];

/** 后厨 · 厨房单·版式格式（43+44 合并为边距输入+范围下拉，见 module-settings-kitchen-ticket-margin-ui） */
export const KITCHEN_TICKET_FORMAT_TOGGLE_SEQ: readonly number[] = [38, 41, 33, 59, 60];

/** 后厨 · 打包单（seq 39 为订单类型多选，见 module-settings-packing-slip-order-type-ui） */
export const KITCHEN_PACKING_SLIP_TOGGLE_SEQ: readonly number[] = [298, 299, 300];

/** 订单 · 分单合单与改单 */
export const ORDER_SPLIT_MERGE_EDIT_TOGGLE_SEQ: readonly number[] = [
  115, 116, 117, 119, 124, 140, 141,
];

/** 订单 · 删退与作废（seq 156 订单失效原因多选，见 module-settings-order-void-ui） */
export const ORDER_VOID_TOGGLE_SEQ: readonly number[] = [155, 157, 158, 159];

/** 前厅 · POS 结账入口（原订单中心 checkout-entry 迁入） */
export const POS_CHECKOUT_ENTRY_TOGGLE_SEQ: readonly number[] = [248, 221];

/** 订单 · 折扣（446 预设表；163 开关+输入见 order-discount-reason-ui） */
export const ORDER_DISCOUNT_TOGGLE_SEQ: readonly number[] = [162, 163, 164];

/** 订单 · 加收（447 预设表；147 四舍五入见 order-settlement / order-total-rounding-ui） */
export const ORDER_SURCHARGE_TOGGLE_SEQ: readonly number[] = [149, 161];

/** 门店 · 营业与运营（seq 170 单选、418 营业时段见各自 UI 模块） */
export const STORE_HOURS_OPERATION_TOGGLE_SEQ: readonly number[] = [77, 582];

/** @deprecated 使用 STORE_HOURS_OPERATION_TOGGLE_SEQ */
export const STORE_OPERATION_MODE_ALERTS_TOGGLE_SEQ = STORE_HOURS_OPERATION_TOGGLE_SEQ;

export const MODULE_SETTING_TOGGLE_SEQ = new Set([
  ...POS_CHECKOUT_ENTRY_TOGGLE_SEQ,
  ...ORDER_SPLIT_MERGE_EDIT_TOGGLE_SEQ,
  ...ORDER_VOID_TOGGLE_SEQ,
  ...ORDER_DISCOUNT_TOGGLE_SEQ,
  ...ORDER_SURCHARGE_TOGGLE_SEQ,
  ...KITCHEN_SEND_ROUTING_TOGGLE_SEQ,
  ...KITCHEN_TICKET_GROUPING_TOGGLE_SEQ,
  ...KITCHEN_LINE_MERGE_MATRIX_TOGGLE_SEQ,
  ...KITCHEN_TICKET_FIELDS_TOGGLE_SEQ,
  ...KITCHEN_TICKET_FORMAT_TOGGLE_SEQ,
  ...KITCHEN_PACKING_SLIP_TOGGLE_SEQ,
  ...STORE_OPERATION_MODE_ALERTS_TOGGLE_SEQ,
  461, 462, 466, 521, 522, 523, 535, 536, 544, 545, 569, 570, 573, 577, 578, 579, 580, 597, 598,
  616, 617, 618,
  73, 74, 118, 176, 177, 216, 219, 220, 348, 350,
  515, 516, 518, 519, 520, 524, 528,
  530, 532, 600, 601, 602, 604, 606, 607, 608, 611, 612, 645,
  ...TABLES_FLOOR_TOGGLE_SEQ,
  ...POS_BUTTON_VISIBILITY_TOGGLE_SEQ,
]);

export function isModuleSettingToggleSeq(seq: number): boolean {
  return MODULE_SETTING_TOGGLE_SEQ.has(seq);
}

export function moduleSettingToggleStorageKey(seq: number): string {
  return `bplant-module-setting-toggle:${seq}`;
}

/** 默认开启展示 */
export function getDefaultModuleSettingToggleOn(seq: number): boolean {
  return MODULE_SETTING_TOGGLE_SEQ.has(seq);
}
