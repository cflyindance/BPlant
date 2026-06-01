/**
 * 设置项组内展示顺序（sortInGroup 越小越靠前）。
 * 未列出的 seq 在组内仍按 seq 升序排在已定义项之后。
 */

/** POS 按钮显隐：仅「隐藏到更多」类（seq 193–215） */
const POS_BUTTON_VISIBILITY_SEQ_ORDER = [
  193, 194, 195, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212,
  213, 214, 215,
];

/** POS 点单页工具栏：分割线命名 → 超时提醒 → 四区工具栏配置 */
const POS_ORDER_TOOLBAR_SEQ_ORDER = [196, 110, 483, 484, 485, 486];

/**
 * POS 菜单与布局：菜单查找 → 时段菜单 → 点餐界面布局（组/类/菜/样式/价格）→ iPad 扩展
 */
export const POS_MENU_UI_SEQ_ORDER = [
  118,
  176, 177, 348,
  216, 217, 218, 219, 220,
  350,
];

/** @type {Map<number, number>} */
export const INTRA_GROUP_SORT_BY_SEQ = new Map();

let sortCursor = 0;
function assignSort(seqList, step = 10) {
  for (const seq of seqList) {
    INTRA_GROUP_SORT_BY_SEQ.set(seq, (sortCursor += step));
  }
}

assignSort(POS_BUTTON_VISIBILITY_SEQ_ORDER);
assignSort(POS_ORDER_TOOLBAR_SEQ_ORDER);
assignSort(POS_MENU_UI_SEQ_ORDER);

/** 桌台与餐位：选桌/开单桌台校验 → 清桌与企台 */
const TABLES_FLOOR_SEQ_ORDER = [107, 533, 619, 643, 644, 592, 169, 534, 642, 351, 347];

/** POS 开单流程：人数页与人数规则 */
const POS_ORDER_INIT_SEQ_ORDER = [108, 111, 625];

/** POS 送厨流程：送厨/付款/结账/打单联动 → 全局延迟 */
const POS_KITCHEN_SEND_SEQ_ORDER = [113, 114, 120, 123, 125];

assignSort(TABLES_FLOOR_SEQ_ORDER);
assignSort(POS_ORDER_INIT_SEQ_ORDER);
assignSort(POS_KITCHEN_SEND_SEQ_ORDER);

/** 客显屏：封面 → Logo → 场景启用 */
const CDS_SEQ_ORDER = [461, 462, 466];

/** 食客端·界面语言（C 端多产线 SSOT） */
const GUEST_FACING_LOCALE_SEQ_ORDER = [652, 653];

assignSort(CDS_SEQ_ORDER);
assignSort(GUEST_FACING_LOCALE_SEQ_ORDER);

/** 食客端·菜单结构：服务设置·菜单树 */
const GUEST_MENU_STRUCTURE_SEQ_ORDER = [515, 516, 517, 518, 519, 520, 524, 528];

/** 食客端·品类与场景菜单（C 端自助餐场景） */
const GUEST_MENU_SCENARIOS_SEQ_ORDER = [655, 656, 657, 658, 659, 660, 661];

/** 食客端·首页与版式：品牌/模式 → 列表 → 首页 → 样式 */
const GUEST_MENU_GLOBAL_SEQ_ORDER = [
  532, 599, 601, 602, 604, 606, 607, 608, 611, 600, 612, 645,
];

/** 食客端·购物车展示 */
const GUEST_MENU_CART_SEQ_ORDER = [616, 617, 618];

/** 食客端·下单与规则：C 端送厨 → 计价/提示 → 火锅 → 用餐时长 → 轮次规则 */
const GUEST_ORDER_RULES_SEQ_ORDER = [
  91, 502, 581, 567, 443, 571, 572, 574, 575, 573, 569, 570, 577, 578, 579, 580, 597, 598,
];

/** 备注与附加服务：备注 → 餐具/打包附加费 */
const GUEST_NOTES_FEES_SEQ_ORDER = [521, 522, 523, 544, 545];

