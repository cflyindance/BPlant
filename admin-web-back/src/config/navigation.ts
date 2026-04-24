/**
 * 整合后推荐导航树（融合脑图 + 竞品）
 * 来源：docs/餐饮商家后台-导航与目录结构建议.md §八、§8.1
 */

export interface NavItem {
  id: string;
  title: string;
  titleEn?: string;
  path: string;
  /** 连锁/加盟补充项 */
  chainOnly?: boolean;
  children?: NavItem[];
}

export interface NavModule {
  id: string;
  title: string;
  titleEn: string;
  icon:
    | "home"
    | "orders"
    | "receipt"
    | "menu"
    | "storeInfo"
    | "channels"
    | "floorPlan"
    | "kitchenKds"
    | "customerDisplay"
    | "queueCall"
    | "reservations"
    | "waitlist"
    | "inventory"
    | "patrol"
    | "promo"
    | "marketing"
    | "members"
    | "reviews"
    | "gift"
    | "team"
    | "reports"
    | "capital"
    | "settings"
    | "paymentService"
    | "notifications"
    | "printTemplate"
    | "deviceManagement";
  path: string;
  children: NavItem[];
  /**
   * `tabs`：二级在主内容区顶部 Tab（默认）。
   * `sidebar`：二级在左侧主导航内可折叠展开（订单/门店/菜单/点餐/交易/报表/团队/促销/营销/会员/评价/礼品卡等）。
   */
  subNavPlacement?: "sidebar" | "tabs";
  /** 访问 `#/模块前缀` 时重定向到该默认子路径；须与 children 中某项一致 */
  defaultChildPath: string;
}

