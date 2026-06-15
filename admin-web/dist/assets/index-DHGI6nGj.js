(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();const So=[{id:"bp-products",title:"商品",titleEn:"Products",path:"/brand-products/products"},{id:"bp-product-multi-language",title:"商品多语言",titleEn:"Product multi-language",path:"/brand-products/product-multi-language"},{id:"bp-product-categories",title:"商品分类",titleEn:"Product categories",path:"/brand-products/product-categories"},{id:"bp-spec-groups",title:"规格组",titleEn:"Spec groups",path:"/brand-products/spec-groups"},{id:"bp-flavor-groups",title:"口味组",titleEn:"Flavor groups",path:"/brand-products/flavor-groups"},{id:"bp-prep-groups",title:"做法组",titleEn:"Preparation groups",path:"/brand-products/prep-groups"},{id:"bp-addon-groups",title:"加料组",titleEn:"Add-on groups",path:"/brand-products/addon-groups"},{id:"bp-combo-groups",title:"套餐组",titleEn:"Combo groups",path:"/brand-products/combo-groups"},{id:"bp-seasoning",title:"调味管理",titleEn:"Seasoning management",path:"/brand-products/seasoning-mgmt/seasoning"},{id:"bp-tags",title:"标签管理",titleEn:"Tag management",path:"/brand-products/tags/description"},{id:"bp-ingredients",title:"原料管理",titleEn:"Ingredients",path:"/brand-products/ingredients"},{id:"bp-ingredient-categories",title:"原料分类",titleEn:"Ingredient categories",path:"/brand-products/ingredient-categories"},{id:"bp-images",title:"图片管理",titleEn:"Image management",path:"/brand-products/images"},{id:"bp-recipes",title:"配方管理",titleEn:"Recipe management",path:"/brand-products/recipes/list"},{id:"bp-seasoning-distribution",title:"下发记录",titleEn:"Distribution log",path:"/brand-products/seasoning-mgmt/distribution-log"},{id:"bm-menus",title:"品牌菜单",titleEn:"Brand menus",path:"/brand-menu/menus"},{id:"bm-distribution-log",title:"下发记录",titleEn:"Distribution log",path:"/brand-menu/distribution-log"},{id:"bm-groups",title:"菜单分组",titleEn:"Menu groups",path:"/brand-menu/groups"},{id:"bm-channel-visibility",title:"渠道可见性",titleEn:"Channel visibility",path:"/brand-menu/channel-visibility"},{id:"bm-publish",title:"发布与版本",titleEn:"Publish & versions",path:"/brand-menu/publish-versions"},{id:"menu-store-menu",title:"门店菜单",titleEn:"Store menu",path:"/menu/store-menu"},{id:"menu-store-products",title:"门店商品",titleEn:"Store products",path:"/menu/store-products"},{id:"menu-inventory-changes",title:"库存变更记录",titleEn:"Inventory change log",path:"/menu/inventory-changes"},{id:"menu-product-recipe",title:"商品配方",titleEn:"Product recipe",path:"/menu/product-recipe"},{id:"menu-recipe-list",title:"配方列表",titleEn:"Recipe list",path:"/menu/recipe-list"},{id:"menu-store-seasoning",title:"门店调味",titleEn:"Store seasoning",path:"/menu/store-seasoning"},{id:"menu-print-settings",title:"打印设置",titleEn:"Print settings",path:"/menu/print-settings"},{id:"menu-multi-language",title:"菜单多语言",titleEn:"Menu multi-language",path:"/menu/multi-language"},{id:"menu-tax-types",title:"税种管理",titleEn:"Tax types",path:"/menu/tax-types/settings"},{id:"menu-product-tax-mgmt",title:"商品税管理",titleEn:"Product tax management",path:"/menu/tax-types/product-tax"}],P=[{id:"brand-mgmt",title:"品牌管理",titleEn:"Brand management",icon:"brandMgmt",path:"/brand",subNavPlacement:"sheet",defaultChildPath:"/brand/overview",children:[{id:"br-overview",title:"品牌总览",titleEn:"Overview",path:"/brand/overview"},{id:"br-list",title:"品牌列表",titleEn:"Brand list",path:"/brand/list"},{id:"br-settings",title:"品牌设置",titleEn:"Brand settings",path:"/brand/settings"}]},{id:"store-mgmt",title:"门店管理",titleEn:"Store management",icon:"storeMgmt",path:"/stores",subNavPlacement:"sheet",defaultChildPath:"/stores/overview",children:[{id:"st-overview",title:"门店总览",titleEn:"Overview",path:"/stores/overview"},{id:"st-list",title:"门店列表",titleEn:"Store list",path:"/stores/list"},{id:"st-status",title:"门店状态",titleEn:"Store status",path:"/stores/status"},{id:"st-settings",title:"设置",path:"/stores/settings"}]},{id:"dashboard",title:"主页",titleEn:"Dashboard",icon:"home",path:"/dashboard",subNavPlacement:"sheet",defaultChildPath:"/dashboard/overview",children:[{id:"dash-overview",title:"今日概览",path:"/dashboard/overview"},{id:"dash-todos",title:"待办",path:"/dashboard/todos"},{id:"dash-kpi",title:"关键指标",path:"/dashboard/kpi"},{id:"dash-settings",title:"设置",titleEn:"Settings",path:"/dashboard/settings"}]},{id:"team",title:"团队管理",titleEn:"Team",icon:"team",path:"/team",subNavPlacement:"sheet",defaultChildPath:"/team/roles-employees",children:[{id:"team-roles",title:"角色与员工",path:"/team/roles-employees"},{id:"team-breaks",title:"休息与加班",path:"/team/breaks-overtime"},{id:"team-clock",title:"员工打卡",path:"/team/clock-in"},{id:"team-tips",title:"小费管理",path:"/team/tips"},{id:"team-tax-payroll",title:"报税报表",titleEn:"Tax payroll reports",path:"/team/payroll-report"},{id:"team-reports",title:"员工报表",path:"/team/reports"},{id:"team-7shifts",title:"7Shifts 对接（排班）",path:"/team/integrations/7shifts"},{id:"team-schedule",title:"排班与考勤",path:"/team/scheduling",chainOnly:!0},{id:"team-training",title:"绩效与培训",path:"/team/training-performance"},{id:"team-settings",title:"设置",path:"/team/settings"}]},{id:"product-center-main",title:"商品中心",titleEn:"Product center",icon:"menu",path:"/product-center-main",matchPrefixes:["/product-center-main","/brand-products","/brand-menu","/menu"],defaultChildPath:"/brand-products/products",children:[{id:"pcm-brand-products",title:"商品管理",titleEn:"Product management",path:"/brand-products/products"},{id:"pcm-brand-menu",title:"品牌菜单",titleEn:"Brand menus",path:"/brand-menu/menus"},{id:"pcm-store-mgmt",title:"门店管理",titleEn:"Store management",path:"/menu/store-menu"},{id:"pcm-settings",title:"设置",titleEn:"Settings",path:"/product-center-main/settings"}]},{id:"orders",title:"订单中心",titleEn:"Order center",icon:"orders",path:"/orders",subNavPlacement:"sheet",defaultChildPath:"/orders/all",children:[{id:"orders-all",title:"全部订单",path:"/orders/all"},{id:"orders-refunds",title:"退单",titleEn:"Refunds & voids",path:"/orders/refunds"},{id:"orders-history",title:"订单历史",path:"/orders/history"},{id:"orders-settings",title:"设置",path:"/orders/settings"}]},{id:"transactions",title:"支付中心",titleEn:"Payment center",icon:"receipt",path:"/transactions",subNavPlacement:"sheet",defaultChildPath:"/transactions/ledger",children:[{id:"tx-ledger",title:"交易流水",path:"/transactions/ledger"},{id:"tx-payments",title:"支付方式",path:"/transactions/payments"},{id:"tx-reconcile",title:"对账",path:"/transactions/reconcile"},{id:"tx-settings",title:"设置",path:"/transactions/settings"}]},{id:"waitlist",title:"外卖/来取",titleEn:"Delivery & pickup",icon:"waitlist",path:"/operations/waitlist",subNavPlacement:"sheet",defaultChildPath:"/operations/waitlist",children:[{id:"wl-main",title:"外卖/来取",titleEn:"Delivery & pickup",path:"/operations/waitlist"},{id:"wl-settings",title:"设置",titleEn:"Settings",path:"/operations/waitlist/settings"}]},{id:"marketing",title:"营销中心",titleEn:"Marketing center",icon:"marketing",path:"/marketing",defaultChildPath:"/marketing/campaigns",children:[{id:"mkt-campaigns",title:"营销活动",titleEn:"Campaigns",path:"/marketing/campaigns"},{id:"mkt-manual",title:"手动营销",titleEn:"Manual marketing",path:"/marketing/manual"},{id:"mkt-screensaver",title:"屏保",titleEn:"Screensaver",path:"/marketing/screensaver"},{id:"mkt-settings",title:"设置",titleEn:"Settings",path:"/marketing/settings"}]},{id:"promotions",title:"促销中心",titleEn:"Promotion center",icon:"promo",path:"/promotions",defaultChildPath:"/promotions/campaigns",children:[{id:"promo-campaigns",title:"促销活动",titleEn:"Promotional activities",path:"/promotions/campaigns"},{id:"promo-settings",title:"设置",titleEn:"Settings",path:"/promotions/settings"}]},{id:"members",title:"会员中心",titleEn:"Member center",icon:"members",path:"/members",defaultChildPath:"/members/card/coupon-mgmt",children:[{id:"mem-card-entry",title:"卡券管理",titleEn:"Cards & coupons",path:"/members/card/coupon-mgmt"},{id:"mem-points",title:"积分配置",titleEn:"Points config",path:"/members/points"},{id:"mem-settings",title:"设置",titleEn:"Settings",path:"/members/settings"}]},{id:"gift-cards",title:"礼品卡中心",titleEn:"Gift card center",icon:"gift",path:"/gift-cards",defaultChildPath:"/gift-cards/cards",children:[{id:"gc-cards",title:"Cards",titleEn:"礼品卡工厂",path:"/gift-cards/cards"},{id:"gc-settings",title:"设置",titleEn:"Settings",path:"/gift-cards/settings"}]},{id:"reviews",title:"评价中心",titleEn:"Review center",icon:"reviews",path:"/reviews",subNavPlacement:"sheet",defaultChildPath:"/reviews/insights",children:[{id:"rev-insights",title:"评价洞察",path:"/reviews/insights"},{id:"rev-settings",title:"设置",titleEn:"Settings",path:"/reviews/settings"},{id:"rev-detail",title:"评价明细",path:"/reviews/detail"},{id:"rev-stats",title:"评价统计",path:"/reviews/stats"}]},{id:"queue-call",title:"前厅管理中心",titleEn:"Front of house management center",icon:"queueCall",path:"/operations/queue-call",subNavPlacement:"sheet",defaultChildPath:"/operations/queue-call",children:[{id:"qc-main",title:"前厅管理中心",titleEn:"Front of house management center",path:"/operations/queue-call"},{id:"qc-floor-plan",title:"餐位平面图",titleEn:"Table layout",path:"/operations/queue-call/floor-plan"},{id:"qc-settings",title:"设置",titleEn:"Settings",path:"/operations/queue-call/settings"}]},{id:"kitchen-kds",title:"后厨管理中心",titleEn:"Back-of-house management center",icon:"kitchenKds",path:"/operations/kitchen-kds",subNavPlacement:"sheet",defaultChildPath:"/operations/kitchen-kds",children:[{id:"kds-main",title:"后厨设置",titleEn:"Back-of-house settings",path:"/operations/kitchen-kds"},{id:"kds-settings",title:"设置",titleEn:"Settings",path:"/operations/kitchen-kds/settings"}]},{id:"reservations",title:"预约等位中心",titleEn:"Reservation & waitlist center",icon:"reservations",path:"/operations/reservations",defaultChildPath:"/operations/reservations/waitlist",children:[{id:"res-waitlist",title:"Waitlist",titleEn:"等位",path:"/operations/reservations/waitlist"},{id:"res-rsv",title:"RSV",titleEn:"预订",path:"/operations/reservations/rsv"},{id:"res-history",title:"History",titleEn:"历史",path:"/operations/reservations/history"},{id:"res-section",title:"Section",titleEn:"分区",path:"/operations/reservations/section"},{id:"res-settings",title:"设置",titleEn:"Settings",path:"/operations/reservations/settings"}]},{id:"reports-finance",title:"报表中心",titleEn:"Reporting center",icon:"reports",path:"/reports",defaultChildPath:"/reports/revenue",children:[{id:"rpt-revenue",title:"营业汇总",titleEn:"Business summary",path:"/reports/revenue"},{id:"rpt-sales",title:"销售汇总",titleEn:"Sales summary",path:"/reports/sales/orders"},{id:"rpt-products",title:"商品报表",titleEn:"Product reports",path:"/reports/products/ranking"},{id:"rpt-staff",title:"员工报表",titleEn:"Staff reports",path:"/reports/staff/overview"},{id:"rpt-trends",title:"走势详情",titleEn:"Trend details",path:"/reports/trends/store-overview"},{id:"rpt-monthly",title:"月度经营分析",titleEn:"Monthly analysis",path:"/reports/monthly-analysis"},{id:"rpt-settings",title:"设置",titleEn:"Settings",path:"/reports/settings"}]},{id:"finance-center",title:"财务中心",titleEn:"Finance center",icon:"financeCenter",path:"/finance",subNavPlacement:"sheet",defaultChildPath:"/finance/overview",children:[{id:"fin-overview",title:"财务总览",titleEn:"Overview",path:"/finance/overview"},{id:"fin-cash-flow",title:"收支流水",titleEn:"Cash flow",path:"/finance/cash-flow"},{id:"fin-reconcile",title:"对账管理",titleEn:"Reconciliation",path:"/finance/reconciliation"},{id:"fin-invoices",title:"发票与税务",titleEn:"Invoices & tax",path:"/finance/invoices"},{id:"fin-settings",title:"设置",path:"/finance/settings"}]},{id:"print-templates",title:"打印中心",titleEn:"Print center",icon:"printTemplate",path:"/print-templates",defaultChildPath:"/print-templates/decoration",children:[{id:"pt-decoration",title:"打印装修",titleEn:"Print styling",path:"/print-templates/decoration"},{id:"pt-settings",title:"设置",titleEn:"Settings",path:"/print-templates/settings"}]},{id:"notifications",title:"消息中心",titleEn:"Message center",icon:"notifications",path:"/notifications",subNavPlacement:"sheet",defaultChildPath:"/notifications/center",children:[{id:"notif-center",title:"收件箱",titleEn:"Inbox",path:"/notifications/center"},{id:"notif-settings",title:"通知设置",titleEn:"Preferences",path:"/notifications/settings"},{id:"notif-templates",title:"模板与订阅",titleEn:"Templates & subscriptions",path:"/notifications/templates"}]},{id:"inventory-ordering",title:"库存管理中心",titleEn:"Inventory management center",icon:"inventory",path:"/operations/inventory-ordering",subNavPlacement:"tabs",defaultChildPath:"/operations/inventory-ordering/expiry",children:[{id:"inv-expiry",title:"效期管理",titleEn:"Expiry management",path:"/operations/inventory-ordering/expiry"},{id:"inv-materials",title:"物料管理",titleEn:"Materials management",path:"/operations/inventory-ordering/materials"},{id:"inv-settings",title:"设置",titleEn:"Settings",path:"/operations/inventory-ordering/settings"}]},{id:"device-management",title:"硬件管理中心",titleEn:"Hardware management center",icon:"deviceManagement",path:"/device-management",subNavPlacement:"sheet",defaultChildPath:"/device-management/overview",children:[{id:"dm-overview",title:"设备总览",titleEn:"Overview",path:"/device-management/overview"},{id:"dm-hardware",title:"硬件",titleEn:"Hardware",path:"/device-management/hardware/payments"},{id:"dm-terminals",title:"终端管理",titleEn:"Terminals",path:"/device-management/terminals"},{id:"dm-binding",title:"绑定与授权",titleEn:"Binding & authorization",path:"/device-management/binding"},{id:"dm-alerts",title:"监控告警",titleEn:"Monitoring & alerts",path:"/device-management/alerts"},{id:"dm-settings",title:"设置",path:"/device-management/settings"}]},{id:"permission-mgmt",title:"权限管理中心",titleEn:"Access management center",icon:"permissionMgmt",path:"/permissions",subNavPlacement:"sheet",defaultChildPath:"/permissions/overview",children:[{id:"perm-overview",title:"权限总览",titleEn:"Overview",path:"/permissions/overview"},{id:"perm-roles",title:"角色与功能权限",titleEn:"Roles & permissions",path:"/permissions/roles"},{id:"perm-staff",title:"员工授权",titleEn:"Staff assignments",path:"/permissions/staff"},{id:"perm-changelog",title:"权限变更记录",titleEn:"Permission change log",path:"/permissions/change-log"},{id:"perm-order-limit",title:"下单限制",titleEn:"Order limits",path:"/permissions/order-limit"},{id:"perm-settings",title:"设置",path:"/permissions/settings"}]},{id:"capital-turnover",title:"信贷中心",titleEn:"Credit center",icon:"capital",path:"/reports/capital",defaultChildPath:"/reports/capital",children:[{id:"capital-main",title:"信贷中心",titleEn:"Credit center",path:"/reports/capital"}]},{id:"asset-center",title:"素材中心",titleEn:"Asset center",icon:"assetCenter",path:"/asset-center",subNavPlacement:"sheet",defaultChildPath:"/asset-center/materials",children:[{id:"ac-materials",title:"图片素材",titleEn:"Image materials",path:"/asset-center/materials"},{id:"ac-videos",title:"视频库",titleEn:"Video library",path:"/asset-center/videos"},{id:"ac-settings",title:"设置",path:"/asset-center/settings"}]},{id:"settings",title:"系统设置",titleEn:"System settings",icon:"settings",path:"/settings",subNavPlacement:"sheet",defaultChildPath:"/settings/overview",children:[{id:"set-overview",title:"系统设置总揽",titleEn:"System settings overview",path:"/settings/overview"},{id:"set-basic",title:"基础设置（门店、营业时间、多门店）",path:"/settings/basic"},{id:"set-report",title:"报表设置",path:"/settings/reports"},{id:"set-print",title:"打印与票据",path:"/settings/printing"},{id:"set-tips",title:"小费设置",path:"/settings/tips"},{id:"set-service",title:"服务流程",path:"/settings/service-flow"},{id:"set-security",title:"安全设置",path:"/settings/security"},{id:"set-accounts",title:"账号与权限",path:"/settings/accounts"},{id:"set-audit",title:"操作日志",path:"/settings/audit-log"},{id:"set-integrations",title:"集成与 API",path:"/settings/integrations"},{id:"set-data-scope",title:"角色与数据范围",path:"/settings/data-scope",chainOnly:!0}]}],ht=[{id:"dmh-payments",title:"支付",titleEn:"Payments",path:"/device-management/hardware/payments"},{id:"dmh-cash-drawer",title:"钱箱",titleEn:"Cash drawer",path:"/device-management/hardware/cash-drawer"},{id:"dmh-router",title:"路由器",titleEn:"Router",path:"/device-management/hardware/router"},{id:"dmh-pos",title:"POS",titleEn:"POS",path:"/device-management/hardware/pos"},{id:"dmh-pos-go",title:"POS GO",titleEn:"POS Go",path:"/device-management/hardware/pos-go"},{id:"dmh-kds",title:"KDS",titleEn:"KDS",path:"/device-management/hardware/kds"},{id:"dmh-queue-display",title:"叫号屏",titleEn:"Queue display",path:"/device-management/hardware/queue-display"},{id:"dmh-printers",title:"打印机",titleEn:"Printers",path:"/device-management/hardware/printers"},{id:"dmh-scale",title:"电子秤",titleEn:"Electronic scale",path:"/device-management/hardware/scale"},{id:"dmh-kiosk",title:"Kiosk",titleEn:"Kiosk",path:"/device-management/hardware/kiosk"},{id:"dmh-emenu",title:"eMenu",titleEn:"eMenu devices",path:"/device-management/hardware/emenu"}];function To(){var e;return((e=ht[0])==null?void 0:e.path)??"/device-management/hardware/payments"}function _r(e){const t=[...ht].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function wo(e){return _r(e)!==""}const ko=ht.map(e=>({id:`so-${e.id}`,title:e.title,titleEn:e.titleEn,path:e.path})),At=[{id:"tips-distribution",title:"小费分配",titleEn:"Tip distribution",path:"/team/tips/distribution"},{id:"tips-details",title:"分配明细",titleEn:"Distribution details",path:"/team/tips/details"},{id:"tips-rules",title:"分配规则",titleEn:"Distribution rules",path:"/team/tips/rules"}];function $o(){var e;return((e=At[0])==null?void 0:e.path)??"/team/tips/distribution"}function Ar(e){const t=[...At].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function Eo(e){return Ar(e)!==""}const Rt=[{id:"team-rpt-overview",title:"概览",titleEn:"Overview",path:"/team/reports/overview"},{id:"team-rpt-tips",title:"小费",titleEn:"Tips",path:"/team/reports/tips"},{id:"team-rpt-performance",title:"绩效",titleEn:"Performance",path:"/team/reports/performance"},{id:"team-rpt-payroll",title:"薪资",titleEn:"Payroll",path:"/team/reports/payroll"}];function No(){var e;return((e=Rt[0])==null?void 0:e.path)??"/team/reports/overview"}function Rr(e){const t=[...Rt].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function Do(e){return Rr(e)!==""}const Ct=[{id:"team-sch-attendance",title:"考勤记录",titleEn:"Attendance records",path:"/team/scheduling/attendance-records"},{id:"team-sch-overtime",title:"加班规则",titleEn:"Overtime rules",path:"/team/scheduling/overtime-rules"}];function qo(){var e;return((e=Ct[0])==null?void 0:e.path)??"/team/scheduling/attendance-records"}function Cr(e){const t=[...Ct].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function Po(e){return Cr(e)!==""}function Mo(e){var t;return(t=e.activePrefixes)!=null&&t.length?e.activePrefixes:e.activePrefix?[e.activePrefix]:[e.path]}const Lr=[{id:"bp-products",title:"商品",titleEn:"Products",path:"/brand-products/products"},{id:"bp-product-multi-language",title:"商品多语言",titleEn:"Product multi-language",path:"/brand-products/product-multi-language"},{id:"bp-product-categories",title:"分类",titleEn:"Categories",path:"/brand-products/product-categories"},{id:"bp-spec-groups",title:"规格组",titleEn:"Spec groups",path:"/brand-products/spec-groups"},{id:"bp-flavor-groups",title:"口味组",titleEn:"Flavor groups",path:"/brand-products/flavor-groups"},{id:"bp-prep-groups",title:"做法组",titleEn:"Prep groups",path:"/brand-products/prep-groups"},{id:"bp-addon-groups",title:"加料组",titleEn:"Add-on groups",path:"/brand-products/addon-groups"},{id:"bp-combo-groups",title:"套餐组",titleEn:"Combo groups",path:"/brand-products/combo-groups"},{id:"bp-seasoning-mgmt",title:"调味管理",titleEn:"Seasoning",path:"/brand-products/seasoning-mgmt/seasoning",activePrefix:"/brand-products/seasoning-mgmt",sidebarChildren:[{title:"调味",titleEn:"Seasoning",path:"/brand-products/seasoning-mgmt/seasoning"},{title:"下发记录",titleEn:"Distribution log",path:"/brand-products/seasoning-mgmt/distribution-log"}]},{id:"bp-tags-mgmt",title:"标签管理",titleEn:"Tags",path:"/brand-products/tags/description",activePrefix:"/brand-products/tags",sidebarChildren:[{title:"描述标签",titleEn:"Description tags",path:"/brand-products/tags/description"},{title:"商品角标",titleEn:"Product corner badges",path:"/brand-products/tags/corner-badge"},{title:"统计标签",titleEn:"Statistics tags",path:"/brand-products/tags/stats"}]},{id:"bp-ingredients",title:"原料管理",titleEn:"Ingredients",path:"/brand-products/ingredients"},{id:"bp-ingredient-categories",title:"原料分类",titleEn:"Ingredient categories",path:"/brand-products/ingredient-categories"},{id:"bp-images",title:"图片管理",titleEn:"Images",path:"/brand-products/images"},{id:"bp-recipes-mgmt",title:"配方管理",titleEn:"Recipes",path:"/brand-products/recipes/list",activePrefix:"/brand-products/recipes",sidebarChildren:[{title:"配方列表",titleEn:"Recipe list",path:"/brand-products/recipes/list"},{title:"原料管理",titleEn:"Ingredients (recipes)",path:"/brand-products/recipes/ingredients"},{title:"记录中心",titleEn:"Records center",path:"/brand-products/recipes/records"}]}],Br=[{id:"bm-menus",title:"菜单",titleEn:"Menus",path:"/brand-menu/menus",activePrefix:"/brand-menu"},{id:"bm-distribution",title:"下发记录",titleEn:"Distribution log",path:"/brand-menu/distribution-log",activePrefix:"/brand-menu/distribution-log"}],qi=[{id:"mkt-campaigns",title:"营销活动",titleEn:"Campaigns",path:"/marketing/campaigns"},{id:"mkt-manual",title:"手动营销",titleEn:"Manual marketing",path:"/marketing/manual"},{id:"mkt-screensaver",title:"屏保",titleEn:"Screensaver",path:"/marketing/screensaver"}],Io=[{id:"pcm-settings",title:"设置",titleEn:"Settings",path:"/product-center-main/settings"}];function Ko(e){return e==="/product-center-main/settings"||e.startsWith("/product-center-main/settings/")?"/product-center-main/settings":""}const Oo=[{id:"mkt-settings",title:"设置",titleEn:"Settings",path:"/marketing/settings"}];function _o(e){return e==="/marketing/settings"||e.startsWith("/marketing/settings/")?"/marketing/settings":""}const nr=[{id:"promo-campaigns",title:"促销活动",titleEn:"Promotional activities",path:"/promotions/campaigns"}],Ao=[{id:"promo-settings",title:"设置",titleEn:"Settings",path:"/promotions/settings"}];function Ro(e){return e==="/promotions/settings"||e.startsWith("/promotions/settings/")?"/promotions/settings":""}const Pi=[{id:"gc-cards",title:"礼品卡工厂",titleEn:"Gift cards",path:"/gift-cards/cards"}],Mi=[{id:"gc-settings",title:"设置",titleEn:"Settings",path:"/gift-cards/settings"}],Hr=[...Pi,...Mi],Je=[{id:"pt-decoration",title:"打印装修",titleEn:"Print styling",path:"/print-templates/decoration"},{id:"pt-settings",title:"设置",titleEn:"Settings",path:"/print-templates/settings"}],vt=[{id:"res-waitlist",title:"等位",titleEn:"Waitlist",path:"/operations/reservations/waitlist"},{id:"res-rsv",title:"预订",titleEn:"RSV",path:"/operations/reservations/rsv"},{id:"res-history",title:"历史",titleEn:"History",path:"/operations/reservations/history"},{id:"res-section",title:"分区",titleEn:"Section",path:"/operations/reservations/section"},{id:"res-settings",title:"设置",titleEn:"Settings",path:"/operations/reservations/settings"}],Lt=[{id:"rpt-business-overview",title:"营业汇总",titleEn:"Business summary",path:"/reports/revenue"},{id:"rpt-sales-summary",title:"销售汇总",titleEn:"Sales summary",path:"/reports/sales/orders",activePrefix:"/reports/sales",sidebarChildren:[{title:"订单",titleEn:"Orders",path:"/reports/sales/orders"},{title:"支付",titleEn:"Payments",path:"/reports/sales/payments"},{title:"折扣金额",titleEn:"Discounts",path:"/reports/sales/discounts"},{title:"加收",titleEn:"Surcharges",path:"/reports/sales/surcharges"}]},{id:"rpt-product-reports",title:"商品报表",titleEn:"Product reports",path:"/reports/products/ranking",activePrefix:"/reports/products",sidebarChildren:[{title:"排名",titleEn:"Ranking",path:"/reports/products/ranking"},{title:"商品潜力分析",titleEn:"Product potential",path:"/reports/products/potential"}]},{id:"rpt-center-staff",title:"员工报表",titleEn:"Staff reports",path:"/reports/staff/overview",activePrefix:"/reports/staff",sidebarChildren:[{title:"员工概观",titleEn:"Staff overview",path:"/reports/staff/overview"},{title:"小费分配",titleEn:"Tips allocation",path:"/reports/staff/tips-allocation"}]},{id:"rpt-trends",title:"走势详情",titleEn:"Trend details",path:"/reports/trends/store-overview",activePrefix:"/reports/trends",sidebarChildren:[{title:"分店概观",titleEn:"Store overview",path:"/reports/trends/store-overview"},{title:"销售额比对",titleEn:"Sales comparison",path:"/reports/trends/sales-comparison"}]},{id:"rpt-monthly",title:"月度经营分析",titleEn:"Monthly analysis",path:"/reports/monthly-analysis"},{id:"rpt-settings",title:"设置",titleEn:"Settings",path:"/reports/settings"}],ut=[{id:"mem-card-mgmt",title:"卡券管理",titleEn:"Cards & coupons",path:"/members/card/coupon-mgmt",activePrefix:"/members/card",sidebarChildren:[{title:"优惠券管理",titleEn:"Coupon management",path:"/members/card/coupon-mgmt"},{title:"付费会员明细",titleEn:"Paid member details",path:"/members/card/paid-detail"},{title:"付费会员配置",titleEn:"Paid member settings",path:"/members/card/paid-config"}]},{id:"mem-points",title:"积分配置",titleEn:"Points config",path:"/members/points"}],Co=[{id:"mem-settings",title:"设置",titleEn:"Settings",path:"/members/settings"}];function Lo(e){return e==="/members/settings"||e.startsWith("/members/settings/")?"/members/settings":""}const Bt=[{id:"sm-store-menu",title:"门店菜单",titleEn:"Store menu",path:"/menu/store-menu"},{id:"sm-store-products",title:"门店商品",titleEn:"Store products",path:"/menu/store-products"},{id:"sm-store-seasoning",title:"门店调味",titleEn:"Store seasoning",path:"/menu/store-seasoning"},{id:"sm-inventory-changes",title:"库存变更记录",titleEn:"Inventory changes",path:"/menu/inventory-changes"},{id:"sm-print-settings",title:"打印设置",titleEn:"Print settings",path:"/menu/print-settings"},{id:"sm-tax-types",title:"税种管理",titleEn:"Tax types",path:"/menu/tax-types/settings",activePrefix:"/menu/tax-types",sidebarChildren:[{title:"税种管理",titleEn:"Tax types",path:"/menu/tax-types/settings"},{title:"商品税管理",titleEn:"Product tax management",path:"/menu/tax-types/product-tax"}]},{id:"sm-recipe-list",title:"配方列表",titleEn:"Recipe list",path:"/menu/recipe-list",activePrefixes:["/menu/recipe-list","/menu/product-recipe"]}];function xe(e,t){const r=t.flatMap(s=>Mo(s).map(i=>({item:s,prefix:i}))).sort((s,i)=>i.prefix.length-s.prefix.length);for(const{item:s,prefix:i}of r)if(e===i||e.startsWith(`${i}/`))return s.path;return""}function Fr(e){return e.children.map(t=>({id:t.id,title:t.title,titleEn:t.titleEn,path:t.path,chainOnly:t.chainOnly}))}function Bo(e,t){var i;return((i=t.matchPrefixes)!=null&&i.length?t.matchPrefixes:[t.path]).some(n=>e===n||e.startsWith(`${n}/`))?xe(e,Fr(t)):""}function Ho(e){return e.startsWith("/brand-products")?xe(e,Lr):""}function Fo(e){return e.startsWith("/brand-products")}function Ii(e){return e.startsWith("/brand-menu")?xe(e,Br):""}function Go(e){return e.startsWith("/marketing")?xe(e,qi):""}function jo(e){return e.startsWith("/promotions")?xe(e,nr):""}function Uo(e){return e.startsWith("/members")?xe(e,ut):""}function Ms(e){return e.startsWith("/gift-cards")?xe(e,Hr):""}function Wo(e){return e.startsWith("/print-templates")?xe(e,Je):""}function ct(e){return e==="/operations/reservations"||e.startsWith("/operations/reservations/")}function Vo(e){return ct(e)?xe(e,vt):""}function zo(e){if(!ct(e))return null;const t=[...vt].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return{title:r.title,module:"预约等位中心 · Reservation & waitlist center"};return{title:"预约等位中心",module:"预约等位中心 · Reservation & waitlist center"}}function Qo(e){if(!e.startsWith("/print-templates"))return null;const t=[...Je].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return{title:r.title,module:"打印中心 · Print center"};return{title:"打印中心",module:"打印中心 · Print center"}}function pt(e){return e==="/reports/capital"||e.startsWith("/reports/capital/")?!1:e==="/reports"||e.startsWith("/reports/")}function Yo(e){return pt(e)?xe(e,Lt):""}function Xo(e,t){var s;if(!((s=t.sidebarChildren)!=null&&s.length))return"";const r=[...t.sidebarChildren].sort((i,n)=>n.path.length-i.path.length);for(const i of r)if(e===i.path||e.startsWith(`${i.path}/`))return i.path;return""}function Zo(e,t){var s;if(t.id!=="mem-card-mgmt"||!((s=t.sidebarChildren)!=null&&s.length))return"";const r=[...t.sidebarChildren].sort((i,n)=>n.path.length-i.path.length);for(const i of r)if(e===i.path||e.startsWith(`${i.path}/`))return i.path;return""}function Jo(e){return e.startsWith("/brand-menu")}function Ki(e){return e.startsWith("/menu")?xe(e,Bt):""}function ea(e){return e.startsWith("/menu")}const Oi=[{id:"mt-tax-settings",title:"税种管理",titleEn:"Tax type settings",path:"/menu/tax-types/settings"},{id:"mt-product-tax",title:"商品税管理",titleEn:"Product tax management",path:"/menu/tax-types/product-tax"}];function _i(e){const t=[...Oi].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const Gr=[{id:"bp-sm-seasoning",title:"调味",titleEn:"Seasoning",path:"/brand-products/seasoning-mgmt/seasoning"},{id:"bp-sm-distribution-log",title:"下发记录",titleEn:"Distribution log",path:"/brand-products/seasoning-mgmt/distribution-log"}];function ta(){var e;return((e=Gr[0])==null?void 0:e.path)??"/brand-products/seasoning-mgmt/seasoning"}function Ai(e){const t=[...Gr].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const jr=[{id:"bp-tg-description",title:"描述标签",titleEn:"Description tags",path:"/brand-products/tags/description"},{id:"bp-tg-corner",title:"商品角标",titleEn:"Product corner badges",path:"/brand-products/tags/corner-badge"},{id:"bp-tg-stats",title:"统计标签",titleEn:"Statistics tags",path:"/brand-products/tags/stats"}];function ra(){var e;return((e=jr[0])==null?void 0:e.path)??"/brand-products/tags/description"}function Ri(e){const t=[...jr].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const Ur=[{id:"bp-rc-list",title:"配方列表",titleEn:"Recipe list",path:"/brand-products/recipes/list"},{id:"bp-rc-ingredients",title:"原料管理",titleEn:"Ingredients (recipes)",path:"/brand-products/recipes/ingredients"},{id:"bp-rc-records",title:"记录中心",titleEn:"Records center",path:"/brand-products/recipes/records"}];function sa(){var e;return((e=Ur[0])==null?void 0:e.path)??"/brand-products/recipes/list"}function Ci(e){const t=[...Ur].sort((r,s)=>s.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const Li={"/asset-center/settings":{hubTitle:"素材中心",settingsPath:"/asset-center/settings",items:[{id:"s430-screen-terminal-assets-叫号屏图片",groupTitle:"屏显与终端素材",groupKey:"screen-terminal-assets",sceneDesc:"设置叫号屏显示的图片",moduleName:"叫号屏",feature:"（未填写）",title:"叫号屏图片",seq:430},{id:"s431-screen-terminal-assets-客显屏图片",groupTitle:"屏显与终端素材",groupKey:"screen-terminal-assets",sceneDesc:"设置客显屏显示的图片",moduleName:"双屏",feature:"（未填写）",title:"客显屏图片",seq:431},{id:"s432-cover-background-assets-公司封面图",groupTitle:"封面与背景素材",groupKey:"cover-background-assets",sceneDesc:"设置Pad显示的首页封面图",moduleName:"公司封面",feature:"（未填写）",title:"公司封面图",seq:432},{id:"s433-brand-identity-assets-餐厅LOGO",groupTitle:"品牌标识素材",groupKey:"brand-identity-assets",sceneDesc:"设置餐厅的LOGO",moduleName:"餐厅LOGO",feature:"（未填写）",title:"餐厅LOGO",seq:433},{id:"s434-brand-identity-assets-打印小票LOGO",groupTitle:"品牌标识素材",groupKey:"brand-identity-assets",sceneDesc:"设置打印小票上的打印LOGO",moduleName:"打印Logo",feature:"（未填写）",title:"打印小票LOGO",seq:434},{id:"s555-cover-background-assets-首页封面图",groupTitle:"封面与背景素材",groupKey:"cover-background-assets",sceneDesc:"设置首页展示的封面图",moduleName:"封面/背景图",feature:"（未填写）",title:"首页封面图",seq:555},{id:"s556-brand-identity-assets-未填写",groupTitle:"品牌标识素材",groupKey:"brand-identity-assets",sceneDesc:"设置首页展示的门店LOGO",moduleName:"LOGO",feature:"（未填写）",title:"（未填写）",seq:556}]},"/dashboard/settings":{hubTitle:"主页",settingsPath:"/dashboard/settings",items:[{id:"s531-home-entry-display-品牌作为首页",groupTitle:"主页入口与展示",groupKey:"home-entry-display",sceneDesc:"设置多品牌分类展示页面是否作为首页进行展示",moduleName:"展示设置",feature:"（未填写）",title:"品牌作为首页",seq:531},{id:"s551-idle-screensaver-屏保",groupTitle:"待机屏保",groupKey:"idle-screensaver",sceneDesc:"设置是否开启屏保功能及屏保切换的动化效果和切换时时间设置",moduleName:"屏保",feature:"（未填写）",title:"屏保",seq:551}]},"/device-management/settings":{hubTitle:"设置设备与License的绑定关系",settingsPath:"/device-management/settings",items:[{id:"s1-device-integration-basics-钱箱开关",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"控制钱箱的开启还是关闭，开启后，使用钱箱需要权限才能打开",moduleName:"钱箱管理",feature:"启用与受控开钱箱（需权限）",title:"钱箱开关",seq:1},{id:"s11-device-integration-basics-打印小票",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"控制终端/食客端，是否打印纸质的等位号码",moduleName:"等位",feature:"等位打印小票开关",title:"打印小票",seq:11},{id:"s15-device-integration-basics-Serial-Caller-ID-Modem-Settings",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"等位高级设置：Serial Caller ID Modem Settings（串行来电显示调制解调器设置）”，该功能涉及串口通信硬件参数配置（如波特率、端口等），用于等位/排队系统中通过电话线接收来电信号或呼叫器数据",moduleName:"高级设置",feature:"等位系统串行来电显示调制解调器设置",title:"Serial Caller ID Modem Settings",seq:15},{id:"s184-device-integration-basics-来电显示功能",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"设置POS上是否启用来电点单显示功能",moduleName:"来电显示",feature:"（未填写）",title:"来电显示功能",seq:184},{id:"s185-device-integration-basics-来电显示设备类型",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"设置来电显示的设备类型是哪种类型",moduleName:"来电显示",feature:"（未填写）",title:"来电显示设备类型",seq:185},{id:"s228-device-integration-basics-分隔符1-分隔符2",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"",moduleName:"奶茶机对接",feature:"（未填写）",title:"分隔符1，分隔符2",seq:228},{id:"s254-cash-payment-terminals-以下操作时自动开钱箱-刷卡",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"设置使用信用卡支付时是否自动打开钱箱",moduleName:"钱箱管理",feature:"（未填写）",title:"以下操作时自动开钱箱(刷卡)",seq:254},{id:"s255-cash-payment-terminals-当用现金付款时自动打开钱箱",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"设置使用现金支付时是否自动打开钱箱",moduleName:"钱箱管理",feature:"（未填写）",title:"当用现金付款时自动打开钱箱",seq:255},{id:"s352-printer-output-devices-打印机设置",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"配置打印机的名称、语言、打印机类型，IP地址等",moduleName:"打印机设置",feature:"（未填写）",title:"打印机设置",seq:352},{id:"s353-printer-output-devices-名称",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"名称",seq:353},{id:"s354-printer-output-devices-语言设置",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"语言设置",seq:354},{id:"s355-printer-output-devices-第二语言",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"第二语言",seq:355},{id:"s356-printer-output-devices-打印机类型",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"打印机类型",seq:356},{id:"s357-printer-output-devices-IP地址",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"IP地址",seq:357},{id:"s358-printer-output-devices-厨房名称",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"厨房名称",seq:358},{id:"s359-printer-output-devices-打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"打印机",seq:359},{id:"s360-printer-output-devices-打印机名称-第二语言",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"打印机名称(第二语言)",seq:360},{id:"s361-printer-output-devices-第三语言",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"第三语言",seq:361},{id:"s362-printer-output-devices-切纸打印",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"切纸打印",seq:362},{id:"s363-printer-output-devices-备用打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"",moduleName:"打印机设置",feature:"（未填写）",title:"备用打印机",seq:363},{id:"s364-cash-payment-terminals-钱箱设置",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"设置钱箱的名称、设备名称、设备类型、链接哪个打印机",moduleName:"钱箱设置",feature:"（未填写）",title:"钱箱设置",seq:364},{id:"s365-cash-payment-terminals-名称",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"钱箱设置",feature:"（未填写）",title:"名称",seq:365},{id:"s366-cash-payment-terminals-设备名称",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"钱箱设置",feature:"（未填写）",title:"设备名称",seq:366},{id:"s367-cash-payment-terminals-设备类型",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"钱箱设置",feature:"（未填写）",title:"设备类型",seq:367},{id:"s368-cash-payment-terminals-连接的打印机",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"钱箱设置",feature:"（未填写）",title:"连接的打印机",seq:368},{id:"s370-client-device-binding-客户端设置-终端设备绑定与参数配置",groupTitle:"终端设备绑定与区域",groupKey:"client-device-binding",sceneDesc:"设置终端设备的名称、打印机绑定、钱箱、磅秤等",moduleName:"客户端设置",feature:"（未填写）",title:"客户端设置（终端设备绑定与参数配置）",seq:370},{id:"s371-client-device-binding-名称",groupTitle:"终端设备绑定与区域",groupKey:"client-device-binding",sceneDesc:"设置终端设备的名称是什么",moduleName:"客户端设置",feature:"（未填写）",title:"名称",seq:371},{id:"s372-printer-output-devices-收据打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置终端设备的纸质订单收据的打印机绑定的是哪一个",moduleName:"客户端设置",feature:"（未填写）",title:"收据打印机",seq:372},{id:"s373-printer-output-devices-支付打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置终端设备的纸质签名支付收据的打印机绑定的是哪一个",moduleName:"客户端设置",feature:"（未填写）",title:"支付打印机",seq:373},{id:"s374-printer-output-devices-叫号打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置终端设备的叫号收据的打印机绑定的是哪一个",moduleName:"客户端设置",feature:"（未填写）",title:"叫号打印机",seq:374},{id:"s375-printer-output-devices-上菜打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置终端设备的上菜/传菜收据的打印机绑定的是哪一个",moduleName:"客户端设置",feature:"（未填写）",title:"上菜打印机",seq:375},{id:"s376-printer-output-devices-打包打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置终端设备的打包单收据的打印机绑定的是哪一个",moduleName:"客户端设置",feature:"（未填写）",title:"打包打印机",seq:376},{id:"s377-cash-payment-terminals-钱箱",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"设置终端设备的钱箱绑定的是哪一个",moduleName:"客户端设置",feature:"（未填写）",title:"钱箱",seq:377},{id:"s378-client-device-binding-启用来电显示",groupTitle:"终端设备绑定与区域",groupKey:"client-device-binding",sceneDesc:"设置终端设备是否开启来电显示功能",moduleName:"客户端设置",feature:"（未填写）",title:"启用来电显示",seq:378},{id:"s379-device-integration-basics-启用磅秤",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"设置终端设备是否启用磅秤",moduleName:"客户端设置",feature:"（未填写）",title:"启用磅秤",seq:379},{id:"s380-device-integration-basics-启用顾客显示屏",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"设置终端设备是否启用顾客显示屏",moduleName:"客户端设置",feature:"（未填写）",title:"启用顾客显示屏",seq:380},{id:"s381-device-integration-basics-顾客显示屏型号",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"设置终端设备顾客显示屏型号是哪一个",moduleName:"客户端设置",feature:"（未填写）",title:"顾客显示屏型号",seq:381},{id:"s382-device-integration-basics-设备管理器端口",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"设置终端设备管理器端口是多少",moduleName:"客户端设置",feature:"（未填写）",title:"设备管理器端口",seq:382},{id:"s383-device-integration-basics-支付终端",groupTitle:"设备接入与基础外设",groupKey:"device-integration-basics",sceneDesc:"设置终端设备绑定的支付设备是哪一个",moduleName:"客户端设置",feature:"（未填写）",title:"支付终端",seq:383},{id:"s384-client-device-binding-区域",groupTitle:"终端设备绑定与区域",groupKey:"client-device-binding",sceneDesc:"设置终端设备所在的位置在哪里",moduleName:"客户端设置",feature:"（未填写）",title:"区域",seq:384},{id:"s385-printer-output-devices-等位打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置终端设备的等位单号的打印机绑定的是哪一个",moduleName:"客户端设置",feature:"（未填写）",title:"等位打印机",seq:385},{id:"s386-printer-output-devices-全局收据打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置所有终端设备默认的纸质订单收据的打印机绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局收据打印机",seq:386},{id:"s387-printer-output-devices-全局打包打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置所有终端设备默认的打包单收据的打印机绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局打包打印机",seq:387},{id:"s388-printer-output-devices-全局打包打印机2",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置所有终端设备默认的打包单收据的打印机绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局打包打印机2",seq:388},{id:"s389-printer-output-devices-全局上菜打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置所有终端设备默认的上菜/传菜收据的打印机绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局上菜打印机",seq:389},{id:"s390-cash-payment-terminals-全局钱箱",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"设置所有终端设备默认的钱箱绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局钱箱",seq:390},{id:"s391-printer-output-devices-全局报表打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置所有终端设备默认的报表打印机绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局报表打印机",seq:391},{id:"s392-cash-payment-terminals-全局支付终端",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"设置所有终端设备默认的支付终端绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局支付终端",seq:392},{id:"s393-printer-output-devices-全局等位打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置所有终端设备的等位单号的打印机绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局等位打印机",seq:393},{id:"s394-printer-output-devices-全局自定义菜打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置所有终端设备的自定义输入的菜品的打印机绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局自定义菜打印机",seq:394},{id:"s395-printer-output-devices-全局机器人通知打印机",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置所有终端设备的机器人通知的打印机绑定的是哪一个",moduleName:"默认设备设置",feature:"（未填写）",title:"全局机器人通知打印机",seq:395},{id:"s396-cash-payment-terminals-支付终端设置",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"支付终端相关的配置设置，比如设备名称、品牌、型号、IP地址等",moduleName:"支付终端",feature:"（未填写）",title:"支付终端设置",seq:396},{id:"s397-cash-payment-terminals-名称",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"支付终端",feature:"（未填写）",title:"名称",seq:397},{id:"s398-cash-payment-terminals-终端品牌",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"新建支付终端后，设置支付设备的品牌、型号、IP地址、端口号等",moduleName:"支付终端",feature:"（未填写）",title:"终端品牌",seq:398},{id:"s399-cash-payment-terminals-终端型号",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"支付终端",feature:"（未填写）",title:"终端型号",seq:399},{id:"s400-cash-payment-terminals-IP地址",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"支付终端",feature:"（未填写）",title:"IP地址",seq:400},{id:"s401-cash-payment-terminals-端口号",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"支付终端",feature:"（未填写）",title:"端口号",seq:401},{id:"s402-cash-payment-terminals-通讯方式",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"支付终端",feature:"（未填写）",title:"通讯方式",seq:402},{id:"s403-cash-payment-terminals-其他额外设置",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"支付终端",feature:"（未填写）",title:"其他额外设置",seq:403},{id:"s404-cash-payment-terminals-启用在PINPad上加小费",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"支付终端",feature:"（未填写）",title:"启用在PINPad上加小费",seq:404},{id:"s405-cash-payment-terminals-启用在PINPad上签名",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"",moduleName:"支付终端",feature:"（未填写）",title:"启用在PINPad上签名",seq:405},{id:"s406-fiscal-bluetooth-名称",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"新建税控机终端后，设置税控机设备名称、端口号等",moduleName:"税控机",feature:"（未填写）",title:"名称",seq:406},{id:"s407-fiscal-bluetooth-设备名称",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"",moduleName:"税控机",feature:"（未填写）",title:"设备名称",seq:407},{id:"s408-fiscal-bluetooth-连接类型",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"",moduleName:"税控机",feature:"（未填写）",title:"连接类型",seq:408},{id:"s409-fiscal-bluetooth-TP-S",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"",moduleName:"税控机",feature:"（未填写）",title:"TP S",seq:409},{id:"s410-fiscal-bluetooth-端口",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"",moduleName:"税控机",feature:"（未填写）",title:"端口",seq:410},{id:"s411-fiscal-bluetooth-连接的打印机",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"",moduleName:"税控机",feature:"（未填写）",title:"连接的打印机",seq:411},{id:"s412-fiscal-bluetooth-TVQ",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"",moduleName:"税控机",feature:"（未填写）",title:"TVQ",seq:412},{id:"s413-fiscal-bluetooth-快餐模式",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"",moduleName:"税控机",feature:"（未填写）",title:"快餐模式",seq:413},{id:"s414-fiscal-bluetooth-关闭交易时打印收据",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"",moduleName:"税控机",feature:"（未填写）",title:"关闭交易时打印收据",seq:414},{id:"s415-fiscal-bluetooth-运行模式",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"",moduleName:"税控机",feature:"（未填写）",title:"运行模式",seq:415},{id:"s416-fiscal-bluetooth-设备列表",groupTitle:"税控与蓝牙外设",groupKey:"fiscal-bluetooth",sceneDesc:"蓝牙支付设备列表及软硬件关联绑定信息",moduleName:"设备列表",feature:"（未填写）",title:"设备列表",seq:416},{id:"s498-printer-output-devices-打印纸质支付收据方式",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置订单完成后打印纸质支付收据的方式（自动/手动/不打印）",moduleName:"收据",feature:"（未填写）",title:"打印纸质支付收据方式",seq:498},{id:"s499-printer-output-devices-打印纸质订单收据方式",groupTitle:"打印机与输出设备",groupKey:"printer-output-devices",sceneDesc:"设置订单完成后打印纸质订单收据的方式（自动/手动/不打印）",moduleName:"收据",feature:"（未填写）",title:"打印纸质订单收据方式",seq:499},{id:"s550-client-device-binding-设备列表",groupTitle:"终端设备绑定与区域",groupKey:"client-device-binding",sceneDesc:"查看当前门店的Kiosk硬件的设备列表及设备的支付方式设置",moduleName:"设备管理",feature:"（未填写）",title:"设备列表",seq:550},{id:"s558-核心是-将特定终端设备与-绑定设置",groupTitle:"核心是“将特定终端设备与",groupKey:"核心是-将特定终端设备与",sceneDesc:"",moduleName:"设备管理",feature:"设备绑定License",title:"绑定设置",seq:558},{id:"s559-emenu-device-display-设备绑定桌子",groupTitle:"eMenu设备与展示模式",groupKey:"emenu-device-display",sceneDesc:"设置设备与桌子的绑定关系",moduleName:"设备管理",feature:"（未填写）",title:"设备绑定桌子",seq:559},{id:"s560-emenu-device-display-选择您想展示的菜单组",groupTitle:"eMenu设备与展示模式",groupKey:"emenu-device-display",sceneDesc:"设置哪个设备或者哪个桌子展示哪些菜单",moduleName:"菜单显示",feature:"（未填写）",title:"选择您想展示的菜单组",seq:560},{id:"s561-emenu-device-display-纯展示模式",groupTitle:"eMenu设备与展示模式",groupKey:"emenu-device-display",sceneDesc:"设置哪个设备或者哪个桌子菜单是否是纯展示不能操作添加购物车",moduleName:"菜单展示",feature:"（未填写）",title:"纯展示模式",seq:561},{id:"s562-emenu-device-display-eMenu-Pro模式",groupTitle:"eMenu设备与展示模式",groupKey:"emenu-device-display",sceneDesc:"设置哪个设备或者哪个桌子菜单展示形式（普通菜单 / 高级菜单设计稿）",moduleName:"菜单展示",feature:"（未填写）",title:"eMenu Pro模式",seq:562},{id:"s668-cash-payment-terminals-打印纸质订单收据方式",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"控制手持POS终端打印纸质订单收据的出纸方式",moduleName:"Paypad设置",feature:"（未填写）",title:"打印纸质订单收据方式",seq:668},{id:"s669-cash-payment-terminals-打印CustomerCopy",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"控制手持POS终端打印纸质食客端信用卡签名收据的出纸方式",moduleName:"Paypad设置",feature:"（未填写）",title:"打印CustomerCopy",seq:669},{id:"s670-cash-payment-terminals-打印Merchant-Copy",groupTitle:"钱箱与支付终端",groupKey:"cash-payment-terminals",sceneDesc:"控制手持POS终端打印纸质商家端信用卡签名收据的出纸方式",moduleName:"Paypad设置",feature:"（未填写）",title:"打印Merchant Copy",seq:670}]},"/finance/settings":{hubTitle:"财务中心",settingsPath:"/finance/settings",items:[{id:"s63-cash-drawer-reconciliation-现金底金金额",groupTitle:"钱箱与现金平账",groupKey:"cash-drawer-reconciliation",sceneDesc:"设置钱箱现金备用金金额",moduleName:"钱箱管理",feature:"（未填写）",title:"现金底金金额",seq:63},{id:"s64-cash-drawer-reconciliation-硬币卷数量",groupTitle:"钱箱与现金平账",groupKey:"cash-drawer-reconciliation",sceneDesc:"设置钱箱现金硬币卷数数量",moduleName:"钱箱管理",feature:"（未填写）",title:"硬币卷数量",seq:64},{id:"s65-cash-drawer-reconciliation-现金结算-平账-时显示现金销售总额",groupTitle:"钱箱与现金平账",groupKey:"cash-drawer-reconciliation",sceneDesc:"设置钱箱提现时显示现金销售总额",moduleName:"钱箱管理",feature:"现金结算时显示现金销售总额",title:"现金结算(平账)时显示现金销售总额",seq:65},{id:"s76-cash-drawer-reconciliation-现金平账允许误差值",groupTitle:"钱箱与现金平账",groupKey:"cash-drawer-reconciliation",sceneDesc:"设置现金平账允许误差值是多少",moduleName:"系统安全",feature:"（未填写）",title:"现金平账允许误差值",seq:76},{id:"s171-daily-close-settlement-每日结算",groupTitle:"日结与结算",groupKey:"daily-close-settlement",sceneDesc:"设置结算是否是每天结算",moduleName:"基本设置",feature:"（未填写）",title:"每日结算",seq:171},{id:"s181-cash-drawer-reconciliation-钱箱现金平账误差提醒",groupTitle:"钱箱与现金平账",groupKey:"cash-drawer-reconciliation",sceneDesc:"设置钱箱现金平账超过设定的误差时是否提醒",moduleName:"现金平账",feature:"地址自动填充城市和邮编",title:"钱箱现金平账误差提醒",seq:181},{id:"s305-fees-tips-expense-现金付费折扣",groupTitle:"费用折扣与小费支出",groupKey:"fees-tips-expense",sceneDesc:"设置使用现金支付时，享受的折扣比率是多少",moduleName:"其他",feature:"（未填写）",title:"现金付费折扣(%)",seq:305},{id:"s330-daily-close-settlement-完成现金结算后自动打印现金备款-现金结算报表",groupTitle:"日结与结算",groupKey:"daily-close-settlement",sceneDesc:"设置完成现金结算后是否自动打印现金备款/现金结算报表",moduleName:"现金备款/结算报表",feature:"（未填写）",title:"完成现金结算后自动打印现金备款/现金结算报表",seq:330},{id:"s449-register-audit-records-未填写",groupTitle:"收银记录与审计",groupKey:"register-audit-records",sceneDesc:"查看收银机的付款记录",moduleName:"付款记录",feature:"收银机稽核 — POS 付款流水",title:"（未填写）",seq:449},{id:"s450-register-audit-records-未填写",groupTitle:"收银记录与审计",groupKey:"register-audit-records",sceneDesc:"查看收银机的钱箱登入退出记录",moduleName:"钱箱登入退出记录",feature:"收银机稽核 — 钱箱登入退出记录",title:"（未填写）",seq:450},{id:"s451-fees-tips-expense-未填写",groupTitle:"费用折扣与小费支出",groupKey:"fees-tips-expense",sceneDesc:"查看收银机的小费支出记录",moduleName:"小费支出",feature:"收银机稽核 — 小费支出流水",title:"（未填写）",seq:451}]},"/gift-cards/settings":{hubTitle:"礼品卡中心",settingsPath:"/gift-cards/settings",items:[{id:"s16-giftcard-rules-金额设置",groupTitle:"礼品卡规则与参数",groupKey:"giftcard-rules",sceneDesc:"设置实体礼品卡金额的预设充值选项",moduleName:"礼品卡设置",feature:"礼品卡预设充值面额",title:"金额设置",seq:16},{id:"s17-giftcard-rules-销售价格",groupTitle:"礼品卡规则与参数",groupKey:"giftcard-rules",sceneDesc:"设置实体礼品卡金额的预设售卖时的选项",moduleName:"礼品卡设置",feature:"礼品卡销售价格（定价策略）",title:"销售价格",seq:17},{id:"s18-giftcard-rules-有效期",groupTitle:"礼品卡规则与参数",groupKey:"giftcard-rules",sceneDesc:"设置实体礼品卡的有效期",moduleName:"礼品卡设置",feature:"礼品卡有效期设置",title:"有效期",seq:18},{id:"s19-giftcard-rules-查询方式",groupTitle:"礼品卡规则与参数",groupKey:"giftcard-rules",sceneDesc:"搜索礼品卡按照卡号进行查询，是模糊搜索、还是准确匹配搜索",moduleName:"礼品卡设置",feature:"礼品卡卡号查询方式（模糊/精确）",title:"查询方式",seq:19},{id:"s478-giftcard-channels-E-Card礼品卡",groupTitle:"电子礼品卡渠道",groupKey:"giftcard-channels",sceneDesc:"",moduleName:"E-Card礼品卡",feature:"（未填写）",title:"E-Card礼品卡",seq:478}]},"/marketing/settings":{hubTitle:"营销中心",settingsPath:"/marketing/settings",items:[{id:"s553-content-assets-未填写",groupTitle:"营销内容与素材",groupKey:"content-assets",sceneDesc:"设置是否开启海报点餐功能及配置海报上的商品组件",moduleName:"海报Pro",feature:"（未填写）",title:"（未填写）",seq:553},{id:"s557-content-assets-广告设置",groupTitle:"营销内容与素材",groupKey:"content-assets",sceneDesc:"设置菜单页面是否展示的弹框广告",moduleName:"广告",feature:"（未填写）",title:"广告设置",seq:557},{id:"s648-placement-trigger-开启海报",groupTitle:"投放位与触发规则",groupKey:"placement-trigger",sceneDesc:"设置是否开启下单页海报广告",moduleName:"海报",feature:"（未填写）",title:"开启海报",seq:648},{id:"s649-placement-trigger-开启开始点单操作后展示海报",groupTitle:"投放位与触发规则",groupKey:"placement-trigger",sceneDesc:"设置开始点单后是否展示海报",moduleName:"海报",feature:"（未填写）",title:"开启开始点单操作后展示海报",seq:649},{id:"s651-content-assets-开启视频",groupTitle:"营销内容与素材",groupKey:"content-assets",sceneDesc:"设置是否开启首页视频展示",moduleName:"首页视频",feature:"（未填写）",title:"开启视频",seq:651}]},"/members/settings":{hubTitle:"会员中心",settingsPath:"/members/settings",items:[{id:"s10-login-verification-加入会员",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"控制终端/食客端，是否展示加入会员按钮入口",moduleName:"客显屏",feature:"客显屏是否展示加入会员按钮",title:"加入会员",seq:10},{id:"s30-login-verification-显示手机号",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"控制终端/食客端点单，是否展示输入手机号页面",moduleName:"设置",feature:"显示手机号（是否展示输入手机号页面）",title:"显示手机号",seq:30},{id:"s82-member-account-system-可使用会员卡的最小消费额度",groupTitle:"会员账户与卡体系",groupKey:"member-account-system",sceneDesc:"设置会员卡支付订单，订单需要满足的金额",moduleName:"基础设置",feature:"（未填写）",title:"可使用会员卡的最小消费额度",seq:82},{id:"s83-points-rewards-消费金额兑换积分",groupTitle:"积分规则与兑换商品",groupKey:"points-rewards",sceneDesc:"设置每消费一美元获得多少积分",moduleName:"基础设置",feature:"（未填写）",title:"消费金额兑换积分",seq:83},{id:"s84-points-rewards-积分兑换现金比例",groupTitle:"积分规则与兑换商品",groupKey:"points-rewards",sceneDesc:"设置例每个积分能兑换多少钱",moduleName:"基础设置",feature:"（未填写）",title:"积分兑换现金比例",seq:84},{id:"s85-points-rewards-积分获取后立即兑换",groupTitle:"积分规则与兑换商品",groupKey:"points-rewards",sceneDesc:"设置积分获得后是否可以立即兑换",moduleName:"基础设置",feature:"（未填写）",title:"积分获取后立即兑换",seq:85},{id:"s86-member-account-system-云端会员系统模式",groupTitle:"会员账户与卡体系",groupKey:"member-account-system",sceneDesc:"控制是否使用云端会员还是本地会员",moduleName:"基础设置",feature:"（未填写）",title:"云端会员系统模式",seq:86},{id:"s87-member-account-system-会员卡使用模式",groupTitle:"会员账户与卡体系",groupKey:"member-account-system",sceneDesc:"设置会员卡只能使用积分，还是只能使用余额，还是有食客自己选择是使用积分还是使用余额",moduleName:"基础设置",feature:"（未填写）",title:"会员卡使用模式",seq:87},{id:"s88-member-account-system-会员卡有效时长-年-月-日",groupTitle:"会员账户与卡体系",groupKey:"member-account-system",sceneDesc:"会员卡有效期",moduleName:"基础设置",feature:"（未填写）",title:"会员卡有效时长(年,月,日)",seq:88},{id:"s89-member-account-system-会员卡号查询方式",groupTitle:"会员账户与卡体系",groupKey:"member-account-system",sceneDesc:"查询会员卡号是模糊搜索还是准确搜索",moduleName:"基础设置",feature:"（未填写）",title:"会员卡号查询方式",seq:89},{id:"s222-login-verification-客户姓名必填",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置POS点单页面，是否客户姓名必填",moduleName:"点餐界面模式",feature:"（未填写）",title:"客户姓名必填",seq:222},{id:"s223-login-verification-客户电话必填",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置POS点单页面，是否客户电话必填",moduleName:"点餐界面模式",feature:"（未填写）",title:"客户电话必填",seq:223},{id:"s479-member-account-system-POS本地会员",groupTitle:"会员账户与卡体系",groupKey:"member-account-system",sceneDesc:"卡号、持卡人、过期日期、余额、可用积分等",moduleName:"会员卡",feature:"（未填写）",title:"POS本地会员",seq:479},{id:"s480-member-account-system-POS本地会员等级",groupTitle:"会员账户与卡体系",groupKey:"member-account-system",sceneDesc:"名称、折扣、最小积分阈值、备注",moduleName:"会员等级",feature:"（未填写）",title:"POS本地会员等级",seq:480},{id:"s481-member-account-system-未填写",groupTitle:"会员账户与卡体系",groupKey:"member-account-system",sceneDesc:"",moduleName:"（未填写）",feature:"（未填写）",title:"（未填写）",seq:481},{id:"s482-member-account-system-未填写",groupTitle:"会员账户与卡体系",groupKey:"member-account-system",sceneDesc:"姓名、电话、地址、邮箱地址",moduleName:"（未填写）",feature:"（未填写）",title:"（未填写）",seq:482},{id:"s504-login-verification-展示输入手机号",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置食客端是否展示输入手机号页面",moduleName:"用户信息",feature:"（未填写）",title:"展示输入手机号",seq:504},{id:"s505-login-verification-手机号必填",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置输入手机号页面手机号是否必填",moduleName:"用户信息",feature:"（未填写）",title:"手机号必填",seq:505},{id:"s506-login-verification-输入姓名",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置食客端是否展示输入食客姓名页面",moduleName:"用户信息",feature:"（未填写）",title:"输入姓名",seq:506},{id:"s507-login-verification-姓名必填",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置输入姓名页面姓名是否必填",moduleName:"用户信息",feature:"（未填写）",title:"姓名必填",seq:507},{id:"s508-login-verification-会员登录需要短信验证码",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置会员登录是否需要验证码进行验证",moduleName:"用户信息",feature:"（未填写）",title:"会员登录需要短信验证码",seq:508},{id:"s509-points-rewards-展示账户积分",groupTitle:"积分规则与兑换商品",groupKey:"points-rewards",sceneDesc:"设置会员登录后，会员账户是否展示积分余额",moduleName:"用户信息",feature:"（未填写）",title:"展示账户积分",seq:509},{id:"s510-login-verification-默认选中隐私条款",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置输入手机号页面的隐私条款选项是否默认选中",moduleName:"用户信息",feature:"（未填写）",title:"默认选中隐私条款",seq:510},{id:"s525-points-rewards-菜单页面展示积分菜",groupTitle:"积分规则与兑换商品",groupKey:"points-rewards",sceneDesc:"设置菜单页面是否展示积分兑换的商品",moduleName:"菜单",feature:"（未填写）",title:"菜单页面展示积分菜",seq:525},{id:"s526-points-rewards-菜单页面积分菜展示位置",groupTitle:"积分规则与兑换商品",groupKey:"points-rewards",sceneDesc:"设置菜单页面积分菜展示位置（顶部/底部）",moduleName:"菜单",feature:"（未填写）",title:"菜单页面积分菜展示位置",seq:526},{id:"s527-points-rewards-订单仅有积分商品可以兑换",groupTitle:"积分规则与兑换商品",groupKey:"points-rewards",sceneDesc:"设置订单仅有积分商品时是否允许直接下单兑换",moduleName:"菜单",feature:"（未填写）",title:"订单仅有积分商品可以兑换",seq:527},{id:"s554-member-guidance-benefits-登录引导图设置",groupTitle:"会员引导与权益展示",groupKey:"member-guidance-benefits",sceneDesc:"设置是否开启会员登录引导广告及更换引导图",moduleName:"登陆引导图",feature:"（未填写）",title:"登录引导图设置",seq:554},{id:"s615-member-guidance-benefits-展示付费会员登录引导",groupTitle:"会员引导与权益展示",groupKey:"member-guidance-benefits",sceneDesc:"设置是否开启付费会员登录引导弹框广告",moduleName:"展示设置",feature:"（未填写）",title:"展示付费会员登录引导",seq:615},{id:"s622-login-verification-登录-注册会员需要验证码",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置会员登录/注册是否需要短信验证码",moduleName:"用户设置",feature:"（未填写）",title:"登录/注册会员需要验证码",seq:622},{id:"s623-login-verification-点单前必须登录-注册会员",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置点单前是否必须登录/注册会员",moduleName:"用户设置",feature:"（未填写）",title:"点单前必须登录/注册会员",seq:623},{id:"s624-login-verification-点单前关闭会员登录-注册页",groupTitle:"登录注册与信息校验",groupKey:"login-verification",sceneDesc:"设置点单前是否展示会员登录/注册页面",moduleName:"用户设置",feature:"（未填写）",title:"点单前关闭会员登录/注册页",seq:624},{id:"s650-member-guidance-benefits-权益会员介绍",groupTitle:"会员引导与权益展示",groupKey:"member-guidance-benefits",sceneDesc:"设置是否展示权益会员介绍海报",moduleName:"权益会员",feature:"（未填写）",title:"权益会员介绍",seq:650}]},"/notifications/settings":{hubTitle:"消息中心",settingsPath:"/notifications/settings",items:[{id:"s331-notification-basics-消息中心的主题",groupTitle:"通知基础与渠道",groupKey:"notification-basics",sceneDesc:"设置哪些产品线是否开启订单消息通知提醒功能",moduleName:"消息中心",feature:"（未填写）",title:"消息中心的主题",seq:331},{id:"s332-notification-basics-语音提醒",groupTitle:"通知基础与渠道",groupKey:"notification-basics",sceneDesc:"设置新订单是否进行语音播报提醒",moduleName:"消息中心",feature:"（未填写）",title:"语音提醒",seq:332},{id:"s333-service-call-alerts-用餐者请求服务的类型",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"",moduleName:"消息中心",feature:"（未填写）",title:"用餐者请求服务的类型",seq:333},{id:"s334-order-pickup-messages-点单完成发送短信渠道",groupTitle:"订单与取餐通知",groupKey:"order-pickup-messages",sceneDesc:"设置哪些渠道订单完成需要发送订单短信小票",moduleName:"消息中心",feature:"（未填写）",title:"点单完成发送短信渠道",seq:334},{id:"s335-order-pickup-messages-顾客取餐发送短信渠道",groupTitle:"订单与取餐通知",groupKey:"order-pickup-messages",sceneDesc:"设置哪些渠道订单完成可以发送取餐短信通知",moduleName:"消息中心",feature:"（未填写）",title:"顾客取餐发送短信渠道",seq:335},{id:"s336-order-pickup-messages-下单短信通知-ASAP-非配送",groupTitle:"订单与取餐通知",groupKey:"order-pickup-messages",sceneDesc:"设置下单短信通知(ASAP)的内容",moduleName:"消息中心",feature:"（未填写）",title:"下单短信通知(ASAP)-非配送",seq:336},{id:"s337-order-pickup-messages-下单短信通知-预点单-非配送",groupTitle:"订单与取餐通知",groupKey:"order-pickup-messages",sceneDesc:"设置下单短信通知(预点单)的内容",moduleName:"消息中心",feature:"（未填写）",title:"下单短信通知(预点单)-非配送",seq:337},{id:"s338-order-pickup-messages-取餐通知-出餐时提醒",groupTitle:"订单与取餐通知",groupKey:"order-pickup-messages",sceneDesc:"设置取餐短信通知的内容",moduleName:"消息中心",feature:"（未填写）",title:"取餐通知--出餐时提醒",seq:338},{id:"s339-order-pickup-messages-下单短信通知-ASAP-配送",groupTitle:"订单与取餐通知",groupKey:"order-pickup-messages",sceneDesc:"设置下单短信通知(ASAP)的内容",moduleName:"消息中心",feature:"（未填写）",title:"下单短信通知(ASAP)-配送",seq:339},{id:"s340-order-pickup-messages-下单短信通知-预点单-配送",groupTitle:"订单与取餐通知",groupKey:"order-pickup-messages",sceneDesc:"设置下单短信通知(预点单)的内容",moduleName:"消息中心",feature:"（未填写）",title:"下单短信通知(预点单)-配送",seq:340},{id:"s629-service-call-alerts-呼叫服务员",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置是否开启呼叫服务员功能",moduleName:"消息通知",feature:"（未填写）",title:"呼叫服务员",seq:629},{id:"s630-service-call-alerts-呼叫服务员结账",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置是否开启呼叫服务员结账功能",moduleName:"消息通知",feature:"（未填写）",title:"呼叫服务员结账",seq:630},{id:"s631-service-call-alerts-呼叫服务员加水",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置是否开启呼叫服务员加水功能",moduleName:"消息通知",feature:"（未填写）",title:"呼叫服务员加水",seq:631},{id:"s632-service-call-alerts-呼叫服务员加餐具",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置是否开启呼叫服务员加餐具功能",moduleName:"消息通知",feature:"（未填写）",title:"呼叫服务员加餐具",seq:632},{id:"s633-service-call-alerts-呼叫服务员送纸巾",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置是否开启呼叫服务员送纸巾功能",moduleName:"消息通知",feature:"（未填写）",title:"呼叫服务员送纸巾",seq:633},{id:"s634-service-call-alerts-呼叫服务员加汤",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置是否开启呼叫服务员加汤功能",moduleName:"消息通知",feature:"（未填写）",title:"呼叫服务员加汤",seq:634},{id:"s635-service-call-alerts-呼叫服务员换烤盘",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置是否开启呼叫服务员换烤盘功能",moduleName:"消息通知",feature:"（未填写）",title:"呼叫服务员换烤盘",seq:635},{id:"s636-service-call-alerts-呼叫服务员点酒水",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置是否开启呼叫服务员点酒水功能",moduleName:"消息通知",feature:"（未填写）",title:"呼叫服务员点酒水",seq:636},{id:"s637-service-call-alerts-自定义菜单下单消息通知",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置是否开启指定菜品下单消息通知",moduleName:"消息通知",feature:"（未填写）",title:"自定义菜单下单消息通知",seq:637},{id:"s638-order-pickup-messages-新订单消息通知",groupTitle:"订单与取餐通知",groupKey:"order-pickup-messages",sceneDesc:"设置是否开启新订单消息通知（eMenu→POS）",moduleName:"消息通知",feature:"（未填写）",title:"新订单消息通知",seq:638},{id:"s639-order-pickup-messages-订单追加消息通知",groupTitle:"订单与取餐通知",groupKey:"order-pickup-messages",sceneDesc:"设置是否开启订单追加消息通知（eMenu→POS）",moduleName:"消息通知",feature:"（未填写）",title:"订单追加消息通知",seq:639},{id:"s640-service-call-alerts-呼叫服务员时间间隔",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置呼叫服务员时间间隔（限制重复呼叫）",moduleName:"消息通知",feature:"（未填写）",title:"呼叫服务员时间间隔",seq:640},{id:"s641-service-call-alerts-未开单可呼叫服务员",groupTitle:"呼叫服务员与现场提醒",groupKey:"service-call-alerts",sceneDesc:"设置未开单是否可呼叫服务员",moduleName:"消息通知",feature:"（未填写）",title:"未开单可呼叫服务员",seq:641}]},"/operations/inventory-ordering/settings":{hubTitle:"供应链中心",settingsPath:"/operations/inventory-ordering/settings",items:[{id:"s20-inventory-control-rules-库存清点增量调整原因",groupTitle:"库存管控规则",groupKey:"inventory-control-rules",sceneDesc:"用于盘点后正向库存调整的原因枚举",moduleName:"库存设置",feature:"库存清点增量调整原因",title:"库存清点增量调整原因",seq:20},{id:"s21-inventory-control-rules-库存清点减量调整原因",groupTitle:"库存管控规则",groupKey:"inventory-control-rules",sceneDesc:"库存清点减量调整原因",moduleName:"库存设置",feature:"库存清点减量调整原因",title:"库存清点减量调整原因",seq:21},{id:"s22-inventory-control-rules-当库存不足时允许保存单",groupTitle:"库存管控规则",groupKey:"inventory-control-rules",sceneDesc:"控制库存不足时是否允许保存订单",moduleName:"库存设置",feature:"当库存不足时允许保存单",title:"当库存不足时允许保存单",seq:22},{id:"s23-procurement-supplier-自动生成购货单-默认供应商",groupTitle:"采购与供应商",groupKey:"procurement-supplier",sceneDesc:"在自动补货生成购货单时，为未绑定主供应商的物料配置默认回退供应商",moduleName:"库存设置",feature:"自动生成购货单默认供应商",title:"自动生成购货单:默认供应商",seq:23},{id:"s24-procurement-supplier-自动发送购货单-邮箱地址",groupTitle:"采购与供应商",groupKey:"procurement-supplier",sceneDesc:"用于配置自动发送购货单时使用的邮箱地址",moduleName:"库存设置",feature:"自动发送购货单的邮箱地址",title:"自动发送购货单:邮箱地址",seq:24},{id:"s25-procurement-supplier-自动发送购货单-邮件主题",groupTitle:"采购与供应商",groupKey:"procurement-supplier",sceneDesc:"配置自动发送购货单的邮件主题",moduleName:"库存设置",feature:"自动发送购货单的邮件主题",title:"自动发送购货单:邮件主题",seq:25},{id:"s26-procurement-supplier-自动生成和发送购货单-开始时间",groupTitle:"采购与供应商",groupKey:"procurement-supplier",sceneDesc:"计划开始时间是周期性自动生成和发送购货单的触发时刻参数",moduleName:"库存设置",feature:"自动生成和发送购货单的开始时间",title:"自动生成和发送购货单:开始时间",seq:26},{id:"s27-procurement-supplier-购货单自动入库",groupTitle:"采购与供应商",groupKey:"procurement-supplier",sceneDesc:"自动入库是采购自动化流程的一环",moduleName:"库存设置",feature:"购货单自动入库",title:"购货单自动入库",seq:27},{id:"s28-procurement-supplier-显示预估剩余数量",groupTitle:"采购与供应商",groupKey:"procurement-supplier",sceneDesc:"在点单/菜单侧展示基于库存与消耗模型的预估剩余可售数量",moduleName:"库存设置",feature:"显示预估剩余数量",title:"显示预估剩余数量",seq:28},{id:"s179-inventory-control-rules-在库存管理里自动显示低库存菜",groupTitle:"库存管控规则",groupKey:"inventory-control-rules",sceneDesc:"设置是否在库存管理里自动显示低库存菜",moduleName:"单菜设置",feature:"（未填写）",title:"在库存管理里自动显示低库存菜",seq:179},{id:"s224-integration-expiry-Marketman-API-Key",groupTitle:"系统对接与效期管理",groupKey:"integration-expiry",sceneDesc:"",moduleName:"Marketman",feature:"（未填写）",title:"Marketman API Key",seq:224},{id:"s225-integration-expiry-Marketman-API-Password",groupTitle:"系统对接与效期管理",groupKey:"integration-expiry",sceneDesc:"",moduleName:"Marketman",feature:"（未填写）",title:"Marketman API Password",seq:225},{id:"s226-integration-expiry-Marketman-Upload-Price",groupTitle:"系统对接与效期管理",groupKey:"integration-expiry",sceneDesc:"",moduleName:"Marketman",feature:"（未填写）",title:"Marketman Upload Price",seq:226},{id:"s227-integration-expiry-Marketman-Upload-Order-Date",groupTitle:"系统对接与效期管理",groupKey:"integration-expiry",sceneDesc:"",moduleName:"Marketman",feature:"（未填写）",title:"Marketman Upload Order Date",seq:227},{id:"s468-master-data-locations-库存货品-物品主数据",groupTitle:"库存主数据与库位",groupKey:"master-data-locations",sceneDesc:"名称、库存类别、菜谱单位、购买单位等",moduleName:"（未填写）",feature:"（未填写）",title:"库存货品（物品主数据）",seq:468},{id:"s469-master-data-locations-库存货品类别",groupTitle:"库存主数据与库位",groupKey:"master-data-locations",sceneDesc:"库存货品类别的新建维护",moduleName:"（未填写）",feature:"（未填写）",title:"库存货品类别",seq:469},{id:"s470-未填写-库存供应商",groupTitle:"（未填写）",groupKey:"未填写",sceneDesc:"供应商的名称、电话",moduleName:"（未填写）",feature:"（未填写）",title:"库存供应商",seq:470},{id:"s471-master-data-locations-库房地点",groupTitle:"库存主数据与库位",groupKey:"master-data-locations",sceneDesc:"库房的名称、地址、联系人、电话、城市、邮编等信息",moduleName:"（未填写）",feature:"（未填写）",title:"库房地点",seq:471},{id:"s472-stocktaking-operations-库存清点",groupTitle:"盘点与运营视图",groupKey:"stocktaking-operations",sceneDesc:"名称、成本价、低库存提示阈值、库存总值等",moduleName:"（未填写）",feature:"（未填写）",title:"库存清点",seq:472},{id:"s473-stocktaking-operations-库存概况",groupTitle:"盘点与运营视图",groupKey:"stocktaking-operations",sceneDesc:"名称、类型、初始库存数、估计使用量、估计库存剩余数等",moduleName:"（未填写）",feature:"（未填写）",title:"库存概况",seq:473},{id:"s474-未填写-采购订单",groupTitle:"（未填写）",groupKey:"未填写",sceneDesc:"总价、价格、备注、订单状态、供应商名等",moduleName:"（未填写）",feature:"（未填写）",title:"采购订单",seq:474},{id:"s475-stocktaking-operations-采购物品入库",groupTitle:"盘点与运营视图",groupKey:"stocktaking-operations",sceneDesc:"名称、收到数量、单价、库存剩余数量",moduleName:"（未填写）",feature:"（未填写）",title:"采购物品入库",seq:475},{id:"s477-integration-expiry-未填写",groupTitle:"系统对接与效期管理",groupKey:"integration-expiry",sceneDesc:"商品的有效期管理",moduleName:"效期管理",feature:"（未填写）",title:"（未填写）",seq:477}]},"/operations/kitchen-kds/settings":{hubTitle:"后厨管理中心",settingsPath:"/operations/kitchen-kds/settings",groupOrder:["send-routing","ticket-grouping","line-merge-rules","ticket-fields","ticket-format","packing-slip"],items:[{id:"s32-send-routing-价格为0的菜单独打印",groupTitle:"送厨触发与路由",groupKey:"send-routing",sceneDesc:"控制一个订单中多个商品，价格为0的菜是否单独打印出一个小票",moduleName:"打印设置",feature:"价格为0的菜单独打印",title:"价格为0的菜单独打印",seq:32},{id:"s33-ticket-format-菜品之间打印分割线",groupTitle:"厨房单·版式格式",groupKey:"ticket-format",sceneDesc:"控制一个订单中多个商品，每个商品之间是否打印分割线",moduleName:"打印设置",feature:"菜品之间打印分割线",title:"菜品之间打印分割线",seq:33},{id:"s35-ticket-fields-厨房单-打印送厨的次数",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制一个订单，每次打印是否展示送厨的次数",moduleName:"打印设置",feature:"厨房单打印送厨次数",title:"厨房单:打印送厨的次数",seq:35},{id:"s36-send-routing-不需要厨房单的单类",groupTitle:"送厨触发与路由",groupKey:"send-routing",sceneDesc:"控制哪些订单类型的商品订单，不要送厨",moduleName:"打印设置",feature:"不需要厨房单的订单类型",title:"不需要厨房单的单类",seq:36},{id:"s37-send-routing-打印发送到其他打印机的菜",groupTitle:"送厨触发与路由",groupKey:"send-routing",sceneDesc:"配置满足条件的菜品，送厨时打印到其他厨房打印机",moduleName:"打印设置",feature:"打印发送到其他打印机的菜",title:"打印发送到其他打印机的菜",seq:37},{id:"s38-ticket-format-厨房单-备注增强显示-黑底白字",groupTitle:"厨房单·版式格式",groupKey:"ticket-format",sceneDesc:"控制一个订单的备注是否要重点强调突出显示",moduleName:"打印设置",feature:"厨房单备注增强显示（黑底白字）",title:"厨房单:备注增强显示(黑底白字)",seq:38},{id:"s39-packing-slip-需要打包单的订单类型",groupTitle:"打包单",groupKey:"packing-slip",sceneDesc:"控制哪些订单类型的订单需要打印打包单（与「不需要厨房单的单类」独立，仅作用于打包条）",moduleName:"打包单设置",feature:"需要打包单的订单类型",title:"需要打包单的订单类型",seq:39},{id:"s40-ticket-grouping-按座位分菜",groupTitle:"厨房单·分组与拆单",groupKey:"ticket-grouping",sceneDesc:"控制厨房单一个订单上多个商品，是否按照每个商品所对应的桌子进行归类展示",moduleName:"厨房单排版",feature:"按座位分菜",title:"按座位分菜",seq:40},{id:"s41-ticket-format-标记非零价格的菜",groupTitle:"厨房单·版式格式",groupKey:"ticket-format",sceneDesc:"控制厨房单是否将价格不为0的商品进行特殊标记，重点突出",moduleName:"厨房单排版",feature:"标记非零价格的菜",title:"标记非零价格的菜",seq:41},{id:"s42-ticket-fields-打印套餐数量",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否打印展示套餐的数量",moduleName:"厨房单排版",feature:"打印套餐数量",title:"打印套餐数量",seq:42},{id:"s43-ticket-format-打印边距",groupTitle:"厨房单·版式格式",groupKey:"ticket-format",sceneDesc:"设置厨房单的打印边距的大小",moduleName:"厨房单排版",feature:"厨房单打印边距大小",title:"打印边距",seq:43},{id:"s44-ticket-format-打印边距范围",groupTitle:"厨房单·版式格式",groupKey:"ticket-format",sceneDesc:"设置厨房单的打印边距是顶部和底部同时生效，还是仅顶部生效，还是仅底部生效",moduleName:"厨房单排版",feature:"厨房单打印边距范围（顶/底/同时）",title:"打印边距范围",seq:44},{id:"s45-ticket-fields-打印调味价格",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否展示调味商品的价格",moduleName:"厨房单排版",feature:"打印调味价格",title:"打印调味价格",seq:45},{id:"s46-ticket-fields-打印菜单价",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否展示普通商品的价格",moduleName:"厨房单排版",feature:"打印菜单价",title:"打印菜单价",seq:46},{id:"s47-ticket-grouping-根据菜序分菜打印",groupTitle:"厨房单·分组与拆单",groupKey:"ticket-grouping",sceneDesc:"控制厨房单是否按照相同菜品序号统一一起打印，不分菜序，分开打印",moduleName:"厨房单排版",feature:"根据菜序分菜打印",title:"根据菜序分菜打印",seq:47},{id:"s48-ticket-fields-打印单菜序号",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否打印单个商品的商品序号ID",moduleName:"厨房单排版",feature:"（未填写）",title:"打印单菜序号",seq:48},{id:"s49-ticket-fields-打印顾客姓名",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否打印食客姓名",moduleName:"厨房单排版",feature:"（未填写）",title:"打印顾客姓名",seq:49},{id:"s50-ticket-fields-打印订单时间",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否打印订单下单时间",moduleName:"厨房单排版",feature:"（未填写）",title:"打印订单时间",seq:50},{id:"s51-ticket-grouping-普通菜-套餐主菜-不同语言分开显示",groupTitle:"厨房单·分组与拆单",groupKey:"ticket-grouping",sceneDesc:"控制厨房单商品不同语言是否分开显示",moduleName:"厨房单排版",feature:"（未填写）",title:"普通菜/套餐主菜,不同语言分开显示",seq:51},{id:"s52-line-merge-rules-合并相同菜",groupTitle:"行级合并规则",groupKey:"line-merge-rules",sceneDesc:"控制厨房单相同商品是否合并展示为一个名称，相同名称展示商品总数",moduleName:"厨房单排版",feature:"（未填写）",title:"合并相同菜",seq:52},{id:"s53-line-merge-rules-合并相同子菜",groupTitle:"行级合并规则",groupKey:"line-merge-rules",sceneDesc:"控制厨房单相同商品是否合并展示为一个名称，相同名称展示商品总数",moduleName:"厨房单排版",feature:"（未填写）",title:"合并相同子菜",seq:53},{id:"s54-ticket-grouping-KDS分离相同菜",groupTitle:"厨房单·分组与拆单",groupKey:"ticket-grouping",sceneDesc:"控制厨房单相同商品是否分开多行展示",moduleName:"厨房单排版",feature:"KDS分离相同菜（多行展示）",title:"KDS分离相同菜",seq:54},{id:"s55-ticket-fields-打印菜品总数",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否展示订单中商品的总数量",moduleName:"厨房单排版",feature:"打印菜品总数",title:"打印菜品总数",seq:55},{id:"s56-ticket-fields-打印订单金额",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否展示订单总金额",moduleName:"厨房单排版",feature:"打印订单金额",title:"打印订单金额",seq:56},{id:"s57-ticket-fields-打印电话",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否展示食客的电话",moduleName:"厨房单排版",feature:"（未填写）",title:"打印电话",seq:57},{id:"s58-ticket-fields-打印地址",groupTitle:"厨房单·票面信息",groupKey:"ticket-fields",sceneDesc:"控制厨房单是否展示食客的地址",moduleName:"厨房单排版",feature:"（未填写）",title:"打印地址",seq:58},{id:"s59-ticket-format-数量后打印x",groupTitle:"厨房单·版式格式",groupKey:"ticket-format",sceneDesc:"数量后打印x：控制厨房单数量显示格式，如数量后是否附加打印字符‘x’",moduleName:"厨房单排版",feature:"数量后打印x",title:"数量后打印x",seq:59},{id:"s60-ticket-format-切纸打印时打印序号N-M",groupTitle:"厨房单·版式格式",groupKey:"ticket-format",sceneDesc:"切纸打印时打印序号N/M：控制厨房单在切纸/分段打印时是否打印当前段序号和总段数（如第N段/共M段）",moduleName:"厨房单排版",feature:"切纸打印时打印序号N/M",title:"切纸打印时打印序号N/M",seq:60},{id:"s61-ticket-grouping-子菜-调味分开打印",groupTitle:"厨房单·分组与拆单",groupKey:"ticket-grouping",sceneDesc:"控制厨房单中商品子菜和调味是否分开打印",moduleName:"厨房单排版",feature:"子菜/调味分开打印",title:"子菜/调味分开打印",seq:61},{id:"s62-send-routing-未付单直接送厨",groupTitle:"送厨触发与路由",groupKey:"send-routing",sceneDesc:"控制未付款的订单是否下单后直接送厨",moduleName:"其他",feature:"未付单直接送厨",title:"未付单直接送厨",seq:62},{id:"s287-line-merge-rules-收据-合并相同子菜",groupTitle:"行级合并规则",groupKey:"line-merge-rules",sceneDesc:"设置是否合并相同子菜",moduleName:"收据排版",feature:"（未填写）",title:"收据:合并相同子菜",seq:287},{id:"s288-line-merge-rules-收据-合并相同菜",groupTitle:"行级合并规则",groupKey:"line-merge-rules",sceneDesc:"设置是否合并相同菜",moduleName:"收据排版",feature:"（未填写）",title:"收据:合并相同菜",seq:288},{id:"s298-packing-slip-打包单-显示价格为0的调味",groupTitle:"打包单",groupKey:"packing-slip",sceneDesc:"设置打包单是否显示价格为0的调味",moduleName:"打包单设置",feature:"（未填写）",title:"打包单:显示价格为0的调味",seq:298},{id:"s299-packing-slip-打包单-只再次打印修改过的菜",groupTitle:"打包单",groupKey:"packing-slip",sceneDesc:"设置打包单是否只再次打印修改过的菜",moduleName:"打包单设置",feature:"（未填写）",title:"打包单:只再次打印修改过的菜",seq:299},{id:"s300-packing-slip-打包单-根据座位-分割线分开打印",groupTitle:"打包单",groupKey:"packing-slip",sceneDesc:"设置打包单是否根据座位/分割线分开打印",moduleName:"打包单设置",feature:"（未填写）",title:"打包单:根据座位/分割线分开打印",seq:300},{id:"s301-line-merge-rules-打包单-合并相同菜",groupTitle:"行级合并规则",groupKey:"line-merge-rules",sceneDesc:"设置打包单是否合并相同菜",moduleName:"打包单设置",feature:"（未填写）",title:"打包单:合并相同菜",seq:301},{id:"s302-line-merge-rules-打包单-合并相同子菜",groupTitle:"行级合并规则",groupKey:"line-merge-rules",sceneDesc:"设置打包单是否合并相同子菜",moduleName:"打包单设置",feature:"（未填写）",title:"打包单:合并相同子菜",seq:302},{id:"s304-send-routing-第一次送厨打印整张单",groupTitle:"送厨触发与路由",groupKey:"send-routing",sceneDesc:"设置订单首次送厨时，是否打印整张订单",moduleName:"上菜单设置",feature:"（未填写）",title:"第一次送厨打印整张单",seq:304}]},"/operations/queue-call/settings":{hubTitle:"前厅管理中心",settingsPath:"/operations/queue-call/settings",groupOrder:["tables-floor","pos-order-init","pos-kitchen-send","pos-button-visibility","pos-order-toolbar","pos-order-cart","pos-find-order-list","pos-checkout-entry","pos-menu-ui","guest-menu-structure","guest-menu-scenarios","guest-menu-global","guest-menu-cart","guest-facing-locale","guest-order-rules","guest-notes-fees","wait-time","cds"],items:[{id:"s91-guest-order-rules-自助点餐不直接送厨-转-扫码点餐是否直接送厨",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"",moduleName:"基础设置",feature:"自助点餐/扫码点餐是否直接送厨",title:"自助点餐不直接送厨（转：扫码点餐是否直接送厨）",seq:91},{id:"s107-tables-floor-跳过选桌",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置点单是否需要展示选择桌子页面",moduleName:"基础设置",feature:"跳过选桌（是否展示选桌页面）",title:"跳过选桌",seq:107},{id:"s108-pos-order-init-跳过选择人数",groupTitle:"POS 开单流程",groupKey:"pos-order-init",sceneDesc:"设置点单是否需要展示选择人数页面",moduleName:"基础设置",feature:"跳过选择人数（是否展示选人数页面）",title:"跳过选择人数",seq:108},{id:"s110-pos-order-toolbar-点单超时提醒-分钟",groupTitle:"POS 点单页工具栏",groupKey:"pos-order-toolbar",sceneDesc:"设置订单创建后显示警告的时间间隔。",moduleName:"基础设置",feature:"（未填写）",title:"点单超时提醒(分钟)",seq:110},{id:"s111-pos-order-init-每单最多客人数量",groupTitle:"POS 开单流程",groupKey:"pos-order-init",sceneDesc:"设置每单最多可以选择的客人数量",moduleName:"基础设置",feature:"（未填写）",title:"每单最多客人数量",seq:111},{id:"s113-pos-kitchen-send-点击-送厨-整单送厨",groupTitle:"POS 送厨流程",groupKey:"pos-kitchen-send",sceneDesc:'设置点击"送厨"订单是否整单送厨',moduleName:"基础设置",feature:"（未填写）",title:'点击"送厨"整单送厨',seq:113},{id:"s114-pos-kitchen-send-点击-付款-直接送厨",groupTitle:"POS 送厨流程",groupKey:"pos-kitchen-send",sceneDesc:'设置点击"付款"订单是否直接送厨',moduleName:"基础设置",feature:"（未填写）",title:'点击"付款"直接送厨',seq:114},{id:"s118-pos-menu-ui-搜索菜单",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置是否支持搜索菜单",moduleName:"基础设置",feature:"（未填写）",title:"搜索菜单",seq:118},{id:"s120-pos-kitchen-send-结账后自动送厨",groupTitle:"POS 送厨流程",groupKey:"pos-kitchen-send",sceneDesc:"设置结账后是否自动送厨",moduleName:"基础设置",feature:"（未填写）",title:"结账后自动送厨",seq:120},{id:"s121-pos-order-cart-订单数量支持小数",groupTitle:"POS 点单页展示",groupKey:"pos-order-cart",sceneDesc:"设置订单数量是否支持小数展示，比如有半份，三分之一份的",moduleName:"基础设置",feature:"（未填写）",title:"订单数量支持小数",seq:121},{id:"s122-pos-order-cart-减菜后自动重定向",groupTitle:"POS 点单页展示",groupKey:"pos-order-cart",sceneDesc:"设置减菜后是否自动重定向",moduleName:"基础设置",feature:"（未填写）",title:"减菜后自动重定向",seq:122},{id:"s123-pos-kitchen-send-打单后自动送厨",groupTitle:"POS 送厨流程",groupKey:"pos-kitchen-send",sceneDesc:"设置打单后是否自动送厨",moduleName:"基础设置",feature:"（未填写）",title:"打单后自动送厨",seq:123},{id:"s125-pos-kitchen-send-延迟送厨时间",groupTitle:"POS 送厨流程",groupKey:"pos-kitchen-send",sceneDesc:"设置订单下单后多久再自动送厨",moduleName:"基础设置",feature:"（未填写）",title:"延迟送厨时间",seq:125},{id:"s132-pos-order-cart-点单显示座位",groupTitle:"POS 点单页展示",groupKey:"pos-order-cart",sceneDesc:"设置哪种订单类型(Dinein、Delivery、Pick Up、To Go)的点单，点单显示座位，用于一个订单，多个座位，按照座位点单加菜",moduleName:"点单界面设置",feature:"点单显示座位（按订单类型）",title:"点单显示座位",seq:132},{id:"s133-pos-order-cart-相同菜拆分显示",groupTitle:"POS 点单页展示",groupKey:"pos-order-cart",sceneDesc:"设置相同的菜是分开展示，还是合并展示",moduleName:"点单界面设置",feature:"（未填写）",title:"相同菜拆分显示",seq:133},{id:"s135-pos-order-cart-菜序模式",groupTitle:"POS 点单页展示",groupKey:"pos-order-cart",sceneDesc:"设置订单中，相同的类（即菜序）下的商品，合并到一个类下进行展示。",moduleName:"点单界面设置",feature:"（未填写）",title:"菜序模式",seq:135},{id:"s136-pos-order-cart-默认键盘类型",groupTitle:"POS 点单页展示",groupKey:"pos-order-cart",sceneDesc:"设置系统键盘是仅支持英文，还是支持多语言",moduleName:"点单界面设置",feature:"（未填写）",title:"默认键盘类型",seq:136},{id:"s137-pos-order-cart-显示ASAP订单时间",groupTitle:"POS 点单页展示",groupKey:"pos-order-cart",sceneDesc:"设置订单时间是否显示ASAP订单时间",moduleName:"点单界面设置",feature:"（未填写）",title:"显示ASAP订单时间",seq:137},{id:"s148-pos-menu-ui-比价功能模式",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"",moduleName:"价格",feature:"（未填写）",title:"比价功能模式",seq:148},{id:"s151-pos-find-order-list-显示所有单的总计价格",groupTitle:"POS 找单列表",groupKey:"pos-find-order-list",sceneDesc:"设置订单列表页面，是否展示所有订单的总价合计金额",moduleName:"找单",feature:"（未填写）",title:"显示所有单的总计价格",seq:151},{id:"s152-pos-find-order-list-显示-关闭以下全部单子-按钮",groupTitle:"POS 找单列表",groupKey:"pos-find-order-list",sceneDesc:"设置是否显示“关闭以下全部单子“按钮",moduleName:"找单",feature:"（未填写）",title:'显示："关闭以下全部单子"按钮',seq:152},{id:"s153-pos-find-order-list-默认显示未加小费订单",groupTitle:"POS 找单列表",groupKey:"pos-find-order-list",sceneDesc:"设置订单列表页面是否显示没有添加小费的订单",moduleName:"找单",feature:"（未填写）",title:"默认显示未加小费订单",seq:153},{id:"s154-pos-find-order-list-盘点模式",groupTitle:"POS 找单列表",groupKey:"pos-find-order-list",sceneDesc:"设置营业结束后进行盘点时的订单列表展示形式",moduleName:"找单",feature:"（未填写）",title:"盘点模式",seq:154},{id:"s169-tables-floor-付款后清桌模式",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置订单付款后是否自动清除桌子上的订单",moduleName:"基本设置",feature:"（未填写）",title:"付款后清桌模式",seq:169},{id:"s176-pos-menu-ui-按时段显示菜单-堂吃菜单",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置是否按照不同的时间段显示不同的菜单",moduleName:"时段菜单",feature:"（未填写）",title:"按时段显示菜单:堂吃菜单",seq:176},{id:"s177-pos-menu-ui-按时段显示菜单-外食菜单",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置是否按照不同的时间段显示不同的菜单",moduleName:"时段菜单",feature:"（未填写）",title:"按时段显示菜单:外食菜单",seq:177},{id:"s178-pos-order-cart-显示单菜序号",groupTitle:"POS 点单页展示",groupKey:"pos-order-cart",sceneDesc:"设置是否显示单个菜的菜品序号ID",moduleName:"单菜设置",feature:"（未填写）",title:"显示单菜序号",seq:178},{id:"s193-pos-button-visibility-将-删单-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"删单"按钮隐藏到"更多"中...',moduleName:"常见按键",feature:"将“删单”隐藏到“更多”（POS布局）",title:'将"删单"隐藏到"更多"',seq:193},{id:"s194-pos-button-visibility-将-移单-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"移单"隐藏到"更多"中...',moduleName:"常见按键",feature:"（未填写）",title:'将"移单"隐藏到"更多"',seq:194},{id:"s195-pos-button-visibility-将-清桌-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"清桌"隐藏到"更多"中...',moduleName:"常见按键",feature:"（未填写）",title:'将"清桌"隐藏到"更多"',seq:195},{id:"s196-pos-order-toolbar-自定义分割线名称",groupTitle:"POS 点单页工具栏",groupKey:"pos-order-toolbar",sceneDesc:"设置POS点单页面，自定义分割线名称",moduleName:"常见按键",feature:"（未填写）",title:"自定义分割线名称",seq:196},{id:"s197-pos-button-visibility-将-编辑-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"编辑"隐藏到"更多"中...',moduleName:"常见按键",feature:"（未填写）",title:'将"编辑"隐藏到"更多"',seq:197},{id:"s198-pos-button-visibility-将-送厨-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"送厨"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"送厨"隐藏到"更多"',seq:198},{id:"s199-pos-button-visibility-将-付款-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"付款"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"付款"隐藏到"更多"',seq:199},{id:"s200-pos-button-visibility-将-合并-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"合并"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"合并"隐藏到"更多"',seq:200},{id:"s201-pos-button-visibility-将-分单-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"分单"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"分单"隐藏到"更多"',seq:201},{id:"s202-pos-button-visibility-将-打单-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"打单"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"打单"隐藏到"更多"',seq:202},{id:"s203-pos-button-visibility-将-小费-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"小费"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"小费"隐藏到"更多"',seq:203},{id:"s204-pos-button-visibility-将-加收-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"加收"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"加收"隐藏到"更多"',seq:204},{id:"s205-pos-button-visibility-将-复制-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"复制"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"复制"隐藏到"更多"',seq:205},{id:"s206-pos-button-visibility-将-打折-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"打折"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"打折"隐藏到"更多"',seq:206},{id:"s207-pos-button-visibility-将-移菜-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"移菜"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"移菜"隐藏到"更多"',seq:207},{id:"s208-pos-button-visibility-将-顾客信息-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"顾客信息"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"顾客信息"隐藏到"更多"',seq:208},{id:"s209-pos-button-visibility-将-退款并删单-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"退款并删单"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"退款并删单"隐藏到"更多"',seq:209},{id:"s210-pos-button-visibility-将-叫号-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"叫号"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"叫号"隐藏到"更多"',seq:210},{id:"s211-pos-button-visibility-将-类型-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"类型"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"类型"隐藏到"更多"',seq:211},{id:"s212-pos-button-visibility-将-销号-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"销号"隐藏到"更多"',moduleName:"常见按键",feature:"（未填写）",title:'将"销号"隐藏到"更多"',seq:212},{id:"s213-pos-button-visibility-将-催菜-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"催菜"隐藏到"更多"',moduleName:"其他按键",feature:"（未填写）",title:'将"催菜"隐藏到"更多"',seq:213},{id:"s214-pos-button-visibility-将-企台-隐藏到-更多",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，将"企台"隐藏到"更多"',moduleName:"其他按键",feature:"（未填写）",title:'将"企台"隐藏到"更多"',seq:214},{id:"s215-pos-button-visibility-来取-外送历史订单界面-将-复制-隐藏",groupTitle:"POS 按钮显隐",groupKey:"pos-button-visibility",sceneDesc:'设置POS点单页面，来取/外送历史订单界面:将"复制"隐藏',moduleName:"其他按键",feature:"（未填写）",title:'来取/外送历史订单界面:将"复制"隐藏',seq:215},{id:"s216-pos-menu-ui-组平铺展示",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置POS点单页面，组是否平铺展示",moduleName:"点餐界面模式",feature:"（未填写）",title:"组平铺展示",seq:216},{id:"s217-pos-menu-ui-类展示",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置POS点单页面，分类的展示布局形式Horizontal 2、Horizontal 3、Vertical 1",moduleName:"点餐界面模式",feature:"类展示（分类布局形式）",title:"类展示",seq:217},{id:"s218-pos-menu-ui-菜展示",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置POS点单页面，菜的展示布局形式Regular Buttons、Large Buttons",moduleName:"点餐界面模式",feature:"（未填写）",title:"菜展示",seq:218},{id:"s219-pos-menu-ui-按钮颜色满铺",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置POS点单页面，按钮颜色是否铺满",moduleName:"点餐界面模式",feature:"（未填写）",title:"按钮颜色满铺",seq:219},{id:"s220-pos-menu-ui-显示菜品价格",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置POS点单页面，是否显示菜品价格",moduleName:"点餐界面模式",feature:"（未填写）",title:"显示菜品价格",seq:220},{id:"s221-pos-checkout-entry-支付前确认客户信息",groupTitle:"POS 结账入口",groupKey:"pos-checkout-entry",sceneDesc:"设置POS点单页面，是否支付前需要服务员二次确认客户信息",moduleName:"点餐界面模式",feature:"（未填写）",title:"支付前确认客户信息",seq:221},{id:"s248-pos-checkout-entry-当用条形码找单时打开单子付款界面",groupTitle:"POS 结账入口",groupKey:"pos-checkout-entry",sceneDesc:"设置当用条形码找单时是否打开单子的付款界面",moduleName:"付款收据",feature:"（未填写）",title:"当用条形码找单时打开单子付款界面",seq:248},{id:"s251-pos-find-order-list-找单界面打印所选收据类型",groupTitle:"POS 找单列表",groupKey:"pos-find-order-list",sceneDesc:"设置找单界面打印时是否展示收据类型选择",moduleName:"付款收据",feature:"（未填写）",title:"找单界面打印所选收据类型",seq:251},{id:"s347-tables-floor-允许更换企台",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置Ipad上使用POS，是否允许更换服务员",moduleName:"基础设置",feature:"（未填写）",title:"允许更换企台",seq:347},{id:"s348-pos-menu-ui-按照时段显示菜单",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置Ipad上使用POS，是否按照时段显示菜单",moduleName:"基础设置",feature:"（未填写）",title:"按照时段显示菜单",seq:348},{id:"s350-pos-menu-ui-电子菜单自定义消息",groupTitle:"POS 菜单与布局",groupKey:"pos-menu-ui",sceneDesc:"设置Ipad上使用POS，是否允许电子菜单自定义消息",moduleName:"基础设置",feature:"（未填写）",title:"电子菜单自定义消息",seq:350},{id:"s351-tables-floor-启用向客户端发送清桌通知",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置Ipad上使用POS，是否启用向客户端发送清桌通知",moduleName:"基础设置",feature:"（未填写）",title:"启用向客户端发送清桌通知",seq:351},{id:"s443-guest-order-rules-未填写",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"比如KTV场景，按照使用时长收费",moduleName:"按时计价",feature:"按时计价（如KTV按时长收费）",title:"（未填写）",seq:443},{id:"s461-cds-封面",groupTitle:"客显屏",groupKey:"cds",sceneDesc:"设置客显屏的广告宣传图是否展示 维护请至素材中心。",moduleName:"封面",feature:"（未填写）",title:"封面",seq:461},{id:"s462-cds-Logo",groupTitle:"客显屏",groupKey:"cds",sceneDesc:"设置客显屏的LOGO是否展示 维护请至素材中心。",moduleName:"Logo",feature:"（未填写）",title:"Logo",seq:462},{id:"s466-cds-其他",groupTitle:"客显屏",groupKey:"cds",sceneDesc:"Pickup/Delivery类型订单是否启用客显屏",moduleName:"服务",feature:"（未填写）",title:"其他",seq:466},{id:"s483-pos-order-toolbar-分单-删单-保存-退出-付款-送厨-直送-仅付款",groupTitle:"POS 点单页工具栏",groupKey:"pos-order-toolbar",sceneDesc:"整单操作相关操作的按钮及排序顺序",moduleName:"整单操作",feature:"点单页配置：整单操作（按钮集合/排序）",title:"分单、删单、保存、退出、付款、送厨、直送、仅付款",seq:483},{id:"s484-pos-order-toolbar-分割线-加1-数量-减1-备注-税-调味-改价",groupTitle:"POS 点单页工具栏",groupKey:"pos-order-toolbar",sceneDesc:"菜品详情相关操作的按钮及排序顺序",moduleName:"菜品详情",feature:"菜品详情（按钮集合/排序）",title:"分割线、加1、数量、减1、备注、税、调味、改价",seq:484},{id:"s485-pos-order-toolbar-排序-客人信息-类型-换桌-企台-客人-整单备注-会员-打单",groupTitle:"POS 点单页工具栏",groupKey:"pos-order-toolbar",sceneDesc:"订单信息相关操作的按钮及排序顺序",moduleName:"订单信息",feature:"POS点单页配置订单信息（按钮排序/显隐）",title:"排序、客人信息、类型、换桌、企台、客人、整单备注、会员、打单",seq:485},{id:"s486-pos-order-toolbar-加收-折扣-小费-整单税",groupTitle:"POS 点单页工具栏",groupKey:"pos-order-toolbar",sceneDesc:"订单金额相关操作的按钮及排序顺序",moduleName:"订单金额",feature:"点单页配置订单金额（按钮排序/显隐）",title:"加收、折扣、小费、整单税",seq:486},{id:"s502-guest-order-rules-可自动送厨的Kiosk订单支付类型",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置订单在何种支付状态下自动送厨",moduleName:"收据",feature:"（未填写）",title:"可自动送厨的Kiosk订单支付类型",seq:502},{id:"s515-guest-menu-structure-展示菜单序号",groupTitle:"食客端·菜单结构",groupKey:"guest-menu-structure",sceneDesc:"设置菜单是否展示菜单序号ID",moduleName:"菜单",feature:"（未填写）",title:"展示菜单序号",seq:515},{id:"s516-guest-menu-structure-显示组名称",groupTitle:"食客端·菜单结构",groupKey:"guest-menu-structure",sceneDesc:"设置菜单分类，按照组类菜树形结构，是否展示组名称",moduleName:"菜单",feature:"（未填写）",title:"显示组名称",seq:516},{id:"s517-guest-menu-structure-菜单展示位置",groupTitle:"食客端·菜单结构",groupKey:"guest-menu-structure",sceneDesc:"设置菜单分类导航是顶部展示，还是侧边展示",moduleName:"菜单",feature:"（未填写）",title:"菜单展示位置",seq:517},{id:"s518-guest-menu-structure-默认展开第一组",groupTitle:"食客端·菜单结构",groupKey:"guest-menu-structure",sceneDesc:"设置菜单组类菜树形结构，是否默认展开第一个组下面的类名称",moduleName:"菜单",feature:"（未填写）",title:"默认展开第一组",seq:518},{id:"s519-guest-menu-structure-菜单图片裁切显示",groupTitle:"食客端·菜单结构",groupKey:"guest-menu-structure",sceneDesc:"设置菜单图片是填充菜单卡片，还是按照图片大小等比放大缩小展示",moduleName:"菜单",feature:"（未填写）",title:"菜单图片裁切显示",seq:519},{id:"s520-guest-menu-structure-套餐展示导航栏",groupTitle:"食客端·菜单结构",groupKey:"guest-menu-structure",sceneDesc:"设置套餐页面，是否展示套餐步骤分类导航栏",moduleName:"菜单",feature:"（未填写）",title:"套餐展示导航栏",seq:520},{id:"s521-guest-notes-fees-订单备注",groupTitle:"备注与附加服务",groupKey:"guest-notes-fees",sceneDesc:"设置订单是否支持食客进行特殊备注",moduleName:"菜单",feature:"（未填写）",title:"订单备注",seq:521},{id:"s522-guest-notes-fees-产品备注",groupTitle:"备注与附加服务",groupKey:"guest-notes-fees",sceneDesc:"设置商品是否支持食客进行特殊备注",moduleName:"菜单",feature:"（未填写）",title:"产品备注",seq:522},{id:"s523-guest-notes-fees-套餐子项备注",groupTitle:"备注与附加服务",groupKey:"guest-notes-fees",sceneDesc:"设置套餐内的子商品是否支持食客进行特殊备注",moduleName:"菜单",feature:"（未填写）",title:"套餐子项备注",seq:523},{id:"s524-guest-menu-structure-瀑布流模式",groupTitle:"食客端·菜单结构",groupKey:"guest-menu-structure",sceneDesc:"设置菜单浏览形式（连续滚动 / 分类导航切换）",moduleName:"菜单",feature:"（未填写）",title:"瀑布流模式",seq:524},{id:"s528-guest-menu-structure-菜价为0展示价格",groupTitle:"食客端·菜单结构",groupKey:"guest-menu-structure",sceneDesc:"设置价格为0的菜品是否在菜单上展示价格",moduleName:"菜单",feature:"（未填写）",title:"菜价为0展示价格",seq:528},{id:"s532-guest-menu-global-展示MenuSifu品牌LOGO",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置是否展示MenuSifu品牌LOGO",moduleName:"展示设置",feature:"（未填写）",title:"展示MenuSifu品牌LOGO",seq:532},{id:"s533-tables-floor-选择桌子页面",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置是否展示选择桌子页面",moduleName:"桌子设置",feature:"（未填写）",title:"选择桌子页面",seq:533},{id:"s534-tables-floor-自动清桌",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置桌子被占用超过多久后是否自动清桌",moduleName:"桌子设置",feature:"（未填写）",title:"自动清桌",seq:534},{id:"s535-wait-time-展示当前订单预计等待时长",groupTitle:"等待时长提示",groupKey:"wait-time",sceneDesc:"设置是否展示当前订单预计等待时长（开启后配置自动关闭/菜单弹框分钟数）",moduleName:"等待时长",feature:"（未填写）",title:"展示当前订单预计等待时长",seq:535},{id:"s536-wait-time-预计等待时长区间设置",groupTitle:"等待时长提示",groupKey:"wait-time",sceneDesc:"设置是否启用预计等待时长区间（杯数/分钟阈值与区间加减分钟）",moduleName:"等待时长",feature:"（未填写）",title:"预计等待时长区间设置",seq:536},{id:"s537-wait-time-等待时长展示类型",groupTitle:"等待时长提示",groupKey:"wait-time",sceneDesc:"设置等待时长展示类型（排队杯数/制作等待时间）",moduleName:"等待时长",feature:"（未填写）",title:"等待时长展示类型",seq:537},{id:"s538-wait-time-字体大小",groupTitle:"等待时长提示",groupKey:"wait-time",sceneDesc:"设置等待时长提示样式的字体大小（系统默认/自定义）",moduleName:"等待时长",feature:"（未填写）",title:"字体大小",seq:538},{id:"s539-wait-time-字体背景色",groupTitle:"等待时长提示",groupKey:"wait-time",sceneDesc:"设置等待时长提示样式的字体背景色（系统默认/自定义）",moduleName:"等待时长",feature:"（未填写）",title:"字体背景色",seq:539},{id:"s540-wait-time-字体颜色",groupTitle:"等待时长提示",groupKey:"wait-time",sceneDesc:"设置等待时长提示样式的字体颜色（系统默认/自定义）",moduleName:"等待时长",feature:"（未填写）",title:"字体颜色",seq:540},{id:"s542-guest-menu-global-开启Kiosk本地菜单标签设置",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置是否使用本地商品标签功能配置还是使用商品中心的商品标签功能配置",moduleName:"平台设置",feature:"（未填写）",title:"开启Kiosk本地菜单标签设置",seq:542},{id:"s544-guest-notes-fees-餐具加收",groupTitle:"备注与附加服务",groupKey:"guest-notes-fees",sceneDesc:"设置是否支持食客选择餐具及餐具是否收费",moduleName:"附加费设置",feature:"（未填写）",title:"餐具加收",seq:544},{id:"s545-guest-notes-fees-打包带加收",groupTitle:"备注与附加服务",groupKey:"guest-notes-fees",sceneDesc:"设置是否支持食客选择打包及打包带是否收费",moduleName:"附加费设置",feature:"（未填写）",title:"打包带加收",seq:545},{id:"s567-guest-order-rules-菜单延迟送厨",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置菜品下单限制，哪些菜品食客下单后需要延迟送厨，及设置延迟多久自动送厨",moduleName:"权限设置",feature:"（未填写）",title:"菜单延迟送厨",seq:567},{id:"s569-guest-order-rules-点单须知",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置食客端是否展示点单须知弹框及自定义内容",moduleName:"提示信息",feature:"（未填写）",title:"点单须知",seq:569},{id:"s570-guest-order-rules-火锅页面提示",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置火锅菜单的特殊说明提示",moduleName:"提示信息",feature:"（未填写）",title:"火锅页面提示",seq:570},{id:"s571-guest-order-rules-品类先下单",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置菜单模式是品类模式（自助餐场景）选择某个套餐后是否默认先下单",moduleName:"下单设置",feature:"（未填写）",title:"品类先下单",seq:571},{id:"s572-guest-order-rules-火锅锅底必选",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置下单时，火锅锅底是否必选",moduleName:"下单设置",feature:"（未填写）",title:"火锅锅底必选",seq:572},{id:"s573-guest-order-rules-火锅锅底下单后仍展示锅底",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置火锅锅底下单后，菜单中是否还展示火锅锅底",moduleName:"下单设置",feature:"（未填写）",title:"火锅锅底下单后仍展示锅底",seq:573},{id:"s574-guest-order-rules-火锅锅底下单方式",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置火锅锅底选择后必须先下单还是可加入购物车",moduleName:"下单设置",feature:"（未填写）",title:"火锅锅底下单方式",seq:574},{id:"s575-guest-order-rules-同一锅型-相同锅底超过一半默认加收",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置火锅同一锅型,相同锅底超过一半默认加收多少钱",moduleName:"下单设置",feature:"（未填写）",title:"同一锅型,相同锅底超过一半默认加收",seq:575},{id:"s577-guest-order-rules-展示用餐时长",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置订单下单后是否展示用餐时长",moduleName:"下单设置",feature:"（未填写）",title:"展示用餐时长",seq:577},{id:"s578-guest-order-rules-用餐时长倒计时展示",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置订单下单后展示的用餐时长是正计时还是倒计时",moduleName:"下单设置",feature:"（未填写）",title:"用餐时长倒计时展示",seq:578},{id:"s579-guest-order-rules-用餐剩余时长提示",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置用餐剩余多少时间后弹出用餐剩余时长提示",moduleName:"下单设置",feature:"（未填写）",title:"用餐剩余时长提示",seq:579},{id:"s580-guest-order-rules-用餐剩余时长提示后不允许下单",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置用餐剩余时长提示后是否允许食客自助下单",moduleName:"下单设置",feature:"（未填写）",title:"用餐剩余时长提示后不允许下单",seq:580},{id:"s581-guest-order-rules-菜单送厨方式",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置菜单下单后自动送厨还是需要服务员在POS上手动操作送厨",moduleName:"下单设置",feature:"（未填写）",title:"菜单送厨方式",seq:581},{id:"s592-tables-floor-不允许一桌多单",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置一个桌子是否允许创建多个订单",moduleName:"下单设置",feature:"（未填写）",title:"不允许一桌多单",seq:592},{id:"s597-guest-order-rules-每轮菜品互斥下单",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置每轮下单时菜品互斥规则",moduleName:"下单设置",feature:"（未填写）",title:"每轮菜品互斥下单",seq:597},{id:"s598-guest-order-rules-每轮菜品组合下单",groupTitle:"食客端·下单与规则",groupKey:"guest-order-rules",sceneDesc:"设置每轮下单时菜品组合规则",moduleName:"下单设置",feature:"（未填写）",title:"每轮菜品组合下单",seq:598},{id:"s599-guest-menu-global-选择您想展示的菜单组",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置所有设备/桌子默认展示哪些菜单",moduleName:"展示设置",feature:"（未填写）",title:"选择您想展示的菜单组",seq:599},{id:"s600-guest-menu-global-纯展示模式",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置所有设备/桌子菜单是否为纯展示模式（不可加购）",moduleName:"展示设置",feature:"（未填写）",title:"纯展示模式",seq:600},{id:"s601-guest-menu-global-品牌-品类模式",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置菜单点单模式是普通菜单模式还是按照品类先分类查看再选择的菜单点单形式",moduleName:"展示设置",feature:"（未填写）",title:"品牌/品类模式",seq:601},{id:"s602-guest-menu-global-菜单分类模式",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置菜单点单模式是普通菜单模式还是按照分类先分类查看再选择的菜单点单形式",moduleName:"展示设置",feature:"（未填写）",title:"菜单分类模式",seq:602},{id:"s604-guest-menu-global-eMenu-Pro模式",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置所有设备/桌子的菜单页面展示形式（普通/高级设计稿）",moduleName:"展示设置",feature:"（未填写）",title:"eMenu Pro模式",seq:604},{id:"s606-guest-menu-global-展示菜单类名称",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置菜单树形结构中是否展示类名称",moduleName:"展示设置",feature:"（未填写）",title:"展示菜单类名称",seq:606},{id:"s607-guest-menu-global-菜单图片展示模式",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置菜单是默认大图展示形式，还是默认小图展示形式",moduleName:"展示设置",feature:"（未填写）",title:"菜单图片展示模式",seq:607},{id:"s608-guest-menu-global-展示菜详情",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置菜单是否展示菜单详情页面",moduleName:"展示设置",feature:"（未填写）",title:"展示菜详情",seq:608},{id:"s611-guest-menu-global-展示开始按钮",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置首页是否展示开始点单按钮",moduleName:"展示设置",feature:"（未填写）",title:"展示开始按钮",seq:611},{id:"s612-guest-menu-global-展示品牌",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置首页是否展示软件服务商的品牌LOGO",moduleName:"展示设置",feature:"（未填写）",title:"展示品牌",seq:612},{id:"s616-guest-menu-cart-展示菜单送厨状态",groupTitle:"食客端·购物车展示",groupKey:"guest-menu-cart",sceneDesc:"设置购物车是否展示菜单的送厨状态",moduleName:"展示设置",feature:"（未填写）",title:"展示菜单送厨状态",seq:616},{id:"s617-guest-menu-cart-购物车展示订单价格",groupTitle:"食客端·购物车展示",groupKey:"guest-menu-cart",sceneDesc:"设置购物车是否展示订单价格",moduleName:"展示设置",feature:"（未填写）",title:"购物车展示订单价格",seq:617},{id:"s618-guest-menu-cart-菜品售罄自动隐藏",groupTitle:"食客端·购物车展示",groupKey:"guest-menu-cart",sceneDesc:"设置菜品售罄是否自动隐藏不展示",moduleName:"展示设置",feature:"（未填写）",title:"菜品售罄自动隐藏",seq:618},{id:"s619-tables-floor-人数选择",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置是否展示人数选择页面。关闭后跳过人数选择",moduleName:"用户设置",feature:"（未填写）",title:"人数选择",seq:619},{id:"s625-pos-order-init-儿童将不参与下单限制规则的人数计算",groupTitle:"POS 开单流程",groupKey:"pos-order-init",sceneDesc:"设置儿童是否参与下单限制规则的人数计算",moduleName:"用户设置",feature:"（未填写）",title:"儿童将不参与下单限制规则的人数计算",seq:625},{id:"s642-tables-floor-清桌",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置是否展示清桌按钮（eMenu上）",moduleName:"服务员设置",feature:"（未填写）",title:"清桌",seq:642},{id:"s643-tables-floor-开单前-换桌",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置开单前是否需要换桌（防止订单误追加）",moduleName:"服务员设置",feature:"（未填写）",title:"开单前,换桌",seq:643},{id:"s644-tables-floor-开单前-必换桌",groupTitle:"桌台与餐位",groupKey:"tables-floor",sceneDesc:"设置开单前是否必须选择桌子（强制选桌）",moduleName:"服务员设置",feature:"（未填写）",title:"开单前,必换桌",seq:644},{id:"s645-guest-menu-global-菜品名称字体大小",groupTitle:"食客端·首页与版式",groupKey:"guest-menu-global",sceneDesc:"设置菜品名称字体大小",moduleName:"菜单样式",feature:"（未填写）",title:"菜品名称字体大小",seq:645},{id:"s652-guest-facing-locale-选择语言",groupTitle:"食客端·界面语言",groupKey:"guest-facing-locale",sceneDesc:"设置终端支持的语言列表",moduleName:"多语言",feature:"（未填写）",title:"选择语言",seq:652},{id:"s653-guest-facing-locale-默认语言",groupTitle:"食客端·界面语言",groupKey:"guest-facing-locale",sceneDesc:"设置终端的默认语言",moduleName:"多语言",feature:"（未填写）",title:"默认语言",seq:653},{id:"s655-guest-menu-scenarios-年龄-类别",groupTitle:"食客端·品类与场景菜单",groupKey:"guest-menu-scenarios",sceneDesc:"自助餐品类设置（人数/套餐/菜单关联、年龄阶段、套餐名自定义）",moduleName:"类别设置",feature:"（未填写）",title:"年龄、类别",seq:655},{id:"s656-guest-menu-scenarios-菜单设置",groupTitle:"食客端·品类与场景菜单",groupKey:"guest-menu-scenarios",sceneDesc:"将商品与不同套餐关联（决定不同套餐食客看到的菜单）",moduleName:"菜单设置",feature:"（未填写）",title:"菜单设置",seq:656},{id:"s657-guest-menu-scenarios-营业时间",groupTitle:"食客端·品类与场景菜单",groupKey:"guest-menu-scenarios",sceneDesc:"",moduleName:"营业时间",feature:"（未填写）",title:"营业时间",seq:657},{id:"s658-guest-menu-scenarios-开启特殊菜单",groupTitle:"食客端·品类与场景菜单",groupKey:"guest-menu-scenarios",sceneDesc:"特殊菜单（额外分类并行展示）",moduleName:"特殊菜单",feature:"（未填写）",title:"开启特殊菜单",seq:658},{id:"s659-guest-menu-scenarios-类别名称",groupTitle:"食客端·品类与场景菜单",groupKey:"guest-menu-scenarios",sceneDesc:"",moduleName:"类别设置",feature:"（未填写）",title:"类别名称",seq:659},{id:"s660-guest-menu-scenarios-菜单设置",groupTitle:"食客端·品类与场景菜单",groupKey:"guest-menu-scenarios",sceneDesc:"",moduleName:"菜单设置",feature:"（未填写）",title:"菜单设置",seq:660},{id:"s661-guest-menu-scenarios-营业时间",groupTitle:"食客端·品类与场景菜单",groupKey:"guest-menu-scenarios",sceneDesc:"",moduleName:"营业时间",feature:"（未填写）",title:"营业时间",seq:661}]},"/operations/reservations/settings":{hubTitle:"预约等位中心",settingsPath:"/operations/reservations/settings",items:[{id:"s2-caller-screen-display-叫号屏开关",groupTitle:"叫号屏与显示策略",groupKey:"caller-screen-display",sceneDesc:"控制叫号屏的开启还是关闭，开启后，叫号屏才能使用",moduleName:"叫号屏",feature:"启用与取餐叫号能力总开关",title:"叫号屏开关",seq:2},{id:"s3-caller-screen-display-单号显示时长",groupTitle:"叫号屏与显示策略",groupKey:"caller-screen-display",sceneDesc:"控制叫号屏上单号展示的时长，超过设定的时长后，不在展示该单号",moduleName:"叫号屏",feature:"叫号屏单号显示时长",title:"单号显示时长",seq:3},{id:"s4-caller-screen-display-单号数量上限",groupTitle:"叫号屏与显示策略",groupKey:"caller-screen-display",sceneDesc:"控制叫号屏上最多展示多少个单号，超过数量后，暂时不展示超出的单号",moduleName:"叫号屏",feature:"叫号屏同屏展示单号数量上限",title:"单号数量上限",seq:4},{id:"s5-caller-screen-display-数据存储时间-天",groupTitle:"叫号屏与显示策略",groupKey:"caller-screen-display",sceneDesc:"控制叫号屏数据的存储时长，超出时间后，清空历史数据",moduleName:"叫号屏",feature:"叫号屏历史数据保留天数",title:"数据存储时间(天)",seq:5},{id:"s6-caller-screen-display-付款后自动移除单号",groupTitle:"叫号屏与显示策略",groupKey:"caller-screen-display",sceneDesc:"控制叫号屏上展示的订单，如果是待支付的订单正常在叫号屏显示，订单支付成功后单号从叫号屏移除",moduleName:"叫号屏",feature:"付款成功后自动移除叫号屏单号",title:"付款后自动移除单号",seq:6},{id:"s7-caller-screen-display-显示模式",groupTitle:"叫号屏与显示策略",groupKey:"caller-screen-display",sceneDesc:"控制叫号屏是同时展示广告图和订单号，还是仅展示订单号，不展示广告图片；还是展示Multiple kitchens或者Show kitchen preparation status",moduleName:"叫号屏",feature:"叫号屏显示模式（广告图/仅单号/多厨房/备餐状态）",title:"显示模式",seq:7},{id:"s12-waitlist-queue-rules-按照团体人数分开排队",groupTitle:"等位排队规则",groupKey:"waitlist-queue-rules",sceneDesc:"等位按照团体人数分开排队：控制等位时是否根据团体人数（如小桌、大桌）分别排队",moduleName:"等位",feature:"等位按团体人数分开排队",title:"按照团体人数分开排队",seq:12},{id:"s13-waitlist-queue-rules-团体人数",groupTitle:"等位排队规则",groupKey:"waitlist-queue-rules",sceneDesc:"设置等位时可接受的团体人数（如2人、4人、6人桌等）或团体人数参数",moduleName:"等位",feature:"等位团体人数设置（如可排队的人数选项）",title:"团体人数",seq:13},{id:"s14-waitlist-queue-rules-团体代号",groupTitle:"等位排队规则",groupKey:"waitlist-queue-rules",sceneDesc:"等位团体代号”，通常指等位时为每个排队团体分配的唯一代号（如号码或姓名），用于叫号识别。",moduleName:"等位",feature:"等位团体代号（排队识别标识）",title:"团体代号",seq:14},{id:"s341-reservation-automation-预约消息提前提醒-单位-小时",groupTitle:"预约提醒与自动化",groupKey:"reservation-automation",sceneDesc:"设置预约订单提前多久在POS上进行消息通知提醒",moduleName:"Default",feature:"（未填写）",title:"预约消息提前提醒(单位:小时)",seq:341},{id:"s342-reservation-automation-自动填充",groupTitle:"预约提醒与自动化",groupKey:"reservation-automation",sceneDesc:"",moduleName:"Default",feature:"（未填写）",title:"自动填充",seq:342},{id:"s529-waitlist-queue-rules-等位模式",groupTitle:"等位排队规则",groupKey:"waitlist-queue-rules",sceneDesc:"设置是否支持等位排队取号功能",moduleName:"产品对接",feature:"（未填写）",title:"等位模式",seq:529}]},"/operations/waitlist/settings":{hubTitle:"外卖/来取",settingsPath:"/operations/waitlist/settings",items:[{id:"s31-order-type-pickup-订单类型",groupTitle:"订单类型与取餐流程",groupKey:"order-type-pickup",sceneDesc:"控制终端/食客端点单，食客可以选择哪种订单类型，是堂吃，还是等取，还是外带",moduleName:"设置",feature:"订单类型（堂吃/等取/外带）",title:"订单类型",seq:31},{id:"s90-scan-online-basics-网上订餐单号区分-转-订餐单号区分",groupTitle:"扫码·线上下单基础",groupKey:"scan-online-basics",sceneDesc:"",moduleName:"基础设置",feature:"网上订餐单号区分",title:"网上订餐单号区分（转：订餐单号区分）",seq:90},{id:"s92-scan-online-basics-自助点餐功能-扫码点餐",groupTitle:"扫码·线上下单基础",groupKey:"scan-online-basics",sceneDesc:"",moduleName:"基础设置",feature:"开启自助点餐功能（扫码点餐）",title:"自助点餐功能（扫码点餐）",seq:92},{id:"s93-scan-online-basics-网上点餐免开端口设置",groupTitle:"扫码·线上下单基础",groupKey:"scan-online-basics",sceneDesc:"",moduleName:"基础设置",feature:"网上点餐免开端口设置",title:"网上点餐免开端口设置",seq:93},{id:"s94-scan-online-basics-收据小票上打印确认签名栏",groupTitle:"扫码·线上下单基础",groupKey:"scan-online-basics",sceneDesc:"",moduleName:"基础设置",feature:"收据小票上打印确认签名栏",title:"收据小票上打印确认签名栏",seq:94},{id:"s95-online-integration-Online-order-service-host",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"Online order service host",seq:95},{id:"s96-online-integration-Online-order-service-merchant-ID",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"Online order service merchant ID",seq:96},{id:"s97-online-integration-Online-order-service-external-port-number",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"Online order service external port number",seq:97},{id:"s98-online-integration-Menusifu-self-dine-in-host-URL",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"Menusifu self dine in host URL",seq:98},{id:"s99-online-integration-callback-remotehost",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"callback remotehost",seq:99},{id:"s100-online-integration-callback-remoteport",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"callback remoteport",seq:100},{id:"s101-online-integration-callback-lan-host",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"callback lan host",seq:101},{id:"s102-online-integration-callback-lan-port",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"callback lan port",seq:102},{id:"s103-online-integration-callback-service-delay-seconds-to-start",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"callback service delay seconds to start",seq:103},{id:"s104-online-integration-callback-service-interval-seconds-to-repeat",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"callback service interval seconds to repeat",seq:104},{id:"s105-online-integration-callback-service-hash1-to-connect",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"callback service hash1 to connect",seq:105},{id:"s106-online-integration-callback-service-hash2-to-connect",groupTitle:"线上订餐服务对接",groupKey:"online-integration",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"callback service hash2 to connect",seq:106},{id:"s429-delivery-packaging-外送区域设置",groupTitle:"外送区域与打包费",groupKey:"delivery-packaging",sceneDesc:"设置哪些城市支持外送，外送的城市名称、州、邮编详情",moduleName:"区域设置",feature:"外送区域设置",title:"外送区域设置",seq:429},{id:"s487-order-type-pickup-选择订单类型",groupTitle:"订单类型与取餐流程",groupKey:"order-type-pickup",sceneDesc:"设置订单类型是支持堂吃，还是支持打包，还是支持外带",moduleName:"订单类型",feature:"（未填写）",title:"选择订单类型",seq:487},{id:"s488-order-type-pickup-展示订单类型选择页面",groupTitle:"订单类型与取餐流程",groupKey:"order-type-pickup",sceneDesc:"设置食客端是否展示订单类型选择页面",moduleName:"订单类型",feature:"（未填写）",title:"展示订单类型选择页面",seq:488},{id:"s489-order-type-pickup-送餐取餐服务方式",groupTitle:"订单类型与取餐流程",groupKey:"order-type-pickup",sceneDesc:"设置食客端是否展示送餐取餐服务方式（柜台自取/服务员送餐到桌）",moduleName:"订单类型",feature:"（未填写）",title:"送餐取餐服务方式",seq:489},{id:"s490-order-type-pickup-展示取餐方式",groupTitle:"订单类型与取餐流程",groupKey:"order-type-pickup",sceneDesc:"设置食客端是否展示送餐取餐服务方式选择页面",moduleName:"订单类型",feature:"（未填写）",title:"展示取餐方式",seq:490},{id:"s491-order-type-pickup-打包展示输入号码牌",groupTitle:"订单类型与取餐流程",groupKey:"order-type-pickup",sceneDesc:"设置打包场景下是否展示输入取餐实体号码牌页面",moduleName:"订单类型",feature:"（未填写）",title:"打包展示输入号码牌",seq:491},{id:"s503-order-type-pickup-送餐到桌餐牌号获取方式",groupTitle:"订单类型与取餐流程",groupKey:"order-type-pickup",sceneDesc:"设置送餐到桌餐牌号获取方式是输入实体号码牌还是使用虚拟的订单号",moduleName:"收据",feature:"（未填写）",title:"送餐到桌餐牌号获取方式",seq:503},{id:"s546-delivery-packaging-根据订单中每个菜品打包盒默认加收",groupTitle:"外送区域与打包费",groupKey:"delivery-packaging",sceneDesc:"设置默认哪些商品每个需要收取多少钱的额外费用",moduleName:"附加费设置",feature:"（未填写）",title:"根据订单中每个菜品打包盒默认加收",seq:546}]},"/orders/settings":{hubTitle:"订单中心",settingsPath:"/orders/settings",groupOrder:["order-init-scenario","order-numbering","split-merge-edit","order-discount","order-surcharge","order-settlement","order-void"],items:[{id:"s115-split-merge-edit-编辑应收金额",groupTitle:"分单合单与改单",groupKey:"split-merge-edit",sceneDesc:"设置是否可以编辑应收金额",moduleName:"基础设置",feature:"（未填写）",title:"编辑应收金额",seq:115},{id:"s116-split-merge-edit-取消部分支付订单",groupTitle:"分单合单与改单",groupKey:"split-merge-edit",sceneDesc:"设置是否可以取消部分支付订单",moduleName:"基础设置",feature:"（未填写）",title:"取消部分支付订单",seq:116},{id:"s117-split-merge-edit-编辑部分支付订单",groupTitle:"分单合单与改单",groupKey:"split-merge-edit",sceneDesc:"设置是否可以编辑部分支付订单",moduleName:"基础设置",feature:"（未填写）",title:"编辑部分支付订单",seq:117},{id:"s119-split-merge-edit-分单时展示未分单菜品",groupTitle:"分单合单与改单",groupKey:"split-merge-edit",sceneDesc:"设置分单时是否展示未分单菜品",moduleName:"基础设置",feature:"（未填写）",title:"分单时展示未分单菜品",seq:119},{id:"s124-split-merge-edit-支持SelfDineIn与POSDineIn-ToGo合单-转-支持合单",groupTitle:"分单合单与改单",groupKey:"split-merge-edit",sceneDesc:"设置是否支持不同产线下的订单进行合单",moduleName:"基础设置",feature:"支持跨产线订单合单",title:"支持SelfDineIn与POSDineIn/ToGo合单（转：支持合单）",seq:124},{id:"s126-order-init-scenario-默认新订单类型",groupTitle:"开单·桌台与场景",groupKey:"order-init-scenario",sceneDesc:"控制每次新创建订单的订单类型的默认类型是Dine In、To Go、Pick Up、Delivery的哪一种",moduleName:"基础设置",feature:"（未填写）",title:"默认新订单类型",seq:126},{id:"s127-order-numbering-最大单号-单号循环上限",groupTitle:"单号规则",groupKey:"order-numbering",sceneDesc:"订单单号生成的最大单号设置，比如最大999",moduleName:"单号设置",feature:"（未填写）",title:"最大单号(单号循环上限)",seq:127},{id:"s128-order-numbering-起始单号",groupTitle:"单号规则",groupKey:"order-numbering",sceneDesc:"订单单号生成的起始单号设置，比如最大每天的第一个订单，单号从25开始，第二单则是26号单号",moduleName:"单号设置",feature:"（未填写）",title:"起始单号",seq:128},{id:"s129-order-numbering-单号模式",groupTitle:"单号规则",groupKey:"order-numbering",sceneDesc:"订单号按照不同的分类，不同的单号规则",moduleName:"单号设置",feature:"（未填写）",title:"单号模式",seq:129},{id:"s130-order-numbering-分类单号设置",groupTitle:"单号规则",groupKey:"order-numbering",sceneDesc:"设置单号模式下，不同分类单号的展示规则",moduleName:"单号设置",feature:"（未填写）",title:"分类单号设置",seq:130},{id:"s131-order-numbering-单号重置",groupTitle:"单号规则",groupKey:"order-numbering",sceneDesc:"设置每天单号从起始单号开始，还是一直累加订单号",moduleName:"单号设置",feature:"单号重置（按日/持续累加）",title:"单号重置",seq:131},{id:"s140-split-merge-edit-分单时分离相同菜",groupTitle:"分单合单与改单",groupKey:"split-merge-edit",sceneDesc:"设置订单进行分单时，相同菜品是否拆开",moduleName:"自定义单/套餐",feature:"（未填写）",title:"分单时分离相同菜",seq:140},{id:"s141-split-merge-edit-支持为已送厨的菜修改调味",groupTitle:"分单合单与改单",groupKey:"split-merge-edit",sceneDesc:"设置已经送厨的菜，是否可以再次修改调味",moduleName:"自定义单/套餐",feature:"（未填写）",title:"支持为已送厨的菜修改调味",seq:141},{id:"s147-order-settlement-总价四舍五入设置",groupTitle:"金额结算",groupKey:"order-settlement",sceneDesc:"设置订单总价四舍五入的方式",moduleName:"价格",feature:"（未填写）",title:"总价四舍五入设置",seq:147},{id:"s149-order-surcharge-合单时自动加收重算",groupTitle:"加收",groupKey:"order-surcharge",sceneDesc:"设置在多个订单进行合并订单时，加收费用是否根据合并后的订单金额进行重新计算",moduleName:"价格",feature:"（未填写）",title:"合单时自动加收重算",seq:149},{id:"s155-order-void-是否向厨房发送删单信息",groupTitle:"删退与作废",groupKey:"order-void",sceneDesc:"设置删除订单时，是否向厨房发送删单信息",moduleName:"删单",feature:"（未填写）",title:"是否向厨房发送删单信息?",seq:155},{id:"s156-order-void-订单失效原因",groupTitle:"删退与作废",groupKey:"order-void",sceneDesc:"设置删除订单需要填写的删除原因有哪些原因选项",moduleName:"删单",feature:"订单失效原因（删除原因枚举）",title:"订单失效原因",seq:156},{id:"s157-order-void-删单原因必填",groupTitle:"删退与作废",groupKey:"order-void",sceneDesc:"设置删除订单的原因是否是必选",moduleName:"删单",feature:"（未填写）",title:"删单原因必填",seq:157},{id:"s158-order-void-删除未付款单",groupTitle:"删退与作废",groupKey:"order-void",sceneDesc:"设置是否可以删除未付款的订单",moduleName:"删单",feature:"（未填写）",title:"删除未付款单",seq:158},{id:"s159-order-void-根据菜退款",groupTitle:"删退与作废",groupKey:"order-void",sceneDesc:"设置是否支持按照单个菜品进行退款",moduleName:"删单",feature:"（未填写）",title:"根据菜退款",seq:159},{id:"s161-order-surcharge-允许清除线上订单服务费",groupTitle:"加收",groupKey:"order-surcharge",sceneDesc:"设置是否允许清除Online Order订单渠道的加收服务费",moduleName:"加收",feature:"（未填写）",title:"允许清除线上订单服务费",seq:161},{id:"s162-order-discount-折扣原因必填",groupTitle:"折扣",groupKey:"order-discount",sceneDesc:"设置当服务员对订单进行折扣操作时，是否需要填写原因，原因是否必填",moduleName:"折扣",feature:"（未填写）",title:"折扣原因必填",seq:162},{id:"s163-order-discount-折扣原因",groupTitle:"折扣",groupKey:"order-discount",sceneDesc:"设置折扣原因的默认值",moduleName:"折扣",feature:"（未填写）",title:"折扣原因",seq:163},{id:"s164-order-discount-自定义折扣原因",groupTitle:"折扣",groupKey:"order-discount",sceneDesc:"是否支持自定义输入折扣原因",moduleName:"折扣",feature:"（未填写）",title:"自定义折扣原因",seq:164},{id:"s446-order-discount-折扣设置",groupTitle:"折扣",groupKey:"order-discount",sceneDesc:"折扣比率设置，用于对订单或者商品进行额外折扣的预设选择项目",moduleName:"折扣比率设置",feature:"折扣比率设置（预设折扣选项）",title:"折扣设置",seq:446},{id:"s447-order-surcharge-加收设置",groupTitle:"加收",groupKey:"order-surcharge",sceneDesc:"加收比率设置，用于对订单或者商品进行额外加收的预设选择项目",moduleName:"加收比率设置",feature:"加收比率设置（预设加收选项）",title:"加收设置",seq:447}]},"/permissions/settings":{hubTitle:"权限管理中心",settingsPath:"/permissions/settings",items:[{id:"s68-role-employee-permissions-在单子还没全部关闭的情况下-允许经理强制登出",groupTitle:"角色与员工权限",groupKey:"role-employee-permissions",sceneDesc:"",moduleName:"员工工时",feature:"（未填写）",title:"在单子还没全部关闭的情况下,允许经理强制登出",seq:68},{id:"s69-role-employee-permissions-在单子全部付完款的情况下-才允许企台登出",groupTitle:"角色与员工权限",groupKey:"role-employee-permissions",sceneDesc:"",moduleName:"员工工时",feature:"（未填写）",title:"在单子全部付完款的情况下,才允许企台登出",seq:69},{id:"s75-account-security-auth-自动登出时间-分钟",groupTitle:"账户安全与授权",groupKey:"account-security-auth",sceneDesc:"设置超过多久系统没有操作，自动退出登录",moduleName:"系统安全",feature:"（未填写）",title:"自动登出时间(分钟)",seq:75},{id:"s138-order-operation-guardrails-自定义点单",groupTitle:"下单操作限制与授权",groupKey:"order-operation-guardrails",sceneDesc:"设置是否支持自定义手动录入菜品功能",moduleName:"自定义单/套餐",feature:"自定义点单（手写录入菜品开关）",title:"自定义点单",seq:138},{id:"s166-account-security-auth-完成每次操作后账号自动登出",groupTitle:"账户安全与授权",groupKey:"account-security-auth",sceneDesc:"设置POS系统完成每次操作后账号是否自动登出",moduleName:"基本设置",feature:"（未填写）",title:"完成每次操作后账号自动登出",seq:166},{id:"s175-account-security-auth-登录忽略特殊符号",groupTitle:"账户安全与授权",groupKey:"account-security-auth",sceneDesc:"设置进行登录输入时是否允许输入特殊符号",moduleName:"基本设置",feature:"（未填写）",title:"登录忽略特殊符号",seq:175},{id:"s345-account-security-auth-送厨密码权限",groupTitle:"账户安全与授权",groupKey:"account-security-auth",sceneDesc:"设置Ipad上使用POS，送厨操作是否需要权限",moduleName:"基础设置",feature:"（未填写）",title:"送厨密码权限",seq:345},{id:"s346-account-security-auth-主页密码权限",groupTitle:"账户安全与授权",groupKey:"account-security-auth",sceneDesc:"设置Ipad上使用POS，进入主页是否需要权限",moduleName:"基础设置",feature:"（未填写）",title:"主页密码权限",seq:346},{id:"s349-role-employee-permissions-允许企台在电子菜单上点只读菜",groupTitle:"角色与员工权限",groupKey:"role-employee-permissions",sceneDesc:"设置Ipad上使用POS，是否允许企台在电子菜单上点只读菜",moduleName:"基础设置",feature:"（未填写）",title:"允许企台在电子菜单上点只读菜",seq:349},{id:"s369-role-employee-permissions-允许开钱箱的员工",groupTitle:"角色与员工权限",groupKey:"role-employee-permissions",sceneDesc:"设置哪些员工有权限打开钱箱",moduleName:"钱箱设置",feature:"（未填写）",title:"允许开钱箱的员工",seq:369},{id:"s426-role-employee-permissions-未填写",groupTitle:"角色与员工权限",groupKey:"role-employee-permissions",sceneDesc:"设置餐厅有哪些角色",moduleName:"角色",feature:"角色（门店角色主数据）",title:"（未填写）",seq:426},{id:"s563-guest-order-limits-用餐时长限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置哪个设备或者哪个桌子订单用餐总时长，超时后食客加菜需服务员授权",moduleName:"下单限制",feature:"（未填写）",title:"用餐时长限制",seq:563},{id:"s564-guest-order-limits-下单次数限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置哪个设备或者哪个桌子订单下单次数上限，超限后需服务员授权方可继续加菜",moduleName:"下单限制",feature:"（未填写）",title:"下单次数限制",seq:564},{id:"s565-guest-order-limits-每位食客每轮下单菜品数量限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置哪个设备或者哪个桌子每轮每食客下单菜品数量上限，超限后需服务员授权方可加菜",moduleName:"下单限制",feature:"（未填写）",title:"每位食客每轮下单菜品数量限制",seq:565},{id:"s566-guest-order-limits-菜单下单限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置菜品下单限制（可看不可点，下单需服务员授权）",moduleName:"权限设置",feature:"（未填写）",title:"菜单下单限制",seq:566},{id:"s568-guest-order-limits-订单下单数量限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置订单维度的下单数量限制，超限需服务员授权",moduleName:"权限设置",feature:"（未填写）",title:"订单下单数量限制",seq:568},{id:"s576-guest-order-limits-用餐时长限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置订单用餐总时长，超时后食客加菜需服务员授权",moduleName:"下单设置",feature:"（未填写）",title:"用餐时长限制",seq:576},{id:"s583-guest-order-limits-下单次数限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置订单下单次数上限，超限后需服务员授权方可继续点餐",moduleName:"下单设置",feature:"（未填写）",title:"下单次数限制",seq:583},{id:"s584-guest-order-limits-每人每轮-每轮下单菜品数量限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置每轮/每人每轮下单菜品数量上限，超限后需服务员授权",moduleName:"下单设置",feature:"（未填写）",title:"每人每轮/每轮下单菜品数量限制",seq:584},{id:"s585-guest-order-limits-每轮下单指定菜品数量限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置每轮指定菜品数量上限，超限后需服务员授权",moduleName:"下单设置",feature:"（未填写）",title:"每轮下单指定菜品数量限制",seq:585},{id:"s586-guest-order-limits-每位食客每轮下单菜品数量限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置每位食客每轮下单菜品数量上限，超限后需服务员授权",moduleName:"下单设置",feature:"（未填写）",title:"每位食客每轮下单菜品数量限制",seq:586},{id:"s587-guest-order-limits-每位食客每轮下单指定菜品数量限制",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置每位食客每轮指定菜品数量上限，超限后需服务员授权",moduleName:"下单设置",feature:"（未填写）",title:"每位食客每轮下单指定菜品数量限制",seq:587},{id:"s588-guest-order-limits-订单下单时间间隔",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置订单下单最小时间间隔，小于间隔时需服务员授权",moduleName:"下单设置",feature:"（未填写）",title:"订单下单时间间隔",seq:588},{id:"s589-guest-order-limits-间隔时间内允许加购",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置订单下单间隔时间内是否允许加购，以及触发授权的条件",moduleName:"下单设置",feature:"（未填写）",title:"间隔时间内允许加购",seq:589},{id:"s590-guest-order-limits-菜品下单时间间隔",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置菜品下单最小时间间隔，小于间隔时需服务员授权",moduleName:"下单设置",feature:"（未填写）",title:"菜品下单时间间隔",seq:590},{id:"s591-guest-order-limits-间隔时间内允许加购",groupTitle:"食客下单限制规则",groupKey:"guest-order-limits",sceneDesc:"设置菜品下单时间间隔内是否允许加入购物车，以及触发授权的条件",moduleName:"下单设置",feature:"（未填写）",title:"间隔时间内允许加购",seq:591},{id:"s594-order-operation-guardrails-需要权限下单的积分菜",groupTitle:"下单操作限制与授权",groupKey:"order-operation-guardrails",sceneDesc:"设置积分菜是否需要服务员输入密码兑换",moduleName:"下单设置",feature:"（未填写）",title:"需要权限下单的积分菜",seq:594},{id:"s595-order-operation-guardrails-允许可看不可点的菜添加至购物车",groupTitle:"下单操作限制与授权",groupKey:"order-operation-guardrails",sceneDesc:"设置是否允许可看不可点的菜添加至购物车，关闭时需密码授权",moduleName:"下单设置",feature:"（未填写）",title:"允许可看不可点的菜添加至购物车",seq:595},{id:"s596-order-operation-guardrails-可看不可点的菜弹出服务员授权",groupTitle:"下单操作限制与授权",groupKey:"order-operation-guardrails",sceneDesc:"设置可看不可点的菜是否弹出服务员授权",moduleName:"下单设置",feature:"（未填写）",title:"可看不可点的菜弹出服务员授权",seq:596},{id:"s620-order-operation-guardrails-限制食客提前开单",groupTitle:"下单操作限制与授权",groupKey:"order-operation-guardrails",sceneDesc:"设置是否允许食客直接点单（开启限制则需服务员授权并绑定小费）",moduleName:"用户设置",feature:"（未填写）",title:"限制食客提前开单",seq:620},{id:"s621-order-operation-guardrails-允许食客更改人数",groupTitle:"下单操作限制与授权",groupKey:"order-operation-guardrails",sceneDesc:"设置是否允许食客更改就餐人数。关闭后需要服务员输入密码更改当前桌人数",moduleName:"用户设置",feature:"（未填写）",title:"允许食客更改人数",seq:621},{id:"s626-order-operation-guardrails-下单前-需要服务员授权",groupTitle:"下单操作限制与授权",groupKey:"order-operation-guardrails",sceneDesc:"设置食客下单前是否需要服务员授权",moduleName:"用户设置",feature:"（未填写）",title:"下单前,需要服务员授权",seq:626},{id:"s627-order-operation-guardrails-下单前允许食客切换品类",groupTitle:"下单操作限制与授权",groupKey:"order-operation-guardrails",sceneDesc:"设置下单前是否允许食客切换品类（关闭时需授权）",moduleName:"用户设置",feature:"（未填写）",title:"下单前允许食客切换品类",seq:627},{id:"s646-account-security-auth-命中任意规则后-弹出密码授权",groupTitle:"账户安全与授权",groupKey:"account-security-auth",sceneDesc:"设置命中下单限制规则后是否弹出密码授权",moduleName:"授权设置",feature:"（未填写）",title:"命中任意规则后,弹出密码授权",seq:646}]},"/print-templates/settings":{hubTitle:"打印中心",settingsPath:"/print-templates/settings",items:[{id:"s34-kitchen-ticket-packaging-打包单份数",groupTitle:"厨房单与打包单",groupKey:"kitchen-ticket-packaging",sceneDesc:"控制一个订单，打包单打印的份数是几份",moduleName:"打印设置",feature:"打包单打印份数",title:"打包单份数",seq:34},{id:"s167-print-foundation-devices-打印页高",groupTitle:"打印基础与设备",groupKey:"print-foundation-devices",sceneDesc:"设置单张小票打印最长大小",moduleName:"基本设置",feature:"打印页高（小票最大长度）",title:"打印页高",seq:167},{id:"s172-print-foundation-devices-收据未付价格显示",groupTitle:"打印基础与设备",groupKey:"print-foundation-devices",sceneDesc:"显示收据未支付的订单价格类型是现金价格还是信用卡价格，还是其他价格",moduleName:"基本设置",feature:"（未填写）",title:"收据未付价格显示",seq:172},{id:"s180-print-foundation-devices-Merchantcopy电子签名存储天数",groupTitle:"打印基础与设备",groupKey:"print-foundation-devices",sceneDesc:"设置商互联Merchantcopy信用卡电子签名收据存储天数",moduleName:"信用卡",feature:"（未填写）",title:"Merchantcopy电子签名存储天数",seq:180},{id:"s245-payment-receipt-flow-信用卡支付打印收据",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置信用卡支付的订单是否自动打印纸质签名收据",moduleName:"信用卡",feature:"（未填写）",title:"信用卡支付打印收据",seq:245},{id:"s246-payment-receipt-flow-使用以下支付方式时打印收据小票",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置使用哪种支付方式时才会自动打印收据小票",moduleName:"付款收据",feature:"（未填写）",title:"使用以下支付方式时打印收据小票",seq:246},{id:"s247-payment-receipt-flow-打印持卡人姓名",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置信用卡支付签名收据是否打印持卡人姓名",moduleName:"付款收据",feature:"（未填写）",title:"打印持卡人姓名",seq:247},{id:"s249-payment-receipt-flow-收据小票打印选项",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置打印信用卡支付签名收据是只打印食客签名收据，还是商户签名收据，还是同时打印2个收据，还是不打印",moduleName:"付款收据",feature:"（未填写）",title:"收据小票打印选项",seq:249},{id:"s250-payment-receipt-flow-删除信用卡支付时打印支付收据",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置删除信用卡支付的订单时支付签名收据的打印联次",moduleName:"付款收据",feature:"（未填写）",title:"删除信用卡支付时打印支付收据",seq:250},{id:"s252-payment-receipt-flow-小费",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置订单收据上是否打印小费的时机",moduleName:"付款收据",feature:"（未填写）",title:"小费",seq:252},{id:"s256-print-foundation-devices-打印Logo",groupTitle:"打印基础与设备",groupKey:"print-foundation-devices",sceneDesc:"设置哪种类型的收据上是否打印LOGO",moduleName:"基本设置",feature:"（未填写）",title:"打印Logo",seq:256},{id:"s257-kitchen-ticket-packaging-外卖平台订单打印平台备注",groupTitle:"厨房单与打包单",groupKey:"kitchen-ticket-packaging",sceneDesc:"设置外卖平台订单哪种类型的收据上是否打印外卖平台下单的备注",moduleName:"基本设置",feature:"（未填写）",title:"外卖平台订单打印平台备注",seq:257},{id:"s258-kitchen-ticket-packaging-外带订单-厨房单-收据单-增强显示-黑底白字",groupTitle:"厨房单与打包单",groupKey:"kitchen-ticket-packaging",sceneDesc:"设置外带订单(厨房单/收据单):是否增强突出显示",moduleName:"基本设置",feature:"（未填写）",title:"外带订单(厨房单/收据单):增强显示(黑底白字)",seq:258},{id:"s259-print-foundation-devices-启用轮打",groupTitle:"打印基础与设备",groupKey:"print-foundation-devices",sceneDesc:"设置当请求打印服务失败时，是否一直轮询请求打印机进行打印",moduleName:"基本设置",feature:"（未填写）",title:"启用轮打",seq:259},{id:"s260-payment-receipt-flow-打印收据小票-支付后自动打印",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置订单支付后是否自动打印收据小票",moduleName:"打印设置",feature:"（未填写）",title:"打印收据小票（支付后自动打印）",seq:260},{id:"s261-payment-receipt-flow-付款前打印收据",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置订单支付前是否自动打印收据小票",moduleName:"打印设置",feature:"（未填写）",title:"付款前打印收据",seq:261},{id:"s262-receipt-layout-details-第一份收据份数",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置首次打印收据的份数",moduleName:"打印设置",feature:"（未填写）",title:"第一份收据份数",seq:262},{id:"s263-payment-receipt-flow-一键付款-信用卡打印收据",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置信用卡支付时是否自动打印收据",moduleName:"打印设置",feature:"（未填写）",title:"一键付款/信用卡打印收据",seq:263},{id:"s264-receipt-layout-details-重打收据显示日期",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置重新打印收据是否显示打印日期",moduleName:"打印设置",feature:"（未填写）",title:"重打收据显示日期",seq:264},{id:"s265-receipt-layout-details-快速打印收据模式",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"是否开启快速打印收据模式",moduleName:"打印设置",feature:"（未填写）",title:"快速打印收据模式",seq:265},{id:"s266-payment-receipt-flow-小费-收据打印建议小费",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置食客订单收据的是否打印建议小费",moduleName:"打印设置",feature:"（未填写）",title:"小费（收据打印建议小费）",seq:266},{id:"s267-kitchen-ticket-packaging-外送小票打印份数",groupTitle:"厨房单与打包单",groupKey:"kitchen-ticket-packaging",sceneDesc:"设置外卖订单打印收据的份数",moduleName:"打印设置",feature:"（未填写）",title:"外送小票打印份数",seq:267},{id:"s268-payment-receipt-flow-微信-阿里支付打印收据",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置微信/阿里支付的订单是否打印收据",moduleName:"打印设置",feature:"（未填写）",title:"微信/阿里支付打印收据",seq:268},{id:"s269-receipt-layout-details-桌面POS打印前选择打印机",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置桌面POS打印前是否需要选择打印机",moduleName:"打印设置",feature:"（未填写）",title:"桌面POS打印前选择打印机",seq:269},{id:"s270-receipt-layout-details-手持移动POS打印前选择打印机",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置手持移动POS打印前是否需要选择打印机",moduleName:"打印设置",feature:"（未填写）",title:"手持移动POS打印前选择打印机",seq:270},{id:"s271-kitchen-ticket-packaging-打印菜品编号在-打包单-订单收据-厨房单",groupTitle:"厨房单与打包单",groupKey:"kitchen-ticket-packaging",sceneDesc:"设置打包单/订单收据/厨房单是否打印菜品编号",moduleName:"打印设置",feature:"打印菜品编号（按票种）",title:"打印菜品编号在:打包单/订单收据/厨房单",seq:271},{id:"s272-payment-receipt-flow-支付收据显示复选框",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置信用卡支付签名收据是否显示复选框",moduleName:"打印设置",feature:"（未填写）",title:"支付收据显示复选框",seq:272},{id:"s273-receipt-layout-details-收据单-仅打印新菜",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否每次打印收据只打印新加的菜品",moduleName:"打印设置",feature:"（未填写）",title:"收据单:仅打印新菜",seq:273},{id:"s274-receipt-layout-details-收据-打印价格为0的子菜",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否打印价格为0的子菜",moduleName:"打印设置",feature:"（未填写）",title:"收据:打印价格为0的子菜",seq:274},{id:"s275-receipt-layout-details-收据-打印价格为0的菜",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否打印价格为0的菜",moduleName:"收据排版",feature:"（未填写）",title:"收据:打印价格为0的菜",seq:275},{id:"s276-receipt-layout-details-收据-打印调味-打折-加收价格",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否打印调味/打折/加收价格",moduleName:"收据排版",feature:"（未填写）",title:"收据:打印调味/打折/加收价格",seq:276},{id:"s277-receipt-layout-details-收据-打印单号条形码",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否打印单号条形码",moduleName:"收据排版",feature:"（未填写）",title:"收据:打印单号条形码",seq:277},{id:"s278-receipt-layout-details-收据-打印价格为0的调味",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否打印价格为0的调味",moduleName:"收据排版",feature:"（未填写）",title:"收据:打印价格为0的调味",seq:278},{id:"s279-receipt-layout-details-收据-打印自动加收提示",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否打印自动加收提示",moduleName:"收据排版",feature:"（未填写）",title:"收据:打印自动加收提示",seq:279},{id:"s280-receipt-layout-details-收据-自动加收提示",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置收据自动加收提示信息默认文案",moduleName:"收据排版",feature:"（未填写）",title:"收据:自动加收提示",seq:280},{id:"s281-receipt-layout-details-收据单和打包单-打印-堂食-信息",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:'设置是否打印"堂食"信息',moduleName:"收据排版",feature:"（未填写）",title:'收据单和打包单:打印"堂食"信息',seq:281},{id:"s282-receipt-layout-details-收据-菜间距",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置菜品之间的间距",moduleName:"收据排版",feature:"（未填写）",title:"收据:菜间距",seq:282},{id:"s283-receipt-layout-details-收据-显示客人备注",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否显示客人备注",moduleName:"收据排版",feature:"（未填写）",title:"收据:显示客人备注",seq:283},{id:"s284-receipt-layout-details-收据-打印厨房名称",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否打印厨房名称",moduleName:"收据排版",feature:"（未填写）",title:"收据:打印厨房名称",seq:284},{id:"s285-receipt-layout-details-收据-显示打折菜的原价",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否显示打折菜的原价",moduleName:"收据排版",feature:"（未填写）",title:"收据:显示打折菜的原价",seq:285},{id:"s286-receipt-layout-details-收据-显示分割线",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否显示分割线",moduleName:"收据排版",feature:"（未填写）",title:"收据:显示分割线",seq:286},{id:"s289-receipt-layout-details-收据单-打印菜品数量",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否打印菜品数量",moduleName:"收据排版",feature:"（未填写）",title:"收据单:打印菜品数量",seq:289},{id:"s290-receipt-layout-details-依据税别设定自动调整折扣-加收打印位置",groupTitle:"收据版式与明细",groupKey:"receipt-layout-details",sceneDesc:"设置是否依据税别设定自动调整折扣/加收打印位置",moduleName:"收据排版",feature:"（未填写）",title:"依据税别设定自动调整折扣/加收打印位置",seq:290},{id:"s291-ticket-number-slip-以下情况打印单号小票",groupTitle:"单号小票",groupKey:"ticket-number-slip",sceneDesc:"设置哪种订单状态打印单号的小票",moduleName:"单号设置",feature:"（未填写）",title:"以下情况打印单号小票",seq:291},{id:"s292-ticket-number-slip-单号小票打印份数",groupTitle:"单号小票",groupKey:"ticket-number-slip",sceneDesc:"设置打印单号小票的份数",moduleName:"单号设置",feature:"（未填写）",title:"单号小票打印份数",seq:292},{id:"s297-kitchen-ticket-packaging-打包单-显示价格",groupTitle:"厨房单与打包单",groupKey:"kitchen-ticket-packaging",sceneDesc:"设置打包单是否显示价格",moduleName:"打包单设置",feature:"（未填写）",title:"打包单:显示价格",seq:297},{id:"s303-kitchen-ticket-packaging-打包单-删除菜品样式",groupTitle:"厨房单与打包单",groupKey:"kitchen-ticket-packaging",sceneDesc:"设置被删除的菜品展示什么样式进行标记",moduleName:"打包单设置",feature:"（未填写）",title:"打包单:删除菜品样式",seq:303},{id:"s455-print-foundation-devices-打印模板",groupTitle:"打印基础与设备",groupKey:"print-foundation-devices",sceneDesc:"打印小票的模板",moduleName:"打印设置",feature:"（未填写）",title:"打印模板",seq:455},{id:"s500-payment-receipt-flow-部分付款自动打印纸质订单收据",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置部分支付的订单是否自动打印纸质订单收据",moduleName:"收据",feature:"（未填写）",title:"部分付款自动打印纸质订单收据",seq:500},{id:"s654-payment-receipt-flow-下单后自动打印纸质订单收据",groupTitle:"支付收据流程",groupKey:"payment-receipt-flow",sceneDesc:"设置下单后是否自动打印纸质订单收据",moduleName:"收据",feature:"（未填写）",title:"下单后自动打印纸质订单收据",seq:654}]},"/product-center-main/settings":{hubTitle:"商品中心",settingsPath:"/product-center-main/settings",groupOrder:["combo-ordering"],items:[{id:"s139-combo-ordering-自动点完套餐",groupTitle:"套餐点单与展示",groupKey:"combo-ordering",sceneDesc:"",moduleName:"自定义单/套餐",feature:"（未填写）",title:"自动点完套餐",seq:139},{id:"s145-combo-ordering-当套餐价钱规则是可调时-显示套餐子菜价格",groupTitle:"套餐点单与展示",groupKey:"combo-ordering",sceneDesc:"设置当套餐价钱规则是可调整时,是否显示套餐子菜价格",moduleName:"价格",feature:"（未填写）",title:"当套餐价钱规则是可调时,显示套餐子菜价格",seq:145}]},"/promotions/settings":{hubTitle:"促销中心",settingsPath:"/promotions/settings",groupOrder:["promo-strategy","promo-channel"],items:[{id:"s150-promo-strategy-子单促销自动重算",groupTitle:"促销活动与规则",groupKey:"promo-strategy",sceneDesc:"设置当一个母单拆分多个子单，子单参与促销活动时是否自动重新计算",moduleName:"价格",feature:"（未填写）",title:"子单促销自动重算",seq:150},{id:"s442-promo-strategy-未填写",groupTitle:"促销活动与规则",groupKey:"promo-strategy",sceneDesc:"促销活动",moduleName:"促销活动",feature:"（未填写）",title:"（未填写）",seq:442},{id:"s541-promo-channel-开启Kiosk本地促销后台",groupTitle:"促销渠道与载体",groupKey:"promo-channel",sceneDesc:"设置是否使用本地促销功能配置还是使用促销中台促销功能配置",moduleName:"平台设置",feature:"（未填写）",title:"开启Kiosk本地促销后台",seq:541},{id:"s549-promo-strategy-未填写",groupTitle:"促销活动与规则",groupKey:"promo-strategy",sceneDesc:"本地促销活动后台",moduleName:"促销",feature:"（未填写）",title:"（未填写）",seq:549},{id:"s647-promo-strategy-抽奖活动",groupTitle:"促销活动与规则",groupKey:"promo-strategy",sceneDesc:"设置是否开启抽奖活动",moduleName:"抽奖活动",feature:"（未填写）",title:"抽奖活动",seq:647}]},"/reports/settings":{hubTitle:"报表中心",settingsPath:"/reports/settings",items:[{id:"s308-report-basics-export-报表标题",groupTitle:"报表基础口径与导出",groupKey:"report-basics-export",sceneDesc:"设置报表的标题展示",moduleName:"基本设置",feature:"（未填写）",title:"报表标题",seq:308},{id:"s311-report-basics-export-每周起始日",groupTitle:"报表基础口径与导出",groupKey:"report-basics-export",sceneDesc:"设置每周的第一天是周几",moduleName:"基本设置",feature:"（未填写）",title:"每周起始日",seq:311},{id:"s312-report-basics-export-云报表",groupTitle:"报表基础口径与导出",groupKey:"report-basics-export",sceneDesc:"是否启用云报表",moduleName:"基本设置",feature:"（未填写）",title:"云报表",seq:312},{id:"s313-summary-report-fields-总报表页脚表格列数",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表页脚表格列数",moduleName:"报表界面",feature:"（未填写）",title:"总报表页脚表格列数",seq:313},{id:"s314-summary-report-fields-总报表页脚表格行数",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表页脚表格行数",moduleName:"报表界面",feature:"（未填写）",title:"总报表页脚表格行数",seq:314},{id:"s315-summary-report-fields-总报表-显示礼品卡-会员卡销售情况",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示礼品卡/会员卡销售情况",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示礼品卡/会员卡销售情况",seq:315},{id:"s316-summary-report-fields-总报表-显示运营详情",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示运营详情",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示运营详情",seq:316},{id:"s317-summary-report-fields-总报表-直到营业结束才把企台现金收入算入店内现金",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否直到营业结束才把企台现金收入算入店内现金",moduleName:"总报表",feature:"（未填写）",title:"总报表:直到营业结束才把企台现金收入算入店内现金",seq:317},{id:"s318-summary-report-fields-总报表-显示礼品卡-会员卡充值情况",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示礼品卡/会员卡充值情况",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示礼品卡/会员卡充值情况",seq:318},{id:"s319-summary-report-fields-总报表-显示现金平账详情",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示现金平账详情",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示现金平账详情",seq:319},{id:"s320-summary-report-fields-总报表-显示钱箱内应有金额",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示钱箱内应有金额",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示钱箱内应有金额",seq:320},{id:"s321-summary-report-fields-总报表-显示删单详情",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示删单详情",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示删单详情",seq:321},{id:"s322-summary-report-fields-总报表-显示打折-加收详情",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示打折/加收详情",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示打折/加收详情",seq:322},{id:"s323-summary-report-fields-总报表-显示菜单组销售信息",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示菜单组销售信息",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示菜单组销售信息",seq:323},{id:"s324-summary-report-fields-总报表-显示区域销售详情",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示区域销售详情",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示区域销售详情",seq:324},{id:"s325-summary-report-fields-总报表-显示特殊折扣-损耗金额",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示特殊折扣/损耗金额",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示特殊折扣/损耗金额",seq:325},{id:"s326-summary-report-fields-总报表-显示单菜成本详情",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示单菜成本详情",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示单菜成本详情",seq:326},{id:"s327-summary-report-fields-总报表-显示绩效指数",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表是否显示绩效指数",moduleName:"总报表",feature:"（未填写）",title:"总报表:显示绩效指数",seq:327},{id:"s328-summary-report-fields-总报表-报表默认的订单类型选择",groupTitle:"总报表字段与核算项",groupKey:"summary-report-fields",sceneDesc:"设置总报表默认的订单类型选择",moduleName:"总报表",feature:"（未填写）",title:"总报表:报表默认的订单类型选择",seq:328},{id:"s424-report-basics-export-打印所有选择日期内的收据",groupTitle:"报表基础口径与导出",groupKey:"report-basics-export",sceneDesc:"打印所有选择日期内的收据",moduleName:"数据管理",feature:"（未填写）",title:"打印所有选择日期内的收据",seq:424},{id:"s435-topic-analysis-reports-销售额报表",groupTitle:"专题分析报表",groupKey:"topic-analysis-reports",sceneDesc:"销售额报表",moduleName:"销售",feature:"（未填写）",title:"销售额报表",seq:435},{id:"s436-topic-analysis-reports-工资报表",groupTitle:"专题分析报表",groupKey:"topic-analysis-reports",sceneDesc:"工资报表",moduleName:"工资",feature:"（未填写）",title:"工资报表",seq:436},{id:"s453-topic-analysis-reports-未填写",groupTitle:"专题分析报表",groupKey:"topic-analysis-reports",sceneDesc:"信用卡支付收取的订单手续费报表",moduleName:"报表",feature:"（未填写）",title:"（未填写）",seq:453}]},"/reviews/settings":{hubTitle:"评价中心",settingsPath:"/reviews/settings",groupOrder:["review-content-moderation"],items:[{id:"s421-review-content-moderation-删除菜品评价",groupTitle:"评价内容治理",groupKey:"review-content-moderation",sceneDesc:"批量删除菜品评价数据（评价/UGC 治理，配置入口在评价中心设置）",moduleName:"其他",feature:"（未填写）",title:"删除菜品评价",seq:421}]},"/settings/basic":{hubTitle:"系统设置",settingsPath:"/settings/basic",items:[{id:"s109-language-localization-系统默认语言",groupTitle:"语言与本地化",groupKey:"language-localization",sceneDesc:"设置终端系统的默认语言，比如默认英文，默认中文",moduleName:"基础设置",feature:"（未填写）",title:"系统默认语言",seq:109},{id:"s165-ui-operation-preferences-默认主界面",groupTitle:"界面与操作偏好",groupKey:"ui-operation-preferences",sceneDesc:"设置POS系统的默认主界面是哪一个页面",moduleName:"基本设置",feature:"默认主界面（POS启动落地页）",title:"默认主界面",seq:165},{id:"s168-ui-operation-preferences-时间显示24小时制",groupTitle:"界面与操作偏好",groupKey:"ui-operation-preferences",sceneDesc:"设置时间显示是否是24小时制",moduleName:"基本设置",feature:"（未填写）",title:"时间显示24小时制",seq:168},{id:"s174-ui-operation-preferences-菜单模式",groupTitle:"界面与操作偏好",groupKey:"ui-operation-preferences",sceneDesc:"设置点单获取的菜单是哪一套菜单（POS菜单还是eMenu菜单）",moduleName:"基本设置",feature:"菜单模式（POS菜单/eMenu菜单）",title:"菜单模式",seq:174},{id:"s182-map-address-services-地址自动填充城市和邮编",groupTitle:"地址与地图服务",groupKey:"map-address-services",sceneDesc:"设置输入地址是否自动填充城市和邮编",moduleName:"地图",feature:"谷歌地图地址自动填充",title:"地址自动填充城市和邮编",seq:182},{id:"s183-map-address-services-谷歌地图地址自动填充",groupTitle:"地址与地图服务",groupKey:"map-address-services",sceneDesc:"设置输入地址是否自动填充城市和邮编",moduleName:"地图",feature:"（未填写）",title:"谷歌地图地址自动填充",seq:183},{id:"s187-advanced-service-switches-MEV模式",groupTitle:"高级服务与运行模式",groupKey:"advanced-service-switches",sceneDesc:"是否启用MEV模式...",moduleName:"高级设置",feature:"（未填写）",title:"MEV模式",seq:187},{id:"s188-advanced-service-switches-打印测试模式",groupTitle:"高级服务与运行模式",groupKey:"advanced-service-switches",sceneDesc:"是否启用打印测试模式，设置打印模式，则下单不会打印任何收据",moduleName:"高级设置",feature:"（未填写）",title:"打印测试模式",seq:188},{id:"s189-advanced-service-switches-前端操作记录模式",groupTitle:"高级服务与运行模式",groupKey:"advanced-service-switches",sceneDesc:"是否启用前端操作记录模式",moduleName:"高级设置",feature:"（未填写）",title:"前端操作记录模式",seq:189},{id:"s190-advanced-service-switches-启用MenusifuAviato服务",groupTitle:"高级服务与运行模式",groupKey:"advanced-service-switches",sceneDesc:"是否启用MenusifuAviato服务",moduleName:"高级设置",feature:"（未填写）",title:"启用MenusifuAviato服务",seq:190},{id:"s191-advanced-service-switches-启用Menusifu公开接口服务",groupTitle:"高级服务与运行模式",groupKey:"advanced-service-switches",sceneDesc:"是否启用Menusifu公开接口服务",moduleName:"高级设置",feature:"（未填写）",title:"启用Menusifu公开接口服务",seq:191},{id:"s192-advanced-service-switches-启用云等位服务",groupTitle:"高级服务与运行模式",groupKey:"advanced-service-switches",sceneDesc:"是否启用云等位服务",moduleName:"高级设置",feature:"（未填写）",title:"启用云等位服务",seq:192},{id:"s344-advanced-service-switches-上传POS心跳的时间间隔-单位-秒",groupTitle:"高级服务与运行模式",groupKey:"advanced-service-switches",sceneDesc:"设置上传POS心跳的时间间隔",moduleName:"高级设置",feature:"（未填写）",title:"上传POS心跳的时间间隔(单位:秒)",seq:344},{id:"s422-data-maintenance-backup-清除交易",groupTitle:"数据维护与备份",groupKey:"data-maintenance-backup",sceneDesc:"设置餐厅数据保存时长",moduleName:"数据管理",feature:"数据管理（数据保存时长）",title:"清除交易",seq:422},{id:"s423-data-maintenance-backup-备份数据",groupTitle:"数据维护与备份",groupKey:"data-maintenance-backup",sceneDesc:"备份餐厅数据",moduleName:"数据管理",feature:"（未填写）",title:"备份数据",seq:423}]},"/settings/integrations":{hubTitle:"平台业务中心",settingsPath:"/settings/integrations",items:[{id:"s78-integrations-同步云员工系统",groupTitle:"外部系统对接",groupKey:"integrations",sceneDesc:"",moduleName:"其他",feature:"（未填写）",title:"同步云员工系统",seq:78},{id:"s79-integrations-云员工管理系统地址",groupTitle:"外部系统对接",groupKey:"integrations",sceneDesc:"",moduleName:"其他",feature:"（未填写）",title:"云员工管理系统地址",seq:79},{id:"s80-integrations-第三方排班表链接",groupTitle:"外部系统对接",groupKey:"integrations",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"第三方排班表链接",seq:80},{id:"s81-integrations-第三方打卡记录链接",groupTitle:"外部系统对接",groupKey:"integrations",sceneDesc:"",moduleName:"高级设置",feature:"（未填写）",title:"第三方打卡记录链接",seq:81},{id:"s343-高级设置-Datahub-订单报告配置",groupTitle:"高级设置",groupKey:"高级设置",sceneDesc:"设置Datahub订单报告配置",moduleName:"高级设置",feature:"（未填写）",title:"Datahub（订单报告配置）",seq:343},{id:"s457-LevelUp-LevelUp对接",groupTitle:"LevelUp",groupKey:"LevelUp",sceneDesc:"第三方会员/储值系统对接",moduleName:"LevelUp",feature:"（未填写）",title:"LevelUp对接",seq:457},{id:"s458-7shifts-7shifts对接",groupTitle:"7shifts",groupKey:"7shifts",sceneDesc:"",moduleName:"7shifts",feature:"（未填写）",title:"7shifts对接",seq:458},{id:"s459-Ingenico-Blu-Ingenico-Bluetooth-对接",groupTitle:"Ingenico-Blu",groupKey:"Ingenico-Blu",sceneDesc:"",moduleName:"Ingenico-Bluetooth",feature:"（未填写）",title:"Ingenico-Bluetooth 对接",seq:459},{id:"s460-WorldPay-WorldPay-对接",groupTitle:"WorldPay",groupKey:"WorldPay",sceneDesc:"",moduleName:"WorldPay",feature:"（未填写）",title:"WorldPay 对接",seq:460}]},"/stores/settings":{hubTitle:"门店管理",settingsPath:"/stores/settings",groupOrder:["store-profile","store-hours-operation","brand-menu-presentation","address-data-maintenance"],items:[{id:"s77-store-hours-operation-营业周期",groupTitle:"营业与运营",groupKey:"store-hours-operation",sceneDesc:"",moduleName:"其他",feature:"（未填写）",title:"营业周期",seq:77},{id:"s170-store-hours-operation-餐厅模式选择",groupTitle:"营业与运营",groupKey:"store-hours-operation",sceneDesc:"设置餐厅是堂吃店还是快餐店",moduleName:"基本设置",feature:"（未填写）",title:"餐厅模式选择",seq:170},{id:"s173-store-profile-国家-州-省份-地区",groupTitle:"门店档案",groupKey:"store-profile",sceneDesc:"设置系统的国家是美国还是加拿大使用",moduleName:"基本设置",feature:"（未填写）",title:"国家-州/省份/地区",seq:173},{id:"s417-store-profile-基本信息",groupTitle:"门店档案",groupKey:"store-profile",sceneDesc:"餐厅的基本信息",moduleName:"餐馆信息",feature:"餐馆信息（基本信息）",title:"基本信息",seq:417},{id:"s418-store-hours-operation-营业时段",groupTitle:"营业与运营",groupKey:"store-hours-operation",sceneDesc:"餐厅的营业时间段设置",moduleName:"营业时段",feature:"（未填写）",title:"营业时段",seq:418},{id:"s419-address-data-maintenance-上传地址数据",groupTitle:"地址数据维护",groupKey:"address-data-maintenance",sceneDesc:"批量上传地址数据（门店运维；若为外送顾客地址库则归属外卖/来取，待产品确认）",moduleName:"其他",feature:"（未填写）",title:"上传地址数据",seq:419},{id:"s420-address-data-maintenance-删除地址数据",groupTitle:"地址数据维护",groupKey:"address-data-maintenance",sceneDesc:"批量删除地址数据（门店运维；若为外送顾客地址库则归属外卖/来取，待产品确认）",moduleName:"其他",feature:"（未填写）",title:"删除地址数据",seq:420},{id:"s530-brand-menu-presentation-品牌设置",groupTitle:"品牌与菜单展示",groupKey:"brand-menu-presentation",sceneDesc:"设置菜单是否按多品牌分类展示（先选品牌再点餐）",moduleName:"展示设置",feature:"（未填写）",title:"品牌设置",seq:530},{id:"s547-brand-menu-presentation-品牌管理",groupTitle:"品牌与菜单展示",groupKey:"brand-menu-presentation",sceneDesc:"配置一个门店有哪些品牌，并为每个品牌绑定营业时间与菜单（原 seq 548 并入）",moduleName:"品牌管理",feature:"（未填写）",title:"品牌管理",seq:547},{id:"s582-store-hours-operation-营业时间即将结束提示",groupTitle:"营业与运营",groupKey:"store-hours-operation",sceneDesc:"设置营业时间结束前多少分钟进行提示",moduleName:"下单设置",feature:"（未填写）",title:"营业时间即将结束提示",seq:582}]},"/team/settings":{hubTitle:"团队管理",settingsPath:"/team/settings",items:[{id:"s66-time-attendance-员工强制休息时长-分钟",groupTitle:"考勤与工时",groupKey:"time-attendance",sceneDesc:"设置员工强制休息的时长",moduleName:"员工工时",feature:"（未填写）",title:"员工强制休息时长(分钟)",seq:66},{id:"s67-time-attendance-员工持续工作时长上限",groupTitle:"考勤与工时",groupKey:"time-attendance",sceneDesc:"设置员工持续工作时长上限",moduleName:"员工工时",feature:"（未填写）",title:"员工持续工作时长上限",seq:67},{id:"s70-time-attendance-下班打卡打印确认小票",groupTitle:"考勤与工时",groupKey:"time-attendance",sceneDesc:"控制打卡打印小票是仅打印工作时间还是打印工作时间和小费",moduleName:"员工工时",feature:"下班打卡打印确认小票内容（工时/小费）",title:"下班打卡打印确认小票",seq:70},{id:"s71-time-attendance-员工最长工作时间-小时",groupTitle:"考勤与工时",groupKey:"time-attendance",sceneDesc:"控制员工最长工作时间(小时)",moduleName:"员工工时",feature:"（未填写）",title:"员工最长工作时间(小时)",seq:71},{id:"s72-time-attendance-重置开工-每日-HH-mm",groupTitle:"考勤与工时",groupKey:"time-attendance",sceneDesc:"",moduleName:"员工工时",feature:"（未填写）",title:"重置开工(每日,HH:mm)",seq:72},{id:"s73-time-attendance-自动收工打卡",groupTitle:"考勤与工时",groupKey:"time-attendance",sceneDesc:"",moduleName:"员工工时",feature:"（未填写）",title:"自动收工打卡",seq:73},{id:"s74-scheduling-是否启用打卡依赖排班",groupTitle:"排班",groupKey:"scheduling",sceneDesc:"",moduleName:"员工工时",feature:"（未填写）",title:"是否启用打卡依赖排班",seq:74},{id:"s186-payroll-tips-分享小费金额计算-按照",groupTitle:"薪酬与小费",groupKey:"payroll-tips",sceneDesc:"设置分享小费金额计算基数（Net Sales / Grand Total / Account Receivable / Only Gratuity）",moduleName:"分享小费",feature:"（未填写）",title:"分享小费金额计算:按照",seq:186},{id:"s306-payroll-tips-分摊小费比例",groupTitle:"薪酬与小费",groupKey:"payroll-tips",sceneDesc:"设置每个员工小费的分配获得比例",moduleName:"基本设置",feature:"（未填写）",title:"分摊小费比例(%)",seq:306},{id:"s309-payroll-tips-小费计算标准",groupTitle:"薪酬与小费",groupKey:"payroll-tips",sceneDesc:"设置员工的小费计算标准按照上班工时进行计算还是其他的计算方式",moduleName:"基本设置",feature:"（未填写）",title:"小费计算标准",seq:309},{id:"s310-payroll-tips-工资计算标准",groupTitle:"薪酬与小费",groupKey:"payroll-tips",sceneDesc:"设置员工的工资计算标准是按照什么规则",moduleName:"基本设置",feature:"（未填写）",title:"工资计算标准",seq:310},{id:"s329-time-attendance-员工报表-带薪休息时长-分钟",groupTitle:"考勤与工时",groupKey:"time-attendance",sceneDesc:"设置员工带薪休息的时长",moduleName:"员工报表",feature:"（未填写）",title:"员工报表:带薪休息时长(分钟)",seq:329}]},"/transactions/settings":{hubTitle:"支付中心",settingsPath:"/transactions/settings",groupOrder:["payment-methods","tax-rules","tip-policy","batch-settlement","card-fees","cds-checkout-ux","guest-self-checkout-ux","paypad-checkout"],items:[{id:"s8-cds-checkout-ux-刷卡签名",groupTitle:"客显·结账交互",groupKey:"cds-checkout-ux",sceneDesc:"控制点单终端/食客端，信用卡刷卡时，是否要展示签名页面让食客信用卡刷卡成功后进行在屏幕上进行电子签名操作",moduleName:"客显屏",feature:"客显屏信用卡刷卡后是否展示电子签名",title:"刷卡签名",seq:8},{id:"s9-cds-checkout-ux-小费和签字流程",groupTitle:"客显·结账交互",groupKey:"cds-checkout-ux",sceneDesc:"控制终端/食客端点单，是先刷信用卡，再进入小费选择页面选择小费，还是先选小费页面，再刷信用卡",moduleName:"客显屏",feature:"客显屏小费与刷卡流程顺序",title:"小费和签字流程",seq:9},{id:"s29-payment-methods-支付方式",groupTitle:"支付方式与网关",groupKey:"payment-methods",sceneDesc:"控制终端/食客端点单，食客可以选择哪种支付方式进行支付",moduleName:"设置",feature:"支付方式（可选支付方式）",title:"支付方式",seq:29},{id:"s142-tax-rules-加收费用要算税",groupTitle:"税务规则",groupKey:"tax-rules",sceneDesc:"设置额外加收的钱，是否要收税",moduleName:"税",feature:"（未填写）",title:"加收费用要算税",seq:142},{id:"s143-tax-rules-根据折扣后价格算税",groupTitle:"税务规则",groupKey:"tax-rules",sceneDesc:"设置税额的计算基数是按照原价进行计算，还是按照折扣后的价格计算税额",moduleName:"税",feature:"（未填写）",title:"根据折扣后价格算税",seq:143},{id:"s144-tax-rules-外送-外卖单免税",groupTitle:"税务规则",groupKey:"tax-rules",sceneDesc:"设置外卖或者外带的订单/商品是否要收税",moduleName:"税",feature:"（未填写）",title:"外送/外卖单免税",seq:144},{id:"s160-tax-rules-税后计算服务费",groupTitle:"税务规则",groupKey:"tax-rules",sceneDesc:"设置服务费计算是否包含税",moduleName:"加收",feature:"（未填写）",title:"税后计算服务费",seq:160},{id:"s229-payment-methods-Payment-Service",groupTitle:"支付方式与网关",groupKey:"payment-methods",sceneDesc:"设置刷卡机的类型、商家名称、商家ID、账户密码等信息",moduleName:"Payment Service Settings",feature:"（未填写）",title:"Payment Service...",seq:229},{id:"s230-batch-settlement-结算天数",groupTitle:"BATCH与日结",groupKey:"batch-settlement",sceneDesc:"设置多少天后进行自动结算付款",moduleName:"基本设置",feature:"（未填写）",title:"结算天数",seq:230},{id:"s231-tip-policy-小费算法",groupTitle:"小费政策与计算",groupKey:"tip-policy",sceneDesc:"设置服务员收取小费是只能输入小费，还是也可以选择预设的小费选项，或者不允许选择小费",moduleName:"基本设置",feature:"（未填写）",title:"小费算法",seq:231},{id:"s232-tip-policy-小费提醒比例",groupTitle:"小费政策与计算",groupKey:"tip-policy",sceneDesc:"设置小费超过订单金额的占比多少时进行异常提示",moduleName:"基本设置",feature:"（未填写）",title:"小费提醒比例",seq:232},{id:"s233-payment-methods-微信-阿里支付",groupTitle:"支付方式与网关",groupKey:"payment-methods",sceneDesc:"设置是否支持微信/阿里进行支付",moduleName:"基本设置",feature:"（未填写）",title:"微信/阿里支付",seq:233},{id:"s234-payment-methods-显示下列支付图标",groupTitle:"支付方式与网关",groupKey:"payment-methods",sceneDesc:"设置支持哪几种支付方式，比如信用卡，现金，礼品卡、会员卡",moduleName:"基本设置",feature:"（未填写）",title:"显示下列支付图标",seq:234},{id:"s235-batch-settlement-批量结算后打印报告",groupTitle:"BATCH与日结",groupKey:"batch-settlement",sceneDesc:"设置进行批量结算后打印哪种报告单，是打印信用卡报告单，还是打印结算单",moduleName:"基本设置",feature:"（未填写）",title:"批量结算后打印报告",seq:235},{id:"s236-batch-settlement-未batch订单数量上限",groupTitle:"BATCH与日结",groupKey:"batch-settlement",sceneDesc:"设置未batch订单数量上限",moduleName:"基本设置",feature:"（未填写）",title:"未batch订单数量上限",seq:236},{id:"s237-tip-policy-建议小费金额百分比例",groupTitle:"小费政策与计算",groupKey:"tip-policy",sceneDesc:"设置预设小费金额百分比例选项",moduleName:"基本设置",feature:"（未填写）",title:"建议小费金额百分比例",seq:237},{id:"s238-batch-settlement-自动结账时间",groupTitle:"BATCH与日结",groupKey:"batch-settlement",sceneDesc:"设置自动结账时间是几点",moduleName:"基本设置",feature:"（未填写）",title:"自动结账时间",seq:238},{id:"s239-batch-settlement-含未付款-现金部分付款订单时允许batch",groupTitle:"BATCH与日结",groupKey:"batch-settlement",sceneDesc:"设置含未付款/现金部分付款订单时是否允许batch",moduleName:"基本设置",feature:"（未填写）",title:"含未付款/现金部分付款订单时允许batch",seq:239},{id:"s240-batch-settlement-Batch前自动处理超时支付单据",groupTitle:"BATCH与日结",groupKey:"batch-settlement",sceneDesc:"设置Batch前是否自动处理超时支付的订单",moduleName:"基本设置",feature:"（未填写）",title:"Batch前自动处理超时支付单据",seq:240},{id:"s241-batch-settlement-BATCH前检查是否有员工没打下班卡",groupTitle:"BATCH与日结",groupKey:"batch-settlement",sceneDesc:"设置BATCH前检查是否检查有员工没打下班卡",moduleName:"基本设置",feature:"（未填写）",title:"BATCH前检查是否有员工没打下班卡",seq:241},{id:"s242-card-fees-信用卡最小支付金额",groupTitle:"卡交易与附加费用",groupKey:"card-fees",sceneDesc:"设置使用信用卡支付订单的最小订单金额",moduleName:"信用卡",feature:"（未填写）",title:"信用卡最小支付金额",seq:242},{id:"s243-card-fees-信用卡签名最小金额",groupTitle:"卡交易与附加费用",groupKey:"card-fees",sceneDesc:"设置信用卡支付后进行电子签名的最小订单金额",moduleName:"信用卡",feature:"（未填写）",title:"信用卡签名最小金额",seq:243},{id:"s244-tip-policy-隐藏现金小费",groupTitle:"小费政策与计算",groupKey:"tip-policy",sceneDesc:"设置是否展示现金小费",moduleName:"信用卡",feature:"（未填写）",title:"隐藏现金小费",seq:244},{id:"s253-tip-policy-多次支付时基于整单金额收小费",groupTitle:"小费政策与计算",groupKey:"tip-policy",sceneDesc:"设置多次进行订单支付时，小费是否是基于整单金额收取小费",moduleName:"付款收据",feature:"（未填写）",title:"多次支付时基于整单金额收小费",seq:253},{id:"s293-tip-policy-税前计算小费金额",groupTitle:"小费政策与计算",groupKey:"tip-policy",sceneDesc:"设置是按照订单的税前计算小费还是税后计算小费",moduleName:"小费设置",feature:"（未填写）",title:"税前计算小费金额",seq:293},{id:"s294-tip-policy-折扣前计算小费金额",groupTitle:"小费政策与计算",groupKey:"tip-policy",sceneDesc:"设置是按照订单的折扣前计算小费还是折扣后计算小费",moduleName:"小费设置",feature:"（未填写）",title:"折扣前计算小费金额",seq:294},{id:"s295-tip-policy-建议小费金额百分比",groupTitle:"小费政策与计算",groupKey:"tip-policy",sceneDesc:"设置食客收据单是小费建议百分比的默认选项值是多少",moduleName:"小费设置",feature:"（未填写）",title:"建议小费金额百分比",seq:295},{id:"s296-tip-policy-已经付过小费时的小费建议",groupTitle:"小费政策与计算",groupKey:"tip-policy",sceneDesc:"设置订单已经支付小费后的小费建议百分比的默认选项值是多少",moduleName:"小费设置",feature:"（未填写）",title:"已经付过小费时的小费建议",seq:296},{id:"s307-card-fees-信用卡交易手续费比例",groupTitle:"卡交易与附加费用",groupKey:"card-fees",sceneDesc:"设置信用卡交易手续费比例(%)",moduleName:"基本设置",feature:"（未填写）",title:"信用卡交易手续费比例(%)",seq:307},{id:"s445-tax-rules-未填写",groupTitle:"税务规则",groupKey:"tax-rules",sceneDesc:"设置税率",moduleName:"税率",feature:"税率（设置基础税率）",title:"（未填写）",seq:445},{id:"s448-payment-methods-自定义支付方式",groupTitle:"支付方式与网关",groupKey:"payment-methods",sceneDesc:"设置自定义支付方式，且是否可以开钱箱等设置",moduleName:"自定义付款类型",feature:"（未填写）",title:"自定义支付方式",seq:448},{id:"s452-card-fees-未填写",groupTitle:"卡交易与附加费用",groupKey:"card-fees",sceneDesc:"设置信用卡支付收取的订单手续费比率",moduleName:"设置比例",feature:"现金折扣设置比例（信用卡手续费）",title:"（未填写）",seq:452},{id:"s454-card-fees-双重定价",groupTitle:"卡交易与附加费用",groupKey:"card-fees",sceneDesc:"设置信用卡支付收取的订单手续费比率",moduleName:"双重定价",feature:"双重定价（信用卡手续费比例）",title:"双重定价",seq:454},{id:"s463-cds-checkout-ux-小费",groupTitle:"客显·结账交互",groupKey:"cds-checkout-ux",sceneDesc:"设置客显屏是否展示小费页面及小费预设值相关选项设置",moduleName:"服务",feature:"小费（客显屏展示小费页及预设值）",title:"小费",seq:463},{id:"s464-cds-checkout-ux-签名",groupTitle:"客显·结账交互",groupKey:"cds-checkout-ux",sceneDesc:"设置客显屏是否展示签名页面",moduleName:"服务",feature:"刷卡签字（客显屏签名页显隐）",title:"签名",seq:464},{id:"s465-cds-checkout-ux-小票",groupTitle:"客显·结账交互",groupKey:"cds-checkout-ux",sceneDesc:"设置客显屏是否支持自主选择打印小票",moduleName:"服务",feature:"小票（客显屏自主选择打印）",title:"小票",seq:465},{id:"s492-guest-self-checkout-ux-显示小费选项",groupTitle:"扫码端·结账交互",groupKey:"guest-self-checkout-ux",sceneDesc:"设置食客端是否展示输入小费页面",moduleName:"小费",feature:"（未填写）",title:"显示小费选项",seq:492},{id:"s493-guest-self-checkout-ux-小费收取方式",groupTitle:"扫码端·结账交互",groupKey:"guest-self-checkout-ux",sceneDesc:"设置食客端小费收取方式（固定金额 / 百分比）",moduleName:"小费",feature:"（未填写）",title:"小费收取方式",seq:493},{id:"s494-guest-self-checkout-ux-展示百分比小费的具体金额",groupTitle:"扫码端·结账交互",groupKey:"guest-self-checkout-ux",sceneDesc:"设置食客端百分比小费选项是否展示具体计算金额",moduleName:"小费",feature:"（未填写）",title:"展示百分比小费的具体金额",seq:494},{id:"s495-guest-self-checkout-ux-选择小费流程",groupTitle:"扫码端·结账交互",groupKey:"guest-self-checkout-ux",sceneDesc:"设置食客端刷卡与小费选择页面的先后顺序",moduleName:"小费",feature:"（未填写）",title:"选择小费流程",seq:495},{id:"s496-guest-self-checkout-ux-展示No-Tip",groupTitle:"扫码端·结账交互",groupKey:"guest-self-checkout-ux",sceneDesc:"设置小费选择页面是否展示No Tip选项",moduleName:"小费",feature:"（未填写）",title:"展示No Tip",seq:496},{id:"s497-guest-self-checkout-ux-展示签名页面",groupTitle:"扫码端·结账交互",groupKey:"guest-self-checkout-ux",sceneDesc:"设置食客端是否展示签名页面",moduleName:"收据",feature:"（未填写）",title:"展示签名页面",seq:497},{id:"s501-guest-self-checkout-ux-发送短信收据方式",groupTitle:"扫码端·结账交互",groupKey:"guest-self-checkout-ux",sceneDesc:"设置订单完成后发送短信订单收据是自动发送还是手动点击发送，还是不发送",moduleName:"收据",feature:"（未填写）",title:"发送短信收据方式",seq:501},{id:"s511-payment-methods-选择支付方式",groupTitle:"支付方式与网关",groupKey:"payment-methods",sceneDesc:"设置支付方式选择页面支持哪些支付方式",moduleName:"支付",feature:"（未填写）",title:"选择支付方式",seq:511},{id:"s512-card-fees-信用卡最低消费要求",groupTitle:"卡交易与附加费用",groupKey:"card-fees",sceneDesc:"设置订单最低消费金额是多少才可以选择信用卡支付",moduleName:"支付",feature:"（未填写）",title:"信用卡最低消费要求",seq:512},{id:"s543-card-fees-整单加收",groupTitle:"卡交易与附加费用",groupKey:"card-fees",sceneDesc:"设置信用卡刷卡是否收取额外的刷卡手续费及手续费的比例是多少",moduleName:"附加费设置",feature:"（未填写）",title:"整单加收",seq:543},{id:"s662-paypad-checkout-展示小费流程",groupTitle:"Paypad·结账交互",groupKey:"paypad-checkout",sceneDesc:"控制终端/食客端点单时，是否要展示选择小费页面",moduleName:"Paypad设置",feature:"点单终端/食客端 — 是否展示选择小费页面",title:"展示小费流程",seq:662},{id:"s663-paypad-checkout-选择小费流程",groupTitle:"Paypad·结账交互",groupKey:"paypad-checkout",sceneDesc:"控制食客端刷卡与小费选择页面的先后顺序",moduleName:"Paypad设置",feature:"（未填写）",title:"选择小费流程",seq:663},{id:"s664-paypad-checkout-展示签名流程",groupTitle:"Paypad·结账交互",groupKey:"paypad-checkout",sceneDesc:"控制信用卡支付后是否展示电子签名页面",moduleName:"Paypad设置",feature:"（未填写）",title:"展示签名流程",seq:664},{id:"s665-paypad-checkout-电子邮箱小票",groupTitle:"Paypad·结账交互",groupKey:"paypad-checkout",sceneDesc:"控制食客端是否支持将订单明细发送到电子邮箱",moduleName:"Paypad设置",feature:"（未填写）",title:"电子邮箱小票",seq:665},{id:"s666-paypad-checkout-展示NO-TIP选项",groupTitle:"Paypad·结账交互",groupKey:"paypad-checkout",sceneDesc:"控制小费选择页是否展示NO-TIP选项",moduleName:"Paypad设置",feature:"（未填写）",title:"展示NO-TIP选项",seq:666},{id:"s667-paypad-checkout-默认小费值",groupTitle:"Paypad·结账交互",groupKey:"paypad-checkout",sceneDesc:"控制食客端小费选择页默认选中的小费百分比或固定金额",moduleName:"Paypad设置",feature:"（未填写）",title:"默认小费值",seq:667}]}};function ia(e){for(const t of Object.keys(Li))if(e===t||e.startsWith(`${t}/`))return t}function ze(e){const t=ia(e);return t?Li[t]:void 0}const Is={8:1180,9:1160,32:1310,33:1590,35:1440,36:1280,37:1290,38:1570,39:1620,40:1400,41:1580,42:1450,43:1550,44:1560,45:1460,46:1470,47:1410,48:1480,49:1490,50:1500,51:1420,52:1330,53:1340,54:1390,55:1510,56:1520,57:1530,58:1540,59:1600,60:1610,61:1430,62:1300,77:1690,91:930,107:390,108:500,110:240,111:510,113:530,114:540,115:1930,116:1940,117:1950,118:290,119:1960,120:550,121:1830,122:1850,123:560,124:1990,125:570,132:1780,133:1790,135:1800,136:1810,137:1820,139:1720,140:1970,141:1980,145:1730,147:2070,149:2050,150:1770,151:1860,152:1870,153:1880,154:1890,155:2080,156:2090,157:2100,158:2110,159:2120,161:2060,162:2010,163:2020,164:2030,169:450,170:1710,173:1660,176:300,177:310,178:1840,193:10,194:20,195:30,196:230,197:40,198:50,199:60,200:70,201:80,202:90,203:100,204:110,205:120,206:130,207:140,208:150,209:160,210:170,211:180,212:190,213:200,214:210,215:220,216:330,217:340,218:350,219:360,220:370,221:1920,248:1910,251:1900,287:1350,288:1360,298:1630,299:1640,300:1650,301:1370,302:1380,304:1320,347:490,348:320,350:380,351:480,417:1670,418:1680,442:1740,443:970,446:2e3,447:2040,461:580,462:590,463:1170,464:1190,465:1200,466:600,483:250,484:260,485:270,486:280,492:1220,493:1230,494:1240,495:1210,496:1250,497:1260,501:1270,502:940,515:630,516:640,517:650,518:660,519:670,520:680,521:1110,522:1120,523:1130,524:690,528:700,532:780,533:400,534:460,544:1140,545:1150,549:1750,567:960,569:1030,570:1040,571:980,572:990,573:1020,574:1e3,575:1010,577:1050,578:1060,579:1070,580:1080,581:950,582:1700,592:440,597:1090,598:1100,599:790,600:870,601:800,602:810,604:820,606:830,607:840,608:850,611:860,612:880,616:900,617:910,618:920,619:410,625:520,642:470,643:420,644:430,645:890,647:1760,652:610,653:620,655:710,656:720,657:730,658:740,659:750,660:760,661:770};function na(e,t){if(e.groupKey!==t.groupKey)return 0;const r=Is[e.seq],s=Is[t.seq],i=r!==void 0,n=s!==void 0;return i&&n&&r!==s?r-s:i!==n?i?-1:1:e.seq-t.seq}function Ht(e,t){const r=[],s=new Map;for(const n of e)s.has(n.groupKey)||(s.set(n.groupKey,[]),r.push(n.groupKey)),s.get(n.groupKey).push(n);return(t&&t.length>0?[...t.filter(n=>s.has(n)),...r.filter(n=>!t.includes(n))]:r).map(n=>{var a;const o=s.get(n).slice().sort(na);return{groupKey:n,groupTitle:((a=o[0])==null?void 0:a.groupTitle)??n,items:o}})}const oa=[{seq:537,kind:"checkbox-group",checkboxes:[{fieldId:"537-queue-count",label:"展示排队数量",defaultChecked:!0},{fieldId:"537-wait-time",label:"展示等待时间",defaultChecked:!0}]},{seq:538,kind:"radio-group",radioFieldId:"538-font-size-mode",radioDefault:"system",radios:[{value:"system",label:"系统默认大小"},{value:"multiplier",labelBefore:"系统默认大小的",numberFieldId:"538-font-size-multiplier",numberDefault:1,labelAfter:"倍",numberMin:.1,numberMax:10}]},{seq:539,kind:"radio-color",radioFieldId:"539-font-bg-mode",radioDefault:"system",customColorValue:"custom",colorFieldId:"539-font-bg-color",colorDefault:"#9ca3af",radios:[{value:"system",label:"系统默认背景色"},{value:"custom",label:"自定义背景色"}]},{seq:540,kind:"radio-color",radioFieldId:"540-font-color-mode",radioDefault:"system",customColorValue:"custom",colorFieldId:"540-font-color",colorDefault:"#ffffff",radios:[{value:"system",label:"系统默认颜色"},{value:"custom",label:"自定义颜色"}]}],aa=[{seq:517,kind:"radio-group",radioFieldId:"517-menu-nav-position",radioDefault:"top",radios:[{value:"side",label:"侧边展示"},{value:"top",label:"顶部展示"}]}],la=[{seq:217,kind:"radio-group",radioFieldId:"217-category-layout",radioDefault:"horizontal2",radios:[{value:"horizontal2",label:"Horizontal2"},{value:"horizontal3",label:"Horizontal 3"},{value:"vertical1",label:"Vertical 1"}]},{seq:218,kind:"radio-group",radioFieldId:"218-item-layout",radioDefault:"regular-buttons",radios:[{value:"regular-buttons",label:"Regular Buttons"},{value:"large-buttons",label:"Large Buttons"}]}],da=[{seq:70,kind:"radio-group",radioFieldId:"70-clockout-slip-mode",radioDefault:"none",radios:[{value:"work-hours-only",label:"Print work hours only"},{value:"work-hours-and-tips",label:"Print work hours&Tips"},{value:"none",label:"None"}]}],ua=[{seq:186,kind:"radio-group",radioFieldId:"186-tip-base-mode",radioDefault:"net-sales",radios:[{value:"net-sales",label:"Net Sales"},{value:"grand-total",label:"Grand Total"},{value:"account-receivable",label:"Account Receivable"},{value:"only-gratuity",label:"Only Gratuity"}]},{seq:309,kind:"radio-group",radioFieldId:"309-tip-calculation-standard",radioDefault:"default",radios:[{value:"default",label:"DEFAULT"},{value:"working-hours",label:"WORKING HOURS"}]},{seq:310,kind:"radio-group",radioFieldId:"310-wage-calculation-standard",radioDefault:"default",radios:[{value:"default",label:"Default"},{value:"california-rule",label:"California Rule"},{value:"40-hours-per-week",label:"40 Hours Per Week Rule"},{value:"44-hours-per-week",label:"44 Hours Per Week Rule"},{value:"46-hours-per-week",label:"46 Hours Per Week Rule"},{value:"48-hours-per-week",label:"48 Hours Per Week Rule"}]}],ca=[...oa,...aa,...la,...da,...ua],Bi=new Map(ca.map(e=>[e.seq,e]));function pa(e){return Bi.get(e)}function ma(e){return Bi.has(e)}function ce(e){return`bplant-module-setting-field:${e}`}function He(e,t){try{const r=localStorage.getItem(ce(e));return r===null?t:r==="1"}catch{return t}}function Hi(e,t){try{localStorage.setItem(ce(e),t?"1":"0")}catch{}}function oe(e,t){try{const r=localStorage.getItem(ce(e));return r===null||r===""?t:r}catch{return t}}function Ft(e,t){try{localStorage.setItem(ce(e),t)}catch{}}function ga(e,t){try{const r=localStorage.getItem(ce(e));return r===null||r===""?t:r}catch{return t}}function Ks(e,t){try{localStorage.setItem(ce(e),t)}catch{}}function et(e,t){try{const r=localStorage.getItem(ce(e));if(r===null||r==="")return t;const s=Number(r);return Number.isFinite(s)?s:t}catch{return t}}function Fi(e,t){try{localStorage.setItem(ce(e),String(t))}catch{}}function Be(e,t=""){try{const r=localStorage.getItem(ce(e));return r===null?t:r}catch{return t}}function fa(e,t){try{localStorage.setItem(ce(e),t)}catch{}}function qe(e,t){try{const r=localStorage.getItem(ce(e));return r===null||r===""?t:JSON.parse(r)}catch{return t}}function Fe(e,t){try{localStorage.setItem(ce(e),JSON.stringify(t))}catch{}}const ba={parentSeq:535,fields:[{kind:"inline",fieldKey:"auto-close-minutes",parts:[{type:"text",value:"当前下单预计等待时间大于"},{type:"number",fieldId:"535-auto-close-minutes",defaultValue:30,min:0,widthClass:"w-16"},{type:"text",value:"分钟后，自动关闭提示"}]},{kind:"inline",fieldKey:"menu-popup-minutes",parts:[{type:"text",value:"当前下单预计等待时间大于"},{type:"number",fieldId:"535-menu-popup-minutes",defaultValue:10,min:0,widthClass:"w-16"},{type:"text",value:"分钟后，菜单页自动展示弹框提示"}]}]},ha={parentSeq:536,fields:[{kind:"inline",fieldKey:"cups-or-minutes",parts:[{type:"text",value:"当杯数大于"},{type:"number",fieldId:"536-cups-threshold",defaultValue:10,min:0,widthClass:"w-16"},{type:"text",value:"杯，或者当预计等待时长大于"},{type:"number",fieldId:"536-minutes-threshold",defaultValue:10,min:0,widthClass:"w-16"},{type:"text",value:"分钟"}]},{kind:"inline",fieldKey:"range-start-offset",parts:[{type:"text",value:"区间开始：在原固定时长上减"},{type:"number",fieldId:"536-range-start-minus",defaultValue:2,min:0,widthClass:"w-16"},{type:"text",value:"分钟"}]},{kind:"inline",fieldKey:"range-end-offset",parts:[{type:"text",value:"区间结束：在原固定时长上加"},{type:"number",fieldId:"536-range-end-plus",defaultValue:2,min:0,widthClass:"w-16"},{type:"text",value:"分钟"}]}]},va={parentSeq:196,fields:[{kind:"text-input",fieldKey:"divider-name",textFieldId:"196-custom-divider-name",label:"分割线名称",placeholder:"请输入 POS 点单页自定义分割线名称",maxLength:40}]},ya={parentSeq:522,fields:[{kind:"dish-tags",fieldKey:"remark-dishes",label:"请选择展示备注的菜品",storageFieldId:"522-remark-dishes"}]},xa={parentSeq:544,fields:[{kind:"radio",fieldKey:"utensils-fee",radioFieldId:"544-utensils-fee-mode",radioDefault:"free",options:[{value:"free",label:"免费"},{value:"1.5",label:"$1.5"},{value:"other",label:"其他金额"}]}]},Sa={parentSeq:545,fields:[{kind:"radio",fieldKey:"packaging-fee",radioFieldId:"545-packaging-fee-mode",radioDefault:"free",options:[{value:"free",label:"免费"},{value:"1.5",label:"$1.5"},{value:"other",label:"其他金额"}]}]},Ta={parentSeq:569,fields:[{kind:"copy-form",fieldKey:"order-notice",titleFieldId:"569-title",contentFieldId:"569-content",titleMaxLength:20,contentMaxLength:200}]},wa={parentSeq:570,fields:[{kind:"copy-form",fieldKey:"hotpot-tip",titleFieldId:"570-title",contentFieldId:"570-content",titleMaxLength:20,contentMaxLength:200}]},ka={parentSeq:597,fields:[{kind:"dish-mutex-rules",fieldKey:"mutex",storageFieldId:"597-mutex-rules"}]},$a={parentSeq:598,fields:[{kind:"dish-combo-rules",fieldKey:"combo",storageFieldId:"598-combo-rules"}]},Ea={parentSeq:607,fields:[{kind:"radio",fieldKey:"image-mode",radioFieldId:"607-image-mode",radioDefault:"small",options:[{value:"original",label:"原始模式"},{value:"small",label:"小图模式"},{value:"large",label:"大图模式"}]},{kind:"conditional-dish-tags",fieldKey:"small-dishes",label:"请选择大图菜",storageFieldId:"607-small-dishes",whenRadioFieldId:"607-image-mode",whenRadioValue:"small",whenRadioDefault:"small"},{kind:"conditional-dish-tags",fieldKey:"large-dishes",label:"请选择小图菜",storageFieldId:"607-large-dishes",whenRadioFieldId:"607-image-mode",whenRadioValue:"large",whenRadioDefault:"small"}]},Na={parentSeq:608,fields:[{kind:"hint",fieldKey:"detail-hint",text:"只针对仅有图片、名称、价格、描述的菜生效"},{kind:"dish-tags",fieldKey:"no-attr-dishes",label:"请选择无属性的菜",storageFieldId:"608-no-attr-dishes"}]},Da={parentSeq:645,fields:[{kind:"hint",fieldKey:"font-hint",text:"打开后，你可以设置菜品名称字体大小"},{kind:"inline",fieldKey:"font-size",parts:[{type:"number",fieldId:"645-dish-name-font-px",defaultValue:16,min:8,max:72,widthClass:"w-16"},{type:"text",value:"px"}]}]},Gi=new Map([[535,ba],[536,ha],[196,va],[522,ya],[544,xa],[545,Sa],[569,Ta],[570,wa],[597,ka],[598,$a],[607,Ea],[608,Na],[645,Da]]);function qa(e){return Gi.get(e)}function ji(e){return Gi.has(e)}const Gt="size-4 shrink-0 accent-primary text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";function le(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function jt(e){const r=(e.layout??"vertical")==="vertical"?"flex flex-col gap-2":"flex flex-wrap items-center gap-x-4 gap-y-2",s=e.options.map(n=>{const o=e.currentValue===n.value;return`
        <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
          <input
            type="radio"
            name="${le(e.groupName)}"
            value="${le(n.value)}"
            class="${Gt}"
            ${o?"checked":""}
            data-module-setting-radio="${le(e.fieldId)}"
          />
          <span>${le(n.label)}</span>
        </label>`}).join(""),i=e.ariaLabel?` aria-label="${le(e.ariaLabel)}"`:"";return`<div class="${r}" role="radiogroup"${i}>${s}</div>`}function Pa(e){const t="flex flex-wrap items-center gap-x-3 gap-y-2",r=e.options.map(s=>{const i=e.currentValue===s.value;return`
        <label class="inline-flex cursor-pointer items-center gap-1.5 text-sm text-foreground">
          <input
            type="radio"
            name="${le(e.groupName)}"
            value="${le(s.value)}"
            class="${Gt}"
            ${i?"checked":""}
            ${e.radioDataAttr}="${le(s.value)}"
          />
          <span>${le(s.label)}</span>
        </label>`}).join("");return`<div class="${t}" role="radiogroup">${r}</div>`}function Ui(e){const r=(e.layout??"wrap")==="grid"?"grid grid-cols-2 gap-2 sm:grid-cols-3":"flex flex-wrap gap-x-4 gap-y-2",s=e.options.map(i=>{var l;const n=e.selectedValues.has(i.value),o=((l=e.getItemAttrs)==null?void 0:l.call(e,i.value,i.label))??{},a=Object.entries(o).map(([p,h])=>` ${p}="${le(h)}"`).join("");return`
        <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            class="${Gt} rounded-sm"
            value="${le(i.value)}"
            ${n?"checked":""}
            ${e.checkboxDataAttr}="1"${a}
          />
          <span>${le(i.label)}</span>
        </label>`}).join("");return`<div class="${r}" role="group">${s}</div>`}const Ma=[{id:"d-beef-premium",name:"极品肥牛133333"},{id:"d-pork-belly",name:"五花肉"},{id:"d-combo-1",name:"牛羊组合"},{id:"d-combo-2",name:"牛羊组合-1"}],Wr="597-mutex-rules",Vr="598-combo-rules";function de(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ge(){return`r-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Ia(){return[{id:Ge(),trigger:[{id:"d-beef-premium",name:"极品肥牛133333"}],excluded:[{id:"d-pork-belly",name:"五花肉"},{id:"d-combo-1",name:"牛羊组合"},{id:"d-combo-2",name:"牛羊组合-1"}]}]}function Ka(){return[{id:Ge(),trigger:[{id:"d-pork-belly",name:"五花肉"}],requiredQty:1,required:[{id:"d-combo-1",name:"牛羊组合"}]}]}function Wi(e=Wr){const t=qe(e,[]);return!Array.isArray(t)||t.length===0?Ia():t.map(r=>({id:r.id||Ge(),trigger:Array.isArray(r.trigger)?r.trigger:[],excluded:Array.isArray(r.excluded)?r.excluded:[]}))}function Vi(e,t=Wr){Fe(t,e)}function zi(e=Vr){const t=qe(e,[]);return!Array.isArray(t)||t.length===0?Ka():t.map(r=>({id:r.id||Ge(),trigger:Array.isArray(r.trigger)?r.trigger:[],requiredQty:Number.isFinite(Number(r.requiredQty))?Math.max(1,Number(r.requiredQty)):1,required:Array.isArray(r.required)?r.required:[]}))}function Qi(e,t=Vr){Fe(t,e)}function Yi(e){return`
    <span
      data-dish-tag
      data-dish-id="${de(e.id)}"
      data-dish-name="${de(e.name)}"
      class="inline-flex max-w-full items-center gap-1 rounded-md border border-border bg-muted/80 px-2 py-0.5 text-xs text-foreground"
    >
      <span class="truncate">${de(e.name)}</span>
      <button
        type="button"
        class="shrink-0 rounded p-0.5 text-muted-foreground hover:bg-background hover:text-foreground"
        data-dish-tag-remove
        aria-label="移除 ${de(e.name)}"
      >×</button>
    </span>`}function Oa(e){const t=qe(e,[]);return Array.isArray(t)?t.filter(r=>(r==null?void 0:r.id)&&(r==null?void 0:r.name)):[]}function _a(e,t){Fe(e,t)}function mt(e,t,r,s){const i=new Set(s.map(a=>a.id)),n=s.length>0?`<div class="flex flex-wrap gap-1.5" data-dish-tags>${s.map(Yi).join("")}</div>`:"",o=Ui({options:Ma.map(a=>({value:a.id,label:a.name})),selectedValues:i,checkboxDataAttr:"data-dish-choice",getItemAttrs:(a,l)=>({"data-dish-id":a,"data-dish-name":l}),layout:"wrap"});return`
    <div
      class="module-setting-dish-picker min-w-0 flex-1 space-y-2 rounded-md border border-input bg-background px-2 py-2"
      data-dish-picker
      data-picker-role="${de(r)}"
      data-parent-seq="${e}"
      data-rule-id="${de(t)}"
    >
      ${n}
      ${o}
    </div>`}function Xi(e,t,r){return`
    <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3" data-mutex-rule-row data-rule-id="${de(e.id)}">
      <div class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center">
        ${mt(t,e.id,"trigger",e.trigger)}
        <span class="shrink-0 text-center text-sm text-muted-foreground sm:px-1">互斥</span>
        ${mt(t,e.id,"excluded",e.excluded)}
      </div>
      ${r?'<button type="button" class="shrink-0 self-end text-sm font-medium text-primary hover:underline sm:self-center" data-mutex-add-rule>增加</button>':""}
    </div>`}function Zi(e,t,r){const s=e.requiredQty;return`
    <div class="space-y-3 rounded-md border border-border/60 bg-background/60 p-3" data-combo-rule-row data-rule-id="${de(e.id)}">
      <div class="space-y-1.5">
        <span class="text-sm font-medium text-foreground">下单菜品</span>
        ${mt(t,e.id,"trigger",e.trigger)}
      </div>
      <div class="flex flex-wrap items-center gap-2 text-sm text-foreground">
        <span>订单中必须再包含任意菜品</span>
        <input
          type="number"
          inputmode="numeric"
          min="1"
          class="w-14 h-8 rounded-md border border-input bg-background px-2 text-center text-sm tabular-nums shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          value="${s}"
          data-combo-qty
          aria-label="份数"
        />
        <span>份</span>
      </div>
      <div class="min-w-0">
        ${mt(t,e.id,"required",e.required)}
      </div>
      ${r?'<div class="flex justify-end"><button type="button" class="text-sm font-medium text-primary hover:underline" data-combo-add-rule>增加</button></div>':""}
    </div>`}function Aa(e,t){const r=Wi(t),s=r.map((i,n)=>Xi(i,e,n===r.length-1)).join("");return`
    <div class="space-y-3" data-mutex-rules-editor data-storage-id="${de(t)}" data-parent-seq="${e}">
      ${s}
    </div>`}function Ra(e,t){const r=zi(t),s=r.map((i,n)=>Zi(i,e,n===r.length-1)).join("");return`
    <div class="space-y-3" data-combo-rules-editor data-storage-id="${de(t)}" data-parent-seq="${e}">
      ${s}
    </div>`}function Ji(e){return[...e.querySelectorAll("[data-dish-choice]:checked")].map(t=>({id:t.getAttribute("data-dish-id")??t.value,name:t.getAttribute("data-dish-name")??""}))}function Ca(e){const t=Ji(e);let r=e.querySelector("[data-dish-tags]");if(t.length===0){r==null||r.remove();return}r||(e.insertAdjacentHTML("afterbegin",'<div class="flex flex-wrap gap-1.5" data-dish-tags></div>'),r=e.querySelector("[data-dish-tags]")),r&&(r.innerHTML=t.map(Yi).join(""))}function gt(e){const t=e;return t.querySelector("[data-dish-choice]")?Ji(t):[...e.querySelectorAll("[data-dish-tag]")].map(r=>({id:r.getAttribute("data-dish-id")??"",name:r.getAttribute("data-dish-name")??""}))}function Mt(e){if(Ca(e),e.closest("[data-standalone-dish-picker]")){Fa(e);return}const r=e.closest("[data-mutex-rules-editor]");if(r){La(r);return}const s=e.closest("[data-combo-rules-editor]");s&&ar(s)}function or(e,t){var i;const r=e.querySelector(`[data-dish-choice][data-dish-id="${t}"]`);r&&(r.checked=!1),(i=e.querySelector(`[data-dish-tag][data-dish-id="${t}"]`))==null||i.remove();const s=e.querySelector("[data-dish-tags]");s&&!s.querySelector("[data-dish-tag]")&&s.remove(),Mt(e)}function La(e){const t=e.getAttribute("data-storage-id");if(!t)return;const r=[];e.querySelectorAll("[data-mutex-rule-row]").forEach(s=>{const i=s.getAttribute("data-rule-id")??Ge(),n=s.querySelector('[data-dish-picker][data-picker-role="trigger"]'),o=s.querySelector('[data-dish-picker][data-picker-role="excluded"]');!n||!o||r.push({id:i,trigger:gt(n),excluded:gt(o)})}),Vi(r,t)}function ar(e){const t=e.getAttribute("data-storage-id");if(!t)return;const r=[];e.querySelectorAll("[data-combo-rule-row]").forEach(s=>{const i=s.getAttribute("data-rule-id")??Ge(),n=s.querySelector('[data-dish-picker][data-picker-role="trigger"]'),o=s.querySelector('[data-dish-picker][data-picker-role="required"]'),a=s.querySelector("[data-combo-qty]");if(!n||!o)return;const l=Number((a==null?void 0:a.value)??1);r.push({id:i,trigger:gt(n),requiredQty:Number.isFinite(l)&&l>=1?l:1,required:gt(o)})}),Qi(r,t)}function Ba(e){const t=Number(e.getAttribute("data-parent-seq")??0),r=e.getAttribute("data-storage-id")??Wr,s=Wi(r);s.push({id:Ge(),trigger:[],excluded:[]}),Vi(s,r),e.innerHTML=s.map((i,n)=>Xi(i,t,n===s.length-1)).join("")}function Ha(e){const t=Number(e.getAttribute("data-parent-seq")??0),r=e.getAttribute("data-storage-id")??Vr,s=zi(r);s.push({id:Ge(),trigger:[],requiredQty:1,required:[]}),Qi(s,r),e.innerHTML=s.map((i,n)=>Zi(i,t,n===s.length-1)).join("")}function en(e,t,r){const s=Oa(r);return`
    <div data-standalone-dish-picker data-storage-id="${de(r)}" data-field-key="${de(t)}">
      ${mt(e,t,"tags",s)}
    </div>`}function Fa(e){const t=e.closest("[data-standalone-dish-picker]"),r=t==null?void 0:t.getAttribute("data-storage-id");r&&_a(r,gt(e))}function Ga(){document.querySelectorAll("[data-standalone-dish-picker]").forEach(e=>{e.dataset.standaloneDishPickerBound!=="1"&&(e.dataset.standaloneDishPickerBound="1",e.addEventListener("click",t=>{const r=t.target.closest("[data-dish-tag-remove]");if(!r)return;const s=r.closest("[data-dish-tag]"),i=s==null?void 0:s.closest("[data-dish-picker]"),n=s==null?void 0:s.getAttribute("data-dish-id");i&&n&&or(i,n)}),e.addEventListener("change",t=>{const r=t.target.closest("[data-dish-choice]");if(!r)return;const s=r.closest("[data-dish-picker]");s&&Mt(s)}))})}function ja(){Ga(),document.querySelectorAll("[data-mutex-rules-editor]").forEach(e=>{e.dataset.dishRulesBound!=="1"&&(e.dataset.dishRulesBound="1",e.addEventListener("click",t=>{const r=t.target;if(r.closest("[data-mutex-add-rule]")){Ba(e);return}const s=r.closest("[data-dish-tag-remove]");if(s){const i=s.closest("[data-dish-tag]"),n=i==null?void 0:i.closest("[data-dish-picker]"),o=i==null?void 0:i.getAttribute("data-dish-id");n&&o&&or(n,o)}}),e.addEventListener("change",t=>{const r=t.target.closest("[data-dish-choice]");if(!r)return;const s=r.closest("[data-dish-picker]");s&&Mt(s)}))}),document.querySelectorAll("[data-combo-rules-editor]").forEach(e=>{e.dataset.dishRulesBound!=="1"&&(e.dataset.dishRulesBound="1",e.addEventListener("click",t=>{const r=t.target;if(r.closest("[data-combo-add-rule]")){Ha(e);return}const s=r.closest("[data-dish-tag-remove]");if(s){const i=s.closest("[data-dish-tag]"),n=i==null?void 0:i.closest("[data-dish-picker]"),o=i==null?void 0:i.getAttribute("data-dish-id");n&&o&&or(n,o)}}),e.addEventListener("change",t=>{const r=t.target.closest("[data-dish-choice]");if(r){const i=r.closest("[data-dish-picker]");i&&Mt(i);return}t.target.closest("[data-combo-qty]")&&ar(e)}),e.addEventListener("input",t=>{t.target.closest("[data-combo-qty]")&&ar(e)}))})}const zr=[{code:"en",label:"英语"},{code:"zh-Hans",label:"中文简体"},{code:"zh-Hant",label:"中文繁体"},{code:"fr",label:"法语"},{code:"ja",label:"日语"},{code:"ru",label:"俄语"},{code:"es",label:"西班牙语"},{code:"vi",label:"越南语"},{code:"th",label:"泰语"},{code:"ko",label:"韩语"}],Ua=new Set(["en","zh-Hans"]),tn="en",Wa=652,Va=653,Ut="653-default-locale";function za(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Qr(e){return`652-lang-${e}`}function Qa(e){return e===Wa}function Ya(e){return e===Va}function Xa(e){return Ua.has(e)}function Za(){return zr.filter(e=>He(Qr(e.code),Xa(e.code))).map(e=>e.code)}function Ja(){return oe(Ut,tn)}function el(e){Ft(Ut,e)}function tl(e){const t=Ja();if(e.includes(t))return t;const r=e[0]??tn;return el(r),r}function rn(){const e=Za();if(e.length===0)return'<p class="m-0 text-sm text-muted-foreground">请至少选择一种语言</p>';const t=tl(e),r="module-setting-locale-default";return e.map(s=>{const i=zr.find(o=>o.code===s);return i?`
      <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
        <input
          type="radio"
          name="${r}"
          value="${s}"
          class="size-4 shrink-0 rounded-full border-input text-primary accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          ${t===s?"checked":""}
          data-locale-default-radio
          data-module-setting-radio="${Ut}"
        />
        <span>${za(i.label)}</span>
      </label>`:""}).join("")}function rl(){document.querySelectorAll("[data-locale-default-radios]").forEach(e=>{e.innerHTML=rn()})}function sl(){document.documentElement.dataset.guestFacingLocaleBound!=="1"&&(document.documentElement.dataset.guestFacingLocaleBound="1",document.addEventListener("change",e=>{const t=e.target,r=t.closest("[data-locale-select-checkbox]");if(r){const i=r.getAttribute("data-locale-code");if(!i)return;if([...document.querySelectorAll("[data-locale-select-checkbox]")].filter(o=>o.checked).length===0){r.checked=!0;return}Hi(Qr(i),r.checked),rl();return}const s=t.closest("[data-locale-default-radio]");s!=null&&s.checked&&Ft(Ut,s.value)}))}const il=[{id:"mg-hot",name:"热菜"},{id:"mg-cold",name:"冷菜"},{id:"mg-staple",name:"主食"},{id:"mg-soup",name:"汤品"},{id:"mg-drink",name:"饮品"},{id:"mg-dessert",name:"甜品"}],nl=new Set([560,599]);function at(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ol(e){return nl.has(e)}function al(e){return`${e}-menu-groups`}function ll(e){const t=qe(e,[]);return Array.isArray(t)?t.filter(r=>(r==null?void 0:r.id)&&(r==null?void 0:r.name)):[]}function dl(e,t){Fe(e,t)}function sn(e){return`
    <span
      data-menu-group-tag
      data-group-id="${at(e.id)}"
      data-group-name="${at(e.name)}"
      class="inline-flex max-w-full items-center gap-1 rounded-md border border-border bg-muted/80 px-2 py-0.5 text-xs text-foreground"
    >
      <span class="truncate">${at(e.name)}</span>
      <button
        type="button"
        class="shrink-0 rounded p-0.5 text-muted-foreground hover:bg-background hover:text-foreground"
        data-menu-group-tag-remove
        aria-label="移除 ${at(e.name)}"
      >×</button>
    </span>`}function nn(e){return[...e.querySelectorAll("[data-menu-group-choice]:checked")].map(t=>({id:t.getAttribute("data-group-id")??t.value,name:t.getAttribute("data-group-name")??""}))}function ul(e){const t=nn(e);let r=e.querySelector("[data-menu-group-tags]");if(t.length===0){r==null||r.remove();return}r||(e.insertAdjacentHTML("afterbegin",'<div class="flex flex-wrap gap-1.5" data-menu-group-tags></div>'),r=e.querySelector("[data-menu-group-tags]")),r&&(r.innerHTML=t.map(sn).join(""))}function cl(e,t){const r=new Set(t.map(n=>n.id)),s=t.length>0?`<div class="flex flex-wrap gap-1.5" data-menu-group-tags>${t.map(sn).join("")}</div>`:"",i=Ui({options:il.map(n=>({value:n.id,label:n.name})),selectedValues:r,checkboxDataAttr:"data-menu-group-choice",getItemAttrs:(n,o)=>({"data-group-id":n,"data-group-name":o}),layout:"wrap"});return`
    <div
      class="module-setting-menu-group-picker w-full min-w-0 space-y-2 rounded-md border border-input bg-background px-3 py-2.5"
      data-menu-group-picker
      data-setting-seq="${e}"
    >
      ${s}
      ${i}
    </div>`}function pl(e,t){const r=ll(t);return`
    <div
      class="w-full min-w-0"
      data-standalone-menu-group-picker
      data-storage-id="${at(t)}"
      data-setting-seq="${e}"
    >
      ${cl(e,r)}
    </div>`}function Os(e){const t=e.closest("[data-standalone-menu-group-picker]"),r=t==null?void 0:t.getAttribute("data-storage-id");r&&dl(r,nn(e))}function ml(){document.querySelectorAll("[data-standalone-menu-group-picker]").forEach(e=>{e.dataset.menuGroupPickerBound!=="1"&&(e.dataset.menuGroupPickerBound="1",e.addEventListener("click",t=>{const r=t.target.closest("[data-menu-group-tag-remove]");if(!r)return;const s=r.closest("[data-menu-group-tag]"),i=s==null?void 0:s.closest("[data-menu-group-picker]"),n=s==null?void 0:s.getAttribute("data-group-id");if(n&&i&&s){const o=i.querySelector(`[data-menu-group-choice][data-group-id="${n}"]`);o&&(o.checked=!1),s.remove();const a=i.querySelector("[data-menu-group-tags]");a&&!a.querySelector("[data-menu-group-tag]")&&a.remove(),Os(i)}}),e.addEventListener("change",t=>{const r=t.target.closest("[data-menu-group-choice]");if(!r)return;const s=r.closest("[data-menu-group-picker]");s&&(ul(s),Os(s))}))})}const Yr=[{seq:483,storageFieldId:"483-pos-toolbar",title:"整单操作",hint:"订单底部操作，最多展示6个",buttons:[{id:"split",label:"分单"},{id:"delete-order",label:"删单"},{id:"save",label:"保存"},{id:"exit",label:"退出"},{id:"pay",label:"付款"},{id:"send-kitchen",label:"送厨"},{id:"direct-send",label:"直送"},{id:"pay-only",label:"仅付款"}],defaultEnabled:{split:!0,"delete-order":!0,save:!0,exit:!0,pay:!0,"send-kitchen":!0,"direct-send":!1,"pay-only":!1}},{seq:484,storageFieldId:"484-pos-toolbar",title:"菜品详情",hint:"选中任意菜品时展示",buttons:[{id:"divider",label:"分割线"},{id:"plus-one",label:"加1"},{id:"qty",label:"数量"},{id:"minus-one",label:"减1"},{id:"note",label:"备注"},{id:"tax",label:"税"},{id:"seasoning",label:"调味"},{id:"change-price",label:"改价"}],defaultEnabled:{divider:!0,"plus-one":!1,qty:!0,"minus-one":!1,note:!0,tax:!0,seasoning:!0,"change-price":!0}},{seq:485,storageFieldId:"485-pos-toolbar",title:"订单信息",hint:"选中订单信息顶部时展示",buttons:[{id:"sort",label:"排序"},{id:"guest-info",label:"客人信息"},{id:"type",label:"类型"},{id:"change-table",label:"换桌"},{id:"server",label:"企台"},{id:"guest",label:"客人"},{id:"order-note",label:"整单备注"},{id:"member",label:"会员"},{id:"print",label:"打单"}],defaultEnabled:{sort:!0,"guest-info":!0,type:!0,"change-table":!0,server:!0,guest:!0,"order-note":!0,member:!0,print:!1}},{seq:486,storageFieldId:"486-pos-toolbar",title:"订单金额",hint:"选中订单金额区域时展示",buttons:[{id:"surcharge",label:"加收"},{id:"discount",label:"折扣"},{id:"tip",label:"小费"},{id:"order-tax",label:"整单税"}],defaultEnabled:{surcharge:!0,discount:!0,tip:!0,"order-tax":!0}}],lr=new Map(Yr.map(e=>[e.seq,e])),Xr=new Map;for(const e of Yr)for(const t of e.buttons)Xr.set(t.id,t.label);const gl=new Set(["save","exit","sort"]),fl=new Set([483,485,486]),bl={483:[485,486],485:[486,483],486:[485,483]},hl=483,vl=new Set([484,485,486]);let ne=null,_e=null,be=null;const dr=[],yl=10050,Ae={passive:!0,capture:!0};function Re(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Zr(e){return fl.has(e)}function Jr(e){return!gl.has(e)}function xl(e){return e.buttons.map(t=>({id:t.id,label:t.label,enabled:e.defaultEnabled[t.id]??!0}))}function Sl(e,t){return!Array.isArray(t)||t.length===0?xl(e):t.filter(r=>r==null?void 0:r.id).map(r=>({id:r.id,label:Xr.get(r.id)??r.label??r.id,enabled:!!r.enabled}))}function ur(e,t){const r=qe(e,[]);return Sl(t,r)}function cr(e,t){Fe(e,t)}function Tl(){return'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>'}function wl(e){return(bl[e]??[]).map(r=>{const s=lr.get(r);return s?`
        <button
          type="button"
          class="w-full rounded-md border border-border bg-muted px-3 py-2 text-center text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          data-pos-toolbar-move-confirm
          data-move-to-seq="${r}"
        >${Re(s.title)}</button>`:""}).join("")}function kl(e,t){const s=Zr(t)&&Jr(e.id)?`
      <div class="relative shrink-0" data-pos-toolbar-move-anchor>
        <button
          type="button"
          class="inline-flex size-7 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground"
          data-pos-toolbar-move-trigger
          aria-label="移动 ${Re(e.label)}"
          aria-haspopup="true"
          aria-expanded="false"
        >${Tl()}</button>
      </div>`:'<span class="inline-block size-7 shrink-0" aria-hidden="true"></span>';return`
    <li
      class="grid grid-cols-[auto_1fr_auto_auto] items-center gap-2 border-b border-border/60 bg-background px-2 py-2 last:border-b-0"
      data-pos-toolbar-item
      data-button-id="${Re(e.id)}"
      draggable="true"
    >
      <button
        type="button"
        class="inline-flex size-7 shrink-0 cursor-grab items-center justify-center rounded text-muted-foreground hover:bg-muted active:cursor-grabbing"
        data-pos-toolbar-drag-handle
        aria-label="拖动排序"
        tabindex="-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/>
          <circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/>
          <circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/>
        </svg>
      </button>
      <span class="min-w-0 truncate text-sm text-foreground">${Re(e.label)}</span>
      <label class="inline-flex shrink-0 cursor-pointer items-center justify-center">
        <span class="sr-only">启用 ${Re(e.label)}</span>
        <input
          type="checkbox"
          class="size-4 shrink-0 rounded-full border-input text-primary accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          data-pos-toolbar-enable
          ${e.enabled?"checked":""}
        />
      </label>
      ${s}
    </li>`}function $l(e){const r=ur(e.storageFieldId,e).map(n=>kl(n,e.seq)).join(""),i=Zr(e.seq)?`
      <div class="grid grid-cols-[1fr_auto_auto] items-center gap-x-2 border-b border-border/80 bg-muted/30 px-2 py-1.5 text-xs font-medium text-muted-foreground">
        <span class="pl-9">功能</span>
        <span class="text-center">启用</span>
        <span class="w-7 text-center">移动</span>
      </div>`:`
      <div class="grid grid-cols-[1fr_auto] items-center gap-x-2 border-b border-border/80 bg-muted/30 px-2 py-1.5 text-xs font-medium text-muted-foreground">
        <span class="pl-9">功能</span>
        <span class="pr-1">启用</span>
      </div>`;return`
    <div
      class="flex min-w-0 flex-col overflow-visible rounded-lg border border-border bg-card"
      data-pos-toolbar-group
      data-storage-id="${Re(e.storageFieldId)}"
      data-group-seq="${e.seq}"
    >
      <div class="border-b border-border px-3 py-2.5">
        <h4 class="m-0 text-sm font-semibold text-foreground">${Re(e.title)}</h4>
        <p class="m-0 mt-0.5 text-xs text-muted-foreground">${Re(e.hint)}</p>
      </div>
      ${i}
      <ul class="m-0 list-none overflow-visible p-0" data-pos-toolbar-list role="list">${r}</ul>
    </div>`}function on(){return Yr.map($l).join("")}function El(){return`
    <li class="list-none">
      <div class="border-b border-border px-4 py-3">
        <p class="m-0 text-sm font-medium text-foreground">点单页工具栏配置</p>
        <p class="m-0 mt-1 text-xs text-muted-foreground">拖动排序、勾选启用；整单操作/订单信息/订单金额支持通过「移动」调整按钮归属组</p>
        <div class="relative mt-4 overflow-visible" data-pos-toolbar-grid>
          <div class="grid grid-cols-1 gap-4 overflow-visible xl:grid-cols-2 2xl:grid-cols-4">${on()}</div>
        </div>
      </div>
    </li>`}function Nl(e){return e===hl}function Dl(e){return vl.has(e)}function ql(e){return[...e.querySelectorAll("[data-pos-toolbar-item]")].map(t=>{var i;const r=t.getAttribute("data-button-id")??"",s=((i=t.querySelector("[data-pos-toolbar-enable]"))==null?void 0:i.checked)??!1;return{id:r,label:Xr.get(r)??r,enabled:s}})}function _s(e){const t=e.getAttribute("data-storage-id");t&&cr(t,ql(e))}function Pl(e,t,r,s){if(t===r.getAttribute("data-button-id"))return;const i=[...e.querySelectorAll("[data-pos-toolbar-item]")].find(a=>a.getAttribute("data-button-id")===t);if(!i)return;const n=r.getBoundingClientRect();s>n.top+n.height/2?r.after(i):r.before(i)}function an(){if(be){for(const e of dr)e===window?(window.removeEventListener("scroll",be,Ae),window.removeEventListener("wheel",be,Ae)):(e.removeEventListener("scroll",be,Ae),e.removeEventListener("wheel",be,Ae));dr.length=0,be=null}}function Ml(){const e=[window,document.documentElement,document.body];return document.querySelectorAll(".module-settings-scroll-host, .tertiary-inline-subnav-scroll, main, [data-pos-toolbar-grid]").forEach(t=>{e.includes(t)||e.push(t)}),e}function Il(){if(an(),!!ne){be=()=>Ve();for(const e of Ml())dr.push(e),e===window?(window.addEventListener("scroll",be,Ae),window.addEventListener("wheel",be,Ae)):(e.addEventListener("scroll",be,Ae),e.addEventListener("wheel",be,Ae))}}function Ve(){an(),_e==null||_e.setAttribute("aria-expanded","false"),_e=null,ne==null||ne.remove(),ne=null}function Kl(e){return!!(e.closest("[data-pos-toolbar-move-menu]")||e.closest("[data-pos-toolbar-move-trigger]"))}function Ol(e,t){const r=t.getBoundingClientRect(),s=4,i=e.offsetWidth,n=e.offsetHeight;let o=r.right-i,a=r.bottom+s;const l=8;o<l&&(o=l),o+i>window.innerWidth-l&&(o=window.innerWidth-i-l),a+n>window.innerHeight-l&&(a=r.top-n-s),a<l&&(a=l),e.style.left=`${Math.round(o)}px`,e.style.top=`${Math.round(a)}px`}function _l(e,t,r){Ve();const s=document.createElement("div");s.className="pos-toolbar-move-menu fixed min-w-[10.5rem] rounded-lg border border-border bg-card p-3 text-card-foreground shadow-md",s.style.zIndex=String(yl),s.style.opacity="1",s.style.backgroundColor="var(--color-card)",s.style.isolation="isolate",s.setAttribute("data-pos-toolbar-move-menu",""),s.setAttribute("data-move-from-seq",String(t)),s.setAttribute("data-move-button-id",r),s.innerHTML=`
    <p class="m-0 mb-2 text-center text-xs text-muted-foreground">将此按钮移动到</p>
    <div class="flex flex-col gap-2">${wl(t)}</div>`,s.style.left="-9999px",s.style.top="0",document.body.appendChild(s),ne=s,_e=e,e.setAttribute("aria-expanded","true"),requestAnimationFrame(()=>{!ne||!_e||(Ol(ne,_e),Il())})}function Al(){const e=document.querySelector("[data-pos-toolbar-grid] > div");e&&(Ve(),e.innerHTML=on(),document.querySelectorAll("[data-pos-toolbar-group]").forEach(t=>{delete t.dataset.posToolbarBound}),ln())}function Rl(e,t,r){if(e===t||!Jr(r))return;const s=lr.get(e),i=lr.get(t);if(!s||!i)return;const n=ur(s.storageFieldId,s),o=n.findIndex(p=>p.id===r);if(o<0)return;const[a]=n.splice(o,1),l=ur(i.storageFieldId,i);l.some(p=>p.id===r)||l.push(a),cr(s.storageFieldId,n),cr(i.storageFieldId,l),Al()}let As=!1;function ln(){As||(As=!0,document.addEventListener("pointerdown",e=>{if(!ne)return;const t=e.target;Kl(t)||Ve()},!0),document.addEventListener("click",e=>{const t=e.target,r=t.closest("[data-pos-toolbar-move-confirm]");if(r&&ne){e.preventDefault(),e.stopPropagation();const i=Number(ne.getAttribute("data-move-from-seq")),n=ne.getAttribute("data-move-button-id")??"",o=Number(r.getAttribute("data-move-to-seq"));Ve(),Rl(i,o,n);return}const s=t.closest("[data-pos-toolbar-move-trigger]");if(s){if(e.preventDefault(),e.stopPropagation(),ne&&_e===s){Ve();return}const i=s.closest("[data-pos-toolbar-group]"),n=s.closest("[data-pos-toolbar-item]"),o=Number((i==null?void 0:i.getAttribute("data-group-seq"))??0),a=(n==null?void 0:n.getAttribute("data-button-id"))??"";Zr(o)&&Jr(a)&&_l(s,o,a)}}),document.addEventListener("keydown",e=>{e.key==="Escape"&&Ve()})),document.querySelectorAll("[data-pos-toolbar-group]").forEach(e=>{if(e.dataset.posToolbarBound==="1")return;e.dataset.posToolbarBound="1";const t=e.querySelector("[data-pos-toolbar-list]");if(!t)return;let r="";e.addEventListener("change",s=>{s.target.closest("[data-pos-toolbar-enable]")&&_s(e)}),t.addEventListener("dragstart",s=>{var n;const i=s.target.closest("[data-pos-toolbar-item]");i&&(r=i.getAttribute("data-button-id")??"",(n=s.dataTransfer)==null||n.setData("text/plain",r),s.dataTransfer&&(s.dataTransfer.effectAllowed="move"),i.classList.add("opacity-50"))}),t.addEventListener("dragend",s=>{const i=s.target.closest("[data-pos-toolbar-item]");i==null||i.classList.remove("opacity-50"),r=""}),t.addEventListener("dragover",s=>{s.preventDefault(),s.dataTransfer&&(s.dataTransfer.dropEffect="move")}),t.addEventListener("drop",s=>{var o;s.preventDefault();const i=s.target.closest("[data-pos-toolbar-item]"),n=r||((o=s.dataTransfer)==null?void 0:o.getData("text/plain"))||"";!n||!i||(Pl(t,n,i,s.clientY),_s(e))})})}const Cl=43,Ll=44,Rs="43-print-margin-size",dn="44-print-margin-range",un=[{value:"default",label:"Default"},{value:"top-bottom",label:"Top & Bottom"},{value:"top-only",label:"Top margin only"},{value:"bottom-only",label:"Bottom margin only"}],Bl="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";function Cs(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Hl(e){return e===Cl}function Fl(e){return e===Ll}function Gl(){const e=oe(dn,"top-bottom");return un.some(t=>t.value===e)?e:"top-bottom"}function jl(e){const t=et(Rs,0),r=jt({options:un,fieldId:dn,groupName:"module-setting-radio-44-print-margin-range",currentValue:Gl(),layout:"vertical",ariaLabel:"打印边距范围"});return`
    <div class="mt-3 space-y-3" data-kitchen-ticket-margin-controls>
      <input
        type="number"
        inputmode="decimal"
        step="1"
        min="0"
        class="${Bl} tabular-nums"
        value="${Cs(String(t))}"
        data-module-setting-field="${Cs(Rs)}"
        data-default-value="0"
        aria-label="打印边距"
      />
      <div class="space-y-2">
        <span class="block text-sm font-medium text-foreground">打印边距范围</span>
        ${r}
      </div>
    </div>`}const Ul=[{code:"dine-in",label:"Dine In"},{code:"to-go",label:"To Go"},{code:"pick-up",label:"Pick Up"},{code:"delivery",label:"Delivery"}],Wl=new Set([36]),Vl="size-4 shrink-0 accent-primary text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";function Yt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function zl(e){return Wl.has(e)}function Ql(e,t){return`${e}-order-type-${t}`}function Yl(e){const t=Ul.map((r,s)=>{const i=Ql(e,r.code),n=He(i,!1);return`
      <label
        class="flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 px-3 py-3 text-sm text-foreground sm:px-4 ${s>0?"border-l border-border":""}"
      >
        <input
          type="checkbox"
          class="${Vl} rounded-sm"
          ${n?"checked":""}
          data-module-setting-checkbox="${Yt(i)}"
          aria-label="${Yt(r.label)}"
        />
        <span class="text-center leading-tight">${Yt(r.label)}</span>
      </label>`}).join("");return`
    <div
      class="flex w-full max-w-xl overflow-hidden rounded-md border border-border bg-muted/40"
      data-kitchen-order-type-multiselect="${e}"
      role="group"
      aria-label="订单类型多选"
    >
      ${t}
    </div>`}const cn=52,pn=[{key:"items",label:"合并相同菜",kitchenSeq:52,packingSeq:301,receiptSeq:288},{key:"modifiers",label:"合并相同子菜",kitchenSeq:53,packingSeq:302,receiptSeq:287}],Xl=pn.flatMap(e=>[e.kitchenSeq,e.packingSeq,e.receiptSeq]),Zl=new Set(Xl.filter(e=>e!==cn)),Jl=[{key:"kitchen",label:"厨房单"},{key:"packing",label:"打包单"},{key:"receipt",label:"食客收据"}];function Xt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ed(e){return e===cn}function td(e){return Zl.has(e)}function rd(e){const t=Jl.map(s=>`<th scope="col" class="px-3 py-2 text-center text-xs font-medium text-muted-foreground">${Xt(s.label)}</th>`).join(""),r=pn.map(s=>{const n=[s.kitchenSeq,s.packingSeq,s.receiptSeq].map(o=>{const a=e(o),l=`${s.label} · seq ${o}`,p=a?"bg-primary border-primary":"bg-muted border-border",h=a?"translate-x-5":"translate-x-0.5";return`
        <td class="border-t border-border px-3 py-2.5 text-center align-middle">
          <button
            type="button"
            role="switch"
            aria-checked="${a?"true":"false"}"
            aria-label="${Xt(l)}"
            data-module-setting-toggle="${o}"
            class="module-setting-toggle relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${p}"
          >
            <span class="pointer-events-none block size-5 rounded-full bg-background shadow transition-transform duration-200 ${h}" aria-hidden="true"></span>
          </button>
        </td>`}).join("");return`
      <tr>
        <th scope="row" class="border-t border-border px-3 py-2.5 text-left text-sm font-medium text-foreground">${Xt(s.label)}</th>
        ${n}
      </tr>`}).join("");return`
    <div class="mt-3 overflow-x-auto rounded-md border border-border" data-line-merge-matrix>
      <table class="w-full min-w-[20rem] border-collapse text-sm">
        <thead>
          <tr class="bg-muted/40">
            <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-muted-foreground">规则</th>
            ${t}
          </tr>
        </thead>
        <tbody>${r}</tbody>
      </table>
    </div>`}const sd=[...Array.from({length:3},(e,t)=>193+t),...Array.from({length:19},(e,t)=>197+t)],id=[169,347,351,534,642],nd=[32,37,62,304],od=[54,40,47,51,61],ad=[52,53,287,288,301,302],ld=[35,42,45,46,48,49,50,55,56,57,58],dd=[38,41,33,59,60],ud=[298,299,300],cd=[115,116,117,119,124,140,141],pd=[155,157,158,159],md=[248,221],gd=[162,163,164],fd=[149,161],bd=[77,582],hd=bd,mn=new Set([...md,...cd,...pd,...gd,...fd,...nd,...od,...ad,...ld,...dd,...ud,...hd,461,462,466,521,522,523,535,536,544,545,569,570,573,577,578,579,580,597,598,616,617,618,73,74,118,176,177,216,219,220,348,350,515,516,518,519,520,524,528,530,532,600,601,602,604,606,607,608,611,612,645,...id,...sd]);function vd(e){return mn.has(e)}function ft(e){return`bplant-module-setting-toggle:${e}`}function Ls(e){return mn.has(e)}const es=133,ts=134,gn="order-same-dish-display-mode",yd={split:"拆分显示",merge:"合并显示"};function Bs(e){try{const t=localStorage.getItem(ft(e));return t===null?null:t==="1"}catch{return null}}function xd(){const e=oe(gn,"");if(e==="split"||e==="merge")return e;const t=Bs(es),r=Bs(ts);return r===!0&&t!==!0?"merge":t===!0&&r!==!0?"split":"merge"}function Sd(e){Ft(gn,e);try{localStorage.setItem(ft(es),e==="split"?"1":"0"),localStorage.setItem(ft(ts),e==="merge"?"1":"0")}catch{}}function Td(e){return e===es}function wd(e){return e===ts}function Tt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function kd(e,t){const r=xd(),s="module-setting-radio-order-same-dish-display",i=["split","merge"].map(o=>{const a=r===o;return`
        <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
          <input
            type="radio"
            name="${Tt(s)}"
            value="${o}"
            class="${Tt(e)}"
            ${a?"checked":""}
            data-order-same-dish-display-radio="1"
          />
          <span>${Tt(yd[o])}</span>
        </label>`}).join(""),n=(t==null?void 0:t.trim())||"设置相同的菜在点单页分开展示，还是合并为一行展示。";return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0 flex-1 space-y-1">
              <p class="text-sm font-medium text-card-foreground">相同菜品展示</p>
              <p class="text-xs leading-relaxed text-muted-foreground">${Tt(n)}</p>
            </div>
            <div class="flex flex-wrap items-center gap-4 sm:pt-0.5">${i}</div>
          </div>
        </li>`}function $d(e=document){e.querySelectorAll("[data-order-same-dish-display-radio]").forEach(t=>{t.dataset.orderSameDishDisplayBound!=="1"&&(t.dataset.orderSameDishDisplayBound="1",t.addEventListener("change",()=>{if(!t.checked)return;const r=t.value;r!=="split"&&r!=="merge"||Sd(r)}))})}const rs=446,ss=447,yt=new Set([rs,ss]),Ed={[rs]:"446-discount-presets",[ss]:"447-surcharge-presets"},fn={[rs]:{addLabel:"新增折扣",nameHeader:"折扣名称",namePlaceholder:"请输入折扣名称"},[ss]:{addLabel:"新增加收",nameHeader:"加收名称",namePlaceholder:"请输入加收名称"}},Hs="h-8 w-full min-w-0 rounded-md border border-input bg-background px-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";function he(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function is(){return`preset-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function ns(e){return Ed[e]??`${e}-rate-presets`}function os(e){const t=e.kind==="fixed"?"fixed":"percent",r=Number(e.value),s=Number.isFinite(r)?Math.max(0,r):0,i=t==="percent"?Math.min(100,s):s;return{id:typeof e.id=="string"&&e.id?e.id:is(),name:typeof e.name=="string"?e.name:"",kind:t,value:i}}function Wt(e){const t=ns(e),r=qe(t,[]);return Array.isArray(r)?r.map(s=>os(s)):[]}function as(e,t){Fe(ns(e),t.map(r=>os(r)))}function Nd(e){return yt.has(e)}function bn(e){return e==="fixed"?"元":"%"}function Dd(e){const t=`rate-preset-kind-${he(e.id)}`;return[{value:"percent",label:"百分比"},{value:"fixed",label:"固定金额"}].map(s=>{const i=e.kind===s.value;return`
        <label class="inline-flex cursor-pointer items-center gap-1.5 text-sm text-foreground">
          <input
            type="radio"
            name="${t}"
            value="${s.value}"
            class="${Gt}"
            ${i?"checked":""}
            data-rate-preset-kind
            aria-label="${he(s.label)}"
          />
          <span>${he(s.label)}</span>
        </label>`}).join("")}function qd(e,t){const r=bn(e.kind),s=e.kind==="percent"?' max="100"':"";return`
    <tr class="border-t border-border" data-rate-preset-row data-preset-id="${he(e.id)}">
      <td class="px-3 py-2.5">
        <input
          type="text"
          class="${Hs}"
          value="${he(e.name)}"
          placeholder="${he(t)}"
          data-rate-preset-name
        />
      </td>
      <td class="px-3 py-2.5">
        <div class="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3" role="radiogroup" aria-label="比例类型">
          ${Dd(e)}
        </div>
      </td>
      <td class="px-3 py-2.5">
        <div class="flex items-center gap-1.5">
          <input
            type="number"
            inputmode="decimal"
            class="${Hs} max-w-[8rem] tabular-nums"
            value="${he(String(e.value))}"
            min="0"
            step="0.01"${s}
            data-rate-preset-value
            aria-label="比例数值"
          />
          <span class="shrink-0 text-sm text-muted-foreground" data-rate-preset-suffix>${he(r)}</span>
        </div>
      </td>
      <td class="px-3 py-2.5 text-right whitespace-nowrap">
        <button
          type="button"
          class="text-sm font-medium text-destructive hover:underline"
          data-rate-preset-remove
        >删除</button>
      </td>
    </tr>`}function hn(e,t){const r=fn[e];if(!r||t.length===0)return"";const s=t.map(i=>qd(i,r.namePlaceholder)).join("");return`
    <div class="overflow-x-auto rounded-md border border-border">
      <table class="w-full min-w-[28rem] border-collapse text-left text-sm">
        <thead class="bg-muted/40 text-xs text-muted-foreground">
          <tr>
            <th class="px-3 py-2 font-medium">${he(r.nameHeader)}</th>
            <th class="px-3 py-2 font-medium w-[8.5rem]">比例类型</th>
            <th class="px-3 py-2 font-medium w-[10rem]">比例</th>
            <th class="px-3 py-2 text-right font-medium w-[4.5rem]">操作</th>
          </tr>
        </thead>
        <tbody data-rate-preset-list>${s}</tbody>
      </table>
    </div>`}function Pd(e,t){const r=t.length>0,s=r?hn(e,t):"";return`
    <div
      data-rate-preset-table-wrap
      class="${r?"":"hidden"}"
      ${r?"":'aria-hidden="true"'}
    >${s}</div>`}function Md(e){const t=fn[e];if(!t)return"";const r=Wt(e);return`
    <div
      class="space-y-3"
      data-rate-preset-editor
      data-preset-seq="${e}"
      data-storage-id="${he(ns(e))}"
    >
      ${Pd(e,r)}
      <div class="flex justify-start">
        <button
          type="button"
          class="inline-flex h-8 items-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground shadow-sm hover:bg-muted"
          data-rate-preset-add
        >${he(t.addLabel)}</button>
      </div>
    </div>`}function vn(e){const t=e.querySelector("[data-rate-preset-kind]:checked");return(t==null?void 0:t.value)==="fixed"?"fixed":"percent"}function $t(e){const t=vn(e),r=e.querySelector("[data-rate-preset-suffix]");r&&(r.textContent=bn(t));const s=e.querySelector("[data-rate-preset-value]");if(s)if(t==="percent"){s.setAttribute("max","100");const i=Number(s.value);Number.isFinite(i)&&i>100&&(s.value="100")}else s.removeAttribute("max")}function Id(e){const t=[];return e.querySelectorAll("[data-rate-preset-row]").forEach(r=>{var a,l;const s=r.getAttribute("data-preset-id")??is(),i=((a=r.querySelector("[data-rate-preset-name]"))==null?void 0:a.value.trim())??"",n=vn(r),o=Number((l=r.querySelector("[data-rate-preset-value]"))==null?void 0:l.value);t.push(os({id:s,name:i,kind:n,value:Number.isFinite(o)?o:0}))}),t}function Zt(e){const t=Number(e.getAttribute("data-preset-seq"));yt.has(t)&&as(t,Id(e))}function yn(e){const t=Number(e.getAttribute("data-preset-seq"));if(!yt.has(t))return;const r=Wt(t),s=e.querySelector("[data-rate-preset-table-wrap]");if(s){if(r.length===0){s.innerHTML="",s.classList.add("hidden"),s.setAttribute("aria-hidden","true");return}s.innerHTML=hn(t,r),s.classList.remove("hidden"),s.removeAttribute("aria-hidden"),s.querySelectorAll("[data-rate-preset-row]").forEach($t)}}function Kd(e){var n;const t=Number(e.getAttribute("data-preset-seq"));if(!yt.has(t))return;const r=Wt(t);r.push({id:is(),name:"",kind:"percent",value:10}),as(t,r),yn(e);const s=e.querySelectorAll("[data-rate-preset-row]"),i=s[s.length-1];(n=i==null?void 0:i.querySelector("[data-rate-preset-name]"))==null||n.focus()}function Od(e,t){const r=Number(e.getAttribute("data-preset-seq"));if(!yt.has(r))return;const s=t.getAttribute("data-preset-id"),i=Wt(r).filter(n=>n.id!==s);as(r,i),yn(e)}function _d(e=document){e.querySelectorAll("[data-rate-preset-editor]").forEach(t=>{t.dataset.ratePresetEditorBound!=="1"&&(t.dataset.ratePresetEditorBound="1",t.querySelectorAll("[data-rate-preset-row]").forEach($t),t.addEventListener("click",r=>{const s=r.target;if(s.closest("[data-rate-preset-add]")){Kd(t);return}const i=s.closest("[data-rate-preset-remove]");if(i){const n=i.closest("[data-rate-preset-row]");n&&Od(t,n)}}),t.addEventListener("input",r=>{const s=r.target;(s.matches("[data-rate-preset-name]")||s.matches("[data-rate-preset-value]"))&&Zt(t)}),t.addEventListener("change",r=>{const s=r.target;if(s.matches("[data-rate-preset-kind]")){const i=s.closest("[data-rate-preset-row]");i&&$t(i),Zt(t);return}if(s.matches("[data-rate-preset-name]")||s.matches("[data-rate-preset-value]")){const i=s.closest("[data-rate-preset-row]");i&&$t(i),Zt(t)}}))})}const Ad=163,Fs="163-discount-reason-default",Rd="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";function Gs(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function xn(e){return e===Ad}function Cd(e,t){const r=Be(Fs,"");return`
    <div
      class="mt-3 rounded-lg bg-muted/50 p-3 ${t?"":"hidden"}"
      data-order-discount-reason-panel="${e}"
      ${t?"":'aria-hidden="true"'}
    >
      <label class="mb-1.5 block text-xs text-muted-foreground" for="order-discount-reason-default-${e}">
        默认折扣原因
      </label>
      <input
        id="order-discount-reason-default-${e}"
        type="text"
        class="${Rd}"
        value="${Gs(r)}"
        placeholder="请输入默认折扣原因"
        data-module-setting-text="${Gs(Fs)}"
        autocomplete="off"
      />
    </div>`}function Ld(e,t){document.querySelectorAll(`[data-order-discount-reason-panel="${e}"]`).forEach(r=>{r.classList.toggle("hidden",!t),t?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")})}const Sn=127,Bd=128,ls=129,Hd=130,ds=131,Tn="130-classification-order-numbers",pr="10,20,30,40,50,60,70,80,90,110,120,130,140,150",us="129-order-number-mode",Fd="131-order-number-reset-mode",wn=[{value:"default",label:"DEFAULT"},{value:"timestamp",label:"TIMESTAMP"},{value:"classification",label:"CLASSIFICATION"}],Gd=[{value:"default",label:"DEFAULT"},{value:"daily",label:"Daily"},{value:"never",label:"Never"}],kn={[Sn]:{fieldId:"127-order-number-max",defaultValue:999,min:1,max:99999},[Bd]:{fieldId:"128-order-number-start",defaultValue:1,min:1,max:99999}},jd="h-8 w-28 rounded-md border border-input bg-background px-2 text-center text-sm tabular-nums text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",Ud="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";function We(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Wd(e){return kn[e]!==void 0}function Vd(e){const t=kn[e];if(!t)return"";const r=et(t.fieldId,t.defaultValue),s=Math.min(t.max,Math.max(t.min,Math.round(r)));return`
    <input
      type="number"
      inputmode="numeric"
      class="${jd}"
      value="${We(String(s))}"
      min="${t.min}"
      max="${t.max}"
      step="1"
      data-module-setting-number="${We(t.fieldId)}"
      aria-label="${e===Sn?"最大单号":"起始单号"}"
    />`}const $n={[ls]:{fieldId:us,groupName:"module-setting-radio-129-order-number-mode",options:wn,defaultValue:"default",ariaLabel:"单号模式"},[ds]:{fieldId:Fd,groupName:"module-setting-radio-131-order-number-reset",options:Gd,defaultValue:"default",ariaLabel:"单号重置"}};function En(e,t){return t.some(r=>r.value===e)}function js(e){return En(e,wn)}function zd(e){const t=e.trim();if(js(t))return t;const r=t.toLowerCase();return js(r)?r:"default"}function Qd(){return zd(oe(us,"default"))}function Yd(e){return e===ls}function Xd(e){return e===ds}function Zd(e){const t=oe(e.fieldId,e.defaultValue);return En(t,e.options)?t:e.defaultValue}function Nn(e){return jt({options:e.options,fieldId:e.fieldId,groupName:e.groupName,currentValue:Zd(e),layout:"vertical",ariaLabel:e.ariaLabel})}function Jd(){return Nn($n[ls])}function eu(){return Nn($n[ds])}function tu(){return Be(Tn,pr).trim()||pr}function ru(e){return e===Hd}function Dn(){return Qd()==="classification"}function Us(e=document){const t=Dn();e.querySelectorAll("[data-classification-mode-hint]").forEach(r=>{r.classList.toggle("hidden",t)})}function su(e,t){const r=Dn(),s=tu();return`
    <li class="list-none" data-order-classification-setting>
      <div class="border-b border-border px-4 py-3">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0 flex-1 space-y-1">
            <p class="text-sm font-medium text-card-foreground">${We(e)}</p>
            ${t?`<p class="text-xs leading-relaxed text-muted-foreground">${We(t)}</p>`:""}
          </div>
          <button
            type="button"
            class="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-muted-foreground hover:bg-muted"
            data-classification-collapse-toggle
            aria-expanded="true"
            aria-label="展开或收起分类单号输入"
            title="收起"
          >
            <svg class="size-4 transition-transform" data-classification-chevron viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="mt-3" data-classification-input-panel>
          <input
            type="text"
            class="${Ud}"
            value="${We(s)}"
            placeholder="${We(pr)}"
            data-module-setting-text="${We(Tn)}"
            aria-label="分类单号列表"
            autocomplete="off"
            spellcheck="false"
          />
          <p class="mt-1.5 text-xs text-muted-foreground">多个分类单号请用英文逗号分隔，例如 10,20,30</p>
          <p
            class="mt-1 text-xs text-muted-foreground ${r?"hidden":""}"
            data-classification-mode-hint
          >生效需将上方「单号模式」设为 CLASSIFICATION</p>
        </div>
      </div>
    </li>`}function iu(e,t){var i;e.classList.toggle("hidden",t);const r=(i=e.closest("[data-order-classification-setting]"))==null?void 0:i.querySelector("[data-classification-collapse-toggle]"),s=r==null?void 0:r.querySelector("[data-classification-chevron]");r&&(r.setAttribute("aria-expanded",t?"false":"true"),r.title=t?"展开":"收起"),s&&s.classList.toggle("rotate-180",t)}function nu(e=document){Us(e),e.querySelectorAll(`[data-module-setting-radio="${us}"]`).forEach(t=>{t.dataset.orderNumberModeSyncBound!=="1"&&(t.dataset.orderNumberModeSyncBound="1",t.addEventListener("change",()=>{t.checked&&Us(e)}))})}function ou(e=document){e.querySelectorAll("[data-classification-collapse-toggle]").forEach(t=>{t.dataset.classificationCollapseBound!=="1"&&(t.dataset.classificationCollapseBound="1",t.addEventListener("click",()=>{const r=t.closest("[data-order-classification-setting]"),s=r==null?void 0:r.querySelector("[data-classification-input-panel]");if(!s)return;const i=s.classList.contains("hidden");iu(s,!i)}))})}const au=126,qn="126-default-new-order-type",lu="module-setting-radio-126-default-order-type",cs=[{value:"dine-in",label:"Dine In"},{value:"to-go",label:"To Go"},{value:"pick-up",label:"Pick Up"},{value:"delivery",label:"Delivery"}];function Jt(e){return cs.some(t=>t.value===e)}function du(e){const t=e.trim();if(Jt(t))return t;const r=t.toLowerCase();if(Jt(r))return r;const s=r.replace(/\s+/g,"-");if(Jt(s))return s;const i=cs.find(n=>n.label.toLowerCase()===r);return i?i.value:"dine-in"}function uu(){return du(oe(qn,"dine-in"))}function cu(e){return e===au}function pu(){return jt({options:cs,fieldId:qn,groupName:lu,currentValue:uu(),layout:"wrap",ariaLabel:"默认新订单类型"})}const mu=147,Pn="147-order-total-rounding-mode",gu="module-setting-radio-147-order-total-rounding",Mn=[{value:"default",label:"Default"},{value:"none",label:"No Rounding"},{value:"down-5c",label:"Rounding down to nearest 5 cents"},{value:"down-10c",label:"Rounding down to nearest 10 cents"},{value:"nearest-5-10c",label:"Round down or Round up to nearest 5 or 10cents"}];function fu(e){return Mn.some(t=>t.value===e)}function bu(){const e=oe(Pn,"down-10c");return fu(e)?e:"down-10c"}function hu(e){return e===mu}function vu(){return jt({options:Mn,fieldId:Pn,groupName:gu,currentValue:bu(),layout:"vertical",ariaLabel:"总价四舍五入方式"})}const yu=156,xu=[{code:"food-allergy",label:"Food Allergy"},{code:"foreign-objects",label:"Foreign Objects in Food"},{code:"servers-mistake",label:"Servers Mistake"},{code:"waited-too-long",label:"Waited Too Long"},{code:"undercooked",label:"Food is Undercooked"},{code:"improperly-prepared",label:"Improperly Prepared"},{code:"not-as-described",label:"Orders Arriving Not as Described"}],Su="size-4 shrink-0 accent-primary text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";function er(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Tu(e){return e===yu}function wu(e,t){return`${e}-void-reason-${t}`}function ku(e){const t=xu.map(r=>{const s=wu(e,r.code),i=He(s,!0);return`
      <label
        class="flex min-h-[4.5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-border bg-muted/40 px-2 py-3 text-sm text-foreground"
      >
        <input
          type="checkbox"
          class="${Su} rounded-sm"
          ${i?"checked":""}
          data-module-setting-checkbox="${er(s)}"
          aria-label="${er(r.label)}"
        />
        <span class="text-center text-xs leading-snug sm:text-sm">${er(r.label)}</span>
      </label>`}).join("");return`
    <div
      class="grid grid-cols-2 gap-2 sm:grid-cols-4"
      data-order-void-invalidation-reasons="${e}"
      role="group"
      aria-label="订单失效原因多选"
    >
      ${t}
    </div>`}const $u=417,Eu="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",Nu="text-xs font-semibold uppercase tracking-wide text-muted-foreground",In=[{title:"门店标识",fields:[{fieldId:"417-restaurant-name",label:"餐馆名",placeholder:"Restaurant name"},{fieldId:"417-store-no",label:"门店编号",placeholder:"Store #"}]},{title:"联系信息",fields:[{fieldId:"417-phone-1",label:"电话1",inputType:"tel",placeholder:"Phone 1"},{fieldId:"417-phone-2",label:"电话2",inputType:"tel",placeholder:"Phone 2"},{fieldId:"417-fax",label:"传真",inputType:"tel",placeholder:"Fax"},{fieldId:"417-website",label:"网站",inputType:"url",placeholder:"https://"},{fieldId:"417-email",label:"邮箱地址",inputType:"email",placeholder:"Email"}]},{title:"地址",fields:[{fieldId:"417-address-line-1",label:"地址栏1",placeholder:"Address line 1"},{fieldId:"417-address-line-2",label:"地址栏2",placeholder:"Address line 2"},{fieldId:"417-city",label:"城市",placeholder:"City"},{fieldId:"417-zip",label:"邮编",placeholder:"ZIP / Postal code"},{fieldId:"417-region",label:"地区",placeholder:"Region / State / Province"}]},{title:"商户与证书",fields:[{fieldId:"417-merchant-group-no",label:"商家组编号",placeholder:"Merchant group #"},{fieldId:"417-merchant-code",label:"商家代号",placeholder:"Merchant code"},{fieldId:"417-merchant-no",label:"商户编号",placeholder:"Merchant #"},{fieldId:"417-dealer",label:"经销商",placeholder:"Dealer"},{fieldId:"417-version-cert",label:"版本证书信息",placeholder:"Version / certificate info"}]}];In.flatMap(e=>e.fields);function Oe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Du(e){return e===$u}function qu(e){const t=Be(e.fieldId,"");return`
    <div class="space-y-1.5">
      <label class="block text-sm font-medium text-foreground">${Oe(e.label)}</label>
      <input
        type="${Oe(e.inputType??"text")}"
        class="${Eu}"
        value="${Oe(t)}"
        data-module-setting-text="${Oe(e.fieldId)}"
        aria-label="${Oe(e.label)}"
        placeholder="${Oe(e.placeholder??"")}"
      />
    </div>`}function Pu(e,t){const r=t>0?"border-t border-border pt-5":"",s=e.fields.map(qu).join("");return`
    <section class="space-y-3 ${r}" data-store-basic-info-section="${Oe(e.title)}">
      <h4 class="${Nu}">${Oe(e.title)}</h4>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        ${s}
      </div>
    </section>`}function Mu(){return`
    <div class="mt-3 space-y-5" data-store-basic-info-form>
      ${In.map(Pu).join("")}
    </div>`}const Iu="548-brand-menus";function Ku(){return`menu-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Et(e){return{id:e.id??Ku(),name:e.name??"未命名菜单",channelLabel:e.channelLabel}}function Ou(e){const t=new Set,r=[];for(const s of e)t.has(s.id)||(t.add(s.id),r.push(s));return r}function _u(){return[Et({id:"menu-dine-in",name:"堂食标准菜单",channelLabel:"堂食 · POS / eMenu"}),Et({id:"menu-delivery",name:"外卖菜单",channelLabel:"外卖 / 来取"}),Et({id:"menu-breakfast",name:"早餐菜单",channelLabel:"限时 · 06:00–10:30"})]}function ps(){const e=qe(Iu,[]);return!Array.isArray(e)||e.length===0?_u():Ou(e.filter(t=>(t==null?void 0:t.id)&&(t==null?void 0:t.name)).map(t=>Et(t)))}function Au(e){return e.channelLabel??"品牌菜单"}const Ru=418,Kn="418-business-hour-schedules",Cu=["418-business-hours","417-business-hours"],ms=[{day:"mon",label:"周一"},{day:"tue",label:"周二"},{day:"wed",label:"周三"},{day:"thu",label:"周四"},{day:"fri",label:"周五"},{day:"sat",label:"周六"},{day:"sun",label:"周日"}],it="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",Lu="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",Bu="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground shadow-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",Hu="inline-flex shrink-0 items-center text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",Fu="text-xs font-semibold uppercase tracking-wide text-muted-foreground",Gu="text-xs font-medium text-muted-foreground",Ie="block text-sm font-medium text-foreground";function Ze(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Nt(){return`bh-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function ju(e){return ms.some(t=>t.day===e)}function It(e,t){return ju(e)?e:t}function Vt(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function mr(e){return!!e&&/^\d{4}-\d{2}$/.test(e)}function wt(e){return e?mr(e)?e:/^\d{4}-\d{2}-\d{2}$/.test(e)?e.slice(0,7):"":""}function Dt(e){const t=e;let r=wt(e.fromMonth)||wt(t.fromDate),s=wt(e.toMonth)||wt(t.toDate);return r||(r=Vt()),s||(s=r),{id:e.id,name:e.name,openTime:e.openTime||"09:00",closeTime:e.closeTime||"22:00",fromMonth:r,toMonth:s,fromDay:It(e.fromDay,"mon"),toDay:It(e.toDay,"fri")}}function tr(e){var t;return((t=ms.find(r=>r.day===e))==null?void 0:t.label)??e}function Uu(){for(const e of Cu){const t=Be(e,"").trim();if(t)return t}return""}function Wu(){const e=Vt();return Uu()?[Dt({id:Nt(),name:"默认营业时间",openTime:"09:00",closeTime:"22:00",fromMonth:e,toMonth:e,fromDay:"mon",toDay:"sun"})]:[Dt({id:Nt(),name:"平日营业",openTime:"11:00",closeTime:"22:00",fromMonth:e,toMonth:e,fromDay:"mon",toDay:"fri"}),Dt({id:Nt(),name:"周末营业",openTime:"10:00",closeTime:"23:00",fromMonth:e,toMonth:e,fromDay:"sat",toDay:"sun"})]}function Qe(){const e=qe(Kn,[]);return!Array.isArray(e)||e.length===0?Wu():e.filter(t=>(t==null?void 0:t.id)&&(t==null?void 0:t.name)).map(t=>Dt(t))}function On(e){Fe(Kn,e)}function Vu(e,t){return e===t?e:`${e} 至 ${t}`}function zu(e,t){return e===t?tr(e):`${tr(e)}至${tr(t)}`}function _n(e){return`${Vu(e.fromMonth,e.toMonth)} · ${zu(e.fromDay,e.toDay)} · ${e.openTime}–${e.closeTime}`}function Ws(e,t,r){return Pa({options:ms.map(s=>({value:s.day,label:s.label})),groupName:t,currentValue:e,radioDataAttr:r})}function Qu(e){return`
    <li
      class="flex flex-col gap-2 rounded-md border border-border bg-muted/30 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between"
      data-business-hour-schedule
      data-schedule-id="${Ze(e.id)}"
    >
      <div class="min-w-0">
        <p class="text-sm font-medium text-foreground">${Ze(e.name)}</p>
        <p class="text-xs text-muted-foreground tabular-nums">${Ze(_n(e))}</p>
      </div>
      <button
        type="button"
        class="self-start text-sm text-destructive hover:underline sm:self-center"
        data-business-hour-schedule-remove
        aria-label="删除 ${Ze(e.name)}"
      >删除</button>
    </li>`}function Yu(){const e=Vt();return`
    <div
      class="fixed inset-0 z-[100] hidden items-center justify-center p-4"
      data-business-hour-dialog
      role="dialog"
      aria-modal="true"
      aria-labelledby="business-hour-dialog-title"
    >
      <button
        type="button"
        class="absolute inset-0 bg-black/40"
        data-business-hour-dialog-backdrop
        aria-label="关闭对话框"
      ></button>
      <div class="relative z-10 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg border border-border bg-card p-5 shadow-lg">
        <h3 id="business-hour-dialog-title" class="text-base font-semibold text-card-foreground">新建营业时间</h3>
        <div class="mt-4 space-y-4">
          <div class="space-y-1.5">
            <label class="${Ie}" for="business-hour-create-name">名称</label>
            <input
              id="business-hour-create-name"
              type="text"
              class="${it}"
              data-business-hour-create-name
              aria-label="名称"
            />
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="space-y-1.5">
              <label class="${Ie}" for="business-hour-create-open">从(hh:mm)</label>
              <input
                id="business-hour-create-open"
                type="time"
                class="${it} tabular-nums"
                data-business-hour-create-open
                value="11:00"
                aria-label="从(hh:mm)"
              />
            </div>
            <div class="space-y-1.5">
              <label class="${Ie}" for="business-hour-create-close">到(hh:mm)</label>
              <input
                id="business-hour-create-close"
                type="time"
                class="${it} tabular-nums"
                data-business-hour-create-close
                value="22:00"
                aria-label="到(hh:mm)"
              />
            </div>
          </div>
          <fieldset class="space-y-4 rounded-md border border-border p-3">
            <legend class="${Ie} px-1">生效范围</legend>
            <div class="space-y-3">
              <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div class="space-y-1.5">
                  <label class="${Ie}" for="business-hour-create-from-month">开始年月</label>
                  <input
                    id="business-hour-create-from-month"
                    type="month"
                    class="${it} tabular-nums"
                    data-business-hour-create-from-month
                    value="${Ze(e)}"
                    aria-label="开始年月"
                  />
                </div>
                <div class="space-y-1.5">
                  <label class="${Ie}" for="business-hour-create-to-month">结束年月</label>
                  <input
                    id="business-hour-create-to-month"
                    type="month"
                    class="${it} tabular-nums"
                    data-business-hour-create-to-month
                    value="${Ze(e)}"
                    aria-label="结束年月"
                  />
                </div>
              </div>
            </div>
            <div class="space-y-3 border-t border-border pt-3">
              <p class="${Gu}">星期</p>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                  <span class="${Ie}">从周几</span>
                  ${Ws("mon","business-hour-create-from-day","data-business-hour-create-from-day")}
                </div>
                <div class="space-y-2">
                  <span class="${Ie}">到周几</span>
                  ${Ws("fri","business-hour-create-to-day","data-business-hour-create-to-day")}
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="mt-6 flex flex-wrap justify-end gap-2">
          <button type="button" class="${Bu}" data-business-hour-create-cancel>取消</button>
          <button type="button" class="${Lu}" data-business-hour-create-save>保存</button>
        </div>
      </div>
    </div>`}function Xu(e){const t=e.length>0?`<ul class="space-y-2" data-business-hour-schedule-list>${e.map(Qu).join("")}</ul>`:'<p class="rounded-md border border-dashed border-border px-3 py-4 text-center text-sm text-muted-foreground" data-business-hour-empty>暂无营业时间，请点击「新建营业时间」</p>';return`
    <section class="space-y-3" data-business-hour-schedules-section>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <h4 class="${Fu}">营业时间</h4>
        <button type="button" class="${Hu}" data-business-hour-create-toggle>+ 新建营业时间</button>
      </div>
      ${t}
    </section>`}function An(e){return Xu(e)}function Zu(e){return e===Ru}function Ju(){const e=Qe();return`
    <div class="mt-3 space-y-5" data-store-business-hours-panel>
      <div data-store-business-hours-body>${An(e)}</div>
      ${Yu()}
    </div>`}function Rn(e){const t=e.querySelector("[data-store-business-hours-body]");t&&(t.innerHTML=An(Qe()))}function ec(e){const t=Vt(),r=e.querySelector("[data-business-hour-create-name]"),s=e.querySelector("[data-business-hour-create-open]"),i=e.querySelector("[data-business-hour-create-close]"),n=e.querySelector("[data-business-hour-create-from-month]"),o=e.querySelector("[data-business-hour-create-to-month]");r&&(r.value=""),s&&(s.value="11:00"),i&&(i.value="22:00"),n&&(n.value=t),o&&(o.value=t);const a=e.querySelector('[data-business-hour-create-from-day][value="mon"]'),l=e.querySelector('[data-business-hour-create-to-day][value="fri"]');a&&(a.checked=!0),l&&(l.checked=!0)}function tc(e){var r;const t=e.querySelector("[data-business-hour-dialog]");t&&(ec(e),t.classList.remove("hidden"),t.classList.add("flex"),(r=e.querySelector("[data-business-hour-create-name]"))==null||r.focus())}function gr(e){const t=e.querySelector("[data-business-hour-dialog]");t&&(t.classList.add("hidden"),t.classList.remove("flex"))}function rc(e){var h,S,w,c,f,x,v,$,_,C;const t=(h=e.querySelector("[data-business-hour-create-name]"))==null?void 0:h.value.trim(),r=((S=e.querySelector("[data-business-hour-create-open]"))==null?void 0:S.value)||"09:00",s=((w=e.querySelector("[data-business-hour-create-close]"))==null?void 0:w.value)||"22:00",i=((c=e.querySelector("[data-business-hour-create-from-month]"))==null?void 0:c.value)??"",n=((f=e.querySelector("[data-business-hour-create-to-month]"))==null?void 0:f.value)??"",o=It((x=e.querySelector("[data-business-hour-create-from-day]:checked"))==null?void 0:x.value,"mon"),a=It((v=e.querySelector("[data-business-hour-create-to-day]:checked"))==null?void 0:v.value,"fri");if(!t){($=e.querySelector("[data-business-hour-create-name]"))==null||$.focus();return}if(!mr(i)||!mr(n)){(_=e.querySelector("[data-business-hour-create-from-month]"))==null||_.focus();return}if(i>n){(C=e.querySelector("[data-business-hour-create-to-month]"))==null||C.focus();return}const l={id:Nt(),name:t,openTime:r,closeTime:s,fromMonth:i,toMonth:n,fromDay:o,toDay:a},p=Qe();p.push(l),On(p),gr(e),Rn(e)}function sc(e,t){On(Qe().filter(r=>r.id!==t)),Rn(e)}function ic(){document.querySelectorAll("[data-store-business-hours-panel]").forEach(e=>{e.dataset.storeBusinessHoursBound!=="1"&&(e.dataset.storeBusinessHoursBound="1",e.addEventListener("click",t=>{const r=t.target;if(r.closest("[data-business-hour-create-toggle]")){tc(e);return}if(r.closest("[data-business-hour-create-cancel]")||r.closest("[data-business-hour-dialog-backdrop]")){gr(e);return}if(r.closest("[data-business-hour-create-save]")){rc(e);return}const s=r.closest("[data-business-hour-schedule-remove]");if(s){const i=s.closest("[data-business-hour-schedule]"),n=i==null?void 0:i.getAttribute("data-schedule-id");n&&sc(e,n)}}),e.addEventListener("keydown",t=>{if(t.key!=="Escape")return;const r=e.querySelector("[data-business-hour-dialog]");r&&!r.classList.contains("hidden")&&(t.preventDefault(),gr(e))}))})}const nc=547,Cn="547-store-brands",oc="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",Ln="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90",ac="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground shadow-sm hover:bg-muted",lc="text-sm font-medium text-primary hover:underline";function j(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Kt(){return`brand-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function zt(e){const t=new Set,r=[];for(const s of e)t.has(s)||(t.add(s),r.push(s));return r}function dc(e){return Array.isArray(e)?zt(e.filter(t=>typeof t=="string"&&t.length>0)):[]}function uc(e){return Array.isArray(e)?zt(e.filter(t=>typeof t=="string"&&t.length>0)):[]}function fr(e){const t=dc(e.scheduleIds),r=uc(e.menuIds);return{id:e.id??Kt(),name:e.name??"",imageDataUrl:e.imageDataUrl,scheduleIds:t,menuIds:r}}function cc(){var o,a;const e=Qe(),t=ps(),r=(o=e[0])==null?void 0:o.id,s=e.slice(0,2).map(l=>l.id),i=(a=t[0])==null?void 0:a.id,n=t.slice(0,2).map(l=>l.id);return[fr({id:Kt(),name:"杨国富麻辣烫",scheduleIds:r?[r]:[],menuIds:i?[i]:[]}),fr({id:Kt(),name:"张亮麻辣烫",scheduleIds:s.length>0?s:r?[r]:[],menuIds:n.length>0?n:i?[i]:[]})]}function Qt(){const e=qe(Cn,[]);return!Array.isArray(e)||e.length===0?cc():e.map(t=>fr(t))}function Bn(e){Fe(Cn,e)}function pc(e){const t=Qe(),r=e.scheduleIds.map(s=>{var i;return(i=t.find(n=>n.id===s))==null?void 0:i.name}).filter(s=>!!s);return r.length>0?zt(r).join(" / "):"—"}function mc(e){const t=ps(),r=e.menuIds.map(s=>{var i;return(i=t.find(n=>n.id===s))==null?void 0:i.name}).filter(s=>!!s);return r.length>0?zt(r).join(" / "):"—"}function gc(e){return e.imageDataUrl?`<img src="${j(e.imageDataUrl)}" alt="" class="size-12 rounded border border-border object-cover" />`:'<div class="flex size-12 items-center justify-center rounded border border-dashed border-border bg-muted/40 text-[10px] text-muted-foreground">NO IMAGE</div>'}function Hn(e){return e.length===0?'<p class="rounded-md border border-dashed border-border px-3 py-6 text-center text-sm text-muted-foreground">暂无品牌，请点击「新增品牌」</p>':`
    <div class="overflow-x-auto rounded-md border border-border">
      <table class="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead class="bg-muted/40 text-xs text-muted-foreground">
          <tr>
            <th class="px-3 py-2 font-medium">品牌名称</th>
            <th class="px-3 py-2 font-medium">品牌图片</th>
            <th class="px-3 py-2 font-medium">品牌营业时间</th>
            <th class="px-3 py-2 font-medium">品牌菜单</th>
            <th class="px-3 py-2 text-right font-medium">操作</th>
          </tr>
        </thead>
        <tbody>${e.map(r=>`
      <tr class="border-t border-border" data-brand-row data-brand-id="${j(r.id)}">
        <td class="py-3 pr-3 text-sm text-foreground">${j(r.name)}</td>
        <td class="py-3 pr-3">${gc(r)}</td>
        <td class="py-3 pr-3 text-sm text-muted-foreground">${j(pc(r))}</td>
        <td class="py-3 pr-3 text-sm text-muted-foreground">${j(mc(r))}</td>
        <td class="py-3 text-right text-sm whitespace-nowrap">
          <button type="button" class="${lc} mr-3" data-brand-edit data-brand-id="${j(r.id)}">编辑</button>
          <button type="button" class="text-sm font-medium text-destructive hover:underline" data-brand-delete data-brand-id="${j(r.id)}">删除</button>
        </td>
      </tr>`).join("")}</tbody>
      </table>
    </div>`}function fc(e,t){const r=t.includes(e.id);return`
    <label
      class="flex cursor-pointer items-start gap-3 rounded-md border border-border px-3 py-2.5 hover:bg-muted/30 has-[:checked]:border-primary/40 has-[:checked]:bg-primary/5"
      data-brand-schedule-option
    >
      <input
        type="checkbox"
        class="mt-0.5 size-4 shrink-0 accent-primary"
        data-brand-schedule-id
        value="${j(e.id)}"
        ${r?"checked":""}
      />
      <span class="min-w-0">
        <span class="block text-sm font-medium text-foreground">${j(e.name)}</span>
        <span class="block text-xs tabular-nums text-muted-foreground">${j(_n(e))}</span>
      </span>
    </label>`}function bc(e){const t=Qe();return t.length===0?`
      <div class="rounded-md border border-dashed border-border bg-muted/20 px-3 py-4 text-sm text-muted-foreground">
        暂无可用营业时间，请先在「营业与运营 → 营业时段」中新建营业时间规则。
      </div>`:`
    <div class="space-y-2" data-brand-schedule-picker>
      ${t.map(r=>fc(r,e)).join("")}
    </div>`}function hc(e,t){const r=t.includes(e.id);return`
    <label
      class="flex cursor-pointer items-start gap-3 rounded-md border border-border px-3 py-2.5 hover:bg-muted/30 has-[:checked]:border-primary/40 has-[:checked]:bg-primary/5"
      data-brand-menu-option
    >
      <input
        type="checkbox"
        class="mt-0.5 size-4 shrink-0 accent-primary"
        data-brand-menu-id
        value="${j(e.id)}"
        ${r?"checked":""}
      />
      <span class="min-w-0">
        <span class="block text-sm font-medium text-foreground">${j(e.name)}</span>
        <span class="block text-xs text-muted-foreground">${j(Au(e))}</span>
      </span>
    </label>`}function vc(e){const t=ps();return t.length===0?`
      <div class="rounded-md border border-dashed border-border bg-muted/20 px-3 py-4 text-sm text-muted-foreground">
        暂无可用品牌菜单，请先在「商品中心 → 品牌菜单」中创建菜单。
      </div>`:`
    <div class="space-y-2" data-brand-menu-picker>
      ${t.map(r=>hc(r,e)).join("")}
    </div>`}function Fn(e,t){const r=t?e.find(l=>l.id===t):null,s=r?"编辑品牌":"新增品牌",i=(r==null?void 0:r.name)??"",n=r!=null&&r.imageDataUrl?`<img src="${j(r.imageDataUrl)}" alt="" class="mx-auto max-h-24 rounded border border-border object-contain" data-brand-image-preview />`:'<div class="mx-auto flex h-24 w-24 items-center justify-center rounded border border-dashed border-border bg-muted/30 text-xs text-muted-foreground" data-brand-image-preview>NO IMAGES</div>',o=(r==null?void 0:r.scheduleIds)??[],a=(r==null?void 0:r.menuIds)??[];return`
    <div
      class="fixed inset-0 z-[100] hidden items-center justify-center p-4"
      data-brand-dialog
      data-editing-id="${j(t??"")}"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brand-dialog-title"
    >
      <button type="button" class="absolute inset-0 bg-black/40" data-brand-dialog-backdrop aria-label="关闭"></button>
      <div class="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-border bg-card p-5 shadow-lg">
        <div class="flex items-start justify-between gap-3">
          <h3 id="brand-dialog-title" class="text-base font-semibold text-card-foreground">${s}</h3>
          <button type="button" class="text-muted-foreground hover:text-foreground" data-brand-dialog-close aria-label="关闭">×</button>
        </div>
        <div class="mt-4 space-y-4">
          <div class="space-y-1.5">
            <label class="block text-sm font-medium text-foreground" for="brand-create-name">品牌名称</label>
            <input id="brand-create-name" type="text" maxlength="50" class="${oc}" data-brand-name value="${j(i)}" />
          </div>
          <div class="space-y-1.5">
            <label class="block text-sm font-medium text-foreground">品牌图片</label>
            <p class="text-xs text-muted-foreground">支持 PNG、JPG、JPEG；比例 1:1，建议 500×500，1MB 以内</p>
            <div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              ${n}
              <input type="file" accept="image/png,image/jpeg,image/jpg" class="text-sm text-foreground" data-brand-image-input />
            </div>
          </div>
          <div class="space-y-2">
            <p class="text-sm font-medium text-foreground">品牌营业时间</p>
            <p class="text-xs text-muted-foreground">从已创建的营业时间规则中选择（可多选）</p>
            ${bc(o)}
          </div>
          <div class="space-y-2">
            <p class="text-sm font-medium text-foreground">品牌菜单</p>
            <p class="text-xs text-muted-foreground">从已创建的品牌菜单中选择（可多选）</p>
            ${vc(a)}
          </div>
        </div>
        <div class="mt-6 flex justify-end gap-2">
          <button type="button" class="${ac}" data-brand-dialog-cancel>取消</button>
          <button type="button" class="${Ln}" data-brand-dialog-save>确定</button>
        </div>
      </div>
    </div>`}function yc(e){return e===nc}function xc(){const e=Qt();return`
    <div class="mt-3 space-y-3" data-store-brand-management>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <p class="text-xs text-muted-foreground">配置本店启用的品牌；品牌主数据见「品牌管理」hub，此处为 Location 级启用、营业时间与菜单绑定。</p>
        <button type="button" class="${Ln}" data-brand-create>新增品牌</button>
      </div>
      <div data-brand-table-wrap>${Hn(e)}</div>
      ${Fn(e,null)}
    </div>`}function gs(e,t=null){const r=Qt(),s=e.querySelector("[data-brand-table-wrap]");s&&(s.innerHTML=Hn(r));const i=e.querySelector("[data-brand-dialog]");i==null||i.remove(),e.insertAdjacentHTML("beforeend",Fn(r,t))}function Vs(e,t){var s;gs(e,t);const r=e.querySelector("[data-brand-dialog]");r==null||r.classList.remove("hidden"),r==null||r.classList.add("flex"),(s=r==null?void 0:r.querySelector("[data-brand-name]"))==null||s.focus()}function br(e){const t=e.querySelector("[data-brand-dialog]");t&&(t.classList.add("hidden"),t.classList.remove("flex"),t.setAttribute("data-editing-id",""))}function Sc(e){return[...e.querySelectorAll("[data-brand-schedule-id]:checked")].map(t=>t.value)}function Tc(e){return[...e.querySelectorAll("[data-brand-menu-id]:checked")].map(t=>t.value)}function wc(e){var p,h;const t=e.querySelector("[data-brand-dialog]");if(!t)return;const r=((p=t.querySelector("[data-brand-name]"))==null?void 0:p.value.trim())??"";if(!r){(h=t.querySelector("[data-brand-name]"))==null||h.focus();return}const s=t.getAttribute("data-editing-id")||"",i=t.querySelector("[data-brand-image-preview]"),n=(i==null?void 0:i.tagName)==="IMG"?i.src:void 0,o=Sc(t),a=Tc(t),l=Qt();if(s){const S=l.findIndex(w=>w.id===s);S>=0&&(l[S]={...l[S],name:r,imageDataUrl:n,scheduleIds:o,menuIds:a})}else l.push({id:Kt(),name:r,imageDataUrl:n,scheduleIds:o,menuIds:a});Bn(l),br(e),gs(e,null)}function kc(e,t){Bn(Qt().filter(r=>r.id!==t)),gs(e,null)}function $c(){document.querySelectorAll("[data-store-brand-management]").forEach(e=>{e.dataset.storeBrandBound!=="1"&&(e.dataset.storeBrandBound="1",e.addEventListener("click",t=>{const r=t.target;if(r.closest("[data-brand-create]")){Vs(e,null);return}const s=r.closest("[data-brand-edit]");if(s){Vs(e,s.getAttribute("data-brand-id"));return}const i=r.closest("[data-brand-delete]");if(i){const n=i.getAttribute("data-brand-id");n&&kc(e,n);return}if(r.closest("[data-brand-dialog-cancel]")||r.closest("[data-brand-dialog-close]")||r.closest("[data-brand-dialog-backdrop]")){br(e);return}r.closest("[data-brand-dialog-save]")&&wc(e)}),e.addEventListener("change",t=>{var a;const r=t.target;if(!r.matches("[data-brand-image-input]"))return;const s=(a=r.files)==null?void 0:a[0],i=e.querySelector("[data-brand-dialog]"),n=i==null?void 0:i.querySelector("[data-brand-image-preview]");if(!s||!n)return;const o=new FileReader;o.onload=()=>{const l=document.createElement("img");l.src=String(o.result),l.alt="",l.className="mx-auto max-h-24 rounded border border-border object-contain",l.dataset.brandImagePreview="",n.replaceWith(l)},o.readAsDataURL(s)}),e.addEventListener("keydown",t=>{if(t.key!=="Escape")return;const r=e.querySelector("[data-brand-dialog]");r&&!r.classList.contains("hidden")&&(t.preventDefault(),br(e))}))})}const Ec=173,zs="173-country-region",Nc=[{code:"us",label:"United States"},{code:"ca",label:"Canada"}],Dc="size-4 shrink-0 accent-primary text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";function nt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function qc(e){return e===Ec}function Pc(e){const t=oe(zs,"us"),r=`module-setting-radio-${e}`,s=Nc.map((i,n)=>{const o=t===i.code;return`
      <label
        class="flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 px-4 py-3 text-sm text-foreground sm:px-6 ${n>0?"border-l border-border":""}"
      >
        <input
          type="radio"
          name="${nt(r)}"
          value="${nt(i.code)}"
          class="${Dc}"
          ${o?"checked":""}
          data-module-setting-radio="${nt(zs)}"
          aria-label="${nt(i.label)}"
        />
        <span class="text-center leading-tight">${nt(i.label)}</span>
      </label>`}).join("");return`
    <div
      class="flex w-full max-w-md overflow-hidden rounded-md border border-border bg-muted/40"
      data-store-country-region-radio="${e}"
      role="radiogroup"
      aria-label="国家-州/省份/地区"
    >
      ${s}
    </div>`}const Mc=170,Qs="170-restaurant-mode",Ic=[{code:"dining",label:"Dining"},{code:"fast-food",label:"Fast Food"}],Kc="size-4 shrink-0 accent-primary text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";function ot(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Oc(e){return e===Mc}function _c(e){const t=oe(Qs,"dining"),r=`module-setting-radio-${e}`,s=Ic.map((i,n)=>{const o=t===i.code;return`
      <label
        class="flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 px-4 py-3 text-sm text-foreground sm:px-6 ${n>0?"border-l border-border":""}"
      >
        <input
          type="radio"
          name="${ot(r)}"
          value="${ot(i.code)}"
          class="${Kc}"
          ${o?"checked":""}
          data-module-setting-radio="${ot(Qs)}"
          aria-label="${ot(i.label)}"
        />
        <span class="text-center leading-tight">${ot(i.label)}</span>
      </label>`}).join("");return`
    <div
      class="flex w-full max-w-md overflow-hidden rounded-md border border-border bg-muted/40"
      data-store-restaurant-mode-radio="${e}"
      role="radiogroup"
      aria-label="餐厅模式选择"
    >
      ${s}
    </div>`}const Ac=[{code:"to-go",label:"To Go"},{code:"pick-up",label:"Pick Up"},{code:"delivery",label:"Delivery"}],Rc=39,Cc="size-4 shrink-0 accent-primary text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";function rr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Lc(e){return e===Rc}function Bc(e,t){return`${e}-order-type-${t}`}function Hc(e){const t=Ac.map((r,s)=>{const i=Bc(e,r.code),n=He(i,!1);return`
      <label
        class="flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 px-3 py-3 text-sm text-foreground sm:px-4 ${s>0?"border-l border-border":""}"
      >
        <input
          type="checkbox"
          class="${Cc} rounded-sm"
          ${n?"checked":""}
          data-module-setting-checkbox="${rr(i)}"
          aria-label="${rr(r.label)}"
        />
        <span class="text-center leading-tight">${rr(r.label)}</span>
      </label>`}).join("");return`
    <div
      class="flex w-full max-w-xl overflow-hidden rounded-md border border-border bg-muted/40"
      data-packing-slip-order-type-multiselect="${e}"
      role="group"
      aria-label="需要打包单的订单类型"
    >
      ${t}
    </div>`}const Ys="/operations/queue-call/floor-plan",Gn="bplant-floor-plan:v1";function O(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function jn(e){return`${e}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function sr(){return{areas:[],activeAreaId:"",selectedTableId:null,tableDialog:null,areaDialog:null}}function Fc(e){return{id:jn("t"),name:`T${e.tables.length+1}`,seats:4,width:80,height:60,rotation:0,shape:"rectangle",category:"standard",x:32+e.tables.length*24,y:32+e.tables.length*16}}function Un(e){const t=e.tableDialog;if(!t)return null;if(t.mode==="create")return e.dialogDraft??null;const r=ge(e);return(r==null?void 0:r.tables.find(s=>s.id===t.tableId))??null}function H(){try{const e=localStorage.getItem(Gn);if(!e)return sr();const t=JSON.parse(e);if(!Array.isArray(t==null?void 0:t.areas))return sr();const r=t.areas;return{areas:r,activeAreaId:r.length>0?t.activeAreaId&&r.some(s=>s.id===t.activeAreaId)?t.activeAreaId:r[0].id:"",selectedTableId:t.selectedTableId??null,tableDialog:t.tableDialog??null,dialogDraft:t.dialogDraft,areaDialog:t.areaDialog??null}}catch{return sr()}}function Xs(e){localStorage.setItem(Gn,JSON.stringify(e))}function Gc(e){return e===Ys||e.startsWith(`${Ys}/`)}function ge(e){return e.areas.length?e.areas.find(t=>t.id===e.activeAreaId)??e.areas[0]??null:null}function jc(e){const t=ge(e);return!t||!e.selectedTableId?null:t.tables.find(r=>r.id===e.selectedTableId)??null}function lt(e){return{...e,areaDialog:null}}function fe(e){return{...e,tableDialog:null,dialogDraft:void 0}}function Zs(e){return lt(fe(e))}const Uc=["A1","A2","A3","A4","B1","B2","B3","C1","C2","VIP1","VIP2","吧台1","包间1"],Wc=[1,2,4,6,8,10,12,14],Js=[48,60,64,80,100,120,140],Vc=[0,45,90,135,180,270],Ot=[{value:"rectangle",label:"Rectangle / 矩形"},{value:"circle",label:"Circle / 圆形"},{value:"oval",label:"Oval / 椭圆"}],bt=[{value:"standard",label:"标准桌"},{value:"booth",label:"卡座"},{value:"bar",label:"吧台"},{value:"private",label:"包间"}],fs="min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm",Wn="w-[5.75rem] shrink-0 rounded-md border border-input bg-background px-2 py-2 text-sm text-muted-foreground",zc="w-[5.75rem] shrink-0 rounded-md border border-input bg-background px-2 py-2 text-sm text-muted-foreground hover:bg-muted",Qc=10060;function Yc(e){var t;return((t=Ot.find(r=>r.value===e))==null?void 0:t.label)??e}function Xc(e){var t;return((t=bt.find(r=>r.value===e))==null?void 0:t.label)??e}function Zc(e){return e==="rectangle"||e==="circle"||e==="oval"}function Jc(e){return e==="standard"||e==="booth"||e==="bar"||e==="private"}function ep(e){const t=e.trim().toLowerCase();return t?t.includes("rect")||t.includes("矩")?"rectangle":t.includes("circle")||t.includes("圆")?"circle":t.includes("oval")||t.includes("椭")?"oval":Zc(t)?t:null:null}function tp(e){const t=e.trim();if(!t)return null;const r=bt.find(s=>s.label===t||s.value===t);return r?r.value:t.includes("卡座")?"booth":t.includes("吧台")?"bar":t.includes("包间")?"private":t.includes("标准")?"standard":Jc(t)?t:null}function rp(e){const t=new Set(Uc);for(const r of e.areas)for(const s of r.tables)s.name.trim()&&t.add(s.name.trim());return[...t].sort((r,s)=>r.localeCompare(s,"zh"))}function sp(e,t){return`<option value="">选择</option>${[...new Set([...t,e])].sort((i,n)=>i-n).map(i=>`<option value="${i}"${i===e?" selected":""}>${i}</option>`).join("")}`}function ip(e,t){const r=[...new Set([...t,e].filter(Boolean))].sort((o,a)=>o.localeCompare(a,"zh")),s=r.map(o=>`<option value="${O(o)}"${o===e?" selected":""}>${O(o)}</option>`).join(""),i=r.includes(e);return`<option value="">选择</option>${e&&!i?`<option value="${O(e)}" selected>${O(e)}</option>`:""}${s}`}function ei(e,t,r,s,i){return`
    <label class="block space-y-1">
      <span class="text-xs text-muted-foreground">${O(e)}</span>
      <div class="flex gap-2">
        <input
          data-floor-plan-field="${t}"
          type="text"
          class="${fs}"
          value="${O(r)}"
          list="${s}"
          autocomplete="off"
          placeholder="可输入或点击选择"
        />
        <datalist id="${s}">${i}</datalist>
        <button
          type="button"
          class="${zc}"
          data-floor-plan-preset-trigger="${t}"
          aria-haspopup="listbox"
          aria-expanded="false"
          title="快捷选择"
        >选择</button>
      </div>
    </label>`}function kt(e,t,r,s,i,n=""){return`
    <label class="block space-y-1">
      <span class="text-xs text-muted-foreground">${O(e)}</span>
      <div class="flex gap-2">
        <input
          data-floor-plan-field="${t}"
          type="number"
          class="${fs}"
          value="${r}"
          ${n}
          
        />
        <select data-floor-plan-preset="${t}" class="${Wn}" title="快捷选择" >
          ${sp(r,s)}
        </select>
      </div>
    </label>`}function np(e,t,r,s,i,n=""){const a=`floor-plan-${t}-datalist`,l=s.map(p=>`<option value="${O(p)}"></option>`).join("");return`
    <label class="block space-y-1">
      <span class="text-xs text-muted-foreground">${O(e)}</span>
      <div class="flex gap-2">
        <input
          data-floor-plan-field="${t}"
          type="text"
          class="${fs}"
          value="${O(r)}"
          list="${a}"
          autocomplete="off"
          ${n}
          
        />
        <datalist id="${a}">${l}</datalist>
        <select data-floor-plan-preset="${t}" class="${Wn} max-w-[7.5rem]" title="快捷选择" >
          ${ip(r,s)}
        </select>
      </div>
    </label>`}function op(e,t){const r=t?"z-20 border-primary bg-primary/20 ring-2 ring-primary shadow-md":"z-10 border-border bg-card/90 hover:border-primary/60 hover:shadow",s=e.shape==="circle"?"rounded-full":e.shape==="oval"?"rounded-[999px]":"rounded-md";return`<button
    type="button"
    class="floor-plan-table absolute flex items-center justify-center border text-xs font-medium shadow-sm transition-[box-shadow,background-color,border-color] ${r} ${s}"
    data-floor-plan-table-id="${O(e.id)}"
    data-floor-plan-selected="${t?"true":"false"}"
    aria-pressed="${t?"true":"false"}"
    style="left:${e.x}px;top:${e.y}px;width:${e.width}px;height:${e.height}px;transform:rotate(${e.rotation}deg)"
    title="${O(e.name)} · ${e.seats}人"
  >${O(e.name)}</button>`}function ap(e,t){const r=e.name,s=e.seats,i=e.width,n=e.height,o=e.rotation,a=e.shape,l=e.category,p=rp(t);return`
    <fieldset class="space-y-3" data-floor-plan-form>
      <p class="text-xs text-muted-foreground">各字段左侧可输入，右侧下拉可快捷选择</p>
      ${np("名称","name",r,p,!1,'placeholder="如 A1、包间1"')}
      ${kt("人数","seats",s,Wc,!1,'min="1" step="1"')}
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        ${kt("宽","width",i,Js,!1,'min="24" step="1"')}
        ${kt("高","height",n,Js,!1,'min="24" step="1"')}
      </div>
      ${kt("旋转(度)","rotation",o,Vc,!1,'step="1"')}
      ${ei("类型","shape",Yc(a),"floor-plan-shape-datalist",Ot.map(h=>`<option value="${O(h.label)}"></option>`).join(""))}
      ${ei("桌子类别","category",Xc(l),"floor-plan-category-datalist",bt.map(h=>`<option value="${O(h.label)}"></option>`).join(""))}
    </fieldset>`}function lp(e){if(!e.areaDialog)return"";const t=e.areaDialog,r=t.mode==="create",s=t.mode==="edit"?e.areas.find(o=>o.id===t.areaId):null,i=r?"新增区域":`编辑区域 · ${(s==null?void 0:s.name)??""}`,n=r?"":(s==null?void 0:s.name)??"";return`
    <div
      class="fixed inset-0 z-[10050] flex items-center justify-center overflow-y-auto p-4"
      data-floor-plan-area-dialog-overlay
      role="presentation"
    >
      <button
        type="button"
        class="absolute inset-0 bg-black/50"
        data-floor-plan-area-dialog-close
        aria-label="关闭"
      ></button>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="floor-plan-area-dialog-title"
        class="relative z-10 my-auto w-full max-w-md overflow-visible rounded-xl border border-border bg-card shadow-xl"
        data-floor-plan-area-dialog
      >
        <header class="flex shrink-0 items-center justify-between border-b border-border px-5 py-4">
          <h2 id="floor-plan-area-dialog-title" class="text-base font-semibold text-foreground">${O(i)}</h2>
          <button
            type="button"
            class="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            data-floor-plan-area-dialog-close
            aria-label="关闭"
          >×</button>
        </header>
        <div class="px-5 py-4">
          <label class="block space-y-1">
            <span class="text-xs text-muted-foreground">区域名称</span>
            <input
              data-floor-plan-area-name
              type="text"
              class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value="${O(n)}"
              placeholder="如 Floor 1、大厅、KTV"
              autocomplete="off"
            />
          </label>
        </div>
        <footer class="flex shrink-0 items-center justify-between gap-3 border-t border-border px-5 py-4">
          <div class="shrink-0">
            ${r?"":`<button
              type="button"
              class="rounded-md border border-destructive/40 px-4 py-2 text-sm text-destructive hover:bg-destructive/10"
              data-floor-plan-area-dialog-delete
            >删除区域</button>`}
          </div>
          <div class="flex shrink-0 items-center justify-end gap-2">
            <button
              type="button"
              class="rounded-md border border-border px-4 py-2 text-sm hover:bg-muted"
              data-floor-plan-area-dialog-cancel
            >取消</button>
            <button
              type="button"
              class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              data-floor-plan-area-dialog-save
            >保存</button>
          </div>
        </footer>
      </div>
    </div>`}function dp(e){return{...fe(e),selectedTableId:null,areaDialog:{mode:"create"}}}function up(e,t){return{...fe(e),selectedTableId:null,areaDialog:{mode:"edit",areaId:t}}}function cp(){const e=document.querySelector("[data-floor-plan-area-name]");return(e==null?void 0:e.value.trim())??""}function pp(e,t){if(!e.areas.length)return`
      <div class="rounded-xl border border-dashed border-border bg-muted/30 p-4 text-center">
        <p class="text-sm text-muted-foreground">请先创建就餐区域，再布置桌位</p>
        <button
          type="button"
          class="mt-3 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          data-floor-plan-area-add
        >新增区域</button>
      </div>`;const r=jc(e),s=!t||t.tables.length===0?'<p class="text-sm text-muted-foreground">当前区域暂无桌位</p>':`<ul class="max-h-48 space-y-1 overflow-y-auto" role="list">
          ${t.tables.map(n=>`<li>
                <button
                  type="button"
                  class="flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors ${n.id===e.selectedTableId?"border-primary bg-primary/10 font-medium text-foreground":"border-border hover:bg-muted"}"
                  data-floor-plan-table-pick="${O(n.id)}"
                >
                  <span>${O(n.name)}</span>
                  <span class="text-xs text-muted-foreground">${n.seats}人</span>
                </button>
              </li>`).join("")}
        </ul>`;return`
    <div class="space-y-4">
      <div class="space-y-2">
        <h3 class="text-xs font-medium uppercase tracking-wide text-muted-foreground">当前区域</h3>
        <div class="flex flex-wrap gap-2" role="tablist" aria-label="区域">${e.areas.map(n=>`<button type="button" class="rounded-md px-3 py-1.5 text-sm font-medium ${n.id===e.activeAreaId?"bg-primary text-primary-foreground":"bg-muted text-foreground hover:bg-muted/80"}" data-floor-plan-area-id="${O(n.id)}">${O(n.name)}</button>`).join("")}</div>
        <div class="flex flex-wrap gap-2">
          <button type="button" class="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-muted" data-floor-plan-area-edit>编辑区域</button>
          <button type="button" class="rounded-md border border-destructive/40 px-3 py-1.5 text-sm text-destructive hover:bg-destructive/10" data-floor-plan-area-delete>删除区域</button>
          <button type="button" class="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-muted" data-floor-plan-area-add>新增区域</button>
        </div>
      </div>
      <div class="rounded-xl border border-dashed border-border bg-muted/30 p-4 text-center">
        <p class="text-sm text-muted-foreground">在画布点击桌位可编辑；为「${O((t==null?void 0:t.name)??"")}」新增桌位</p>
        <button
          type="button"
          class="mt-3 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          data-floor-plan-table-add
        >新增桌子</button>
      </div>
      ${r?`<p class="text-xs text-muted-foreground">已选中：<span class="font-medium text-foreground">${O(r.name)}</span>（点击画布或列表可编辑）</p>`:""}
      <div class="space-y-2">
        <h3 class="text-xs font-medium uppercase tracking-wide text-muted-foreground">本区域桌位 (${(t==null?void 0:t.tables.length)??0})</h3>
        ${s}
      </div>
    </div>`}function mp(e){if(!e.tableDialog)return"";const t=Un(e);if(!t)return"";const r=e.tableDialog.mode==="create",s=r?"新增桌子":`编辑桌子 · ${t.name}`;return`
    <div
      class="fixed inset-0 z-[10050] flex items-center justify-center overflow-y-auto p-4"
      data-floor-plan-dialog-overlay
      role="presentation"
    >
      <button
        type="button"
        class="absolute inset-0 bg-black/50"
        data-floor-plan-dialog-close
        aria-label="关闭"
      ></button>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="floor-plan-dialog-title"
        class="relative z-10 my-auto flex w-full max-w-xl flex-col overflow-visible rounded-xl border border-border bg-card shadow-xl"
        data-floor-plan-dialog
      >
        <header class="flex shrink-0 items-center justify-between border-b border-border px-5 py-4">
          <h2 id="floor-plan-dialog-title" class="text-base font-semibold text-foreground">${O(s)}</h2>
          <button
            type="button"
            class="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            data-floor-plan-dialog-close
            aria-label="关闭"
          >×</button>
        </header>
        <div class="overflow-visible px-5 py-4">
          ${ap(t,e)}
        </div>
        <footer class="flex shrink-0 items-center justify-between gap-3 border-t border-border px-5 py-4">
          <div class="shrink-0">
            ${r?"":`<button
              type="button"
              class="rounded-md border border-destructive/40 px-4 py-2 text-sm text-destructive hover:bg-destructive/10"
              data-floor-plan-dialog-delete
            >删除</button>`}
          </div>
          <div class="flex shrink-0 items-center justify-end gap-2">
            <button
              type="button"
              class="rounded-md border border-border px-4 py-2 text-sm hover:bg-muted"
              data-floor-plan-dialog-cancel
            >取消</button>
            <button
              type="button"
              class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              data-floor-plan-dialog-save
            >保存</button>
          </div>
        </footer>
      </div>
    </div>`}function gp(e){const t=ge(e);if(!t)return e;const r=Fc(t);return{...lt(fe(e)),selectedTableId:null,tableDialog:{mode:"create"},dialogDraft:r}}function ti(e,t){return{...e,selectedTableId:t,tableDialog:{mode:"edit",tableId:t},dialogDraft:void 0}}function fp(){const e=H(),t=ge(e),r=e.areas.length>0,s=(t==null?void 0:t.tables.map(n=>op(n,n.id===e.selectedTableId)).join(""))??"";return`
    <div class="floor-plan-editor flex min-h-[min(72vh,640px)] flex-col gap-4 lg:flex-row" data-floor-plan-root>
      <div class="flex min-w-0 flex-1 flex-col gap-3">
        <div
          class="floor-plan-canvas relative min-h-[420px] flex-1 overflow-hidden rounded-xl border border-border bg-sky-100/70 dark:bg-sky-950/40"
          data-floor-plan-canvas
          role="application"
          aria-label="餐位平面图画布"
          data-floor-plan-has-areas="${r?"true":"false"}"
        >
          ${s}
          ${r?s?"":'<p class="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-muted-foreground">当前区域暂无桌位，请点击右侧「新增桌子」</p>':'<p class="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-muted-foreground">请先点击右侧「新增区域」创建楼层或分区</p>'}
        </div>
        <button
          type="button"
          class="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm font-medium hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
          data-floor-plan-save-area
          ${r?"":"disabled"}
        >保存区域图</button>
      </div>
      <aside class="w-full shrink-0 space-y-4 rounded-xl border border-border bg-card p-4 lg:w-80">
        ${pp(e,t)}
        <p class="text-xs text-muted-foreground">拖拽画布上的桌子可调整位置 · seq 428</p>
      </aside>
      ${lp(e)}
      ${mp(e)}
    </div>`}function ri(){Le(),window.dispatchEvent(new CustomEvent("menusifu:floor-plan-remount"))}const si="z-20 border-primary bg-primary/20 ring-2 ring-primary shadow-md",ii="z-10 border-border bg-card/90 hover:border-primary/60 hover:shadow";function bp(e,t){e.querySelectorAll("[data-floor-plan-table-id]").forEach(r=>{const s=r.getAttribute("data-floor-plan-table-id")===t;r.dataset.floorPlanSelected=s?"true":"false",r.setAttribute("aria-pressed",s?"true":"false"),r.classList.remove(...si.split(" "),...ii.split(" ")),r.classList.add(...(s?si:ii).split(" "))})}function hp(e){const t=document.querySelector("[data-floor-plan-dialog]"),r=n=>{var o;return((o=t==null?void 0:t.querySelector(`[data-floor-plan-field="${n}"]`))==null?void 0:o.value)??""},s=ep(r("shape"))??e.shape,i=tp(r("category"))??e.category;return{...e,name:r("name").trim()||e.name,seats:Math.max(1,Number(r("seats"))||e.seats),width:Math.max(24,Number(r("width"))||e.width),height:Math.max(24,Number(r("height"))||e.height),rotation:Number(r("rotation"))||0,shape:s,category:i}}let ve=null,ye=null,ni=!1;function Le(){ve==null||ve.remove(),ve=null,ye==null||ye.setAttribute("aria-expanded","false"),ye=null}function vp(e,t){const r=t.getBoundingClientRect(),s=4,i=e.offsetWidth,n=e.offsetHeight,o=8;let a=r.right-i,l=r.bottom+s;a<o&&(a=o),a+i>window.innerWidth-o&&(a=window.innerWidth-i-o),l+n>window.innerHeight-o&&(l=r.top-n-s),l<o&&(l=o),e.style.left=`${Math.round(a)}px`,e.style.top=`${Math.round(l)}px`}function yp(e,t,r){if(ye===e&&ve){Le();return}Le();const s=t==="shape"?Ot:bt,i=document.createElement("div");i.className="floor-plan-preset-menu fixed min-w-[10.5rem] max-h-[min(240px,50vh)] overflow-y-auto rounded-lg border border-border bg-card p-1 text-card-foreground shadow-md",i.style.zIndex=String(Qc),i.style.backgroundColor="var(--color-card)",i.setAttribute("role","listbox"),i.setAttribute("data-floor-plan-preset-menu",t),i.innerHTML=s.map(n=>`<button
          type="button"
          role="option"
          class="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
          data-floor-plan-preset-pick="${O(n.value)}"
          data-floor-plan-preset-field="${t}"
        >${O(n.label)}</button>`).join(""),i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),ve=i,ye=e,e.setAttribute("aria-expanded","true"),requestAnimationFrame(()=>{!ve||!ye||vp(ve,ye)}),i.addEventListener("click",n=>{const o=n.target.closest("[data-floor-plan-preset-pick]");if(!o)return;n.preventDefault(),n.stopPropagation();const a=o.getAttribute("data-floor-plan-preset-field"),l=o.getAttribute("data-floor-plan-preset-pick");if(!a||!l)return;const p=r.querySelector(`[data-floor-plan-field="${a}"]`);if(p){if(a==="shape"){const h=Ot.find(S=>S.value===l);h&&(p.value=h.label)}else if(a==="category"){const h=bt.find(S=>S.value===l);h&&(p.value=h.label)}Le()}})}function xp(){ni||(ni=!0,document.addEventListener("pointerdown",e=>{if(!ve)return;const t=e.target;ve.contains(t)||ye!=null&&ye.contains(t)||Le()},!0),window.addEventListener("scroll",()=>{ve&&Le()},!0))}function Sp(e){xp(),e.querySelectorAll("[data-floor-plan-preset-trigger]").forEach(t=>{t.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation();const s=t.getAttribute("data-floor-plan-preset-trigger");s!=="shape"&&s!=="category"||yp(t,s,e)})}),e.querySelectorAll("[data-floor-plan-preset]").forEach(t=>{t.addEventListener("change",()=>{const r=t.getAttribute("data-floor-plan-preset");if(!r||!t.value)return;const s=e.querySelector(`[data-floor-plan-field="${r}"]`);s&&(s.value=t.value)})}),e.querySelectorAll("[data-floor-plan-field]").forEach(t=>{t.addEventListener("input",()=>{const r=t.getAttribute("data-floor-plan-field");if(!r||r==="shape"||r==="category")return;const s=e.querySelector(`[data-floor-plan-preset="${r}"]`);if(!s)return;const i=t.value.trim(),n=[...s.options].find(o=>o.value===i||o.value===t.value);s.value=(n==null?void 0:n.value)??""})})}function Tp(e){var $,_,C,m,E,D,V,B,pe,G,W;const t=document.querySelector("[data-floor-plan-root]");if(!t)return;window.addEventListener("menusifu:floor-plan-remount",e,{once:!0});const r=t.querySelector("[data-floor-plan-dialog]");r&&Sp(r);const s=g=>{Xs(g),ri()},i=()=>{Le();const g=H();s(fe({...g,selectedTableId:null}))},n=()=>{const g=H(),T=Un(g);if(!T||!g.tableDialog)return;const y=hp(T),N=ge(g);if(!N)return;const A=g.tableDialog.mode==="create"?{...N,tables:[...N.tables,y]}:{...N,tables:N.tables.map(M=>M.id===y.id?y:M)};s(fe({...g,areas:g.areas.map(M=>M.id===N.id?A:M),selectedTableId:y.id}))},o=5,a=t.querySelector("[data-floor-plan-area-dialog]"),l=()=>{Le(),s(lt(fe({...H(),selectedTableId:null})))},p=()=>{const g=H();if(!g.areaDialog)return;const T=cp();if(!T){alert("请输入区域名称");return}if(g.areaDialog.mode==="create"){const N={id:jn("area"),name:T,tables:[]};s(lt({...fe(g),areas:[...g.areas,N],activeAreaId:N.id,selectedTableId:null}));return}const y=g.areaDialog.areaId;s(lt({...g,areas:g.areas.map(N=>N.id===y?{...N,name:T}:N)}))},h=g=>{var A;const T=H(),y=T.areas.find(M=>M.id===g);if(!y||!window.confirm(`删除区域「${y.name}」及其全部桌位？`))return;const N=T.areas.filter(M=>M.id!==g);s(Zs({...T,areas:N,activeAreaId:((A=N[0])==null?void 0:A.id)??"",selectedTableId:null}))};($=t.querySelector("[data-floor-plan-save-area]"))==null||$.addEventListener("click",()=>{const g=ge(H());if(!g){alert("请先新增区域");return}alert(`已保存「${g.name}」区域图（${g.tables.length} 张桌）`)}),t.querySelectorAll("[data-floor-plan-area-add]").forEach(g=>{g.addEventListener("click",()=>s(dp(H())))}),t.querySelectorAll("[data-floor-plan-area-id]").forEach(g=>{g.addEventListener("click",()=>{const T=g.getAttribute("data-floor-plan-area-id");if(!T)return;const y=H();s(fe({...y,activeAreaId:T,selectedTableId:null}))})}),(_=t.querySelector("[data-floor-plan-area-edit]"))==null||_.addEventListener("click",()=>{const g=H(),T=ge(g);T&&s(up(g,T.id))}),(C=t.querySelector("[data-floor-plan-area-delete]"))==null||C.addEventListener("click",()=>{const g=ge(H());g&&h(g.id)}),(m=a==null?void 0:a.querySelector("[data-floor-plan-area-dialog-save]"))==null||m.addEventListener("click",p),(E=a==null?void 0:a.querySelector("[data-floor-plan-area-dialog-cancel]"))==null||E.addEventListener("click",l),a==null||a.querySelectorAll("[data-floor-plan-area-dialog-close]").forEach(g=>{g.addEventListener("click",l)}),(D=a==null?void 0:a.querySelector("[data-floor-plan-area-dialog-delete]"))==null||D.addEventListener("click",()=>{var T;const g=H();((T=g.areaDialog)==null?void 0:T.mode)==="edit"&&h(g.areaDialog.areaId)}),(V=a==null?void 0:a.querySelector("[data-floor-plan-area-name]"))==null||V.focus(),(B=t.querySelector("[data-floor-plan-table-add]"))==null||B.addEventListener("click",()=>{s(gp(H()))}),t.querySelectorAll("[data-floor-plan-table-pick]").forEach(g=>{g.addEventListener("click",()=>{const T=g.getAttribute("data-floor-plan-table-pick");T&&s(ti(H(),T))})}),(pe=r==null?void 0:r.querySelector("[data-floor-plan-dialog-save]"))==null||pe.addEventListener("click",n),(G=r==null?void 0:r.querySelector("[data-floor-plan-dialog-cancel]"))==null||G.addEventListener("click",i),r==null||r.querySelectorAll("[data-floor-plan-dialog-close]").forEach(g=>{g.addEventListener("click",i)}),(W=r==null?void 0:r.querySelector("[data-floor-plan-dialog-delete]"))==null||W.addEventListener("click",()=>{var A;const g=H();if(((A=g.tableDialog)==null?void 0:A.mode)!=="edit")return;const T=g.tableDialog.tableId,y=ge(g);if(!y)return;const N=y.tables.find(M=>M.id===T);!N||!window.confirm(`删除桌子「${N.name}」？`)||s(fe({...g,areas:g.areas.map(M=>M.id===y.id?{...M,tables:M.tables.filter(ae=>ae.id!==T)}:M),selectedTableId:null}))});const S=g=>{if(g.key!=="Escape")return;const T=H();if(T.tableDialog){g.preventDefault(),i();return}T.areaDialog&&(g.preventDefault(),l())};document.addEventListener("keydown",S),window.addEventListener("menusifu:floor-plan-remount",()=>document.removeEventListener("keydown",S),{once:!0});const w=t.querySelector("[data-floor-plan-canvas]");if(!w)return;let c=null;const f=g=>{if(!c||g.pointerId!==c.pointerId)return;const T=g.clientX-c.startClientX,y=g.clientY-c.startClientY;if(!c.dragged&&Math.hypot(T,y)<o)return;c.dragged=!0;const N=Math.max(0,c.originX+T),A=Math.max(0,c.originY+y),M=w.querySelector(`[data-floor-plan-table-id="${c.tableId}"]`);M&&(M.style.left=`${N}px`,M.style.top=`${A}px`)},x=()=>{if(!c)return;const{tableId:g,dragged:T}=c;let y=H();if(T){const N=ge(y);if(!N)return;const A=w.querySelector(`[data-floor-plan-table-id="${g}"]`),M=A?parseFloat(A.style.left):0,ae=A?parseFloat(A.style.top):0;y={...y,areas:y.areas.map(Me=>Me.id===N.id?{...Me,tables:Me.tables.map(st=>st.id===g?{...st,x:M,y:ae}:st)}:Me)},Xs(fe({...y,selectedTableId:g})),c=null,window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),ri();return}c=null,window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),s(ti(y,g))},v=()=>x();w.querySelectorAll("[data-floor-plan-table-id]").forEach(g=>{g.addEventListener("pointerdown",T=>{const y=T;if(y.button!==0)return;const N=g.getAttribute("data-floor-plan-table-id");if(!N)return;const A=H(),M=ge(A),ae=M==null?void 0:M.tables.find(Me=>Me.id===N);!ae||!M||(y.preventDefault(),y.stopPropagation(),g.setPointerCapture(y.pointerId),bp(t,N),c={tableId:N,pointerId:y.pointerId,startClientX:y.clientX,startClientY:y.clientY,originX:ae.x,originY:ae.y,dragged:!1},window.addEventListener("pointermove",f),window.addEventListener("pointerup",v),window.addEventListener("pointercancel",v))})}),w.addEventListener("pointerdown",g=>{if(g.target.closest("[data-floor-plan-table-id]"))return;const y=H();!y.selectedTableId&&!y.tableDialog&&!y.areaDialog||s(Zs({...y,selectedTableId:null}))})}const Vn="menusifu-admin-ui-locale",oi={zh:{"locale.label":"界面语言","locale.optionZh":"中文","locale.optionEn":"English","nav.backToPrimaryNav":"返回主导航","nav.secondarySuffix":"·二级导航","nav.subNavQualifier":"子导航","nav.openSecondary":"打开{name}二级导航","nav.sheetNavFunction":"{name}功能","nav.tertiarySuffix":" · 三级导航","nav.subPagesAria":"{name}子页面","badge.chain":"连锁","shell.appName":"米聚集团","shell.appTagline":"MenuSifu智慧餐饮管理中心","shell.navTree":"主导航树","shell.navAside":"主导航","header.aiOpenTitle":"打开 AI 智能助手","header.aiShort":"AI助手","header.themeToggle":"切换深色模式","header.scopeGroup":"数据范围筛选：品牌、区域、门店","header.scopeGroupTitle":"按品牌、区域、门店筛选当前数据范围（演示；可对接组织架构接口）","header.scopeBrand":"品牌","header.scopeBrandAria":"按品牌筛选","header.scopeAllBrands":"全部品牌","header.scopeRegion":"区域","header.scopeRegionAria":"按区域筛选","header.scopeAllRegions":"全部区域","header.scopeStore":"门店","header.scopeStoreAria":"按门店筛选","header.scopeAllStores":"全部门店","findTitle.aiChat":"智能对话","findTitle.aiModule":"AI智能助手 · AI Assistant","findTitle.productCenterB":"商品中心B","findTitle.productCenterBModule":"商品中心B · Product center B","findTitle.page":"页面","findTitle.inventoryChangeTitle":"库存变更记录","findTitle.inventoryChangeModule":"库存管理中心 / Inventory management center","findTitle.moduleTax":"商品中心 · 门店管理 · 税种管理","findTitle.moduleSeasoning":"商品中心 · 商品管理 · 调味管理","findTitle.moduleTags":"商品中心 · 商品管理 · 标签管理","findTitle.moduleRecipes":"商品中心 · 商品管理 · 配方管理","findTitle.moduleDmHw":"硬件管理中心 · 硬件","findTitle.moduleTips":"团队管理 · 小费管理","findTitle.moduleTeamReports":"团队管理 · 员工报表","findTitle.moduleTeamScheduling":"团队管理 · 排班与考勤","findTitle.moduleBrandProducts":"商品中心 · 商品管理","findTitle.moduleBrandMenu":"商品中心 · 品牌菜单","findTitle.moduleStoreProducts":"商品中心 · 门店管理","findTitle.moduleGiftCards":"礼品卡中心 · Gift card center","findTitle.moduleMembers":"会员中心 · Member center","findTitle.moduleMembersCards":"会员中心 · 卡券管理","findTitle.modulePoints":"积分配置","findTitle.moduleReportsBase":"报表中心 · Reporting center","findTitle.moduleReportsPrefix":"报表中心 · {name}","findTitle.modulePrint":"打印中心 · Print center","findTitle.moduleReservations":"预约等位中心 · Reservation & waitlist center","findTitle.moduleReservationsShort":"预约等位中心","inventory.sheetTitle":"库存管理中心·二级导航","inventory.sheetNav":"库存功能","inventory.centerTitle":"库存管理中心","placeholder.route":"当前路由：","placeholder.intro":"「{title}」页面占位 — 可在此接入列表、表单或图表。","placeholder.tabModule":"本模块（{title}）二级导航在上方 Tab 切换；侧栏仅保留该模块一级入口","placeholder.sidebarModule":"本模块（{title}）二级在左侧主导航：点击侧栏「{title}」展开/收起子列表后切换。","placeholder.sheetModule":"本模块（{title}）：点击侧栏该名称行打开右滑二级导航（与营销中心同交互），在滑层内切换本模块二级路由。","placeholder.designTokens":"设计令牌使用 Tailwind v4 @theme（OKLCH 语义色）","placeholder.chainTab":"标记为「连锁」的 Tab 为加盟/多店场景常用入口（配置见 navigation.ts 中 chainOnly）","placeholder.kpi.sales":"今日销售额","placeholder.kpi.orders":"待处理订单","placeholder.kpi.staff":"在岗员工","placeholder.navDoc":"侧栏一级顺序与主导航、滑层、Tab 的说明见占位区首条长列表；AI 智能助手仅顶栏入口。结构来源：docs/餐饮商家后台-导航与目录结构建议.md","tabPanel.fallbackAria":"主内容","moduleTabs.fallbackNav":"子页面","giftCards.embedTitle":"礼品卡工厂","inventory.iframeTitle":"WMS 效期分类","capital.newTab":"在新标签页打开如意财（EZ Capital）","capital.aria":"信贷中心：在新标签页打开 EZ Capital","placeholder.navDocLong":'侧栏一级顺序：品牌管理、门店管理、主页、团队管理、商品中心、订单中心、支付中心、外卖/来取、营销中心、营促销中心、会员中心、礼品卡中心、评价中心、前厅管理中心、后厨管理中心、预约等位中心、报表中心、财务中心、打印中心、消息中心、库存管理中心、硬件管理中心、权限管理中心、信贷中心、素材中心、系统设置。**品牌管理、门店管理、团队管理、订单中心、支付中心、外卖/来取、前厅管理中心、后厨管理中心、评价中心、财务中心、硬件管理中心、权限管理中心、素材管理中心**与**商品中心**、**营销中心**、**促销中心**、**会员中心**、**礼品卡中心**、**报表中心**、**打印中心**、**预约等位中心**、**库存管理中心**均为侧栏自右滑入的二级导航；**主页、消息中心、系统设置**的二级仍在主导航树内可折叠展开（一级行展开/收起，再点子项）。品牌/门店置顶；**商品中心**紧接**团队管理**之后。外卖/来取、前厅管理中心、后厨管理中心滑层内均为业务主入口与「设置」；营销中心滑层内为「营销管理」及子项「营销活动」「手动营销」，并含「设置」；商品中心滑层含商品管理、品牌菜单、门店管理及「设置」；库存管理中心滑层含效期管理、物料管理及「设置」；促销中心滑层内为「促销活动」与「设置」；会员中心滑层内为「卡券管理」（含「优惠券管理」「付费会员明细」「付费会员配置」）、「积分配置」与「设置」；礼品卡中心滑层内为「礼品卡工厂」与「设置」，其中礼品卡工厂在主内容区嵌入云端礼品卡工厂；评价中心滑层含「评价洞察」「评价明细」「评价统计」与「设置」；报表中心滑层内为「营业汇总」「销售汇总」（子项：订单、支付、折扣金额、加收）、「商品报表」（排名、商品潜力分析）、「员工报表」（员工概观、小费分配）、「走势详情」（分店概观、销售额比对）及「月度经营分析」；打印中心滑层内仅「打印装修」；预约等位中心滑层内为「Waitlist」「RSV」「History」「Section」「设置」，界面语言在顶栏全局。其它模块二级多在上方 Tab。 <strong class="text-card-foreground">AI智能助手</strong> 仅顶栏全局入口（<code class="font-mono text-xs">#/ai-assistant/chat</code>），非侧栏一级。结构来源：<strong class="text-card-foreground">docs/餐饮商家后台-导航与目录结构建议.md</strong>',"placeholder.navDocShort":"侧栏一级入口；多数模块二级在上方 Tab。","ai.welcomeHtml":'您好，我是 <strong class="text-card-foreground">MenuSifu 智能助手</strong>（单一智能体）。您可以用<strong class="text-card-foreground">文字或语音</strong>让我：检索全站模块与数据、说明或协助调整<strong class="text-card-foreground">配置与权限</strong>、做经营<strong class="text-card-foreground">分析摘要</strong>。下方为演示回复，接入大模型与业务 API 后即可真实执行（受策略与审批约束）。',"ai.contextNote":"同一对话上下文贯穿全程：无需切换「配置机器人」「分析机器人」——由本智能体统一理解意图并调用工具链（检索 / 配置 / 数仓 / 权限服务）。","ai.quickAria":"快捷示例指令","ai.quick.permissions":"权限说明","ai.quick.search":"全站查找","ai.quick.analysis":"数据分析","ai.quick.config":"改配示例","ai.link.permissions":"打开权限管理中心","ai.input.placeholder":"输入问题，Enter 发送；Shift+Enter 换行","ai.send":"发送","ai.voice":"语音输入","settings.overview.title":"硬件与终端","settings.overview.desc":'从系统设置总揽快速进入 <strong class="text-card-foreground">硬件管理中心 → 硬件</strong> 下各终端配置页（含 POS GO）；左侧主导航请展开 <strong class="text-card-foreground">硬件管理中心</strong> → <strong class="text-card-foreground">硬件</strong>。',"moduleSettings.intro":'以下按<strong class="text-card-foreground">功能场景</strong>归类展示本模块相关「功能设置」（来源：<code class="font-mono text-xs">docs/分析.md</code> 与 CSV 归类表）。点击项为占位，后续可对接具体配置页。',"moduleSettings.count":"共 {count} 项","moduleSettings.empty":'当前模块在归类表中尚无「功能设置」条目；可在 <code class="font-mono text-xs">docs/分析.md</code> 补充后重新运行 <code class="font-mono text-xs">node scripts/build-module-settings-catalog.mjs</code> 生成目录。',"moduleSettings.categoryAria":"{category} 设置项","moduleSettings.toggleAria":"{name}：是否展示","moduleSettings.toggleOn":"已开启展示","moduleSettings.toggleOff":"已关闭展示","moduleSettings.toggleOffLabel":"关闭","moduleSettings.toggleOnLabel":"开启","sheet.marketingMgmt":"营销管理","placeholder.bullet.deviceHw":'<strong class="text-card-foreground">硬件管理中心 · 硬件</strong>：在左侧主导航点击「硬件管理中心」打开<strong class="text-card-foreground">右滑二级导航</strong>后选择 <strong class="text-card-foreground">硬件</strong>；本区域左侧为硬件细项（支付、钱箱、路由器、POS、POS GO、KDS、叫号屏、打印机、电子秤、Kiosk、eMenu），交互同本后台其它三级侧栏。',"placeholder.bullet.tips":'<strong class="text-card-foreground">团队管理 · 小费管理</strong>：在左侧主导航点击「团队管理」打开<strong class="text-card-foreground">右滑二级导航</strong>后选择 <strong class="text-card-foreground">小费管理</strong>；本区域左侧为细项（小费分配、分配明细、分配规则），交互同本后台其它三级侧栏。',"placeholder.bullet.teamReports":'<strong class="text-card-foreground">团队管理 · 员工报表</strong>：在左侧主导航点击「团队管理」打开<strong class="text-card-foreground">右滑二级导航</strong>后选择 <strong class="text-card-foreground">员工报表</strong>；本区域左侧为细项（概览、小费、绩效、薪资），交互同小费管理。',"placeholder.bullet.teamScheduling":'<strong class="text-card-foreground">团队管理 · 排班与考勤</strong>：在左侧主导航点击「团队管理」打开<strong class="text-card-foreground">右滑二级导航</strong>后选择 <strong class="text-card-foreground">排班与考勤</strong>；本区域左侧为细项（考勤记录、加班规则），交互同小费管理。',"placeholder.bullet.brandProducts":'<strong class="text-card-foreground">商品管理</strong>：侧栏打开「<strong class="text-card-foreground">商品中心</strong>」滑层后，在「<strong class="text-card-foreground">商品管理</strong>」下为全部细项二级导航（商品、分类、规格组、口味组、做法组、加料组、套餐组、调味管理、标签管理、原料管理、原料分类、图片管理、配方管理）；调味/标签/配方分组可折叠，交互与主区左侧三级侧栏一致。配方内「原料管理」：<code class="font-mono text-xs">/brand-products/recipes/ingredients</code>。',"placeholder.bullet.brandMenu":'<strong class="text-card-foreground">品牌菜单</strong>：侧栏打开「<strong class="text-card-foreground">商品中心</strong>」滑层后选择「<strong class="text-card-foreground">品牌菜单</strong>」；本区域左侧为 <strong class="text-card-foreground">菜单、下发记录</strong> 三级导航。其它品牌菜单路由（如分组、渠道可见性）仍可通过链接进入，侧栏「菜单」项保持高亮。',"placeholder.bullet.storeMenu":'<strong class="text-card-foreground">门店管理</strong>：侧栏打开「<strong class="text-card-foreground">商品中心</strong>」滑层后选择「<strong class="text-card-foreground">门店管理</strong>」；本区域左侧为 <strong class="text-card-foreground">门店菜单、门店商品、门店调味、库存变更记录、打印设置、税种管理、配方列表</strong> 三级导航。其中 <strong class="text-card-foreground">税种管理</strong> 为可折叠分组，内含二级入口 <strong class="text-card-foreground">税种管理、商品税管理</strong>（一级行点击仅展开/收起，交互同左侧主导航可折叠模块）。',"placeholder.bullet.permissions":'<strong class="text-card-foreground">权限管理中心</strong>（RBAC）：侧栏点击「权限管理中心」打开右滑二级导航；在「<strong class="text-card-foreground">角色与功能权限</strong>」中配置各 <strong class="text-card-foreground">角色</strong> 可访问的后台模块与操作（查看、编辑、导出、审核等）；在「<strong class="text-card-foreground">员工授权</strong>」中指定 <strong class="text-card-foreground">哪位员工</strong> 拥有哪些角色。「权限总览」便于审计当前策略；「权限变更记录」留痕赋权调整。与「系统设置 → 账号与权限」可分工：本模块侧重可编排的权限矩阵与员工赋权，系统设置侧重账号安全与基础开关。',"placeholder.bullet.reservations":'<strong class="text-card-foreground">预约等位中心</strong>：点击侧栏「预约等位中心」打开与营销中心相同的右滑二级导航；滑层内为 <strong class="text-card-foreground">Waitlist、RSV、History、Section、设置</strong>；<strong class="text-card-foreground">界面语言</strong>在顶栏全局下拉（深浅色切换旁）。',"tertiaryNav.tips":"小费管理","tertiaryNav.teamReports":"员工报表","tertiaryNav.teamScheduling":"排班与考勤","ai.srInputLabel":"输入指令或问题","ai.tipVoiceLang":"提示：点击麦克风使用语音输入（随界面语言切换识别语言；Chrome / Edge 体验更佳）。","ai.speech.unsupported":"当前浏览器不支持语音识别，请直接输入文字，或使用 Chrome / Edge 重试。","ai.speech.micError":"未听清或未授权麦克风，请检查权限后重试。","ai.speech.startFailed":"无法启动语音识别，请改用文本输入。"},en:{"locale.label":"Interface language","locale.optionZh":"中文","locale.optionEn":"English","nav.backToPrimaryNav":"Back to main navigation","nav.secondarySuffix":" · Secondary navigation","nav.subNavQualifier":"Sub-navigation","nav.openSecondary":"Open secondary navigation: {name}","nav.sheetNavFunction":"{name} menu","nav.tertiarySuffix":" · Tertiary navigation","nav.subPagesAria":"{name} sub-pages","badge.chain":"Chain","shell.appName":"Miju Group","shell.appTagline":"MenuSifu merchant admin","shell.navTree":"Main navigation tree","shell.navAside":"Main navigation","header.aiOpenTitle":"Open AI assistant","header.aiShort":"AI","header.themeToggle":"Toggle dark mode","header.scopeGroup":"Scope: brand, region, store","header.scopeGroupTitle":"Filter data by brand, region, and store (demo; connect to org APIs)","header.scopeBrand":"Brand","header.scopeBrandAria":"Filter by brand","header.scopeAllBrands":"All brands","header.scopeRegion":"Region","header.scopeRegionAria":"Filter by region","header.scopeAllRegions":"All regions","header.scopeStore":"Store","header.scopeStoreAria":"Filter by store","header.scopeAllStores":"All stores","findTitle.aiChat":"Chat","findTitle.aiModule":"AI Assistant","findTitle.productCenterB":"Product center B","findTitle.productCenterBModule":"Product center B","findTitle.page":"Page","findTitle.inventoryChangeTitle":"Inventory change log","findTitle.inventoryChangeModule":"Inventory management center","findTitle.moduleTax":"Product center · Store management · Tax types","findTitle.moduleSeasoning":"Product center · Product management · Seasoning","findTitle.moduleTags":"Product center · Product management · Tags","findTitle.moduleRecipes":"Product center · Product management · Recipes","findTitle.moduleDmHw":"Hardware · Devices","findTitle.moduleTips":"Team · Tips","findTitle.moduleTeamReports":"Team · Staff reports","findTitle.moduleTeamScheduling":"Team · Scheduling & attendance","findTitle.moduleBrandProducts":"Product center · Product management","findTitle.moduleBrandMenu":"Product center · Brand menus","findTitle.moduleStoreProducts":"Product center · Store management","findTitle.moduleGiftCards":"Gift card center","findTitle.moduleMembers":"Member center","findTitle.moduleMembersCards":"Member center · Cards & coupons","findTitle.modulePoints":"Points configuration","findTitle.moduleReportsBase":"Reporting center","findTitle.moduleReportsPrefix":"Reporting center · {name}","findTitle.modulePrint":"Print center","findTitle.moduleReservations":"Reservation & waitlist center","findTitle.moduleReservationsShort":"Reservation & waitlist","inventory.sheetTitle":"Inventory management · Secondary navigation","inventory.sheetNav":"Inventory","inventory.centerTitle":"Inventory management center","placeholder.route":"Current route:","placeholder.intro":"“{title}” is a placeholder — add lists, forms, or charts here.","placeholder.tabModule":"Module ({title}): use the top tabs for secondary navigation; the sidebar keeps only the top-level entry.","placeholder.sidebarModule":"Module ({title}): expand or collapse the item in the sidebar, then choose a child link.","placeholder.sheetModule":"Module ({title}): click the row in the sidebar to open the slide-in secondary navigation (same pattern as Marketing), then pick a route inside the sheet.","placeholder.designTokens":"Design tokens use Tailwind v4 @theme (OKLCH semantic colors).","placeholder.chainTab":"Tabs marked “Chain” are common for franchise / multi-store setups (see chainOnly in navigation.ts).","placeholder.kpi.sales":"Today’s sales","placeholder.kpi.orders":"Pending orders","placeholder.kpi.staff":"Staff on duty","placeholder.navDoc":"See the first long bullet in this card for sidebar order, sheets, and tabs. AI assistant is header-only. Source: docs/餐饮商家后台-导航与目录结构建议.md","tabPanel.fallbackAria":"Main content","moduleTabs.fallbackNav":"Sub-pages","giftCards.embedTitle":"Gift card factory","inventory.iframeTitle":"WMS expiry categories","capital.newTab":"Open EZ Capital in a new tab","capital.aria":"Credit center: open EZ Capital in a new tab","placeholder.navDocLong":'Sidebar order: Brand, Stores, Home, Team, Product center, Orders, Payments, Delivery & pickup, Marketing, Promotions, Members, Gift cards, Reviews, Front of house, Kitchen, Reservations, Reports, Finance, Print, Messages, Inventory, Hardware, Permissions, Credit, Assets, Settings. **Brand, Stores, Team, Orders, Payments, Delivery & pickup, Front of house, Kitchen, Reviews, Finance, Hardware, Permissions, Assets**, plus **Product center**, **Marketing**, **Promotions**, **Members**, **Gift cards**, **Reports**, **Print**, **Reservations**, and **Inventory** use a slide-in secondary sheet; **Home**, **Messages**, and **Settings** keep collapsible children in the main tree. Delivery & pickup, front of house, and kitchen sheets: main entry plus Settings; Marketing sheet: campaigns, manual marketing, and Settings; Product center sheet: product management, brand menus, store management, and Settings; Inventory sheet: expiry, materials, and Settings; Promotions: campaigns & Settings; Members: cards & coupons, points & Settings; Gift cards: factory (embedded) & Settings; Reviews: insights, detail, stats & Settings; Reports: business summary, sales, products, staff, trends, monthly analysis; Print: decoration only; Reservations: Waitlist, RSV, History, Section, Settings; UI language is global in the header. Most other modules use top tabs. <strong class="text-card-foreground">AI Assistant</strong> is header-only (<code class="font-mono text-xs">#/ai-assistant/chat</code>). Source: docs/餐饮商家后台-导航与目录结构建议.md',"placeholder.navDocShort":"Sidebar entries; most modules use top tabs for level-2 navigation.","ai.welcomeHtml":'Hello, I am the <strong class="text-card-foreground">MenuSifu assistant</strong> (single agent). Use <strong class="text-card-foreground">text or voice</strong> to search modules and data, explain or help adjust <strong class="text-card-foreground">configuration & permissions</strong>, and run <strong class="text-card-foreground">analytics summaries</strong>. Replies below are demos; connect an LLM and business APIs for real actions (subject to policy and approvals).',"ai.contextNote":"One conversation context end-to-end—no separate “config bot” vs “analytics bot”; this agent routes intent to retrieval, config, data, and permission tools.","ai.quickAria":"Quick prompt examples","ai.quick.permissions":"RBAC help","ai.quick.search":"Site search","ai.quick.analysis":"Analytics","ai.quick.config":"Config example","ai.link.permissions":"Open access management","ai.input.placeholder":"Type a question; Enter to send; Shift+Enter for newline","ai.send":"Send","ai.voice":"Voice input","settings.overview.title":"Hardware & terminals","settings.overview.desc":'From this overview jump to <strong class="text-card-foreground">Hardware management → Hardware</strong> for each terminal (including POS GO). In the sidebar open <strong class="text-card-foreground">Hardware management</strong> → <strong class="text-card-foreground">Hardware</strong>.',"moduleSettings.intro":'Grouped by <strong class="text-card-foreground">functional scenario</strong> from the classification table (<code class="font-mono text-xs">docs/分析.md</code> / CSV). Rows are placeholders until wired to real config screens.',"moduleSettings.count":"{count} items","moduleSettings.empty":'No classified settings for this module yet. Add rows in <code class="font-mono text-xs">docs/分析.md</code>, then run <code class="font-mono text-xs">node scripts/build-module-settings-catalog.mjs</code>.',"moduleSettings.categoryAria":"Settings in {category}","moduleSettings.toggleAria":"{name}: show on screen","moduleSettings.toggleOn":"Shown","moduleSettings.toggleOff":"Hidden","moduleSettings.toggleOffLabel":"Off","moduleSettings.toggleOnLabel":"On","sheet.marketingMgmt":"Marketing management","placeholder.bullet.deviceHw":'<strong class="text-card-foreground">Hardware · Devices</strong>: open <strong class="text-card-foreground">Hardware management</strong> from the sidebar, then the <strong class="text-card-foreground">slide-in sheet</strong> and choose <strong class="text-card-foreground">Devices</strong>. The left column lists terminals (payments, cash drawer, router, POS, POS GO, KDS, queue display, printers, scales, Kiosk, eMenu)—same tertiary pattern as elsewhere.',"placeholder.bullet.tips":'<strong class="text-card-foreground">Team · Tips</strong>: open Team from the sidebar, use the sheet, pick <strong class="text-card-foreground">Tips</strong>. Left column covers allocation, details, and rules.',"placeholder.bullet.teamReports":'<strong class="text-card-foreground">Team · Staff reports</strong>: open Team → <strong class="text-card-foreground">Staff reports</strong> from the sheet. Left column: overview, tips, performance, payroll.',"placeholder.bullet.teamScheduling":'<strong class="text-card-foreground">Team · Scheduling & attendance</strong>: open Team → <strong class="text-card-foreground">Scheduling</strong> from the sheet. Left column: attendance log and overtime rules.',"placeholder.bullet.brandProducts":'<strong class="text-card-foreground">Brand products</strong>: open the <strong class="text-card-foreground">Product center</strong> sheet, then <strong class="text-card-foreground">Product management</strong> for the full secondary list (products, categories, spec/flavor/prep/add-on/combo groups, seasoning, tags, ingredients, images, recipes). Collapsible groups match the old tertiary sidebar. You can also enter via <strong class="text-card-foreground">Product center A → Brand products</strong>. Ingredients under recipes: <code class="font-mono text-xs">/brand-products/recipes/ingredients</code>.',"placeholder.bullet.brandMenu":'<strong class="text-card-foreground">Brand menus</strong>: expand <strong class="text-card-foreground">Product center A → Brand menus</strong>. Left column: menus and distribution log; other routes (groups, channel visibility) still work and keep “Menus” highlighted.',"placeholder.bullet.storeMenu":'<strong class="text-card-foreground">Store products</strong>: expand <strong class="text-card-foreground">Product center A → Store products</strong>. Left column: store menu, store products, seasoning, inventory change log, print settings, tax types, recipe list. <strong class="text-card-foreground">Tax types</strong> is a collapsible group with settings and product tax entries.',"placeholder.bullet.permissions":'<strong class="text-card-foreground">Access management (RBAC)</strong>: open the sheet from the sidebar. Configure <strong class="text-card-foreground">roles & permissions</strong>, assign <strong class="text-card-foreground">roles to staff</strong>, review the matrix, and audit changes. Complements <strong class="text-card-foreground">Settings → Accounts & permissions</strong> for security basics.',"placeholder.bullet.reservations":'<strong class="text-card-foreground">Reservations & waitlist</strong>: same slide-in pattern as Marketing. Sheet entries: Waitlist, RSV, History, Section, Settings. <strong class="text-card-foreground">UI language</strong> is global in the header.',"tertiaryNav.tips":"Tips","tertiaryNav.teamReports":"Staff reports","tertiaryNav.teamScheduling":"Scheduling & attendance","ai.srInputLabel":"Prompt or question","ai.tipVoiceLang":"Tip: use the microphone for voice input (recognition language follows the UI language; Chrome / Edge recommended).","ai.speech.unsupported":"Speech recognition is not available in this browser. Type your question or try Chrome / Edge.","ai.speech.micError":"Could not hear you or microphone permission was denied. Check permissions and try again.","ai.speech.startFailed":"Could not start speech recognition. Please type instead."}};function Pe(){try{const e=localStorage.getItem(Vn);if(e==="en")return"en";if(e==="zh")return"zh"}catch{}return"zh"}function wp(e){try{localStorage.setItem(Vn,e)}catch{}}function zn(e){document.documentElement.lang=e==="en"?"en":"zh-Hans",document.documentElement.setAttribute("data-ui-locale",e)}function b(e,t,r=Pe()){return r==="en"&&t!=null&&String(t).trim()!==""?t:e}function kp(e){let t=e.trim();for(let r=0;r<8;r++){const s=t;if(t=t.replace(/\s+Management\s+Center$/i,"").trim(),t=t.replace(/\s+Center$/i,"").trim(),t=t.replace(/\s+Management$/i,"").trim(),t===s)break}return t.replace(/\s{2,}/g," ").trim()}function R(e){return Pe()!=="en"?e.title:kp(e.titleEn)}function u(e){return Pe()==="en"?oi.en[e]:oi.zh[e]}function L(e,t){let r=String(u(e));for(const[s,i]of Object.entries(t))r=r.replace(new RegExp(`\\{${s}\\}`,"g"),i);return r}function bs(e){return Pe()==="en"?e.titleEn:`${e.title} · ${e.titleEn}`}function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function $p(e,t){return`${bs(e)} — ${b(t.title,t.titleEn)}`}function je(e){const t=d(`${b(e.title,e.titleEn)}${u("nav.secondarySuffix")}`),r=d(L("nav.sheetNavFunction",{name:b(e.title,e.titleEn)}));return{dialog:t,navFunc:r}}function Ep(e){const t=e.trim();return t?/权限|角色|RBAC|员工授权/i.test(t)?"【演示】可说明权限矩阵、员工与角色绑定，并在对接后端后协助跳转「权限管理中心」与预填变更。也可回答例如：谁能改价、店长默认可见哪些报表。":/搜索|查找|搜|哪里有|在哪/i.test(t)?"【演示】全站检索由同一智能体完成：可定位侧栏模块、路由、帮助文档与业务对象（订单、门店、商品等）。接入索引与向量库后支持口语化问法。":/分析|报表|趋势|统计|营业额|收入/i.test(t)?"【演示】可按您描述的时间、门店、品类做对比与摘要；接入数仓后可拉取真实指标、生成图表与下钻链接。":/配置|设置|修改|改|打开|关闭/i.test(t)?"【演示】配置类意图会解析为「目标模块 + 动作」，走策略校验与（可选）人工审批后再执行。当前壳层仅模拟确认，不写回生产。":"【演示】单一智能体持续本对话上下文，接入模型后可执行查数、改配、导表与权限调整（受租户策略约束）。请补充门店、时间范围或要操作的对象。":""}const Qn='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',ie={home:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',orders:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',receipt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',floorPlan:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>',kitchenKds:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13h12"/><path d="M6 9h12"/><path d="M9 5h6v4H9z"/><path d="M8 21h8v-4H8z"/></svg>',queueCall:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',reservations:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',waitlist:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>',inventory:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',promo:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><path d="M11.5 11.5 6 17l-4 1 1-4 5.5-5.5"/></svg>',marketing:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',members:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',reviews:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>',gift:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',team:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',reports:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',capital:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>',financeCenter:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',notifications:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',printTemplate:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>',deviceManagement:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="5" x="4" y="4" rx="1"/><rect width="16" height="5" x="4" y="15" rx="1"/><path d="M8 8h.01"/><path d="M8 19h.01"/><path d="M12 8h.01"/><path d="M12 19h.01"/><path d="M16 8h.01"/><path d="M16 19h.01"/></svg>',brandProducts:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l6.88-6.88a1 1 0 0 0 0-1.41L12 2Z"/><path d="M7 7h.01"/></svg>',brandMenu:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h4"/></svg>',brandMgmt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/></svg>',storeMgmt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><path d="M17 14h1"/><path d="M17 18h1"/></svg>',permissionMgmt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',assetCenter:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',configCenter:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>'},Ye="tertiary-inline-subnav-scroll min-h-0 max-h-[min(52dvh,26rem)] overflow-y-auto overscroll-y-contain sm:max-h-full sm:self-stretch",Np="https://cloud.menusifucloudqa.com/factory/giftcardb";function Dp(e){return e==="/gift-cards/cards"||e.startsWith("/gift-cards/cards/")}function qp(){const e=d(Np);return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <p class="sr-only">内嵌云端礼品卡工厂。若内容空白，请确认 cloud.menusifucloudqa.com 允许被本后台来源嵌入。</p>
      <iframe
        title="${d(u("giftCards.embedTitle"))}"
        class="block h-full min-h-[22rem] w-full flex-1 border-0 sm:min-h-0"
        src="${e}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}const Pp="https://www.ezcapital.com/zh",Mp="https://wms.menusifuchina.com/platform-expiration-category",Ip="./Configuration%20center/kiosk-screensaver.html?embedded=1",Kp="./Configuration%20center/material.html?embedded=1",Op="./Configuration%20center/order-limit.html?embedded=1",_p="./TipOut/index.html?embedded=1",Ap="./TipOut/employees.html?embedded=1",Rp="./TipOut/index.html?embedded=1",Cp="./TipOut/detail.html?embedded=1",Lp="./TipOut/rules.html?embedded=1",Bp="./TipOut/payroll.html?embedded=1";function Hp(e){return e==="/operations/inventory-ordering/expiry"||e.startsWith("/operations/inventory-ordering/expiry/")}function Fp(e){return e==="/marketing/screensaver"||e.startsWith("/marketing/screensaver/")}function Gp(e){return e==="/asset-center/materials"||e.startsWith("/asset-center/materials/")}function jp(e){return e==="/permissions/order-limit"||e.startsWith("/permissions/order-limit/")}function Up(e){return e==="/reports/staff/tips-allocation"||e.startsWith("/reports/staff/tips-allocation/")}function Wp(e){return e==="/team/roles-employees"||e.startsWith("/team/roles-employees/")}function Vp(e){return e==="/team/tips"||e.startsWith("/team/tips/")}function zp(e){return e==="/team/payroll-report"||e.startsWith("/team/payroll-report/")}function Qp(e){return e==="/team/tips/rules"||e.startsWith("/team/tips/rules/")?Lp:e==="/team/tips/details"||e.startsWith("/team/tips/details/")?Cp:Rp}function Ne(e,t){const r=P.find(s=>s.id===e);return(r==null?void 0:r.defaultChildPath)??t}function Yp(){return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <iframe
        title="${d(u("inventory.iframeTitle"))}"
        class="block h-full min-h-[22rem] w-full flex-1 border-0 sm:min-h-0"
        src="${Mp}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}function Xp(){return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <iframe
        title="营销中心屏保功能"
        class="block h-full w-full flex-1 border-0"
        src="${Ip}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}function Zp(){return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <iframe
        title="素材中心图片素材功能"
        class="block h-full w-full flex-1 border-0"
        src="${Kp}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}function Jp(){return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <iframe
        title="权限管理下单限制配置"
        class="block h-full w-full flex-1 border-0"
        src="${Op}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}function em(){return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <iframe
        title="报表中心小费分配"
        class="block h-full w-full flex-1 border-0"
        src="${_p}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}function tm(){return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <iframe
        title="团队管理角色与员工"
        class="block h-full w-full flex-1 border-0"
        src="${Ap}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}function rm(e){return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <iframe
        title="团队管理小费管理"
        class="block h-full w-full flex-1 border-0"
        src="${Qp(e)}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}function sm(){return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <iframe
        title="团队管理报税报表"
        class="block h-full w-full flex-1 border-0"
        src="${Bp}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}function im(e){return!e||e.subNavPlacement==="sidebar"||e.subNavPlacement==="sheet"||e.id==="inventory-ordering"||e.id==="product-center-main"||e.id==="marketing"||e.id==="promotions"||e.id==="members"||e.id==="gift-cards"||e.id==="reports-finance"||e.id==="print-templates"||e.id==="reservations"?!1:e.children.length>1}const hr="sidebar-inventory-secondary-open",vr="sidebar-product-center-main-secondary-open",yr="sidebar-marketing-secondary-open",xr="sidebar-promotions-secondary-open",Sr="sidebar-members-secondary-open",Tr="sidebar-gift-cards-secondary-open",wr="sidebar-reports-secondary-open",kr="sidebar-print-secondary-open",$r="sidebar-reservations-secondary-open",Yn="pcm-sheet-brand-products-mgmt-expanded",Xn="pcm-sheet-brand-menu-expanded",Zn="pcm-sheet-store-menu-expanded",Jn="marketing-sheet-mgmt-expanded";let ai="",li="",di="",ui="",ci="",pi="",mi="",gi="",fi="";const hs="sidebar-nav-module-sheets-open-json-v1";let bi={};const we="transition-[transform,opacity] duration-[1000ms] ease-in-out will-change-[transform,opacity]",se="bg-sidebar-active/12 text-sidebar-foreground dark:bg-white/10 dark:text-white",Er="bg-sidebar-active/12 font-medium text-sidebar-foreground dark:bg-white/10 dark:text-white",F="text-sidebar-muted hover:bg-sidebar-foreground/[0.06] dark:hover:bg-white/5 hover:text-sidebar-foreground",Se="border-b border-sidebar-foreground/10 dark:border-white/10",ke="border-l border-sidebar-foreground/10 dark:border-white/10",xt="border-t border-sidebar-foreground/10 dark:border-white/10",Te="text-sidebar-foreground dark:text-white",$e="text-sidebar-muted transition-colors hover:bg-sidebar-foreground/[0.06] dark:hover:bg-white/5 hover:text-sidebar-foreground",qt="text-sidebar-foreground dark:text-white transition-colors hover:bg-sidebar-foreground/[0.06] dark:hover:bg-white/5",Ee="shadow-[6px_0_28px_rgba(15,23,42,0.07)] dark:shadow-[6px_0_32px_rgba(0,0,0,0.45)]";function vs(){try{const e=sessionStorage.getItem(hs);if(!e)return{};const t=JSON.parse(e);if(!t||typeof t!="object"||Array.isArray(t))return{};const r={};for(const[s,i]of Object.entries(t))i===!0&&(r[s]=!0);return r}catch{return{}}}function Nr(e){return vs()[e]===!0}function Pt(e,t){const r={...vs()};t?r[e]=!0:delete r[e];try{sessionStorage.setItem(hs,JSON.stringify(r))}catch{}}function me(){try{sessionStorage.removeItem(hs)}catch{}}let hi=!1;function nm(){hi||(hi=!0,window.addEventListener("keydown",e=>{if(e.key!=="Escape")return;let t=!1;ys()&&(z(!1),t=!0),xs()&&(Q(!1),t=!0),Ss()&&(Y(!1),t=!0),Ts()&&(X(!1),t=!0),ws()&&(Z(!1),t=!0),ks()&&(J(!1),t=!0),$s()&&(ee(!1),t=!0),Es()&&(te(!1),t=!0),Ns()&&(re(!1),t=!0),Object.keys(vs()).length>0&&(me(),t=!0),t&&q()}))}function vi(e){return e==="/operations/inventory-ordering"||e.startsWith("/operations/inventory-ordering/")}function ys(){try{return sessionStorage.getItem(hr)==="true"}catch{return!1}}function z(e){try{e?sessionStorage.setItem(hr,"true"):sessionStorage.removeItem(hr)}catch{}}function om(){const e=P.find(t=>t.id==="inventory-ordering");return(e==null?void 0:e.children)??[]}function Dr(e){return!!(e==="/product-center-main"||e.startsWith("/product-center-main/")||e==="/brand-products"||e.startsWith("/brand-products/")||e==="/brand-menu"||e.startsWith("/brand-menu/")||e==="/menu"||e.startsWith("/menu/"))}function xs(){try{return sessionStorage.getItem(vr)==="true"}catch{return!1}}function Q(e){try{e?sessionStorage.setItem(vr,"true"):sessionStorage.removeItem(vr)}catch{}}function qr(e){return e==="/marketing"||e.startsWith("/marketing/")}function Ss(){try{return sessionStorage.getItem(yr)==="true"}catch{return!1}}function Y(e){try{e?sessionStorage.setItem(yr,"true"):sessionStorage.removeItem(yr)}catch{}}function Pr(e){return e==="/promotions"||e.startsWith("/promotions/")}function Ts(){try{return sessionStorage.getItem(xr)==="true"}catch{return!1}}function X(e){try{e?sessionStorage.setItem(xr,"true"):sessionStorage.removeItem(xr)}catch{}}function Mr(e){return e==="/members"||e.startsWith("/members/")}function ws(){try{return sessionStorage.getItem(Sr)==="true"}catch{return!1}}function Z(e){try{e?sessionStorage.setItem(Sr,"true"):sessionStorage.removeItem(Sr)}catch{}}function Ir(e){return e==="/gift-cards"||e.startsWith("/gift-cards/")}function ks(){try{return sessionStorage.getItem(Tr)==="true"}catch{return!1}}function J(e){try{e?sessionStorage.setItem(Tr,"true"):sessionStorage.removeItem(Tr)}catch{}}function $s(){try{return sessionStorage.getItem(wr)==="true"}catch{return!1}}function ee(e){try{e?sessionStorage.setItem(wr,"true"):sessionStorage.removeItem(wr)}catch{}}function Kr(e){return e==="/print-templates"||e.startsWith("/print-templates/")}function Es(){try{return sessionStorage.getItem(kr)==="true"}catch{return!1}}function te(e){try{e?sessionStorage.setItem(kr,"true"):sessionStorage.removeItem(kr)}catch{}}function Ns(){try{return sessionStorage.getItem($r)==="true"}catch{return!1}}function re(e){try{e?sessionStorage.setItem($r,"true"):sessionStorage.removeItem($r)}catch{}}const dt='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';function U(e,t,r,s,i){const n=r(e),o=(i==null?void 0:i.brandProductSecondLevel)===!0,a=o?"space-y-1 border-l-2 border-sidebar-active/40 pl-2.5":"space-y-0.5",l=o?"pl-0.5 pr-2.5":"px-2.5",p=o?"mt-1.5 space-y-0.5 border-l-2 border-sidebar-foreground/20 dark:border-white/25 ml-2 pl-3":"mt-1 space-y-0.5 border-l border-sidebar-foreground/15 dark:border-white/15 ml-3 pl-2",h=c=>{const f=c.sidebarChildren;if(f!=null&&f.length){const v=c.activePrefix??c.path,$=e===v||e.startsWith(`${v}/`),_=Ds(c.id,e,$),C=c.path===n,m=`pcm-sheet-tertiary-children-${c.id}`,E=s(e,c),D=`${b(c.title,c.titleEn)}${u("nav.tertiarySuffix")}`.replace(/"/g,"&quot;");return`
        <li class="mb-1">
          <button type="button"
            data-tertiary-sidebar-toggle="${c.id}"
            class="flex w-full min-h-11 items-center gap-2 rounded-lg ${l} py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${C?se:F}"
            aria-expanded="${_}"
            aria-controls="${m}"
          >
            <span class="min-w-0 flex-1 truncate">${b(c.title,c.titleEn)}</span>
            <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${_?"":"-rotate-90"}">${dt}</span>
          </button>
          <ul id="${m}" class="${p} ${_?"":"hidden"}" role="list" aria-label="${D}" ${_?"":'aria-hidden="true"'}>
            ${f.map(V=>{const B=V.path===E;return`
            <li>
              <a href="#${V.path}"
                class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-xs sm:text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${B?Er:F}"
                ${B?'aria-current="page"':""}
                tabindex="${_?"0":"-1"}"
              >${b(V.title,V.titleEn)}</a>
            </li>`}).join("")}
          </ul>
        </li>`}const x=c.path===n;return`
        <li class="mb-0.5">
          <a href="#${c.path}"
            class="flex min-h-9 items-center rounded-md ${l} py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${x?Er:F}"
            ${x?'aria-current="page"':""}
          >${b(c.title,c.titleEn)}</a>
        </li>`},S=`<ul class="${a}" role="list">${t.map(h).join("")}</ul>`;return o?`<nav class="min-w-0" aria-label="${((i==null?void 0:i.sheetGroupedSubnavAriaLabel)??"商品管理 · 二级导航").replace(/"/g,"&quot;")}">${S}</nav>`:S}function ue(e,t){return""}function am(e,t){const r=P.find(C=>C.id==="product-center-main"),s=r.children,i=b(s[0].title,s[0].titleEn),n=b(s[1].title,s[1].titleEn),o=b(s[2].title,s[2].titleEn),a=d(`${b(r.title,r.titleEn)}${u("nav.secondarySuffix")}`),l=d(L("nav.sheetNavFunction",{name:b(r.title,r.titleEn)})),p=`${n} · ${u("nav.subNavQualifier")}`,h=`${o} · ${u("nav.subNavQualifier")}`,S=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",w='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',c=no(e),f=oo(e),x=ao(e),v="pt-0",$=`${xt} pt-3`,_=`
        <div class="space-y-4">
          <section class="${v}">
            <button
              type="button"
              data-pcm-sheet-bp-mgmt-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${qt} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${c}"
              aria-controls="pcm-sheet-bp-mgmt-children"
            >
              <span class="min-w-0 flex-1 truncate">${i}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${c?"":"-rotate-90"}">${dt}</span>
            </button>
            <div id="pcm-sheet-bp-mgmt-children" class="${c?"":"hidden"}" ${c?"":'aria-hidden="true"'}>
              ${U(e,Lr,Ho,Pm,{brandProductSecondLevel:!0})}
            </div>
          </section>
          <section class="${$}">
            <button
              type="button"
              data-pcm-sheet-brand-menu-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${qt} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${f}"
              aria-controls="pcm-sheet-brand-menu-children"
            >
              <span class="min-w-0 flex-1 truncate">${n}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${f?"":"-rotate-90"}">${dt}</span>
            </button>
            <div id="pcm-sheet-brand-menu-children" class="${f?"":"hidden"}" ${f?"":'aria-hidden="true"'}>
              ${U(e,Br,Ii,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:p})}
            </div>
          </section>
          <section class="${$}">
            <button
              type="button"
              data-pcm-sheet-store-menu-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${qt} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${x}"
              aria-controls="pcm-sheet-store-menu-children"
            >
              <span class="min-w-0 flex-1 truncate">${o}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${x?"":"-rotate-90"}">${dt}</span>
            </button>
            <div id="pcm-sheet-store-menu-children" class="${x?"":"hidden"}" ${x?"":'aria-hidden="true"'}>
              ${U(e,Bt,Ki,uo,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:h})}
            </div>
          </section>
          <section class="${$}">
            ${U(e,Io,Ko,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:`${b(r.title,r.titleEn)} · ${u("nav.subNavQualifier")}`})}
          </section>
        </div>`;return`
    <div
      id="product-center-main-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${S}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${a}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-product-center-main-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${w}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${b(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${l}">
        ${_}
      </nav>
    </div>`}function lm(e,t){const r=P.find(w=>w.id==="marketing"),{dialog:s,navFunc:i}=je(r),n=u("sheet.marketingMgmt"),o=`${n} · ${u("nav.subNavQualifier")}`,a=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",l='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',p=lo(e),S=`
        <div class="space-y-4">
          <section class="pt-0">
            <button
              type="button"
              data-marketing-sheet-mgmt-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${qt} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${p}"
              aria-controls="marketing-sheet-mgmt-children"
            >
              <span class="min-w-0 flex-1 truncate">${n}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${p?"":"-rotate-90"}">${dt}</span>
            </button>
            <div id="marketing-sheet-mgmt-children" class="${p?"":"hidden"}" ${p?"":'aria-hidden="true"'}>
              ${U(e,qi,Go,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:o})}
            </div>
          </section>
          <section class="${xt} pt-3">
            ${U(e,Oo,_o,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:`${b(r.title,r.titleEn)} · ${u("nav.subNavQualifier")}`})}
          </section>
        </div>`;return`
    <div
      id="marketing-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${a}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${s}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-marketing-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${l}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${b(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${S}
      </nav>
    </div>`}function dm(e,t){const r=P.find(h=>h.id==="promotions"),{dialog:s,navFunc:i}=je(r),n=nr[0],o=b(n.title,n.titleEn),a=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",l='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',p=`
        <div class="space-y-4">
          <section class="pt-0">
            ${U(e,nr,jo,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:o})}
          </section>
          <section class="${xt} pt-3">
            ${U(e,Ao,Ro,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:`${b(r.title,r.titleEn)} · ${u("nav.subNavQualifier")}`})}
          </section>
        </div>`;return`
    <div
      id="promotions-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${a}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${s}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-promotions-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${l}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${b(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${p}
      </nav>
    </div>`}function um(e,t){const r=P.find(p=>p.id==="members"),{dialog:s,navFunc:i}=je(r),n=`${b(r.title,r.titleEn)}${u("nav.secondarySuffix")}`,o=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",a='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',l=`
        <div class="space-y-4">
          <section class="pt-0">
            ${U(e,ut,Uo,Zo,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:n})}
          </section>
          <section class="${xt} pt-3">
            ${U(e,Co,Lo,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:`${b(r.title,r.titleEn)} · ${u("nav.subNavQualifier")}`})}
          </section>
        </div>`;return`
    <div
      id="members-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${o}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${s}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-members-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${a}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${b(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${l}
      </nav>
    </div>`}function cm(e,t){const r=P.find(p=>p.id==="gift-cards"),{dialog:s,navFunc:i}=je(r),n=`${b(r.title,r.titleEn)} · ${u("nav.subNavQualifier")}`,o=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",a='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',l=`
        <div class="space-y-4">
          <section class="pt-0">
            ${U(e,Pi,Ms,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:n})}
          </section>
          <section class="${xt} pt-3">
            ${U(e,Mi,Ms,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:`${b(r.title,r.titleEn)} · ${u("nav.subNavQualifier")}`})}
          </section>
        </div>`;return`
    <div
      id="gift-cards-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${o}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${s}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-gift-cards-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${a}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${b(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${l}
      </nav>
    </div>`}function pm(e,t){const r=P.find(p=>p.id==="reports-finance"),{dialog:s,navFunc:i}=je(r),n=`${b(r.title,r.titleEn)}${u("nav.secondarySuffix")}`,o=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",a='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',l=`
        <div class="space-y-4">
          <section class="pt-0">
            ${U(e,Lt,Yo,Xo,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:n})}
          </section>
        </div>`;return`
    <div
      id="reports-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${o}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${s}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-reports-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${a}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${b(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${l}
      </nav>
    </div>`}function mm(e,t){const r=P.find(h=>h.id==="print-templates"),{dialog:s,navFunc:i}=je(r),n=Je[0],o=b(n.title,n.titleEn),a=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",l='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',p=`
        <div class="space-y-4">
          <section class="pt-0">
            ${U(e,Je,Wo,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:o})}
          </section>
        </div>`;return`
    <div
      id="print-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${a}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${s}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-print-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${l}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${b(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${p}
      </nav>
    </div>`}function gm(e,t){const r=P.find(p=>p.id==="reservations"),{dialog:s,navFunc:i}=je(r),n=`${b(r.title,r.titleEn)} · ${u("nav.subNavQualifier")}`,o=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",a='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',l=`
        <div class="space-y-4">
          <section class="pt-0">
            ${U(e,vt,Vo,ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:n})}
          </section>
        </div>`;return`
    <div
      id="reservations-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${o}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${s}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-reservations-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${a}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${b(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${l}
      </nav>
    </div>`}function fm(e,t,r){const{dialog:s,navFunc:i}=je(e),n=`${b(e.title,e.titleEn)} · ${u("nav.subNavQualifier")}`,o=r?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",a='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',l=Fr(e),p=`
        <div class="space-y-4">
          <section class="pt-0">
            ${U(t,l,S=>Bo(S,e),ue,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:n})}
          </section>
        </div>`;return`
    <div
      id="${`${e.id}-secondary-sheet`}"
      class="absolute inset-0 z-[31] flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${o}"
      ${r?"":"inert"}
      aria-hidden="${r?"false":"true"}"
      role="dialog"
      aria-modal="${r?"true":"false"}"
      aria-label="${s}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-nav-module-sheet-secondary-close="${e.id}"
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${a}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${d(b(e.title,e.titleEn))}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${p}
      </nav>
    </div>`}function bm(e,t){const r=P.find(p=>p.id==="inventory-ordering"),s=d(u("inventory.sheetTitle")),i=d(u("inventory.sheetNav")),n=om(),o=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",a='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',l=n.map(p=>{const h=e===p.path||e.startsWith(`${p.path}/`);return`
        <li>
          <a
            href="#${p.path}"
            class="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${h?se:F}"
            ${h?'aria-current="page"':""}
          >
            <span class="min-w-0 flex-1 truncate">${b(p.title,p.titleEn)}</span>
          </a>
        </li>`}).join("");return`
    <div
      id="inventory-secondary-sheet"
      class="absolute inset-0 z-30 flex flex-col ${ke} bg-sidebar ${Ee} ${we} ${o}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${s}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${Se} px-2">
        <button
          type="button"
          data-inventory-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${$e} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${d(u("nav.backToPrimaryNav"))}"
        >
          ${a}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Te}">${b(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        <ul class="space-y-1" role="list">${l}</ul>
      </nav>
    </div>`}function hm(e){var w;if(e==="/ai-assistant/chat"||e.startsWith("/ai-assistant/"))return{title:u("findTitle.aiChat"),module:u("findTitle.aiModule")};if(e.startsWith("/gift-cards")){const c=P.find(v=>v.id==="gift-cards"),f=[...Hr].sort((v,$)=>$.path.length-v.path.length);let x;for(const v of f)if(e===v.path||e.startsWith(`${v.path}/`)){x=v;break}return{title:x?b(x.title,x.titleEn):b(c.title,c.titleEn),module:u("findTitle.moduleGiftCards")}}if(e.startsWith("/members")){const c=P.find(v=>v.id==="members"),f=ut.find(v=>v.id==="mem-card-mgmt");if(f!=null&&f.sidebarChildren){const v=[...f.sidebarChildren].sort(($,_)=>_.path.length-$.path.length);for(const $ of v)if(e===$.path||e.startsWith(`${$.path}/`))return{title:b($.title,$.titleEn),module:u("findTitle.moduleMembersCards")}}const x=ut.find(v=>v.id==="mem-points");return e==="/members/points"||e.startsWith("/members/points/")?{title:b((x==null?void 0:x.title)??"积分配置",x==null?void 0:x.titleEn),module:u("findTitle.moduleMembers")}:{title:b(c.title,c.titleEn),module:u("findTitle.moduleMembers")}}if(pt(e)){for(const f of Lt){if((w=f.sidebarChildren)!=null&&w.length){const x=[...f.sidebarChildren].sort((v,$)=>$.path.length-v.path.length);for(const v of x)if(e===v.path||e.startsWith(`${v.path}/`))return{title:b(v.title,v.titleEn),module:L("findTitle.moduleReportsPrefix",{name:b(f.title,f.titleEn)})}}if(e===f.path||e.startsWith(`${f.path}/`))return{title:b(f.title,f.titleEn),module:u("findTitle.moduleReportsBase")}}const c=P.find(f=>f.id==="reports-finance");return{title:b((c==null?void 0:c.title)??"报表中心",c==null?void 0:c.titleEn),module:u("findTitle.moduleReportsBase")}}if(Qo(e)){const c=[...Je].sort((v,$)=>$.path.length-v.path.length);let f;for(const v of c)if(e===v.path||e.startsWith(`${v.path}/`)){f=v;break}const x=P.find(v=>v.id==="print-templates");return{title:f?b(f.title,f.titleEn):b(x.title,x.titleEn),module:u("findTitle.modulePrint")}}if(zo(e)){const c=[...vt].sort((v,$)=>$.path.length-v.path.length);let f;for(const v of c)if(e===v.path||e.startsWith(`${v.path}/`)){f=v;break}const x=P.find(v=>v.id==="reservations");return{title:f?b(f.title,f.titleEn):b(x.title,x.titleEn),module:u("findTitle.moduleReservations")}}const s=_i(e);if(s){const c=Oi.find(f=>f.path===s);if(c)return{title:b(c.title,c.titleEn),module:u("findTitle.moduleTax")}}const i=Ai(e);if(i){const c=Gr.find(f=>f.path===i);if(c)return{title:b(c.title,c.titleEn),module:u("findTitle.moduleSeasoning")}}const n=Ri(e);if(n){const c=jr.find(f=>f.path===n);if(c)return{title:b(c.title,c.titleEn),module:u("findTitle.moduleTags")}}const o=Ci(e);if(o){const c=Ur.find(f=>f.path===o);if(c)return{title:b(c.title,c.titleEn),module:u("findTitle.moduleRecipes")}}const a=_r(e);if(a){const c=ht.find(f=>f.path===a);if(c)return{title:b(c.title,c.titleEn),module:u("findTitle.moduleDmHw")}}const l=Ar(e);if(l){const c=At.find(f=>f.path===l);if(c)return{title:b(c.title,c.titleEn),module:u("findTitle.moduleTips")}}const p=Rr(e);if(p){const c=Rt.find(f=>f.path===p);if(c)return{title:b(c.title,c.titleEn),module:u("findTitle.moduleTeamReports")}}const h=Cr(e);if(h){const c=Ct.find(f=>f.path===h);if(c)return{title:b(c.title,c.titleEn),module:u("findTitle.moduleTeamScheduling")}}if(e==="/operations/inventory-ordering/inventory-change-log"||e.startsWith("/operations/inventory-ordering/inventory-change-log/"))return{title:u("findTitle.inventoryChangeTitle"),module:u("findTitle.inventoryChangeModule")};const S=[...So].sort((c,f)=>f.path.length-c.path.length);for(const c of S)if(e===c.path||e.startsWith(`${c.path}/`)){const f=e.startsWith("/brand-products")||e==="/brand-products"?u("findTitle.moduleBrandProducts"):e.startsWith("/brand-menu")||e==="/brand-menu"?u("findTitle.moduleBrandMenu"):u("findTitle.moduleStoreProducts");return{title:b(c.title,c.titleEn),module:f}}for(const c of P){if(c.path===e)return{title:b(c.title,c.titleEn),module:bs(c)};const f=[...c.children].sort((x,v)=>v.path.length-x.path.length);for(const x of f)if(e===x.path||e.startsWith(`${x.path}/`))return{title:b(x.title,x.titleEn),module:$p(c,x)}}return{title:u("findTitle.page"),module:void 0}}function Ce(e,t){var s;return((s=t.matchPrefixes)!=null&&s.length?t.matchPrefixes:[t.path]).some(i=>e===i||e.startsWith(`${i}/`))}function vm(e){for(const t of P){if(t.subNavPlacement!=="sheet")continue;const r=bi[t.id];r!==void 0&&r!==e&&!Ce(e,t)&&Pt(t.id,!1),bi[t.id]=e}}function ym(e){var s;let t,r=-1;for(const i of P){const n=(s=i.matchPrefixes)!=null&&s.length?i.matchPrefixes:[i.path];for(const o of n)(e===o||e.startsWith(`${o}/`))&&o.length>r&&(r=o.length,t=i)}return t}function k(e){const r=`#${e.startsWith("/")?e:`/${e}`}`;if(location.hash===r)return;const s=`${location.pathname}${location.search}${r}`;try{history.replaceState(history.state,"",s)}catch{location.replace(r)}}const eo="sidebar-primary-nav-scrollTop",Xe={brand:"header-scope-filter-brand",region:"header-scope-filter-region",store:"header-scope-filter-store"};function xm(){const e=Pe(),t=d(u("locale.label"));return`<div class="flex shrink-0 items-center">
      <label for="global-ui-locale" class="sr-only">${t}</label>
      <select
        id="global-ui-locale"
        title="${t}"
        class="h-9 max-w-[8.5rem] cursor-pointer rounded-md border border-border bg-background px-2 text-sm text-foreground shadow-sm transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-11 sm:max-w-none sm:px-2.5"
        aria-label="${t}"
      >
        <option value="zh" ${e==="zh"?"selected":""}>${d(u("locale.optionZh"))}</option>
        <option value="en" ${e==="en"?"selected":""}>${d(u("locale.optionEn"))}</option>
      </select>
    </div>`}function Sm(){const e=document.getElementById("global-ui-locale");e&&(e.value=Pe(),e.addEventListener("change",()=>{const t=e.value==="en"?"en":"zh";wp(t),zn(t),window.dispatchEvent(new CustomEvent("menusifu:ui-locale-change",{detail:{locale:t}})),q()}))}function Tm(){try{const e=sessionStorage.getItem(eo);if(e==null)return 0;const t=Number(e);return Number.isFinite(t)&&t>=0?t:0}catch{return 0}}function yi(e){try{sessionStorage.setItem(eo,String(Math.max(0,Math.floor(e))))}catch{}}function wm(){const e=location.hash.slice(1);if(e==="/config-center"||e.startsWith("/config-center/")){k("/settings/overview");return}if(e==="/product-center-a"||e.startsWith("/product-center-a/")){k("/dashboard/overview");return}if(e==="/product-center"||e==="/product-center/"){k("/brand-products/products");return}if(e==="/brand-products"||e==="/brand-products/"){k("/brand-products/products");return}if(e==="/brand-menu"||e==="/brand-menu/"){k("/brand-menu/menus");return}if(e==="/menu"||e==="/menu/"){k("/menu/store-menu");return}if(e==="/gift-cards"||e==="/gift-cards/"){k("/gift-cards/cards");return}if(e==="/gift-cards/design"||e==="/gift-cards/design/"||e.startsWith("/gift-cards/design/")){k("/gift-cards/cards");return}if(e==="/marketing/ai/ads"||e.startsWith("/marketing/ai/ads/")){k("/marketing/campaigns");return}if(e==="/marketing"||e==="/marketing/"){k("/marketing/campaigns");return}if(e==="/asset-center/overview"||e==="/asset-center/overview/"||e.startsWith("/asset-center/overview/")||e==="/asset-center/images"||e==="/asset-center/images/"||e.startsWith("/asset-center/images/")||e==="/asset-center/templates"||e==="/asset-center/templates/"||e.startsWith("/asset-center/templates/")){k("/asset-center/materials");return}if(e==="/reports"||e==="/reports/"){k("/reports/revenue");return}if(e==="/members"||e==="/members/"){k("/members/card/coupon-mgmt");return}if(e==="/print-templates"||e==="/print-templates/"){k("/print-templates/decoration");return}if(e==="/print-templates/list"||e==="/print-templates/list/"||e.startsWith("/print-templates/list/")){k("/print-templates/decoration");return}if(e==="/operations/reservations"||e==="/operations/reservations/"){k("/operations/reservations/waitlist");return}if(e==="/operations/reservations/language"||e==="/operations/reservations/language/"||e.startsWith("/operations/reservations/language/")||e==="/operations/reservations/refresh"||e==="/operations/reservations/refresh/"||e.startsWith("/operations/reservations/refresh/")){k("/operations/reservations/waitlist");return}if(e==="/operations/inventory-ordering"||e==="/operations/inventory-ordering/"){k("/operations/inventory-ordering/expiry");return}if(e==="/product-center-main"||e==="/product-center-main/"){k("/brand-products/products");return}if(e==="/reports/capital"||e==="/reports/capital/"||e.startsWith("/reports/capital/")){k("/dashboard/overview");return}if(e==="/store"||e==="/store/"||e.startsWith("/store/")){location.replace("#/stores/overview");return}if(e==="/ordering"||e==="/ordering/"||e.startsWith("/ordering/")){location.replace("#/dashboard/overview");return}if(e==="/payment-services"||e==="/payment-services/"||e.startsWith("/payment-services/")){location.replace("#/dashboard/overview");return}if(e==="/surcharge-fees"||e==="/surcharge-fees/"||e.startsWith("/surcharge-fees/")){location.replace("#/dashboard/overview");return}if(e==="/regions"||e==="/regions/"||e.startsWith("/regions/")){location.replace("#/stores/overview");return}if(e==="/operations/devices"||e==="/operations/devices/"){location.replace("#/device-management/overview");return}const t=e.match(/^\/operations\/devices\/([^/]+)(.*)$/);if(t){const o=t[1],a=t[2]??"",p={payments:"payments","cash-drawer":"cash-drawer",router:"router",pos:"pos","pos-go":"pos-go",kds:"kds","queue-display":"queue-display",printers:"printers",kiosk:"kiosk",emenu:"emenu"}[o];if(p){location.replace(`#/device-management/hardware/${p}${a}`);return}location.replace("#/device-management/overview");return}if(["/dashboard/shortcuts","/dashboard/locations"].some(o=>e===o||e.startsWith(`${o}/`))){location.replace("#/dashboard/overview");return}if(e==="/operations/customer-display"||e.startsWith("/operations/customer-display/")){location.replace("#/dashboard/overview");return}if(e==="/operations/store-patrol"||e.startsWith("/operations/store-patrol/")){location.replace("#/dashboard/overview");return}if(e==="/operations/floor-plan"||e.startsWith("/operations/floor-plan/")){location.replace("#/operations/queue-call/floor-plan");return}if(e==="/ai-assistant"||e==="/ai-assistant/"){location.replace("#/ai-assistant/chat");return}if(["/orders/dine-in","/orders/online","/orders/delivery","/orders/pickup"].some(o=>e===o||e.startsWith(`${o}/`))){location.replace("#/orders/all");return}if(["/menu/groups","/menu/items","/menu/availability"].some(o=>e===o||e.startsWith(`${o}/`))){location.replace("#/menu/store-menu");return}if(e==="/menu/inventory-change-log"||e.startsWith("/menu/inventory-change-log/")){const o=e.startsWith("/menu/inventory-change-log/")?e.slice(26):"";k(o?`/menu/inventory-changes${o}`:"/menu/inventory-changes");return}if(e==="/menu/product-recipe"||e.startsWith("/menu/product-recipe/")){const o=e.startsWith("/menu/product-recipe/")?e.slice(20):"";k(o?`/menu/recipe-list${o}`:"/menu/recipe-list");return}if(e==="/team/tips"||e==="/team/tips/"){k($o());return}if(e==="/team/reports"||e==="/team/reports/"){k(No());return}if(e==="/team/scheduling"||e==="/team/scheduling/"){k(qo());return}if(e==="/menu/tax-types"||e==="/menu/tax-types/"){location.replace("#/menu/tax-types/settings");return}if(e==="/device-management/hardware"||e==="/device-management/hardware/"){location.replace(`#${To()}`);return}if(e==="/brand-products/seasoning-mgmt"||e==="/brand-products/seasoning-mgmt/"){k(ta());return}if(e==="/brand-products/tags"||e==="/brand-products/tags/"){k(ra());return}if(e==="/brand-products/recipes"||e==="/brand-products/recipes/"){k(sa());return}const n=[["/brand-products/catalog","/brand-products/product-categories"],["/brand-products/categories","/brand-products/product-categories"],["/brand-products/specs","/brand-products/spec-groups"],["/brand-products/distribution","/brand-products/products"],["/brand-products/meal-groups","/brand-products/combo-groups"]];for(const[o,a]of n){if(e===o||e===`${o}/`){k(a);return}if(e.startsWith(`${o}/`)){k(`${a}${e.slice(o.length)}`);return}}for(const o of P)if((e===o.path||e===`${o.path}/`)&&o.defaultChildPath!==o.path){location.replace(`#${o.defaultChildPath}`);return}}function to(e){return`sidebar-nav-expanded:${e}`}function ro(e,t){try{const r=sessionStorage.getItem(to(e.id));if(r==="true")return!0;if(r==="false")return!1}catch{}return Ce(t,e)}function km(e,t){try{sessionStorage.setItem(to(e),t?"true":"false")}catch{}}function so(e,t){const r=[...t].sort((s,i)=>i.path.length-s.path.length);for(const s of r)if(e===s.path||e.startsWith(`${s.path}/`))return s.path;return""}function io(e){return`tertiary-sidebar-expanded:${e}`}function Ds(e,t,r){try{const s=sessionStorage.getItem(io(e));if(s==="true")return!0;if(s==="false")return!1}catch{}return r}function $m(e,t){try{sessionStorage.setItem(io(e),t?"true":"false")}catch{}}function no(e){try{const t=sessionStorage.getItem(Yn);if(t==="true")return!0;if(t==="false")return!1}catch{}return e.startsWith("/brand-products")}function Em(e){try{sessionStorage.setItem(Yn,e?"true":"false")}catch{}}function oo(e){try{const t=sessionStorage.getItem(Xn);if(t==="true")return!0;if(t==="false")return!1}catch{}return e.startsWith("/brand-menu")}function Nm(e){try{sessionStorage.setItem(Xn,e?"true":"false")}catch{}}function ao(e){try{const t=sessionStorage.getItem(Zn);if(t==="true")return!0;if(t==="false")return!1}catch{}return e.startsWith("/menu")}function Dm(e){try{sessionStorage.setItem(Zn,e?"true":"false")}catch{}}function lo(e){try{const t=sessionStorage.getItem(Jn);if(t==="true")return!0;if(t==="false")return!1}catch{}return e.startsWith("/marketing")}function qm(e){try{sessionStorage.setItem(Jn,e?"true":"false")}catch{}}function Pm(e,t){return t.id==="bp-seasoning-mgmt"?Ai(e):t.id==="bp-tags-mgmt"?Ri(e):t.id==="bp-recipes-mgmt"?Ci(e):""}function uo(e,t){return t.id==="sm-tax-types"?_i(e):""}const Mm='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';function Im(e,t){const{navClass:r,navAriaLabel:s,heading:i,items:n,getActiveSubPath:o,getCollapsibleChildActivePath:a}=t,l=o(e),p=h=>{const S=h.sidebarChildren;if(S!=null&&S.length){const c=h.activePrefix??h.path,f=e===c||e.startsWith(`${c}/`),x=Ds(h.id,e,f),v=h.path===l,$=`tertiary-children-${h.id}`,_=a(e,h);return`
        <li class="mb-1">
          <button type="button"
            data-tertiary-sidebar-toggle="${h.id}"
            class="flex w-full min-h-11 items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${v?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            aria-expanded="${x}"
            aria-controls="${$}"
          >
            <span class="min-w-0 flex-1 truncate">${b(h.title,h.titleEn)}</span>
            <span class="shrink-0 text-muted-foreground transition-transform duration-200 ${x?"":"-rotate-90"}">${Mm}</span>
          </button>
          <ul id="${$}" class="mt-1 space-y-0.5 border-l border-border ml-3 pl-2 ${x?"":"hidden"}" role="list" ${x?"":'aria-hidden="true"'}>
            ${S.map(C=>{const m=C.path===_;return`
            <li>
              <a href="#${C.path}"
                class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${m?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
                ${m?'aria-current="page"':""}
                tabindex="${x?"0":"-1"}"
              >${b(C.title,C.titleEn)}</a>
            </li>`}).join("")}
          </ul>
        </li>`}const w=h.path===l;return`
        <li>
          <a href="#${h.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${w?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${w?'aria-current="page"':""}
          >${b(h.title,h.titleEn)}</a>
        </li>`};return`
    <nav class="${r} w-52 shrink-0 border-r border-border pr-4 ${Ye}" aria-label="${s}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${i}</p>
      <ul class="space-y-0.5">
        ${n.map(p).join("")}
      </ul>
    </nav>
  `}function Km(e){const r=P.find(o=>o.id==="product-center-main").children.find(o=>o.id==="pcm-brand-menu"),s=b(r.title,r.titleEn),i=s.replace(/"/g,"&quot;"),n=Ii(e);return`
    <nav class="brand-menu-subnav w-52 shrink-0 border-r border-border pr-4 ${Ye}" aria-label="${i}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${s}</p>
      <ul class="space-y-0.5">
        ${Br.map(o=>{const a=o.path===n;return`
        <li>
          <a href="#${o.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${a?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${a?'aria-current="page"':""}
          >${b(o.title,o.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Om(e){const r=P.find(i=>i.id==="product-center-main").children.find(i=>i.id==="pcm-store-mgmt"),s=b(r.title,r.titleEn);return Im(e,{navClass:"store-menu-subnav",navAriaLabel:s.replace(/"/g,"&quot;"),heading:s,items:Bt,getActiveSubPath:Ki,getCollapsibleChildActivePath:uo})}function _m(e){const t=P.find(o=>o.id==="device-management"),r=t.children.find(o=>o.id==="dm-hardware"),s=`${b(t.title,t.titleEn)} · ${b(r.title,r.titleEn)}`.replace(/"/g,"&quot;"),i=b(r.title,r.titleEn),n=_r(e);return`
    <nav class="device-management-hardware-subnav w-52 shrink-0 border-r border-border pr-4 ${Ye}" aria-label="${s}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${i}</p>
      <ul class="space-y-0.5">
        ${ht.map(o=>{const a=o.path===n;return`
        <li>
          <a href="#${o.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${a?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${a?'aria-current="page"':""}
          >${b(o.title,o.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Am(){const e=location.hash.slice(1)||"/dashboard/overview",t=ys(),r=xs(),s=Ss(),i=Ts(),n=ws(),o=ks(),a=$s(),l=Es(),p=Ns(),h=P.some(w=>w.subNavPlacement==="sheet"&&Nr(w.id)),S=t||r||s||i||n||o||a||l||p||h?"opacity-40 pointer-events-none transition-opacity duration-300":"transition-opacity duration-300";return`
    <aside class="flex h-full min-h-0 w-72 shrink-0 flex-col overflow-hidden border-r border-border bg-sidebar text-sidebar-foreground" aria-label="${d(u("shell.navAside"))}">
      <div class="flex h-14 shrink-0 items-center gap-2 ${Se} px-4">
        <span class="flex size-9 items-center justify-center rounded-lg bg-sidebar-active text-sidebar-active-fg" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h0v7"/></svg>
        </span>
        <div class="min-w-0">
          <p class="truncate text-sm font-semibold tracking-tight ${Te}">${d(u("shell.appName"))}</p>
          <p class="truncate text-xs text-sidebar-muted">${d(u("shell.appTagline"))}</p>
        </div>
      </div>
      <div class="relative min-h-0 flex flex-1 flex-col overflow-hidden">
        <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-2 py-3 ${S}" id="nav-tree" aria-label="${d(u("shell.navTree"))}">
          ${P.map(w=>Hm(w,e)).join("")}
        </nav>
        ${bm(e,t)}
        ${am(e,r)}
        ${lm(e,s)}
        ${dm(e,i)}
        ${um(e,n)}
        ${cm(e,o)}
        ${pm(e,a)}
        ${mm(e,l)}
        ${gm(e,p)}
        ${P.filter(w=>w.subNavPlacement==="sheet").map(w=>fm(w,e,Nr(w.id))).join("")}
      </div>
    </aside>
  `}function Rm(e){const t=u("tertiaryNav.tips").replace(/"/g,"&quot;"),r=Ar(e);return`
    <nav class="tips-management-subnav w-52 shrink-0 border-r border-border pr-4 ${Ye}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${u("tertiaryNav.tips")}</p>
      <ul class="space-y-0.5">
        ${At.map(s=>{const i=s.path===r;return`
        <li>
          <a href="#${s.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${i?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${i?'aria-current="page"':""}
          >${b(s.title,s.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Cm(e){const t=u("tertiaryNav.teamReports").replace(/"/g,"&quot;"),r=Rr(e);return`
    <nav class="team-reports-subnav w-52 shrink-0 border-r border-border pr-4 ${Ye}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${u("tertiaryNav.teamReports")}</p>
      <ul class="space-y-0.5">
        ${Rt.map(s=>{const i=s.path===r;return`
        <li>
          <a href="#${s.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${i?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${i?'aria-current="page"':""}
          >${b(s.title,s.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Lm(e){const t=u("tertiaryNav.teamScheduling").replace(/"/g,"&quot;"),r=Cr(e);return`
    <nav class="team-scheduling-subnav w-52 shrink-0 border-r border-border pr-4 ${Ye}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${u("tertiaryNav.teamScheduling")}</p>
      <ul class="space-y-0.5">
        ${Ct.map(s=>{const i=s.path===r;return`
        <li>
          <a href="#${s.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${i?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${i?'aria-current="page"':""}
          >${b(s.title,s.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Bm(e,t,r){const s=Ce(t,e),i=so(t,e.children),n=`sidebar-children-${e.id}`;return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button type="button"
        data-sidebar-toggle="${e.id}"
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${r}"
        aria-controls="${n}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${r?"":"-rotate-90"}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></span>
      </button>
      <ul id="${n}" class="mt-1 space-y-0.5 border-l border-sidebar-foreground/15 dark:border-white/15 ml-4 pl-2 ${r?"":"hidden"}" role="list" ${r?"":'aria-hidden="true"'}>
        ${e.children.map(a=>{const l=a.path===i,p=a.chainOnly?`<span class="ml-1 rounded bg-sidebar-active/25 px-1 py-px text-[10px] text-sidebar-active-fg">${d(u("badge.chain"))}</span>`:"";return`
        <li>
          <a href="#${a.path}"
            class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${l?Er:F}"
            ${l?'aria-current="page"':""}
            tabindex="${r?"0":"-1"}"
          ><span class="min-w-0 flex-1 truncate">${b(a.title,a.titleEn)}${p}</span></a>
        </li>`}).join("")}
      </ul>
    </div>`}function Hm(e,t){const r=e.defaultChildPath;if(e.id==="capital-turnover")return`
    <div class="mb-1" data-nav-module="${e.id}">
      <a
        href="${Pp}"
        target="_blank"
        rel="noopener noreferrer"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${F}"
        title="${d(u("capital.newTab"))}"
        aria-label="${d(u("capital.aria"))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-xs text-sidebar-muted/90" aria-hidden="true">↗</span>
      </a>
    </div>`;if(e.id==="product-center-main"){const s=Dr(t),i=xs();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-product-center-main-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="product-center-main-secondary-sheet"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="marketing"){const s=qr(t),i=Ss();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-marketing-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="marketing-secondary-sheet"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="promotions"){const s=Pr(t),i=Ts();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-promotions-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="promotions-secondary-sheet"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="members"){const s=Mr(t),i=ws();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-members-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="members-secondary-sheet"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="reports-finance"){const s=pt(t),i=$s();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-reports-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="reports-secondary-sheet"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="print-templates"){const s=Kr(t),i=Es();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-print-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="print-secondary-sheet"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="reservations"){const s=ct(t),i=Ns();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-reservations-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="reservations-secondary-sheet"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="gift-cards"){const s=Ir(t),i=ks();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-gift-cards-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="gift-cards-secondary-sheet"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="inventory-ordering"){const s=Ce(t,e),i=ys();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-inventory-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="inventory-secondary-sheet"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.subNavPlacement==="sheet"){const s=Ce(t,e),i=Nr(e.id),n=`${e.id}-secondary-sheet`;return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-nav-module-sheet-sidebar-open="${e.id}"
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${s?se:F}"
        aria-expanded="${i}"
        aria-controls="${n}"
        title="${d(L("nav.openSecondary",{name:R(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.subNavPlacement==="sidebar"){const s=ro(e,t);return Bm(e,t,s)}return`
    <div class="mb-1" data-nav-module="${e.id}">
      <a href="#${r}"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${Ce(t,e)?se:F}"
        ${Ce(t,e)?'aria-current="page"':""}
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${ie[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${R(e)}</span>
      </a>
    </div>`}const Fm=new Set(["/reviews/settings","/brand/settings"]),co=new Map;function xi(e){if(e==="/settings/overview"||e==="/menu/tax-types/settings")return!1;const t=ze(e);return t?e===t.settingsPath||e.startsWith(`${t.settingsPath}/`):Fm.has(e)}function _t(e){return e.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"item"}function Gm(e,t){return`${e}/${encodeURIComponent(_t(t))}`}function po(e){return`module-settings-cat-${_t(e)}`}function jm(e,t){if(!e.startsWith(`${t}/`))return"";const r=e.slice(t.length+1).split("/")[0]??"";try{return decodeURIComponent(r)}catch{return r}}function qs(e,t,r){if(r.length===0||e===t)return;const s=jm(e,t);if(s)return r.find(i=>_t(i.groupKey)===_t(s))}function mo(e){const t=po(e),r=()=>{const s=document.getElementById(t);if(!s)return;const i=s.closest(".module-settings-scroll-host");if(i){const n=i.getBoundingClientRect(),o=s.getBoundingClientRect(),a=i.scrollTop+(o.top-n.top)-12;i.scrollTo({top:Math.max(0,a),behavior:"smooth"});return}s.scrollIntoView({behavior:"smooth",block:"start"})};requestAnimationFrame(()=>requestAnimationFrame(r))}function Um(e){const t=ze(e);if(!t)return;const r=Ht(t.items,t.groupOrder),s=qs(e,t.settingsPath,r);s&&mo(s.groupKey)}function Wm(e,t){co.set(e,Math.max(0,Math.floor(t)))}function Vm(e){const t=ze(e);if(!t)return;const r=co.get(t.settingsPath);if(typeof r!="number")return;const s=document.querySelector(".module-settings-scroll-host");if(!s)return;const i=Math.max(0,s.scrollHeight-s.clientHeight);s.scrollTop=Math.min(r,i)}function zm(){document.querySelectorAll(".module-settings-subnav a[href^='#']").forEach(e=>{e.addEventListener("click",()=>{var o;const t=(o=e.getAttribute("href"))==null?void 0:o.slice(1);if(!t)return;const r=ze(t);if(!r)return;const s=document.querySelector(".module-settings-scroll-host");s&&Wm(r.settingsPath,s.scrollTop);const i=Ht(r.items,r.groupOrder),n=qs(t,r.settingsPath,i);n&&window.setTimeout(()=>mo(n.groupKey),0)})})}function Qm(e,t){const r=ze(e);if(!r||r.items.length===0)return"";const s=Ht(r.items,r.groupOrder),i=qs(e,r.settingsPath,s);return`
    <nav class="module-settings-subnav w-56 shrink-0 border-r border-border pr-4 ${Ye}" aria-label="${d(t)}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${d(t)}</p>
      <ul class="space-y-0.5" role="list">
        ${s.map(n=>{const o=Gm(r.settingsPath,n.groupKey),a=(i==null?void 0:i.groupKey)===n.groupKey;return`
              <li>
                <a href="#${o}"
                  class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${a?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
                  ${a?'aria-current="page"':""}
                >
                  <span class="min-w-0 flex-1 truncate">${d(n.groupTitle)}</span>
                  <span class="ml-2 shrink-0 text-xs tabular-nums text-muted-foreground">${n.items.length}</span>
                </a>
              </li>`}).join("")}
      </ul>
    </nav>
  `}function tt(e){try{const t=localStorage.getItem(ft(e));return t===null?Ls(e):t==="1"}catch{return Ls(e)}}function Ym(e,t){try{localStorage.setItem(ft(e),t?"1":"0")}catch{}}const go="bg-primary border-primary shadow-sm",fo="bg-neutral-300 border-neutral-400/80 shadow-inner dark:bg-neutral-600 dark:border-neutral-500",Xm="bg-white shadow-md ring-1 ring-black/10 dark:bg-neutral-100 dark:ring-white/15";function bo(e){return e?"text-xs text-muted-foreground":"text-xs font-medium text-foreground"}function ho(e){return e?"text-xs font-medium text-foreground":"text-xs text-muted-foreground"}function St(e){const t=tt(e.seq),r=L("moduleSettings.toggleAria",{name:e.title}),s=u(t?"moduleSettings.toggleOn":"moduleSettings.toggleOff"),i=t?go:fo,n=t?"translate-x-5":"translate-x-0.5";return`
    <div class="flex shrink-0 items-center gap-2" data-module-setting-toggle-group>
      <span data-toggle-off-label class="${bo(t)}">${d(u("moduleSettings.toggleOffLabel"))}</span>
      <button
        type="button"
        role="switch"
        aria-checked="${t?"true":"false"}"
        aria-label="${d(r)}"
        title="${d(s)}"
        data-module-setting-toggle="${e.seq}"
        class="module-setting-toggle relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${i}"
      >
        <span
          class="pointer-events-none block size-5 ${n} ${Xm} rounded-full transition-transform duration-200"
          aria-hidden="true"
        ></span>
      </button>
      <span data-toggle-on-label class="${ho(t)}">${d(u("moduleSettings.toggleOnLabel"))}</span>
    </div>`}function Zm(e){const t=e.sceneDesc.trim();return t?`<p class="m-0 text-xs leading-relaxed text-muted-foreground">${d(t)}</p>`:""}function I(e){const t=Zm(e);return`
    <div class="min-w-0 flex flex-col gap-1">
      <span class="text-sm font-medium text-card-foreground">${d(e.title)}</span>
      ${t}
    </div>`}const De="size-4 shrink-0 rounded border-input text-primary accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";function Jm(e){if(e.type==="text")return`<span class="text-sm text-foreground">${d(e.value)}</span>`;const t=et(e.fieldId,e.defaultValue),r=e.widthClass??"w-16",s=e.min!==void 0?` min="${e.min}"`:"",i=e.max!==void 0?` max="${e.max}"`:"";return`<input
    type="number"
    inputmode="numeric"
    class="${r} h-8 shrink-0 rounded-md border border-input bg-background px-2 text-center text-sm tabular-nums text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    value="${d(String(t))}"
    data-module-setting-field="${d(e.fieldId)}"
    data-default-value="${e.defaultValue}"${s}${i}
  />`}function Or(e,t){return`${e} / ${t}`}function eg(e){const t=e.titleLabel??"标题",r=e.contentLabel??"内容",s=Be(e.titleFieldId,""),i=Be(e.contentFieldId,""),n=s.length,o=i.length,a="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";return`
    <div class="space-y-4" data-copy-form-field="${d(e.fieldKey)}">
      <div class="space-y-1.5">
        <label class="text-sm font-medium text-foreground">${d(t)}</label>
        <div class="relative">
          <input
            type="text"
            class="${a} pr-14"
            maxlength="${e.titleMaxLength}"
            value="${d(s)}"
            placeholder=""
            data-module-setting-text="${d(e.titleFieldId)}"
            data-max-length="${e.titleMaxLength}"
          />
          <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs tabular-nums text-muted-foreground" data-text-counter="title">${d(Or(n,e.titleMaxLength))}</span>
        </div>
      </div>
      <div class="space-y-1.5">
        <label class="text-sm font-medium text-foreground">${d(r)}</label>
        <textarea
          rows="4"
          class="${a} min-h-[5rem] resize-y"
          maxlength="${e.contentMaxLength}"
          placeholder=""
          data-module-setting-text="${d(e.contentFieldId)}"
          data-max-length="${e.contentMaxLength}"
        >${d(i)}</textarea>
        <div class="flex justify-end">
          <span class="text-xs tabular-nums text-muted-foreground" data-text-counter="content">${d(Or(o,e.contentMaxLength))}</span>
        </div>
      </div>
    </div>`}function tg(e,t){const r=`module-setting-nested-radio-${e}-${t.fieldKey}`,s=oe(t.radioFieldId,t.radioDefault);return`<div class="flex flex-wrap items-center gap-4">${t.options.map(n=>{const o=s===n.value;return`
      <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
        <input type="radio" name="${d(r)}" value="${d(n.value)}" class="${De}" ${o?"checked":""} data-module-setting-radio="${d(t.radioFieldId)}" />
        <span>${d(n.label)}</span>
      </label>`}).join("")}</div>`}function rg(e,t){return Aa(e,t.storageFieldId)}function sg(e,t){return Ra(e,t.storageFieldId)}function ig(e){return`<p class="m-0 text-xs leading-relaxed text-muted-foreground">${d(e.text)}</p>`}function ng(e,t){return`
    <div class="space-y-1.5">
      <p class="m-0 text-xs text-muted-foreground">${d(t.label)}</p>
      ${en(e,t.fieldKey,t.storageFieldId)}
    </div>`}function og(e,t){return`
    <div
      class="space-y-1.5 ${oe(t.whenRadioFieldId,t.whenRadioDefault)!==t.whenRadioValue?"hidden":""}"
      data-conditional-panel
      data-when-radio-field="${d(t.whenRadioFieldId)}"
      data-when-radio-value="${d(t.whenRadioValue)}"
    >
      <p class="m-0 text-xs text-muted-foreground">${d(t.label)}</p>
      ${en(e,t.fieldKey,t.storageFieldId)}
    </div>`}function ag(e){const t=e.label??"",r=Be(e.textFieldId,""),s=e.maxLength??0,i=s>0?` maxlength="${s}"`:"",n=e.placeholder??"";return`
    <div class="space-y-1.5" data-nested-text-input="${d(e.fieldKey)}">
      ${t?`<label class="text-sm font-medium text-foreground">${d(t)}</label>`:""}
      <input
        type="text"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        value="${d(r)}"
        placeholder="${d(n)}"${i}
        data-module-setting-text="${d(e.textFieldId)}"
      />
    </div>`}function ir(e){document.querySelectorAll("[data-conditional-panel]").forEach(t=>{const r=t.getAttribute("data-when-radio-field");if(e&&r!==e)return;const s=t.getAttribute("data-when-radio-value")??"",i=r?document.querySelector(`[data-module-setting-radio="${r}"]:checked`):null,n=(i==null?void 0:i.value)??"";t.classList.toggle("hidden",n!==s),n!==s?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")})}function lg(e,t){return t.kind==="copy-form"?eg(t):t.kind==="hint"?ig(t):t.kind==="dish-tags"?ng(e,t):t.kind==="conditional-dish-tags"?og(e,t):t.kind==="text-input"?ag(t):t.kind==="dish-mutex-rules"?rg(e,t):t.kind==="dish-combo-rules"?sg(e,t):t.kind==="radio"?tg(e,t):`
      <div class="flex flex-wrap items-center gap-x-2 gap-y-1 leading-relaxed">
        ${t.parts.map(r=>Jm(r)).join("")}
      </div>`}function dg(e){const t=qa(e.seq);if(!t)return rt(e);const r=tt(e.seq),s=r?"":"hidden",i=t.fields.map(n=>lg(e.seq,n)).join("");return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3 last:border-b-0">
            <div class="flex items-start justify-between gap-3">
              ${I(e)}
              <div class="shrink-0 pt-0.5">${St(e)}</div>
            </div>
            <div
              data-nested-panel="${e.seq}"
              class="module-setting-nested-panel mt-3 space-y-3 rounded-lg bg-muted/50 p-3 ${s}"
              ${r?"":'aria-hidden="true"'}
            >
              ${i}
            </div>
          </div>
        </li>`}function ug(e,t){document.querySelectorAll(`[data-nested-panel="${e}"]`).forEach(r=>{r.classList.toggle("hidden",!t),t?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")})}function cg(e,t,r){const s=e.radioFieldId,i=oe(s,e.radioDefault??"system"),n=i===t.value;if("label"in t)return`
      <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
        <input type="radio" name="${d(r)}" value="${d(t.value)}" class="${De}" ${n?"checked":""} data-module-setting-radio="${d(s)}" />
        <span>${d(t.label)}</span>
      </label>`;const o=et(t.numberFieldId,t.numberDefault),a=i!==t.value?"disabled":"";return`
      <label class="inline-flex cursor-pointer flex-wrap items-center gap-2 text-sm text-foreground">
        <input type="radio" name="${d(r)}" value="${d(t.value)}" class="${De}" ${n?"checked":""} data-module-setting-radio="${d(s)}" />
        <span>${d(t.labelBefore)}</span>
        <input type="number" step="0.1" class="w-14 h-8 rounded-md border border-input bg-background px-2 text-center text-sm tabular-nums shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50" value="${d(String(o))}" data-module-setting-field="${d(t.numberFieldId)}" data-default-value="${t.numberDefault}" min="${t.numberMin??0}" max="${t.numberMax??99}" ${a} />
        <span>${d(t.labelAfter)}</span>
      </label>`}function pg(e){const t=pa(e.seq);if(!t)return rt(e);const r=`module-setting-radio-${e.seq}`;if(t.kind==="checkbox-group"&&t.checkboxes){const s=t.checkboxes.map(i=>{const n=He(i.fieldId,i.defaultChecked);return`
        <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
          <input type="checkbox" class="${De} rounded-sm" ${n?"checked":""} data-module-setting-checkbox="${d(i.fieldId)}" />
          <span>${d(i.label)}</span>
        </label>`}).join("");return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            ${I(e)}
            <div class="flex flex-wrap items-center gap-4 sm:pt-0.5">${s}</div>
          </div>
        </li>`}if(t.kind==="radio-group"&&t.radios){const s=t.radios.map(i=>cg(t,i,r)).join("");return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            ${I(e)}
            <div class="flex flex-wrap items-center gap-4 sm:pt-0.5">${s}</div>
          </div>
        </li>`}if(t.kind==="radio-color"&&t.radios){const s=t.radioFieldId,i=oe(s,t.radioDefault??"system"),n=ga(t.colorFieldId,t.colorDefault??"#ffffff"),o=t.customColorValue??"custom",a=t.radios.map(l=>{const p=i===l.value,S=l.value===o?`<input type="color" class="size-9 shrink-0 cursor-pointer rounded border border-input bg-background p-0.5 disabled:opacity-50" value="${d(n)}" data-module-setting-color="${d(t.colorFieldId)}" ${p?"":"disabled"} />`:"";return`
        <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
          <input type="radio" name="${d(r)}" value="${d(l.value)}" class="${De}" ${p?"checked":""} data-module-setting-radio="${d(s)}" />
          <span>${d("label"in l?l.label:l.value)}</span>
          ${S}
        </label>`}).join("");return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            ${I(e)}
            <div class="flex flex-wrap items-center gap-4 sm:pt-0.5">${a}</div>
          </div>
        </li>`}return`
        <li class="px-3 py-2.5">
          ${I(e)}
        </li>`}function Si(e,t){document.querySelectorAll(`input[name="${e}"]`).forEach(r=>{const s=r.closest("label");if(!s)return;const i=s.querySelector("[data-module-setting-field]");i&&(i.disabled=r.value!==t);const n=s.querySelector("[data-module-setting-color]");n&&(n.disabled=r.value!==t)})}function mg(e){const t=zr.map(r=>{const s=Qr(r.code),i=He(s,r.code==="en"||r.code==="zh-Hans");return`
        <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            class="${De} rounded-sm"
            ${i?"checked":""}
            data-locale-select-checkbox
            data-locale-code="${d(r.code)}"
            data-module-setting-checkbox="${d(s)}"
          />
          <span>${d(r.label)}</span>
        </label>`}).join("");return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            ${I(e)}
            <div class="flex max-w-2xl flex-wrap items-center gap-x-4 gap-y-2 sm:pt-0.5">${t}</div>
          </div>
        </li>`}function gg(e){const t=rn();return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            ${I(e)}
            <div class="flex flex-wrap items-center gap-4 sm:pt-0.5" data-locale-default-radios>${t}</div>
          </div>
        </li>`}function fg(e){const t=al(e.seq);return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            <div class="mt-3">
              ${pl(e.seq,t)}
            </div>
          </div>
        </li>`}function bg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            <div class="mt-3">
              ${Yl(e.seq)}
            </div>
          </div>
        </li>`}function hg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            <div class="mt-3 max-w-3xl">
              ${ku(e.seq)}
            </div>
          </div>
        </li>`}function vg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            <div class="mt-3 max-w-3xl">
              ${Md(e.seq)}
            </div>
          </div>
        </li>`}function yg(e){return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0 flex-1">${I(e)}</div>
            <div class="w-full shrink-0 sm:max-w-xl sm:pt-0.5">
              ${vu()}
            </div>
          </div>
        </li>`}function xg(e){return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0 flex-1">${I(e)}</div>
            <div class="w-full shrink-0 sm:max-w-xs sm:pt-0.5">
              ${pu()}
            </div>
          </div>
        </li>`}function Sg(e){const t=Vd(e.seq);return t?`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            ${I(e)}
            <div class="shrink-0 sm:pt-0.5">${t}</div>
          </div>
        </li>`:rt(e)}function Ti(e,t){return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0 flex-1">${I(e)}</div>
            <div class="w-full shrink-0 sm:max-w-md sm:pt-0.5">${t}</div>
          </div>
        </li>`}function Tg(e){const t=tt(e.seq);return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            <div class="flex items-start justify-between gap-3">
              ${I(e)}
              <div class="shrink-0 pt-0.5">${St(e)}</div>
            </div>
            ${Cd(e.seq,t)}
          </div>
        </li>`}function wg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            ${jl()}
          </div>
        </li>`}function kg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            <div class="mt-3">
              ${Hc(e.seq)}
            </div>
          </div>
        </li>`}const vo={66:{fieldId:"66-mandatory-break-minutes",defaultValue:30,min:1,max:240,unit:"分钟"},67:{fieldId:"67-continuous-work-hour-limit",defaultValue:8,min:1,max:24,unit:"小时"},71:{fieldId:"71-max-work-hours",defaultValue:12,min:1,max:24,unit:"小时"},329:{fieldId:"329-paid-break-minutes",defaultValue:10,min:0,max:240,unit:"分钟"},306:{fieldId:"306-tip-share-ratio",defaultValue:0,min:0,max:100,unit:"%"}},yo={72:{fieldId:"72-reset-start-work-hhmm",defaultValue:"09:00"}};function $g(e){return vo[e]!==void 0}function Eg(e){return yo[e]!==void 0}function Ng(e,t){return/^\d{2}:\d{2}$/.test(e)?e:t}function Dg(e){const t=vo[e.seq];if(!t)return rt(e);const r=et(t.fieldId,t.defaultValue),s=Math.min(t.max,Math.max(t.min,Math.round(r)));return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            ${I(e)}
            <div class="inline-flex items-center gap-2 sm:pt-0.5">
              <input
                type="number"
                inputmode="numeric"
                class="h-8 w-20 rounded-md border border-input bg-background px-2 text-center text-sm tabular-nums text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value="${d(String(s))}"
                min="${t.min}"
                max="${t.max}"
                data-module-setting-number="${d(t.fieldId)}"
              />
              <span class="text-sm text-muted-foreground">${t.unit}</span>
            </div>
          </div>
        </li>`}function qg(e){const t=yo[e.seq];if(!t)return rt(e);const r=Be(t.fieldId,t.defaultValue),s=Ng(r,t.defaultValue);return`
        <li class="list-none">
          <div class="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
            ${I(e)}
            <div class="inline-flex items-center gap-2 sm:pt-0.5">
              <input
                type="time"
                step="60"
                class="h-8 w-28 rounded-md border border-input bg-background px-2 text-center text-sm tabular-nums text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value="${d(s)}"
                data-module-setting-text="${d(t.fieldId)}"
              />
              <span class="text-sm text-muted-foreground">时:分</span>
            </div>
          </div>
        </li>`}const Pg=[{fieldId:"582-c-line-kiosk",label:"Kiosk",defaultChecked:!0},{fieldId:"582-c-line-emenu",label:"eMenu",defaultChecked:!0},{fieldId:"582-c-line-sdi",label:"SDI",defaultChecked:!0}],Mg=[{fieldId:"530-c-line-kiosk",label:"Kiosk",defaultChecked:!0},{fieldId:"530-c-line-emenu",label:"eMenu",defaultChecked:!0},{fieldId:"530-c-line-sdi",label:"SDI",defaultChecked:!0}],wi="582-alert-minutes",Ig=15,ki=1,$i=180;function Kg(e,t){const r=Pg.map(o=>{const a=He(o.fieldId,o.defaultChecked);return`
      <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
        <input type="checkbox" class="${De} rounded-sm" ${a?"checked":""} data-module-setting-checkbox="${d(o.fieldId)}" />
        <span>${d(o.label)}</span>
      </label>`}).join(""),s=et(wi,Ig),i=Math.min($i,Math.max(ki,Math.round(s)));return`
    <div class="mt-3 rounded-lg bg-muted/50 p-3 ${t?"":"hidden"}" data-store-closing-alert-panel="${e}" ${t?"":'aria-hidden="true"'}>
      <div class="flex flex-wrap items-center gap-2">
        <p class="m-0 text-xs text-muted-foreground">结束前</p>
        <input
          type="number"
          inputmode="numeric"
          class="h-8 w-20 rounded-md border border-input bg-background px-2 text-center text-sm tabular-nums text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          value="${d(String(i))}"
          min="${ki}"
          max="${$i}"
          data-module-setting-number="${wi}"
        />
        <p class="m-0 text-xs text-muted-foreground">分钟进行提示</p>
      </div>
      <p class="m-0 text-xs text-muted-foreground">C端产品线（多选）</p>
      <div class="mt-2 flex flex-wrap items-center gap-4">${r}</div>
    </div>`}function Og(e,t){const r=Mg.map(i=>{const n=He(i.fieldId,i.defaultChecked);return`
      <label class="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground">
        <input type="checkbox" class="${De} rounded-sm" ${n?"checked":""} data-module-setting-checkbox="${d(i.fieldId)}" />
        <span>${d(i.label)}</span>
      </label>`}).join("");return`
    <div class="mt-3 rounded-lg bg-muted/50 p-3 ${t?"":"hidden"}" data-store-brand-setting-panel="${e}" ${t?"":'aria-hidden="true"'}>
      <p class="m-0 text-xs text-muted-foreground">C端产品线（多选）</p>
      <div class="mt-2 flex flex-wrap items-center gap-4">${r}</div>
    </div>`}function _g(e){const t=tt(e.seq);return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            <div class="flex items-start justify-between gap-3">
              ${I(e)}
              <div class="shrink-0 pt-0.5">${St(e)}</div>
            </div>
            ${Og(e.seq,t)}
          </div>
        </li>`}function Ag(e){const t=tt(e.seq);return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            <div class="flex items-start justify-between gap-3">
              ${I(e)}
              <div class="shrink-0 pt-0.5">${St(e)}</div>
            </div>
            ${Kg(e.seq,t)}
          </div>
        </li>`}function Rg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            <div class="mt-3">
              ${_c(e.seq)}
            </div>
          </div>
        </li>`}function Cg(e,t){document.querySelectorAll(`[data-store-brand-setting-panel="${e}"]`).forEach(r=>{r.classList.toggle("hidden",!t),t?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")})}function Lg(e,t){document.querySelectorAll(`[data-store-closing-alert-panel="${e}"]`).forEach(r=>{r.classList.toggle("hidden",!t),t?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")})}function Bg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            <div class="mt-3">
              ${Pc(e.seq)}
            </div>
          </div>
        </li>`}function Hg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            ${Mu()}
          </div>
        </li>`}function Fg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            ${xc()}
          </div>
        </li>`}function Gg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            ${I(e)}
            ${Ju()}
          </div>
        </li>`}function jg(e){return`
        <li class="list-none">
          <div class="border-b border-border px-4 py-3">
            <div class="min-w-0">
              <p class="m-0 text-sm font-medium text-foreground">行级合并规则</p>
              <p class="m-0 mt-1 text-xs leading-relaxed text-muted-foreground">按票据类型分别配置是否将相同主菜/子菜合并为一行并汇总数量。厨房单、打包单、食客收据可独立开关。</p>
            </div>
            ${rd(tt)}
          </div>
        </li>`}function rt(e){if(Dl(e.seq)||Fl(e.seq)||td(e.seq)||wd(e.seq))return"";if(Td(e.seq))return kd(De,e.sceneDesc);if(Nl(e.seq))return El();if(ol(e.seq))return fg(e);if(zl(e.seq))return bg(e);if(Tu(e.seq))return hg(e);if(Nd(e.seq))return vg(e);if(cu(e.seq))return xg(e);if(Wd(e.seq))return Sg(e);if(Yd(e.seq))return Ti(e,Jd());if(ru(e.seq))return su(e.title,e.sceneDesc);if(Xd(e.seq))return Ti(e,eu());if(hu(e.seq))return yg(e);if(xn(e.seq))return Tg(e);if(Hl(e.seq))return wg(e);if(Lc(e.seq))return kg(e);if(Eg(e.seq))return qg(e);if($g(e.seq))return Dg(e);if(e.seq===530)return _g(e);if(e.seq===582)return Ag(e);if(Oc(e.seq))return Rg(e);if(qc(e.seq))return Bg(e);if(Du(e.seq))return Hg(e);if(Zu(e.seq))return Gg(e);if(yc(e.seq))return Fg(e);if(ed(e.seq))return jg();if(Qa(e.seq))return mg(e);if(Ya(e.seq))return gg(e);if(ma(e.seq))return pg(e);if(ji(e.seq))return dg(e);const t=vd(e.seq)?St(e):"";return`
        <li class="px-3 py-2.5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 flex-1">${I(e)}</div>
            ${t}
          </div>
        </li>`}function Ei(e){const t=e.getAttribute("aria-checked")==="true",r=e.querySelector("span");r&&(r.classList.toggle("translate-x-5",t),r.classList.toggle("translate-x-0.5",!t));for(const o of go.split(/\s+/))e.classList.toggle(o,t);for(const o of fo.split(/\s+/))e.classList.toggle(o,!t);const s=e.closest("[data-module-setting-toggle-group]"),i=s==null?void 0:s.querySelector("[data-toggle-off-label]"),n=s==null?void 0:s.querySelector("[data-toggle-on-label]");i&&(i.className=bo(t)),n&&(n.className=ho(t))}function Ug(){document.querySelectorAll("[data-module-setting-toggle]").forEach(e=>{Ei(e),e.dataset.moduleSettingToggleBound!=="1"&&(e.dataset.moduleSettingToggleBound="1",e.addEventListener("click",()=>{const t=Number(e.getAttribute("data-module-setting-toggle"));if(!t)return;const r=e.getAttribute("aria-checked")!=="true";e.setAttribute("aria-checked",r?"true":"false"),e.title=u(r?"moduleSettings.toggleOn":"moduleSettings.toggleOff"),Ei(e),Ym(t,r),ji(t)&&ug(t,r),t===530&&Cg(t,r),t===582&&Lg(t,r),xn(t)&&Ld(t,r)}))})}function Ni(e){const t=Number(e.getAttribute("data-max-length")??"0");if(!t)return;const r=e.tagName==="TEXTAREA"?"content":"title",s=e.closest("[data-copy-form-field]"),i=s==null?void 0:s.querySelector(`[data-text-counter="${r}"]`);i&&(i.textContent=Or(e.value.length,t))}function Wg(){document.querySelectorAll("[data-module-setting-field]").forEach(e=>{if(e.dataset.moduleSettingFieldBound==="1")return;e.dataset.moduleSettingFieldBound="1";const t=e.getAttribute("data-module-setting-field");if(!t)return;const r=()=>{const s=Number(e.value);Number.isFinite(s)&&Fi(t,s)};e.addEventListener("change",r),e.addEventListener("blur",r)}),document.querySelectorAll("[data-module-setting-text]").forEach(e=>{if(e.dataset.moduleSettingTextBound==="1")return;e.dataset.moduleSettingTextBound="1";const t=e.getAttribute("data-module-setting-text");if(!t)return;Ni(e);const r=()=>{const s=Number(e.getAttribute("maxlength")??"0"),i=s>0?e.value.slice(0,s):e.value;e.value!==i&&(e.value=i),fa(t,i),Ni(e)};e.addEventListener("input",r),e.addEventListener("blur",r)})}function Vg(){document.querySelectorAll("[data-module-setting-checkbox]").forEach(e=>{if(e.dataset.moduleSettingFormBound==="1")return;e.dataset.moduleSettingFormBound="1";const t=e.getAttribute("data-module-setting-checkbox");t&&e.addEventListener("change",()=>{Hi(t,e.checked)})}),document.querySelectorAll("[data-module-setting-radio]").forEach(e=>{if(e.dataset.moduleSettingFormBound==="1")return;e.dataset.moduleSettingFormBound="1";const t=e.getAttribute("data-module-setting-radio"),r=e.name;if(!t||!r)return;const s=()=>{e.checked&&(Ft(t,e.value),Si(r,e.value),ir(t))};e.addEventListener("change",s),e.checked&&(Si(r,e.value),ir(t))}),ir(),document.querySelectorAll("[data-module-setting-color]").forEach(e=>{if(e.dataset.moduleSettingFormBound==="1")return;e.dataset.moduleSettingFormBound="1";const t=e.getAttribute("data-module-setting-color");t&&(e.addEventListener("input",()=>Ks(t,e.value)),e.addEventListener("change",()=>Ks(t,e.value)))}),document.querySelectorAll("[data-module-setting-number]").forEach(e=>{if(e.dataset.moduleSettingFormBound==="1")return;e.dataset.moduleSettingFormBound="1";const t=e.getAttribute("data-module-setting-number");if(!t)return;const r=Number(e.getAttribute("min")??"-Infinity"),s=Number(e.getAttribute("max")??"Infinity"),i=()=>{const n=Number(e.value);if(!Number.isFinite(n))return;const o=Math.min(s,Math.max(r,Math.round(n)));e.value=String(o),Fi(t,o)};e.addEventListener("change",i),e.addEventListener("blur",i)})}function zg(e,t){const r=ze(e),s=(r==null?void 0:r.items)??[];if(s.length===0)return`
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 class="text-base font-semibold tracking-tight text-card-foreground">${d(t)}</h2>
      <p class="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">${u("moduleSettings.empty")}</p>
    </div>`;const i=ze(e),n=Ht(s,i==null?void 0:i.groupOrder),o=L("moduleSettings.count",{count:String(s.length)}),a=n.map(l=>{const p=po(l.groupKey),h=l.items.map(S=>rt(S)).filter(S=>S.trim()!=="").join("");return`
      <section
        id="${p}"
        class="module-settings-category-card scroll-mt-4 rounded-xl border border-border bg-card shadow-sm"
        aria-label="${d(L("moduleSettings.categoryAria",{category:l.groupTitle}))}"
      >
        <div class="flex items-baseline justify-between gap-3 border-b border-border px-4 py-3">
          <h3 class="text-sm font-semibold text-card-foreground">${d(l.groupTitle)}</h3>
          <span class="shrink-0 text-xs tabular-nums text-muted-foreground">${l.items.length}</span>
        </div>
        <ul class="m-0 list-none divide-y divide-border p-0" role="list">${h}</ul>
      </section>`}).join("");return`
    <div class="module-settings-main space-y-4">
      <div class="rounded-xl border border-border bg-card p-5 shadow-sm">
        <p class="text-sm leading-relaxed text-muted-foreground">${u("moduleSettings.intro")}</p>
        <p class="mt-2 text-xs font-medium tabular-nums text-muted-foreground">${d(o)}</p>
      </div>
      <div class="flex flex-col gap-4">${a}</div>
    </div>`}function Qg(){const e=ko.map(t=>`
      <li>
        <a
          href="#${t.path}"
          class="group flex min-h-[4.25rem] flex-col justify-center rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors duration-200 hover:border-primary/35 hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span class="text-sm font-semibold text-card-foreground group-hover:text-primary">${b(t.title,t.titleEn)}</span>
          <span class="mt-0.5 text-xs text-muted-foreground">${Pe()==="en"?t.title:t.titleEn??""}</span>
        </a>
      </li>`).join("");return`
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 class="text-base font-semibold tracking-tight text-card-foreground">${u("settings.overview.title")}</h2>
      <p class="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        ${u("settings.overview.desc")}
      </p>
      <ul class="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3" role="list">
        ${e}
      </ul>
    </div>
  `}function Yg(){const e=u("ai.welcomeHtml"),t="rounded-full border border-border bg-background px-3 py-1.5 text-left text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",r=d(u("ai.voice"));return`
    <div class="flex min-h-0 min-w-0 flex-1 flex-col gap-4" id="ai-assistant-root">
      <div class="rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-3 text-sm leading-relaxed text-muted-foreground dark:bg-primary/10">
        <p class="flex items-start gap-2">
          <span class="mt-0.5 shrink-0 text-primary" aria-hidden="true">${Qn}</span>
          <span>${u("ai.contextNote")}</span>
        </p>
      </div>
      <div class="flex flex-wrap gap-2" role="group" aria-label="${d(u("ai.quickAria"))}">
        <button type="button" class="${t}" data-ai-quick-prompt="帮我查一下权限管理中心里店长和收银员的区别">${d(u("ai.quick.permissions"))}</button>
        <button type="button" class="${t}" data-ai-quick-prompt="搜索一下和打印中心相关的设置在哪里">${d(u("ai.quick.search"))}</button>
        <button type="button" class="${t}" data-ai-quick-prompt="分析一下最近一周各门店营业额趋势">${d(u("ai.quick.analysis"))}</button>
        <button type="button" class="${t}" data-ai-quick-prompt="我想把旗舰店的营业时间改成早上8点到晚上11点">${d(u("ai.quick.config"))}</button>
        <a href="#/permissions/overview" class="inline-flex items-center rounded-full border border-dashed border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/35 hover:text-foreground">${d(u("ai.link.permissions"))}</a>
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
            ${e}
            <p class="mt-2 text-xs text-muted-foreground">${u("ai.tipVoiceLang")}</p>
          </div>
        </div>
      </div>
      <form id="ai-assistant-form" class="flex min-w-0 shrink-0 flex-col gap-2 sm:flex-row sm:items-end">
        <div class="min-w-0 w-full flex-1 overflow-hidden sm:min-w-0">
          <label for="ai-assistant-input" class="sr-only">${d(u("ai.srInputLabel"))}</label>
          <textarea
            id="ai-assistant-input"
            rows="2"
            autocomplete="off"
            placeholder="${d(u("ai.input.placeholder"))}"
            class="box-border min-h-[2.75rem] max-w-full w-full resize-y rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
          ></textarea>
        </div>
        <div class="flex w-full shrink-0 gap-2 sm:w-auto sm:justify-end">
          <button
            type="button"
            id="ai-assistant-voice"
            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="${r}"
            aria-pressed="false"
            title="${r}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </button>
          <button
            type="submit"
            id="ai-assistant-send"
            class="inline-flex h-11 min-w-[5rem] items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            ${d(u("ai.send"))}
          </button>
        </div>
      </form>
    </div>
  `}function Xg(){const e=document.getElementById("ai-assistant-root"),t=document.getElementById("ai-assistant-form"),r=document.getElementById("ai-assistant-input"),s=document.getElementById("ai-assistant-thread");if(!e||!t||!r||!s)return;const i=(o,a)=>{const l=document.createElement("div");l.className=o==="user"?"flex justify-end":"flex justify-start";const p=document.createElement("div");p.className=o==="user"?"max-w-[90%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground shadow-sm sm:max-w-[85%]":"max-w-[90%] rounded-2xl rounded-bl-md border border-border bg-card px-4 py-2.5 text-sm leading-relaxed text-card-foreground shadow-sm sm:max-w-[85%]",p.innerHTML=d(a).replace(/\n/g,"<br/>"),l.appendChild(p),s.appendChild(l),s.scrollTop=s.scrollHeight};e.addEventListener("click",o=>{const a=o.target.closest("[data-ai-quick-prompt]");if(!a||!(a instanceof HTMLElement))return;const l=a.getAttribute("data-ai-quick-prompt");l&&(r.value=l,r.focus(),t.requestSubmit())}),t.addEventListener("submit",o=>{o.preventDefault();const a=r.value.trim();a&&(i("user",a),r.value="",window.setTimeout(()=>i("assistant",Ep(a)),450))}),r.addEventListener("keydown",o=>{o.key==="Enter"&&(o.shiftKey||o.isComposing||(o.preventDefault(),t.requestSubmit()))});const n=document.getElementById("ai-assistant-voice");n==null||n.addEventListener("click",()=>{const o=window,a=o.SpeechRecognition??o.webkitSpeechRecognition;if(!a){i("assistant",u("ai.speech.unsupported"));return}const l=new a;l.lang=Pe()==="en"?"en-US":"zh-CN",l.continuous=!1,l.interimResults=!1,n.setAttribute("aria-pressed","true"),n.classList.add("ring-2","ring-ring"),l.onresult=p=>{const h=p.results,S=Array.from(h).map(w=>{var c;return((c=w[0])==null?void 0:c.transcript)??""}).join("");r.value=(r.value?`${r.value} `:"")+S.trim()},l.onerror=()=>{i("assistant",u("ai.speech.micError"))},l.onend=()=>{n.setAttribute("aria-pressed","false"),n.classList.remove("ring-2","ring-ring")};try{l.start()}catch{i("assistant",u("ai.speech.startFailed")),n.setAttribute("aria-pressed","false"),n.classList.remove("ring-2","ring-ring")}})}function Di(e,t){const r=t.children,s=so(e,r);return`
    <nav class="mb-6" aria-label="${L("nav.subPagesAria",{name:b(t.title,t.titleEn)}).replace(/"/g,"&quot;")}">
      <div class="-mx-1 flex gap-0.5 overflow-x-auto overflow-y-hidden pb-px scroll-smooth [scrollbar-width:thin]" role="tablist">
        ${r.map(n=>{const o=n.path===s,a=n.chainOnly?`<span class="ml-1 rounded bg-primary/15 px-1 py-px text-[10px] text-primary dark:bg-primary/25">${d(u("badge.chain"))}</span>`:"";return`
          <a href="#${n.path}"
            role="tab"
            aria-selected="${o}"
            tabindex="${o?"0":"-1"}"
            class="shrink-0 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors duration-200 min-h-11 inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-t-md ${o?"border-primary text-primary bg-primary/5":"border-transparent text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground"}"
          >
            <span class="truncate">${b(n.title,n.titleEn)}${a}</span>
          </a>`}).join("")}
      </div>
      <div class="h-px w-full bg-border" aria-hidden="true"></div>
    </nav>
  `}function Zg(){const e="h-9 max-w-[9rem] rounded-md border border-border bg-background px-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:max-w-[10.5rem]";return`
    <div
      class="flex max-w-full flex-wrap items-center justify-end gap-1.5 sm:gap-2"
      role="group"
      aria-label="${d(u("header.scopeGroup"))}"
      title="${d(u("header.scopeGroupTitle"))}"
    >
      <label class="sr-only" for="scope-brand-select">${d(u("header.scopeBrand"))}</label>
      <select id="scope-brand-select" class="${e}" aria-label="${d(u("header.scopeBrandAria"))}">
        <option value="">${d(u("header.scopeAllBrands"))}</option>
        <option value="miju">米聚餐饮集团</option>
        <option value="menusifu-na">MenuSifu 北美</option>
      </select>
      <label class="sr-only" for="scope-region-select">${d(u("header.scopeRegion"))}</label>
      <select id="scope-region-select" class="${e}" aria-label="${d(u("header.scopeRegionAria"))}">
        <option value="">${d(u("header.scopeAllRegions"))}</option>
        <option value="east-cn">华东大区</option>
        <option value="south-cn">华南大区</option>
        <option value="north-cn">华北大区</option>
        <option value="us-west">美国西海岸</option>
        <option value="us-east">美国东海岸</option>
      </select>
      <label class="sr-only" for="scope-store-select">${d(u("header.scopeStore"))}</label>
      <select id="scope-store-select" class="${e}" aria-label="${d(u("header.scopeStoreAria"))}">
        <option value="">${d(u("header.scopeAllStores"))}</option>
        <option value="flagship-nyc">旗舰店 · NYC</option>
        <option value="branch-la">分店 · LA</option>
        <option value="shanghai-ljz">上海陆家嘴店</option>
        <option value="guangzhou-tzh">广州天河店</option>
      </select>
    </div>
  `}function Jg(){const e=document.getElementById("scope-brand-select"),t=document.getElementById("scope-region-select"),r=document.getElementById("scope-store-select");if(!e||!t||!r)return;const s=o=>new Set(Array.from(o.options,a=>a.value));(()=>{try{const o=sessionStorage.getItem(Xe.brand);o!=null&&s(e).has(o)&&(e.value=o);const a=sessionStorage.getItem(Xe.region);a!=null&&s(t).has(a)&&(t.value=a);const l=sessionStorage.getItem(Xe.store);l!=null&&s(r).has(l)&&(r.value=l)}catch{}})();const n=()=>{try{sessionStorage.setItem(Xe.brand,e.value),sessionStorage.setItem(Xe.region,t.value),sessionStorage.setItem(Xe.store,r.value)}catch{}window.dispatchEvent(new CustomEvent("menusifu:scope-filter-change",{detail:{brand:e.value,region:t.value,store:r.value}}))};e.addEventListener("change",n),t.addEventListener("change",n),r.addEventListener("change",n)}function ef(){const e=location.hash.slice(1)||"/dashboard/overview",t=ym(e),{title:r,module:s}=hm(e),i=t?bs(t):s??"",n=e.startsWith("/ai-assistant"),o=Fo(e),a=Jo(e),l=ea(e),p=wo(e),h=Eo(e),S=Do(e),w=Po(e),c=Dp(e),f=Hp(e),x=Fp(e),v=Gp(e),$=jp(e),_=Up(e),C=Wp(e),m=Vp(e),E=zp(e),D=x||v||$||_||C||m||E,V=xi(e),B=n||a||l||p||h||S||w||f||x||v||$||_||C||m||E||c||V,pe=im(t),G="flex min-h-0 flex-1 flex-col gap-6 overflow-hidden sm:flex-row sm:items-stretch",W="min-w-0 min-h-0 flex-1 overflow-y-auto",g=D?"min-h-0 flex-1 flex flex-col overflow-hidden p-0 animate-fade-in":B?"min-h-0 flex-1 flex flex-col overflow-hidden p-4 md:p-6 animate-fade-in":"min-h-0 flex-1 overflow-y-auto p-4 md:p-6 animate-fade-in",T=D?"flex w-full min-h-0 min-w-0 flex-1 flex-col":n?"mx-auto flex w-full min-h-0 min-w-0 max-w-3xl flex-1 flex-col":B?"mx-auto flex w-full min-h-0 flex-1 flex-col max-w-[90rem]":"mx-auto max-w-6xl space-y-6",y=pe?B?`<div class="mb-6 shrink-0">${Di(e,t)}</div>`:Di(e,t):"",N=B?' class="min-h-0 flex-1 flex flex-col overflow-hidden"':"";return`
    <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      ${`<header class="z-40 flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border bg-card/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-card/80 sm:flex-nowrap sm:gap-4 sm:py-0">
        <div class="min-w-0">
          <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">${i}</p>
          <h1 id="main-content" tabindex="-1" class="truncate text-lg font-semibold tracking-tight text-card-foreground">${d(r)}</h1>
        </div>
        <div class="flex w-full min-w-0 flex-wrap items-center justify-end gap-2 sm:w-auto sm:flex-nowrap">
          <a
            href="#/ai-assistant/chat"
            class="inline-flex h-9 items-center gap-1.5 rounded-md border border-primary/35 bg-primary/[0.08] px-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:h-10 sm:px-3"
            title="${d(u("header.aiOpenTitle"))}"
          >
            <span class="shrink-0 text-primary [&>svg]:block" aria-hidden="true">${Qn}</span>
            <span class="hidden sm:inline">${d(u("header.aiShort"))}</span>
          </a>
          ${Zg()}
          ${xm()}
          <button type="button" id="theme-toggle" class="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:size-11" aria-label="${d(u("header.themeToggle"))}">
            <svg class="size-5 dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            <svg class="size-5 hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          </button>
        </div>
      </header>`}
      <main class="${g}">
        <div class="${T}">
          ${y}
          <div role="tabpanel" aria-label="${r.replace(/"/g,"&quot;")}" id="module-tab-panel"${N}>
            ${n?Yg():c?qp():f?Yp():x?Xp():v?Zp():$?Jp():_?em():C?tm():m?rm(e):E?sm():o?Ke(e,r,t,{brandProductsSubnav:!0}):a?`<div class="${G}">
                    ${Km(e)}
                    <div class="${W}">${Ke(e,r,t,{brandMenuSubnav:!0})}</div>
                  </div>`:l?`<div class="${G}">
                    ${Om(e)}
                    <div class="${W}">${Ke(e,r,t,{storeMenuSubnav:!0})}</div>
                  </div>`:p?`<div class="${G}">
                    ${_m(e)}
                    <div class="${W}">${Ke(e,r,t,{deviceManagementHardwareSubnav:!0})}</div>
                  </div>`:S?`<div class="${G}">
                    ${Cm(e)}
                    <div class="${W}">${Ke(e,r,t,{teamReportsSubnav:!0})}</div>
                  </div>`:w?`<div class="${G}">
                    ${Lm(e)}
                    <div class="${W}">${Ke(e,r,t,{teamSchedulingSubnav:!0})}</div>
                  </div>`:h?`<div class="${G}">
                    ${Rm(e)}
                    <div class="${W}">${Ke(e,r,t,{tipsManagementSubnav:!0})}</div>
                  </div>`:Gc(e)?fp():e==="/settings/overview"?Qg():xi(e)?`<div class="${G}">
                    ${Qm(e,r)}
                    <div class="${W} module-settings-scroll-host">${zg(e,r)}</div>
                  </div>`:Ke(e,r,t)}
          </div>
        </div>
      </main>
    </div>
  `}function Ke(e,t,r,s){const i=(r==null?void 0:r.subNavPlacement)==="sidebar",n=(r==null?void 0:r.subNavPlacement)==="sheet",o=s==null?void 0:s.brandProductsSubnav,a=s==null?void 0:s.brandMenuSubnav,l=s==null?void 0:s.storeMenuSubnav,p=s==null?void 0:s.deviceManagementHardwareSubnav,h=s==null?void 0:s.tipsManagementSubnav,S=s==null?void 0:s.teamReportsSubnav,w=s==null?void 0:s.teamSchedulingSubnav,c=r?b(r.title,r.titleEn):"",f=p?u("placeholder.bullet.deviceHw"):h?u("placeholder.bullet.tips"):S?u("placeholder.bullet.teamReports"):w?u("placeholder.bullet.teamScheduling"):o?u("placeholder.bullet.brandProducts"):a?u("placeholder.bullet.brandMenu"):l?u("placeholder.bullet.storeMenu"):(r==null?void 0:r.id)==="permission-mgmt"?u("placeholder.bullet.permissions"):(r==null?void 0:r.id)==="reservations"?u("placeholder.bullet.reservations"):n&&r?L("placeholder.sheetModule",{title:c}):i&&r?L("placeholder.sidebarModule",{title:c}):r?L("placeholder.tabModule",{title:c}):"",x=u(i||n?"placeholder.navDocLong":"placeholder.navDocShort"),v=[u("placeholder.kpi.sales"),u("placeholder.kpi.orders"),u("placeholder.kpi.staff")];return`
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="text-sm text-muted-foreground leading-relaxed">${d(u("placeholder.route"))}<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">${e}</code></p>
      <p class="mt-4 text-base text-card-foreground">${L("placeholder.intro",{title:t})}</p>
      <ul class="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
        ${f?`<li>${f}</li>`:""}
        <li>${x}</li>
        <li>${u("placeholder.designTokens")}</li>
        <li>${u("placeholder.chainTab")}</li>
      </ul>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${v.map($=>`<div class="rounded-lg border border-border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">${d($)}</p><p class="mt-2 text-2xl font-semibold tabular-nums text-card-foreground">—</p></div>`).join("")}
    </div>
  `}function q(){var n,o,a,l,p,h,S,w,c,f,x,v,$,_,C;wm(),zn(Pe());const e=location.hash.slice(1)||"/dashboard/overview";ai!==e&&!vi(e)&&z(!1),ai=e,li!==e&&!Dr(e)&&Q(!1),li=e,di!==e&&!qr(e)&&Y(!1),di=e,ui!==e&&!Pr(e)&&X(!1),ui=e,ci!==e&&!Mr(e)&&Z(!1),ci=e,pi!==e&&!Ir(e)&&J(!1),pi=e,mi!==e&&!pt(e)&&ee(!1),mi=e,gi!==e&&!Kr(e)&&te(!1),gi=e,fi!==e&&!ct(e)&&re(!1),fi=e,vm(e);const t=document.getElementById("app");if(!t)return;const r=((n=document.getElementById("nav-tree"))==null?void 0:n.scrollTop)??0,s=Math.max(r,Tm());t.innerHTML=`
    <div class="relative h-dvh min-h-0 w-full overflow-hidden">
      <div class="flex h-full min-h-0 w-full">
        ${Am()}
        ${ef()}
      </div>
    </div>
  `;const i=()=>{const m=document.getElementById("nav-tree");if(!m)return;const E=Math.max(0,m.scrollHeight-m.clientHeight);m.scrollTop=Math.min(s,E),yi(m.scrollTop)};requestAnimationFrame(()=>{i(),requestAnimationFrame(i)}),(o=document.getElementById("nav-tree"))==null||o.addEventListener("scroll",()=>{const m=document.getElementById("nav-tree");m&&yi(m.scrollTop)},{passive:!0}),(a=document.getElementById("nav-tree"))==null||a.addEventListener("click",m=>{var Ps;const E=m.target.closest("[data-inventory-sidebar-open]");if(E&&E instanceof HTMLButtonElement){m.preventDefault(),me(),Q(!1),Y(!1),X(!1),Z(!1),J(!1),ee(!1),te(!1),re(!1),z(!0),k(Ne("inventory-ordering","/operations/inventory-ordering/expiry")),q();return}const D=m.target.closest("[data-product-center-main-sidebar-open]");if(D&&D instanceof HTMLButtonElement){m.preventDefault(),me(),z(!1),Y(!1),X(!1),Z(!1),J(!1),ee(!1),te(!1),re(!1),Q(!0),k(Ne("product-center-main","/brand-products/products")),q();return}const V=m.target.closest("[data-marketing-sidebar-open]");if(V&&V instanceof HTMLButtonElement){m.preventDefault(),me(),z(!1),Q(!1),X(!1),Z(!1),J(!1),ee(!1),te(!1),re(!1),Y(!0),k(Ne("marketing","/marketing/campaigns")),q();return}const B=m.target.closest("[data-promotions-sidebar-open]");if(B&&B instanceof HTMLButtonElement){m.preventDefault(),me(),z(!1),Q(!1),Y(!1),Z(!1),J(!1),ee(!1),te(!1),re(!1),X(!0),k(Ne("promotions","/promotions/campaigns")),q();return}const pe=m.target.closest("[data-members-sidebar-open]");if(pe&&pe instanceof HTMLButtonElement){m.preventDefault(),me(),z(!1),Q(!1),Y(!1),X(!1),J(!1),ee(!1),te(!1),re(!1),Z(!0),k(Ne("members","/members/card/coupon-mgmt")),q();return}const G=m.target.closest("[data-reports-sidebar-open]");if(G&&G instanceof HTMLButtonElement){m.preventDefault(),me(),z(!1),Q(!1),Y(!1),X(!1),Z(!1),J(!1),te(!1),re(!1),ee(!0),k(Ne("reports-finance","/reports/revenue")),q();return}const W=m.target.closest("[data-print-sidebar-open]");if(W&&W instanceof HTMLButtonElement){m.preventDefault(),me(),z(!1),Q(!1),Y(!1),X(!1),Z(!1),J(!1),ee(!1),re(!1),te(!0),k(Ne("print-templates","/print-templates/decoration")),q();return}const g=m.target.closest("[data-reservations-sidebar-open]");if(g&&g instanceof HTMLButtonElement){m.preventDefault(),me(),z(!1),Q(!1),Y(!1),X(!1),Z(!1),J(!1),ee(!1),te(!1),re(!0),k(Ne("reservations","/operations/reservations/waitlist")),q();return}const T=m.target.closest("[data-gift-cards-sidebar-open]");if(T&&T instanceof HTMLButtonElement){m.preventDefault(),me(),z(!1),Q(!1),Y(!1),X(!1),Z(!1),ee(!1),te(!1),re(!1),J(!0),k(Ne("gift-cards","/gift-cards/cards")),q();return}const y=m.target.closest("[data-nav-module-sheet-sidebar-open]");if(y&&y instanceof HTMLButtonElement){const K=y.getAttribute("data-nav-module-sheet-sidebar-open");if(!K)return;m.preventDefault(),z(!1),Q(!1),Y(!1),X(!1),Z(!1),J(!1),ee(!1),te(!1),re(!1),me(),Pt(K,!0);const Ue=P.find(xo=>xo.id===K);Ue&&k(Ue.defaultChildPath??Ue.path),q();return}const N=m.target.closest("a[href^='#']");if(N&&N instanceof HTMLAnchorElement){const K=((Ps=N.getAttribute("href"))==null?void 0:Ps.slice(1))??"";K&&!vi(K)&&z(!1),K&&!Dr(K)&&Q(!1),K&&!qr(K)&&Y(!1),K&&!Pr(K)&&X(!1),K&&!Mr(K)&&Z(!1),K&&!Ir(K)&&J(!1),K&&!pt(K)&&ee(!1),K&&!Kr(K)&&te(!1),K&&!ct(K)&&re(!1);for(const Ue of P)Ue.subNavPlacement==="sheet"&&K&&!Ce(K,Ue)&&Pt(Ue.id,!1)}const A=m.target.closest("[data-sidebar-toggle]");if(!A||!(A instanceof HTMLButtonElement))return;const M=A.getAttribute("data-sidebar-toggle");if(!M)return;const ae=P.find(K=>K.id===M);if(!ae||ae.subNavPlacement!=="sidebar")return;m.preventDefault();const Me=location.hash.slice(1)||"/dashboard/overview",st=ro(ae,Me);km(ae.id,!st),q()},!0),(l=document.getElementById("inventory-secondary-sheet"))==null||l.addEventListener("click",m=>{if(m.target.closest("[data-inventory-secondary-close]")){m.preventDefault(),z(!1),q();return}},!0),(p=document.getElementById("product-center-main-secondary-sheet"))==null||p.addEventListener("click",m=>{const E=m.target;if(E.closest("[data-pcm-sheet-bp-mgmt-toggle]")){m.preventDefault();const D=location.hash.slice(1)||"/dashboard/overview";Em(!no(D)),q();return}if(E.closest("[data-pcm-sheet-brand-menu-toggle]")){m.preventDefault();const D=location.hash.slice(1)||"/dashboard/overview";Nm(!oo(D)),q();return}if(E.closest("[data-pcm-sheet-store-menu-toggle]")){m.preventDefault();const D=location.hash.slice(1)||"/dashboard/overview";Dm(!ao(D)),q();return}E.closest("[data-product-center-main-secondary-close]")&&(m.preventDefault(),Q(!1),q())},!0),(h=document.getElementById("marketing-secondary-sheet"))==null||h.addEventListener("click",m=>{const E=m.target;if(E.closest("[data-marketing-sheet-mgmt-toggle]")){m.preventDefault();const D=location.hash.slice(1)||"/dashboard/overview";qm(!lo(D)),q();return}E.closest("[data-marketing-secondary-close]")&&(m.preventDefault(),Y(!1),q())},!0),(S=document.getElementById("promotions-secondary-sheet"))==null||S.addEventListener("click",m=>{m.target.closest("[data-promotions-secondary-close]")&&(m.preventDefault(),X(!1),q())},!0),(w=document.getElementById("members-secondary-sheet"))==null||w.addEventListener("click",m=>{m.target.closest("[data-members-secondary-close]")&&(m.preventDefault(),Z(!1),q())},!0),(c=document.getElementById("gift-cards-secondary-sheet"))==null||c.addEventListener("click",m=>{m.target.closest("[data-gift-cards-secondary-close]")&&(m.preventDefault(),J(!1),q())},!0),(f=document.getElementById("reports-secondary-sheet"))==null||f.addEventListener("click",m=>{m.target.closest("[data-reports-secondary-close]")&&(m.preventDefault(),ee(!1),q())},!0),(x=document.getElementById("print-secondary-sheet"))==null||x.addEventListener("click",m=>{m.target.closest("[data-print-secondary-close]")&&(m.preventDefault(),te(!1),q())},!0),(v=document.getElementById("reservations-secondary-sheet"))==null||v.addEventListener("click",m=>{m.target.closest("[data-reservations-secondary-close]")&&(m.preventDefault(),re(!1),q())},!0);for(const m of P)m.subNavPlacement==="sheet"&&(($=document.getElementById(`${m.id}-secondary-sheet`))==null||$.addEventListener("click",E=>{E.target.closest(`[data-nav-module-sheet-secondary-close="${m.id}"]`)&&(E.preventDefault(),Pt(m.id,!1),q())},!0));(_=t.firstElementChild)==null||_.addEventListener("click",m=>{var T;const E=m.target.closest("[data-tertiary-sidebar-toggle]");if(!E||!(E instanceof HTMLButtonElement))return;const D=E.getAttribute("data-tertiary-sidebar-toggle");if(!D)return;const V=P.filter(y=>y.subNavPlacement==="sheet").reduce((y,N)=>y||Fr(N).find(A=>A.id===D),void 0),B=Lr.find(y=>y.id===D)??Bt.find(y=>y.id===D)??ut.find(y=>y.id===D)??Hr.find(y=>y.id===D)??Lt.find(y=>y.id===D)??Je.find(y=>y.id===D)??vt.find(y=>y.id===D)??V;if(!((T=B==null?void 0:B.sidebarChildren)!=null&&T.length))return;m.preventDefault();const pe=location.hash.slice(1)||"/dashboard/overview",G=B.activePrefix??B.path,W=pe===G||pe.startsWith(`${G}/`),g=Ds(D,pe,W);$m(D,!g),q()}),(C=document.getElementById("theme-toggle"))==null||C.addEventListener("click",()=>{var E;document.documentElement.classList.toggle("dark");const m=document.documentElement.classList.contains("dark");(E=document.querySelector('meta[name="theme-color"]'))==null||E.setAttribute("content",m?"#0f172a":"#f8fafc")}),Xg(),Jg(),Sm(),nm(),Vm(e),Tp(q),zm(),Ug(),Wg(),ja(),ml(),ln(),sl(),ic(),$c(),Vg(),$d(),_d(),nu(),ou(),Um(e)}window.addEventListener("hashchange",q);typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.classList.add("dark");q();
