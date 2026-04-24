import "./styles/app.css";
import {
  NAV_MODULES,
  PRODUCT_CENTER_DEEP_NAV,
  type NavModule,
  type ProductCenterSidebarSubItem,
  MENU_TAX_TYPES_SUBNAV,
  getActiveMenuTaxSubPath,
  BRAND_PRODUCTS_SUBNAV,
  getActiveBrandProductsSubPath,
  isBrandProductsTertiaryPath,
  BRAND_MENU_SUBNAV,
  getActiveBrandMenuSubPath,
  isBrandMenuTertiaryPath,
  STORE_MENU_SUBNAV,
  getActiveStoreMenuSubPath,
  isStoreMenuTertiaryPath,
  BRAND_SEASONING_MGMT_SUBNAV,
  getBrandSeasoningMgmtDefaultPath,
  getActiveBrandSeasoningMgmtSubPath,
  BRAND_TAGS_MGMT_SUBNAV,
  getBrandTagsMgmtDefaultPath,
  getActiveBrandTagsMgmtSubPath,
  BRAND_RECIPES_MGMT_SUBNAV,
  getBrandRecipesMgmtDefaultPath,
  getActiveBrandRecipesMgmtSubPath,
  SETTINGS_OVERVIEW_DEVICE_LINKS,
  DEVICE_MANAGEMENT_HARDWARE_SUBNAV,
  getActiveDeviceManagementHardwareSubPath,
  isDeviceManagementHardwarePath,
  getDeviceManagementHardwareDefaultPath,
  TIPS_MANAGEMENT_SUBNAV,
  getTipsManagementDefaultPath,
  getActiveTipsManagementSubPath,
  isTipsManagementTertiaryPath,
  TEAM_REPORTS_SUBNAV,
  getTeamReportsDefaultPath,
  getActiveTeamReportsSubPath,
  isTeamReportsTertiaryPath,
  TEAM_SCHEDULING_SUBNAV,
  getTeamSchedulingDefaultPath,
  getActiveTeamSchedulingSubPath,
  isTeamSchedulingTertiaryPath,
} from "./config/navigation";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** 演示用：接入大模型与业务 API 后替换为真实推理 */
function aiAssistantMockReply(query: string): string {
  const q = query.trim();
  if (!q) return "";
  if (/权限|角色|RBAC|员工授权/i.test(q)) {
    return "【演示】可说明权限矩阵、员工与角色绑定，并在对接后端后协助跳转「权限管理中心」与预填变更。也可回答例如：谁能改价、店长默认可见哪些报表。";
  }
  if (/搜索|查找|搜|哪里有|在哪/i.test(q)) {
    return "【演示】全站检索由同一智能体完成：可定位侧栏模块、路由、帮助文档与业务对象（订单、门店、商品等）。接入索引与向量库后支持口语化问法。";
  }
  if (/分析|报表|趋势|统计|营业额|收入/i.test(q)) {
    return "【演示】可按您描述的时间、门店、品类做对比与摘要；接入数仓后可拉取真实指标、生成图表与下钻链接。";
  }
  if (/配置|设置|修改|改|打开|关闭/i.test(q)) {
    return "【演示】配置类意图会解析为「目标模块 + 动作」，走策略校验与（可选）人工审批后再执行。当前壳层仅模拟确认，不写回生产。";
  }
  return "【演示】单一智能体持续本对话上下文，接入模型后可执行查数、改配、导表与权限调整（受租户策略约束）。请补充门店、时间范围或要操作的对象。";
}

/** 顶栏全局 AI 入口（非侧栏一级模块，故不放入 NAV_MODULES / ICONS） */
const AI_ASSISTANT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`;

const ICONS: Record<NavModule["icon"], string> = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  orders: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  receipt: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>`,
  floorPlan: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>`,
  kitchenKds: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13h12"/><path d="M6 9h12"/><path d="M9 5h6v4H9z"/><path d="M8 21h8v-4H8z"/></svg>`,
  queueCall: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  reservations: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  waitlist: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>`,
  inventory: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  promo: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><path d="M11.5 11.5 6 17l-4 1 1-4 5.5-5.5"/></svg>`,
  marketing: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  members: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  reviews: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>`,
  gift: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>`,
  team: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  reports: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  capital: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>`,
  financeCenter: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  notifications: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  printTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>`,
  deviceManagement: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="5" x="4" y="4" rx="1"/><rect width="16" height="5" x="4" y="15" rx="1"/><path d="M8 8h.01"/><path d="M8 19h.01"/><path d="M12 8h.01"/><path d="M12 19h.01"/><path d="M16 8h.01"/><path d="M16 19h.01"/></svg>`,
  brandProducts: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l6.88-6.88a1 1 0 0 0 0-1.41L12 2Z"/><path d="M7 7h.01"/></svg>`,
  brandMenu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h4"/></svg>`,
  brandMgmt: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/></svg>`,
  storeMgmt: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><path d="M17 14h1"/><path d="M17 18h1"/></svg>`,
  permissionMgmt: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  assetCenter: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  configCenter: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

/**
 * 主区内三级侧栏：列表过长时仅该列滚动；依赖 `renderMain` 中 wide 布局的 `min-h-0` 高度链。
 * 小屏为竖排时限制侧栏最大高度，避免占满屏。
 */
const TERTIARY_SUBNAV_SCROLL_CLASSES =
  "tertiary-inline-subnav-scroll min-h-0 max-h-[min(52dvh,26rem)] overflow-y-auto overscroll-y-contain sm:max-h-full sm:self-stretch";

function isProductCenterAPath(path: string): boolean {
  return path === "/product-center-a" || path.startsWith("/product-center-a/");
}

const PRODUCT_CENTER_A_IFRAME_SRC = "https://itemcenter.menusifudev.com/";

/** 商品中心（路由仍为 product-center-a）：视口全屏弹层（覆盖侧栏与主区），内嵌 Item Center */
function renderProductCenterAFullscreenModal(): string {
  const src = escapeHtml(PRODUCT_CENTER_A_IFRAME_SRC);
  return `<div
      id="product-center-a-dialog"
      class="fixed inset-0 z-[200] flex animate-fade-in flex-col bg-background shadow-2xl ring-1 ring-border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-center-a-title"
      tabindex="-1"
    >
      <div class="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-3 sm:h-14 sm:px-4">
        <h2 id="product-center-a-title" class="min-w-0 truncate text-sm font-semibold text-card-foreground sm:text-base">商品中心</h2>
        <button
          type="button"
          id="product-center-a-close"
          class="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          关闭
        </button>
      </div>
      <div class="relative flex min-h-0 flex-1 flex-col">
        <p class="sr-only">商品中心全屏浮层内嵌外部页面。若内容空白，请确认 itemcenter.menusifudev.com 在 CSP frame-ancestors 或 X-Frame-Options 中允许被本后台来源嵌入。</p>
        <iframe
          title="商品中心"
          class="block h-full min-h-0 w-full flex-1 border-0 bg-background"
          src="${src}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`;
}

function renderProductCenterAMainUnderlay(): string {
  return `<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「商品中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`;
}

/** 促销中心：云端促销页（QA），与商品中心（Item Center 全屏浮层）相同的全屏弹层 + iframe */
const PROMOTIONS_IFRAME_SRC =
  "https://cloud.menusifucloudqa.com/promotion/promotion?businessId=000256&home=https%3A%2F%2Fcloud.menusifucloudqa.com%2FB%2Fbusiness%2Fdafbac66d38cdbead20c54b12600a8e1%3AU2FsdGVkX1-bWK4HRct-Bv54bvJ1r_HXdEKBrQflm9w%2Fmain%2Fmenu&businessName=%E5%A4%A7%E9%A3%9E%E9%B8%BD-AD--20306&S=bc9d78ad2c6890e6f1d0b6eb61e57d3a:U2FsdGVkX1-hYcysMQeABe37ytSGGFcRzBr1eChXemGqnMEFfPTtqyz80W8qRdcMzYzApzBJ0wjNZd51Wc7TSj0C1U3aFxY1qwzMSg27SYaCES2Rq90RPe0jdx_2GJSXK6-jcP1MouPm9TBaB1__XnAlMdMkf2hd0PMea7Kqd0pg-g09KeyYs-Bg8AtmI_VQdR77Rfbt3OC_xVcBfKvq7d-6hso_DmXS4N8zUei0pGkhur5bDcsa8Hh6fYnt9QOHjQ88zFidegowYYc4efIflYpMPzBifN0n71yrkdVYIBH4UIFJBbC5OMq3oU8OyPec";

function isPromotionsIframePath(path: string): boolean {
  return path === "/promotions/campaigns" || path.startsWith("/promotions/campaigns/");
}

function renderPromotionsFullscreenModal(): string {
  const src = escapeHtml(PROMOTIONS_IFRAME_SRC);
  return `<div
      id="promotions-iframe-dialog"
      class="fixed inset-0 z-[200] flex animate-fade-in flex-col bg-background shadow-2xl ring-1 ring-border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promotions-iframe-title"
      tabindex="-1"
    >
      <div class="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-3 sm:h-14 sm:px-4">
        <h2 id="promotions-iframe-title" class="min-w-0 truncate text-sm font-semibold text-card-foreground sm:text-base">促销中心</h2>
        <button
          type="button"
          id="promotions-iframe-close"
          class="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          关闭
        </button>
      </div>
      <div class="relative flex min-h-0 flex-1 flex-col">
        <p class="sr-only">促销中心全屏浮层内嵌云端促销页。若内容空白，请确认 cloud.menusifucloudqa.com 允许被本后台来源嵌入。</p>
        <iframe
          title="促销中心"
          class="block h-full min-h-0 w-full flex-1 border-0 bg-background"
          src="${src}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`;
}

function renderPromotionsMainUnderlay(): string {
  return `<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「促销中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`;
}

/** 礼品卡中心：云端礼品卡工厂（QA），与促销中心相同的全屏弹层 + iframe */
const GIFT_CARDS_IFRAME_SRC = "https://cloud.menusifucloudqa.com/factory/giftcardb";

function isGiftCardsIframePath(path: string): boolean {
  return path === "/gift-cards/design" || path.startsWith("/gift-cards/design/");
}

