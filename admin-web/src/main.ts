import "./styles/app.css";
import {
  NAV_MODULES,
  type NavModule,
  KIOSK_ORDERING_SUBNAV,
  getKioskOrderingDefaultPath,
  STORE_BASIC_SUBNAV,
  getActiveStoreBasicSubPath,
  isStoreBasicTertiaryPath,
} from "./config/navigation";

const ICONS: Record<NavModule["icon"], string> = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  orders: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  receipt: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>`,
  storeInfo: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>`,
  channels: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  floorPlan: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>`,
  kitchenKds: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13h12"/><path d="M6 9h12"/><path d="M9 5h6v4H9z"/><path d="M8 21h8v-4H8z"/></svg>`,
  customerDisplay: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
  queueCall: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  reservations: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  waitlist: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>`,
  hardware: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12" y1="18" y2="18.01"/></svg>`,
  inventory: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  patrol: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  promo: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><path d="M11.5 11.5 6 17l-4 1 1-4 5.5-5.5"/></svg>`,
  marketing: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  members: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  reviews: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>`,
  gift: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>`,
  team: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  reports: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  capital: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

function findTitle(path: string): { title: string; module?: string } {
  for (const k of KIOSK_ORDERING_SUBNAV) {
    if (k.path === path) {
      return { title: k.title, module: "智能点餐 / Kiosk 点餐" };
    }
  }
  const storeBasicSub = getActiveStoreBasicSubPath(path);
  if (storeBasicSub) {
    const sb = STORE_BASIC_SUBNAV.find((x) => x.path === storeBasicSub);
    if (sb) return { title: sb.title, module: "门店信息 · 门店基础信息" };
  }
  for (const m of NAV_MODULES) {
    if (m.path === path) return { title: m.title, module: m.titleEn };
    for (const c of m.children) {
      if (c.path === path) return { title: c.title, module: `${m.title} / ${m.titleEn}` };
    }
  }
  return { title: "页面", module: undefined };
}

/** 按最长 path 前缀匹配，避免 `/orders` 与 `/ordering` 等歧义 */
function getTabModule(path: string): NavModule | undefined {
  let best: NavModule | undefined;
  let bestLen = -1;
  for (const m of NAV_MODULES) {
    if (path === m.path || path.startsWith(`${m.path}/`)) {
      if (m.path.length > bestLen) {
        bestLen = m.path.length;
        best = m;
      }
    }
  }
  return best;
}

/** 将 `#/menu`、`#/reports` 等仅一级路径规范为各自 defaultChildPath（单页模块 path===default 时不跳转） */
function normalizeTabModuleHashes(): void {
  const raw = location.hash.slice(1);
  if (raw === "/ordering/kiosk" || raw === "/ordering/kiosk/") {
    location.replace(`#${getKioskOrderingDefaultPath()}`);
    return;
  }
  /* 原侧栏一级「桌台平面图」已移除，旧链接统一到门店信息下的桌台 */
  if (raw === "/operations/floor-plan" || raw.startsWith("/operations/floor-plan/")) {
    location.replace("#/store/floor-plan");
    return;
  }
  /* 订单侧栏仅保留全部/退单/历史，原堂食·在线等 Tab 路径统一到全部订单 */
  const legacyOrderChannelPaths = ["/orders/dine-in", "/orders/online", "/orders/delivery", "/orders/pickup"];
  if (legacyOrderChannelPaths.some((p) => raw === p || raw.startsWith(`${p}/`))) {
    location.replace("#/orders/all");
    return;
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
function getSidebarModuleExpanded(moduleId: string, modulePath: string, currentPath: string): boolean {
  try {
    const v = sessionStorage.getItem(sidebarExpandStorageKey(moduleId));
    if (v === "true") return true;
    if (v === "false") return false;
    // 兼容旧键（仅原智能点餐）
    if (moduleId === "ordering-channels") {
      const legacy = sessionStorage.getItem("ordering-sidebar-expanded");
      if (legacy === "true") return true;
      if (legacy === "false") return false;
    }
  } catch {
    /* ignore */
  }
  return currentPath === modulePath || currentPath.startsWith(`${modulePath}/`);
}

function setSidebarModuleExpanded(moduleId: string, expanded: boolean): void {
  try {
    sessionStorage.setItem(sidebarExpandStorageKey(moduleId), expanded ? "true" : "false");
  } catch {
    /* ignore */
  }
}

/** Tab 内二级渠道按最长 path 前缀匹配，避免 `/ordering/kiosk/...` 误匹配其它 `/ordering/...` */
function getActiveChildTabPath(path: string, children: NavModule["children"]): string {
  const sorted = [...children].sort((a, b) => b.path.length - a.path.length);
  for (const c of sorted) {
    if (path === c.path || path.startsWith(`${c.path}/`)) return c.path;
  }
  return "";
}

function renderStoreBasicSidebar(path: string): string {
  const navLabel = "门店基础信息".replace(/"/g, "&quot;");
  const activeSub = getActiveStoreBasicSubPath(path);
  return `
    <nav class="store-basic-subnav w-52 shrink-0 border-r border-border pr-4" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">门店基础信息</p>
      <ul class="space-y-0.5">
        ${STORE_BASIC_SUBNAV.map((item) => {
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

function renderKioskOrderingSidebar(path: string): string {
  const navLabel = "Kiosk 点餐设置".replace(/"/g, "&quot;");
  return `
    <nav class="kiosk-ordering-subnav w-52 shrink-0 border-r border-border pr-4" aria-label="${navLabel}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Kiosk 点餐</p>
      <ul class="space-y-0.5">
        ${KIOSK_ORDERING_SUBNAV.map((item) => {
          const selected = path === item.path;
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
          <p class="truncate text-sm font-semibold tracking-tight text-white">Merchant Admin</p>
          <p class="truncate text-xs text-sidebar-muted">餐饮商家后台</p>
        </div>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-2 py-3" id="nav-tree" aria-label="主导航树">
        ${NAV_MODULES.map((m) => renderModule(m, hash)).join("")}
      </nav>
    </aside>
  `;
}

/** 侧栏折叠模块：一级行点击仅展开/收起；子项在下方二级链接进入（订单/门店/菜单/点餐/交易/报表/促销/营销/会员/评价/礼品卡/团队等） */
function renderExpandableSidebarModule(m: NavModule, hash: string, expanded: boolean): string {
  const inModule = hash === m.path || hash.startsWith(`${m.path}/`);
  let activeChildPath = getActiveChildTabPath(hash, m.children);
  if (m.id === "store-info" && isStoreBasicTertiaryPath(hash)) {
    activeChildPath = "/store/basic";
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
  const inModule = hash === m.path || hash.startsWith(`${m.path}/`);

  if (m.subNavPlacement === "sidebar") {
    const expanded = getSidebarModuleExpanded(m.id, m.path, hash);
    return renderExpandableSidebarModule(m, hash, expanded);
  }

  return `
    <div class="mb-1" data-nav-module="${m.id}">
      <a href="#${defaultPath}"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${inModule ? "bg-white/10 text-white" : "text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"}"
        ${inModule ? 'aria-current="page"' : ""}
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ICONS[m.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${m.title}</span>
      </a>
    </div>`;
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

function renderMain(): string {
  const path = location.hash.slice(1) || "/dashboard/overview";
  const tabModule = getTabModule(path);
  const { title, module } = findTitle(path);
  const headerKicker = tabModule ? `${tabModule.title} · ${tabModule.titleEn}` : module ?? "";
  const isKioskOrdering = path.startsWith("/ordering/kiosk");
  const isStoreBasicTertiary = isStoreBasicTertiaryPath(path);
  const wideContentLayout = isKioskOrdering || isStoreBasicTertiary;
  const showModuleTabs = Boolean(tabModule && tabModule.subNavPlacement !== "sidebar");

  return `
    <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <header class="z-40 flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border bg-card/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div class="min-w-0">
          <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">${headerKicker}</p>
          <h1 id="main-content" tabindex="-1" class="truncate text-lg font-semibold tracking-tight text-card-foreground">${title}</h1>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <label class="sr-only" for="store-select">当前门店</label>
          <select id="store-select" class="h-10 max-w-[200px] rounded-md border border-border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" aria-label="切换门店">
            <option>全部门店</option>
            <option>旗舰店 · NYC</option>
            <option>分店 · LA</option>
          </select>
          <button type="button" id="theme-toggle" class="inline-flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" aria-label="切换深色模式">
            <svg class="size-5 dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            <svg class="size-5 hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          </button>
        </div>
      </header>
      <main class="min-h-0 flex-1 overflow-y-auto p-4 md:p-6 animate-fade-in">
        <div class="mx-auto ${wideContentLayout ? "max-w-[90rem]" : "max-w-6xl"} space-y-6">
          ${showModuleTabs ? renderModuleTabs(path, tabModule!) : ""}
          <div role="tabpanel" aria-label="${title.replace(/"/g, "&quot;")}" id="module-tab-panel">
            ${
              isKioskOrdering
                ? `<div class="flex min-h-0 flex-col gap-6 sm:flex-row sm:items-start">
                    ${renderKioskOrderingSidebar(path)}
                    <div class="min-w-0 flex-1">${renderPlaceholder(path, title, tabModule, { kioskSubnav: true })}</div>
                  </div>`
                : isStoreBasicTertiary
                  ? `<div class="flex min-h-0 flex-col gap-6 sm:flex-row sm:items-start">
                    ${renderStoreBasicSidebar(path)}
                    <div class="min-w-0 flex-1">${renderPlaceholder(path, title, tabModule, { storeBasicSubnav: true })}</div>
                  </div>`
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
  opts?: { kioskSubnav?: boolean; storeBasicSubnav?: boolean },
): string {
  const sidebarSecond = tabModule?.subNavPlacement === "sidebar";
  const kioskSubnav = opts?.kioskSubnav;
  const storeBasicSubnav = opts?.storeBasicSubnav;
  return `
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="text-sm text-muted-foreground leading-relaxed">当前路由：<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">${path}</code></p>
      <p class="mt-4 text-base text-card-foreground">「${title}」页面占位 — 可在此接入列表、表单或图表。</p>
      <ul class="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
        ${
          kioskSubnav
            ? `<li><strong class="text-card-foreground">Kiosk 点餐</strong>：在左侧主导航展开「智能点餐」后选择 <strong class="text-card-foreground">Kiosk 点餐</strong>；本区域左侧为 Kiosk 细项设置。</li>`
            : storeBasicSubnav
              ? `<li><strong class="text-card-foreground">门店基础信息</strong>：主导航展开「门店信息」后选「门店基础信息」；本区域左侧为 <strong class="text-card-foreground">基础信息 / LOGO / 营业时间</strong> 细项（交互同 Kiosk）。</li>`
              : sidebarSecond
                ? `<li>本模块（<strong class="text-card-foreground">${tabModule.title}</strong>）二级在左侧主导航：点击侧栏「${tabModule.title}」展开/收起子列表后切换。</li>`
                : tabModule
                  ? `<li>本模块（<strong class="text-card-foreground">${tabModule.title}</strong>）二级导航在上方 <strong class="text-card-foreground">Tab</strong> 切换；侧栏仅保留该模块一级入口</li>`
                  : ""
        }
        <li>${sidebarSecond ? "订单、门店、菜单、点餐、交易、报表与财务、促销、营销、会员、评价、礼品卡、团队等模块的二级在侧栏折叠组内；" : "侧栏一级入口；多数模块"}其它模块二级多在上方 Tab。结构来源：<strong class="text-card-foreground">docs/餐饮商家后台-导航与目录结构建议.md</strong></li>
        <li>设计令牌使用 Tailwind v4 <code class="font-mono text-xs">@theme</code>（OKLCH 语义色）</li>
        <li>标记为「连锁」的 Tab 为加盟/多店场景常用入口（配置见 <code class="font-mono text-xs">navigation.ts</code> 中 <code class="font-mono text-xs">chainOnly</code>）</li>
      </ul>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${["今日销售额", "待处理订单", "在岗员工"].map((label) => `<div class="rounded-lg border border-border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">${label}</p><p class="mt-2 text-2xl font-semibold tabular-nums text-card-foreground">—</p></div>`).join("")}
    </div>
  `;
}

function mount(): void {
  normalizeTabModuleHashes();

  const app = document.getElementById("app");
  if (!app) return;

  /** 全量重绘会替换 #nav-tree，需在重绘前记住一级导航滚动位置 */
  const prevNavScrollTop = document.getElementById("nav-tree")?.scrollTop ?? 0;

  app.innerHTML = `
    <div class="flex h-dvh min-h-0 w-full overflow-hidden">
      ${renderSidebar()}
      ${renderMain()}
    </div>
  `;

  requestAnimationFrame(() => {
    const nav = document.getElementById("nav-tree");
    if (nav) nav.scrollTop = prevNavScrollTop;
  });

  document.getElementById("nav-tree")?.addEventListener("click", (e) => {
    const el = (e.target as HTMLElement).closest("[data-sidebar-toggle]");
    if (!el || !(el instanceof HTMLButtonElement)) return;
    const moduleId = el.getAttribute("data-sidebar-toggle");
    if (!moduleId) return;
    const mod = NAV_MODULES.find((x) => x.id === moduleId);
    if (!mod || mod.subNavPlacement !== "sidebar") return;
    e.preventDefault();
    const hash = location.hash.slice(1) || "/dashboard/overview";
    const cur = getSidebarModuleExpanded(mod.id, mod.path, hash);
    setSidebarModuleExpanded(mod.id, !cur);
    mount();
  });

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const dark = document.documentElement.classList.contains("dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0f172a" : "#f8fafc");
  });

}

window.addEventListener("hashchange", mount);

if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}

mount();
