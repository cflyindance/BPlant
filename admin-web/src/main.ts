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
  MARKETING_MGMT_SUBNAV,
  getActiveMarketingMgmtSubPath,
  PROMOTIONS_MGMT_SUBNAV,
  getActivePromotionsMgmtSubPath,
  MEMBERS_SHEET_SUBNAV,
  getActiveMembersSheetSubPath,
  getMembersSheetSidebarChildActivePath,
  GIFT_CARDS_SHEET_SUBNAV,
  getActiveGiftCardsSheetSubPath,
  isReportsCenterHubPath,
  REPORTS_SHEET_SUBNAV,
  getActiveReportsSheetSubPath,
  getReportsSheetSidebarChildActivePath,
  PRINT_SHEET_SUBNAV,
  getActivePrintSheetSubPath,
  findPrintNavTitle,
  isReservationsHubPath,
  RESERVATIONS_SHEET_SUBNAV,
  getActiveReservationsSheetSubPath,
  findReservationsNavTitle,
  getActiveNavModuleSheetSubPath,
  navModuleChildrenAsSheetSubnav,
} from "./config/navigation";
import {
  applyUiLocaleToDocument,
  formatNavModuleKicker,
  getUiLocale,
  navPrimaryLabel,
  pick,
  setUiLocale,
  t,
  tf,
} from "./i18n";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function navChildModuleLine(mod: NavModule, child: NavModule["children"][number]): string {
  return `${formatNavModuleKicker(mod)} — ${pick(child.title, child.titleEn)}`;
}

function sheetModuleAriaFromNav(mod: NavModule): { dialog: string; navFunc: string } {
  const dialog = escapeHtml(`${pick(mod.title, mod.titleEn)}${t("nav.secondarySuffix")}`);
  const navFunc = escapeHtml(tf("nav.sheetNavFunction", { name: pick(mod.title, mod.titleEn) }));
  return { dialog, navFunc };
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

/** 商品中心B（路由仍为 product-center-a）：视口全屏弹层（覆盖侧栏与主区），内嵌 Item Center */
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
        <h2 id="product-center-a-title" class="min-w-0 truncate text-sm font-semibold text-card-foreground sm:text-base">商品中心B</h2>
        <button
          type="button"
          id="product-center-a-close"
          class="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          关闭
        </button>
      </div>
      <div class="relative flex min-h-0 flex-1 flex-col">
        <p class="sr-only">商品中心B 全屏浮层内嵌外部页面。若内容空白，请确认 itemcenter.menusifudev.com 在 CSP frame-ancestors 或 X-Frame-Options 中允许被本后台来源嵌入。</p>
        <iframe
          title="商品中心B · Item Center"
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
      <p class="text-card-foreground">「商品中心B」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`;
}

/** 礼品卡中心 · Cards：云端礼品卡工厂（QA），主内容区 iframe */
const GIFT_CARDS_FACTORY_IFRAME_SRC = "https://cloud.menusifucloudqa.com/factory/giftcardb";

function isGiftCardsFactoryPath(path: string): boolean {
  return path === "/gift-cards/cards" || path.startsWith("/gift-cards/cards/");
}

function renderGiftCardsFactoryIframePanel(): string {
  const src = escapeHtml(GIFT_CARDS_FACTORY_IFRAME_SRC);
  return `
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <p class="sr-only">内嵌云端礼品卡工厂。若内容空白，请确认 cloud.menusifucloudqa.com 允许被本后台来源嵌入。</p>
      <iframe
        title="${escapeHtml(t("giftCards.embedTitle"))}"
        class="block h-full min-h-[22rem] w-full flex-1 border-0 sm:min-h-0"
        src="${src}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`;
}

/** 信贷中心：侧栏点击在新标签页打开 EZ Capital（站内不嵌 iframe） */
const CAPITAL_EXTERNAL_URL = "https://www.ezcapital.com/zh";

/** 效期管理：WMS 效期分类（主内容区 iframe） */
const INVENTORY_EXPIRY_WMS_IFRAME_SRC =
  "https://wms.menusifuchina.com/platform-expiration-category";

function isInventoryExpiryIframePath(path: string): boolean {
  return path === "/operations/inventory-ordering/expiry" || path.startsWith("/operations/inventory-ordering/expiry/");
}

/** 主区全宽嵌入 WMS 效期分类 */
function renderInventoryExpiryIframeSplit(): string {
  return `
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <iframe
        title="${escapeHtml(t("inventory.iframeTitle"))}"
        class="block h-full min-h-[22rem] w-full flex-1 border-0 sm:min-h-0"
        src="${INVENTORY_EXPIRY_WMS_IFRAME_SRC}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`;
}

/** 非侧栏二级且仅一条子路由时不渲染顶部 Tab（避免单子模块出现一条 Tab） */
function shouldShowModuleTabs(tabModule: NavModule | undefined): boolean {
  if (!tabModule || tabModule.subNavPlacement === "sidebar" || tabModule.subNavPlacement === "sheet") return false;
  /** 库存管理中心、商品中心：二级在侧栏滑出层，主区不展示 Tab */
  if (
    tabModule.id === "inventory-ordering" ||
    tabModule.id === "product-center-main" ||
    tabModule.id === "marketing" ||
    tabModule.id === "promotions" ||
    tabModule.id === "members" ||
    tabModule.id === "gift-cards" ||
    tabModule.id === "reports-finance" ||
    tabModule.id === "print-templates" ||
    tabModule.id === "reservations"
  )
    return false;
  return tabModule.children.length > 1;
}

const INVENTORY_SHEET_OPEN_KEY = "sidebar-inventory-secondary-open";
const PRODUCT_CENTER_MAIN_SHEET_OPEN_KEY = "sidebar-product-center-main-secondary-open";
const MARKETING_SHEET_OPEN_KEY = "sidebar-marketing-secondary-open";
const PROMOTIONS_SHEET_OPEN_KEY = "sidebar-promotions-secondary-open";
const MEMBERS_SHEET_OPEN_KEY = "sidebar-members-secondary-open";
const GIFT_CARDS_SHEET_OPEN_KEY = "sidebar-gift-cards-secondary-open";
const REPORTS_SHEET_OPEN_KEY = "sidebar-reports-secondary-open";
const PRINT_SHEET_OPEN_KEY = "sidebar-print-secondary-open";
const RESERVATIONS_SHEET_OPEN_KEY = "sidebar-reservations-secondary-open";
/** 商品中心滑层内「商品管理」整块子导航的展开/收起（sessionStorage） */
const PCM_SHEET_BP_MGMT_EXPAND_KEY = "pcm-sheet-brand-products-mgmt-expanded";
/** 商品中心滑层内「品牌菜单」下「菜单 / 下发记录」子导航的展开/收起（sessionStorage） */
const PCM_SHEET_BRAND_MENU_EXPAND_KEY = "pcm-sheet-brand-menu-expanded";
/** 商品中心滑层内「门店管理」下门店商品子导航的展开/收起（sessionStorage） */
const PCM_SHEET_STORE_MENU_EXPAND_KEY = "pcm-sheet-store-menu-expanded";
/** 营销中心滑层内「营销管理」子导航的展开/收起（sessionStorage） */
const MARKETING_SHEET_MGMT_EXPAND_KEY = "marketing-sheet-mgmt-expanded";

/** 与 `mountPath` 同步：用于在 hash 真正切离库存域时关闭滑层，且不误伤「同路径下仅开关滑层」的 mount */
let lastSidebarMountPathForInventorySheet = "";
/** 商品中心（主导航入口）滑层：离开品牌/门店商品相关路由时关闭 */
let lastSidebarMountPathForProductCenterMainSheet = "";
/** 营销中心滑层：离开 `/marketing` 域时关闭 */
let lastSidebarMountPathForMarketingSheet = "";
/** 促销中心滑层：离开 `/promotions` 域时关闭 */
let lastSidebarMountPathForPromotionsSheet = "";
/** 会员中心滑层：离开 `/members` 域时关闭 */
let lastSidebarMountPathForMembersSheet = "";
/** 礼品卡中心滑层：离开 `/gift-cards` 域时关闭 */
let lastSidebarMountPathForGiftCardsSheet = "";
/** 报表中心滑层：离开报表站内域时关闭 */
let lastSidebarMountPathForReportsSheet = "";
/** 打印中心滑层：离开 `/print-templates` 域时关闭 */
let lastSidebarMountPathForPrintSheet = "";
/** 预约等位中心滑层：离开 `/operations/reservations` 域时关闭 */
let lastSidebarMountPathForReservationsSheet = "";

/** `subNavPlacement: "sheet"` 的模块：二级滑层打开状态（sessionStorage JSON） */
const NAV_MODULE_SHEETS_OPEN_KEY = "sidebar-nav-module-sheets-open-json-v1";
/** 与 `mountPath` 同步：用于在离开各模块站内域时关闭对应滑层 */
let lastNavHubMountPathByModuleId: Record<string, string> = {};

/** 侧栏二级滑层：`translate-x-full`→`translate-x-0`（自右向左覆盖一级），缓进缓出 */
const SIDEBAR_SECONDARY_SHEET_TRANSITION =
  "transition-[transform,opacity] duration-[1000ms] ease-in-out will-change-[transform,opacity]";

/** 浅色侧栏白底 + 深色模式深侧栏：选中 / 分隔 / 标题等（避免写死 `text-white` / `border-white`） */
const SBR_ACTIVE = "bg-sidebar-active/12 text-sidebar-foreground dark:bg-white/10 dark:text-white";
const SBR_ACTIVE_FM = "bg-sidebar-active/12 font-medium text-sidebar-foreground dark:bg-white/10 dark:text-white";
const SBR_MUTED_ROW =
  "text-sidebar-muted hover:bg-sidebar-foreground/[0.06] dark:hover:bg-white/5 hover:text-sidebar-foreground";
const SBR_DIVIDER_B = "border-b border-sidebar-foreground/10 dark:border-white/10";
const SBR_DIVIDER_L = "border-l border-sidebar-foreground/10 dark:border-white/10";
const SBR_DIVIDER_T = "border-t border-sidebar-foreground/10 dark:border-white/10";
const SBR_TITLE = "text-sidebar-foreground dark:text-white";
const SBR_ICON_BTN =
  "text-sidebar-muted transition-colors hover:bg-sidebar-foreground/[0.06] dark:hover:bg-white/5 hover:text-sidebar-foreground";
const SBR_SHEET_GROUP_HEAD =
  "text-sidebar-foreground dark:text-white transition-colors hover:bg-sidebar-foreground/[0.06] dark:hover:bg-white/5";
const SBR_SHEET_SHADOW =
  "shadow-[6px_0_28px_rgba(15,23,42,0.07)] dark:shadow-[6px_0_32px_rgba(0,0,0,0.45)]";

function readNavModuleSheetsOpenState(): Record<string, boolean> {
  try {
    const raw = sessionStorage.getItem(NAV_MODULE_SHEETS_OPEN_KEY);
    if (!raw) return {};
    const o = JSON.parse(raw) as unknown;
    if (!o || typeof o !== "object" || Array.isArray(o)) return {};
    const out: Record<string, boolean> = {};
    for (const [k, v] of Object.entries(o as Record<string, unknown>)) {
      if (v === true) out[k] = true;
    }
    return out;
  } catch {
    return {};
  }
}

function readNavModuleSheetOpen(moduleId: string): boolean {
  return readNavModuleSheetsOpenState()[moduleId] === true;
}

