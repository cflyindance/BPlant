/**
 * 设置项组内展示顺序（sortInGroup 越小越靠前）。
 * 未列出的 seq 在组内仍按 seq 升序排在已定义项之后。
 */

/** POS 按钮显隐：仅「隐藏到更多」类（seq 193–215） */
const POS_BUTTON_VISIBILITY_SEQ_ORDER = [
  193, 194, 195, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212,
  213, 214, 215,
];

/** POS 点单页工具栏：分割线命名 → 四区工具栏配置 */
const POS_ORDER_TOOLBAR_SEQ_ORDER = [196, 483, 484, 485, 486];

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

/** 客显屏：封面 → Logo → 场景启用 */
const CDS_SEQ_ORDER = [461, 462, 466];

/** 食客端·界面语言（C 端多产线 SSOT） */
const GUEST_FACING_LOCALE_SEQ_ORDER = [652, 653];

assignSort(CDS_SEQ_ORDER);
assignSort(GUEST_FACING_LOCALE_SEQ_ORDER);

/** 食客端·菜单结构：服务设置·菜单树 */
const GUEST_MENU_STRUCTURE_SEQ_ORDER = [515, 516, 517, 518, 519, 520, 524, 528];

/** 食客端·首页与版式：品牌/模式 → 列表 → 首页 → 样式 */
const GUEST_MENU_GLOBAL_SEQ_ORDER = [
  532, 599, 601, 602, 604, 606, 607, 608, 611, 600, 612, 645,
];

/** 食客端·购物车展示 */
const GUEST_MENU_CART_SEQ_ORDER = [616, 617, 618];

/** 食客端·下单与规则：提示 → 火锅 → 用餐时长 → 轮次规则 */
const GUEST_ORDER_RULES_SEQ_ORDER = [569, 570, 573, 577, 578, 579, 580, 597, 598];

/** 备注与附加服务：备注 → 餐具/打包附加费 */
const GUEST_NOTES_FEES_SEQ_ORDER = [521, 522, 523, 544, 545];

assignSort(GUEST_MENU_STRUCTURE_SEQ_ORDER);
assignSort(GUEST_MENU_GLOBAL_SEQ_ORDER);
assignSort(GUEST_MENU_CART_SEQ_ORDER);
assignSort(GUEST_ORDER_RULES_SEQ_ORDER);
assignSort(GUEST_NOTES_FEES_SEQ_ORDER);

/** 支付中心 · 食客端结账：客显流程 → 扫码端小费/收据 */
const GUEST_CHECKOUT_UX_SEQ_ORDER = [8, 9, 463, 464, 465, 492, 493, 494, 495, 496, 497, 501];

assignSort(GUEST_CHECKOUT_UX_SEQ_ORDER);

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

/** 前厅管理中心设置页二级导航展示顺序 */
export const FOH_SETTINGS_GROUP_ORDER = [
  "tables-floor",
  "pos-button-visibility",
  "pos-order-toolbar",
  "pos-menu-ui",
  "guest-menu-structure",
  "guest-menu-global",
  "guest-menu-cart",
  "guest-facing-locale",
  "guest-order-rules",
  "guest-notes-fees",
  "wait-time",
  "cds",
];