assignSort(GUEST_MENU_STRUCTURE_SEQ_ORDER);
assignSort(GUEST_MENU_SCENARIOS_SEQ_ORDER);
assignSort(GUEST_MENU_GLOBAL_SEQ_ORDER);
assignSort(GUEST_MENU_CART_SEQ_ORDER);
assignSort(GUEST_ORDER_RULES_SEQ_ORDER);
assignSort(GUEST_NOTES_FEES_SEQ_ORDER);

/** 支付中心 · 客显结账：流程 → 小费 → 签名 → 小票 */
const CDS_CHECKOUT_UX_SEQ_ORDER = [9, 463, 8, 464, 465];

/** 支付中心 · 扫码端结账：流程 → 小费 → 签名 → 短信收据 */
const GUEST_SELF_CHECKOUT_UX_SEQ_ORDER = [495, 492, 493, 494, 496, 497, 501];

assignSort(CDS_CHECKOUT_UX_SEQ_ORDER);
assignSort(GUEST_SELF_CHECKOUT_UX_SEQ_ORDER);

/** 后厨管理中心设置页二级导航展示顺序 */
export const KITCHEN_SETTINGS_GROUP_ORDER = [
  "send-routing",
  "ticket-grouping",
  "line-merge-rules",
  "ticket-fields",
  "ticket-format",
  "packing-slip",
];

/** 送厨触发与路由：类型/路由 → 未付送厨 → 分票 → 首次送厨整单 */
const KITCHEN_SEND_ROUTING_SEQ_ORDER = [36, 37, 62, 32, 304];

/** 行级合并规则：矩阵宿主 52（53/287/288/301/302 在 UI 中合并展示） */
const KITCHEN_LINE_MERGE_RULES_SEQ_ORDER = [52, 53, 287, 288, 301, 302];

/** 厨房单·分组与拆单：分区 → 多语言分行 → 结构拆分（合并规则见 line-merge-rules） */
const KITCHEN_TICKET_GROUPING_SEQ_ORDER = [54, 40, 47, 51, 61];

/** 厨房单·票面信息：送厨次数 → 价格/序号/顾客/合计 */
const KITCHEN_TICKET_FIELDS_SEQ_ORDER = [35, 42, 45, 46, 48, 49, 50, 55, 56, 57, 58];

/** 厨房单·版式格式：边距 → 强调样式 → 行分隔 → 数量与分段序号 */
const KITCHEN_TICKET_FORMAT_SEQ_ORDER = [43, 44, 38, 41, 33, 59, 60];

/** 打包单：触发类型 → 票面字段 → 重打 → 分张 */
const KITCHEN_PACKING_SLIP_SEQ_ORDER = [39, 298, 299, 300];

assignSort(KITCHEN_SEND_ROUTING_SEQ_ORDER);
assignSort(KITCHEN_LINE_MERGE_RULES_SEQ_ORDER);
assignSort(KITCHEN_TICKET_GROUPING_SEQ_ORDER);
assignSort(KITCHEN_TICKET_FIELDS_SEQ_ORDER);
assignSort(KITCHEN_TICKET_FORMAT_SEQ_ORDER);
assignSort(KITCHEN_PACKING_SLIP_SEQ_ORDER);

/** 门店管理中心设置页二级导航展示顺序 */
export const STORE_SETTINGS_GROUP_ORDER = [
  "store-profile",
  "store-hours-operation",
  "brand-menu-presentation",
  "address-data-maintenance",
];

/** 门店档案：国家/地区 → 基本信息 */
const STORE_PROFILE_SEQ_ORDER = [173, 417];

/** 营业与运营：时段 → 周期 → 打烊提示 → 餐厅模式 */
const STORE_HOURS_OPERATION_SEQ_ORDER = [418, 77, 582, 170];

assignSort(STORE_PROFILE_SEQ_ORDER);
assignSort(STORE_HOURS_OPERATION_SEQ_ORDER);