export const NAV_MODULES: NavModule[] = [
  {
    id: "dashboard",
    title: "主页",
    titleEn: "Dashboard",
    icon: "home",
    path: "/dashboard",
    subNavPlacement: "sidebar",
    defaultChildPath: "/dashboard/overview",
    children: [
      { id: "dash-overview", title: "今日概览", path: "/dashboard/overview" },
      { id: "dash-todos", title: "待办", path: "/dashboard/todos" },
      { id: "dash-shortcuts", title: "快捷入口", path: "/dashboard/shortcuts" },
      { id: "dash-kpi", title: "关键指标", path: "/dashboard/kpi" },
      { id: "dash-locations", title: "多门店切换", path: "/dashboard/locations" },
    ],
  },
  {
    id: "orders",
    title: "订单",
    titleEn: "Orders",
    icon: "orders",
    path: "/orders",
    subNavPlacement: "sidebar",
    defaultChildPath: "/orders/all",
    children: [
      { id: "orders-all", title: "全部订单", path: "/orders/all" },
      { id: "orders-refunds", title: "退单", titleEn: "Refunds & voids", path: "/orders/refunds" },
      { id: "orders-history", title: "订单历史", path: "/orders/history" },
    ],
  },
  {
    id: "transactions",
    title: "交易",
    titleEn: "Transactions",
    icon: "receipt",
    path: "/transactions",
    subNavPlacement: "sidebar",
    defaultChildPath: "/transactions/ledger",
    children: [
      { id: "tx-ledger", title: "交易流水", path: "/transactions/ledger" },
      { id: "tx-payments", title: "支付方式", path: "/transactions/payments" },
      { id: "tx-reconcile", title: "对账", path: "/transactions/reconcile" },
    ],
  },
  {
    id: "store-info",
    title: "门店信息",
    titleEn: "Store information",
    icon: "storeInfo",
    path: "/store",
    subNavPlacement: "sidebar",
    defaultChildPath: "/store/basic",
    children: [
      { id: "store-basic", title: "门店基础信息", titleEn: "Store profile", path: "/store/basic" },
      { id: "store-floor", title: "桌台平面图", titleEn: "Floor plan", path: "/store/floor-plan" },
    ],
  },
  {
    id: "menu",
    title: "菜单",
    titleEn: "Menu",
    icon: "menu",
    path: "/menu",
    subNavPlacement: "sidebar",
    defaultChildPath: "/menu/store-menu",
    children: [
      { id: "menu-store-menu", title: "门店菜单", titleEn: "Store menu", path: "/menu/store-menu" },
      { id: "menu-store-products", title: "门店商品", titleEn: "Store products", path: "/menu/store-products" },
      { id: "menu-product-recipe", title: "商品配方", titleEn: "Product recipe", path: "/menu/product-recipe" },
      { id: "menu-store-seasoning", title: "门店调味", titleEn: "Store seasoning", path: "/menu/store-seasoning" },
      { id: "menu-inventory-change-log", title: "库存变更记录", titleEn: "Inventory change log", path: "/menu/inventory-change-log" },
      { id: "menu-print-settings", title: "打印设置", titleEn: "Print settings", path: "/menu/print-settings" },
      { id: "menu-multi-language", title: "菜单多语言", titleEn: "Menu multi-language", path: "/menu/multi-language" },
      { id: "menu-tax-types", title: "税种管理", titleEn: "Tax types", path: "/menu/tax-types/settings" },
    ],
  },
  {
    id: "ordering-channels",
    title: "智能点餐",
    titleEn: "Smart ordering",
    icon: "channels",
    path: "/ordering",
    subNavPlacement: "sidebar",
    defaultChildPath: "/ordering/pos/basic-settings",
    children: [
      { id: "oc-pos", title: "POS点餐", titleEn: "POS ordering", path: "/ordering/pos/basic-settings" },
      { id: "oc-pos-go", title: "POS GO点餐", titleEn: "POS Go ordering", path: "/ordering/pos-go" },
      { id: "oc-paypad", title: "PayPad点餐", titleEn: "PayPad ordering", path: "/ordering/paypad/tips" },
      { id: "oc-qr", title: "扫码点餐", path: "/ordering/qr" },
      { id: "oc-tablet", title: "eMenu点餐", titleEn: "eMenu ordering", path: "/ordering/tablet" },
      { id: "oc-kiosk", title: "Kiosk 点餐", path: "/ordering/kiosk" },
      { id: "oc-online", title: "Online Order点餐", titleEn: "Online ordering", path: "/ordering/online-order" },
      { id: "oc-platforms", title: "外卖平台对接", path: "/ordering/delivery-platforms" },
      { id: "oc-website", title: "餐厅网站（官网订餐）", path: "/ordering/website" },
      {
        id: "oc-buffet",
        title: "点餐限制规则",
        titleEn: "Ordering limits",
        path: "/ordering/buffet-emenu",
      },
    ],
  },
  {
    id: "kitchen-kds",
    title: "后厨管理",
    titleEn: "Back-of-house management",
    icon: "kitchenKds",
    path: "/operations/kitchen-kds",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/kitchen-kds",
    children: [
      { id: "kds-main", title: "后厨设置", titleEn: "Back-of-house settings", path: "/operations/kitchen-kds" },
    ],
  },
  {
    id: "customer-display",
    title: "客显系统管理",
    titleEn: "Customer display system management",
    icon: "customerDisplay",
    path: "/operations/customer-display",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/customer-display/cover-image",
    children: [
      { id: "cd-cover", title: "封面图", titleEn: "Cover image", path: "/operations/customer-display/cover-image" },
      { id: "cd-multi-language", title: "多语言", titleEn: "Multi-language", path: "/operations/customer-display/multi-language" },
      { id: "cd-tips", title: "小费", titleEn: "Tips", path: "/operations/customer-display/tips" },
      { id: "cd-signature", title: "签名", titleEn: "Signature", path: "/operations/customer-display/signature" },
      { id: "cd-receipt", title: "小票", titleEn: "Receipt ticket", path: "/operations/customer-display/receipt" },
    ],
  },
  {
    id: "queue-call",
    title: "叫号系统管理",
    titleEn: "Queue calling system management",
    icon: "queueCall",
    path: "/operations/queue-call",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/queue-call",
    children: [
      {
        id: "qc-main",
        title: "叫号系统管理",
        titleEn: "Queue calling system management",
        path: "/operations/queue-call",
      },
    ],
  },
  {
    id: "reservations",
    title: "预约系统管理",
    titleEn: "Reservation system management",
    icon: "reservations",
    path: "/operations/reservations",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/reservations",
    children: [
      {
        id: "res-main",
        title: "预约系统管理",
        titleEn: "Reservation system management",
        path: "/operations/reservations",
      },
    ],
  },
  {
    id: "waitlist",
    title: "等位系统管理",
    titleEn: "Waitlist system management",
    icon: "waitlist",
    path: "/operations/waitlist",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/waitlist",
    children: [
      {
        id: "wl-main",
        title: "等位系统管理",
        titleEn: "Waitlist system management",
        path: "/operations/waitlist",
      },
    ],
  },
  {
    id: "device-management",
    title: "设备管理",
    titleEn: "Device management",
    icon: "deviceManagement",
    path: "/device-management",
    subNavPlacement: "sidebar",
    defaultChildPath: "/device-management/overview",
    children: [
      { id: "dm-overview", title: "设备总览", titleEn: "Overview", path: "/device-management/overview" },
      {
        id: "dm-hardware",
        title: "硬件",
        titleEn: "Hardware",
        path: "/device-management/hardware/payments",
      },
      { id: "dm-terminals", title: "终端管理", titleEn: "Terminals", path: "/device-management/terminals" },
      { id: "dm-binding", title: "绑定与授权", titleEn: "Binding & authorization", path: "/device-management/binding" },
      { id: "dm-alerts", title: "监控告警", titleEn: "Monitoring & alerts", path: "/device-management/alerts" },
    ],
  },
  {
    id: "inventory-ordering",
    title: "订货与库存",
    titleEn: "Inventory & ordering",
    icon: "inventory",
    path: "/operations/inventory-ordering",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/inventory-ordering",
    children: [
      {
        id: "inv-main",
        title: "订货与库存",
        path: "/operations/inventory-ordering",
        chainOnly: true,
      },
    ],
  },
  {
    id: "store-patrol",
    title: "巡店与巡检",
    titleEn: "Store patrol",
    icon: "patrol",
    path: "/operations/store-patrol",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/store-patrol",
    children: [
      { id: "patrol-main", title: "巡店与巡检", path: "/operations/store-patrol", chainOnly: true },
    ],
  },
  {
    id: "promotions",
    title: "促销",
    titleEn: "Promotions",
    icon: "promo",
    path: "/promotions",
    subNavPlacement: "sidebar",
    defaultChildPath: "/promotions/campaigns",
    children: [{ id: "promo-campaigns", title: "促销管理", path: "/promotions/campaigns" }],
  },
  {
    id: "marketing",
    title: "营销",
    titleEn: "Marketing",
    icon: "marketing",
    path: "/marketing",
    subNavPlacement: "sidebar",
    defaultChildPath: "/marketing/ai/ads",
    children: [
      { id: "mkt-ai-ads", title: "广告智投", path: "/marketing/ai/ads" },
      { id: "mkt-ai-social", title: "社媒营销", path: "/marketing/ai/social" },
      { id: "mkt-ai-creative", title: "创意素材", path: "/marketing/ai/creative" },
    ],
  },
  {
    id: "members",
    title: "会员",
    titleEn: "Loyalty",
    icon: "members",
    path: "/members",
    subNavPlacement: "sidebar",
    defaultChildPath: "/members/settings",
    children: [
      { id: "mem-settings", title: "会员设置", path: "/members/settings" },
      { id: "mem-benefits", title: "会员福利活动", path: "/members/benefits" },
      { id: "mem-coupons", title: "会员优惠券", path: "/members/coupons" },
      { id: "mem-list", title: "会员列表", path: "/members/list" },
      { id: "mem-targeting", title: "精准触达", path: "/members/targeting" },
      { id: "mem-360", title: "会员 360 洞察", path: "/members/insights-360" },
    ],
  },
  {
    id: "reviews",
    title: "评价",
    titleEn: "Reviews",
    icon: "reviews",
    path: "/reviews",
    subNavPlacement: "sidebar",
    defaultChildPath: "/reviews/insights",
    children: [
      { id: "rev-insights", title: "评价洞察", path: "/reviews/insights" },
      { id: "rev-settings", title: "评价设置", path: "/reviews/settings" },
      { id: "rev-detail", title: "评价明细", path: "/reviews/detail" },
      { id: "rev-stats", title: "评价统计", path: "/reviews/stats" },
    ],
  },
  {
    id: "gift-cards",
    title: "礼品卡",
    titleEn: "Gift Cards",
    icon: "gift",
    path: "/gift-cards",
    subNavPlacement: "sidebar",
    defaultChildPath: "/gift-cards/design",
    children: [
      { id: "gc-design", title: "卡面设计", path: "/gift-cards/design" },
      { id: "gc-templates", title: "模板管理", path: "/gift-cards/templates" },
    ],
  },
  {
    id: "team",
    title: "团队管理",
    titleEn: "Team",
    icon: "team",
    path: "/team",
    subNavPlacement: "sidebar",
    defaultChildPath: "/team/roles-employees",
    children: [
      { id: "team-roles", title: "角色与员工", path: "/team/roles-employees" },
      { id: "team-breaks", title: "休息与加班", path: "/team/breaks-overtime" },
      { id: "team-clock", title: "员工打卡", path: "/team/clock-in" },
      { id: "team-tips", title: "小费管理", path: "/team/tips" },
      { id: "team-reports", title: "员工报表", path: "/team/reports" },
      { id: "team-7shifts", title: "7Shifts 对接（排班）", path: "/team/integrations/7shifts" },
      {
        id: "team-schedule",
        title: "排班与考勤",
        path: "/team/scheduling",
        chainOnly: true,
      },
      { id: "team-training", title: "绩效与培训", path: "/team/training-performance" },
    ],
  },
  {
    id: "reports-finance",
    title: "报表与财务",
    titleEn: "Reports & Finance",
    icon: "reports",
    path: "/reports",
    subNavPlacement: "sidebar",
    defaultChildPath: "/reports/revenue",
    children: [
      { id: "rpt-revenue", title: "收入报表", path: "/reports/revenue" },
      { id: "rpt-revenue-detail", title: "收入明细", path: "/reports/revenue-detail" },
      { id: "rpt-meal-period", title: "餐段分析", path: "/reports/meal-period" },
      { id: "rpt-menu", title: "菜品分析", path: "/reports/menu-analysis" },
      { id: "rpt-waste", title: "损耗报表", path: "/reports/waste" },
      { id: "rpt-drawer", title: "钱箱报表", path: "/reports/cash-drawer" },
      { id: "rpt-tx-anomaly", title: "交易异常报表", path: "/reports/transaction-anomalies" },
      { id: "rpt-gift", title: "礼品卡报表", path: "/reports/gift-cards" },
      { id: "rpt-member", title: "会员报表", path: "/reports/members" },
      { id: "rpt-coupons", title: "优惠券报表", path: "/reports/coupons" },
      { id: "rpt-monthly", title: "月结单", path: "/reports/monthly-statement" },
      { id: "rpt-payout-fees", title: "打款与费用报表", path: "/reports/payout-fees" },
    ],
  },
  {
    id: "payment-services",
    title: "支付服务",
    titleEn: "Payment services",
    icon: "paymentService",
    path: "/payment-services",
    subNavPlacement: "sidebar",
    defaultChildPath: "/payment-services/overview",
    children: [
      { id: "pay-overview", title: "支付概览", titleEn: "Overview", path: "/payment-services/overview" },
      { id: "pay-channels", title: "支付渠道", titleEn: "Payment channels", path: "/payment-services/channels" },
      { id: "pay-settlement", title: "结算与到账", titleEn: "Settlement", path: "/payment-services/settlement" },
      { id: "pay-risk", title: "风控与争议", titleEn: "Risk & disputes", path: "/payment-services/risk-disputes" },
    ],
  },
  {
    id: "notifications",
    title: "消息通知",
    titleEn: "Notifications",
    icon: "notifications",
    path: "/notifications",
    subNavPlacement: "sidebar",
    defaultChildPath: "/notifications/center",
    children: [
      { id: "notif-center", title: "消息中心", titleEn: "Inbox", path: "/notifications/center" },
      { id: "notif-settings", title: "通知设置", titleEn: "Preferences", path: "/notifications/settings" },
      { id: "notif-templates", title: "模板与订阅", titleEn: "Templates & subscriptions", path: "/notifications/templates" },
    ],
  },
  {
    id: "print-templates",
    title: "打印模板",
    titleEn: "Print templates",
    icon: "printTemplate",
    path: "/print-templates",
    subNavPlacement: "sidebar",
    defaultChildPath: "/print-templates/list",
    children: [
      { id: "pt-list", title: "模板列表", titleEn: "Template list", path: "/print-templates/list" },
      { id: "pt-designer", title: "模板设计", titleEn: "Template designer", path: "/print-templates/designer" },
    ],
  },
  {
    id: "capital-turnover",
    title: "资金周转",
    titleEn: "Capital",
    icon: "capital",
    path: "/reports/capital",
    subNavPlacement: "tabs",
    defaultChildPath: "/reports/capital",
    children: [
      { id: "capital-main", title: "资金周转", titleEn: "Capital", path: "/reports/capital" },
    ],
  },
  {
    id: "settings",
    title: "设置",
    titleEn: "Settings",
    icon: "settings",
    path: "/settings",
    subNavPlacement: "tabs",
    defaultChildPath: "/settings/overview",
    children: [
      { id: "set-overview", title: "设置总揽", titleEn: "Settings overview", path: "/settings/overview" },
      { id: "set-basic", title: "基础设置（门店、营业时间、多门店）", path: "/settings/basic" },
      { id: "set-report", title: "报表设置", path: "/settings/reports" },
      { id: "set-print", title: "打印与票据", path: "/settings/printing" },
      { id: "set-tips", title: "小费设置", path: "/settings/tips" },
      { id: "set-service", title: "服务流程", path: "/settings/service-flow" },
      { id: "set-security", title: "安全设置", path: "/settings/security" },
      { id: "set-accounts", title: "账号与权限", path: "/settings/accounts" },
      { id: "set-audit", title: "操作日志", path: "/settings/audit-log" },
      { id: "set-integrations", title: "集成与 API", path: "/settings/integrations" },
      {
        id: "set-data-scope",
        title: "角色与数据范围",
        path: "/settings/data-scope",
        chainOnly: true,
      },
    ],
  },
];