function renderGiftCardsFullscreenModal(): string {
  const src = escapeHtml(GIFT_CARDS_IFRAME_SRC);
  return `<div
      id="gift-cards-iframe-dialog"
      class="fixed inset-0 z-[200] flex animate-fade-in flex-col bg-background shadow-2xl ring-1 ring-border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gift-cards-iframe-title"
      tabindex="-1"
    >
      <div class="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-3 sm:h-14 sm:px-4">
        <h2 id="gift-cards-iframe-title" class="min-w-0 truncate text-sm font-semibold text-card-foreground sm:text-base">礼品卡中心</h2>
        <button
          type="button"
          id="gift-cards-iframe-close"
          class="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          关闭
        </button>
      </div>
      <div class="relative flex min-h-0 flex-1 flex-col">
        <p class="sr-only">礼品卡中心全屏浮层内嵌云端礼品卡页。若内容空白，请确认 cloud.menusifucloudqa.com 允许被本后台来源嵌入。</p>
        <iframe
          title="礼品卡中心"
          class="block h-full min-h-0 w-full flex-1 border-0 bg-background"
          src="${src}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`;
}

function renderGiftCardsMainUnderlay(): string {
  return `<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「礼品卡中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`;
}

/** 营销中心：云端营销页（QA），与促销中心相同的全屏弹层 + iframe */
const MARKETING_IFRAME_SRC = "https://cloud.menusifucloudqa.com/promotion/marketing";

function isMarketingIframePath(path: string): boolean {
  return path === "/marketing/ai/ads" || path.startsWith("/marketing/ai/ads/");
}

function renderMarketingFullscreenModal(): string {
  const src = escapeHtml(MARKETING_IFRAME_SRC);
  return `<div
      id="marketing-iframe-dialog"
      class="fixed inset-0 z-[200] flex animate-fade-in flex-col bg-background shadow-2xl ring-1 ring-border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="marketing-iframe-title"
      tabindex="-1"
    >
      <div class="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-3 sm:h-14 sm:px-4">
        <h2 id="marketing-iframe-title" class="min-w-0 truncate text-sm font-semibold text-card-foreground sm:text-base">营销中心</h2>
        <button
          type="button"
          id="marketing-iframe-close"
          class="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          关闭
        </button>
      </div>
      <div class="relative flex min-h-0 flex-1 flex-col">
        <p class="sr-only">营销中心全屏浮层内嵌云端营销页。若内容空白，请确认 cloud.menusifucloudqa.com 允许被本后台来源嵌入。</p>
        <iframe
          title="营销中心"
          class="block h-full min-h-0 w-full flex-1 border-0 bg-background"
          src="${src}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`;
}

function renderMarketingMainUnderlay(): string {
  return `<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「营销中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`;
}

/** 报表中心：云端报表（QA），与促销中心相同的全屏弹层 + iframe（不含信贷中心 `/reports/capital`） */
const REPORTS_IFRAME_SRC = "https://cloud.menusifucloudqa.com/report";

function isReportsIframePath(path: string): boolean {
  if (path === "/reports/capital" || path.startsWith("/reports/capital/")) return false;
  return path === "/reports" || path === "/reports/" || path.startsWith("/reports/");
}

function renderReportsFullscreenModal(): string {
  const src = escapeHtml(REPORTS_IFRAME_SRC);
  return `<div
      id="reports-iframe-dialog"
      class="fixed inset-0 z-[200] flex animate-fade-in flex-col bg-background shadow-2xl ring-1 ring-border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reports-iframe-title"
      tabindex="-1"
    >
      <div class="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-3 sm:h-14 sm:px-4">
        <h2 id="reports-iframe-title" class="min-w-0 truncate text-sm font-semibold text-card-foreground sm:text-base">报表中心</h2>
        <button
          type="button"
          id="reports-iframe-close"
          class="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          关闭
        </button>
      </div>
      <div class="relative flex min-h-0 flex-1 flex-col">
        <p class="sr-only">报表中心全屏浮层内嵌云端报表页。若内容空白，请确认 cloud.menusifucloudqa.com 允许被本后台来源嵌入。</p>
        <iframe
          title="报表中心"
          class="block h-full min-h-0 w-full flex-1 border-0 bg-background"
          src="${src}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`;
}

function renderReportsMainUnderlay(): string {
  return `<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「报表中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`;
}

/** 会员中心：云端优惠券/会员相关页（QA），与促销中心相同的全屏弹层 + iframe */
const MEMBERS_IFRAME_SRC = "https://cloud.menusifucloudqa.com/promotion/coupon";

function isMembersIframePath(path: string): boolean {
  return path === "/members" || path === "/members/" || path.startsWith("/members/");
}

function renderMembersFullscreenModal(): string {
  const src = escapeHtml(MEMBERS_IFRAME_SRC);
  return `<div
      id="members-iframe-dialog"
      class="fixed inset-0 z-[200] flex animate-fade-in flex-col bg-background shadow-2xl ring-1 ring-border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="members-iframe-title"
      tabindex="-1"
    >
      <div class="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-3 sm:h-14 sm:px-4">
        <h2 id="members-iframe-title" class="min-w-0 truncate text-sm font-semibold text-card-foreground sm:text-base">会员中心</h2>
        <button
          type="button"
          id="members-iframe-close"
          class="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          关闭
        </button>
      </div>
      <div class="relative flex min-h-0 flex-1 flex-col">
        <p class="sr-only">会员中心全屏浮层内嵌云端页面。若内容空白，请确认 cloud.menusifucloudqa.com 允许被本后台来源嵌入。</p>
        <iframe
          title="会员中心"
          class="block h-full min-h-0 w-full flex-1 border-0 bg-background"
          src="${src}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`;
}

function renderMembersMainUnderlay(): string {
  return `<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「会员中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`;
}

/** 打印中心：printing.menusifuchina.com，与促销中心相同的全屏弹层 + iframe */
const PRINT_CENTER_IFRAME_SRC = "https://printing.menusifuchina.com/";

function isPrintCenterIframePath(path: string): boolean {
  return (
    path === "/print-templates" ||
    path === "/print-templates/" ||
    path.startsWith("/print-templates/")
  );
}

function renderPrintCenterFullscreenModal(): string {
  const src = escapeHtml(PRINT_CENTER_IFRAME_SRC);
  return `<div
      id="print-center-iframe-dialog"
      class="fixed inset-0 z-[200] flex animate-fade-in flex-col bg-background shadow-2xl ring-1 ring-border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="print-center-iframe-title"
      tabindex="-1"
    >
      <div class="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-3 sm:h-14 sm:px-4">
        <h2 id="print-center-iframe-title" class="min-w-0 truncate text-sm font-semibold text-card-foreground sm:text-base">打印中心</h2>
        <button
          type="button"
          id="print-center-iframe-close"
          class="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          关闭
        </button>
      </div>
      <div class="relative flex min-h-0 flex-1 flex-col">
        <p class="sr-only">打印中心全屏浮层内嵌 printing.menusifuchina.com。若内容空白，请确认该站点允许被本后台来源嵌入。</p>
        <iframe
          title="打印中心"
          class="block h-full min-h-0 w-full flex-1 border-0 bg-background"
          src="${src}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`;
}

function renderPrintCenterMainUnderlay(): string {
  return `<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「打印中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`;
}

/** 预约等位中心：云端等位页（QA），与促销中心相同的全屏弹层 + iframe */
const RESERVATIONS_IFRAME_SRC =
  "https://cloud.menusifucloudqa.com/waitlist/M000013041/manage/waitlist";

function isReservationsIframePath(path: string): boolean {
  return path === "/operations/reservations" || path.startsWith("/operations/reservations/");
}

function renderReservationsFullscreenModal(): string {
  const src = escapeHtml(RESERVATIONS_IFRAME_SRC);
  return `<div
      id="reservations-iframe-dialog"
      class="fixed inset-0 z-[200] flex animate-fade-in flex-col bg-background shadow-2xl ring-1 ring-border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservations-iframe-title"
      tabindex="-1"
    >
      <div class="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-3 sm:h-14 sm:px-4">
        <h2 id="reservations-iframe-title" class="min-w-0 truncate text-sm font-semibold text-card-foreground sm:text-base">预约等位中心</h2>
        <button
          type="button"
          id="reservations-iframe-close"
          class="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          关闭
        </button>
      </div>
      <div class="relative flex min-h-0 flex-1 flex-col">
        <p class="sr-only">预约等位中心全屏浮层内嵌云端等位页。若内容空白，请确认 cloud.menusifucloudqa.com 允许被本后台来源嵌入。</p>
        <iframe
          title="预约等位中心"
          class="block h-full min-h-0 w-full flex-1 border-0 bg-background"
          src="${src}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`;
}

function renderReservationsMainUnderlay(): string {
  return `<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「预约等位中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`;
}

/** 信贷中心：侧栏点击在新标签页打开 EZ Capital（站内不嵌 iframe） */
const CAPITAL_EXTERNAL_URL = "https://www.ezcapital.com/zh";

/** 非侧栏二级且仅一条子路由时不渲染顶部 Tab（避免单子模块出现一条 Tab） */
function shouldShowModuleTabs(tabModule: NavModule | undefined): boolean {
  if (!tabModule || tabModule.subNavPlacement === "sidebar") return false;
  return tabModule.children.length > 1;
}

