(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const Te=[{id:"bp-products",title:"商品",titleEn:"Products",path:"/brand-products/products"},{id:"bp-product-categories",title:"商品分类",titleEn:"Product categories",path:"/brand-products/product-categories"},{id:"bp-spec-groups",title:"规格组",titleEn:"Spec groups",path:"/brand-products/spec-groups"},{id:"bp-flavor-groups",title:"口味组",titleEn:"Flavor groups",path:"/brand-products/flavor-groups"},{id:"bp-prep-groups",title:"做法组",titleEn:"Preparation groups",path:"/brand-products/prep-groups"},{id:"bp-addon-groups",title:"加料组",titleEn:"Add-on groups",path:"/brand-products/addon-groups"},{id:"bp-combo-groups",title:"套餐组",titleEn:"Combo groups",path:"/brand-products/combo-groups"},{id:"bp-seasoning",title:"调味管理",titleEn:"Seasoning management",path:"/brand-products/seasoning-mgmt/seasoning"},{id:"bp-tags",title:"标签管理",titleEn:"Tag management",path:"/brand-products/tags/description"},{id:"bp-ingredients",title:"原料管理",titleEn:"Ingredients",path:"/brand-products/ingredients"},{id:"bp-ingredient-categories",title:"原料分类",titleEn:"Ingredient categories",path:"/brand-products/ingredient-categories"},{id:"bp-images",title:"图片管理",titleEn:"Image management",path:"/brand-products/images"},{id:"bp-recipes",title:"配方管理",titleEn:"Recipe management",path:"/brand-products/recipes/list"},{id:"bp-seasoning-distribution",title:"下发记录",titleEn:"Distribution log",path:"/brand-products/seasoning-mgmt/distribution-log"},{id:"bm-menus",title:"品牌菜单",titleEn:"Brand menus",path:"/brand-menu/menus"},{id:"bm-distribution-log",title:"下发记录",titleEn:"Distribution log",path:"/brand-menu/distribution-log"},{id:"bm-groups",title:"菜单分组",titleEn:"Menu groups",path:"/brand-menu/groups"},{id:"bm-channel-visibility",title:"渠道可见性",titleEn:"Channel visibility",path:"/brand-menu/channel-visibility"},{id:"bm-publish",title:"发布与版本",titleEn:"Publish & versions",path:"/brand-menu/publish-versions"},{id:"menu-store-menu",title:"门店菜单",titleEn:"Store menu",path:"/menu/store-menu"},{id:"menu-store-products",title:"门店商品",titleEn:"Store products",path:"/menu/store-products"},{id:"menu-inventory-changes",title:"库存变更记录",titleEn:"Inventory change log",path:"/menu/inventory-changes"},{id:"menu-product-recipe",title:"商品配方",titleEn:"Product recipe",path:"/menu/product-recipe"},{id:"menu-recipe-list",title:"配方列表",titleEn:"Recipe list",path:"/menu/recipe-list"},{id:"menu-store-seasoning",title:"门店调味",titleEn:"Store seasoning",path:"/menu/store-seasoning"},{id:"menu-print-settings",title:"打印设置",titleEn:"Print settings",path:"/menu/print-settings"},{id:"menu-multi-language",title:"菜单多语言",titleEn:"Menu multi-language",path:"/menu/multi-language"},{id:"menu-tax-types",title:"税种管理",titleEn:"Tax types",path:"/menu/tax-types/settings"},{id:"menu-product-tax-mgmt",title:"商品税管理",titleEn:"Product tax management",path:"/menu/tax-types/product-tax"}],R=[{id:"brand-mgmt",title:"品牌管理",titleEn:"Brand management",icon:"brandMgmt",path:"/brand",subNavPlacement:"sidebar",defaultChildPath:"/brand/overview",children:[{id:"br-overview",title:"品牌总览",titleEn:"Overview",path:"/brand/overview"},{id:"br-list",title:"品牌列表",titleEn:"Brand list",path:"/brand/list"},{id:"br-settings",title:"品牌设置",titleEn:"Brand settings",path:"/brand/settings"}]},{id:"store-mgmt",title:"门店管理",titleEn:"Store management",icon:"storeMgmt",path:"/stores",subNavPlacement:"sidebar",defaultChildPath:"/stores/overview",children:[{id:"st-overview",title:"门店总览",titleEn:"Overview",path:"/stores/overview"},{id:"st-list",title:"门店列表",titleEn:"Store list",path:"/stores/list"},{id:"st-status",title:"门店状态",titleEn:"Store status",path:"/stores/status"}]},{id:"dashboard",title:"主页",titleEn:"Dashboard",icon:"home",path:"/dashboard",subNavPlacement:"sidebar",defaultChildPath:"/dashboard/overview",children:[{id:"dash-overview",title:"今日概览",path:"/dashboard/overview"},{id:"dash-todos",title:"待办",path:"/dashboard/todos"},{id:"dash-kpi",title:"关键指标",path:"/dashboard/kpi"}]},{id:"team",title:"团队管理",titleEn:"Team",icon:"team",path:"/team",subNavPlacement:"sidebar",defaultChildPath:"/team/roles-employees",children:[{id:"team-roles",title:"角色与员工",path:"/team/roles-employees"},{id:"team-breaks",title:"休息与加班",path:"/team/breaks-overtime"},{id:"team-clock",title:"员工打卡",path:"/team/clock-in"},{id:"team-tips",title:"小费管理",path:"/team/tips"},{id:"team-reports",title:"员工报表",path:"/team/reports"},{id:"team-7shifts",title:"7Shifts 对接（排班）",path:"/team/integrations/7shifts"},{id:"team-schedule",title:"排班与考勤",path:"/team/scheduling",chainOnly:!0},{id:"team-training",title:"绩效与培训",path:"/team/training-performance"}]},{id:"product-center-a",title:"商品中心",titleEn:"Product center",icon:"inventory",path:"/product-center-a",matchPrefixes:["/product-center-a"],defaultChildPath:"/product-center-a",children:[{id:"pca-main",title:"商品中心",titleEn:"Product center",path:"/product-center-a"}]},{id:"orders",title:"订单中心",titleEn:"Order center",icon:"orders",path:"/orders",subNavPlacement:"sidebar",defaultChildPath:"/orders/all",children:[{id:"orders-all",title:"全部订单",path:"/orders/all"},{id:"orders-refunds",title:"退单",titleEn:"Refunds & voids",path:"/orders/refunds"},{id:"orders-history",title:"订单历史",path:"/orders/history"}]},{id:"transactions",title:"支付中心",titleEn:"Payment center",icon:"receipt",path:"/transactions",subNavPlacement:"sidebar",defaultChildPath:"/transactions/ledger",children:[{id:"tx-ledger",title:"交易流水",path:"/transactions/ledger"},{id:"tx-payments",title:"支付方式",path:"/transactions/payments"},{id:"tx-reconcile",title:"对账",path:"/transactions/reconcile"}]},{id:"waitlist",title:"外卖/来取",titleEn:"Delivery & pickup",icon:"waitlist",path:"/operations/waitlist",subNavPlacement:"tabs",defaultChildPath:"/operations/waitlist",children:[{id:"wl-main",title:"外卖/来取",titleEn:"Delivery & pickup",path:"/operations/waitlist"}]},{id:"marketing",title:"营销中心",titleEn:"Marketing center",icon:"marketing",path:"/marketing",defaultChildPath:"/marketing/ai/ads",children:[{id:"mkt-main",title:"营销中心",titleEn:"Marketing center",path:"/marketing"}]},{id:"promotions",title:"促销中心",titleEn:"Promotion center",icon:"promo",path:"/promotions",defaultChildPath:"/promotions/campaigns",children:[{id:"promo-campaigns",title:"促销管理",path:"/promotions/campaigns"}]},{id:"members",title:"会员中心",titleEn:"Member center",icon:"members",path:"/members",defaultChildPath:"/members/settings",children:[{id:"mem-main",title:"会员中心",titleEn:"Member center",path:"/members/settings"}]},{id:"gift-cards",title:"礼品卡中心",titleEn:"Gift card center",icon:"gift",path:"/gift-cards",defaultChildPath:"/gift-cards/design",children:[{id:"gc-main",title:"礼品卡中心",titleEn:"Gift card center",path:"/gift-cards"}]},{id:"reviews",title:"评价中心",titleEn:"Review center",icon:"reviews",path:"/reviews",subNavPlacement:"sidebar",defaultChildPath:"/reviews/insights",children:[{id:"rev-insights",title:"评价洞察",path:"/reviews/insights"},{id:"rev-settings",title:"评价设置",path:"/reviews/settings"},{id:"rev-detail",title:"评价明细",path:"/reviews/detail"},{id:"rev-stats",title:"评价统计",path:"/reviews/stats"}]},{id:"queue-call",title:"前厅管理中心",titleEn:"Front of house management center",icon:"queueCall",path:"/operations/queue-call",subNavPlacement:"tabs",defaultChildPath:"/operations/queue-call",children:[{id:"qc-main",title:"前厅管理中心",titleEn:"Front of house management center",path:"/operations/queue-call"}]},{id:"kitchen-kds",title:"后厨管理中心",titleEn:"Back-of-house management center",icon:"kitchenKds",path:"/operations/kitchen-kds",subNavPlacement:"tabs",defaultChildPath:"/operations/kitchen-kds",children:[{id:"kds-main",title:"后厨设置",titleEn:"Back-of-house settings",path:"/operations/kitchen-kds"}]},{id:"reservations",title:"预约等位中心",titleEn:"Reservation & waitlist center",icon:"reservations",path:"/operations/reservations",defaultChildPath:"/operations/reservations",children:[{id:"res-main",title:"预约等位中心",titleEn:"Reservation & waitlist center",path:"/operations/reservations"}]},{id:"reports-finance",title:"报表中心",titleEn:"Reporting center",icon:"reports",path:"/reports",defaultChildPath:"/reports/revenue",children:[{id:"rpt-main",title:"报表中心",titleEn:"Reporting center",path:"/reports/revenue"}]},{id:"finance-center",title:"财务中心",titleEn:"Finance center",icon:"financeCenter",path:"/finance",subNavPlacement:"sidebar",defaultChildPath:"/finance/overview",children:[{id:"fin-overview",title:"财务总览",titleEn:"Overview",path:"/finance/overview"},{id:"fin-cash-flow",title:"收支流水",titleEn:"Cash flow",path:"/finance/cash-flow"},{id:"fin-reconcile",title:"对账管理",titleEn:"Reconciliation",path:"/finance/reconciliation"},{id:"fin-invoices",title:"发票与税务",titleEn:"Invoices & tax",path:"/finance/invoices"}]},{id:"print-templates",title:"打印中心",titleEn:"Print center",icon:"printTemplate",path:"/print-templates",defaultChildPath:"/print-templates/list",children:[{id:"pt-main",title:"打印中心",titleEn:"Print center",path:"/print-templates/list"}]},{id:"notifications",title:"消息中心",titleEn:"Message center",icon:"notifications",path:"/notifications",subNavPlacement:"sidebar",defaultChildPath:"/notifications/center",children:[{id:"notif-center",title:"收件箱",titleEn:"Inbox",path:"/notifications/center"},{id:"notif-settings",title:"通知设置",titleEn:"Preferences",path:"/notifications/settings"},{id:"notif-templates",title:"模板与订阅",titleEn:"Templates & subscriptions",path:"/notifications/templates"}]},{id:"inventory-ordering",title:"库存管理中心",titleEn:"Inventory management center",icon:"inventory",path:"/operations/inventory-ordering",subNavPlacement:"sidebar",defaultChildPath:"/operations/inventory-ordering",children:[{id:"inv-main",title:"订货与库存",path:"/operations/inventory-ordering",chainOnly:!0},{id:"inv-change-log",title:"库存变更记录",titleEn:"Inventory change log",path:"/operations/inventory-ordering/inventory-change-log"}]},{id:"device-management",title:"硬件管理中心",titleEn:"Hardware management center",icon:"deviceManagement",path:"/device-management",subNavPlacement:"sidebar",defaultChildPath:"/device-management/overview",children:[{id:"dm-overview",title:"设备总览",titleEn:"Overview",path:"/device-management/overview"},{id:"dm-hardware",title:"硬件",titleEn:"Hardware",path:"/device-management/hardware/payments"},{id:"dm-terminals",title:"终端管理",titleEn:"Terminals",path:"/device-management/terminals"},{id:"dm-binding",title:"绑定与授权",titleEn:"Binding & authorization",path:"/device-management/binding"},{id:"dm-alerts",title:"监控告警",titleEn:"Monitoring & alerts",path:"/device-management/alerts"}]},{id:"permission-mgmt",title:"权限管理中心",titleEn:"Access management center",icon:"permissionMgmt",path:"/permissions",subNavPlacement:"sidebar",defaultChildPath:"/permissions/overview",children:[{id:"perm-overview",title:"权限总览",titleEn:"Overview",path:"/permissions/overview"},{id:"perm-roles",title:"角色与功能权限",titleEn:"Roles & permissions",path:"/permissions/roles"},{id:"perm-staff",title:"员工授权",titleEn:"Staff assignments",path:"/permissions/staff"},{id:"perm-changelog",title:"权限变更记录",titleEn:"Permission change log",path:"/permissions/change-log"}]},{id:"capital-turnover",title:"信贷中心",titleEn:"Credit center",icon:"capital",path:"/reports/capital",defaultChildPath:"/reports/capital",children:[{id:"capital-main",title:"信贷中心",titleEn:"Credit center",path:"/reports/capital"}]},{id:"asset-center",title:"素材中心",titleEn:"Asset center",icon:"assetCenter",path:"/asset-center",subNavPlacement:"sidebar",defaultChildPath:"/asset-center/overview",children:[{id:"ac-overview",title:"素材总览",titleEn:"Overview",path:"/asset-center/overview"},{id:"ac-images",title:"图片库",titleEn:"Image library",path:"/asset-center/images"},{id:"ac-videos",title:"视频库",titleEn:"Video library",path:"/asset-center/videos"},{id:"ac-templates",title:"模板与版式",titleEn:"Templates & layouts",path:"/asset-center/templates"}]},{id:"config-center",title:"配置中心",titleEn:"Configuration center",icon:"configCenter",path:"/config-center",subNavPlacement:"sidebar",defaultChildPath:"/config-center/overview",children:[{id:"cc-overview",title:"配置总览",titleEn:"Overview",path:"/config-center/overview"},{id:"cc-business",title:"业务参数",titleEn:"Business parameters",path:"/config-center/business"},{id:"cc-channels",title:"渠道与对接",titleEn:"Channels & integrations",path:"/config-center/channels"},{id:"cc-features",title:"功能开关",titleEn:"Feature flags",path:"/config-center/features"}]},{id:"settings",title:"系统设置",titleEn:"System settings",icon:"settings",path:"/settings",subNavPlacement:"sidebar",defaultChildPath:"/settings/overview",children:[{id:"set-overview",title:"系统设置总揽",titleEn:"System settings overview",path:"/settings/overview"},{id:"set-basic",title:"基础设置（门店、营业时间、多门店）",path:"/settings/basic"},{id:"set-report",title:"报表设置",path:"/settings/reports"},{id:"set-print",title:"打印与票据",path:"/settings/printing"},{id:"set-tips",title:"小费设置",path:"/settings/tips"},{id:"set-service",title:"服务流程",path:"/settings/service-flow"},{id:"set-security",title:"安全设置",path:"/settings/security"},{id:"set-accounts",title:"账号与权限",path:"/settings/accounts"},{id:"set-audit",title:"操作日志",path:"/settings/audit-log"},{id:"set-integrations",title:"集成与 API",path:"/settings/integrations"},{id:"set-data-scope",title:"角色与数据范围",path:"/settings/data-scope",chainOnly:!0}]},{id:"product-center",title:"商品中心A",titleEn:"Product center A",icon:"brandProducts",path:"/product-center",matchPrefixes:["/brand-products","/brand-menu","/menu"],subNavPlacement:"sidebar",defaultChildPath:"/brand-products/products",children:[{id:"pc-brand-products",title:"品牌商品管理",titleEn:"Brand products",path:"/brand-products"},{id:"pc-brand-menu",title:"品牌菜单管理",titleEn:"Brand menus",path:"/brand-menu"},{id:"pc-store-products",title:"门店商品管理",titleEn:"Store product management",path:"/menu"}]}],N=[{id:"dmh-payments",title:"支付",titleEn:"Payments",path:"/device-management/hardware/payments"},{id:"dmh-cash-drawer",title:"钱箱",titleEn:"Cash drawer",path:"/device-management/hardware/cash-drawer"},{id:"dmh-router",title:"路由器",titleEn:"Router",path:"/device-management/hardware/router"},{id:"dmh-pos",title:"POS",titleEn:"POS",path:"/device-management/hardware/pos"},{id:"dmh-pos-go",title:"POS GO",titleEn:"POS Go",path:"/device-management/hardware/pos-go"},{id:"dmh-kds",title:"KDS",titleEn:"KDS",path:"/device-management/hardware/kds"},{id:"dmh-queue-display",title:"叫号屏",titleEn:"Queue display",path:"/device-management/hardware/queue-display"},{id:"dmh-printers",title:"打印机",titleEn:"Printers",path:"/device-management/hardware/printers"},{id:"dmh-scale",title:"电子秤",titleEn:"Electronic scale",path:"/device-management/hardware/scale"},{id:"dmh-kiosk",title:"Kiosk",titleEn:"Kiosk",path:"/device-management/hardware/kiosk"},{id:"dmh-emenu",title:"eMenu",titleEn:"eMenu devices",path:"/device-management/hardware/emenu"}];function le(){var e;return((e=N[0])==null?void 0:e.path)??"/device-management/hardware/payments"}function F(e){const t=[...N].sort((r,i)=>i.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function ce(e){return F(e)!==""}const Re=N.map(e=>({id:`so-${e.id}`,title:e.title,titleEn:e.titleEn,path:e.path})),O=[{id:"tips-distribution",title:"小费分配",titleEn:"Tip distribution",path:"/team/tips/distribution"},{id:"tips-details",title:"分配明细",titleEn:"Distribution details",path:"/team/tips/details"},{id:"tips-rules",title:"分配规则",titleEn:"Distribution rules",path:"/team/tips/rules"}];function Ne(){var e;return((e=O[0])==null?void 0:e.path)??"/team/tips/distribution"}function z(e){const t=[...O].sort((r,i)=>i.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function ue(e){return z(e)!==""}const W=[{id:"team-rpt-overview",title:"概览",titleEn:"Overview",path:"/team/reports/overview"},{id:"team-rpt-tips",title:"小费",titleEn:"Tips",path:"/team/reports/tips"},{id:"team-rpt-performance",title:"绩效",titleEn:"Performance",path:"/team/reports/performance"},{id:"team-rpt-payroll",title:"薪资",titleEn:"Payroll",path:"/team/reports/payroll"}];function je(){var e;return((e=W[0])==null?void 0:e.path)??"/team/reports/overview"}function V(e){const t=[...W].sort((r,i)=>i.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function pe(e){return V(e)!==""}const H=[{id:"team-sch-attendance",title:"考勤记录",titleEn:"Attendance records",path:"/team/scheduling/attendance-records"},{id:"team-sch-overtime",title:"加班规则",titleEn:"Overtime rules",path:"/team/scheduling/overtime-rules"}];function _e(){var e;return((e=H[0])==null?void 0:e.path)??"/team/scheduling/attendance-records"}function U(e){const t=[...H].sort((r,i)=>i.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function ge(e){return U(e)!==""}function Le(e){var t;return(t=e.activePrefixes)!=null&&t.length?e.activePrefixes:e.activePrefix?[e.activePrefix]:[e.path]}const G=[{id:"bp-products",title:"商品",titleEn:"Products",path:"/brand-products/products"},{id:"bp-product-categories",title:"分类",titleEn:"Categories",path:"/brand-products/product-categories"},{id:"bp-spec-groups",title:"规格组",titleEn:"Spec groups",path:"/brand-products/spec-groups"},{id:"bp-flavor-groups",title:"口味组",titleEn:"Flavor groups",path:"/brand-products/flavor-groups"},{id:"bp-prep-groups",title:"做法组",titleEn:"Prep groups",path:"/brand-products/prep-groups"},{id:"bp-addon-groups",title:"加料组",titleEn:"Add-on groups",path:"/brand-products/addon-groups"},{id:"bp-combo-groups",title:"套餐组",titleEn:"Combo groups",path:"/brand-products/combo-groups"},{id:"bp-seasoning-mgmt",title:"调味管理",titleEn:"Seasoning",path:"/brand-products/seasoning-mgmt/seasoning",activePrefix:"/brand-products/seasoning-mgmt",sidebarChildren:[{title:"调味",titleEn:"Seasoning",path:"/brand-products/seasoning-mgmt/seasoning"},{title:"下发记录",titleEn:"Distribution log",path:"/brand-products/seasoning-mgmt/distribution-log"}]},{id:"bp-tags-mgmt",title:"标签管理",titleEn:"Tags",path:"/brand-products/tags/description",activePrefix:"/brand-products/tags",sidebarChildren:[{title:"描述标签",titleEn:"Description tags",path:"/brand-products/tags/description"},{title:"商品角标",titleEn:"Product corner badges",path:"/brand-products/tags/corner-badge"},{title:"统计标签",titleEn:"Statistics tags",path:"/brand-products/tags/stats"}]},{id:"bp-ingredients",title:"原料管理",titleEn:"Ingredients",path:"/brand-products/ingredients"},{id:"bp-ingredient-categories",title:"原料分类",titleEn:"Ingredient categories",path:"/brand-products/ingredient-categories"},{id:"bp-images",title:"图片管理",titleEn:"Images",path:"/brand-products/images"},{id:"bp-recipes-mgmt",title:"配方管理",titleEn:"Recipes",path:"/brand-products/recipes/list",activePrefix:"/brand-products/recipes",sidebarChildren:[{title:"配方列表",titleEn:"Recipe list",path:"/brand-products/recipes/list"},{title:"原料管理",titleEn:"Ingredients (recipes)",path:"/brand-products/recipes/ingredients"},{title:"记录中心",titleEn:"Records center",path:"/brand-products/recipes/records"}]}],me=[{id:"bm-menus",title:"菜单",titleEn:"Menus",path:"/brand-menu/menus",activePrefix:"/brand-menu"},{id:"bm-distribution",title:"下发记录",titleEn:"Distribution log",path:"/brand-menu/distribution-log",activePrefix:"/brand-menu/distribution-log"}],K=[{id:"sm-store-menu",title:"门店菜单",titleEn:"Store menu",path:"/menu/store-menu"},{id:"sm-store-products",title:"门店商品",titleEn:"Store products",path:"/menu/store-products"},{id:"sm-store-seasoning",title:"门店调味",titleEn:"Store seasoning",path:"/menu/store-seasoning"},{id:"sm-inventory-changes",title:"库存变更记录",titleEn:"Inventory changes",path:"/menu/inventory-changes"},{id:"sm-print-settings",title:"打印设置",titleEn:"Print settings",path:"/menu/print-settings"},{id:"sm-tax-types",title:"税种管理",titleEn:"Tax types",path:"/menu/tax-types/settings",activePrefix:"/menu/tax-types",sidebarChildren:[{title:"税种管理",titleEn:"Tax types",path:"/menu/tax-types/settings"},{title:"商品税管理",titleEn:"Product tax management",path:"/menu/tax-types/product-tax"}]},{id:"sm-recipe-list",title:"配方列表",titleEn:"Recipe list",path:"/menu/recipe-list",activePrefixes:["/menu/recipe-list","/menu/product-recipe"]}];function Y(e,t){const r=t.flatMap(i=>Le(i).map(n=>({item:i,prefix:n}))).sort((i,n)=>n.prefix.length-i.prefix.length);for(const{item:i,prefix:n}of r)if(e===n||e.startsWith(`${n}/`))return i.path;return""}function Oe(e){return e.startsWith("/brand-products")?Y(e,G):""}function he(e){return e.startsWith("/brand-products")}function We(e){return e.startsWith("/brand-menu")?Y(e,me):""}function fe(e){return e.startsWith("/brand-menu")}function He(e){return e.startsWith("/menu")?Y(e,K):""}function be(e){return e.startsWith("/menu")}const ve=[{id:"mt-tax-settings",title:"税种管理",titleEn:"Tax type settings",path:"/menu/tax-types/settings"},{id:"mt-product-tax",title:"商品税管理",titleEn:"Product tax management",path:"/menu/tax-types/product-tax"}];function xe(e){const t=[...ve].sort((r,i)=>i.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const Z=[{id:"bp-sm-seasoning",title:"调味",titleEn:"Seasoning",path:"/brand-products/seasoning-mgmt/seasoning"},{id:"bp-sm-distribution-log",title:"下发记录",titleEn:"Distribution log",path:"/brand-products/seasoning-mgmt/distribution-log"}];function qe(){var e;return((e=Z[0])==null?void 0:e.path)??"/brand-products/seasoning-mgmt/seasoning"}function we(e){const t=[...Z].sort((r,i)=>i.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const X=[{id:"bp-tg-description",title:"描述标签",titleEn:"Description tags",path:"/brand-products/tags/description"},{id:"bp-tg-corner",title:"商品角标",titleEn:"Product corner badges",path:"/brand-products/tags/corner-badge"},{id:"bp-tg-stats",title:"统计标签",titleEn:"Statistics tags",path:"/brand-products/tags/stats"}];function De(){var e;return((e=X[0])==null?void 0:e.path)??"/brand-products/tags/description"}function ye(e){const t=[...X].sort((r,i)=>i.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const Q=[{id:"bp-rc-list",title:"配方列表",titleEn:"Recipe list",path:"/brand-products/recipes/list"},{id:"bp-rc-ingredients",title:"原料管理",titleEn:"Ingredients (recipes)",path:"/brand-products/recipes/ingredients"},{id:"bp-rc-records",title:"记录中心",titleEn:"Records center",path:"/brand-products/recipes/records"}];function Fe(){var e;return((e=Q[0])==null?void 0:e.path)??"/brand-products/recipes/list"}function ke(e){const t=[...Q].sort((r,i)=>i.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function k(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ze(e){const t=e.trim();return t?/权限|角色|RBAC|员工授权/i.test(t)?"【演示】可说明权限矩阵、员工与角色绑定，并在对接后端后协助跳转「权限管理中心」与预填变更。也可回答例如：谁能改价、店长默认可见哪些报表。":/搜索|查找|搜|哪里有|在哪/i.test(t)?"【演示】全站检索由同一智能体完成：可定位侧栏模块、路由、帮助文档与业务对象（订单、门店、商品等）。接入索引与向量库后支持口语化问法。":/分析|报表|趋势|统计|营业额|收入/i.test(t)?"【演示】可按您描述的时间、门店、品类做对比与摘要；接入数仓后可拉取真实指标、生成图表与下钻链接。":/配置|设置|修改|改|打开|关闭/i.test(t)?"【演示】配置类意图会解析为「目标模块 + 动作」，走策略校验与（可选）人工审批后再执行。当前壳层仅模拟确认，不写回生产。":"【演示】单一智能体持续本对话上下文，接入模型后可执行查数、改配、导表与权限调整（受租户策略约束）。请补充门店、时间范围或要操作的对象。":""}const Ee='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',D={home:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',orders:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',receipt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',floorPlan:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>',kitchenKds:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13h12"/><path d="M6 9h12"/><path d="M9 5h6v4H9z"/><path d="M8 21h8v-4H8z"/></svg>',queueCall:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',reservations:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',waitlist:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>',inventory:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',promo:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><path d="M11.5 11.5 6 17l-4 1 1-4 5.5-5.5"/></svg>',marketing:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',members:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',reviews:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>',gift:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',team:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',reports:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',capital:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>',financeCenter:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',notifications:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',printTemplate:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>',deviceManagement:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="5" x="4" y="4" rx="1"/><rect width="16" height="5" x="4" y="15" rx="1"/><path d="M8 8h.01"/><path d="M8 19h.01"/><path d="M12 8h.01"/><path d="M12 19h.01"/><path d="M16 8h.01"/><path d="M16 19h.01"/></svg>',brandProducts:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l6.88-6.88a1 1 0 0 0 0-1.41L12 2Z"/><path d="M7 7h.01"/></svg>',brandMenu:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h4"/></svg>',brandMgmt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/></svg>',storeMgmt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><path d="M17 14h1"/><path d="M17 18h1"/></svg>',permissionMgmt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',assetCenter:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',configCenter:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>'},I="tertiary-inline-subnav-scroll min-h-0 max-h-[min(52dvh,26rem)] overflow-y-auto overscroll-y-contain sm:max-h-full sm:self-stretch";function J(e){return e==="/product-center-a"||e.startsWith("/product-center-a/")}const Ve="https://itemcenter.menusifudev.com/";function Ue(){return`<div
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
          src="${k(Ve)}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`}function Ge(){return`<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「商品中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`}const Ke="https://cloud.menusifucloudqa.com/promotion/promotion?businessId=000256&home=https%3A%2F%2Fcloud.menusifucloudqa.com%2FB%2Fbusiness%2Fdafbac66d38cdbead20c54b12600a8e1%3AU2FsdGVkX1-bWK4HRct-Bv54bvJ1r_HXdEKBrQflm9w%2Fmain%2Fmenu&businessName=%E5%A4%A7%E9%A3%9E%E9%B8%BD-AD--20306&S=bc9d78ad2c6890e6f1d0b6eb61e57d3a:U2FsdGVkX1-hYcysMQeABe37ytSGGFcRzBr1eChXemGqnMEFfPTtqyz80W8qRdcMzYzApzBJ0wjNZd51Wc7TSj0C1U3aFxY1qwzMSg27SYaCES2Rq90RPe0jdx_2GJSXK6-jcP1MouPm9TBaB1__XnAlMdMkf2hd0PMea7Kqd0pg-g09KeyYs-Bg8AtmI_VQdR77Rfbt3OC_xVcBfKvq7d-6hso_DmXS4N8zUei0pGkhur5bDcsa8Hh6fYnt9QOHjQ88zFidegowYYc4efIflYpMPzBifN0n71yrkdVYIBH4UIFJBbC5OMq3oU8OyPec";function ee(e){return e==="/promotions/campaigns"||e.startsWith("/promotions/campaigns/")}function Ye(){return`<div
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
          src="${k(Ke)}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`}function Ze(){return`<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「促销中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`}const Xe="https://cloud.menusifucloudqa.com/factory/giftcardb";function te(e){return e==="/gift-cards/design"||e.startsWith("/gift-cards/design/")}function Qe(){return`<div
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
          src="${k(Xe)}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`}function Je(){return`<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「礼品卡中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`}const et="https://cloud.menusifucloudqa.com/promotion/marketing";function re(e){return e==="/marketing/ai/ads"||e.startsWith("/marketing/ai/ads/")}function tt(){return`<div
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
          src="${k(et)}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`}function rt(){return`<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「营销中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`}const it="https://cloud.menusifucloudqa.com/report";function ie(e){return e==="/reports/capital"||e.startsWith("/reports/capital/")?!1:e==="/reports"||e==="/reports/"||e.startsWith("/reports/")}function nt(){return`<div
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
          src="${k(it)}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`}function st(){return`<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「报表中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`}const ot="https://cloud.menusifucloudqa.com/promotion/coupon";function ne(e){return e==="/members"||e==="/members/"||e.startsWith("/members/")}function at(){return`<div
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
          src="${k(ot)}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`}function dt(){return`<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「会员中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`}const lt="https://printing.menusifuchina.com/";function se(e){return e==="/print-templates"||e==="/print-templates/"||e.startsWith("/print-templates/")}function ct(){return`<div
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
          src="${k(lt)}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`}function ut(){return`<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「打印中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`}const pt="https://cloud.menusifucloudqa.com/waitlist/M000013041/manage/waitlist";function oe(e){return e==="/operations/reservations"||e.startsWith("/operations/reservations/")}function gt(){return`<div
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
          src="${k(pt)}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`}function mt(){return`<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「预约等位中心」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`}const ht="https://www.ezcapital.com/zh";function ft(e){return!e||e.subNavPlacement==="sidebar"?!1:e.children.length>1}function bt(e){if(e==="/ai-assistant/chat"||e.startsWith("/ai-assistant/"))return{title:"智能对话",module:"AI智能助手 · AI Assistant"};if(J(e))return{title:"商品中心",module:"商品中心 · Product center"};if(ee(e))return{title:"促销中心",module:"促销中心 · Promotion center"};if(te(e))return{title:"礼品卡中心",module:"礼品卡中心 · Gift card center"};if(re(e))return{title:"营销中心",module:"营销中心 · Marketing center"};if(ie(e))return{title:"报表中心",module:"报表中心 · Reporting center"};if(ne(e))return{title:"会员中心",module:"会员中心 · Member center"};if(se(e))return{title:"打印中心",module:"打印中心 · Print center"};if(oe(e))return{title:"预约等位中心",module:"预约等位中心 · Reservation & waitlist center"};const t=xe(e);if(t){const o=ve.find(c=>c.path===t);if(o)return{title:o.title,module:"商品中心A · 门店商品管理 · 税种管理"}}const r=we(e);if(r){const o=Z.find(c=>c.path===r);if(o)return{title:o.title,module:"商品中心A · 品牌商品管理 · 调味管理"}}const i=ye(e);if(i){const o=X.find(c=>c.path===i);if(o)return{title:o.title,module:"商品中心A · 品牌商品管理 · 标签管理"}}const n=ke(e);if(n){const o=Q.find(c=>c.path===n);if(o)return{title:o.title,module:"商品中心A · 品牌商品管理 · 配方管理"}}const a=F(e);if(a){const o=N.find(c=>c.path===a);if(o)return{title:o.title,module:"硬件管理中心 · 硬件"}}const s=z(e);if(s){const o=O.find(c=>c.path===s);if(o)return{title:o.title,module:"团队管理 · 小费管理"}}const d=V(e);if(d){const o=W.find(c=>c.path===d);if(o)return{title:o.title,module:"团队管理 · 员工报表"}}const l=U(e);if(l){const o=H.find(c=>c.path===l);if(o)return{title:o.title,module:"团队管理 · 排班与考勤"}}const u=[...Te].sort((o,c)=>c.path.length-o.path.length);for(const o of u)if(e===o.path||e.startsWith(`${o.path}/`)){const c=e.startsWith("/brand-products")||e==="/brand-products"?"商品中心A · 品牌商品管理":e.startsWith("/brand-menu")||e==="/brand-menu"?"商品中心A · 品牌菜单管理":"商品中心A · 门店商品管理";return{title:o.title,module:c}}for(const o of R){if(o.path===e)return{title:o.title,module:o.titleEn};const c=[...o.children].sort((m,v)=>v.path.length-m.path.length);for(const m of c)if(e===m.path||e.startsWith(`${m.path}/`))return{title:m.title,module:`${o.title} / ${o.titleEn}`}}return{title:"页面",module:void 0}}function _(e,t){var i;return((i=t.matchPrefixes)!=null&&i.length?t.matchPrefixes:[t.path]).some(n=>e===n||e.startsWith(`${n}/`))}function vt(e){var i;let t,r=-1;for(const n of R){const a=(i=n.matchPrefixes)!=null&&i.length?n.matchPrefixes:[n.path];for(const s of a)(e===s||e.startsWith(`${s}/`))&&s.length>r&&(r=s.length,t=n)}return t}function g(e){const r=`#${e.startsWith("/")?e:`/${e}`}`;if(location.hash===r)return;const i=`${location.pathname}${location.search}${r}`;try{history.replaceState(history.state,"",i)}catch{location.replace(r)}}const Me="sidebar-primary-nav-scrollTop",B={brand:"header-scope-filter-brand",region:"header-scope-filter-region",store:"header-scope-filter-store"};function xt(){try{const e=sessionStorage.getItem(Me);if(e==null)return 0;const t=Number(e);return Number.isFinite(t)&&t>=0?t:0}catch{return 0}}function ae(e){try{sessionStorage.setItem(Me,String(Math.max(0,Math.floor(e))))}catch{}}function wt(){const e=location.hash.slice(1);if(e==="/brand-products"||e==="/brand-products/"){g("/brand-products/products");return}if(e==="/brand-menu"||e==="/brand-menu/"){g("/brand-menu/menus");return}if(e==="/menu"||e==="/menu/"){g("/menu/store-menu");return}if(e==="/gift-cards"||e==="/gift-cards/"){g("/gift-cards/design");return}if(e==="/marketing"||e==="/marketing/"){g("/marketing/ai/ads");return}if(e==="/reports"||e==="/reports/"){g("/reports/revenue");return}if(e==="/members"||e==="/members/"){g("/members/settings");return}if(e==="/print-templates"||e==="/print-templates/"){g("/print-templates/list");return}if(e==="/operations/reservations/"){g("/operations/reservations");return}if(e==="/reports/capital"||e==="/reports/capital/"||e.startsWith("/reports/capital/")){g("/dashboard/overview");return}if(e==="/store"||e==="/store/"||e.startsWith("/store/")){location.replace("#/stores/overview");return}if(e==="/ordering"||e==="/ordering/"||e.startsWith("/ordering/")){location.replace("#/dashboard/overview");return}if(e==="/payment-services"||e==="/payment-services/"||e.startsWith("/payment-services/")){location.replace("#/dashboard/overview");return}if(e==="/surcharge-fees"||e==="/surcharge-fees/"||e.startsWith("/surcharge-fees/")){location.replace("#/dashboard/overview");return}if(e==="/regions"||e==="/regions/"||e.startsWith("/regions/")){location.replace("#/stores/overview");return}if(e==="/operations/devices"||e==="/operations/devices/"){location.replace("#/device-management/overview");return}const t=e.match(/^\/operations\/devices\/([^/]+)(.*)$/);if(t){const s=t[1],d=t[2]??"",u={payments:"payments","cash-drawer":"cash-drawer",router:"router",pos:"pos","pos-go":"pos-go",kds:"kds","queue-display":"queue-display",printers:"printers",kiosk:"kiosk",emenu:"emenu"}[s];if(u){location.replace(`#/device-management/hardware/${u}${d}`);return}location.replace("#/device-management/overview");return}if(["/dashboard/shortcuts","/dashboard/locations"].some(s=>e===s||e.startsWith(`${s}/`))){location.replace("#/dashboard/overview");return}if(e==="/operations/customer-display"||e.startsWith("/operations/customer-display/")){location.replace("#/dashboard/overview");return}if(e==="/operations/store-patrol"||e.startsWith("/operations/store-patrol/")){location.replace("#/dashboard/overview");return}if(e==="/operations/floor-plan"||e.startsWith("/operations/floor-plan/")){location.replace("#/stores/overview");return}if(e==="/ai-assistant"||e==="/ai-assistant/"){location.replace("#/ai-assistant/chat");return}if(["/orders/dine-in","/orders/online","/orders/delivery","/orders/pickup"].some(s=>e===s||e.startsWith(`${s}/`))){location.replace("#/orders/all");return}if(["/menu/groups","/menu/items","/menu/availability"].some(s=>e===s||e.startsWith(`${s}/`))){location.replace("#/menu/store-menu");return}if(e==="/menu/inventory-change-log"||e.startsWith("/menu/inventory-change-log/")){const s=e.startsWith("/menu/inventory-change-log/")?e.slice(26):"";g(s?`/menu/inventory-changes${s}`:"/menu/inventory-changes");return}if(e==="/menu/product-recipe"||e.startsWith("/menu/product-recipe/")){const s=e.startsWith("/menu/product-recipe/")?e.slice(20):"";g(s?`/menu/recipe-list${s}`:"/menu/recipe-list");return}if(e==="/team/tips"||e==="/team/tips/"){g(Ne());return}if(e==="/team/reports"||e==="/team/reports/"){g(je());return}if(e==="/team/scheduling"||e==="/team/scheduling/"){g(_e());return}if(e==="/menu/tax-types"||e==="/menu/tax-types/"){location.replace("#/menu/tax-types/settings");return}if(e==="/device-management/hardware"||e==="/device-management/hardware/"){location.replace(`#${le()}`);return}if(e==="/brand-products/seasoning-mgmt"||e==="/brand-products/seasoning-mgmt/"){g(qe());return}if(e==="/brand-products/tags"||e==="/brand-products/tags/"){g(De());return}if(e==="/brand-products/recipes"||e==="/brand-products/recipes/"){g(Fe());return}const a=[["/brand-products/catalog","/brand-products/product-categories"],["/brand-products/categories","/brand-products/product-categories"],["/brand-products/specs","/brand-products/spec-groups"],["/brand-products/distribution","/brand-products/products"],["/brand-products/meal-groups","/brand-products/combo-groups"]];for(const[s,d]of a){if(e===s||e===`${s}/`){g(d);return}if(e.startsWith(`${s}/`)){g(`${d}${e.slice(s.length)}`);return}}for(const s of R)if((e===s.path||e===`${s.path}/`)&&s.defaultChildPath!==s.path){location.replace(`#${s.defaultChildPath}`);return}}function Se(e){return`sidebar-nav-expanded:${e}`}function Pe(e,t){try{const r=sessionStorage.getItem(Se(e.id));if(r==="true")return!0;if(r==="false")return!1}catch{}return _(t,e)}function yt(e,t){try{sessionStorage.setItem(Se(e),t?"true":"false")}catch{}}function $e(e,t){const r=[...t].sort((i,n)=>n.path.length-i.path.length);for(const i of r)if(e===i.path||e.startsWith(`${i.path}/`))return i.path;return""}function Ce(e){return`tertiary-sidebar-expanded:${e}`}function Ae(e,t,r){try{const i=sessionStorage.getItem(Ce(e));if(i==="true")return!0;if(i==="false")return!1}catch{}return r}function kt(e,t){try{sessionStorage.setItem(Ce(e),t?"true":"false")}catch{}}function Et(e,t){return t.id==="bp-seasoning-mgmt"?we(e):t.id==="bp-tags-mgmt"?ye(e):t.id==="bp-recipes-mgmt"?ke(e):""}function Mt(e,t){return t.id==="sm-tax-types"?xe(e):""}const St='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';function Be(e,t){const{navClass:r,navAriaLabel:i,heading:n,items:a,getActiveSubPath:s,getCollapsibleChildActivePath:d}=t,l=s(e),u=o=>{const c=o.sidebarChildren;if(c!=null&&c.length){const v=o.activePrefix??o.path,C=e===v||e.startsWith(`${v}/`),y=Ae(o.id,e,C),A=o.path===l,P=`tertiary-children-${o.id}`,p=d(e,o);return`
        <li class="mb-1">
          <button type="button"
            data-tertiary-sidebar-toggle="${o.id}"
            class="flex w-full min-h-11 items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${A?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            aria-expanded="${y}"
            aria-controls="${P}"
          >
            <span class="min-w-0 flex-1 truncate">${o.title}</span>
            <span class="shrink-0 text-muted-foreground transition-transform duration-200 ${y?"":"-rotate-90"}">${St}</span>
          </button>
          <ul id="${P}" class="mt-1 space-y-0.5 border-l border-border ml-3 pl-2 ${y?"":"hidden"}" role="list" ${y?"":'aria-hidden="true"'}>
            ${c.map(h=>{const b=h.path===p;return`
            <li>
              <a href="#${h.path}"
                class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${b?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
                ${b?'aria-current="page"':""}
                tabindex="${y?"0":"-1"}"
              >${h.title}</a>
            </li>`}).join("")}
          </ul>
        </li>`}const m=o.path===l;return`
        <li>
          <a href="#${o.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${m?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${m?'aria-current="page"':""}
          >${o.title}</a>
        </li>`};return`
    <nav class="${r} w-52 shrink-0 border-r border-border pr-4 ${I}" aria-label="${i}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${n}</p>
      <ul class="space-y-0.5">
        ${a.map(u).join("")}
      </ul>
    </nav>
  `}function Pt(e){return Be(e,{navClass:"brand-products-subnav",navAriaLabel:"品牌商品管理".replace(/"/g,"&quot;"),heading:"品牌商品管理",items:G,getActiveSubPath:Oe,getCollapsibleChildActivePath:Et})}function $t(e){const t="品牌菜单管理".replace(/"/g,"&quot;"),r=We(e);return`
    <nav class="brand-menu-subnav w-52 shrink-0 border-r border-border pr-4 ${I}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">品牌菜单管理</p>
      <ul class="space-y-0.5">
        ${me.map(i=>{const n=i.path===r;return`
        <li>
          <a href="#${i.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${n?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${n?'aria-current="page"':""}
          >${i.title}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Ct(e){return Be(e,{navClass:"store-menu-subnav",navAriaLabel:"门店商品管理".replace(/"/g,"&quot;"),heading:"门店商品管理",items:K,getActiveSubPath:He,getCollapsibleChildActivePath:Mt})}function At(e){const t="硬件管理中心 · 硬件".replace(/"/g,"&quot;"),r=F(e);return`
    <nav class="device-management-hardware-subnav w-52 shrink-0 border-r border-border pr-4 ${I}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">硬件</p>
      <ul class="space-y-0.5">
        ${N.map(i=>{const n=i.path===r;return`
        <li>
          <a href="#${i.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${n?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${n?'aria-current="page"':""}
          >${i.title}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Bt(){const e=location.hash.slice(1)||"/dashboard/overview";return`
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
        ${R.map(t=>jt(t,e)).join("")}
      </nav>
    </aside>
  `}function It(e){const t="小费管理".replace(/"/g,"&quot;"),r=z(e);return`
    <nav class="tips-management-subnav w-52 shrink-0 border-r border-border pr-4 ${I}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">小费管理</p>
      <ul class="space-y-0.5">
        ${O.map(i=>{const n=i.path===r;return`
        <li>
          <a href="#${i.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${n?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${n?'aria-current="page"':""}
          >${i.title}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Tt(e){const t="员工报表".replace(/"/g,"&quot;"),r=V(e);return`
    <nav class="team-reports-subnav w-52 shrink-0 border-r border-border pr-4 ${I}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">员工报表</p>
      <ul class="space-y-0.5">
        ${W.map(i=>{const n=i.path===r;return`
        <li>
          <a href="#${i.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${n?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${n?'aria-current="page"':""}
          >${i.title}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Rt(e){const t="排班与考勤".replace(/"/g,"&quot;"),r=U(e);return`
    <nav class="team-scheduling-subnav w-52 shrink-0 border-r border-border pr-4 ${I}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">排班与考勤</p>
      <ul class="space-y-0.5">
        ${H.map(i=>{const n=i.path===r;return`
        <li>
          <a href="#${i.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${n?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${n?'aria-current="page"':""}
          >${i.title}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Nt(e,t,r){const i=_(t,e);let n=$e(t,e.children);e.id==="device-management"&&ce(t)&&(n=le()),e.id==="team"&&ue(t)&&(n="/team/tips"),e.id==="team"&&pe(t)&&(n="/team/reports"),e.id==="team"&&ge(t)&&(n="/team/scheduling"),e.id==="product-center"&&he(t)&&(n="/brand-products"),e.id==="product-center"&&fe(t)&&(n="/brand-menu"),e.id==="product-center"&&be(t)&&(n="/menu");const a=`sidebar-children-${e.id}`;return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button type="button"
        data-sidebar-toggle="${e.id}"
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${i?"bg-white/10 text-white":"text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"}"
        aria-expanded="${r}"
        aria-controls="${a}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${D[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${e.title}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${r?"":"-rotate-90"}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></span>
      </button>
      <ul id="${a}" class="mt-1 space-y-0.5 border-l border-white/15 ml-4 pl-2 ${r?"":"hidden"}" role="list" ${r?"":'aria-hidden="true"'}>
        ${e.children.map(d=>{const l=d.path===n,u=d.chainOnly?'<span class="ml-1 rounded bg-sidebar-active/25 px-1 py-px text-[10px] text-sidebar-active-fg">连锁</span>':"";return`
        <li>
          <a href="#${d.path}"
            class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${l?"bg-white/10 font-medium text-white":"text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"}"
            ${l?'aria-current="page"':""}
            tabindex="${r?"0":"-1"}"
          ><span class="min-w-0 flex-1 truncate">${d.title}${u}</span></a>
        </li>`}).join("")}
      </ul>
    </div>`}function jt(e,t){const r=e.defaultChildPath;if(e.id==="capital-turnover")return`
    <div class="mb-1" data-nav-module="${e.id}">
      <a
        href="${ht}"
        target="_blank"
        rel="noopener noreferrer"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"
        title="在新标签页打开如意财（EZ Capital）"
        aria-label="信贷中心：在新标签页打开 EZ Capital"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${D[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${e.title}</span>
        <span class="shrink-0 text-xs text-sidebar-muted/90" aria-hidden="true">↗</span>
      </a>
    </div>`;if(e.subNavPlacement==="sidebar"){const i=Pe(e,t);return Nt(e,t,i)}return`
    <div class="mb-1" data-nav-module="${e.id}">
      <a href="#${r}"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${_(t,e)?"bg-white/10 text-white":"text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"}"
        ${_(t,e)?'aria-current="page"':""}
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${D[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${e.title}</span>
      </a>
    </div>`}function _t(){return`
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 class="text-base font-semibold tracking-tight text-card-foreground">硬件与终端</h2>
      <p class="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        从系统设置总揽快速进入 <strong class="text-card-foreground">硬件管理中心 → 硬件</strong> 下各终端配置页（含 POS GO）；左侧主导航请展开 <strong class="text-card-foreground">硬件管理中心</strong> → <strong class="text-card-foreground">硬件</strong>。
      </p>
      <ul class="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3" role="list">
        ${Re.map(t=>`
      <li>
        <a
          href="#${t.path}"
          class="group flex min-h-[4.25rem] flex-col justify-center rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors duration-200 hover:border-primary/35 hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span class="text-sm font-semibold text-card-foreground group-hover:text-primary">${t.title}</span>
          <span class="mt-0.5 text-xs text-muted-foreground">${t.titleEn}</span>
        </a>
      </li>`).join("")}
      </ul>
    </div>
  `}function Lt(){const e='您好，我是 <strong class="text-card-foreground">MenuSifu 智能助手</strong>（单一智能体）。您可以用<strong class="text-card-foreground">文字或语音</strong>让我：检索全站模块与数据、说明或协助调整<strong class="text-card-foreground">配置与权限</strong>、做经营<strong class="text-card-foreground">分析摘要</strong>。下方为演示回复，接入大模型与业务 API 后即可真实执行（受策略与审批约束）。',t="rounded-full border border-border bg-background px-3 py-1.5 text-left text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";return`
    <div class="flex min-h-0 min-w-0 flex-1 flex-col gap-4" id="ai-assistant-root">
      <div class="rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-3 text-sm leading-relaxed text-muted-foreground dark:bg-primary/10">
        <p class="flex items-start gap-2">
          <span class="mt-0.5 shrink-0 text-primary" aria-hidden="true">${Ee}</span>
          <span>同一对话上下文贯穿全程：无需切换「配置机器人」「分析机器人」——由本智能体统一理解意图并调用工具链（检索 / 配置 / 数仓 / 权限服务）。</span>
        </p>
      </div>
      <div class="flex flex-wrap gap-2" role="group" aria-label="快捷示例指令">
        <button type="button" class="${t}" data-ai-quick-prompt="帮我查一下权限管理中心里店长和收银员的区别">权限说明</button>
        <button type="button" class="${t}" data-ai-quick-prompt="搜索一下和打印中心相关的设置在哪里">全站查找</button>
        <button type="button" class="${t}" data-ai-quick-prompt="分析一下最近一周各门店营业额趋势">数据分析</button>
        <button type="button" class="${t}" data-ai-quick-prompt="我想把旗舰店的营业时间改成早上8点到晚上11点">改配示例</button>
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
            ${e}
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
  `}function Ot(){const e=document.getElementById("ai-assistant-root"),t=document.getElementById("ai-assistant-form"),r=document.getElementById("ai-assistant-input"),i=document.getElementById("ai-assistant-thread");if(!e||!t||!r||!i)return;const n=(s,d)=>{const l=document.createElement("div");l.className=s==="user"?"flex justify-end":"flex justify-start";const u=document.createElement("div");u.className=s==="user"?"max-w-[90%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground shadow-sm sm:max-w-[85%]":"max-w-[90%] rounded-2xl rounded-bl-md border border-border bg-card px-4 py-2.5 text-sm leading-relaxed text-card-foreground shadow-sm sm:max-w-[85%]",u.innerHTML=k(d).replace(/\n/g,"<br/>"),l.appendChild(u),i.appendChild(l),i.scrollTop=i.scrollHeight};e.addEventListener("click",s=>{const d=s.target.closest("[data-ai-quick-prompt]");if(!d||!(d instanceof HTMLElement))return;const l=d.getAttribute("data-ai-quick-prompt");l&&(r.value=l,r.focus(),t.requestSubmit())}),t.addEventListener("submit",s=>{s.preventDefault();const d=r.value.trim();d&&(n("user",d),r.value="",window.setTimeout(()=>n("assistant",ze(d)),450))}),r.addEventListener("keydown",s=>{s.key==="Enter"&&(s.shiftKey||s.isComposing||(s.preventDefault(),t.requestSubmit()))});const a=document.getElementById("ai-assistant-voice");a==null||a.addEventListener("click",()=>{const s=window,d=s.SpeechRecognition??s.webkitSpeechRecognition;if(!d){n("assistant","当前浏览器不支持语音识别，请直接输入文字，或使用 Chrome / Edge 重试。");return}const l=new d;l.lang="zh-CN",l.continuous=!1,l.interimResults=!1,a.setAttribute("aria-pressed","true"),a.classList.add("ring-2","ring-ring"),l.onresult=u=>{const o=u.results,c=Array.from(o).map(m=>{var v;return((v=m[0])==null?void 0:v.transcript)??""}).join("");r.value=(r.value?`${r.value} `:"")+c.trim()},l.onerror=()=>{n("assistant","未听清或未授权麦克风，请检查权限后重试。")},l.onend=()=>{a.setAttribute("aria-pressed","false"),a.classList.remove("ring-2","ring-ring")};try{l.start()}catch{n("assistant","无法启动语音识别，请改用文本输入。"),a.setAttribute("aria-pressed","false"),a.classList.remove("ring-2","ring-ring")}})}function de(e,t){const r=t.children,i=$e(e,r);return`
    <nav class="mb-6" aria-label="${`${t.title}子页面`.replace(/"/g,"&quot;")}">
      <div class="-mx-1 flex gap-0.5 overflow-x-auto overflow-y-hidden pb-px scroll-smooth [scrollbar-width:thin]" role="tablist">
        ${r.map(a=>{const s=a.path===i,d=a.chainOnly?'<span class="ml-1 rounded bg-primary/15 px-1 py-px text-[10px] text-primary dark:bg-primary/25">连锁</span>':"";return`
          <a href="#${a.path}"
            role="tab"
            aria-selected="${s}"
            tabindex="${s?"0":"-1"}"
            class="shrink-0 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors duration-200 min-h-11 inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-t-md ${s?"border-primary text-primary bg-primary/5":"border-transparent text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground"}"
          >
            <span class="truncate">${a.title}${d}</span>
          </a>`}).join("")}
      </div>
      <div class="h-px w-full bg-border" aria-hidden="true"></div>
    </nav>
  `}function Wt(){const e="h-9 max-w-[9rem] rounded-md border border-border bg-background px-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:max-w-[10.5rem]";return`
    <div
      class="flex max-w-full flex-wrap items-center justify-end gap-1.5 sm:gap-2"
      role="group"
      aria-label="数据范围筛选：品牌、区域、门店"
      title="按品牌、区域、门店筛选当前数据范围（演示；可对接组织架构接口）"
    >
      <label class="sr-only" for="scope-brand-select">品牌</label>
      <select id="scope-brand-select" class="${e}" aria-label="按品牌筛选">
        <option value="">全部品牌</option>
        <option value="miju">米聚餐饮集团</option>
        <option value="menusifu-na">MenuSifu 北美</option>
      </select>
      <label class="sr-only" for="scope-region-select">区域</label>
      <select id="scope-region-select" class="${e}" aria-label="按区域筛选">
        <option value="">全部区域</option>
        <option value="east-cn">华东大区</option>
        <option value="south-cn">华南大区</option>
        <option value="north-cn">华北大区</option>
        <option value="us-west">美国西海岸</option>
        <option value="us-east">美国东海岸</option>
      </select>
      <label class="sr-only" for="scope-store-select">门店</label>
      <select id="scope-store-select" class="${e}" aria-label="按门店筛选">
        <option value="">全部门店</option>
        <option value="flagship-nyc">旗舰店 · NYC</option>
        <option value="branch-la">分店 · LA</option>
        <option value="shanghai-ljz">上海陆家嘴店</option>
        <option value="guangzhou-tzh">广州天河店</option>
      </select>
    </div>
  `}function Ht(){const e=document.getElementById("scope-brand-select"),t=document.getElementById("scope-region-select"),r=document.getElementById("scope-store-select");if(!e||!t||!r)return;const i=s=>new Set(Array.from(s.options,d=>d.value));(()=>{try{const s=sessionStorage.getItem(B.brand);s!=null&&i(e).has(s)&&(e.value=s);const d=sessionStorage.getItem(B.region);d!=null&&i(t).has(d)&&(t.value=d);const l=sessionStorage.getItem(B.store);l!=null&&i(r).has(l)&&(r.value=l)}catch{}})();const a=()=>{try{sessionStorage.setItem(B.brand,e.value),sessionStorage.setItem(B.region,t.value),sessionStorage.setItem(B.store,r.value)}catch{}window.dispatchEvent(new CustomEvent("menusifu:scope-filter-change",{detail:{brand:e.value,region:t.value,store:r.value}}))};e.addEventListener("change",a),t.addEventListener("change",a),r.addEventListener("change",a)}function qt(){const e=location.hash.slice(1)||"/dashboard/overview",t=vt(e),{title:r,module:i}=bt(e),n=t?`${t.title} · ${t.titleEn}`:i??"",a=e.startsWith("/ai-assistant"),s=he(e),d=fe(e),l=be(e),u=ce(e),o=ue(e),c=pe(e),m=ge(e),v=J(e),C=ee(e),y=te(e),A=re(e),P=ie(e),p=ne(e),h=se(e),b=oe(e),f=a||s||d||l||u||o||c||m,$=ft(t),x="flex min-h-0 flex-1 flex-col gap-6 overflow-hidden sm:flex-row sm:items-stretch",w="min-w-0 min-h-0 flex-1 overflow-y-auto",q=f?"min-h-0 flex-1 flex flex-col overflow-hidden p-4 md:p-6 animate-fade-in":"min-h-0 flex-1 overflow-y-auto p-4 md:p-6 animate-fade-in",j=a?"mx-auto flex w-full min-h-0 min-w-0 max-w-3xl flex-1 flex-col":f?"mx-auto flex w-full min-h-0 flex-1 flex-col max-w-[90rem]":"mx-auto max-w-6xl space-y-6",T=$?f?`<div class="mb-6 shrink-0">${de(e,t)}</div>`:de(e,t):"",Ie=f?' class="min-h-0 flex-1 flex flex-col overflow-hidden"':"";return`
    <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      ${`<header class="z-40 flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border bg-card/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-card/80 sm:flex-nowrap sm:gap-4 sm:py-0">
        <div class="min-w-0">
          <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">${n}</p>
          <h1 id="main-content" tabindex="-1" class="truncate text-lg font-semibold tracking-tight text-card-foreground">${r}</h1>
        </div>
        <div class="flex w-full min-w-0 flex-wrap items-center justify-end gap-2 sm:w-auto sm:flex-nowrap">
          <a
            href="#/ai-assistant/chat"
            class="inline-flex h-9 items-center gap-1.5 rounded-md border border-primary/35 bg-primary/[0.08] px-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:h-10 sm:px-3"
            title="打开 AI 智能助手"
          >
            <span class="shrink-0 text-primary [&>svg]:block" aria-hidden="true">${Ee}</span>
            <span class="hidden sm:inline">AI助手</span>
          </a>
          ${Wt()}
          <button type="button" id="theme-toggle" class="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:size-11" aria-label="切换深色模式">
            <svg class="size-5 dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            <svg class="size-5 hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          </button>
        </div>
      </header>`}
      <main class="${q}">
        <div class="${j}">
          ${T}
          <div role="tabpanel" aria-label="${r.replace(/"/g,"&quot;")}" id="module-tab-panel"${Ie}>
            ${a?Lt():v?Ge():C?Ze():y?Je():A?rt():P?st():p?dt():h?ut():b?mt():s?`<div class="${x}">
                    ${Pt(e)}
                    <div class="${w}">${E(e,r,t,{brandProductsSubnav:!0})}</div>
                  </div>`:d?`<div class="${x}">
                    ${$t(e)}
                    <div class="${w}">${E(e,r,t,{brandMenuSubnav:!0})}</div>
                  </div>`:l?`<div class="${x}">
                    ${Ct(e)}
                    <div class="${w}">${E(e,r,t,{storeMenuSubnav:!0})}</div>
                  </div>`:u?`<div class="${x}">
                    ${At(e)}
                    <div class="${w}">${E(e,r,t,{deviceManagementHardwareSubnav:!0})}</div>
                  </div>`:c?`<div class="${x}">
                    ${Tt(e)}
                    <div class="${w}">${E(e,r,t,{teamReportsSubnav:!0})}</div>
                  </div>`:m?`<div class="${x}">
                    ${Rt(e)}
                    <div class="${w}">${E(e,r,t,{teamSchedulingSubnav:!0})}</div>
                  </div>`:o?`<div class="${x}">
                    ${It(e)}
                    <div class="${w}">${E(e,r,t,{tipsManagementSubnav:!0})}</div>
                  </div>`:e==="/settings/overview"?_t():E(e,r,t)}
          </div>
        </div>
      </main>
    </div>
  `}function E(e,t,r,i){const n=(r==null?void 0:r.subNavPlacement)==="sidebar",a=i==null?void 0:i.brandProductsSubnav,s=i==null?void 0:i.brandMenuSubnav,d=i==null?void 0:i.storeMenuSubnav,l=i==null?void 0:i.deviceManagementHardwareSubnav,u=i==null?void 0:i.tipsManagementSubnav,o=i==null?void 0:i.teamReportsSubnav,c=i==null?void 0:i.teamSchedulingSubnav;return`
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="text-sm text-muted-foreground leading-relaxed">当前路由：<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">${e}</code></p>
      <p class="mt-4 text-base text-card-foreground">「${t}」页面占位 — 可在此接入列表、表单或图表。</p>
      <ul class="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
        ${l?'<li><strong class="text-card-foreground">硬件管理中心 · 硬件</strong>：在左侧主导航展开「硬件管理中心」后选择 <strong class="text-card-foreground">硬件</strong>；本区域左侧为硬件细项（支付、钱箱、路由器、POS、POS GO、KDS、叫号屏、打印机、电子秤、Kiosk、eMenu），交互同本后台其它三级侧栏。</li>':u?'<li><strong class="text-card-foreground">团队管理 · 小费管理</strong>：在左侧主导航展开「团队管理」后选择 <strong class="text-card-foreground">小费管理</strong>；本区域左侧为细项（小费分配、分配明细、分配规则），交互同本后台其它三级侧栏。</li>':o?'<li><strong class="text-card-foreground">团队管理 · 员工报表</strong>：在左侧主导航展开「团队管理」后选择 <strong class="text-card-foreground">员工报表</strong>；本区域左侧为细项（概览、小费、绩效、薪资），交互同小费管理。</li>':c?'<li><strong class="text-card-foreground">团队管理 · 排班与考勤</strong>：在左侧主导航展开「团队管理」后选择 <strong class="text-card-foreground">排班与考勤</strong>；本区域左侧为细项（考勤记录、加班规则），交互同小费管理。</li>':a?'<li><strong class="text-card-foreground">品牌商品管理</strong>：主导航展开「商品中心A」→「品牌商品管理」；本区域左侧为三级细项（商品、分类、规格组、口味组、做法组、加料组、套餐组、调味管理、标签管理、原料管理、原料分类、图片管理、配方管理），布局与交互同商品中心A其它三级页。其中 <strong class="text-card-foreground">调味管理</strong>、<strong class="text-card-foreground">标签管理</strong>、<strong class="text-card-foreground">配方管理</strong> 为可折叠分组：调味下含 <strong class="text-card-foreground">调味、下发记录</strong>；标签下含 <strong class="text-card-foreground">描述标签、商品角标、统计标签</strong>；配方下含 <strong class="text-card-foreground">配方列表、原料管理、记录中心</strong>（一级行点击仅展开/收起，交互同左侧主导航可折叠模块）。配方内「原料管理」与品牌商品一级「原料管理」路由不同：<code class="font-mono text-xs">/brand-products/recipes/ingredients</code>。</li>':s?'<li><strong class="text-card-foreground">品牌菜单管理</strong>：主导航展开「商品中心A」→「品牌菜单管理」；本区域左侧为 <strong class="text-card-foreground">菜单、下发记录</strong> 三级导航（同商品中心A三级页）。其它品牌菜单路由（如分组、渠道可见性）仍可通过链接进入，侧栏「菜单」项保持高亮。</li>':d?'<li><strong class="text-card-foreground">门店商品管理</strong>：主导航展开「商品中心A」→「门店商品管理」；本区域左侧为 <strong class="text-card-foreground">门店菜单、门店商品、门店调味、库存变更记录、打印设置、税种管理、配方列表</strong> 三级导航（同商品中心A三级页）。其中 <strong class="text-card-foreground">税种管理</strong> 为可折叠分组，内含二级入口 <strong class="text-card-foreground">税种管理、商品税管理</strong>（一级行点击仅展开/收起，交互同左侧主导航可折叠模块）。</li>':(r==null?void 0:r.id)==="permission-mgmt"?'<li><strong class="text-card-foreground">权限管理中心</strong>（RBAC）：在「<strong class="text-card-foreground">角色与功能权限</strong>」中配置各 <strong class="text-card-foreground">角色</strong> 可访问的后台模块与操作（查看、编辑、导出、审核等）；在「<strong class="text-card-foreground">员工授权</strong>」中指定 <strong class="text-card-foreground">哪位员工</strong> 拥有哪些角色。「权限总览」便于审计当前策略；「权限变更记录」留痕赋权调整。与「系统设置 → 账号与权限」可分工：本模块侧重可编排的权限矩阵与员工赋权，系统设置侧重账号安全与基础开关。</li>':n?`<li>本模块（<strong class="text-card-foreground">${r.title}</strong>）二级在左侧主导航：点击侧栏「${r.title}」展开/收起子列表后切换。</li>`:r?`<li>本模块（<strong class="text-card-foreground">${r.title}</strong>）二级导航在上方 <strong class="text-card-foreground">Tab</strong> 切换；侧栏仅保留该模块一级入口</li>`:""}
        <li>${n?"侧栏一级顺序：品牌管理、门店管理、主页、团队管理、商品中心、订单中心、支付中心、外卖/来取、营销中心、营促销中心、会员中心、礼品卡中心、评价中心、前厅管理中心、后厨管理中心、预约等位中心、报表中心、财务中心、打印中心、消息中心、库存管理中心、硬件管理中心、权限管理中心、信贷中心、素材中心、配置中心、系统设置、商品中心A（二级含品牌商品管理、品牌菜单管理、门店商品管理）（一级行点击仅展开/收起，再点子项进入路由；品牌/门店置顶；**商品中心**在**团队管理**下一项；**商品中心A**在**系统设置**下一项）。其它模块二级多在上方 Tab。":"侧栏一级入口；多数模块二级在上方 Tab。"} <strong class="text-card-foreground">AI智能助手</strong> 仅顶栏全局入口（<code class="font-mono text-xs">#/ai-assistant/chat</code>），非侧栏一级。结构来源：<strong class="text-card-foreground">docs/餐饮商家后台-导航与目录结构建议.md</strong></li>
        <li>设计令牌使用 Tailwind v4 <code class="font-mono text-xs">@theme</code>（OKLCH 语义色）</li>
        <li>标记为「连锁」的 Tab 为加盟/多店场景常用入口（配置见 <code class="font-mono text-xs">navigation.ts</code> 中 <code class="font-mono text-xs">chainOnly</code>）</li>
      </ul>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${["今日销售额","待处理订单","在岗员工"].map(m=>`<div class="rounded-lg border border-border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">${m}</p><p class="mt-2 text-2xl font-semibold tabular-nums text-card-foreground">—</p></div>`).join("")}
    </div>
  `}let S=null;function M(e,t){var i;const r=()=>{S&&(window.removeEventListener("keydown",S),S=null),location.hash="#/dashboard/overview"};S=n=>{n.key==="Escape"&&(n.preventDefault(),r())},window.addEventListener("keydown",S),(i=document.getElementById(t))==null||i.addEventListener("click",n=>{n.preventDefault(),r()}),requestAnimationFrame(()=>{var n;(n=document.getElementById(e))==null||n.focus({preventScroll:!0})})}function L(){var v,C,y,A,P;wt(),S&&(window.removeEventListener("keydown",S),S=null);const e=document.getElementById("app");if(!e)return;const t=((v=document.getElementById("nav-tree"))==null?void 0:v.scrollTop)??0,r=Math.max(t,xt()),i=location.hash.slice(1)||"/dashboard/overview",n=J(i),a=ee(i),s=te(i),d=re(i),l=ie(i),u=ne(i),o=se(i),c=oe(i);e.innerHTML=`
    <div class="relative h-dvh min-h-0 w-full overflow-hidden">
      <div class="flex h-full min-h-0 w-full">
        ${Bt()}
        ${qt()}
      </div>
      ${n?Ue():""}
      ${a?Ye():""}
      ${s?Qe():""}
      ${d?tt():""}
      ${l?nt():""}
      ${u?at():""}
      ${o?ct():""}
      ${c?gt():""}
    </div>
  `;const m=()=>{const p=document.getElementById("nav-tree");if(!p)return;const h=Math.max(0,p.scrollHeight-p.clientHeight);p.scrollTop=Math.min(r,h),ae(p.scrollTop)};requestAnimationFrame(()=>{m(),requestAnimationFrame(m)}),(C=document.getElementById("nav-tree"))==null||C.addEventListener("scroll",()=>{const p=document.getElementById("nav-tree");p&&ae(p.scrollTop)},{passive:!0}),(y=document.getElementById("nav-tree"))==null||y.addEventListener("click",p=>{const h=p.target.closest("[data-sidebar-toggle]");if(!h||!(h instanceof HTMLButtonElement))return;const b=h.getAttribute("data-sidebar-toggle");if(!b)return;const f=R.find(w=>w.id===b);if(!f||f.subNavPlacement!=="sidebar")return;p.preventDefault();const $=location.hash.slice(1)||"/dashboard/overview",x=Pe(f,$);yt(f.id,!x),L()}),(A=e.firstElementChild)==null||A.addEventListener("click",p=>{var j;const h=p.target.closest("[data-tertiary-sidebar-toggle]");if(!h||!(h instanceof HTMLButtonElement))return;const b=h.getAttribute("data-tertiary-sidebar-toggle");if(!b)return;const f=G.find(T=>T.id===b)??K.find(T=>T.id===b);if(!((j=f==null?void 0:f.sidebarChildren)!=null&&j.length))return;p.preventDefault();const $=location.hash.slice(1)||"/dashboard/overview",x=f.activePrefix??f.path,w=$===x||$.startsWith(`${x}/`),q=Ae(b,$,w);kt(b,!q),L()}),(P=document.getElementById("theme-toggle"))==null||P.addEventListener("click",()=>{var h;document.documentElement.classList.toggle("dark");const p=document.documentElement.classList.contains("dark");(h=document.querySelector('meta[name="theme-color"]'))==null||h.setAttribute("content",p?"#0f172a":"#f8fafc")}),n?M("product-center-a-dialog","product-center-a-close"):a?M("promotions-iframe-dialog","promotions-iframe-close"):s?M("gift-cards-iframe-dialog","gift-cards-iframe-close"):d?M("marketing-iframe-dialog","marketing-iframe-close"):l?M("reports-iframe-dialog","reports-iframe-close"):u?M("members-iframe-dialog","members-iframe-close"):o?M("print-center-iframe-dialog","print-center-iframe-close"):c&&M("reservations-iframe-dialog","reservations-iframe-close"),Ot(),Ht()}window.addEventListener("hashchange",L);typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.classList.add("dark");L();