/** 设备管理 →「硬件」：主内容区左侧细项（路由 `/device-management/hardware/...`，交互对齐 Kiosk 点餐左侧导航） */
export interface DeviceManagementHardwareSubItem {
  id: string;
  title: string;
  titleEn: string;
  path: string;
}

export const DEVICE_MANAGEMENT_HARDWARE_SUBNAV: DeviceManagementHardwareSubItem[] = [
  { id: "dmh-payments", title: "支付", titleEn: "Payments", path: "/device-management/hardware/payments" },
  { id: "dmh-cash-drawer", title: "钱箱", titleEn: "Cash drawer", path: "/device-management/hardware/cash-drawer" },
  { id: "dmh-router", title: "路由器", titleEn: "Router", path: "/device-management/hardware/router" },
  { id: "dmh-pos", title: "POS", titleEn: "POS", path: "/device-management/hardware/pos" },
  { id: "dmh-pos-go", title: "POS GO", titleEn: "POS Go", path: "/device-management/hardware/pos-go" },
  { id: "dmh-kds", title: "KDS", titleEn: "KDS", path: "/device-management/hardware/kds" },
  { id: "dmh-queue-display", title: "叫号屏", titleEn: "Queue display", path: "/device-management/hardware/queue-display" },
  { id: "dmh-printers", title: "打印机", titleEn: "Printers", path: "/device-management/hardware/printers" },
  { id: "dmh-kiosk", title: "Kiosk", titleEn: "Kiosk", path: "/device-management/hardware/kiosk" },
  { id: "dmh-emenu", title: "eMenu", titleEn: "eMenu devices", path: "/device-management/hardware/emenu" },
];