function findTitle(path: string): { title: string; module?: string } {
  if (path === "/ai-assistant/chat" || path.startsWith("/ai-assistant/")) {
    return { title: "智能对话", module: "AI智能助手 · AI Assistant" };
  }
  if (isProductCenterAPath(path)) {
    return { title: "商品中心", module: "商品中心 · Product center" };
  }
  if (isPromotionsIframePath(path)) {
    return { title: "促销中心", module: "促销中心 · Promotion center" };
  }
  if (isGiftCardsIframePath(path)) {
    return { title: "礼品卡中心", module: "礼品卡中心 · Gift card center" };
  }
  if (isMarketingIframePath(path)) {
    return { title: "营销中心", module: "营销中心 · Marketing center" };
  }
  if (isReportsIframePath(path)) {
    return { title: "报表中心", module: "报表中心 · Reporting center" };
  }
  if (isMembersIframePath(path)) {
    return { title: "会员中心", module: "会员中心 · Member center" };
  }
  if (isPrintCenterIframePath(path)) {
    return { title: "打印中心", module: "打印中心 · Print center" };
  }
  if (isReservationsIframePath(path)) {
    return { title: "预约等位中心", module: "预约等位中心 · Reservation & waitlist center" };
  }
  const menuTaxSub = getActiveMenuTaxSubPath(path);
  if (menuTaxSub) {
    const mt = MENU_TAX_TYPES_SUBNAV.find((x) => x.path === menuTaxSub);
    if (mt) return { title: mt.title, module: "商品中心A · 门店商品管理 · 税种管理" };
  }
  const brandSmSub = getActiveBrandSeasoningMgmtSubPath(path);
  if (brandSmSub) {
    const sm = BRAND_SEASONING_MGMT_SUBNAV.find((x) => x.path === brandSmSub);
    if (sm) return { title: sm.title, module: "商品中心A · 品牌商品管理 · 调味管理" };
  }
  const brandTagsSub = getActiveBrandTagsMgmtSubPath(path);
  if (brandTagsSub) {
    const tg = BRAND_TAGS_MGMT_SUBNAV.find((x) => x.path === brandTagsSub);
    if (tg) return { title: tg.title, module: "商品中心A · 品牌商品管理 · 标签管理" };
  }
  const brandRecipesSub = getActiveBrandRecipesMgmtSubPath(path);
  if (brandRecipesSub) {
    const rp = BRAND_RECIPES_MGMT_SUBNAV.find((x) => x.path === brandRecipesSub);
    if (rp) return { title: rp.title, module: "商品中心A · 品牌商品管理 · 配方管理" };
  }
  const dmHwSub = getActiveDeviceManagementHardwareSubPath(path);
  if (dmHwSub) {
    const dh = DEVICE_MANAGEMENT_HARDWARE_SUBNAV.find((x) => x.path === dmHwSub);
    if (dh) return { title: dh.title, module: "硬件管理中心 · 硬件" };
  }
  const tipsSub = getActiveTipsManagementSubPath(path);
  if (tipsSub) {
    const tips = TIPS_MANAGEMENT_SUBNAV.find((x) => x.path === tipsSub);
    if (tips) return { title: tips.title, module: "团队管理 · 小费管理" };
  }
  const teamRptSub = getActiveTeamReportsSubPath(path);
  if (teamRptSub) {
    const tr = TEAM_REPORTS_SUBNAV.find((x) => x.path === teamRptSub);
    if (tr) return { title: tr.title, module: "团队管理 · 员工报表" };
  }
  const teamSchSub = getActiveTeamSchedulingSubPath(path);
  if (teamSchSub) {
    const ts = TEAM_SCHEDULING_SUBNAV.find((x) => x.path === teamSchSub);
    if (ts) return { title: ts.title, module: "团队管理 · 排班与考勤" };
  }
  const sortedPcNav = [...PRODUCT_CENTER_DEEP_NAV].sort((a, b) => b.path.length - a.path.length);
  for (const item of sortedPcNav) {
    if (path === item.path || path.startsWith(`${item.path}/`)) {
      const module =
        path.startsWith("/brand-products") || path === "/brand-products"
          ? "商品中心A · 品牌商品管理"
          : path.startsWith("/brand-menu") || path === "/brand-menu"
            ? "商品中心A · 品牌菜单管理"
            : "商品中心A · 门店商品管理";
      return { title: item.title, module };
    }
  }
  for (const m of NAV_MODULES) {
    if (m.path === path) return { title: m.title, module: m.titleEn };
    const sortedChildren = [...m.children].sort((a, b) => b.path.length - a.path.length);
    for (const c of sortedChildren) {
      if (path === c.path || path.startsWith(`${c.path}/`)) {
        return { title: c.title, module: `${m.title} / ${m.titleEn}` };
      }
    }
  }
  return { title: "页面", module: undefined };
}

/** 当前路由是否落在该导航模块下（支持 `matchPrefixes` 聚合模块，如商品中心A） */
function pathBelongsToModule(path: string, m: NavModule): boolean {
  const prefixes = m.matchPrefixes?.length ? m.matchPrefixes : [m.path];
  return prefixes.some((p) => path === p || path.startsWith(`${p}/`));
}

/** 按最长 path 前缀匹配，避免 `/orders` 与 `/ordering` 等歧义 */
function getTabModule(path: string): NavModule | undefined {
  let best: NavModule | undefined;
  let bestLen = -1;
  for (const m of NAV_MODULES) {
    const prefixes = m.matchPrefixes?.length ? m.matchPrefixes : [m.path];
    for (const p of prefixes) {
      if (path === p || path.startsWith(`${p}/`)) {
        if (p.length > bestLen) {
          bestLen = p.length;
          best = m;
        }
      }
    }
  }
  return best;
}

/**
 * 将地址栏 hash 规范为 `path`（须以 `/` 开头），且不触发 `hashchange`。
 * 用于侧栏入口与默认子路由一致时的「静默」规范化，避免连续两次 `mount()` 在第一次 rAF
 * 恢复滚动前就二次渲染，导致主导航 `#nav-tree` 的 `scrollTop` 被读成 0、滚回顶部。
 */
function replaceHashPath(path: string): void {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const nextHash = `#${normalized}`;
  if (location.hash === nextHash) return;
  const url = `${location.pathname}${location.search}${nextHash}`;
  try {
    history.replaceState(history.state, "", url);
  } catch {
    location.replace(nextHash);
  }
}

const SIDEBAR_NAV_SCROLL_KEY = "sidebar-primary-nav-scrollTop";

/** 顶栏品牌 / 区域 / 门店筛选，与 `bindHeaderScopeFilters` 同步 */
const SCOPE_FILTER_STORAGE_KEYS = {
  brand: "header-scope-filter-brand",
  region: "header-scope-filter-region",
  store: "header-scope-filter-store",
} as const;

