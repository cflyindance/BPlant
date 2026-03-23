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
    | "hardware"
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
    | "settings";
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
    subNavPlacement: "tabs",
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
    defaultChildPath: "/menu/groups",
    children: [
      { id: "menu-groups", title: "菜单与分组", path: "/menu/groups" },
      { id: "menu-items", title: "菜品与加料", path: "/menu/items" },
      { id: "menu-availability", title: "按渠道与门店可用性", path: "/menu/availability" },
    ],
  },
  {
    id: "ordering-channels",
    title: "智能点餐",
    titleEn: "Smart ordering",
    icon: "channels",
    path: "/ordering",
    subNavPlacement: "sidebar",
    defaultChildPath: "/ordering/pos",
    children: [
      { id: "oc-pos", title: "POS点餐", titleEn: "POS ordering", path: "/ordering/pos" },
      { id: "oc-pos-go", title: "POS GO点餐", titleEn: "POS Go ordering", path: "/ordering/pos-go" },
      { id: "oc-paypad", title: "PayPad点餐", titleEn: "PayPad ordering", path: "/ordering/paypad" },
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
    title: "厨显",
    titleEn: "Kitchen display",
    icon: "kitchenKds",
    path: "/operations/kitchen-kds",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/kitchen-kds",
    children: [
      { id: "kds-main", title: "厨显设置", titleEn: "Kitchen display settings", path: "/operations/kitchen-kds" },
    ],
  },
  {
    id: "customer-display",
    title: "客显",
    titleEn: "Customer display",
    icon: "customerDisplay",
    path: "/operations/customer-display",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/customer-display",
    children: [{ id: "cd-main", title: "客显", titleEn: "Customer display", path: "/operations/customer-display" }],
  },
  {
    id: "queue-call",
    title: "叫号",
    titleEn: "Queue & calling",
    icon: "queueCall",
    path: "/operations/queue-call",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/queue-call",
    children: [{ id: "qc-main", title: "叫号", titleEn: "Queue & calling", path: "/operations/queue-call" }],
  },
  {
    id: "reservations",
    title: "预约",
    titleEn: "Reservations",
    icon: "reservations",
    path: "/operations/reservations",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/reservations",
    children: [
      { id: "res-main", title: "预约", titleEn: "Reservations", path: "/operations/reservations" },
    ],
  },
  {
    id: "waitlist",
    title: "排队",
    titleEn: "Waitlist",
    icon: "waitlist",
    path: "/operations/waitlist",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/waitlist",
    children: [{ id: "wl-main", title: "排队", titleEn: "Waitlist", path: "/operations/waitlist" }],
  },
  {
    id: "devices",
    title: "设备",
    titleEn: "Devices",
    icon: "hardware",
    path: "/operations/devices",
    subNavPlacement: "tabs",
    defaultChildPath: "/operations/devices",
    children: [
      { id: "dev-overview", title: "设备", titleEn: "Overview", path: "/operations/devices" },
      { id: "dev-payments", title: "支付", titleEn: "Payments", path: "/operations/devices/payments" },
      { id: "dev-cash-drawer", title: "钱箱", titleEn: "Cash drawer", path: "/operations/devices/cash-drawer" },
      { id: "dev-router", title: "路由器", titleEn: "Router", path: "/operations/devices/router" },
      { id: "dev-pos", title: "POS", path: "/operations/devices/pos" },
      { id: "dev-pos-go", title: "POS GO", titleEn: "POS Go", path: "/operations/devices/pos-go" },
      { id: "dev-kds", title: "KDS", path: "/operations/devices/kds" },
      { id: "dev-queue-display", title: "叫号屏", titleEn: "Queue display", path: "/operations/devices/queue-display" },
      { id: "dev-printers", title: "打印机", titleEn: "Printers", path: "/operations/devices/printers" },
      { id: "dev-kiosk", title: "Kiosk", path: "/operations/devices/kiosk" },
      { id: "dev-emenu", title: "eMenu", titleEn: "eMenu devices", path: "/operations/devices/emenu" },
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
    defaultChildPath: "/settings/basic",
    children: [
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

/** 扁平化所有路径（用于校验 / 生成 sitemap） */
export function flattenNavPaths(modules: NavModule[] = NAV_MODULES): string[] {
  const out: string[] = [];
  for (const m of modules) {
    out.push(m.path);
    for (const c of m.children) out.push(c.path);
  }
  for (const k of KIOSK_ORDERING_SUBNAV) out.push(k.path);
  for (const s of STORE_BASIC_SUBNAV) out.push(s.path);
  return out;
}