export function getDeviceManagementHardwareDefaultPath(): string {
  return DEVICE_MANAGEMENT_HARDWARE_SUBNAV[0]?.path ?? "/device-management/hardware/payments";
}

export function getActiveDeviceManagementHardwareSubPath(path: string): string {
  const sorted = [...DEVICE_MANAGEMENT_HARDWARE_SUBNAV].sort((a, b) => b.path.length - a.path.length);
  for (const c of sorted) {
    if (path === c.path || path.startsWith(`${c.path}/`)) return c.path;
  }
  return "";
}

export function isDeviceManagementHardwarePath(path: string): boolean {
  return getActiveDeviceManagementHardwareSubPath(path) !== "";
}

/**
 * 设置总揽：硬件与终端快捷入口，与「设备管理 → 硬件」路径一致（避免与已移除的一级「设备」`/operations/devices` 重复维护）。
 */
export const SETTINGS_OVERVIEW_DEVICE_LINKS: { id: string; title: string; titleEn: string; path: string }[] =
  DEVICE_MANAGEMENT_HARDWARE_SUBNAV.map((item) => ({
    id: `so-${item.id}`,
    title: item.title,
    titleEn: item.titleEn,
    path: item.path,
  }));

/** POS 点餐：智能点餐 Tab 内左侧三级导航（路由 `/ordering/pos/...`） */
export interface PosOrderingSubItem {
  id: string;
  title: string;
  titleEn?: string;
  path: string;
}