function readSidebarNavScrollMemory(): number {
  try {
    const v = sessionStorage.getItem(SIDEBAR_NAV_SCROLL_KEY);
    if (v == null) return 0;
    const n = Number(v);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function rememberSidebarNavScroll(scrollTop: number): void {
  try {
    sessionStorage.setItem(SIDEBAR_NAV_SCROLL_KEY, String(Math.max(0, Math.floor(scrollTop))));
  } catch {
    /* ignore */
  }
}

/** 将 `#/menu`、`#/reports` 等仅一级路径规范为各自 defaultChildPath（单页模块 path===default 时不跳转） */
function normalizeTabModuleHashes(): void {
  const raw = location.hash.slice(1);
  /* 商品中心A：二级入口仅一级 path 时落到各自默认子路由 */
  if (raw === "/brand-products" || raw === "/brand-products/") {
    replaceHashPath("/brand-products/products");
    return;
  }
  if (raw === "/brand-menu" || raw === "/brand-menu/") {
    replaceHashPath("/brand-menu/menus");
    return;
  }
  if (raw === "/menu" || raw === "/menu/") {
    replaceHashPath("/menu/store-menu");
    return;
  }
  if (raw === "/gift-cards" || raw === "/gift-cards/") {
    replaceHashPath("/gift-cards/design");
    return;
  }
  if (raw === "/marketing" || raw === "/marketing/") {
    replaceHashPath("/marketing/ai/ads");
    return;
  }
  if (raw === "/reports" || raw === "/reports/") {
    replaceHashPath("/reports/revenue");
    return;
  }
  if (raw === "/members" || raw === "/members/") {
    replaceHashPath("/members/settings");
    return;
  }
  if (raw === "/print-templates" || raw === "/print-templates/") {
    replaceHashPath("/print-templates/list");
    return;
  }
  if (raw === "/operations/reservations/") {
    replaceHashPath("/operations/reservations");
    return;
  }
  /* 信贷中心改为外链新窗口打开，旧 #/reports/capital 书签回到工作台 */
  if (raw === "/reports/capital" || raw === "/reports/capital/" || raw.startsWith("/reports/capital/")) {
    replaceHashPath("/dashboard/overview");
    return;
  }
  /* 侧栏已移除：门店信息、智能点餐、支付服务、费用加收 — 旧书签重定向 */
  if (raw === "/store" || raw === "/store/" || raw.startsWith("/store/")) {
    location.replace("#/stores/overview");
    return;
  }
  if (raw === "/ordering" || raw === "/ordering/" || raw.startsWith("/ordering/")) {
    location.replace("#/dashboard/overview");
    return;
  }
  if (raw === "/payment-services" || raw === "/payment-services/" || raw.startsWith("/payment-services/")) {
    location.replace("#/dashboard/overview");
    return;
  }
  if (raw === "/surcharge-fees" || raw === "/surcharge-fees/" || raw.startsWith("/surcharge-fees/")) {
    location.replace("#/dashboard/overview");
    return;
  }
  /* 已移除一级「区域管理」，旧书签统一到门店管理 */
  if (raw === "/regions" || raw === "/regions/" || raw.startsWith("/regions/")) {
    location.replace("#/stores/overview");
    return;
  }
  /* 已移除一级「设备」`/operations/devices`，旧书签重定向到「硬件管理中心」 */
  if (raw === "/operations/devices" || raw === "/operations/devices/") {
    location.replace("#/device-management/overview");
    return;
  }
  const legacyDev = raw.match(/^\/operations\/devices\/([^/]+)(.*)$/);
  if (legacyDev) {
    const seg = legacyDev[1];
    const rest = legacyDev[2] ?? "";
    const hw: Record<string, string> = {
      payments: "payments",
      "cash-drawer": "cash-drawer",
      router: "router",
      pos: "pos",
      "pos-go": "pos-go",
      kds: "kds",
      "queue-display": "queue-display",
      printers: "printers",
      kiosk: "kiosk",
      emenu: "emenu",
    };
    const key = hw[seg];
    if (key) {
      location.replace(`#/device-management/hardware/${key}${rest}`);
      return;
    }
    location.replace("#/device-management/overview");
    return;
  }
  /* 主页侧栏已移除快捷入口与多门店切换，旧链接统一到今日概览 */
  const legacyDashboardPaths = ["/dashboard/shortcuts", "/dashboard/locations"];
  if (legacyDashboardPaths.some((p) => raw === p || raw.startsWith(`${p}/`))) {
    location.replace("#/dashboard/overview");
    return;
  }
  /* 侧栏已移除：客显系统管理、巡店与巡检 — 旧书签重定向（`/ordering/*` 已在上方统一处理） */
  if (raw === "/operations/customer-display" || raw.startsWith("/operations/customer-display/")) {
    location.replace("#/dashboard/overview");
    return;
  }
  if (raw === "/operations/store-patrol" || raw.startsWith("/operations/store-patrol/")) {
    location.replace("#/dashboard/overview");
    return;
  }
  /* 原侧栏一级「桌台平面图」已移除；门店信息侧栏已移除 — 旧链接统一到门店管理 */
  if (raw === "/operations/floor-plan" || raw.startsWith("/operations/floor-plan/")) {
    location.replace("#/stores/overview");
    return;
  }
  /* AI 助手非侧栏一级，仅顶栏入口；#/ai-assistant 规范到对话页 */
  if (raw === "/ai-assistant" || raw === "/ai-assistant/") {
    location.replace("#/ai-assistant/chat");
    return;
  }
  /* 订单侧栏仅保留全部/退单/历史，原堂食·在线等 Tab 路径统一到全部订单 */
  const legacyOrderChannelPaths = ["/orders/dine-in", "/orders/online", "/orders/delivery", "/orders/pickup"];
  if (legacyOrderChannelPaths.some((p) => raw === p || raw.startsWith(`${p}/`))) {
    location.replace("#/orders/all");
    return;
  }
  /* 菜单侧栏已移除「菜单与分组」等三项，旧链接统一到默认子路由「门店菜单」 */
  const legacyMenuPaths = ["/menu/groups", "/menu/items", "/menu/availability"];
  if (legacyMenuPaths.some((p) => raw === p || raw.startsWith(`${p}/`))) {
    location.replace("#/menu/store-menu");
    return;
  }
  if (raw === "/menu/inventory-change-log" || raw.startsWith("/menu/inventory-change-log/")) {
    const rest = raw.startsWith("/menu/inventory-change-log/") ? raw.slice("/menu/inventory-change-log".length) : "";
    replaceHashPath(rest ? `/menu/inventory-changes${rest}` : "/menu/inventory-changes");
    return;
  }
  if (raw === "/menu/product-recipe" || raw.startsWith("/menu/product-recipe/")) {
    const rest = raw.startsWith("/menu/product-recipe/") ? raw.slice("/menu/product-recipe".length) : "";
    replaceHashPath(rest ? `/menu/recipe-list${rest}` : "/menu/recipe-list");
    return;
  }
  if (raw === "/team/tips" || raw === "/team/tips/") {
    replaceHashPath(getTipsManagementDefaultPath());
    return;
  }
  if (raw === "/team/reports" || raw === "/team/reports/") {
    replaceHashPath(getTeamReportsDefaultPath());
    return;
  }
  if (raw === "/team/scheduling" || raw === "/team/scheduling/") {
    replaceHashPath(getTeamSchedulingDefaultPath());
    return;
  }
  if (raw === "/menu/tax-types" || raw === "/menu/tax-types/") {
    location.replace("#/menu/tax-types/settings");
    return;
  }
  if (raw === "/device-management/hardware" || raw === "/device-management/hardware/") {
    location.replace(`#${getDeviceManagementHardwareDefaultPath()}`);
    return;
  }
  if (raw === "/brand-products/seasoning-mgmt" || raw === "/brand-products/seasoning-mgmt/") {
    replaceHashPath(getBrandSeasoningMgmtDefaultPath());
    return;
  }
  if (raw === "/brand-products/tags" || raw === "/brand-products/tags/") {
    replaceHashPath(getBrandTagsMgmtDefaultPath());
    return;
  }
  if (raw === "/brand-products/recipes" || raw === "/brand-products/recipes/") {
    replaceHashPath(getBrandRecipesMgmtDefaultPath());
    return;
  }
  /* 品牌商品管理侧栏二级调整：旧路由重定向（静默改 hash，避免双次 mount） */
  const legacyBrandProducts: [string, string][] = [
    ["/brand-products/catalog", "/brand-products/product-categories"],
    ["/brand-products/categories", "/brand-products/product-categories"],
    ["/brand-products/specs", "/brand-products/spec-groups"],
    ["/brand-products/distribution", "/brand-products/products"],
    ["/brand-products/meal-groups", "/brand-products/combo-groups"],
  ];
  for (const [from, to] of legacyBrandProducts) {
    if (raw === from || raw === `${from}/`) {
      replaceHashPath(to);
      return;
    }
    if (raw.startsWith(`${from}/`)) {
      replaceHashPath(`${to}${raw.slice(from.length)}`);
      return;
    }
  }
  for (const m of NAV_MODULES) {
    if (raw === m.path || raw === `${m.path}/`) {
      if (m.defaultChildPath !== m.path) {
        location.replace(`#${m.defaultChildPath}`);
        return;
      }
    }
  }
}

function sidebarExpandStorageKey(moduleId: string): string {
  return `sidebar-nav-expanded:${moduleId}`;
}

/** 侧栏可折叠模块：显式 true/false 优先；否则当前路由在该模块下则默认展开 */
function getSidebarModuleExpanded(m: NavModule, currentPath: string): boolean {
  try {
    const v = sessionStorage.getItem(sidebarExpandStorageKey(m.id));
    if (v === "true") return true;
    if (v === "false") return false;
  } catch {
    /* ignore */
  }
  return pathBelongsToModule(currentPath, m);
}

function setSidebarModuleExpanded(moduleId: string, expanded: boolean): void {
  try {
    sessionStorage.setItem(sidebarExpandStorageKey(moduleId), expanded ? "true" : "false");
  } catch {
    /* ignore */
  }
}

/** Tab 内二级渠道按最长 path 前缀匹配 */
function getActiveChildTabPath(path: string, children: NavModule["children"]): string {
  const sorted = [...children].sort((a, b) => b.path.length - a.path.length);
  for (const c of sorted) {
    if (path === c.path || path.startsWith(`${c.path}/`)) return c.path;
  }
  return "";
}

function tertiarySidebarExpandStorageKey(groupId: string): string {
  return `tertiary-sidebar-expanded:${groupId}`;
}

/** 三级侧栏内折叠分组：显式 true/false 优先；否则当前路由在该分组下则默认展开 */
function getTertiarySidebarGroupExpanded(groupId: string, currentPath: string, defaultExpanded: boolean): boolean {
  try {
    const raw = sessionStorage.getItem(tertiarySidebarExpandStorageKey(groupId));
    if (raw === "true") return true;
    if (raw === "false") return false;
  } catch {
    /* ignore */
  }
  return defaultExpanded;
}

function setTertiarySidebarGroupExpanded(groupId: string, expanded: boolean): void {
  try {
    sessionStorage.setItem(tertiarySidebarExpandStorageKey(groupId), expanded ? "true" : "false");
  } catch {
    /* ignore */
  }
}

function getBrandProductsSidebarChildActivePath(path: string, item: ProductCenterSidebarSubItem): string {
  if (item.id === "bp-seasoning-mgmt") return getActiveBrandSeasoningMgmtSubPath(path);
  if (item.id === "bp-tags-mgmt") return getActiveBrandTagsMgmtSubPath(path);
  if (item.id === "bp-recipes-mgmt") return getActiveBrandRecipesMgmtSubPath(path);
  return "";
}

function getStoreMenuSidebarChildActivePath(path: string, item: ProductCenterSidebarSubItem): string {
  if (item.id === "sm-tax-types") return getActiveMenuTaxSubPath(path);
  return "";
}

const TERTIARY_SIDEBAR_CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;

/** 商品中心A下三级侧栏：扁平项 + 可选折叠分组（与主导航可折叠模块交互一致） */
function renderProductCenterTertiarySidebar(
  path: string,
  opts: {
    navClass: string;
    navAriaLabel: string;
    heading: string;
    items: ProductCenterSidebarSubItem[];
    getActiveSubPath: (p: string) => string;
    getCollapsibleChildActivePath: (p: string, item: ProductCenterSidebarSubItem) => string;
  },
): string {
  const { navClass, navAriaLabel, heading, items, getActiveSubPath, getCollapsibleChildActivePath } = opts;
  const activeSub = getActiveSubPath(path);

  const renderItem = (item: ProductCenterSidebarSubItem): string => {
    const children = item.sidebarChildren;
    if (children?.length) {
      const prefix = item.activePrefix ?? item.path;
      const inGroup = path === prefix || path.startsWith(`${prefix}/`);
      const expanded = getTertiarySidebarGroupExpanded(item.id, path, inGroup);
      const parentSelected = item.path === activeSub;
      const childrenId = `tertiary-children-${item.id}`;
      const activeChild = getCollapsibleChildActivePath(path, item);
      return `
        <li class="mb-1">
          <button type="button"
            data-tertiary-sidebar-toggle="${item.id}"
            class="flex w-full min-h-11 items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              parentSelected
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }"
            aria-expanded="${expanded}"
            aria-controls="${childrenId}"
          >
            <span class="min-w-0 flex-1 truncate">${item.title}</span>
            <span class="shrink-0 text-muted-foreground transition-transform duration-200 ${expanded ? "" : "-rotate-90"}">${TERTIARY_SIDEBAR_CHEVRON}</span>
          </button>
          <ul id="${childrenId}" class="mt-1 space-y-0.5 border-l border-border ml-3 pl-2 ${expanded ? "" : "hidden"}" role="list" ${expanded ? "" : 'aria-hidden="true"'}>
            ${children
              .map((c) => {
                const selected = c.path === activeChild;
                return `
            <li>
              <a href="#${c.path}"
                class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  selected
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }"
                ${selected ? 'aria-current="page"' : ""}
                tabindex="${expanded ? "0" : "-1"}"
              >${c.title}</a>
            </li>`;
              })
              .join("")}
          </ul>
        </li>`;
    }

    const selected = item.path === activeSub;
    return `
        <li>
          <a href="#${item.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              selected
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }"
            ${selected ? 'aria-current="page"' : ""}
          >${item.title}</a>
        </li>`;
  };

  return `
    <nav class="${navClass} w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navAriaLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${heading}</p>
      <ul class="space-y-0.5">
        ${items.map(renderItem).join("")}
      </ul>
    </nav>
  `;
}

function renderBrandProductsSidebar(path: string): string {
  return renderProductCenterTertiarySidebar(path, {
    navClass: "brand-products-subnav",
    navAriaLabel: "品牌商品管理".replace(/"/g, "&quot;"),
    heading: "品牌商品管理",
    items: BRAND_PRODUCTS_SUBNAV,
    getActiveSubPath: getActiveBrandProductsSubPath,
    getCollapsibleChildActivePath: getBrandProductsSidebarChildActivePath,
  });
}

function renderBrandMenuSidebar(path: string): string {
  const navLabel = "品牌菜单管理".replace(/"/g, "&quot;");
  const activeSub = getActiveBrandMenuSubPath(path);
  return `
    <nav class="brand-menu-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">品牌菜单管理</p>
      <ul class="space-y-0.5">
        ${BRAND_MENU_SUBNAV.map((item) => {
          const selected = item.path === activeSub;
          return `
        <li>
          <a href="#${item.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              selected
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }"
            ${selected ? 'aria-current="page"' : ""}
          >${item.title}</a>
        </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

function renderStoreMenuSidebar(path: string): string {
  return renderProductCenterTertiarySidebar(path, {
    navClass: "store-menu-subnav",
    navAriaLabel: "门店商品管理".replace(/"/g, "&quot;"),
    heading: "门店商品管理",
    items: STORE_MENU_SUBNAV,
    getActiveSubPath: getActiveStoreMenuSubPath,
    getCollapsibleChildActivePath: getStoreMenuSidebarChildActivePath,
  });
}

function renderDeviceManagementHardwareSidebar(path: string): string {
  const navLabel = "硬件管理中心 · 硬件".replace(/"/g, "&quot;");
  const activeSub = getActiveDeviceManagementHardwareSubPath(path);
  return `
    <nav class="device-management-hardware-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">硬件</p>
      <ul class="space-y-0.5">
        ${DEVICE_MANAGEMENT_HARDWARE_SUBNAV.map((item) => {
          const selected = item.path === activeSub;
          return `
        <li>
          <a href="#${item.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              selected
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }"
            ${selected ? 'aria-current="page"' : ""}
          >${item.title}</a>
        </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

function renderSidebar(): string {
  const hash = location.hash.slice(1) || "/dashboard/overview";
  return `
    <aside class="flex h-full min-h-0 w-72 shrink-0 flex-col overflow-hidden border-r border-border bg-sidebar text-sidebar-foreground" aria-label="主导航">
      <div class="flex h-14 shrink-0 items-center gap-2 border-b border-white/10 px-4">
        <span class="flex size-9 items-center justify-center rounded-lg bg-sidebar-active text-sidebar-active-fg" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h0v7"/></svg>
        </span>
        <div class="min-w-0">
          <p class="truncate text-sm font-semibold tracking-tight text-white">米聚集团</p>
          <p class="truncate text-xs text-sidebar-muted">MenuSifu智慧餐饮管理中心</p>
        </div>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-2 py-3" id="nav-tree" aria-label="主导航树">
        ${NAV_MODULES.map((m) => renderModule(m, hash)).join("")}
      </nav>
    </aside>
  `;
}

function renderTipsManagementSidebar(path: string): string {
  const navLabel = "小费管理".replace(/"/g, "&quot;");
  const activeSub = getActiveTipsManagementSubPath(path);
  return `
    <nav class="tips-management-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">小费管理</p>
      <ul class="space-y-0.5">
        ${TIPS_MANAGEMENT_SUBNAV.map((item) => {
          const selected = item.path === activeSub;
          return `
        <li>
          <a href="#${item.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              selected
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }"
            ${selected ? 'aria-current="page"' : ""}
          >${item.title}</a>
        </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

function renderTeamReportsSidebar(path: string): string {
  const navLabel = "员工报表".replace(/"/g, "&quot;");
  const activeSub = getActiveTeamReportsSubPath(path);
  return `
    <nav class="team-reports-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">员工报表</p>
      <ul class="space-y-0.5">
        ${TEAM_REPORTS_SUBNAV.map((item) => {
          const selected = item.path === activeSub;
          return `
        <li>
          <a href="#${item.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              selected
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }"
            ${selected ? 'aria-current="page"' : ""}
          >${item.title}</a>
        </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

function renderTeamSchedulingSidebar(path: string): string {
  const navLabel = "排班与考勤".replace(/"/g, "&quot;");
  const activeSub = getActiveTeamSchedulingSubPath(path);
  return `
    <nav class="team-scheduling-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">排班与考勤</p>
      <ul class="space-y-0.5">
        ${TEAM_SCHEDULING_SUBNAV.map((item) => {
          const selected = item.path === activeSub;
          return `
        <li>
          <a href="#${item.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              selected
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }"
            ${selected ? 'aria-current="page"' : ""}
          >${item.title}</a>
        </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

/** 侧栏折叠模块：一级行点击仅展开/收起；子项在下方二级链接进入（顺序见 navigation.ts NAV_MODULES） */
function renderExpandableSidebarModule(m: NavModule, hash: string, expanded: boolean): string {
  const inModule = pathBelongsToModule(hash, m);
  let activeChildPath = getActiveChildTabPath(hash, m.children);
  if (m.id === "device-management" && isDeviceManagementHardwarePath(hash)) {
    activeChildPath = getDeviceManagementHardwareDefaultPath();
  }
  if (m.id === "team" && isTipsManagementTertiaryPath(hash)) {
    activeChildPath = "/team/tips";
  }
  if (m.id === "team" && isTeamReportsTertiaryPath(hash)) {
    activeChildPath = "/team/reports";
  }
  if (m.id === "team" && isTeamSchedulingTertiaryPath(hash)) {
    activeChildPath = "/team/scheduling";
  }
  if (m.id === "product-center" && isBrandProductsTertiaryPath(hash)) {
    activeChildPath = "/brand-products";
  }
  if (m.id === "product-center" && isBrandMenuTertiaryPath(hash)) {
    activeChildPath = "/brand-menu";
  }
  if (m.id === "product-center" && isStoreMenuTertiaryPath(hash)) {
    activeChildPath = "/menu";
  }
  const childrenId = `sidebar-children-${m.id}`;
  const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;
  return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button type="button"
        data-sidebar-toggle="${m.id}"
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? "bg-white/10 text-white" : "text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"}"
        aria-expanded="${expanded}"
        aria-controls="${childrenId}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${m.title}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${expanded ? "" : "-rotate-90"}">${chevron}</span>
      </button>
      <ul id="${childrenId}" class="mt-1 space-y-0.5 border-l border-white/15 ml-4 pl-2 ${expanded ? "" : "hidden"}" role="list" ${expanded ? "" : 'aria-hidden="true"'}>
        ${m.children
          .map((c) => {
            const selected = c.path === activeChildPath;
            const chainBadge = c.chainOnly
              ? `<span class="ml-1 rounded bg-sidebar-active/25 px-1 py-px text-[10px] text-sidebar-active-fg">连锁</span>`
              : "";
            return `
        <li>
          <a href="#${c.path}"
            class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${
              selected ? "bg-white/10 font-medium text-white" : "text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"
            }"
            ${selected ? 'aria-current="page"' : ""}
            tabindex="${expanded ? "0" : "-1"}"
          ><span class="min-w-0 flex-1 truncate">${c.title}${chainBadge}</span></a>
        </li>`;
          })
          .join("")}
      </ul>
    </div>`;
}

/** 侧栏：默认一级入口链向 defaultChildPath；`subNavPlacement: sidebar` 为可折叠二级 */
function renderModule(m: NavModule, hash: string): string {
  const defaultPath = m.defaultChildPath;

  if (m.id === "capital-turnover") {
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <a
        href="${CAPITAL_EXTERNAL_URL}"
        target="_blank"
        rel="noopener noreferrer"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"
        title="在新标签页打开如意财（EZ Capital）"
        aria-label="信贷中心：在新标签页打开 EZ Capital"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${m.title}</span>
        <span class="shrink-0 text-xs text-sidebar-muted/90" aria-hidden="true">↗</span>
      </a>
    </div>`;
  }

  if (m.subNavPlacement === "sidebar") {
    const expanded = getSidebarModuleExpanded(m, hash);
    return renderExpandableSidebarModule(m, hash, expanded);
  }

  return `
    <div class="mb-1" data-nav-module="${m.id}">
      <a href="#${defaultPath}"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${pathBelongsToModule(hash, m) ? "bg-white/10 text-white" : "text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"}"
        ${pathBelongsToModule(hash, m) ? 'aria-current="page"' : ""}
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${m.title}</span>
      </a>
    </div>`;
}

/** 系统设置总揽：跳转「硬件管理中心 → 硬件」各类型配置页 */
function renderSettingsOverview(): string {
  const cards = SETTINGS_OVERVIEW_DEVICE_LINKS.map(
    (item) => `
      <li>
        <a
          href="#${item.path}"
          class="group flex min-h-[4.25rem] flex-col justify-center rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors duration-200 hover:border-primary/35 hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span class="text-sm font-semibold text-card-foreground group-hover:text-primary">${item.title}</span>
          <span class="mt-0.5 text-xs text-muted-foreground">${item.titleEn}</span>
        </a>
      </li>`,
  ).join("");
  return `
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 class="text-base font-semibold tracking-tight text-card-foreground">硬件与终端</h2>
      <p class="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        从系统设置总揽快速进入 <strong class="text-card-foreground">硬件管理中心 → 硬件</strong> 下各终端配置页（含 POS GO）；左侧主导航请展开 <strong class="text-card-foreground">硬件管理中心</strong> → <strong class="text-card-foreground">硬件</strong>。
      </p>
      <ul class="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3" role="list">
        ${cards}
      </ul>
    </div>
  `;
}

function renderAiAssistantChat(): string {
  const welcome =
    "您好，我是 <strong class=\"text-card-foreground\">MenuSifu 智能助手</strong>（单一智能体）。您可以用<strong class=\"text-card-foreground\">文字或语音</strong>让我：检索全站模块与数据、说明或协助调整<strong class=\"text-card-foreground\">配置与权限</strong>、做经营<strong class=\"text-card-foreground\">分析摘要</strong>。下方为演示回复，接入大模型与业务 API 后即可真实执行（受策略与审批约束）。";
  const quickClass =
    "rounded-full border border-border bg-background px-3 py-1.5 text-left text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  return `
    <div class="flex min-h-0 min-w-0 flex-1 flex-col gap-4" id="ai-assistant-root">
      <div class="rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-3 text-sm leading-relaxed text-muted-foreground dark:bg-primary/10">
        <p class="flex items-start gap-2">
          <span class="mt-0.5 shrink-0 text-primary" aria-hidden="true">${AI_ASSISTANT_ICON}</span>
          <span>同一对话上下文贯穿全程：无需切换「配置机器人」「分析机器人」——由本智能体统一理解意图并调用工具链（检索 / 配置 / 数仓 / 权限服务）。</span>
        </p>
      </div>
      <div class="flex flex-wrap gap-2" role="group" aria-label="快捷示例指令">
        <button type="button" class="${quickClass}" data-ai-quick-prompt="帮我查一下权限管理中心里店长和收银员的区别">权限说明</button>
        <button type="button" class="${quickClass}" data-ai-quick-prompt="搜索一下和打印中心相关的设置在哪里">全站查找</button>
        <button type="button" class="${quickClass}" data-ai-quick-prompt="分析一下最近一周各门店营业额趋势">数据分析</button>
        <button type="button" class="${quickClass}" data-ai-quick-prompt="我想把旗舰店的营业时间改成早上8点到晚上11点">改配示例</button>
        <a href="#/permissions/overview" class="inline-flex items-center rounded-full border border-dashed border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/35 hover:text-foreground">打开权限管理中心</a>
      </div>
      <div
        id="ai-assistant-thread"
        class="min-h-0 flex-1 space-y-4 overflow-y-auto rounded-xl border border-border bg-muted/25 p-4 dark:bg-muted/15"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        <div class="flex justify-start">
          <div class="max-w-[90%] rounded-2xl rounded-bl-md border border-border bg-card px-4 py-2.5 text-sm leading-relaxed text-card-foreground shadow-sm sm:max-w-[85%]">
            ${welcome}
            <p class="mt-2 text-xs text-muted-foreground">提示：点击麦克风使用中文语音输入（Chrome / Edge 体验更佳）。</p>
          </div>
        </div>
      </div>
      <form id="ai-assistant-form" class="flex min-w-0 shrink-0 flex-col gap-2 sm:flex-row sm:items-end">
        <div class="min-w-0 w-full flex-1 overflow-hidden sm:min-w-0">
          <label for="ai-assistant-input" class="sr-only">输入指令或问题</label>
          <textarea
            id="ai-assistant-input"
            rows="2"
            autocomplete="off"
            placeholder="输入消息，Enter 发送，Shift+Enter 换行；也可点击麦克风说话…"
            class="box-border min-h-[2.75rem] max-w-full w-full resize-y rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
          ></textarea>
        </div>
        <div class="flex w-full shrink-0 gap-2 sm:w-auto sm:justify-end">
          <button
            type="button"
            id="ai-assistant-voice"
            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="语音输入"
            aria-pressed="false"
            title="语音输入（中文）"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </button>
          <button
            type="submit"
            id="ai-assistant-send"
            class="inline-flex h-11 min-w-[5rem] items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            发送
          </button>
        </div>
      </form>
    </div>
  `;
}

function bindAiAssistantHandlers(): void {
  const root = document.getElementById("ai-assistant-root");
  const form = document.getElementById("ai-assistant-form") as HTMLFormElement | null;
  const input = document.getElementById("ai-assistant-input") as HTMLTextAreaElement | null;
  const thread = document.getElementById("ai-assistant-thread");
  if (!root || !form || !input || !thread) return;

  const appendBubble = (role: "user" | "assistant", text: string): void => {
    const row = document.createElement("div");
    row.className = role === "user" ? "flex justify-end" : "flex justify-start";
    const bubble = document.createElement("div");
    bubble.className =
      role === "user"
        ? "max-w-[90%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground shadow-sm sm:max-w-[85%]"
        : "max-w-[90%] rounded-2xl rounded-bl-md border border-border bg-card px-4 py-2.5 text-sm leading-relaxed text-card-foreground shadow-sm sm:max-w-[85%]";
    bubble.innerHTML = escapeHtml(text).replace(/\n/g, "<br/>");
    row.appendChild(bubble);
    thread.appendChild(row);
    thread.scrollTop = thread.scrollHeight;
  };

  root.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest("[data-ai-quick-prompt]");
    if (!btn || !(btn instanceof HTMLElement)) return;
    const prompt = btn.getAttribute("data-ai-quick-prompt");
    if (!prompt) return;
    input.value = prompt;
    input.focus();
    form.requestSubmit();
  });

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendBubble("user", text);
    input.value = "";
    window.setTimeout(() => appendBubble("assistant", aiAssistantMockReply(text)), 450);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    if (e.shiftKey) return;
    if (e.isComposing) return;
    e.preventDefault();
    form.requestSubmit();
  });

  const voiceBtn = document.getElementById("ai-assistant-voice");
  voiceBtn?.addEventListener("click", () => {
    const W = window as unknown as {
      SpeechRecognition?: new () => {
        lang: string;
        continuous: boolean;
        interimResults: boolean;
        start: () => void;
        onresult: ((this: unknown, ev: { results: ArrayLike<{ 0: { transcript: string } }> }) => void) | null;
        onerror: (() => void) | null;
        onend: (() => void) | null;
      };
      webkitSpeechRecognition?: new () => {
        lang: string;
        continuous: boolean;
        interimResults: boolean;
        start: () => void;
        onresult: ((this: unknown, ev: { results: ArrayLike<{ 0: { transcript: string } }> }) => void) | null;
        onerror: (() => void) | null;
        onend: (() => void) | null;
      };
    };
    const SR = W.SpeechRecognition ?? W.webkitSpeechRecognition;
    if (!SR) {
      appendBubble("assistant", "当前浏览器不支持语音识别，请直接输入文字，或使用 Chrome / Edge 重试。");
      return;
    }
    const rec = new SR();
    rec.lang = "zh-CN";
    rec.continuous = false;
    rec.interimResults = false;
    voiceBtn.setAttribute("aria-pressed", "true");
    voiceBtn.classList.add("ring-2", "ring-ring");
    rec.onresult = (event) => {
      const r = event.results;
      const transcript = Array.from(r)
        .map((x) => x[0]?.transcript ?? "")
        .join("");
      input.value = (input.value ? `${input.value} ` : "") + transcript.trim();
    };
    rec.onerror = () => {
      appendBubble("assistant", "未听清或未授权麦克风，请检查权限后重试。");
    };
    rec.onend = () => {
      voiceBtn.setAttribute("aria-pressed", "false");
      voiceBtn.classList.remove("ring-2", "ring-ring");
    };
    try {
      rec.start();
    } catch {
      appendBubble("assistant", "无法启动语音识别，请改用文本输入。");
      voiceBtn.setAttribute("aria-pressed", "false");
      voiceBtn.classList.remove("ring-2", "ring-ring");
    }
  });
}

function renderModuleTabs(path: string, tabModule: NavModule): string {
  const tabs = tabModule.children;
  const activeTabPath = getActiveChildTabPath(path, tabs);
  const navLabel = `${tabModule.title}子页面`.replace(/"/g, "&quot;");
  return `
    <nav class="mb-6" aria-label="${navLabel}">
      <div class="-mx-1 flex gap-0.5 overflow-x-auto overflow-y-hidden pb-px scroll-smooth [scrollbar-width:thin]" role="tablist">
        ${tabs
          .map((c) => {
            const selected = c.path === activeTabPath;
            const chainBadge = c.chainOnly
              ? `<span class="ml-1 rounded bg-primary/15 px-1 py-px text-[10px] text-primary dark:bg-primary/25">连锁</span>`
              : "";
            return `
          <a href="#${c.path}"
            role="tab"
            aria-selected="${selected}"
            tabindex="${selected ? "0" : "-1"}"
            class="shrink-0 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors duration-200 min-h-11 inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-t-md ${
              selected
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground"
            }"
          >
            <span class="truncate">${c.title}${chainBadge}</span>
          </a>`;
          })
          .join("")}
      </div>
      <div class="h-px w-full bg-border" aria-hidden="true"></div>
    </nav>
  `;
}

/** 顶栏右侧：品牌、区域、门店数据范围（演示选项，可对接组织与门店 API） */
function renderHeaderScopeFilters(): string {
  const sel =
    "h-9 max-w-[9rem] rounded-md border border-border bg-background px-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:max-w-[10.5rem]";
  return `
    <div
      class="flex max-w-full flex-wrap items-center justify-end gap-1.5 sm:gap-2"
      role="group"
      aria-label="数据范围筛选：品牌、区域、门店"
      title="按品牌、区域、门店筛选当前数据范围（演示；可对接组织架构接口）"
    >
      <label class="sr-only" for="scope-brand-select">品牌</label>
      <select id="scope-brand-select" class="${sel}" aria-label="按品牌筛选">
        <option value="">全部品牌</option>
        <option value="miju">米聚餐饮集团</option>
        <option value="menusifu-na">MenuSifu 北美</option>
      </select>
      <label class="sr-only" for="scope-region-select">区域</label>
      <select id="scope-region-select" class="${sel}" aria-label="按区域筛选">
        <option value="">全部区域</option>
        <option value="east-cn">华东大区</option>
        <option value="south-cn">华南大区</option>
        <option value="north-cn">华北大区</option>
        <option value="us-west">美国西海岸</option>
        <option value="us-east">美国东海岸</option>
      </select>
      <label class="sr-only" for="scope-store-select">门店</label>
      <select id="scope-store-select" class="${sel}" aria-label="按门店筛选">
        <option value="">全部门店</option>
        <option value="flagship-nyc">旗舰店 · NYC</option>
        <option value="branch-la">分店 · LA</option>
        <option value="shanghai-ljz">上海陆家嘴店</option>
        <option value="guangzhou-tzh">广州天河店</option>
      </select>
    </div>
  `;
}

function bindHeaderScopeFilters(): void {
  const brandEl = document.getElementById("scope-brand-select") as HTMLSelectElement | null;
  const regionEl = document.getElementById("scope-region-select") as HTMLSelectElement | null;
  const storeEl = document.getElementById("scope-store-select") as HTMLSelectElement | null;
  if (!brandEl || !regionEl || !storeEl) return;

  const optionValues = (el: HTMLSelectElement): Set<string> =>
    new Set(Array.from(el.options, (o) => o.value));

  const applyStored = (): void => {
    try {
      const b = sessionStorage.getItem(SCOPE_FILTER_STORAGE_KEYS.brand);
      if (b != null && optionValues(brandEl).has(b)) brandEl.value = b;
      const r = sessionStorage.getItem(SCOPE_FILTER_STORAGE_KEYS.region);
      if (r != null && optionValues(regionEl).has(r)) regionEl.value = r;
      const s = sessionStorage.getItem(SCOPE_FILTER_STORAGE_KEYS.store);
      if (s != null && optionValues(storeEl).has(s)) storeEl.value = s;
    } catch {
      /* ignore */
    }
  };
  applyStored();

  const persistAndNotify = (): void => {
    try {
      sessionStorage.setItem(SCOPE_FILTER_STORAGE_KEYS.brand, brandEl.value);
      sessionStorage.setItem(SCOPE_FILTER_STORAGE_KEYS.region, regionEl.value);
      sessionStorage.setItem(SCOPE_FILTER_STORAGE_KEYS.store, storeEl.value);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(
      new CustomEvent("menusifu:scope-filter-change", {
        detail: {
          brand: brandEl.value,
          region: regionEl.value,
          store: storeEl.value,
        },
      }),
    );
  };

  brandEl.addEventListener("change", persistAndNotify);
  regionEl.addEventListener("change", persistAndNotify);
  storeEl.addEventListener("change", persistAndNotify);
}

function renderMain(): string {
  const path = location.hash.slice(1) || "/dashboard/overview";
  const tabModule = getTabModule(path);
  const { title, module } = findTitle(path);
  const headerKicker = tabModule ? `${tabModule.title} · ${tabModule.titleEn}` : module ?? "";
  const isAiAssistant = path.startsWith("/ai-assistant");
  const isBrandProductsTertiary = isBrandProductsTertiaryPath(path);
  const isBrandMenuTertiary = isBrandMenuTertiaryPath(path);
  const isStoreMenuTertiary = isStoreMenuTertiaryPath(path);
  const isDeviceManagementHardware = isDeviceManagementHardwarePath(path);
  const isTipsManagementTertiary = isTipsManagementTertiaryPath(path);
  const isTeamReportsTertiary = isTeamReportsTertiaryPath(path);
  const isTeamSchedulingTertiary = isTeamSchedulingTertiaryPath(path);
  const isProductCenterA = isProductCenterAPath(path);
  const isPromotionsIframe = isPromotionsIframePath(path);
  const isGiftCardsIframe = isGiftCardsIframePath(path);
  const isMarketingIframe = isMarketingIframePath(path);
  const isReportsIframe = isReportsIframePath(path);
  const isMembersIframe = isMembersIframePath(path);
  const isPrintCenterIframe = isPrintCenterIframePath(path);
  const isReservationsIframe = isReservationsIframePath(path);
  const wideContentLayout =
    isAiAssistant ||
    isBrandProductsTertiary ||
    isBrandMenuTertiary ||
    isStoreMenuTertiary ||
    isDeviceManagementHardware ||
    isTipsManagementTertiary ||
    isTeamReportsTertiary ||
    isTeamSchedulingTertiary;
  const showModuleTabs = shouldShowModuleTabs(tabModule);

  const tertiaryRowClass =
    "flex min-h-0 flex-1 flex-col gap-6 overflow-hidden sm:flex-row sm:items-stretch";
  const tertiaryMainClass = "min-w-0 min-h-0 flex-1 overflow-y-auto";

  const mainTagClass = wideContentLayout
    ? "min-h-0 flex-1 flex flex-col overflow-hidden p-4 md:p-6 animate-fade-in"
    : "min-h-0 flex-1 overflow-y-auto p-4 md:p-6 animate-fade-in";

  const innerWrapperClass = isAiAssistant
    ? "mx-auto flex w-full min-h-0 min-w-0 max-w-3xl flex-1 flex-col"
    : wideContentLayout
      ? "mx-auto flex w-full min-h-0 flex-1 flex-col max-w-[90rem]"
      : `mx-auto max-w-6xl space-y-6`;

  const tabsSection = showModuleTabs
    ? wideContentLayout
      ? `<div class="mb-6 shrink-0">${renderModuleTabs(path, tabModule!)}</div>`
      : renderModuleTabs(path, tabModule!)
    : "";

  const tabPanelAttrs = wideContentLayout ? ' class="min-h-0 flex-1 flex flex-col overflow-hidden"' : "";

  const appHeaderHtml = `<header class="z-40 flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border bg-card/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-card/80 sm:flex-nowrap sm:gap-4 sm:py-0">
        <div class="min-w-0">
          <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">${headerKicker}</p>
          <h1 id="main-content" tabindex="-1" class="truncate text-lg font-semibold tracking-tight text-card-foreground">${title}</h1>
        </div>
        <div class="flex w-full min-w-0 flex-wrap items-center justify-end gap-2 sm:w-auto sm:flex-nowrap">
          <a
            href="#/ai-assistant/chat"
            class="inline-flex h-9 items-center gap-1.5 rounded-md border border-primary/35 bg-primary/[0.08] px-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:h-10 sm:px-3"
            title="打开 AI 智能助手"
          >
            <span class="shrink-0 text-primary [&>svg]:block" aria-hidden="true">${AI_ASSISTANT_ICON}</span>
            <span class="hidden sm:inline">AI助手</span>
          </a>
          ${renderHeaderScopeFilters()}
          <button type="button" id="theme-toggle" class="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:size-11" aria-label="切换深色模式">
            <svg class="size-5 dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            <svg class="size-5 hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          </button>
        </div>
      </header>`;

  return `
    <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      ${appHeaderHtml}
      <main class="${mainTagClass}">
        <div class="${innerWrapperClass}">
          ${tabsSection}
          <div role="tabpanel" aria-label="${title.replace(/"/g, "&quot;")}" id="module-tab-panel"${tabPanelAttrs}>
            ${
              isAiAssistant
                ? renderAiAssistantChat()
                : isProductCenterA
                  ? renderProductCenterAMainUnderlay()
                : isPromotionsIframe
                  ? renderPromotionsMainUnderlay()
                : isGiftCardsIframe
                  ? renderGiftCardsMainUnderlay()
                : isMarketingIframe
                  ? renderMarketingMainUnderlay()
                : isReportsIframe
                  ? renderReportsMainUnderlay()
                : isMembersIframe
                  ? renderMembersMainUnderlay()
                : isPrintCenterIframe
                  ? renderPrintCenterMainUnderlay()
                : isReservationsIframe
                  ? renderReservationsMainUnderlay()
                : isBrandProductsTertiary
                  ? `<div class="${tertiaryRowClass}">
                    ${renderBrandProductsSidebar(path)}
                    <div class="${tertiaryMainClass}">${renderPlaceholder(path, title, tabModule, { brandProductsSubnav: true })}</div>
                  </div>`
                : isBrandMenuTertiary
                  ? `<div class="${tertiaryRowClass}">
                    ${renderBrandMenuSidebar(path)}
                    <div class="${tertiaryMainClass}">${renderPlaceholder(path, title, tabModule, { brandMenuSubnav: true })}</div>
                  </div>`
                : isStoreMenuTertiary
                  ? `<div class="${tertiaryRowClass}">
                    ${renderStoreMenuSidebar(path)}
                    <div class="${tertiaryMainClass}">${renderPlaceholder(path, title, tabModule, { storeMenuSubnav: true })}</div>
                  </div>`
                    : isDeviceManagementHardware
                      ? `<div class="${tertiaryRowClass}">
                    ${renderDeviceManagementHardwareSidebar(path)}
                    <div class="${tertiaryMainClass}">${renderPlaceholder(path, title, tabModule, { deviceManagementHardwareSubnav: true })}</div>
                  </div>`
                      : isTeamReportsTertiary
                        ? `<div class="${tertiaryRowClass}">
                    ${renderTeamReportsSidebar(path)}
                    <div class="${tertiaryMainClass}">${renderPlaceholder(path, title, tabModule, { teamReportsSubnav: true })}</div>
                  </div>`
                        : isTeamSchedulingTertiary
                          ? `<div class="${tertiaryRowClass}">
                    ${renderTeamSchedulingSidebar(path)}
                    <div class="${tertiaryMainClass}">${renderPlaceholder(path, title, tabModule, { teamSchedulingSubnav: true })}</div>
                  </div>`
                      : isTipsManagementTertiary
                        ? `<div class="${tertiaryRowClass}">
                    ${renderTipsManagementSidebar(path)}
                    <div class="${tertiaryMainClass}">${renderPlaceholder(path, title, tabModule, { tipsManagementSubnav: true })}</div>
                  </div>`
                    : path === "/settings/overview"
                      ? renderSettingsOverview()
                      : renderPlaceholder(path, title, tabModule)
            }
          </div>
        </div>
      </main>
    </div>
  `;
}

function renderPlaceholder(
  path: string,
  title: string,
  tabModule?: NavModule,
  opts?: {
    brandProductsSubnav?: boolean;
    brandMenuSubnav?: boolean;
    storeMenuSubnav?: boolean;
    deviceManagementHardwareSubnav?: boolean;
    tipsManagementSubnav?: boolean;
    teamReportsSubnav?: boolean;
    teamSchedulingSubnav?: boolean;
  },
): string {
  const sidebarSecond = tabModule?.subNavPlacement === "sidebar";
  const brandProductsSubnav = opts?.brandProductsSubnav;
  const brandMenuSubnav = opts?.brandMenuSubnav;
  const storeMenuSubnav = opts?.storeMenuSubnav;
  const deviceManagementHardwareSubnav = opts?.deviceManagementHardwareSubnav;
  const tipsManagementSubnav = opts?.tipsManagementSubnav;
  const teamReportsSubnav = opts?.teamReportsSubnav;
  const teamSchedulingSubnav = opts?.teamSchedulingSubnav;
  return `
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="text-sm text-muted-foreground leading-relaxed">当前路由：<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">${path}</code></p>
      <p class="mt-4 text-base text-card-foreground">「${title}」页面占位 — 可在此接入列表、表单或图表。</p>
      <ul class="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
        ${
          deviceManagementHardwareSubnav
              ? `<li><strong class="text-card-foreground">硬件管理中心 · 硬件</strong>：在左侧主导航展开「硬件管理中心」后选择 <strong class="text-card-foreground">硬件</strong>；本区域左侧为硬件细项（支付、钱箱、路由器、POS、POS GO、KDS、叫号屏、打印机、电子秤、Kiosk、eMenu），交互同本后台其它三级侧栏。</li>`
            : tipsManagementSubnav
              ? `<li><strong class="text-card-foreground">团队管理 · 小费管理</strong>：在左侧主导航展开「团队管理」后选择 <strong class="text-card-foreground">小费管理</strong>；本区域左侧为细项（小费分配、分配明细、分配规则），交互同本后台其它三级侧栏。</li>`
            : teamReportsSubnav
              ? `<li><strong class="text-card-foreground">团队管理 · 员工报表</strong>：在左侧主导航展开「团队管理」后选择 <strong class="text-card-foreground">员工报表</strong>；本区域左侧为细项（概览、小费、绩效、薪资），交互同小费管理。</li>`
            : teamSchedulingSubnav
              ? `<li><strong class="text-card-foreground">团队管理 · 排班与考勤</strong>：在左侧主导航展开「团队管理」后选择 <strong class="text-card-foreground">排班与考勤</strong>；本区域左侧为细项（考勤记录、加班规则），交互同小费管理。</li>`
              : brandProductsSubnav
                ? `<li><strong class="text-card-foreground">品牌商品管理</strong>：主导航展开「商品中心A」→「品牌商品管理」；本区域左侧为三级细项（商品、分类、规格组、口味组、做法组、加料组、套餐组、调味管理、标签管理、原料管理、原料分类、图片管理、配方管理），布局与交互同商品中心A其它三级页。其中 <strong class="text-card-foreground">调味管理</strong>、<strong class="text-card-foreground">标签管理</strong>、<strong class="text-card-foreground">配方管理</strong> 为可折叠分组：调味下含 <strong class="text-card-foreground">调味、下发记录</strong>；标签下含 <strong class="text-card-foreground">描述标签、商品角标、统计标签</strong>；配方下含 <strong class="text-card-foreground">配方列表、原料管理、记录中心</strong>（一级行点击仅展开/收起，交互同左侧主导航可折叠模块）。配方内「原料管理」与品牌商品一级「原料管理」路由不同：<code class="font-mono text-xs">/brand-products/recipes/ingredients</code>。</li>`
              : brandMenuSubnav
                ? `<li><strong class="text-card-foreground">品牌菜单管理</strong>：主导航展开「商品中心A」→「品牌菜单管理」；本区域左侧为 <strong class="text-card-foreground">菜单、下发记录</strong> 三级导航（同商品中心A三级页）。其它品牌菜单路由（如分组、渠道可见性）仍可通过链接进入，侧栏「菜单」项保持高亮。</li>`
              : storeMenuSubnav
                ? `<li><strong class="text-card-foreground">门店商品管理</strong>：主导航展开「商品中心A」→「门店商品管理」；本区域左侧为 <strong class="text-card-foreground">门店菜单、门店商品、门店调味、库存变更记录、打印设置、税种管理、配方列表</strong> 三级导航（同商品中心A三级页）。其中 <strong class="text-card-foreground">税种管理</strong> 为可折叠分组，内含二级入口 <strong class="text-card-foreground">税种管理、商品税管理</strong>（一级行点击仅展开/收起，交互同左侧主导航可折叠模块）。</li>`
                : tabModule?.id === "permission-mgmt"
                  ? `<li><strong class="text-card-foreground">权限管理中心</strong>（RBAC）：在「<strong class="text-card-foreground">角色与功能权限</strong>」中配置各 <strong class="text-card-foreground">角色</strong> 可访问的后台模块与操作（查看、编辑、导出、审核等）；在「<strong class="text-card-foreground">员工授权</strong>」中指定 <strong class="text-card-foreground">哪位员工</strong> 拥有哪些角色。「权限总览」便于审计当前策略；「权限变更记录」留痕赋权调整。与「系统设置 → 账号与权限」可分工：本模块侧重可编排的权限矩阵与员工赋权，系统设置侧重账号安全与基础开关。</li>`
                : sidebarSecond
                ? `<li>本模块（<strong class="text-card-foreground">${tabModule.title}</strong>）二级在左侧主导航：点击侧栏「${tabModule.title}」展开/收起子列表后切换。</li>`
                : tabModule
                  ? `<li>本模块（<strong class="text-card-foreground">${tabModule.title}</strong>）二级导航在上方 <strong class="text-card-foreground">Tab</strong> 切换；侧栏仅保留该模块一级入口</li>`
                  : ""
        }
        <li>${sidebarSecond ? "侧栏一级顺序：品牌管理、门店管理、主页、团队管理、商品中心、订单中心、支付中心、外卖/来取、营销中心、营促销中心、会员中心、礼品卡中心、评价中心、前厅管理中心、后厨管理中心、预约等位中心、报表中心、财务中心、打印中心、消息中心、库存管理中心、硬件管理中心、权限管理中心、信贷中心、素材中心、配置中心、系统设置、商品中心A（二级含品牌商品管理、品牌菜单管理、门店商品管理）（一级行点击仅展开/收起，再点子项进入路由；品牌/门店置顶；**商品中心**在**团队管理**下一项；**商品中心A**在**系统设置**下一项）。其它模块二级多在上方 Tab。" : "侧栏一级入口；多数模块二级在上方 Tab。"} <strong class="text-card-foreground">AI智能助手</strong> 仅顶栏全局入口（<code class="font-mono text-xs">#/ai-assistant/chat</code>），非侧栏一级。结构来源：<strong class="text-card-foreground">docs/餐饮商家后台-导航与目录结构建议.md</strong></li>
        <li>设计令牌使用 Tailwind v4 <code class="font-mono text-xs">@theme</code>（OKLCH 语义色）</li>
        <li>标记为「连锁」的 Tab 为加盟/多店场景常用入口（配置见 <code class="font-mono text-xs">navigation.ts</code> 中 <code class="font-mono text-xs">chainOnly</code>）</li>
      </ul>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${["今日销售额", "待处理订单", "在岗员工"].map((label) => `<div class="rounded-lg border border-border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">${label}</p><p class="mt-2 text-2xl font-semibold tabular-nums text-card-foreground">—</p></div>`).join("")}
    </div>
  `;
}

let fullscreenIframeModalEscapeHandler: ((e: KeyboardEvent) => void) | null = null;

function bindFullscreenIframeModal(dialogId: string, closeButtonId: string): void {
  const goBack = (): void => {
    if (fullscreenIframeModalEscapeHandler) {
      window.removeEventListener("keydown", fullscreenIframeModalEscapeHandler);
      fullscreenIframeModalEscapeHandler = null;
    }
    location.hash = "#/dashboard/overview";
  };
  fullscreenIframeModalEscapeHandler = (e: KeyboardEvent): void => {
    if (e.key !== "Escape") return;
    e.preventDefault();
    goBack();
  };
  window.addEventListener("keydown", fullscreenIframeModalEscapeHandler);
  document.getElementById(closeButtonId)?.addEventListener("click", (e) => {
    e.preventDefault();
    goBack();
  });
  requestAnimationFrame(() => {
    document.getElementById(dialogId)?.focus({ preventScroll: true });
  });
}

function mount(): void {
  normalizeTabModuleHashes();

  if (fullscreenIframeModalEscapeHandler) {
    window.removeEventListener("keydown", fullscreenIframeModalEscapeHandler);
    fullscreenIframeModalEscapeHandler = null;
  }

  const app = document.getElementById("app");
  if (!app) return;

  /** 全量重绘会替换 #nav-tree：合并 DOM 读值与 session 记忆，避免二次 mount 时读到的 scrollTop 为 0 */
  const prevNavScrollTop = document.getElementById("nav-tree")?.scrollTop ?? 0;
  const targetNavScroll = Math.max(prevNavScrollTop, readSidebarNavScrollMemory());

  const mountPath = location.hash.slice(1) || "/dashboard/overview";
  const showProductCenterAModal = isProductCenterAPath(mountPath);
  const showPromotionsIframeModal = isPromotionsIframePath(mountPath);
  const showGiftCardsIframeModal = isGiftCardsIframePath(mountPath);
  const showMarketingIframeModal = isMarketingIframePath(mountPath);
  const showReportsIframeModal = isReportsIframePath(mountPath);
  const showMembersIframeModal = isMembersIframePath(mountPath);
  const showPrintCenterIframeModal = isPrintCenterIframePath(mountPath);
  const showReservationsIframeModal = isReservationsIframePath(mountPath);

  app.innerHTML = `
    <div class="relative h-dvh min-h-0 w-full overflow-hidden">
      <div class="flex h-full min-h-0 w-full">
        ${renderSidebar()}
        ${renderMain()}
      </div>
      ${showProductCenterAModal ? renderProductCenterAFullscreenModal() : ""}
      ${showPromotionsIframeModal ? renderPromotionsFullscreenModal() : ""}
      ${showGiftCardsIframeModal ? renderGiftCardsFullscreenModal() : ""}
      ${showMarketingIframeModal ? renderMarketingFullscreenModal() : ""}
      ${showReportsIframeModal ? renderReportsFullscreenModal() : ""}
      ${showMembersIframeModal ? renderMembersFullscreenModal() : ""}
      ${showPrintCenterIframeModal ? renderPrintCenterFullscreenModal() : ""}
      ${showReservationsIframeModal ? renderReservationsFullscreenModal() : ""}
    </div>
  `;

  const applySidebarNavScroll = (): void => {
    const nav = document.getElementById("nav-tree");
    if (!nav) return;
    const maxScroll = Math.max(0, nav.scrollHeight - nav.clientHeight);
    nav.scrollTop = Math.min(targetNavScroll, maxScroll);
    rememberSidebarNavScroll(nav.scrollTop);
  };
  requestAnimationFrame(() => {
    applySidebarNavScroll();
    requestAnimationFrame(applySidebarNavScroll);
  });

  document.getElementById("nav-tree")?.addEventListener(
    "scroll",
    () => {
      const nav = document.getElementById("nav-tree");
      if (nav) rememberSidebarNavScroll(nav.scrollTop);
    },
    { passive: true },
  );

  document.getElementById("nav-tree")?.addEventListener("click", (e) => {
    const el = (e.target as HTMLElement).closest("[data-sidebar-toggle]");
    if (!el || !(el instanceof HTMLButtonElement)) return;
    const moduleId = el.getAttribute("data-sidebar-toggle");
    if (!moduleId) return;
    const mod = NAV_MODULES.find((x) => x.id === moduleId);
    if (!mod || mod.subNavPlacement !== "sidebar") return;
    e.preventDefault();
    const hash = location.hash.slice(1) || "/dashboard/overview";
    const cur = getSidebarModuleExpanded(mod, hash);
    setSidebarModuleExpanded(mod.id, !cur);
    mount();
  });

  app.firstElementChild?.addEventListener("click", (e) => {
    const el = (e.target as HTMLElement).closest("[data-tertiary-sidebar-toggle]");
    if (!el || !(el instanceof HTMLButtonElement)) return;
    const groupId = el.getAttribute("data-tertiary-sidebar-toggle");
    if (!groupId) return;
    const item =
      BRAND_PRODUCTS_SUBNAV.find((x) => x.id === groupId) ??
      STORE_MENU_SUBNAV.find((x) => x.id === groupId);
    if (!item?.sidebarChildren?.length) return;
    e.preventDefault();
    const hash = location.hash.slice(1) || "/dashboard/overview";
    const prefix = item.activePrefix ?? item.path;
    const defaultExpanded = hash === prefix || hash.startsWith(`${prefix}/`);
    const cur = getTertiarySidebarGroupExpanded(groupId, hash, defaultExpanded);
    setTertiarySidebarGroupExpanded(groupId, !cur);
    mount();
  });

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const dark = document.documentElement.classList.contains("dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0f172a" : "#f8fafc");
  });

  if (showProductCenterAModal) {
    bindFullscreenIframeModal("product-center-a-dialog", "product-center-a-close");
  } else if (showPromotionsIframeModal) {
    bindFullscreenIframeModal("promotions-iframe-dialog", "promotions-iframe-close");
  } else if (showGiftCardsIframeModal) {
    bindFullscreenIframeModal("gift-cards-iframe-dialog", "gift-cards-iframe-close");
  } else if (showMarketingIframeModal) {
    bindFullscreenIframeModal("marketing-iframe-dialog", "marketing-iframe-close");
  } else if (showReportsIframeModal) {
    bindFullscreenIframeModal("reports-iframe-dialog", "reports-iframe-close");
  } else if (showMembersIframeModal) {
    bindFullscreenIframeModal("members-iframe-dialog", "members-iframe-close");
  } else if (showPrintCenterIframeModal) {
    bindFullscreenIframeModal("print-center-iframe-dialog", "print-center-iframe-close");
  } else if (showReservationsIframeModal) {
    bindFullscreenIframeModal("reservations-iframe-dialog", "reservations-iframe-close");
  }

  bindAiAssistantHandlers();
  bindHeaderScopeFilters();
}

window.addEventListener("hashchange", mount);

if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}

mount();