/** 支付中心设置页二级导航展示顺序 */
export const PAYMENT_SETTINGS_GROUP_ORDER = [
  "payment-methods",
  "tax-rules",
  "tip-policy",
  "batch-settlement",
  "card-fees",
  "cds-checkout-ux",
  "guest-self-checkout-ux",
  "paypad-checkout",
];

/** 订单中心设置页二级导航展示顺序 */
export const ORDER_SETTINGS_GROUP_ORDER = [
  "order-init-scenario",
  "order-numbering",
  "split-merge-edit",
  "order-discount",
  "order-surcharge",
  "order-settlement",
  "order-void",
];

/** 商品中心设置页二级导航展示顺序 */
export const PRODUCT_SETTINGS_GROUP_ORDER = ["combo-ordering"];

/** POS 点单页展示：行展示 → 相同菜 → 菜序/键盘/时间 → 小数数量 → 单菜序号 → 减菜跳转 */
const POS_ORDER_CART_SEQ_ORDER = [132, 133, 135, 136, 137, 121, 178, 122];

/** 商品中心 · 套餐点单与展示 */
const PRODUCT_COMBO_ORDERING_SEQ_ORDER = [139, 145];

/** 分单合单与改单：改应收/部分支付 → 分单展示 → 送厨后改调味 → 合单 */
const SPLIT_MERGE_EDIT_SEQ_ORDER = [115, 116, 117, 119, 140, 141, 124];

/** 促销中心 · 促销活动与规则（含拆单促销重算） */
const PROMO_STRATEGY_SEQ_ORDER = [442, 549, 647, 150];

assignSort(PRODUCT_COMBO_ORDERING_SEQ_ORDER);
assignSort(PROMO_STRATEGY_SEQ_ORDER);

/** 折扣：预设 → 原因策略 */
const ORDER_DISCOUNT_SEQ_ORDER = [446, 162, 163, 164];

/** 加收：预设 → 合单重算 → 线上服务费 */
const ORDER_SURCHARGE_SEQ_ORDER = [447, 149, 161];

/** 金额结算：总价四舍五入 */
const ORDER_SETTLEMENT_SEQ_ORDER = [147];

/** 删退与作废：厨打联动 → 原因与权限 → 按菜退款 */
const ORDER_VOID_SEQ_ORDER = [155, 156, 157, 158, 159];

/** POS 找单列表：展示/筛选 → 盘点 → 打印 */
const POS_FIND_ORDER_LIST_SEQ_ORDER = [151, 152, 153, 154, 251];

/** POS 结账入口：条码找单进付款 → 支付前确认 */
const POS_CHECKOUT_ENTRY_SEQ_ORDER = [248, 221];

assignSort(POS_ORDER_CART_SEQ_ORDER);
assignSort(POS_FIND_ORDER_LIST_SEQ_ORDER);
assignSort(POS_CHECKOUT_ENTRY_SEQ_ORDER);
assignSort(SPLIT_MERGE_EDIT_SEQ_ORDER);
assignSort(ORDER_DISCOUNT_SEQ_ORDER);
assignSort(ORDER_SURCHARGE_SEQ_ORDER);
assignSort(ORDER_SETTLEMENT_SEQ_ORDER);
assignSort(ORDER_VOID_SEQ_ORDER);

/** 前厅管理中心设置页二级导航展示顺序 */
export const FOH_SETTINGS_GROUP_ORDER = [
  "tables-floor",
  "pos-order-init",
  "pos-kitchen-send",
  "pos-button-visibility",
  "pos-order-toolbar",
  "pos-order-cart",
  "pos-find-order-list",
  "pos-checkout-entry",
  "pos-menu-ui",
  "guest-menu-structure",
  "guest-menu-scenarios",
  "guest-menu-global",
  "guest-menu-cart",
  "guest-facing-locale",
  "guest-order-rules",
  "guest-notes-fees",
  "wait-time",
  "cds",
];