export const POS_ORDERING_SUBNAV: PosOrderingSubItem[] = [
  { id: "pos-basic-settings", title: "基础设置", titleEn: "Basic settings", path: "/ordering/pos/basic-settings" },
  { id: "pos-ui-settings", title: "界面设置", titleEn: "UI settings", path: "/ordering/pos/ui-settings" },
  { id: "pos-button-settings", title: "按钮设置", titleEn: "Button settings", path: "/ordering/pos/button-settings" },
  { id: "pos-multi-language", title: "多语言", titleEn: "Multi-language", path: "/ordering/pos/multi-language" },
];

export function getPosOrderingDefaultPath(): string {
  return POS_ORDERING_SUBNAV[0]?.path ?? "/ordering/pos";
}

export function getActivePosOrderingSubPath(path: string): string {
  const sorted = [...POS_ORDERING_SUBNAV].sort((a, b) => b.path.length - a.path.length);
  for (const c of sorted) {
    if (path === c.path || path.startsWith(`${c.path}/`)) return c.path;
  }
  return "";
}

export function isPosOrderingTertiaryPath(path: string): boolean {
  return getActivePosOrderingSubPath(path) !== "";
}

/** PayPad 点餐：智能点餐 Tab 内左侧三级导航（路由 `/ordering/paypad/...`） */
export interface PaypadOrderingSubItem {
  id: string;
  title: string;
  titleEn?: string;
  path: string;
}