function setNavModuleSheetOpen(moduleId: string, open: boolean): void {
  const next = { ...readNavModuleSheetsOpenState() };
  if (open) next[moduleId] = true;
  else delete next[moduleId];
  try {
    sessionStorage.setItem(NAV_MODULE_SHEETS_OPEN_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

function closeAllNavModuleSheets(): void {
  try {
    sessionStorage.removeItem(NAV_MODULE_SHEETS_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

let inventorySheetEscapeListenerBound = false;

function ensureInventorySheetEscapeListener(): void {
  if (inventorySheetEscapeListenerBound) return;
  inventorySheetEscapeListenerBound = true;
  window.addEventListener("keydown", (ev) => {
    if (ev.key !== "Escape") return;
    let closed = false;
    if (readInventorySecondarySheetOpen()) {
      setInventorySecondarySheetOpen(false);
      closed = true;
    }
    if (readProductCenterMainSecondarySheetOpen()) {
      setProductCenterMainSecondarySheetOpen(false);
      closed = true;
    }
    if (readMarketingSecondarySheetOpen()) {
      setMarketingSecondarySheetOpen(false);
      closed = true;
    }
    if (readPromotionsSecondarySheetOpen()) {
      setPromotionsSecondarySheetOpen(false);
      closed = true;
    }
    if (readMembersSecondarySheetOpen()) {
      setMembersSecondarySheetOpen(false);
      closed = true;
    }
    if (readGiftCardsSecondarySheetOpen()) {
      setGiftCardsSecondarySheetOpen(false);
      closed = true;
    }
    if (readReportsSecondarySheetOpen()) {
      setReportsSecondarySheetOpen(false);
      closed = true;
    }
    if (readPrintSecondarySheetOpen()) {
      setPrintSecondarySheetOpen(false);
      closed = true;
    }
    if (readReservationsSecondarySheetOpen()) {
      setReservationsSecondarySheetOpen(false);
      closed = true;
    }
    if (Object.keys(readNavModuleSheetsOpenState()).length > 0) {
      closeAllNavModuleSheets();
      closed = true;
    }
    if (closed) mount();
  });
}

function isInventoryManagementPath(path: string): boolean {
  return path === "/operations/inventory-ordering" || path.startsWith("/operations/inventory-ordering/");
}

function readInventorySecondarySheetOpen(): boolean {
  try {
    return sessionStorage.getItem(INVENTORY_SHEET_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

function setInventorySecondarySheetOpen(open: boolean): void {
  try {
    if (open) sessionStorage.setItem(INVENTORY_SHEET_OPEN_KEY, "true");
    else sessionStorage.removeItem(INVENTORY_SHEET_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

function getInventorySecondaryNavItems(): NavModule["children"] {
  const m = NAV_MODULES.find((x) => x.id === "inventory-ordering");
  return m?.children ?? [];
}

function isProductCenterMainHubPath(path: string): boolean {
  if (path === "/product-center-main" || path.startsWith("/product-center-main/")) return true;
  if (path === "/brand-products" || path.startsWith("/brand-products/")) return true;
  if (path === "/brand-menu" || path.startsWith("/brand-menu/")) return true;
  if (path === "/menu" || path.startsWith("/menu/")) return true;
  return false;
}

function readProductCenterMainSecondarySheetOpen(): boolean {
  try {
    return sessionStorage.getItem(PRODUCT_CENTER_MAIN_SHEET_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

function setProductCenterMainSecondarySheetOpen(open: boolean): void {
  try {
    if (open) sessionStorage.setItem(PRODUCT_CENTER_MAIN_SHEET_OPEN_KEY, "true");
    else sessionStorage.removeItem(PRODUCT_CENTER_MAIN_SHEET_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

function isMarketingHubPath(path: string): boolean {
  return path === "/marketing" || path.startsWith("/marketing/");
}

function readMarketingSecondarySheetOpen(): boolean {
  try {
    return sessionStorage.getItem(MARKETING_SHEET_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

function setMarketingSecondarySheetOpen(open: boolean): void {
  try {
    if (open) sessionStorage.setItem(MARKETING_SHEET_OPEN_KEY, "true");
    else sessionStorage.removeItem(MARKETING_SHEET_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

function isPromotionsHubPath(path: string): boolean {
  return path === "/promotions" || path.startsWith("/promotions/");
}

function readPromotionsSecondarySheetOpen(): boolean {
  try {
    return sessionStorage.getItem(PROMOTIONS_SHEET_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

function setPromotionsSecondarySheetOpen(open: boolean): void {
  try {
    if (open) sessionStorage.setItem(PROMOTIONS_SHEET_OPEN_KEY, "true");
    else sessionStorage.removeItem(PROMOTIONS_SHEET_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

function isMembersHubPath(path: string): boolean {
  return path === "/members" || path.startsWith("/members/");
}

function readMembersSecondarySheetOpen(): boolean {
  try {
    return sessionStorage.getItem(MEMBERS_SHEET_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

function setMembersSecondarySheetOpen(open: boolean): void {
  try {
    if (open) sessionStorage.setItem(MEMBERS_SHEET_OPEN_KEY, "true");
    else sessionStorage.removeItem(MEMBERS_SHEET_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

function isGiftCardsHubPath(path: string): boolean {
  return path === "/gift-cards" || path.startsWith("/gift-cards/");
}

function readGiftCardsSecondarySheetOpen(): boolean {
  try {
    return sessionStorage.getItem(GIFT_CARDS_SHEET_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

function setGiftCardsSecondarySheetOpen(open: boolean): void {
  try {
    if (open) sessionStorage.setItem(GIFT_CARDS_SHEET_OPEN_KEY, "true");
    else sessionStorage.removeItem(GIFT_CARDS_SHEET_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

function readReportsSecondarySheetOpen(): boolean {
  try {
    return sessionStorage.getItem(REPORTS_SHEET_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

function setReportsSecondarySheetOpen(open: boolean): void {
  try {
    if (open) sessionStorage.setItem(REPORTS_SHEET_OPEN_KEY, "true");
    else sessionStorage.removeItem(REPORTS_SHEET_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

function isPrintTemplatesHubPath(path: string): boolean {
  return path === "/print-templates" || path.startsWith("/print-templates/");
}

function readPrintSecondarySheetOpen(): boolean {
  try {
    return sessionStorage.getItem(PRINT_SHEET_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

function setPrintSecondarySheetOpen(open: boolean): void {
  try {
    if (open) sessionStorage.setItem(PRINT_SHEET_OPEN_KEY, "true");
    else sessionStorage.removeItem(PRINT_SHEET_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

function readReservationsSecondarySheetOpen(): boolean {
  try {
    return sessionStorage.getItem(RESERVATIONS_SHEET_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

function setReservationsSecondarySheetOpen(open: boolean): void {
  try {
    if (open) sessionStorage.setItem(RESERVATIONS_SHEET_OPEN_KEY, "true");
    else sessionStorage.removeItem(RESERVATIONS_SHEET_OPEN_KEY);
  } catch {
    /* ignore */
  }
}

const PCM_SHEET_GROUP_CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;

type PcSheetDarkSubnavOpts = {
  /** 品牌商品：显式「商品管理 → 二级 / 分组下 → 三级」层级与 aria */
  brandProductSecondLevel?: boolean;
  /** `brandProductSecondLevel` 为 true 时，可选覆盖外层 `nav` 的 `aria-label`（如品牌菜单子导航） */
  sheetGroupedSubnavAriaLabel?: string;
};

/** 商品中心侧滑层内：深色样式；`brandProductSecondLevel` 时条目为商品管理下二级，分组内为三级 */
function renderPcSheetDarkSubnav(
  path: string,
  items: ProductCenterSidebarSubItem[],
  getActiveSubPath: (p: string) => string,
  getCollapsibleChildActivePath: (p: string, item: ProductCenterSidebarSubItem) => string,
  opts?: PcSheetDarkSubnavOpts,
): string {
  const activeSub = getActiveSubPath(path);
  const bp2 = opts?.brandProductSecondLevel === true;
  const l2ListClass = bp2
    ? "space-y-1 border-l-2 border-sidebar-active/40 pl-2.5"
    : "space-y-0.5";
  /** 二级行：折叠父行与叶子链同一水平内边距，与「套餐组」等叶子项左缘对齐 */
  const l2RowHorizontal = bp2 ? "pl-0.5 pr-2.5" : "px-2.5";
  const l3WrapClass = bp2
    ? "mt-1.5 space-y-0.5 border-l-2 border-sidebar-foreground/20 dark:border-white/25 ml-2 pl-3"
    : "mt-1 space-y-0.5 border-l border-sidebar-foreground/15 dark:border-white/15 ml-3 pl-2";

  const renderItem = (item: ProductCenterSidebarSubItem): string => {
    const children = item.sidebarChildren;
    if (children?.length) {
      const prefix = item.activePrefix ?? item.path;
      const inGroup = path === prefix || path.startsWith(`${prefix}/`);
      const expanded = getTertiarySidebarGroupExpanded(item.id, path, inGroup);
      const parentSelected = item.path === activeSub;
      const childrenId = `pcm-sheet-tertiary-children-${item.id}`;
      const activeChild = getCollapsibleChildActivePath(path, item);
      const l3Label = `${pick(item.title, item.titleEn)}${t("nav.tertiarySuffix")}`.replace(/"/g, "&quot;");
      return `
        <li class="mb-1">
          <button type="button"
            data-tertiary-sidebar-toggle="${item.id}"
            class="flex w-full min-h-11 items-center gap-2 rounded-lg ${l2RowHorizontal} py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${
              parentSelected ? SBR_ACTIVE : SBR_MUTED_ROW
            }"
            aria-expanded="${expanded}"
            aria-controls="${childrenId}"
          >
            <span class="min-w-0 flex-1 truncate">${pick(item.title, item.titleEn)}</span>
            <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${expanded ? "" : "-rotate-90"}">${PCM_SHEET_GROUP_CHEVRON}</span>
          </button>
          <ul id="${childrenId}" class="${l3WrapClass} ${expanded ? "" : "hidden"}" role="list" aria-label="${l3Label}" ${expanded ? "" : 'aria-hidden="true"'}>
            ${children
              .map((c) => {
                const selected = c.path === activeChild;
                return `
            <li>
              <a href="#${c.path}"
                class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-xs sm:text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${
                  selected ? SBR_ACTIVE_FM : SBR_MUTED_ROW
                }"
                ${selected ? 'aria-current="page"' : ""}
                tabindex="${expanded ? "0" : "-1"}"
              >${pick(c.title, c.titleEn)}</a>
            </li>`;
              })
              .join("")}
          </ul>
        </li>`;
    }

    const selected = item.path === activeSub;
    return `
        <li class="mb-0.5">
          <a href="#${item.path}"
            class="flex min-h-9 items-center rounded-md ${l2RowHorizontal} py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${
              selected ? SBR_ACTIVE_FM : SBR_MUTED_ROW
            }"
            ${selected ? 'aria-current="page"' : ""}
          >${pick(item.title, item.titleEn)}</a>
        </li>`;
  };

  const inner = `<ul class="${l2ListClass}" role="list">${items.map(renderItem).join("")}</ul>`;
  if (!bp2) return inner;
  const navAria = (opts?.sheetGroupedSubnavAriaLabel ?? "商品管理 · 二级导航").replace(/"/g, "&quot;");
  return `<nav class="min-w-0" aria-label="${navAria}">${inner}</nav>`;
}

function pcmSheetNavNoChildPath(_path: string, _item: ProductCenterSidebarSubItem): string {
  return "";
}

/** 与库存管理中心同交互：自右滑入叠在一级导航之上；商品管理下为原品牌商品侧栏全部目录作二级导航 */
function renderProductCenterMainSecondarySheet(hash: string, open: boolean): string {
  const pcmHubMod = NAV_MODULES.find((x) => x.id === "product-center-main")!;
  const pcmCh = pcmHubMod.children;
  const pcmLbl0 = pick(pcmCh[0]!.title, pcmCh[0]!.titleEn);
  const pcmLbl1 = pick(pcmCh[1]!.title, pcmCh[1]!.titleEn);
  const pcmLbl2 = pick(pcmCh[2]!.title, pcmCh[2]!.titleEn);
  const pcmDlgAria = escapeHtml(`${pick(pcmHubMod.title, pcmHubMod.titleEn)}${t("nav.secondarySuffix")}`);
  const pcmNavFunc = escapeHtml(tf("nav.sheetNavFunction", { name: pick(pcmHubMod.title, pcmHubMod.titleEn) }));
  const brandMenuSheetAria = `${pcmLbl1} · ${t("nav.subNavQualifier")}`;
  const storeMenuSheetAria = `${pcmLbl2} · ${t("nav.subNavQualifier")}`;
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const bpMgmtExpanded = getPcmSheetBrandProductsMgmtExpanded(hash);
  const brMenuExpanded = getPcmSheetBrandMenuExpanded(hash);
  const storeMgmtExpanded = getPcmSheetStoreMenuExpanded(hash);
  /** 与「品牌菜单」「门店管理」同：不设额外水平 padding（由外层 nav `px-2` 统一）；首块无上分隔线 */
  const pcmHubSectionFirst = "pt-0";
  const pcmHubSectionRest = `${SBR_DIVIDER_T} pt-3`;
  const hubBody = `
        <div class="space-y-4">
          <section class="${pcmHubSectionFirst}">
            <button
              type="button"
              data-pcm-sheet-bp-mgmt-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${SBR_SHEET_GROUP_HEAD} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${bpMgmtExpanded}"
              aria-controls="pcm-sheet-bp-mgmt-children"
            >
              <span class="min-w-0 flex-1 truncate">${pcmLbl0}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${bpMgmtExpanded ? "" : "-rotate-90"}">${PCM_SHEET_GROUP_CHEVRON}</span>
            </button>
            <div id="pcm-sheet-bp-mgmt-children" class="${bpMgmtExpanded ? "" : "hidden"}" ${bpMgmtExpanded ? "" : 'aria-hidden="true"'}>
              ${renderPcSheetDarkSubnav(hash, BRAND_PRODUCTS_SUBNAV, getActiveBrandProductsSubPath, getBrandProductsSidebarChildActivePath, {
                brandProductSecondLevel: true,
              })}
            </div>
          </section>
          <section class="${pcmHubSectionRest}">
            <button
              type="button"
              data-pcm-sheet-brand-menu-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${SBR_SHEET_GROUP_HEAD} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${brMenuExpanded}"
              aria-controls="pcm-sheet-brand-menu-children"
            >
              <span class="min-w-0 flex-1 truncate">${pcmLbl1}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${brMenuExpanded ? "" : "-rotate-90"}">${PCM_SHEET_GROUP_CHEVRON}</span>
            </button>
            <div id="pcm-sheet-brand-menu-children" class="${brMenuExpanded ? "" : "hidden"}" ${brMenuExpanded ? "" : 'aria-hidden="true"'}>
              ${renderPcSheetDarkSubnav(hash, BRAND_MENU_SUBNAV, getActiveBrandMenuSubPath, pcmSheetNavNoChildPath, {
                brandProductSecondLevel: true,
                sheetGroupedSubnavAriaLabel: brandMenuSheetAria,
              })}
            </div>
          </section>
          <section class="${pcmHubSectionRest}">
            <button
              type="button"
              data-pcm-sheet-store-menu-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${SBR_SHEET_GROUP_HEAD} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${storeMgmtExpanded}"
              aria-controls="pcm-sheet-store-menu-children"
            >
              <span class="min-w-0 flex-1 truncate">${pcmLbl2}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${storeMgmtExpanded ? "" : "-rotate-90"}">${PCM_SHEET_GROUP_CHEVRON}</span>
            </button>
            <div id="pcm-sheet-store-menu-children" class="${storeMgmtExpanded ? "" : "hidden"}" ${storeMgmtExpanded ? "" : 'aria-hidden="true"'}>
              ${renderPcSheetDarkSubnav(hash, STORE_MENU_SUBNAV, getActiveStoreMenuSubPath, getStoreMenuSidebarChildActivePath, {
                brandProductSecondLevel: true,
                sheetGroupedSubnavAriaLabel: storeMenuSheetAria,
              })}
            </div>
          </section>
        </div>`;
  return `
    <div
      id="product-center-main-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${pcmDlgAria}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-product-center-main-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${pick(pcmHubMod.title, pcmHubMod.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${pcmNavFunc}">
        ${hubBody}
      </nav>
    </div>`;
}

/** 与商品中心同交互：侧栏内自右滑入；「营销管理」下为营销活动 / 手动营销 */
function renderMarketingSecondarySheet(hash: string, open: boolean): string {
  const mktMod = NAV_MODULES.find((x) => x.id === "marketing")!;
  const { dialog: mktDlg, navFunc: mktNavFunc } = sheetModuleAriaFromNav(mktMod);
  const mktMgmt = t("sheet.marketingMgmt");
  const mktMgmtSheetAria = `${mktMgmt} · ${t("nav.subNavQualifier")}`;
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const mgmtExpanded = getMarketingSheetMgmtExpanded(hash);
  const pcmHubSectionFirst = "pt-0";
  const hubBody = `
        <div class="space-y-4">
          <section class="${pcmHubSectionFirst}">
            <button
              type="button"
              data-marketing-sheet-mgmt-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${SBR_SHEET_GROUP_HEAD} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${mgmtExpanded}"
              aria-controls="marketing-sheet-mgmt-children"
            >
              <span class="min-w-0 flex-1 truncate">${mktMgmt}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${mgmtExpanded ? "" : "-rotate-90"}">${PCM_SHEET_GROUP_CHEVRON}</span>
            </button>
            <div id="marketing-sheet-mgmt-children" class="${mgmtExpanded ? "" : "hidden"}" ${mgmtExpanded ? "" : 'aria-hidden="true"'}>
              ${renderPcSheetDarkSubnav(hash, MARKETING_MGMT_SUBNAV, getActiveMarketingMgmtSubPath, pcmSheetNavNoChildPath, {
                brandProductSecondLevel: true,
                sheetGroupedSubnavAriaLabel: mktMgmtSheetAria,
              })}
            </div>
          </section>
        </div>`;
  return `
    <div
      id="marketing-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${mktDlg}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-marketing-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${pick(mktMod.title, mktMod.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${mktNavFunc}">
        ${hubBody}
      </nav>
    </div>`;
}

/** 与营销中心同交互；滑层内仅「促销活动」一项导航 */
function renderPromotionsSecondarySheet(hash: string, open: boolean): string {
  const prMod = NAV_MODULES.find((x) => x.id === "promotions")!;
  const { dialog: prDlg, navFunc: prNavFunc } = sheetModuleAriaFromNav(prMod);
  const promoOnly = PROMOTIONS_MGMT_SUBNAV[0]!;
  const promoSheetAria = pick(promoOnly.title, promoOnly.titleEn);
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const hubBody = `
        <div class="space-y-4">
          <section class="pt-0">
            ${renderPcSheetDarkSubnav(hash, PROMOTIONS_MGMT_SUBNAV, getActivePromotionsMgmtSubPath, pcmSheetNavNoChildPath, {
              brandProductSecondLevel: true,
              sheetGroupedSubnavAriaLabel: promoSheetAria,
            })}
          </section>
        </div>`;
  return `
    <div
      id="promotions-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${prDlg}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-promotions-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${pick(prMod.title, prMod.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${prNavFunc}">
        ${hubBody}
      </nav>
    </div>`;
}

/** 与营销中心同交互；「卡券管理」可展开三级，另「积分配置」 */
function renderMembersSecondarySheet(hash: string, open: boolean): string {
  const memMod = NAV_MODULES.find((x) => x.id === "members")!;
  const { dialog: memDlg, navFunc: memNavFunc } = sheetModuleAriaFromNav(memMod);
  const memGroupedAria = `${pick(memMod.title, memMod.titleEn)}${t("nav.secondarySuffix")}`;
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const hubBody = `
        <div class="space-y-4">
          <section class="pt-0">
            ${renderPcSheetDarkSubnav(hash, MEMBERS_SHEET_SUBNAV, getActiveMembersSheetSubPath, getMembersSheetSidebarChildActivePath, {
              brandProductSecondLevel: true,
              sheetGroupedSubnavAriaLabel: memGroupedAria,
            })}
          </section>
        </div>`;
  return `
    <div
      id="members-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${memDlg}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-members-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${pick(memMod.title, memMod.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${memNavFunc}">
        ${hubBody}
      </nav>
    </div>`;
}

/** 与营销中心同交互；滑层内 Cards、Settings */
function renderGiftCardsSecondarySheet(hash: string, open: boolean): string {
  const giftMod = NAV_MODULES.find((x) => x.id === "gift-cards")!;
  const { dialog: gcDlg, navFunc: gcNavFunc } = sheetModuleAriaFromNav(giftMod);
  const gcGroupedAria = `${pick(giftMod.title, giftMod.titleEn)} · ${t("nav.subNavQualifier")}`;
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const hubBody = `
        <div class="space-y-4">
          <section class="pt-0">
            ${renderPcSheetDarkSubnav(hash, GIFT_CARDS_SHEET_SUBNAV, getActiveGiftCardsSheetSubPath, pcmSheetNavNoChildPath, {
              brandProductSecondLevel: true,
              sheetGroupedSubnavAriaLabel: gcGroupedAria,
            })}
          </section>
        </div>`;
  return `
    <div
      id="gift-cards-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${gcDlg}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-gift-cards-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${pick(giftMod.title, giftMod.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${gcNavFunc}">
        ${hubBody}
      </nav>
    </div>`;
}

/** 与营销中心同交互；营业汇总、分组（销售汇总 / 商品报表 / 员工报表 / 走势详情）、月度经营分析 */
function renderReportsSecondarySheet(hash: string, open: boolean): string {
  const rptMod = NAV_MODULES.find((x) => x.id === "reports-finance")!;
  const { dialog: rptDlg, navFunc: rptNavFunc } = sheetModuleAriaFromNav(rptMod);
  const rptGroupedAria = `${pick(rptMod.title, rptMod.titleEn)}${t("nav.secondarySuffix")}`;
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const hubBody = `
        <div class="space-y-4">
          <section class="pt-0">
            ${renderPcSheetDarkSubnav(hash, REPORTS_SHEET_SUBNAV, getActiveReportsSheetSubPath, getReportsSheetSidebarChildActivePath, {
              brandProductSecondLevel: true,
              sheetGroupedSubnavAriaLabel: rptGroupedAria,
            })}
          </section>
        </div>`;
  return `
    <div
      id="reports-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${rptDlg}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-reports-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${pick(rptMod.title, rptMod.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${rptNavFunc}">
        ${hubBody}
      </nav>
    </div>`;
}

/** 与营销中心同交互；滑层内「打印装修」 */
function renderPrintSecondarySheet(hash: string, open: boolean): string {
  const printMod = NAV_MODULES.find((x) => x.id === "print-templates")!;
  const { dialog: ptDlg, navFunc: ptNavFunc } = sheetModuleAriaFromNav(printMod);
  const ptOnly = PRINT_SHEET_SUBNAV[0]!;
  const ptSheetAria = pick(ptOnly.title, ptOnly.titleEn);
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const hubBody = `
        <div class="space-y-4">
          <section class="pt-0">
            ${renderPcSheetDarkSubnav(hash, PRINT_SHEET_SUBNAV, getActivePrintSheetSubPath, pcmSheetNavNoChildPath, {
              brandProductSecondLevel: true,
              sheetGroupedSubnavAriaLabel: ptSheetAria,
            })}
          </section>
        </div>`;
  return `
    <div
      id="print-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${ptDlg}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-print-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${pick(printMod.title, printMod.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${ptNavFunc}">
        ${hubBody}
      </nav>
    </div>`;
}

/** 与营销中心同交互；滑层内 Waitlist / RSV / History 等 */
function renderReservationsSecondarySheet(hash: string, open: boolean): string {
  const resMod = NAV_MODULES.find((x) => x.id === "reservations")!;
  const { dialog: resDlg, navFunc: resNavFunc } = sheetModuleAriaFromNav(resMod);
  const resGroupedAria = `${pick(resMod.title, resMod.titleEn)} · ${t("nav.subNavQualifier")}`;
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const hubBody = `
        <div class="space-y-4">
          <section class="pt-0">
            ${renderPcSheetDarkSubnav(hash, RESERVATIONS_SHEET_SUBNAV, getActiveReservationsSheetSubPath, pcmSheetNavNoChildPath, {
              brandProductSecondLevel: true,
              sheetGroupedSubnavAriaLabel: resGroupedAria,
            })}
          </section>
        </div>`;
  return `
    <div
      id="reservations-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${resDlg}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-reservations-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${pick(resMod.title, resMod.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${resNavFunc}">
        ${hubBody}
      </nav>
    </div>`;
}

/** 品牌 / 门店 / 团队 / 订单 / 支付 / 评价 / 财务 / 硬件 / 权限 / 素材：与营销中心同交互的二级滑层 */
function renderNavModuleSecondarySheet(m: NavModule, hash: string, open: boolean): string {
  const { dialog: nmDlg, navFunc: nmNavFunc } = sheetModuleAriaFromNav(m);
  const nmGroupedAria = `${pick(m.title, m.titleEn)} · ${t("nav.subNavQualifier")}`;
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const subnav = navModuleChildrenAsSheetSubnav(m);
  const hubBody = `
        <div class="space-y-4">
          <section class="pt-0">
            ${renderPcSheetDarkSubnav(hash, subnav, (p) => getActiveNavModuleSheetSubPath(p, m), pcmSheetNavNoChildPath, {
              brandProductSecondLevel: true,
              sheetGroupedSubnavAriaLabel: nmGroupedAria,
            })}
          </section>
        </div>`;
  const sheetId = `${m.id}-secondary-sheet`;
  return `
    <div
      id="${sheetId}"
      class="absolute inset-0 z-[31] flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${nmDlg}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-nav-module-sheet-secondary-close="${m.id}"
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${escapeHtml(pick(m.title, m.titleEn))}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${nmNavFunc}">
        ${hubBody}
      </nav>
    </div>`;
}

/** 侧栏内自右向左滑入、叠在一级导航之上的库存二级导航层 */
function renderInventorySecondarySheet(hash: string, open: boolean): string {
  const invMod = NAV_MODULES.find((x) => x.id === "inventory-ordering")!;
  const invDlg = escapeHtml(t("inventory.sheetTitle"));
  const invNavFunc = escapeHtml(t("inventory.sheetNav"));
  const items = getInventorySecondaryNavItems();
  const sheetClass = open
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "translate-x-full pointer-events-none opacity-0";
  const chevronBack = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`;
  const links = items
    .map((item) => {
      const selected = hash === item.path || hash.startsWith(`${item.path}/`);
      return `
        <li>
          <a
            href="#${item.path}"
            class="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${
              selected ? SBR_ACTIVE : SBR_MUTED_ROW
            }"
            ${selected ? 'aria-current="page"' : ""}
          >
            <span class="min-w-0 flex-1 truncate">${pick(item.title, item.titleEn)}</span>
          </a>
        </li>`;
    })
    .join("");
  return `
    <div
      id="inventory-secondary-sheet"
      class="absolute inset-0 z-30 flex flex-col ${SBR_DIVIDER_L} bg-sidebar ${SBR_SHEET_SHADOW} ${SIDEBAR_SECONDARY_SHEET_TRANSITION} ${sheetClass}"
      ${open ? "" : "inert"}
      aria-hidden="${open ? "false" : "true"}"
      role="dialog"
      aria-modal="${open ? "true" : "false"}"
      aria-label="${invDlg}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${SBR_DIVIDER_B} px-2">
        <button
          type="button"
          data-inventory-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${SBR_ICON_BTN} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${escapeHtml(t("nav.backToPrimaryNav"))}"
        >
          ${chevronBack}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${SBR_TITLE}">${pick(invMod.title, invMod.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${invNavFunc}">
        <ul class="space-y-1" role="list">${links}</ul>
      </nav>
    </div>`;
}

function findTitle(path: string): { title: string; module?: string } {
  if (path === "/ai-assistant/chat" || path.startsWith("/ai-assistant/")) {
    return { title: t("findTitle.aiChat"), module: t("findTitle.aiModule") };
  }
  if (isProductCenterAPath(path)) {
    return { title: t("findTitle.productCenterB"), module: t("findTitle.productCenterBModule") };
  }
  if (path.startsWith("/gift-cards")) {
    const giftMod = NAV_MODULES.find((x) => x.id === "gift-cards")!;
    const sortedGc = [...GIFT_CARDS_SHEET_SUBNAV].sort((a, b) => b.path.length - a.path.length);
    let gcMatch: ProductCenterSidebarSubItem | undefined;
    for (const c of sortedGc) {
      if (path === c.path || path.startsWith(`${c.path}/`)) {
        gcMatch = c;
        break;
      }
    }
    return {
      title: gcMatch ? pick(gcMatch.title, gcMatch.titleEn) : pick(giftMod.title, giftMod.titleEn),
      module: t("findTitle.moduleGiftCards"),
    };
  }
  if (path.startsWith("/members")) {
    const memMod = NAV_MODULES.find((x) => x.id === "members")!;
    const card = MEMBERS_SHEET_SUBNAV.find((x) => x.id === "mem-card-mgmt");
    if (card?.sidebarChildren) {
      const sortedM = [...card.sidebarChildren].sort((a, b) => b.path.length - a.path.length);
      for (const c of sortedM) {
        if (path === c.path || path.startsWith(`${c.path}/`)) {
          return { title: pick(c.title, c.titleEn), module: t("findTitle.moduleMembersCards") };
        }
      }
    }
    const points = MEMBERS_SHEET_SUBNAV.find((x) => x.id === "mem-points");
    if (path === "/members/points" || path.startsWith("/members/points/")) {
      return {
        title: pick(points?.title ?? "积分配置", points?.titleEn),
        module: t("findTitle.moduleMembers"),
      };
    }
    return { title: pick(memMod.title, memMod.titleEn), module: t("findTitle.moduleMembers") };
  }
  if (isReportsCenterHubPath(path)) {
    for (const item of REPORTS_SHEET_SUBNAV) {
      if (item.sidebarChildren?.length) {
        const sortedR = [...item.sidebarChildren].sort((a, b) => b.path.length - a.path.length);
        for (const c of sortedR) {
          if (path === c.path || path.startsWith(`${c.path}/`)) {
            return {
              title: pick(c.title, c.titleEn),
              module: tf("findTitle.moduleReportsPrefix", { name: pick(item.title, item.titleEn) }),
            };
          }
        }
      }
      if (path === item.path || path.startsWith(`${item.path}/`)) {
        return { title: pick(item.title, item.titleEn), module: t("findTitle.moduleReportsBase") };
      }
    }
    const rptMod = NAV_MODULES.find((x) => x.id === "reports-finance");
    return {
      title: pick(rptMod?.title ?? "报表中心", rptMod?.titleEn),
      module: t("findTitle.moduleReportsBase"),
    };
  }
  const printNav = findPrintNavTitle(path);
  if (printNav) {
    const sortedPt = [...PRINT_SHEET_SUBNAV].sort((a, b) => b.path.length - a.path.length);
    let ptMatch: ProductCenterSidebarSubItem | undefined;
    for (const c of sortedPt) {
      if (path === c.path || path.startsWith(`${c.path}/`)) {
        ptMatch = c;
        break;
      }
    }
    const printMod = NAV_MODULES.find((x) => x.id === "print-templates")!;
    return {
      title: ptMatch ? pick(ptMatch.title, ptMatch.titleEn) : pick(printMod.title, printMod.titleEn),
      module: t("findTitle.modulePrint"),
    };
  }
  const resvNav = findReservationsNavTitle(path);
  if (resvNav) {
    const sortedRv = [...RESERVATIONS_SHEET_SUBNAV].sort((a, b) => b.path.length - a.path.length);
    let rvMatch: ProductCenterSidebarSubItem | undefined;
    for (const c of sortedRv) {
      if (path === c.path || path.startsWith(`${c.path}/`)) {
        rvMatch = c;
        break;
      }
    }
    const resMod = NAV_MODULES.find((x) => x.id === "reservations")!;
    return {
      title: rvMatch ? pick(rvMatch.title, rvMatch.titleEn) : pick(resMod.title, resMod.titleEn),
      module: t("findTitle.moduleReservations"),
    };
  }
  const menuTaxSub = getActiveMenuTaxSubPath(path);
  if (menuTaxSub) {
    const mt = MENU_TAX_TYPES_SUBNAV.find((x) => x.path === menuTaxSub);
    if (mt) return { title: pick(mt.title, mt.titleEn), module: t("findTitle.moduleTax") };
  }
  const brandSmSub = getActiveBrandSeasoningMgmtSubPath(path);
  if (brandSmSub) {
    const sm = BRAND_SEASONING_MGMT_SUBNAV.find((x) => x.path === brandSmSub);
    if (sm) return { title: pick(sm.title, sm.titleEn), module: t("findTitle.moduleSeasoning") };
  }
  const brandTagsSub = getActiveBrandTagsMgmtSubPath(path);
  if (brandTagsSub) {
    const tg = BRAND_TAGS_MGMT_SUBNAV.find((x) => x.path === brandTagsSub);
    if (tg) return { title: pick(tg.title, tg.titleEn), module: t("findTitle.moduleTags") };
  }
  const brandRecipesSub = getActiveBrandRecipesMgmtSubPath(path);
  if (brandRecipesSub) {
    const rp = BRAND_RECIPES_MGMT_SUBNAV.find((x) => x.path === brandRecipesSub);
    if (rp) return { title: pick(rp.title, rp.titleEn), module: t("findTitle.moduleRecipes") };
  }
  const dmHwSub = getActiveDeviceManagementHardwareSubPath(path);
  if (dmHwSub) {
    const dh = DEVICE_MANAGEMENT_HARDWARE_SUBNAV.find((x) => x.path === dmHwSub);
    if (dh) return { title: pick(dh.title, dh.titleEn), module: t("findTitle.moduleDmHw") };
  }
  const tipsSub = getActiveTipsManagementSubPath(path);
  if (tipsSub) {
    const tips = TIPS_MANAGEMENT_SUBNAV.find((x) => x.path === tipsSub);
    if (tips) return { title: pick(tips.title, tips.titleEn), module: t("findTitle.moduleTips") };
  }
  const teamRptSub = getActiveTeamReportsSubPath(path);
  if (teamRptSub) {
    const tr = TEAM_REPORTS_SUBNAV.find((x) => x.path === teamRptSub);
    if (tr) return { title: pick(tr.title, tr.titleEn), module: t("findTitle.moduleTeamReports") };
  }
  const teamSchSub = getActiveTeamSchedulingSubPath(path);
  if (teamSchSub) {
    const ts = TEAM_SCHEDULING_SUBNAV.find((x) => x.path === teamSchSub);
    if (ts) return { title: pick(ts.title, ts.titleEn), module: t("findTitle.moduleTeamScheduling") };
  }
  if (
    path === "/operations/inventory-ordering/inventory-change-log" ||
    path.startsWith("/operations/inventory-ordering/inventory-change-log/")
  ) {
    return { title: t("findTitle.inventoryChangeTitle"), module: t("findTitle.inventoryChangeModule") };
  }
  const sortedPcNav = [...PRODUCT_CENTER_DEEP_NAV].sort((a, b) => b.path.length - a.path.length);
  for (const item of sortedPcNav) {
    if (path === item.path || path.startsWith(`${item.path}/`)) {
      const module =
        path.startsWith("/brand-products") || path === "/brand-products"
          ? t("findTitle.moduleBrandProducts")
          : path.startsWith("/brand-menu") || path === "/brand-menu"
            ? t("findTitle.moduleBrandMenu")
            : t("findTitle.moduleStoreProducts");
      return { title: pick(item.title, item.titleEn), module };
    }
  }
  for (const m of NAV_MODULES) {
    if (m.path === path) return { title: pick(m.title, m.titleEn), module: formatNavModuleKicker(m) };
    const sortedChildren = [...m.children].sort((a, b) => b.path.length - a.path.length);
    for (const c of sortedChildren) {
      if (path === c.path || path.startsWith(`${c.path}/`)) {
        return { title: pick(c.title, c.titleEn), module: navChildModuleLine(m, c) };
      }
    }
  }
  return { title: t("findTitle.page"), module: undefined };
}

/** 当前路由是否落在该导航模块下（支持 `matchPrefixes` 聚合模块，如商品中心A） */
function pathBelongsToModule(path: string, m: NavModule): boolean {
  const prefixes = m.matchPrefixes?.length ? m.matchPrefixes : [m.path];
  return prefixes.some((p) => path === p || path.startsWith(`${p}/`));
}

function syncNavModuleSheetsOnRouteChange(mountPath: string): void {
  for (const m of NAV_MODULES) {
    if (m.subNavPlacement !== "sheet") continue;
    const prev = lastNavHubMountPathByModuleId[m.id];
    if (prev !== undefined && prev !== mountPath && !pathBelongsToModule(mountPath, m)) {
      setNavModuleSheetOpen(m.id, false);
    }
    lastNavHubMountPathByModuleId[m.id] = mountPath;
  }
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

function renderGlobalUiLocaleControl(): string {
  const cur = getUiLocale();
  const lab = escapeHtml(t("locale.label"));
  return `<div class="flex shrink-0 items-center">
      <label for="global-ui-locale" class="sr-only">${lab}</label>
      <select
        id="global-ui-locale"
        title="${lab}"
        class="h-9 max-w-[8.5rem] cursor-pointer rounded-md border border-border bg-background px-2 text-sm text-foreground shadow-sm transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-11 sm:max-w-none sm:px-2.5"
        aria-label="${lab}"
      >
        <option value="zh" ${cur === "zh" ? "selected" : ""}>${escapeHtml(t("locale.optionZh"))}</option>
        <option value="en" ${cur === "en" ? "selected" : ""}>${escapeHtml(t("locale.optionEn"))}</option>
      </select>
    </div>`;
}

function bindGlobalUiLocaleControl(): void {
  const sel = document.getElementById("global-ui-locale") as HTMLSelectElement | null;
  if (!sel) return;
  sel.value = getUiLocale();
  sel.addEventListener("change", () => {
    const v = sel.value === "en" ? "en" : "zh";
    setUiLocale(v);
    applyUiLocaleToDocument(v);
    window.dispatchEvent(new CustomEvent("menusifu:ui-locale-change", { detail: { locale: v } }));
    mount();
  });
}

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
    replaceHashPath("/gift-cards/cards");
    return;
  }
  if (raw === "/gift-cards/design" || raw === "/gift-cards/design/" || raw.startsWith("/gift-cards/design/")) {
    replaceHashPath("/gift-cards/cards");
    return;
  }
  if (raw === "/marketing/ai/ads" || raw.startsWith("/marketing/ai/ads/")) {
    replaceHashPath("/marketing/campaigns");
    return;
  }
  if (raw === "/marketing" || raw === "/marketing/") {
    replaceHashPath("/marketing/campaigns");
    return;
  }
  if (raw === "/reports" || raw === "/reports/") {
    replaceHashPath("/reports/revenue");
    return;
  }
  if (raw === "/members/settings" || raw === "/members/settings/" || raw.startsWith("/members/settings/")) {
    replaceHashPath("/members/card/coupon-mgmt");
    return;
  }
  if (raw === "/members" || raw === "/members/") {
    replaceHashPath("/members/card/coupon-mgmt");
    return;
  }
  if (raw === "/print-templates" || raw === "/print-templates/") {
    replaceHashPath("/print-templates/decoration");
    return;
  }
  if (raw === "/print-templates/list" || raw === "/print-templates/list/" || raw.startsWith("/print-templates/list/")) {
    replaceHashPath("/print-templates/decoration");
    return;
  }
  if (raw === "/operations/reservations" || raw === "/operations/reservations/") {
    replaceHashPath("/operations/reservations/waitlist");
    return;
  }
  if (
    raw === "/operations/reservations/language" ||
    raw === "/operations/reservations/language/" ||
    raw.startsWith("/operations/reservations/language/") ||
    raw === "/operations/reservations/refresh" ||
    raw === "/operations/reservations/refresh/" ||
    raw.startsWith("/operations/reservations/refresh/")
  ) {
    replaceHashPath("/operations/reservations/waitlist");
    return;
  }
  if (raw === "/operations/inventory-ordering" || raw === "/operations/inventory-ordering/") {
    replaceHashPath("/operations/inventory-ordering/expiry");
    return;
  }
  if (raw === "/product-center-main" || raw === "/product-center-main/") {
    replaceHashPath("/brand-products/products");
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

function getPcmSheetBrandProductsMgmtExpanded(currentPath: string): boolean {
  try {
    const raw = sessionStorage.getItem(PCM_SHEET_BP_MGMT_EXPAND_KEY);
    if (raw === "true") return true;
    if (raw === "false") return false;
  } catch {
    /* ignore */
  }
  return currentPath.startsWith("/brand-products");
}

function setPcmSheetBrandProductsMgmtExpanded(expanded: boolean): void {
  try {
    sessionStorage.setItem(PCM_SHEET_BP_MGMT_EXPAND_KEY, expanded ? "true" : "false");
  } catch {
    /* ignore */
  }
}

function getPcmSheetBrandMenuExpanded(currentPath: string): boolean {
  try {
    const raw = sessionStorage.getItem(PCM_SHEET_BRAND_MENU_EXPAND_KEY);
    if (raw === "true") return true;
    if (raw === "false") return false;
  } catch {
    /* ignore */
  }
  return currentPath.startsWith("/brand-menu");
}

function setPcmSheetBrandMenuExpanded(expanded: boolean): void {
  try {
    sessionStorage.setItem(PCM_SHEET_BRAND_MENU_EXPAND_KEY, expanded ? "true" : "false");
  } catch {
    /* ignore */
  }
}

function getPcmSheetStoreMenuExpanded(currentPath: string): boolean {
  try {
    const raw = sessionStorage.getItem(PCM_SHEET_STORE_MENU_EXPAND_KEY);
    if (raw === "true") return true;
    if (raw === "false") return false;
  } catch {
    /* ignore */
  }
  return currentPath.startsWith("/menu");
}

function setPcmSheetStoreMenuExpanded(expanded: boolean): void {
  try {
    sessionStorage.setItem(PCM_SHEET_STORE_MENU_EXPAND_KEY, expanded ? "true" : "false");
  } catch {
    /* ignore */
  }
}

function getMarketingSheetMgmtExpanded(currentPath: string): boolean {
  try {
    const raw = sessionStorage.getItem(MARKETING_SHEET_MGMT_EXPAND_KEY);
    if (raw === "true") return true;
    if (raw === "false") return false;
  } catch {
    /* ignore */
  }
  return currentPath.startsWith("/marketing");
}

function setMarketingSheetMgmtExpanded(expanded: boolean): void {
  try {
    sessionStorage.setItem(MARKETING_SHEET_MGMT_EXPAND_KEY, expanded ? "true" : "false");
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
            <span class="min-w-0 flex-1 truncate">${pick(item.title, item.titleEn)}</span>
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
              >${pick(c.title, c.titleEn)}</a>
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
          >${pick(item.title, item.titleEn)}</a>
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

function renderBrandMenuSidebar(path: string): string {
  const pcA = NAV_MODULES.find((x) => x.id === "product-center")!;
  const bmChild = pcA.children.find((c) => c.path === "/brand-menu")!;
  const navHeading = pick(bmChild.title, bmChild.titleEn);
  const navLabel = navHeading.replace(/"/g, "&quot;");
  const activeSub = getActiveBrandMenuSubPath(path);
  return `
    <nav class="brand-menu-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${navHeading}</p>
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
          >${pick(item.title, item.titleEn)}</a>
        </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

function renderStoreMenuSidebar(path: string): string {
  const pcA = NAV_MODULES.find((x) => x.id === "product-center")!;
  const smChild = pcA.children.find((c) => c.path === "/menu")!;
  const navHeading = pick(smChild.title, smChild.titleEn);
  return renderProductCenterTertiarySidebar(path, {
    navClass: "store-menu-subnav",
    navAriaLabel: navHeading.replace(/"/g, "&quot;"),
    heading: navHeading,
    items: STORE_MENU_SUBNAV,
    getActiveSubPath: getActiveStoreMenuSubPath,
    getCollapsibleChildActivePath: getStoreMenuSidebarChildActivePath,
  });
}

function renderDeviceManagementHardwareSidebar(path: string): string {
  const dmMod = NAV_MODULES.find((x) => x.id === "device-management")!;
  const hwChild = dmMod.children.find((c) => c.id === "dm-hardware")!;
  const navLabel = `${pick(dmMod.title, dmMod.titleEn)} · ${pick(hwChild.title, hwChild.titleEn)}`.replace(/"/g, "&quot;");
  const panelHeading = pick(hwChild.title, hwChild.titleEn);
  const activeSub = getActiveDeviceManagementHardwareSubPath(path);
  return `
    <nav class="device-management-hardware-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${panelHeading}</p>
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
          >${pick(item.title, item.titleEn)}</a>
        </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

function renderSidebar(): string {
  const hash = location.hash.slice(1) || "/dashboard/overview";
  const inventorySheetOpen = readInventorySecondarySheetOpen();
  const pcmSheetOpen = readProductCenterMainSecondarySheetOpen();
  const marketingSheetOpen = readMarketingSecondarySheetOpen();
  const promotionsSheetOpen = readPromotionsSecondarySheetOpen();
  const membersSheetOpen = readMembersSecondarySheetOpen();
  const giftCardsSheetOpen = readGiftCardsSecondarySheetOpen();
  const reportsSheetOpen = readReportsSecondarySheetOpen();
  const printSheetOpen = readPrintSecondarySheetOpen();
  const reservationsSheetOpen = readReservationsSecondarySheetOpen();
  const navModuleSheetsOpen = NAV_MODULES.some((m) => m.subNavPlacement === "sheet" && readNavModuleSheetOpen(m.id));
  const navObscured =
    inventorySheetOpen ||
    pcmSheetOpen ||
    marketingSheetOpen ||
    promotionsSheetOpen ||
    membersSheetOpen ||
    giftCardsSheetOpen ||
    reportsSheetOpen ||
    printSheetOpen ||
    reservationsSheetOpen ||
    navModuleSheetsOpen
      ? "opacity-40 pointer-events-none transition-opacity duration-300"
      : "transition-opacity duration-300";
  return `
    <aside class="flex h-full min-h-0 w-72 shrink-0 flex-col overflow-hidden border-r border-border bg-sidebar text-sidebar-foreground" aria-label="${escapeHtml(t("shell.navAside"))}">
      <div class="flex h-14 shrink-0 items-center gap-2 ${SBR_DIVIDER_B} px-4">
        <span class="flex size-9 items-center justify-center rounded-lg bg-sidebar-active text-sidebar-active-fg" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h0v7"/></svg>
        </span>
        <div class="min-w-0">
          <p class="truncate text-sm font-semibold tracking-tight ${SBR_TITLE}">${escapeHtml(t("shell.appName"))}</p>
          <p class="truncate text-xs text-sidebar-muted">${escapeHtml(t("shell.appTagline"))}</p>
        </div>
      </div>
      <div class="relative min-h-0 flex flex-1 flex-col overflow-hidden">
        <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-2 py-3 ${navObscured}" id="nav-tree" aria-label="${escapeHtml(t("shell.navTree"))}">
          ${NAV_MODULES.map((m) => renderModule(m, hash)).join("")}
        </nav>
        ${renderInventorySecondarySheet(hash, inventorySheetOpen)}
        ${renderProductCenterMainSecondarySheet(hash, pcmSheetOpen)}
        ${renderMarketingSecondarySheet(hash, marketingSheetOpen)}
        ${renderPromotionsSecondarySheet(hash, promotionsSheetOpen)}
        ${renderMembersSecondarySheet(hash, membersSheetOpen)}
        ${renderGiftCardsSecondarySheet(hash, giftCardsSheetOpen)}
        ${renderReportsSecondarySheet(hash, reportsSheetOpen)}
        ${renderPrintSecondarySheet(hash, printSheetOpen)}
        ${renderReservationsSecondarySheet(hash, reservationsSheetOpen)}
        ${NAV_MODULES.filter((m) => m.subNavPlacement === "sheet")
          .map((m) => renderNavModuleSecondarySheet(m, hash, readNavModuleSheetOpen(m.id)))
          .join("")}
      </div>
    </aside>
  `;
}

function renderTipsManagementSidebar(path: string): string {
  const navLabel = t("tertiaryNav.tips").replace(/"/g, "&quot;");
  const activeSub = getActiveTipsManagementSubPath(path);
  return `
    <nav class="tips-management-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${t("tertiaryNav.tips")}</p>
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
          >${pick(item.title, item.titleEn)}</a>
        </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

function renderTeamReportsSidebar(path: string): string {
  const navLabel = t("tertiaryNav.teamReports").replace(/"/g, "&quot;");
  const activeSub = getActiveTeamReportsSubPath(path);
  return `
    <nav class="team-reports-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${t("tertiaryNav.teamReports")}</p>
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
          >${pick(item.title, item.titleEn)}</a>
        </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

function renderTeamSchedulingSidebar(path: string): string {
  const navLabel = t("tertiaryNav.teamScheduling").replace(/"/g, "&quot;");
  const activeSub = getActiveTeamSchedulingSubPath(path);
  return `
    <nav class="team-scheduling-subnav w-52 shrink-0 border-r border-border pr-4 ${TERTIARY_SUBNAV_SCROLL_CLASSES}" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${t("tertiaryNav.teamScheduling")}</p>
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
          >${pick(item.title, item.titleEn)}</a>
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
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${expanded}"
        aria-controls="${childrenId}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${expanded ? "" : "-rotate-90"}">${chevron}</span>
      </button>
      <ul id="${childrenId}" class="mt-1 space-y-0.5 border-l border-sidebar-foreground/15 dark:border-white/15 ml-4 pl-2 ${expanded ? "" : "hidden"}" role="list" ${expanded ? "" : 'aria-hidden="true"'}>
        ${m.children
          .map((c) => {
            const selected = c.path === activeChildPath;
            const chainBadge = c.chainOnly
              ? `<span class="ml-1 rounded bg-sidebar-active/25 px-1 py-px text-[10px] text-sidebar-active-fg">${escapeHtml(t("badge.chain"))}</span>`
              : "";
            return `
        <li>
          <a href="#${c.path}"
            class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${
              selected ? SBR_ACTIVE_FM : SBR_MUTED_ROW
            }"
            ${selected ? 'aria-current="page"' : ""}
            tabindex="${expanded ? "0" : "-1"}"
          ><span class="min-w-0 flex-1 truncate">${pick(c.title, c.titleEn)}${chainBadge}</span></a>
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
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${SBR_MUTED_ROW}"
        title="${escapeHtml(t("capital.newTab"))}"
        aria-label="${escapeHtml(t("capital.aria"))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-xs text-sidebar-muted/90" aria-hidden="true">↗</span>
      </a>
    </div>`;
  }

  if (m.id === "product-center-main") {
    const inModule = isProductCenterMainHubPath(hash);
    const sheetOpen = readProductCenterMainSecondarySheetOpen();
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-product-center-main-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="product-center-main-secondary-sheet"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.id === "marketing") {
    const inModule = isMarketingHubPath(hash);
    const sheetOpen = readMarketingSecondarySheetOpen();
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-marketing-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="marketing-secondary-sheet"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.id === "promotions") {
    const inModule = isPromotionsHubPath(hash);
    const sheetOpen = readPromotionsSecondarySheetOpen();
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-promotions-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="promotions-secondary-sheet"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.id === "members") {
    const inModule = isMembersHubPath(hash);
    const sheetOpen = readMembersSecondarySheetOpen();
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-members-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="members-secondary-sheet"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.id === "reports-finance") {
    const inModule = isReportsCenterHubPath(hash);
    const sheetOpen = readReportsSecondarySheetOpen();
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-reports-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="reports-secondary-sheet"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.id === "print-templates") {
    const inModule = isPrintTemplatesHubPath(hash);
    const sheetOpen = readPrintSecondarySheetOpen();
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-print-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="print-secondary-sheet"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.id === "reservations") {
    const inModule = isReservationsHubPath(hash);
    const sheetOpen = readReservationsSecondarySheetOpen();
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-reservations-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="reservations-secondary-sheet"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.id === "gift-cards") {
    const inModule = isGiftCardsHubPath(hash);
    const sheetOpen = readGiftCardsSecondarySheetOpen();
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-gift-cards-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="gift-cards-secondary-sheet"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.id === "inventory-ordering") {
    const inModule = pathBelongsToModule(hash, m);
    const sheetOpen = readInventorySecondarySheetOpen();
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-inventory-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="inventory-secondary-sheet"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.subNavPlacement === "sheet") {
    const inModule = pathBelongsToModule(hash, m);
    const sheetOpen = readNavModuleSheetOpen(m.id);
    const sheetDomId = `${m.id}-secondary-sheet`;
    const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
    return `
    <div class="mb-1" data-nav-module="${m.id}">
      <button
        type="button"
        data-nav-module-sheet-sidebar-open="${m.id}"
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? SBR_ACTIVE : SBR_MUTED_ROW}"
        aria-expanded="${sheetOpen}"
        aria-controls="${sheetDomId}"
        title="${escapeHtml(tf("nav.openSecondary", { name: navPrimaryLabel(m) }))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${sheetOpen ? "rotate-180" : ""}" aria-hidden="true">${chevron}</span>
      </button>
    </div>`;
  }

  if (m.subNavPlacement === "sidebar") {
    const expanded = getSidebarModuleExpanded(m, hash);
    return renderExpandableSidebarModule(m, hash, expanded);
  }

  return `
    <div class="mb-1" data-nav-module="${m.id}">
      <a href="#${defaultPath}"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${pathBelongsToModule(hash, m) ? SBR_ACTIVE : SBR_MUTED_ROW}"
        ${pathBelongsToModule(hash, m) ? 'aria-current="page"' : ""}
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${navPrimaryLabel(m)}</span>
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
          <span class="text-sm font-semibold text-card-foreground group-hover:text-primary">${pick(item.title, item.titleEn)}</span>
          <span class="mt-0.5 text-xs text-muted-foreground">${getUiLocale() === "en" ? item.title : (item.titleEn ?? "")}</span>
        </a>
      </li>`,
  ).join("");
  return `
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 class="text-base font-semibold tracking-tight text-card-foreground">${t("settings.overview.title")}</h2>
      <p class="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        ${t("settings.overview.desc")}
      </p>
      <ul class="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3" role="list">
        ${cards}
      </ul>
    </div>
  `;
}

function renderAiAssistantChat(): string {
  const welcome = t("ai.welcomeHtml");
  const quickClass =
    "rounded-full border border-border bg-background px-3 py-1.5 text-left text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const voiceTitle = escapeHtml(t("ai.voice"));
  return `
    <div class="flex min-h-0 min-w-0 flex-1 flex-col gap-4" id="ai-assistant-root">
      <div class="rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-3 text-sm leading-relaxed text-muted-foreground dark:bg-primary/10">
        <p class="flex items-start gap-2">
          <span class="mt-0.5 shrink-0 text-primary" aria-hidden="true">${AI_ASSISTANT_ICON}</span>
          <span>${t("ai.contextNote")}</span>
        </p>
      </div>
      <div class="flex flex-wrap gap-2" role="group" aria-label="${escapeHtml(t("ai.quickAria"))}">
        <button type="button" class="${quickClass}" data-ai-quick-prompt="帮我查一下权限管理中心里店长和收银员的区别">${escapeHtml(t("ai.quick.permissions"))}</button>
        <button type="button" class="${quickClass}" data-ai-quick-prompt="搜索一下和打印中心相关的设置在哪里">${escapeHtml(t("ai.quick.search"))}</button>
        <button type="button" class="${quickClass}" data-ai-quick-prompt="分析一下最近一周各门店营业额趋势">${escapeHtml(t("ai.quick.analysis"))}</button>
        <button type="button" class="${quickClass}" data-ai-quick-prompt="我想把旗舰店的营业时间改成早上8点到晚上11点">${escapeHtml(t("ai.quick.config"))}</button>
        <a href="#/permissions/overview" class="inline-flex items-center rounded-full border border-dashed border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/35 hover:text-foreground">${escapeHtml(t("ai.link.permissions"))}</a>
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
            <p class="mt-2 text-xs text-muted-foreground">${t("ai.tipVoiceLang")}</p>
          </div>
        </div>
      </div>
      <form id="ai-assistant-form" class="flex min-w-0 shrink-0 flex-col gap-2 sm:flex-row sm:items-end">
        <div class="min-w-0 w-full flex-1 overflow-hidden sm:min-w-0">
          <label for="ai-assistant-input" class="sr-only">${escapeHtml(t("ai.srInputLabel"))}</label>
          <textarea
            id="ai-assistant-input"
            rows="2"
            autocomplete="off"
            placeholder="${escapeHtml(t("ai.input.placeholder"))}"
            class="box-border min-h-[2.75rem] max-w-full w-full resize-y rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
          ></textarea>
        </div>
        <div class="flex w-full shrink-0 gap-2 sm:w-auto sm:justify-end">
          <button
            type="button"
            id="ai-assistant-voice"
            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="${voiceTitle}"
            aria-pressed="false"
            title="${voiceTitle}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </button>
          <button
            type="submit"
            id="ai-assistant-send"
            class="inline-flex h-11 min-w-[5rem] items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            ${escapeHtml(t("ai.send"))}
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
      appendBubble("assistant", t("ai.speech.unsupported"));
      return;
    }
    const rec = new SR();
    rec.lang = getUiLocale() === "en" ? "en-US" : "zh-CN";
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
      appendBubble("assistant", t("ai.speech.micError"));
    };
    rec.onend = () => {
      voiceBtn.setAttribute("aria-pressed", "false");
      voiceBtn.classList.remove("ring-2", "ring-ring");
    };
    try {
      rec.start();
    } catch {
      appendBubble("assistant", t("ai.speech.startFailed"));
      voiceBtn.setAttribute("aria-pressed", "false");
      voiceBtn.classList.remove("ring-2", "ring-ring");
    }
  });
}

function renderModuleTabs(path: string, tabModule: NavModule): string {
  const tabs = tabModule.children;
  const activeTabPath = getActiveChildTabPath(path, tabs);
  const navLabel = tf("nav.subPagesAria", {
    name: pick(tabModule.title, tabModule.titleEn),
  }).replace(/"/g, "&quot;");
  return `
    <nav class="mb-6" aria-label="${navLabel}">
      <div class="-mx-1 flex gap-0.5 overflow-x-auto overflow-y-hidden pb-px scroll-smooth [scrollbar-width:thin]" role="tablist">
        ${tabs
          .map((c) => {
            const selected = c.path === activeTabPath;
            const chainBadge = c.chainOnly
              ? `<span class="ml-1 rounded bg-primary/15 px-1 py-px text-[10px] text-primary dark:bg-primary/25">${escapeHtml(t("badge.chain"))}</span>`
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
            <span class="truncate">${pick(c.title, c.titleEn)}${chainBadge}</span>
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
      aria-label="${escapeHtml(t("header.scopeGroup"))}"
      title="${escapeHtml(t("header.scopeGroupTitle"))}"
    >
      <label class="sr-only" for="scope-brand-select">${escapeHtml(t("header.scopeBrand"))}</label>
      <select id="scope-brand-select" class="${sel}" aria-label="${escapeHtml(t("header.scopeBrandAria"))}">
        <option value="">${escapeHtml(t("header.scopeAllBrands"))}</option>
        <option value="miju">米聚餐饮集团</option>
        <option value="menusifu-na">MenuSifu 北美</option>
      </select>
      <label class="sr-only" for="scope-region-select">${escapeHtml(t("header.scopeRegion"))}</label>
      <select id="scope-region-select" class="${sel}" aria-label="${escapeHtml(t("header.scopeRegionAria"))}">
        <option value="">${escapeHtml(t("header.scopeAllRegions"))}</option>
        <option value="east-cn">华东大区</option>
        <option value="south-cn">华南大区</option>
        <option value="north-cn">华北大区</option>
        <option value="us-west">美国西海岸</option>
        <option value="us-east">美国东海岸</option>
      </select>
      <label class="sr-only" for="scope-store-select">${escapeHtml(t("header.scopeStore"))}</label>
      <select id="scope-store-select" class="${sel}" aria-label="${escapeHtml(t("header.scopeStoreAria"))}">
        <option value="">${escapeHtml(t("header.scopeAllStores"))}</option>
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
  const headerKicker = tabModule ? formatNavModuleKicker(tabModule) : module ?? "";
  const isAiAssistant = path.startsWith("/ai-assistant");
  const isBrandProductsTertiary = isBrandProductsTertiaryPath(path);
  const isBrandMenuTertiary = isBrandMenuTertiaryPath(path);
  const isStoreMenuTertiary = isStoreMenuTertiaryPath(path);
  const isDeviceManagementHardware = isDeviceManagementHardwarePath(path);
  const isTipsManagementTertiary = isTipsManagementTertiaryPath(path);
  const isTeamReportsTertiary = isTeamReportsTertiaryPath(path);
  const isTeamSchedulingTertiary = isTeamSchedulingTertiaryPath(path);
  const isProductCenterA = isProductCenterAPath(path);
  const isGiftCardsFactory = isGiftCardsFactoryPath(path);
  const isInventoryExpiryIframe = isInventoryExpiryIframePath(path);
  const wideContentLayout =
    isAiAssistant ||
    isBrandMenuTertiary ||
    isStoreMenuTertiary ||
    isDeviceManagementHardware ||
    isTipsManagementTertiary ||
    isTeamReportsTertiary ||
    isTeamSchedulingTertiary ||
    isInventoryExpiryIframe ||
    isGiftCardsFactory;
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
          <h1 id="main-content" tabindex="-1" class="truncate text-lg font-semibold tracking-tight text-card-foreground">${escapeHtml(title)}</h1>
        </div>
        <div class="flex w-full min-w-0 flex-wrap items-center justify-end gap-2 sm:w-auto sm:flex-nowrap">
          <a
            href="#/ai-assistant/chat"
            class="inline-flex h-9 items-center gap-1.5 rounded-md border border-primary/35 bg-primary/[0.08] px-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:h-10 sm:px-3"
            title="${escapeHtml(t("header.aiOpenTitle"))}"
          >
            <span class="shrink-0 text-primary [&>svg]:block" aria-hidden="true">${AI_ASSISTANT_ICON}</span>
            <span class="hidden sm:inline">${escapeHtml(t("header.aiShort"))}</span>
          </a>
          ${renderHeaderScopeFilters()}
          ${renderGlobalUiLocaleControl()}
          <button type="button" id="theme-toggle" class="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:size-11" aria-label="${escapeHtml(t("header.themeToggle"))}">
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
                : isGiftCardsFactory
                  ? renderGiftCardsFactoryIframePanel()
                : isInventoryExpiryIframe
                  ? renderInventoryExpiryIframeSplit()
                : isBrandProductsTertiary
                  ? renderPlaceholder(path, title, tabModule, { brandProductsSubnav: true })
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
  const sheetSecond = tabModule?.subNavPlacement === "sheet";
  const brandProductsSubnav = opts?.brandProductsSubnav;
  const brandMenuSubnav = opts?.brandMenuSubnav;
  const storeMenuSubnav = opts?.storeMenuSubnav;
  const deviceManagementHardwareSubnav = opts?.deviceManagementHardwareSubnav;
  const tipsManagementSubnav = opts?.tipsManagementSubnav;
  const teamReportsSubnav = opts?.teamReportsSubnav;
  const teamSchedulingSubnav = opts?.teamSchedulingSubnav;
  const modTitle = tabModule ? pick(tabModule.title, tabModule.titleEn) : "";
  const firstBullet = deviceManagementHardwareSubnav
    ? t("placeholder.bullet.deviceHw")
    : tipsManagementSubnav
      ? t("placeholder.bullet.tips")
      : teamReportsSubnav
        ? t("placeholder.bullet.teamReports")
        : teamSchedulingSubnav
          ? t("placeholder.bullet.teamScheduling")
          : brandProductsSubnav
            ? t("placeholder.bullet.brandProducts")
            : brandMenuSubnav
              ? t("placeholder.bullet.brandMenu")
              : storeMenuSubnav
                ? t("placeholder.bullet.storeMenu")
                : tabModule?.id === "permission-mgmt"
                  ? t("placeholder.bullet.permissions")
                  : tabModule?.id === "reservations"
                    ? t("placeholder.bullet.reservations")
                    : sheetSecond && tabModule
                      ? tf("placeholder.sheetModule", { title: modTitle })
                      : sidebarSecond && tabModule
                        ? tf("placeholder.sidebarModule", {
                            title: modTitle,
                          })
                        : tabModule
                          ? tf("placeholder.tabModule", { title: modTitle })
                          : "";
  const navDocLi = sidebarSecond || sheetSecond ? t("placeholder.navDocLong") : t("placeholder.navDocShort");
  const kpiLabels = [t("placeholder.kpi.sales"), t("placeholder.kpi.orders"), t("placeholder.kpi.staff")];
  return `
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="text-sm text-muted-foreground leading-relaxed">${escapeHtml(t("placeholder.route"))}<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">${path}</code></p>
      <p class="mt-4 text-base text-card-foreground">${tf("placeholder.intro", { title })}</p>
      <ul class="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
        ${firstBullet ? `<li>${firstBullet}</li>` : ""}
        <li>${navDocLi}</li>
        <li>${t("placeholder.designTokens")}</li>
        <li>${t("placeholder.chainTab")}</li>
      </ul>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${kpiLabels
        .map(
          (label) =>
            `<div class="rounded-lg border border-border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">${escapeHtml(label)}</p><p class="mt-2 text-2xl font-semibold tabular-nums text-card-foreground">—</p></div>`,
        )
        .join("")}
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
  applyUiLocaleToDocument(getUiLocale());

  const mountPathForSheet = location.hash.slice(1) || "/dashboard/overview";
  if (
    lastSidebarMountPathForInventorySheet !== mountPathForSheet &&
    !isInventoryManagementPath(mountPathForSheet)
  ) {
    setInventorySecondarySheetOpen(false);
  }
  lastSidebarMountPathForInventorySheet = mountPathForSheet;

  if (
    lastSidebarMountPathForProductCenterMainSheet !== mountPathForSheet &&
    !isProductCenterMainHubPath(mountPathForSheet)
  ) {
    setProductCenterMainSecondarySheetOpen(false);
  }
  lastSidebarMountPathForProductCenterMainSheet = mountPathForSheet;

  if (
    lastSidebarMountPathForMarketingSheet !== mountPathForSheet &&
    !isMarketingHubPath(mountPathForSheet)
  ) {
    setMarketingSecondarySheetOpen(false);
  }
  lastSidebarMountPathForMarketingSheet = mountPathForSheet;

  if (
    lastSidebarMountPathForPromotionsSheet !== mountPathForSheet &&
    !isPromotionsHubPath(mountPathForSheet)
  ) {
    setPromotionsSecondarySheetOpen(false);
  }
  lastSidebarMountPathForPromotionsSheet = mountPathForSheet;

  if (
    lastSidebarMountPathForMembersSheet !== mountPathForSheet &&
    !isMembersHubPath(mountPathForSheet)
  ) {
    setMembersSecondarySheetOpen(false);
  }
  lastSidebarMountPathForMembersSheet = mountPathForSheet;

  if (
    lastSidebarMountPathForGiftCardsSheet !== mountPathForSheet &&
    !isGiftCardsHubPath(mountPathForSheet)
  ) {
    setGiftCardsSecondarySheetOpen(false);
  }
  lastSidebarMountPathForGiftCardsSheet = mountPathForSheet;

  if (
    lastSidebarMountPathForReportsSheet !== mountPathForSheet &&
    !isReportsCenterHubPath(mountPathForSheet)
  ) {
    setReportsSecondarySheetOpen(false);
  }
  lastSidebarMountPathForReportsSheet = mountPathForSheet;

  if (
    lastSidebarMountPathForPrintSheet !== mountPathForSheet &&
    !isPrintTemplatesHubPath(mountPathForSheet)
  ) {
    setPrintSecondarySheetOpen(false);
  }
  lastSidebarMountPathForPrintSheet = mountPathForSheet;

  if (
    lastSidebarMountPathForReservationsSheet !== mountPathForSheet &&
    !isReservationsHubPath(mountPathForSheet)
  ) {
    setReservationsSecondarySheetOpen(false);
  }
  lastSidebarMountPathForReservationsSheet = mountPathForSheet;

  syncNavModuleSheetsOnRouteChange(mountPathForSheet);

  if (fullscreenIframeModalEscapeHandler) {
    window.removeEventListener("keydown", fullscreenIframeModalEscapeHandler);
    fullscreenIframeModalEscapeHandler = null;
  }

  const app = document.getElementById("app");
  if (!app) return;

  /** 全量重绘会替换 #nav-tree：合并 DOM 读值与 session 记忆，避免二次 mount 时读到的 scrollTop 为 0 */
  const prevNavScrollTop = document.getElementById("nav-tree")?.scrollTop ?? 0;
  const targetNavScroll = Math.max(prevNavScrollTop, readSidebarNavScrollMemory());

  const mountPath = mountPathForSheet;
  const showProductCenterAModal = isProductCenterAPath(mountPath);

  app.innerHTML = `
    <div class="relative h-dvh min-h-0 w-full overflow-hidden">
      <div class="flex h-full min-h-0 w-full">
        ${renderSidebar()}
        ${renderMain()}
      </div>
      ${showProductCenterAModal ? renderProductCenterAFullscreenModal() : ""}
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

  document.getElementById("nav-tree")?.addEventListener(
    "click",
    (e) => {
      const invBtn = (e.target as HTMLElement).closest("[data-inventory-sidebar-open]");
      if (invBtn && invBtn instanceof HTMLButtonElement) {
        e.preventDefault();
        closeAllNavModuleSheets();
        setProductCenterMainSecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(false);
        setInventorySecondarySheetOpen(!readInventorySecondarySheetOpen());
        mount();
        return;
      }
      const pcmBtn = (e.target as HTMLElement).closest("[data-product-center-main-sidebar-open]");
      if (pcmBtn && pcmBtn instanceof HTMLButtonElement) {
        e.preventDefault();
        closeAllNavModuleSheets();
        setInventorySecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(false);
        setProductCenterMainSecondarySheetOpen(!readProductCenterMainSecondarySheetOpen());
        mount();
        return;
      }
      const mktBtn = (e.target as HTMLElement).closest("[data-marketing-sidebar-open]");
      if (mktBtn && mktBtn instanceof HTMLButtonElement) {
        e.preventDefault();
        closeAllNavModuleSheets();
        setInventorySecondarySheetOpen(false);
        setProductCenterMainSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(!readMarketingSecondarySheetOpen());
        mount();
        return;
      }
      const promoBtn = (e.target as HTMLElement).closest("[data-promotions-sidebar-open]");
      if (promoBtn && promoBtn instanceof HTMLButtonElement) {
        e.preventDefault();
        closeAllNavModuleSheets();
        setInventorySecondarySheetOpen(false);
        setProductCenterMainSecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(!readPromotionsSecondarySheetOpen());
        mount();
        return;
      }
      const memBtn = (e.target as HTMLElement).closest("[data-members-sidebar-open]");
      if (memBtn && memBtn instanceof HTMLButtonElement) {
        e.preventDefault();
        closeAllNavModuleSheets();
        setInventorySecondarySheetOpen(false);
        setProductCenterMainSecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(!readMembersSecondarySheetOpen());
        mount();
        return;
      }
      const rptBtn = (e.target as HTMLElement).closest("[data-reports-sidebar-open]");
      if (rptBtn && rptBtn instanceof HTMLButtonElement) {
        e.preventDefault();
        closeAllNavModuleSheets();
        setInventorySecondarySheetOpen(false);
        setProductCenterMainSecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(!readReportsSecondarySheetOpen());
        mount();
        return;
      }
      const printBtn = (e.target as HTMLElement).closest("[data-print-sidebar-open]");
      if (printBtn && printBtn instanceof HTMLButtonElement) {
        e.preventDefault();
        closeAllNavModuleSheets();
        setInventorySecondarySheetOpen(false);
        setProductCenterMainSecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(!readPrintSecondarySheetOpen());
        mount();
        return;
      }
      const resvBtn = (e.target as HTMLElement).closest("[data-reservations-sidebar-open]");
      if (resvBtn && resvBtn instanceof HTMLButtonElement) {
        e.preventDefault();
        closeAllNavModuleSheets();
        setInventorySecondarySheetOpen(false);
        setProductCenterMainSecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(!readReservationsSecondarySheetOpen());
        mount();
        return;
      }
      const gcBtn = (e.target as HTMLElement).closest("[data-gift-cards-sidebar-open]");
      if (gcBtn && gcBtn instanceof HTMLButtonElement) {
        e.preventDefault();
        closeAllNavModuleSheets();
        setInventorySecondarySheetOpen(false);
        setProductCenterMainSecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(!readGiftCardsSecondarySheetOpen());
        mount();
        return;
      }
      const navModSheetBtn = (e.target as HTMLElement).closest("[data-nav-module-sheet-sidebar-open]");
      if (navModSheetBtn && navModSheetBtn instanceof HTMLButtonElement) {
        const sid = navModSheetBtn.getAttribute("data-nav-module-sheet-sidebar-open");
        if (!sid) return;
        e.preventDefault();
        const nextOpen = !readNavModuleSheetOpen(sid);
        setInventorySecondarySheetOpen(false);
        setProductCenterMainSecondarySheetOpen(false);
        setMarketingSecondarySheetOpen(false);
        setPromotionsSecondarySheetOpen(false);
        setMembersSecondarySheetOpen(false);
        setGiftCardsSecondarySheetOpen(false);
        setReportsSecondarySheetOpen(false);
        setPrintSecondarySheetOpen(false);
        setReservationsSecondarySheetOpen(false);
        closeAllNavModuleSheets();
        if (nextOpen) setNavModuleSheetOpen(sid, true);
        mount();
        return;
      }
      const navLink = (e.target as HTMLElement).closest("a[href^='#']");
      if (navLink && navLink instanceof HTMLAnchorElement) {
        const p = navLink.getAttribute("href")?.slice(1) ?? "";
        if (p && !isInventoryManagementPath(p)) {
          setInventorySecondarySheetOpen(false);
        }
        if (p && !isProductCenterMainHubPath(p)) {
          setProductCenterMainSecondarySheetOpen(false);
        }
        if (p && !isMarketingHubPath(p)) {
          setMarketingSecondarySheetOpen(false);
        }
        if (p && !isPromotionsHubPath(p)) {
          setPromotionsSecondarySheetOpen(false);
        }
        if (p && !isMembersHubPath(p)) {
          setMembersSecondarySheetOpen(false);
        }
        if (p && !isGiftCardsHubPath(p)) {
          setGiftCardsSecondarySheetOpen(false);
        }
        if (p && !isReportsCenterHubPath(p)) {
          setReportsSecondarySheetOpen(false);
        }
        if (p && !isPrintTemplatesHubPath(p)) {
          setPrintSecondarySheetOpen(false);
        }
        if (p && !isReservationsHubPath(p)) {
          setReservationsSecondarySheetOpen(false);
        }
        for (const m of NAV_MODULES) {
          if (m.subNavPlacement !== "sheet") continue;
          if (p && !pathBelongsToModule(p, m)) setNavModuleSheetOpen(m.id, false);
        }
      }
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
    },
    true,
  );

  document.getElementById("inventory-secondary-sheet")?.addEventListener(
    "click",
    (e) => {
      const hit = e.target as HTMLElement;
      if (hit.closest("[data-inventory-secondary-close]")) {
        e.preventDefault();
        setInventorySecondarySheetOpen(false);
        mount();
        return;
      }
      /** 滑层内「效期管理 / 物料管理」等链接仅切换路由，不关闭二级滑层（由 hashchange 触发 mount 保持打开态） */
    },
    true,
  );

  document.getElementById("product-center-main-secondary-sheet")?.addEventListener(
    "click",
    (e) => {
      const hit = e.target as HTMLElement;
      if (hit.closest("[data-pcm-sheet-bp-mgmt-toggle]")) {
        e.preventDefault();
        const hash = location.hash.slice(1) || "/dashboard/overview";
        setPcmSheetBrandProductsMgmtExpanded(!getPcmSheetBrandProductsMgmtExpanded(hash));
        mount();
        return;
      }
      if (hit.closest("[data-pcm-sheet-brand-menu-toggle]")) {
        e.preventDefault();
        const hash = location.hash.slice(1) || "/dashboard/overview";
        setPcmSheetBrandMenuExpanded(!getPcmSheetBrandMenuExpanded(hash));
        mount();
        return;
      }
      if (hit.closest("[data-pcm-sheet-store-menu-toggle]")) {
        e.preventDefault();
        const hash = location.hash.slice(1) || "/dashboard/overview";
        setPcmSheetStoreMenuExpanded(!getPcmSheetStoreMenuExpanded(hash));
        mount();
        return;
      }
      if (hit.closest("[data-product-center-main-secondary-close]")) {
        e.preventDefault();
        setProductCenterMainSecondarySheetOpen(false);
        mount();
      }
    },
    true,
  );

  document.getElementById("marketing-secondary-sheet")?.addEventListener(
    "click",
    (e) => {
      const hit = e.target as HTMLElement;
      if (hit.closest("[data-marketing-sheet-mgmt-toggle]")) {
        e.preventDefault();
        const hash = location.hash.slice(1) || "/dashboard/overview";
        setMarketingSheetMgmtExpanded(!getMarketingSheetMgmtExpanded(hash));
        mount();
        return;
      }
      if (hit.closest("[data-marketing-secondary-close]")) {
        e.preventDefault();
        setMarketingSecondarySheetOpen(false);
        mount();
      }
    },
    true,
  );

  document.getElementById("promotions-secondary-sheet")?.addEventListener(
    "click",
    (e) => {
      const hit = e.target as HTMLElement;
      if (hit.closest("[data-promotions-secondary-close]")) {
        e.preventDefault();
        setPromotionsSecondarySheetOpen(false);
        mount();
      }
    },
    true,
  );

  document.getElementById("members-secondary-sheet")?.addEventListener(
    "click",
    (e) => {
      const hit = e.target as HTMLElement;
      if (hit.closest("[data-members-secondary-close]")) {
        e.preventDefault();
        setMembersSecondarySheetOpen(false);
        mount();
      }
    },
    true,
  );

  document.getElementById("gift-cards-secondary-sheet")?.addEventListener(
    "click",
    (e) => {
      const hit = e.target as HTMLElement;
      if (hit.closest("[data-gift-cards-secondary-close]")) {
        e.preventDefault();
        setGiftCardsSecondarySheetOpen(false);
        mount();
      }
    },
    true,
  );

  document.getElementById("reports-secondary-sheet")?.addEventListener(
    "click",
    (e) => {
      const hit = e.target as HTMLElement;
      if (hit.closest("[data-reports-secondary-close]")) {
        e.preventDefault();
        setReportsSecondarySheetOpen(false);
        mount();
      }
    },
    true,
  );

  document.getElementById("print-secondary-sheet")?.addEventListener(
    "click",
    (e) => {
      const hit = e.target as HTMLElement;
      if (hit.closest("[data-print-secondary-close]")) {
        e.preventDefault();
        setPrintSecondarySheetOpen(false);
        mount();
      }
    },
    true,
  );

  document.getElementById("reservations-secondary-sheet")?.addEventListener(
    "click",
    (e) => {
      const hit = e.target as HTMLElement;
      if (hit.closest("[data-reservations-secondary-close]")) {
        e.preventDefault();
        setReservationsSecondarySheetOpen(false);
        mount();
      }
    },
    true,
  );

  for (const m of NAV_MODULES) {
    if (m.subNavPlacement !== "sheet") continue;
    document.getElementById(`${m.id}-secondary-sheet`)?.addEventListener(
      "click",
      (e) => {
        const hit = e.target as HTMLElement;
        if (hit.closest(`[data-nav-module-sheet-secondary-close="${m.id}"]`)) {
          e.preventDefault();
          setNavModuleSheetOpen(m.id, false);
          mount();
        }
      },
      true,
    );
  }

  app.firstElementChild?.addEventListener("click", (e) => {
    const el = (e.target as HTMLElement).closest("[data-tertiary-sidebar-toggle]");
    if (!el || !(el instanceof HTMLButtonElement)) return;
    const groupId = el.getAttribute("data-tertiary-sidebar-toggle");
    if (!groupId) return;
    const sheetNavTertiaryItem = NAV_MODULES.filter((mod) => mod.subNavPlacement === "sheet").reduce<
      ProductCenterSidebarSubItem | undefined
    >((acc, mod) => {
      if (acc) return acc;
      return navModuleChildrenAsSheetSubnav(mod).find((x) => x.id === groupId);
    }, undefined);
    const item =
      BRAND_PRODUCTS_SUBNAV.find((x) => x.id === groupId) ??
      STORE_MENU_SUBNAV.find((x) => x.id === groupId) ??
      MEMBERS_SHEET_SUBNAV.find((x) => x.id === groupId) ??
      GIFT_CARDS_SHEET_SUBNAV.find((x) => x.id === groupId) ??
      REPORTS_SHEET_SUBNAV.find((x) => x.id === groupId) ??
      PRINT_SHEET_SUBNAV.find((x) => x.id === groupId) ??
      RESERVATIONS_SHEET_SUBNAV.find((x) => x.id === groupId) ??
      sheetNavTertiaryItem;
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
  }

  bindAiAssistantHandlers();
  bindHeaderScopeFilters();
  bindGlobalUiLocaleControl();
  ensureInventorySheetEscapeListener();
}

window.addEventListener("hashchange", mount);

if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}

mount();