export const PAYPAD_ORDERING_SUBNAV: PaypadOrderingSubItem[] = [
  { id: "paypad-tips", title: "小费", titleEn: "Tips", path: "/ordering/paypad/tips" },
  { id: "paypad-signature", title: "签名", titleEn: "Signature", path: "/ordering/paypad/signature" },
  { id: "paypad-receipt", title: "收据", titleEn: "Receipt", path: "/ordering/paypad/receipt" },
];

export function getPaypadOrderingDefaultPath(): string {
  return PAYPAD_ORDERING_SUBNAV[0]?.path ?? "/ordering/paypad";
}

export function getActivePaypadOrderingSubPath(path: string): string {
  const sorted = [...PAYPAD_ORDERING_SUBNAV].sort((a, b) => b.path.length - a.path.length);
  for (const c of sorted) {
    if (path === c.path || path.startsWith(`${c.path}/`)) return c.path;
  }
  return "";
}

export function isPaypadOrderingTertiaryPath(path: string): boolean {
  return getActivePaypadOrderingSubPath(path) !== "";
}

/** 客显系统管理：主内容区左侧三级导航（路由 `/operations/customer-display/...`） */
export interface CustomerDisplaySubItem {
  id: string;
  title: string;
  titleEn?: string;
  path: string;
}

export const CUSTOMER_DISPLAY_SUBNAV: CustomerDisplaySubItem[] = [
  { id: "cd-cover", title: "封面图", titleEn: "Cover image", path: "/operations/customer-display/cover-image" },
  { id: "cd-multi-language", title: "多语言", titleEn: "Multi-language", path: "/operations/customer-display/multi-language" },
  { id: "cd-tips", title: "小费", titleEn: "Tips", path: "/operations/customer-display/tips" },
  { id: "cd-signature", title: "签名", titleEn: "Signature", path: "/operations/customer-display/signature" },
  { id: "cd-receipt", title: "小票", titleEn: "Receipt ticket", path: "/operations/customer-display/receipt" },
];

export function getCustomerDisplayDefaultPath(): string {
  return CUSTOMER_DISPLAY_SUBNAV[0]?.path ?? "/operations/customer-display";
}

export function getActiveCustomerDisplaySubPath(path: string): string {
  const sorted = [...CUSTOMER_DISPLAY_SUBNAV].sort((a, b) => b.path.length - a.path.length);
  for (const c of sorted) {
    if (path === c.path || path.startsWith(`${c.path}/`)) return c.path;
  }
  return "";
}

export function isCustomerDisplayTertiaryPath(path: string): boolean {
  return getActiveCustomerDisplaySubPath(path) !== "";
}

/** Kiosk 点餐：智能点餐 Tab 内左侧三级导航（路由 `/ordering/kiosk/...`） */
export interface KioskOrderingSubItem {
  id: string;
  title: string;
  titleEn?: string;
  path: string;
}

export const KIOSK_ORDERING_SUBNAV: KioskOrderingSubItem[] = [
  { id: "kiosk-order-types", title: "订单类型", titleEn: "Order types", path: "/ordering/kiosk/order-types" },
  { id: "kiosk-tip-settings", title: "小费设置", titleEn: "Tip settings", path: "/ordering/kiosk/tip-settings" },
  { id: "kiosk-receipt-settings", title: "收据设置", titleEn: "Receipt settings", path: "/ordering/kiosk/receipt-settings" },
  { id: "kiosk-user-info", title: "用户信息", titleEn: "User profile", path: "/ordering/kiosk/user-info" },
  { id: "kiosk-payment", title: "支付", titleEn: "Payment", path: "/ordering/kiosk/payment" },
  { id: "kiosk-language", title: "语言", titleEn: "Language", path: "/ordering/kiosk/language" },
  { id: "kiosk-menu", title: "菜单", titleEn: "Menu", path: "/ordering/kiosk/menu" },
  { id: "kiosk-menu-tags", title: "菜单标签", titleEn: "Menu tags", path: "/ordering/kiosk/menu-tags" },
  { id: "kiosk-local-promotions", title: "本地促销", titleEn: "Local promotions", path: "/ordering/kiosk/local-promotions" },
  { id: "kiosk-display-settings", title: "展示设置", titleEn: "Display settings", path: "/ordering/kiosk/display-settings" },
  { id: "kiosk-wait-time", title: "等待时间", titleEn: "Wait time", path: "/ordering/kiosk/wait-time" },
  { id: "kiosk-table-settings", title: "桌子设置", titleEn: "Table settings", path: "/ordering/kiosk/table-settings" },
  { id: "kiosk-platform-settings", title: "平台设置", titleEn: "Platform settings", path: "/ordering/kiosk/platform-settings" },
  { id: "kiosk-product-integration", title: "产品对接", titleEn: "Product integration", path: "/ordering/kiosk/product-integration" },
  { id: "kiosk-cover-image", title: "封面图", titleEn: "Cover image", path: "/ordering/kiosk/cover-image" },
  { id: "kiosk-poster", title: "海报", titleEn: "Poster", path: "/ordering/kiosk/poster" },
  { id: "kiosk-poster-pro", title: "海报Pro", titleEn: "Poster Pro", path: "/ordering/kiosk/poster-pro" },
  { id: "kiosk-screensaver", title: "屏保", titleEn: "Screensaver", path: "/ordering/kiosk/screensaver" },
  { id: "kiosk-login-guide", title: "登录引导图", titleEn: "Login guide", path: "/ordering/kiosk/login-guide" },
  { id: "kiosk-surcharge", title: "附加费", titleEn: "Surcharge", path: "/ordering/kiosk/surcharge" },
  { id: "kiosk-brand-settings", title: "品牌设置", titleEn: "Brand settings", path: "/ordering/kiosk/brand-settings" },
  { id: "kiosk-device-management", title: "设备管理", titleEn: "Device management", path: "/ordering/kiosk/device-management" },
];

export function getKioskOrderingDefaultPath(): string {
  return KIOSK_ORDERING_SUBNAV[0]?.path ?? "/ordering/kiosk";
}

/** eMenu 点餐：智能点餐 Tab 内左侧三级导航（路由 `/ordering/tablet/...`） */
export interface EmenuOrderingSubItem {
  id: string;
  title: string;
  titleEn?: string;
  path: string;
}

export const EMENU_ORDERING_SUBNAV: EmenuOrderingSubItem[] = [
  { id: "em-device-management", title: "设备管理", titleEn: "Device management", path: "/ordering/tablet/device-management" },
  { id: "em-permission-settings", title: "权限设置", titleEn: "Permission settings", path: "/ordering/tablet/permission-settings" },
  { id: "em-prompt-messages", title: "提示信息", titleEn: "Prompt messages", path: "/ordering/tablet/prompt-messages" },
  { id: "em-order-settings", title: "下单设置", titleEn: "Order settings", path: "/ordering/tablet/order-settings" },
  { id: "em-display-settings", title: "展示设置", titleEn: "Display settings", path: "/ordering/tablet/display-settings" },
  { id: "em-user-info", title: "用户信息", titleEn: "User profile", path: "/ordering/tablet/user-info" },
  { id: "em-tag-settings", title: "标签设置", titleEn: "Tag settings", path: "/ordering/tablet/tag-settings" },
  { id: "em-notifications", title: "消息通知", titleEn: "Notifications", path: "/ordering/tablet/notifications" },
  { id: "em-waiter-settings", title: "服务员设置", titleEn: "Waiter settings", path: "/ordering/tablet/waiter-settings" },
  { id: "em-menu-style", title: "菜单样式", titleEn: "Menu style", path: "/ordering/tablet/menu-style" },
  { id: "em-menu-pro", title: "菜单Pro", titleEn: "Menu Pro", path: "/ordering/tablet/menu-pro" },
  { id: "em-auth-settings", title: "授权设置", titleEn: "Authorization settings", path: "/ordering/tablet/auth-settings" },
  { id: "em-lottery-campaign", title: "抽奖活动", titleEn: "Lottery campaign", path: "/ordering/tablet/lottery-campaign" },
  { id: "em-poster", title: "海报", titleEn: "Poster", path: "/ordering/tablet/poster" },
  { id: "em-membership", title: "权益会员", titleEn: "Membership benefits", path: "/ordering/tablet/membership-benefits" },
  { id: "em-home-video", title: "首页视频", titleEn: "Home video", path: "/ordering/tablet/home-video" },
  { id: "em-home-bg", title: "首页背景图", titleEn: "Home background image", path: "/ordering/tablet/home-background" },
  { id: "em-multi-language", title: "多语言", titleEn: "Multi-language", path: "/ordering/tablet/multi-language" },
  { id: "em-receipt", title: "收据", titleEn: "Receipt", path: "/ordering/tablet/receipt" },
  { id: "em-menu-category-item", title: "菜单品类设置", titleEn: "Menu category item settings", path: "/ordering/tablet/menu-category-item-settings" },
  { id: "em-menu-category", title: "菜单分类设置", titleEn: "Menu category settings", path: "/ordering/tablet/menu-category-settings" },
];

export function getEmenuOrderingDefaultPath(): string {
  return EMENU_ORDERING_SUBNAV[0]?.path ?? "/ordering/tablet";
}

export function getActiveEmenuOrderingSubPath(path: string): string {
  const sorted = [...EMENU_ORDERING_SUBNAV].sort((a, b) => b.path.length - a.path.length);
  for (const c of sorted) {
    if (path === c.path || path.startsWith(`${c.path}/`)) return c.path;
  }
  return "";
}

export function isEmenuOrderingTertiaryPath(path: string): boolean {
  return getActiveEmenuOrderingSubPath(path) !== "";
}

/** 门店信息 →「门店基础信息」内左侧三级导航（路由 `/store/basic`、`/store/logo`、`/store/business-hours` 等） */
export interface StoreBasicSubItem {
  id: string;
  title: string;
  titleEn?: string;
  path: string;
}

export const STORE_BASIC_SUBNAV: StoreBasicSubItem[] = [
  { id: "sb-basic", title: "基础信息", titleEn: "Store profile", path: "/store/basic" },
  { id: "sb-logo", title: "LOGO", titleEn: "Logo", path: "/store/logo" },
  { id: "sb-hours", title: "营业时间", titleEn: "Business hours", path: "/store/business-hours" },
];

/** 当前路径落在门店基础信息三级区时，返回匹配的子项 path（最长前缀） */
export function getActiveStoreBasicSubPath(path: string): string {
  const sorted = [...STORE_BASIC_SUBNAV].sort((a, b) => b.path.length - a.path.length);
  for (const c of sorted) {
    if (path === c.path || path.startsWith(`${c.path}/`)) return c.path;
  }
  return "";
}

export function isStoreBasicTertiaryPath(path: string): boolean {
  return getActiveStoreBasicSubPath(path) !== "";
}

export function getStoreBasicDefaultPath(): string {
  return STORE_BASIC_SUBNAV[0]?.path ?? "/store/basic";
}

/** 菜单 →「税种管理」内左侧三级导航 */
export interface MenuTaxTypesSubItem {
  id: string;
  title: string;
  titleEn?: string;
  path: string;
}

export const MENU_TAX_TYPES_SUBNAV: MenuTaxTypesSubItem[] = [
  { id: "mt-tax-settings", title: "税种设置", titleEn: "Tax type settings", path: "/menu/tax-types/settings" },
  { id: "mt-product-tax", title: "商品税设置", titleEn: "Product tax settings", path: "/menu/tax-types/product-tax" },
];

export function getActiveMenuTaxSubPath(path: string): string {
  const sorted = [...MENU_TAX_TYPES_SUBNAV].sort((a, b) => b.path.length - a.path.length);
  for (const c of sorted) {
    if (path === c.path || path.startsWith(`${c.path}/`)) return c.path;
  }
  return "";
}

export function isMenuTaxTertiaryPath(path: string): boolean {
  return getActiveMenuTaxSubPath(path) !== "";
}

/** 扁平化所有路径（用于校验 / 生成 sitemap） */
export function flattenNavPaths(modules: NavModule[] = NAV_MODULES): string[] {
  const out: string[] = [];
  for (const m of modules) {
    out.push(m.path);
    for (const c of m.children) out.push(c.path);
  }
  for (const k of KIOSK_ORDERING_SUBNAV) out.push(k.path);
  for (const p of POS_ORDERING_SUBNAV) out.push(p.path);
  for (const pp of PAYPAD_ORDERING_SUBNAV) out.push(pp.path);
  for (const e of EMENU_ORDERING_SUBNAV) out.push(e.path);
  for (const s of STORE_BASIC_SUBNAV) out.push(s.path);
  for (const t of MENU_TAX_TYPES_SUBNAV) out.push(t.path);
  for (const d of DEVICE_MANAGEMENT_HARDWARE_SUBNAV) out.push(d.path);
  return out;
}
