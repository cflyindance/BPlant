(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const vr=[{id:"bp-products",title:"商品",titleEn:"Products",path:"/brand-products/products"},{id:"bp-product-categories",title:"商品分类",titleEn:"Product categories",path:"/brand-products/product-categories"},{id:"bp-spec-groups",title:"规格组",titleEn:"Spec groups",path:"/brand-products/spec-groups"},{id:"bp-flavor-groups",title:"口味组",titleEn:"Flavor groups",path:"/brand-products/flavor-groups"},{id:"bp-prep-groups",title:"做法组",titleEn:"Preparation groups",path:"/brand-products/prep-groups"},{id:"bp-addon-groups",title:"加料组",titleEn:"Add-on groups",path:"/brand-products/addon-groups"},{id:"bp-combo-groups",title:"套餐组",titleEn:"Combo groups",path:"/brand-products/combo-groups"},{id:"bp-seasoning",title:"调味管理",titleEn:"Seasoning management",path:"/brand-products/seasoning-mgmt/seasoning"},{id:"bp-tags",title:"标签管理",titleEn:"Tag management",path:"/brand-products/tags/description"},{id:"bp-ingredients",title:"原料管理",titleEn:"Ingredients",path:"/brand-products/ingredients"},{id:"bp-ingredient-categories",title:"原料分类",titleEn:"Ingredient categories",path:"/brand-products/ingredient-categories"},{id:"bp-images",title:"图片管理",titleEn:"Image management",path:"/brand-products/images"},{id:"bp-recipes",title:"配方管理",titleEn:"Recipe management",path:"/brand-products/recipes/list"},{id:"bp-seasoning-distribution",title:"下发记录",titleEn:"Distribution log",path:"/brand-products/seasoning-mgmt/distribution-log"},{id:"bm-menus",title:"品牌菜单",titleEn:"Brand menus",path:"/brand-menu/menus"},{id:"bm-distribution-log",title:"下发记录",titleEn:"Distribution log",path:"/brand-menu/distribution-log"},{id:"bm-groups",title:"菜单分组",titleEn:"Menu groups",path:"/brand-menu/groups"},{id:"bm-channel-visibility",title:"渠道可见性",titleEn:"Channel visibility",path:"/brand-menu/channel-visibility"},{id:"bm-publish",title:"发布与版本",titleEn:"Publish & versions",path:"/brand-menu/publish-versions"},{id:"menu-store-menu",title:"门店菜单",titleEn:"Store menu",path:"/menu/store-menu"},{id:"menu-store-products",title:"门店商品",titleEn:"Store products",path:"/menu/store-products"},{id:"menu-inventory-changes",title:"库存变更记录",titleEn:"Inventory change log",path:"/menu/inventory-changes"},{id:"menu-product-recipe",title:"商品配方",titleEn:"Product recipe",path:"/menu/product-recipe"},{id:"menu-recipe-list",title:"配方列表",titleEn:"Recipe list",path:"/menu/recipe-list"},{id:"menu-store-seasoning",title:"门店调味",titleEn:"Store seasoning",path:"/menu/store-seasoning"},{id:"menu-print-settings",title:"打印设置",titleEn:"Print settings",path:"/menu/print-settings"},{id:"menu-multi-language",title:"菜单多语言",titleEn:"Menu multi-language",path:"/menu/multi-language"},{id:"menu-tax-types",title:"税种管理",titleEn:"Tax types",path:"/menu/tax-types/settings"},{id:"menu-product-tax-mgmt",title:"商品税管理",titleEn:"Product tax management",path:"/menu/tax-types/product-tax"}],k=[{id:"brand-mgmt",title:"品牌管理",titleEn:"Brand management",icon:"brandMgmt",path:"/brand",subNavPlacement:"sheet",defaultChildPath:"/brand/overview",children:[{id:"br-overview",title:"品牌总览",titleEn:"Overview",path:"/brand/overview"},{id:"br-list",title:"品牌列表",titleEn:"Brand list",path:"/brand/list"},{id:"br-settings",title:"品牌设置",titleEn:"Brand settings",path:"/brand/settings"}]},{id:"store-mgmt",title:"门店管理",titleEn:"Store management",icon:"storeMgmt",path:"/stores",subNavPlacement:"sheet",defaultChildPath:"/stores/overview",children:[{id:"st-overview",title:"门店总览",titleEn:"Overview",path:"/stores/overview"},{id:"st-list",title:"门店列表",titleEn:"Store list",path:"/stores/list"},{id:"st-status",title:"门店状态",titleEn:"Store status",path:"/stores/status"}]},{id:"dashboard",title:"主页",titleEn:"Dashboard",icon:"home",path:"/dashboard",subNavPlacement:"sidebar",defaultChildPath:"/dashboard/overview",children:[{id:"dash-overview",title:"今日概览",path:"/dashboard/overview"},{id:"dash-todos",title:"待办",path:"/dashboard/todos"},{id:"dash-kpi",title:"关键指标",path:"/dashboard/kpi"}]},{id:"team",title:"团队管理",titleEn:"Team",icon:"team",path:"/team",subNavPlacement:"sheet",defaultChildPath:"/team/roles-employees",children:[{id:"team-roles",title:"角色与员工",path:"/team/roles-employees"},{id:"team-breaks",title:"休息与加班",path:"/team/breaks-overtime"},{id:"team-clock",title:"员工打卡",path:"/team/clock-in"},{id:"team-tips",title:"小费管理",path:"/team/tips"},{id:"team-reports",title:"员工报表",path:"/team/reports"},{id:"team-7shifts",title:"7Shifts 对接（排班）",path:"/team/integrations/7shifts"},{id:"team-schedule",title:"排班与考勤",path:"/team/scheduling",chainOnly:!0},{id:"team-training",title:"绩效与培训",path:"/team/training-performance"}]},{id:"product-center-main",title:"商品中心",titleEn:"Product center",icon:"menu",path:"/product-center-main",defaultChildPath:"/brand-products/products",children:[{id:"pcm-brand-products",title:"商品管理",titleEn:"Product management",path:"/brand-products/products"},{id:"pcm-brand-menu",title:"品牌菜单",titleEn:"Brand menus",path:"/brand-menu/menus"},{id:"pcm-store-mgmt",title:"门店管理",titleEn:"Store management",path:"/menu/store-menu"}]},{id:"orders",title:"订单中心",titleEn:"Order center",icon:"orders",path:"/orders",subNavPlacement:"sheet",defaultChildPath:"/orders/all",children:[{id:"orders-all",title:"全部订单",path:"/orders/all"},{id:"orders-refunds",title:"退单",titleEn:"Refunds & voids",path:"/orders/refunds"},{id:"orders-history",title:"订单历史",path:"/orders/history"}]},{id:"transactions",title:"支付中心",titleEn:"Payment center",icon:"receipt",path:"/transactions",subNavPlacement:"sheet",defaultChildPath:"/transactions/ledger",children:[{id:"tx-ledger",title:"交易流水",path:"/transactions/ledger"},{id:"tx-payments",title:"支付方式",path:"/transactions/payments"},{id:"tx-reconcile",title:"对账",path:"/transactions/reconcile"}]},{id:"waitlist",title:"外卖/来取",titleEn:"Delivery & pickup",icon:"waitlist",path:"/operations/waitlist",subNavPlacement:"tabs",defaultChildPath:"/operations/waitlist",children:[{id:"wl-main",title:"外卖/来取",titleEn:"Delivery & pickup",path:"/operations/waitlist"}]},{id:"marketing",title:"营销中心",titleEn:"Marketing center",icon:"marketing",path:"/marketing",defaultChildPath:"/marketing/campaigns",children:[{id:"mkt-campaigns",title:"营销活动",titleEn:"Campaigns",path:"/marketing/campaigns"},{id:"mkt-manual",title:"手动营销",titleEn:"Manual marketing",path:"/marketing/manual"}]},{id:"promotions",title:"促销中心",titleEn:"Promotion center",icon:"promo",path:"/promotions",defaultChildPath:"/promotions/campaigns",children:[{id:"promo-campaigns",title:"促销活动",titleEn:"Promotional activities",path:"/promotions/campaigns"}]},{id:"members",title:"会员中心",titleEn:"Member center",icon:"members",path:"/members",defaultChildPath:"/members/card/coupon-mgmt",children:[{id:"mem-card-entry",title:"卡券管理",titleEn:"Cards & coupons",path:"/members/card/coupon-mgmt"},{id:"mem-points",title:"积分配置",titleEn:"Points config",path:"/members/points"}]},{id:"gift-cards",title:"礼品卡中心",titleEn:"Gift card center",icon:"gift",path:"/gift-cards",defaultChildPath:"/gift-cards/cards",children:[{id:"gc-cards",title:"Cards",titleEn:"礼品卡工厂",path:"/gift-cards/cards"},{id:"gc-settings",title:"Settings",titleEn:"礼品卡设置",path:"/gift-cards/settings"}]},{id:"reviews",title:"评价中心",titleEn:"Review center",icon:"reviews",path:"/reviews",subNavPlacement:"sheet",defaultChildPath:"/reviews/insights",children:[{id:"rev-insights",title:"评价洞察",path:"/reviews/insights"},{id:"rev-settings",title:"评价设置",path:"/reviews/settings"},{id:"rev-detail",title:"评价明细",path:"/reviews/detail"},{id:"rev-stats",title:"评价统计",path:"/reviews/stats"}]},{id:"queue-call",title:"前厅管理中心",titleEn:"Front of house management center",icon:"queueCall",path:"/operations/queue-call",subNavPlacement:"tabs",defaultChildPath:"/operations/queue-call",children:[{id:"qc-main",title:"前厅管理中心",titleEn:"Front of house management center",path:"/operations/queue-call"}]},{id:"kitchen-kds",title:"后厨管理中心",titleEn:"Back-of-house management center",icon:"kitchenKds",path:"/operations/kitchen-kds",subNavPlacement:"tabs",defaultChildPath:"/operations/kitchen-kds",children:[{id:"kds-main",title:"后厨设置",titleEn:"Back-of-house settings",path:"/operations/kitchen-kds"}]},{id:"reservations",title:"预约等位中心",titleEn:"Reservation & waitlist center",icon:"reservations",path:"/operations/reservations",defaultChildPath:"/operations/reservations/waitlist",children:[{id:"res-waitlist",title:"Waitlist",titleEn:"等位",path:"/operations/reservations/waitlist"},{id:"res-rsv",title:"RSV",titleEn:"预订",path:"/operations/reservations/rsv"},{id:"res-history",title:"History",titleEn:"历史",path:"/operations/reservations/history"},{id:"res-section",title:"Section",titleEn:"分区",path:"/operations/reservations/section"},{id:"res-settings",title:"设置",titleEn:"Settings",path:"/operations/reservations/settings"}]},{id:"reports-finance",title:"报表中心",titleEn:"Reporting center",icon:"reports",path:"/reports",defaultChildPath:"/reports/revenue",children:[{id:"rpt-revenue",title:"营业汇总",titleEn:"Business summary",path:"/reports/revenue"},{id:"rpt-sales",title:"销售汇总",titleEn:"Sales summary",path:"/reports/sales/orders"},{id:"rpt-products",title:"商品报表",titleEn:"Product reports",path:"/reports/products/ranking"},{id:"rpt-staff",title:"员工报表",titleEn:"Staff reports",path:"/reports/staff/overview"},{id:"rpt-trends",title:"走势详情",titleEn:"Trend details",path:"/reports/trends/store-overview"},{id:"rpt-monthly",title:"月度经营分析",titleEn:"Monthly analysis",path:"/reports/monthly-analysis"}]},{id:"finance-center",title:"财务中心",titleEn:"Finance center",icon:"financeCenter",path:"/finance",subNavPlacement:"sheet",defaultChildPath:"/finance/overview",children:[{id:"fin-overview",title:"财务总览",titleEn:"Overview",path:"/finance/overview"},{id:"fin-cash-flow",title:"收支流水",titleEn:"Cash flow",path:"/finance/cash-flow"},{id:"fin-reconcile",title:"对账管理",titleEn:"Reconciliation",path:"/finance/reconciliation"},{id:"fin-invoices",title:"发票与税务",titleEn:"Invoices & tax",path:"/finance/invoices"}]},{id:"print-templates",title:"打印中心",titleEn:"Print center",icon:"printTemplate",path:"/print-templates",defaultChildPath:"/print-templates/decoration",children:[{id:"pt-decoration",title:"打印装修",titleEn:"Print styling",path:"/print-templates/decoration"}]},{id:"notifications",title:"消息中心",titleEn:"Message center",icon:"notifications",path:"/notifications",subNavPlacement:"sidebar",defaultChildPath:"/notifications/center",children:[{id:"notif-center",title:"收件箱",titleEn:"Inbox",path:"/notifications/center"},{id:"notif-settings",title:"通知设置",titleEn:"Preferences",path:"/notifications/settings"},{id:"notif-templates",title:"模板与订阅",titleEn:"Templates & subscriptions",path:"/notifications/templates"}]},{id:"inventory-ordering",title:"库存管理中心",titleEn:"Inventory management center",icon:"inventory",path:"/operations/inventory-ordering",subNavPlacement:"tabs",defaultChildPath:"/operations/inventory-ordering/expiry",children:[{id:"inv-expiry",title:"效期管理",titleEn:"Expiry management",path:"/operations/inventory-ordering/expiry"},{id:"inv-materials",title:"物料管理",titleEn:"Materials management",path:"/operations/inventory-ordering/materials"}]},{id:"device-management",title:"硬件管理中心",titleEn:"Hardware management center",icon:"deviceManagement",path:"/device-management",subNavPlacement:"sheet",defaultChildPath:"/device-management/overview",children:[{id:"dm-overview",title:"设备总览",titleEn:"Overview",path:"/device-management/overview"},{id:"dm-hardware",title:"硬件",titleEn:"Hardware",path:"/device-management/hardware/payments"},{id:"dm-terminals",title:"终端管理",titleEn:"Terminals",path:"/device-management/terminals"},{id:"dm-binding",title:"绑定与授权",titleEn:"Binding & authorization",path:"/device-management/binding"},{id:"dm-alerts",title:"监控告警",titleEn:"Monitoring & alerts",path:"/device-management/alerts"}]},{id:"permission-mgmt",title:"权限管理中心",titleEn:"Access management center",icon:"permissionMgmt",path:"/permissions",subNavPlacement:"sheet",defaultChildPath:"/permissions/overview",children:[{id:"perm-overview",title:"权限总览",titleEn:"Overview",path:"/permissions/overview"},{id:"perm-roles",title:"角色与功能权限",titleEn:"Roles & permissions",path:"/permissions/roles"},{id:"perm-staff",title:"员工授权",titleEn:"Staff assignments",path:"/permissions/staff"},{id:"perm-changelog",title:"权限变更记录",titleEn:"Permission change log",path:"/permissions/change-log"}]},{id:"capital-turnover",title:"信贷中心",titleEn:"Credit center",icon:"capital",path:"/reports/capital",defaultChildPath:"/reports/capital",children:[{id:"capital-main",title:"信贷中心",titleEn:"Credit center",path:"/reports/capital"}]},{id:"asset-center",title:"素材中心",titleEn:"Asset center",icon:"assetCenter",path:"/asset-center",subNavPlacement:"sheet",defaultChildPath:"/asset-center/overview",children:[{id:"ac-overview",title:"素材总览",titleEn:"Overview",path:"/asset-center/overview"},{id:"ac-images",title:"图片库",titleEn:"Image library",path:"/asset-center/images"},{id:"ac-videos",title:"视频库",titleEn:"Video library",path:"/asset-center/videos"},{id:"ac-templates",title:"模板与版式",titleEn:"Templates & layouts",path:"/asset-center/templates"}]},{id:"config-center",title:"配置中心",titleEn:"Configuration center",icon:"configCenter",path:"/config-center",subNavPlacement:"sidebar",defaultChildPath:"/config-center/overview",children:[{id:"cc-overview",title:"配置总览",titleEn:"Overview",path:"/config-center/overview"},{id:"cc-business",title:"业务参数",titleEn:"Business parameters",path:"/config-center/business"},{id:"cc-channels",title:"渠道与对接",titleEn:"Channels & integrations",path:"/config-center/channels"},{id:"cc-features",title:"功能开关",titleEn:"Feature flags",path:"/config-center/features"}]},{id:"settings",title:"系统设置",titleEn:"System settings",icon:"settings",path:"/settings",subNavPlacement:"sidebar",defaultChildPath:"/settings/overview",children:[{id:"set-overview",title:"系统设置总揽",titleEn:"System settings overview",path:"/settings/overview"},{id:"set-basic",title:"基础设置（门店、营业时间、多门店）",path:"/settings/basic"},{id:"set-report",title:"报表设置",path:"/settings/reports"},{id:"set-print",title:"打印与票据",path:"/settings/printing"},{id:"set-tips",title:"小费设置",path:"/settings/tips"},{id:"set-service",title:"服务流程",path:"/settings/service-flow"},{id:"set-security",title:"安全设置",path:"/settings/security"},{id:"set-accounts",title:"账号与权限",path:"/settings/accounts"},{id:"set-audit",title:"操作日志",path:"/settings/audit-log"},{id:"set-integrations",title:"集成与 API",path:"/settings/integrations"},{id:"set-data-scope",title:"角色与数据范围",path:"/settings/data-scope",chainOnly:!0}]},{id:"product-center",title:"商品中心A",titleEn:"Product center A",icon:"brandProducts",path:"/product-center",matchPrefixes:["/brand-products","/brand-menu","/menu"],subNavPlacement:"sidebar",defaultChildPath:"/brand-products/products",children:[{id:"pc-brand-products",title:"品牌商品管理",titleEn:"Brand products",path:"/brand-products"},{id:"pc-brand-menu",title:"品牌菜单管理",titleEn:"Brand menus",path:"/brand-menu"},{id:"pc-store-products",title:"门店商品管理",titleEn:"Store product management",path:"/menu"}]},{id:"product-center-a",title:"商品中心B",titleEn:"Product center B",icon:"inventory",path:"/product-center-a",matchPrefixes:["/product-center-a"],defaultChildPath:"/product-center-a",children:[{id:"pca-main",title:"商品中心B",titleEn:"Product center B",path:"/product-center-a"}]}],$e=[{id:"dmh-payments",title:"支付",titleEn:"Payments",path:"/device-management/hardware/payments"},{id:"dmh-cash-drawer",title:"钱箱",titleEn:"Cash drawer",path:"/device-management/hardware/cash-drawer"},{id:"dmh-router",title:"路由器",titleEn:"Router",path:"/device-management/hardware/router"},{id:"dmh-pos",title:"POS",titleEn:"POS",path:"/device-management/hardware/pos"},{id:"dmh-pos-go",title:"POS GO",titleEn:"POS Go",path:"/device-management/hardware/pos-go"},{id:"dmh-kds",title:"KDS",titleEn:"KDS",path:"/device-management/hardware/kds"},{id:"dmh-queue-display",title:"叫号屏",titleEn:"Queue display",path:"/device-management/hardware/queue-display"},{id:"dmh-printers",title:"打印机",titleEn:"Printers",path:"/device-management/hardware/printers"},{id:"dmh-scale",title:"电子秤",titleEn:"Electronic scale",path:"/device-management/hardware/scale"},{id:"dmh-kiosk",title:"Kiosk",titleEn:"Kiosk",path:"/device-management/hardware/kiosk"},{id:"dmh-emenu",title:"eMenu",titleEn:"eMenu devices",path:"/device-management/hardware/emenu"}];function br(){var e;return((e=$e[0])==null?void 0:e.path)??"/device-management/hardware/payments"}function dt(e){const t=[...$e].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function xr(e){return dt(e)!==""}const wr=$e.map(e=>({id:`so-${e.id}`,title:e.title,titleEn:e.titleEn,path:e.path})),Be=[{id:"tips-distribution",title:"小费分配",titleEn:"Tip distribution",path:"/team/tips/distribution"},{id:"tips-details",title:"分配明细",titleEn:"Distribution details",path:"/team/tips/details"},{id:"tips-rules",title:"分配规则",titleEn:"Distribution rules",path:"/team/tips/rules"}];function yr(){var e;return((e=Be[0])==null?void 0:e.path)??"/team/tips/distribution"}function ct(e){const t=[...Be].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function $r(e){return ct(e)!==""}const Ne=[{id:"team-rpt-overview",title:"概览",titleEn:"Overview",path:"/team/reports/overview"},{id:"team-rpt-tips",title:"小费",titleEn:"Tips",path:"/team/reports/tips"},{id:"team-rpt-performance",title:"绩效",titleEn:"Performance",path:"/team/reports/performance"},{id:"team-rpt-payroll",title:"薪资",titleEn:"Payroll",path:"/team/reports/payroll"}];function kr(){var e;return((e=Ne[0])==null?void 0:e.path)??"/team/reports/overview"}function ut(e){const t=[...Ne].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function Sr(e){return ut(e)!==""}const Ie=[{id:"team-sch-attendance",title:"考勤记录",titleEn:"Attendance records",path:"/team/scheduling/attendance-records"},{id:"team-sch-overtime",title:"加班规则",titleEn:"Overtime rules",path:"/team/scheduling/overtime-rules"}];function Er(){var e;return((e=Ie[0])==null?void 0:e.path)??"/team/scheduling/attendance-records"}function pt(e){const t=[...Ie].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}function Pr(e){return pt(e)!==""}function Tr(e){var t;return(t=e.activePrefixes)!=null&&t.length?e.activePrefixes:e.activePrefix?[e.activePrefix]:[e.path]}const ht=[{id:"bp-products",title:"商品",titleEn:"Products",path:"/brand-products/products"},{id:"bp-product-categories",title:"分类",titleEn:"Categories",path:"/brand-products/product-categories"},{id:"bp-spec-groups",title:"规格组",titleEn:"Spec groups",path:"/brand-products/spec-groups"},{id:"bp-flavor-groups",title:"口味组",titleEn:"Flavor groups",path:"/brand-products/flavor-groups"},{id:"bp-prep-groups",title:"做法组",titleEn:"Prep groups",path:"/brand-products/prep-groups"},{id:"bp-addon-groups",title:"加料组",titleEn:"Add-on groups",path:"/brand-products/addon-groups"},{id:"bp-combo-groups",title:"套餐组",titleEn:"Combo groups",path:"/brand-products/combo-groups"},{id:"bp-seasoning-mgmt",title:"调味管理",titleEn:"Seasoning",path:"/brand-products/seasoning-mgmt/seasoning",activePrefix:"/brand-products/seasoning-mgmt",sidebarChildren:[{title:"调味",titleEn:"Seasoning",path:"/brand-products/seasoning-mgmt/seasoning"},{title:"下发记录",titleEn:"Distribution log",path:"/brand-products/seasoning-mgmt/distribution-log"}]},{id:"bp-tags-mgmt",title:"标签管理",titleEn:"Tags",path:"/brand-products/tags/description",activePrefix:"/brand-products/tags",sidebarChildren:[{title:"描述标签",titleEn:"Description tags",path:"/brand-products/tags/description"},{title:"商品角标",titleEn:"Product corner badges",path:"/brand-products/tags/corner-badge"},{title:"统计标签",titleEn:"Statistics tags",path:"/brand-products/tags/stats"}]},{id:"bp-ingredients",title:"原料管理",titleEn:"Ingredients",path:"/brand-products/ingredients"},{id:"bp-ingredient-categories",title:"原料分类",titleEn:"Ingredient categories",path:"/brand-products/ingredient-categories"},{id:"bp-images",title:"图片管理",titleEn:"Images",path:"/brand-products/images"},{id:"bp-recipes-mgmt",title:"配方管理",titleEn:"Recipes",path:"/brand-products/recipes/list",activePrefix:"/brand-products/recipes",sidebarChildren:[{title:"配方列表",titleEn:"Recipe list",path:"/brand-products/recipes/list"},{title:"原料管理",titleEn:"Ingredients (recipes)",path:"/brand-products/recipes/ingredients"},{title:"记录中心",titleEn:"Records center",path:"/brand-products/recipes/records"}]}],ft=[{id:"bm-menus",title:"菜单",titleEn:"Menus",path:"/brand-menu/menus",activePrefix:"/brand-menu"},{id:"bm-distribution",title:"下发记录",titleEn:"Distribution log",path:"/brand-menu/distribution-log",activePrefix:"/brand-menu/distribution-log"}],jt=[{id:"mkt-campaigns",title:"营销活动",titleEn:"Campaigns",path:"/marketing/campaigns"},{id:"mkt-manual",title:"手动营销",titleEn:"Manual marketing",path:"/marketing/manual"}],ze=[{id:"promo-campaigns",title:"促销活动",titleEn:"Promotional activities",path:"/promotions/campaigns"}],Re=[{id:"gc-cards",title:"礼品卡工厂",titleEn:"Gift cards",path:"/gift-cards/cards"},{id:"gc-settings",title:"礼品卡设置",titleEn:"Settings",path:"/gift-cards/settings"}],ue=[{id:"pt-decoration",title:"打印装修",titleEn:"Print styling",path:"/print-templates/decoration"}],ke=[{id:"res-waitlist",title:"等位",titleEn:"Waitlist",path:"/operations/reservations/waitlist"},{id:"res-rsv",title:"预订",titleEn:"RSV",path:"/operations/reservations/rsv"},{id:"res-history",title:"历史",titleEn:"History",path:"/operations/reservations/history"},{id:"res-section",title:"分区",titleEn:"Section",path:"/operations/reservations/section"},{id:"res-settings",title:"设置",titleEn:"Settings",path:"/operations/reservations/settings"}],_e=[{id:"rpt-business-overview",title:"营业汇总",titleEn:"Business summary",path:"/reports/revenue"},{id:"rpt-sales-summary",title:"销售汇总",titleEn:"Sales summary",path:"/reports/sales/orders",activePrefix:"/reports/sales",sidebarChildren:[{title:"订单",titleEn:"Orders",path:"/reports/sales/orders"},{title:"支付",titleEn:"Payments",path:"/reports/sales/payments"},{title:"折扣金额",titleEn:"Discounts",path:"/reports/sales/discounts"},{title:"加收",titleEn:"Surcharges",path:"/reports/sales/surcharges"}]},{id:"rpt-product-reports",title:"商品报表",titleEn:"Product reports",path:"/reports/products/ranking",activePrefix:"/reports/products",sidebarChildren:[{title:"排名",titleEn:"Ranking",path:"/reports/products/ranking"},{title:"商品潜力分析",titleEn:"Product potential",path:"/reports/products/potential"}]},{id:"rpt-center-staff",title:"员工报表",titleEn:"Staff reports",path:"/reports/staff/overview",activePrefix:"/reports/staff",sidebarChildren:[{title:"员工概观",titleEn:"Staff overview",path:"/reports/staff/overview"},{title:"小费分配",titleEn:"Tips allocation",path:"/reports/staff/tips-allocation"}]},{id:"rpt-trends",title:"走势详情",titleEn:"Trend details",path:"/reports/trends/store-overview",activePrefix:"/reports/trends",sidebarChildren:[{title:"分店概观",titleEn:"Store overview",path:"/reports/trends/store-overview"},{title:"销售额比对",titleEn:"Sales comparison",path:"/reports/trends/sales-comparison"}]},{id:"rpt-monthly",title:"月度经营分析",titleEn:"Monthly analysis",path:"/reports/monthly-analysis"}],xe=[{id:"mem-card-mgmt",title:"卡券管理",titleEn:"Cards & coupons",path:"/members/card/coupon-mgmt",activePrefix:"/members/card",sidebarChildren:[{title:"优惠券管理",titleEn:"Coupon management",path:"/members/card/coupon-mgmt"},{title:"付费会员明细",titleEn:"Paid member details",path:"/members/card/paid-detail"},{title:"付费会员配置",titleEn:"Paid member settings",path:"/members/card/paid-config"}]},{id:"mem-points",title:"积分配置",titleEn:"Points config",path:"/members/points"}],Oe=[{id:"sm-store-menu",title:"门店菜单",titleEn:"Store menu",path:"/menu/store-menu"},{id:"sm-store-products",title:"门店商品",titleEn:"Store products",path:"/menu/store-products"},{id:"sm-store-seasoning",title:"门店调味",titleEn:"Store seasoning",path:"/menu/store-seasoning"},{id:"sm-inventory-changes",title:"库存变更记录",titleEn:"Inventory changes",path:"/menu/inventory-changes"},{id:"sm-print-settings",title:"打印设置",titleEn:"Print settings",path:"/menu/print-settings"},{id:"sm-tax-types",title:"税种管理",titleEn:"Tax types",path:"/menu/tax-types/settings",activePrefix:"/menu/tax-types",sidebarChildren:[{title:"税种管理",titleEn:"Tax types",path:"/menu/tax-types/settings"},{title:"商品税管理",titleEn:"Product tax management",path:"/menu/tax-types/product-tax"}]},{id:"sm-recipe-list",title:"配方列表",titleEn:"Recipe list",path:"/menu/recipe-list",activePrefixes:["/menu/recipe-list","/menu/product-recipe"]}];function U(e,t){const r=t.flatMap(n=>Tr(n).map(i=>({item:n,prefix:i}))).sort((n,i)=>i.prefix.length-n.prefix.length);for(const{item:n,prefix:i}of r)if(e===i||e.startsWith(`${i}/`))return n.path;return""}function gt(e){return e.children.map(t=>({id:t.id,title:t.title,titleEn:t.titleEn,path:t.path,chainOnly:t.chainOnly}))}function Mr(e,t){var i;return((i=t.matchPrefixes)!=null&&i.length?t.matchPrefixes:[t.path]).some(o=>e===o||e.startsWith(`${o}/`))?U(e,gt(t)):""}function Cr(e){return e.startsWith("/brand-products")?U(e,ht):""}function Gt(e){return e.startsWith("/brand-products")}function Ft(e){return e.startsWith("/brand-menu")?U(e,ft):""}function Ar(e){return e.startsWith("/marketing")?U(e,jt):""}function Br(e){return e.startsWith("/promotions")?U(e,ze):""}function Nr(e){return e.startsWith("/members")?U(e,xe):""}function Ir(e){return e.startsWith("/gift-cards")?U(e,Re):""}function Rr(e){return e.startsWith("/print-templates")?U(e,ue):""}function we(e){return e==="/operations/reservations"||e.startsWith("/operations/reservations/")}function _r(e){return we(e)?U(e,ke):""}function Or(e){if(!we(e))return null;const t=[...ke].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return{title:r.title,module:"预约等位中心 · Reservation & waitlist center"};return{title:"预约等位中心",module:"预约等位中心 · Reservation & waitlist center"}}function Lr(e){if(!e.startsWith("/print-templates"))return null;const t=[...ue].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return{title:r.title,module:"打印中心 · Print center"};return{title:"打印中心",module:"打印中心 · Print center"}}function ye(e){return e==="/reports/capital"||e.startsWith("/reports/capital/")?!1:e==="/reports"||e.startsWith("/reports/")}function Hr(e){return ye(e)?U(e,_e):""}function Dr(e,t){var n;if(!((n=t.sidebarChildren)!=null&&n.length))return"";const r=[...t.sidebarChildren].sort((i,o)=>o.path.length-i.path.length);for(const i of r)if(e===i.path||e.startsWith(`${i.path}/`))return i.path;return""}function Wr(e,t){var n;if(t.id!=="mem-card-mgmt"||!((n=t.sidebarChildren)!=null&&n.length))return"";const r=[...t.sidebarChildren].sort((i,o)=>o.path.length-i.path.length);for(const i of r)if(e===i.path||e.startsWith(`${i.path}/`))return i.path;return""}function Vt(e){return e.startsWith("/brand-menu")}function qt(e){return e.startsWith("/menu")?U(e,Oe):""}function zt(e){return e.startsWith("/menu")}const Ut=[{id:"mt-tax-settings",title:"税种管理",titleEn:"Tax type settings",path:"/menu/tax-types/settings"},{id:"mt-product-tax",title:"商品税管理",titleEn:"Product tax management",path:"/menu/tax-types/product-tax"}];function Kt(e){const t=[...Ut].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const mt=[{id:"bp-sm-seasoning",title:"调味",titleEn:"Seasoning",path:"/brand-products/seasoning-mgmt/seasoning"},{id:"bp-sm-distribution-log",title:"下发记录",titleEn:"Distribution log",path:"/brand-products/seasoning-mgmt/distribution-log"}];function jr(){var e;return((e=mt[0])==null?void 0:e.path)??"/brand-products/seasoning-mgmt/seasoning"}function Yt(e){const t=[...mt].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const vt=[{id:"bp-tg-description",title:"描述标签",titleEn:"Description tags",path:"/brand-products/tags/description"},{id:"bp-tg-corner",title:"商品角标",titleEn:"Product corner badges",path:"/brand-products/tags/corner-badge"},{id:"bp-tg-stats",title:"统计标签",titleEn:"Statistics tags",path:"/brand-products/tags/stats"}];function Gr(){var e;return((e=vt[0])==null?void 0:e.path)??"/brand-products/tags/description"}function Zt(e){const t=[...vt].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const bt=[{id:"bp-rc-list",title:"配方列表",titleEn:"Recipe list",path:"/brand-products/recipes/list"},{id:"bp-rc-ingredients",title:"原料管理",titleEn:"Ingredients (recipes)",path:"/brand-products/recipes/ingredients"},{id:"bp-rc-records",title:"记录中心",titleEn:"Records center",path:"/brand-products/recipes/records"}];function Fr(){var e;return((e=bt[0])==null?void 0:e.path)??"/brand-products/recipes/list"}function Qt(e){const t=[...bt].sort((r,n)=>n.path.length-r.path.length);for(const r of t)if(e===r.path||e.startsWith(`${r.path}/`))return r.path;return""}const Xt="menusifu-admin-ui-locale",Pt={zh:{"locale.label":"界面语言","locale.optionZh":"中文","locale.optionEn":"English","nav.backToPrimaryNav":"返回主导航","nav.secondarySuffix":"·二级导航","nav.subNavQualifier":"子导航","nav.openSecondary":"打开{name}二级导航","nav.sheetNavFunction":"{name}功能","nav.tertiarySuffix":" · 三级导航","nav.subPagesAria":"{name}子页面","badge.chain":"连锁","shell.appName":"米聚集团","shell.appTagline":"MenuSifu智慧餐饮管理中心","shell.navTree":"主导航树","shell.navAside":"主导航","header.aiOpenTitle":"打开 AI 智能助手","header.aiShort":"AI助手","header.themeToggle":"切换深色模式","header.scopeGroup":"数据范围筛选：品牌、区域、门店","header.scopeGroupTitle":"按品牌、区域、门店筛选当前数据范围（演示；可对接组织架构接口）","header.scopeBrand":"品牌","header.scopeBrandAria":"按品牌筛选","header.scopeAllBrands":"全部品牌","header.scopeRegion":"区域","header.scopeRegionAria":"按区域筛选","header.scopeAllRegions":"全部区域","header.scopeStore":"门店","header.scopeStoreAria":"按门店筛选","header.scopeAllStores":"全部门店","findTitle.aiChat":"智能对话","findTitle.aiModule":"AI智能助手 · AI Assistant","findTitle.productCenterB":"商品中心B","findTitle.productCenterBModule":"商品中心B · Product center B","findTitle.page":"页面","findTitle.inventoryChangeTitle":"库存变更记录","findTitle.inventoryChangeModule":"库存管理中心 / Inventory management center","findTitle.moduleTax":"商品中心A · 门店商品管理 · 税种管理","findTitle.moduleSeasoning":"商品中心A · 品牌商品管理 · 调味管理","findTitle.moduleTags":"商品中心A · 品牌商品管理 · 标签管理","findTitle.moduleRecipes":"商品中心A · 品牌商品管理 · 配方管理","findTitle.moduleDmHw":"硬件管理中心 · 硬件","findTitle.moduleTips":"团队管理 · 小费管理","findTitle.moduleTeamReports":"团队管理 · 员工报表","findTitle.moduleTeamScheduling":"团队管理 · 排班与考勤","findTitle.moduleBrandProducts":"商品中心A · 品牌商品管理","findTitle.moduleBrandMenu":"商品中心A · 品牌菜单管理","findTitle.moduleStoreProducts":"商品中心A · 门店商品管理","findTitle.moduleGiftCards":"礼品卡中心 · Gift card center","findTitle.moduleMembers":"会员中心 · Member center","findTitle.moduleMembersCards":"会员中心 · 卡券管理","findTitle.modulePoints":"积分配置","findTitle.moduleReportsBase":"报表中心 · Reporting center","findTitle.moduleReportsPrefix":"报表中心 · {name}","findTitle.modulePrint":"打印中心 · Print center","findTitle.moduleReservations":"预约等位中心 · Reservation & waitlist center","findTitle.moduleReservationsShort":"预约等位中心","inventory.sheetTitle":"库存管理中心·二级导航","inventory.sheetNav":"库存功能","inventory.centerTitle":"库存管理中心","placeholder.route":"当前路由：","placeholder.intro":"「{title}」页面占位 — 可在此接入列表、表单或图表。","placeholder.tabModule":"本模块（{title}）二级导航在上方 Tab 切换；侧栏仅保留该模块一级入口","placeholder.sidebarModule":"本模块（{title}）二级在左侧主导航：点击侧栏「{title}」展开/收起子列表后切换。","placeholder.sheetModule":"本模块（{title}）：点击侧栏该名称行打开右滑二级导航（与营销中心同交互），在滑层内切换本模块二级路由。","placeholder.designTokens":"设计令牌使用 Tailwind v4 @theme（OKLCH 语义色）","placeholder.chainTab":"标记为「连锁」的 Tab 为加盟/多店场景常用入口（配置见 navigation.ts 中 chainOnly）","placeholder.kpi.sales":"今日销售额","placeholder.kpi.orders":"待处理订单","placeholder.kpi.staff":"在岗员工","placeholder.navDoc":"侧栏一级顺序与主导航、滑层、Tab 的说明见占位区首条长列表；AI 智能助手仅顶栏入口。结构来源：docs/餐饮商家后台-导航与目录结构建议.md","tabPanel.fallbackAria":"主内容","moduleTabs.fallbackNav":"子页面","giftCards.embedTitle":"礼品卡工厂","inventory.iframeTitle":"WMS 效期分类","capital.newTab":"在新标签页打开如意财（EZ Capital）","capital.aria":"信贷中心：在新标签页打开 EZ Capital","placeholder.navDocLong":'侧栏一级顺序：品牌管理、门店管理、主页、团队管理、商品中心、订单中心、支付中心、外卖/来取、营销中心、营促销中心、会员中心、礼品卡中心、评价中心、前厅管理中心、后厨管理中心、预约等位中心、报表中心、财务中心、打印中心、消息中心、库存管理中心、硬件管理中心、权限管理中心、信贷中心、素材中心、配置中心、系统设置、商品中心A、商品中心B（商品中心A 二级含品牌商品管理、品牌菜单管理、门店商品管理）。**品牌管理、门店管理、团队管理、订单中心、支付中心、评价中心、财务中心、硬件管理中心、权限管理中心、素材管理中心**与**商品中心**、**营销中心**、**促销中心**、**会员中心**、**礼品卡中心**、**报表中心**、**打印中心**、**预约等位中心**、**库存管理中心**均为侧栏自右滑入的二级导航；**主页、消息中心、配置中心、系统设置、商品中心A**的二级仍在主导航树内可折叠展开（一级行展开/收起，再点子项）。品牌/门店置顶；**商品中心**紧接**团队管理**之后；**商品中心B**在主导航**最末**（**商品中心A**之后）。营销中心滑层内为「营销管理」及子项「营销活动」「手动营销」；促销中心滑层内仅「促销活动」；会员中心滑层内为「卡券管理」（含「优惠券管理」「付费会员明细」「付费会员配置」）与「积分配置」；礼品卡中心滑层内为「Cards」「Settings」，其中 Cards 在主内容区嵌入云端礼品卡工厂；报表中心滑层内为「营业汇总」「销售汇总」（子项：订单、支付、折扣金额、加收）、「商品报表」（排名、商品潜力分析）、「员工报表」（员工概观、小费分配）、「走势详情」（分店概观、销售额比对）及「月度经营分析」；打印中心滑层内仅「打印装修」；预约等位中心滑层内为「Waitlist」「RSV」「History」「Section」「设置」，界面语言在顶栏全局。其它模块二级多在上方 Tab。 <strong class="text-card-foreground">AI智能助手</strong> 仅顶栏全局入口（<code class="font-mono text-xs">#/ai-assistant/chat</code>），非侧栏一级。结构来源：<strong class="text-card-foreground">docs/餐饮商家后台-导航与目录结构建议.md</strong>',"placeholder.navDocShort":"侧栏一级入口；多数模块二级在上方 Tab。","ai.welcomeHtml":'您好，我是 <strong class="text-card-foreground">MenuSifu 智能助手</strong>（单一智能体）。您可以用<strong class="text-card-foreground">文字或语音</strong>让我：检索全站模块与数据、说明或协助调整<strong class="text-card-foreground">配置与权限</strong>、做经营<strong class="text-card-foreground">分析摘要</strong>。下方为演示回复，接入大模型与业务 API 后即可真实执行（受策略与审批约束）。',"ai.contextNote":"同一对话上下文贯穿全程：无需切换「配置机器人」「分析机器人」——由本智能体统一理解意图并调用工具链（检索 / 配置 / 数仓 / 权限服务）。","ai.quickAria":"快捷示例指令","ai.quick.permissions":"权限说明","ai.quick.search":"全站查找","ai.quick.analysis":"数据分析","ai.quick.config":"改配示例","ai.link.permissions":"打开权限管理中心","ai.input.placeholder":"输入问题，Enter 发送；Shift+Enter 换行","ai.send":"发送","ai.voice":"语音输入","settings.overview.title":"硬件与终端","settings.overview.desc":'从系统设置总揽快速进入 <strong class="text-card-foreground">硬件管理中心 → 硬件</strong> 下各终端配置页（含 POS GO）；左侧主导航请展开 <strong class="text-card-foreground">硬件管理中心</strong> → <strong class="text-card-foreground">硬件</strong>。',"sheet.marketingMgmt":"营销管理","placeholder.bullet.deviceHw":'<strong class="text-card-foreground">硬件管理中心 · 硬件</strong>：在左侧主导航点击「硬件管理中心」打开<strong class="text-card-foreground">右滑二级导航</strong>后选择 <strong class="text-card-foreground">硬件</strong>；本区域左侧为硬件细项（支付、钱箱、路由器、POS、POS GO、KDS、叫号屏、打印机、电子秤、Kiosk、eMenu），交互同本后台其它三级侧栏。',"placeholder.bullet.tips":'<strong class="text-card-foreground">团队管理 · 小费管理</strong>：在左侧主导航点击「团队管理」打开<strong class="text-card-foreground">右滑二级导航</strong>后选择 <strong class="text-card-foreground">小费管理</strong>；本区域左侧为细项（小费分配、分配明细、分配规则），交互同本后台其它三级侧栏。',"placeholder.bullet.teamReports":'<strong class="text-card-foreground">团队管理 · 员工报表</strong>：在左侧主导航点击「团队管理」打开<strong class="text-card-foreground">右滑二级导航</strong>后选择 <strong class="text-card-foreground">员工报表</strong>；本区域左侧为细项（概览、小费、绩效、薪资），交互同小费管理。',"placeholder.bullet.teamScheduling":'<strong class="text-card-foreground">团队管理 · 排班与考勤</strong>：在左侧主导航点击「团队管理」打开<strong class="text-card-foreground">右滑二级导航</strong>后选择 <strong class="text-card-foreground">排班与考勤</strong>；本区域左侧为细项（考勤记录、加班规则），交互同小费管理。',"placeholder.bullet.brandProducts":'<strong class="text-card-foreground">品牌商品管理</strong>：侧栏打开「<strong class="text-card-foreground">商品中心</strong>」滑层后，在「<strong class="text-card-foreground">商品管理</strong>」下为全部细项二级导航（商品、分类、规格组、口味组、做法组、加料组、套餐组、调味管理、标签管理、原料管理、原料分类、图片管理、配方管理）；调味/标签/配方分组可折叠，交互与原先主区左侧三级侧栏一致。亦可从主导航「商品中心A」→「品牌商品管理」进入同一路由。配方内「原料管理」：<code class="font-mono text-xs">/brand-products/recipes/ingredients</code>。',"placeholder.bullet.brandMenu":'<strong class="text-card-foreground">品牌菜单管理</strong>：主导航展开「商品中心A」→「品牌菜单管理」；本区域左侧为 <strong class="text-card-foreground">菜单、下发记录</strong> 三级导航（同商品中心A三级页）。其它品牌菜单路由（如分组、渠道可见性）仍可通过链接进入，侧栏「菜单」项保持高亮。',"placeholder.bullet.storeMenu":'<strong class="text-card-foreground">门店商品管理</strong>：主导航展开「商品中心A」→「门店商品管理」；本区域左侧为 <strong class="text-card-foreground">门店菜单、门店商品、门店调味、库存变更记录、打印设置、税种管理、配方列表</strong> 三级导航（同商品中心A三级页）。其中 <strong class="text-card-foreground">税种管理</strong> 为可折叠分组，内含二级入口 <strong class="text-card-foreground">税种管理、商品税管理</strong>（一级行点击仅展开/收起，交互同左侧主导航可折叠模块）。',"placeholder.bullet.permissions":'<strong class="text-card-foreground">权限管理中心</strong>（RBAC）：侧栏点击「权限管理中心」打开右滑二级导航；在「<strong class="text-card-foreground">角色与功能权限</strong>」中配置各 <strong class="text-card-foreground">角色</strong> 可访问的后台模块与操作（查看、编辑、导出、审核等）；在「<strong class="text-card-foreground">员工授权</strong>」中指定 <strong class="text-card-foreground">哪位员工</strong> 拥有哪些角色。「权限总览」便于审计当前策略；「权限变更记录」留痕赋权调整。与「系统设置 → 账号与权限」可分工：本模块侧重可编排的权限矩阵与员工赋权，系统设置侧重账号安全与基础开关。',"placeholder.bullet.reservations":'<strong class="text-card-foreground">预约等位中心</strong>：点击侧栏「预约等位中心」打开与营销中心相同的右滑二级导航；滑层内为 <strong class="text-card-foreground">Waitlist、RSV、History、Section、设置</strong>；<strong class="text-card-foreground">界面语言</strong>在顶栏全局下拉（深浅色切换旁）。',"tertiaryNav.tips":"小费管理","tertiaryNav.teamReports":"员工报表","tertiaryNav.teamScheduling":"排班与考勤","ai.srInputLabel":"输入指令或问题","ai.tipVoiceLang":"提示：点击麦克风使用语音输入（随界面语言切换识别语言；Chrome / Edge 体验更佳）。","ai.speech.unsupported":"当前浏览器不支持语音识别，请直接输入文字，或使用 Chrome / Edge 重试。","ai.speech.micError":"未听清或未授权麦克风，请检查权限后重试。","ai.speech.startFailed":"无法启动语音识别，请改用文本输入。"},en:{"locale.label":"Interface language","locale.optionZh":"中文","locale.optionEn":"English","nav.backToPrimaryNav":"Back to main navigation","nav.secondarySuffix":" · Secondary navigation","nav.subNavQualifier":"Sub-navigation","nav.openSecondary":"Open secondary navigation: {name}","nav.sheetNavFunction":"{name} menu","nav.tertiarySuffix":" · Tertiary navigation","nav.subPagesAria":"{name} sub-pages","badge.chain":"Chain","shell.appName":"Miju Group","shell.appTagline":"MenuSifu merchant admin","shell.navTree":"Main navigation tree","shell.navAside":"Main navigation","header.aiOpenTitle":"Open AI assistant","header.aiShort":"AI","header.themeToggle":"Toggle dark mode","header.scopeGroup":"Scope: brand, region, store","header.scopeGroupTitle":"Filter data by brand, region, and store (demo; connect to org APIs)","header.scopeBrand":"Brand","header.scopeBrandAria":"Filter by brand","header.scopeAllBrands":"All brands","header.scopeRegion":"Region","header.scopeRegionAria":"Filter by region","header.scopeAllRegions":"All regions","header.scopeStore":"Store","header.scopeStoreAria":"Filter by store","header.scopeAllStores":"All stores","findTitle.aiChat":"Chat","findTitle.aiModule":"AI Assistant","findTitle.productCenterB":"Product center B","findTitle.productCenterBModule":"Product center B","findTitle.page":"Page","findTitle.inventoryChangeTitle":"Inventory change log","findTitle.inventoryChangeModule":"Inventory management center","findTitle.moduleTax":"Product center A · Store products · Tax types","findTitle.moduleSeasoning":"Product center A · Brand products · Seasoning","findTitle.moduleTags":"Product center A · Brand products · Tags","findTitle.moduleRecipes":"Product center A · Brand products · Recipes","findTitle.moduleDmHw":"Hardware · Devices","findTitle.moduleTips":"Team · Tips","findTitle.moduleTeamReports":"Team · Staff reports","findTitle.moduleTeamScheduling":"Team · Scheduling & attendance","findTitle.moduleBrandProducts":"Product center A · Brand products","findTitle.moduleBrandMenu":"Product center A · Brand menus","findTitle.moduleStoreProducts":"Product center A · Store products","findTitle.moduleGiftCards":"Gift card center","findTitle.moduleMembers":"Member center","findTitle.moduleMembersCards":"Member center · Cards & coupons","findTitle.modulePoints":"Points configuration","findTitle.moduleReportsBase":"Reporting center","findTitle.moduleReportsPrefix":"Reporting center · {name}","findTitle.modulePrint":"Print center","findTitle.moduleReservations":"Reservation & waitlist center","findTitle.moduleReservationsShort":"Reservation & waitlist","inventory.sheetTitle":"Inventory management · Secondary navigation","inventory.sheetNav":"Inventory","inventory.centerTitle":"Inventory management center","placeholder.route":"Current route:","placeholder.intro":"“{title}” is a placeholder — add lists, forms, or charts here.","placeholder.tabModule":"Module ({title}): use the top tabs for secondary navigation; the sidebar keeps only the top-level entry.","placeholder.sidebarModule":"Module ({title}): expand or collapse the item in the sidebar, then choose a child link.","placeholder.sheetModule":"Module ({title}): click the row in the sidebar to open the slide-in secondary navigation (same pattern as Marketing), then pick a route inside the sheet.","placeholder.designTokens":"Design tokens use Tailwind v4 @theme (OKLCH semantic colors).","placeholder.chainTab":"Tabs marked “Chain” are common for franchise / multi-store setups (see chainOnly in navigation.ts).","placeholder.kpi.sales":"Today’s sales","placeholder.kpi.orders":"Pending orders","placeholder.kpi.staff":"Staff on duty","placeholder.navDoc":"See the first long bullet in this card for sidebar order, sheets, and tabs. AI assistant is header-only. Source: docs/餐饮商家后台-导航与目录结构建议.md","tabPanel.fallbackAria":"Main content","moduleTabs.fallbackNav":"Sub-pages","giftCards.embedTitle":"Gift card factory","inventory.iframeTitle":"WMS expiry categories","capital.newTab":"Open EZ Capital in a new tab","capital.aria":"Credit center: open EZ Capital in a new tab","placeholder.navDocLong":'Sidebar order: Brand, Stores, Home, Team, Product center, Orders, Payments, Delivery & pickup, Marketing, Promotions, Members, Gift cards, Reviews, Front of house, Kitchen, Reservations, Reports, Finance, Print, Messages, Inventory, Hardware, Permissions, Credit, Assets, Config, Settings, Product center A, Product center B (A covers brand products, brand menus, and store products). **Brand, Stores, Team, Orders, Payments, Reviews, Finance, Hardware, Permissions, Assets**, plus **Product center**, **Marketing**, **Promotions**, **Members**, **Gift cards**, **Reports**, **Print**, **Reservations**, and **Inventory** use a slide-in secondary sheet; **Home**, **Messages**, **Config**, **Settings**, and **Product center A** keep collapsible children in the main tree. Marketing sheet: campaigns & manual marketing; Promotions: campaigns only; Members: cards & coupons plus points; Gift cards: Cards (embedded factory) & Settings; Reports: business summary, sales, products, staff, trends, monthly analysis; Print: decoration only; Reservations: Waitlist, RSV, History, Section, Settings; UI language is global in the header. Most other modules use top tabs. <strong class="text-card-foreground">AI Assistant</strong> is header-only (<code class="font-mono text-xs">#/ai-assistant/chat</code>). Source: docs/餐饮商家后台-导航与目录结构建议.md',"placeholder.navDocShort":"Sidebar entries; most modules use top tabs for level-2 navigation.","ai.welcomeHtml":'Hello, I am the <strong class="text-card-foreground">MenuSifu assistant</strong> (single agent). Use <strong class="text-card-foreground">text or voice</strong> to search modules and data, explain or help adjust <strong class="text-card-foreground">configuration & permissions</strong>, and run <strong class="text-card-foreground">analytics summaries</strong>. Replies below are demos; connect an LLM and business APIs for real actions (subject to policy and approvals).',"ai.contextNote":"One conversation context end-to-end—no separate “config bot” vs “analytics bot”; this agent routes intent to retrieval, config, data, and permission tools.","ai.quickAria":"Quick prompt examples","ai.quick.permissions":"RBAC help","ai.quick.search":"Site search","ai.quick.analysis":"Analytics","ai.quick.config":"Config example","ai.link.permissions":"Open access management","ai.input.placeholder":"Type a question; Enter to send; Shift+Enter for newline","ai.send":"Send","ai.voice":"Voice input","settings.overview.title":"Hardware & terminals","settings.overview.desc":'From this overview jump to <strong class="text-card-foreground">Hardware management → Hardware</strong> for each terminal (including POS GO). In the sidebar open <strong class="text-card-foreground">Hardware management</strong> → <strong class="text-card-foreground">Hardware</strong>.',"sheet.marketingMgmt":"Marketing management","placeholder.bullet.deviceHw":'<strong class="text-card-foreground">Hardware · Devices</strong>: open <strong class="text-card-foreground">Hardware management</strong> from the sidebar, then the <strong class="text-card-foreground">slide-in sheet</strong> and choose <strong class="text-card-foreground">Devices</strong>. The left column lists terminals (payments, cash drawer, router, POS, POS GO, KDS, queue display, printers, scales, Kiosk, eMenu)—same tertiary pattern as elsewhere.',"placeholder.bullet.tips":'<strong class="text-card-foreground">Team · Tips</strong>: open Team from the sidebar, use the sheet, pick <strong class="text-card-foreground">Tips</strong>. Left column covers allocation, details, and rules.',"placeholder.bullet.teamReports":'<strong class="text-card-foreground">Team · Staff reports</strong>: open Team → <strong class="text-card-foreground">Staff reports</strong> from the sheet. Left column: overview, tips, performance, payroll.',"placeholder.bullet.teamScheduling":'<strong class="text-card-foreground">Team · Scheduling & attendance</strong>: open Team → <strong class="text-card-foreground">Scheduling</strong> from the sheet. Left column: attendance log and overtime rules.',"placeholder.bullet.brandProducts":'<strong class="text-card-foreground">Brand products</strong>: open the <strong class="text-card-foreground">Product center</strong> sheet, then <strong class="text-card-foreground">Product management</strong> for the full secondary list (products, categories, spec/flavor/prep/add-on/combo groups, seasoning, tags, ingredients, images, recipes). Collapsible groups match the old tertiary sidebar. You can also enter via <strong class="text-card-foreground">Product center A → Brand products</strong>. Ingredients under recipes: <code class="font-mono text-xs">/brand-products/recipes/ingredients</code>.',"placeholder.bullet.brandMenu":'<strong class="text-card-foreground">Brand menus</strong>: expand <strong class="text-card-foreground">Product center A → Brand menus</strong>. Left column: menus and distribution log; other routes (groups, channel visibility) still work and keep “Menus” highlighted.',"placeholder.bullet.storeMenu":'<strong class="text-card-foreground">Store products</strong>: expand <strong class="text-card-foreground">Product center A → Store products</strong>. Left column: store menu, store products, seasoning, inventory change log, print settings, tax types, recipe list. <strong class="text-card-foreground">Tax types</strong> is a collapsible group with settings and product tax entries.',"placeholder.bullet.permissions":'<strong class="text-card-foreground">Access management (RBAC)</strong>: open the sheet from the sidebar. Configure <strong class="text-card-foreground">roles & permissions</strong>, assign <strong class="text-card-foreground">roles to staff</strong>, review the matrix, and audit changes. Complements <strong class="text-card-foreground">Settings → Accounts & permissions</strong> for security basics.',"placeholder.bullet.reservations":'<strong class="text-card-foreground">Reservations & waitlist</strong>: same slide-in pattern as Marketing. Sheet entries: Waitlist, RSV, History, Section, Settings. <strong class="text-card-foreground">UI language</strong> is global in the header.',"tertiaryNav.tips":"Tips","tertiaryNav.teamReports":"Staff reports","tertiaryNav.teamScheduling":"Scheduling & attendance","ai.srInputLabel":"Prompt or question","ai.tipVoiceLang":"Tip: use the microphone for voice input (recognition language follows the UI language; Chrome / Edge recommended).","ai.speech.unsupported":"Speech recognition is not available in this browser. Type your question or try Chrome / Edge.","ai.speech.micError":"Could not hear you or microphone permission was denied. Check permissions and try again.","ai.speech.startFailed":"Could not start speech recognition. Please type instead."}};function te(){try{const e=localStorage.getItem(Xt);if(e==="en")return"en";if(e==="zh")return"zh"}catch{}return"zh"}function Vr(e){try{localStorage.setItem(Xt,e)}catch{}}function Jt(e){document.documentElement.lang=e==="en"?"en":"zh-Hans",document.documentElement.setAttribute("data-ui-locale",e)}function u(e,t,r=te()){return r==="en"&&t!=null&&String(t).trim()!==""?t:e}function qr(e){let t=e.trim();for(let r=0;r<8;r++){const n=t;if(t=t.replace(/\s+Management\s+Center$/i,"").trim(),t=t.replace(/\s+Center$/i,"").trim(),t=t.replace(/\s+Management$/i,"").trim(),t===n)break}return t.replace(/\s{2,}/g," ").trim()}function M(e){return te()!=="en"?e.title:qr(e.titleEn)}function a(e){return te()==="en"?Pt.en[e]:Pt.zh[e]}function I(e,t){let r=String(a(e));for(const[n,i]of Object.entries(t))r=r.replace(new RegExp(`\\{${n}\\}`,"g"),i);return r}function xt(e){return te()==="en"?e.titleEn:`${e.title} · ${e.titleEn}`}function h(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function zr(e,t){return`${xt(e)} — ${u(t.title,t.titleEn)}`}function ae(e){const t=h(`${u(e.title,e.titleEn)}${a("nav.secondarySuffix")}`),r=h(I("nav.sheetNavFunction",{name:u(e.title,e.titleEn)}));return{dialog:t,navFunc:r}}function Ur(e){const t=e.trim();return t?/权限|角色|RBAC|员工授权/i.test(t)?"【演示】可说明权限矩阵、员工与角色绑定，并在对接后端后协助跳转「权限管理中心」与预填变更。也可回答例如：谁能改价、店长默认可见哪些报表。":/搜索|查找|搜|哪里有|在哪/i.test(t)?"【演示】全站检索由同一智能体完成：可定位侧栏模块、路由、帮助文档与业务对象（订单、门店、商品等）。接入索引与向量库后支持口语化问法。":/分析|报表|趋势|统计|营业额|收入/i.test(t)?"【演示】可按您描述的时间、门店、品类做对比与摘要；接入数仓后可拉取真实指标、生成图表与下钻链接。":/配置|设置|修改|改|打开|关闭/i.test(t)?"【演示】配置类意图会解析为「目标模块 + 动作」，走策略校验与（可选）人工审批后再执行。当前壳层仅模拟确认，不写回生产。":"【演示】单一智能体持续本对话上下文，接入模型后可执行查数、改配、导表与权限调整（受租户策略约束）。请补充门店、时间范围或要操作的对象。":""}const er='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',V={home:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',orders:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',receipt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',floorPlan:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>',kitchenKds:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13h12"/><path d="M6 9h12"/><path d="M9 5h6v4H9z"/><path d="M8 21h8v-4H8z"/></svg>',queueCall:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',reservations:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',waitlist:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>',inventory:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',promo:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><path d="M11.5 11.5 6 17l-4 1 1-4 5.5-5.5"/></svg>',marketing:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',members:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',reviews:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>',gift:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',team:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',reports:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',capital:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>',financeCenter:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',notifications:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',printTemplate:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>',deviceManagement:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="5" x="4" y="4" rx="1"/><rect width="16" height="5" x="4" y="15" rx="1"/><path d="M8 8h.01"/><path d="M8 19h.01"/><path d="M12 8h.01"/><path d="M12 19h.01"/><path d="M16 8h.01"/><path d="M16 19h.01"/></svg>',brandProducts:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l6.88-6.88a1 1 0 0 0 0-1.41L12 2Z"/><path d="M7 7h.01"/></svg>',brandMenu:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h4"/></svg>',brandMgmt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/></svg>',storeMgmt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><path d="M17 14h1"/><path d="M17 18h1"/></svg>',permissionMgmt:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',assetCenter:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',configCenter:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>'},pe="tertiary-inline-subnav-scroll min-h-0 max-h-[min(52dvh,26rem)] overflow-y-auto overscroll-y-contain sm:max-h-full sm:self-stretch";function wt(e){return e==="/product-center-a"||e.startsWith("/product-center-a/")}const Kr="https://itemcenter.menusifudev.com/";function Yr(){return`<div
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
          src="${h(Kr)}"
          referrerpolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write; fullscreen"
        ></iframe>
      </div>
    </div>`}function Zr(){return`<div tabindex="-1" class="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground outline-none">
      <p class="text-card-foreground">「商品中心B」已在<strong class="font-medium text-foreground">全屏浮层</strong>中打开（覆盖侧栏与主区）。</p>
      <p class="mt-2">按键盘 <kbd class="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">Esc</kbd> 或点击浮层右上角「关闭」返回工作台。</p>
    </div>`}const Qr="https://cloud.menusifucloudqa.com/factory/giftcardb";function Xr(e){return e==="/gift-cards/cards"||e.startsWith("/gift-cards/cards/")}function Jr(){const e=h(Qr);return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <p class="sr-only">内嵌云端礼品卡工厂。若内容空白，请确认 cloud.menusifucloudqa.com 允许被本后台来源嵌入。</p>
      <iframe
        title="${h(a("giftCards.embedTitle"))}"
        class="block h-full min-h-[22rem] w-full flex-1 border-0 sm:min-h-0"
        src="${e}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}const en="https://www.ezcapital.com/zh",tn="https://wms.menusifuchina.com/platform-expiration-category";function rn(e){return e==="/operations/inventory-ordering/expiry"||e.startsWith("/operations/inventory-ordering/expiry/")}function nn(){return`
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <iframe
        title="${h(a("inventory.iframeTitle"))}"
        class="block h-full min-h-[22rem] w-full flex-1 border-0 sm:min-h-0"
        src="${tn}"
        referrerpolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
      ></iframe>
    </div>`}function sn(e){return!e||e.subNavPlacement==="sidebar"||e.subNavPlacement==="sheet"||e.id==="inventory-ordering"||e.id==="product-center-main"||e.id==="marketing"||e.id==="promotions"||e.id==="members"||e.id==="gift-cards"||e.id==="reports-finance"||e.id==="print-templates"||e.id==="reservations"?!1:e.children.length>1}const Ue="sidebar-inventory-secondary-open",Ke="sidebar-product-center-main-secondary-open",Ye="sidebar-marketing-secondary-open",Ze="sidebar-promotions-secondary-open",Qe="sidebar-members-secondary-open",Xe="sidebar-gift-cards-secondary-open",Je="sidebar-reports-secondary-open",et="sidebar-print-secondary-open",tt="sidebar-reservations-secondary-open",tr="pcm-sheet-brand-products-mgmt-expanded",rr="pcm-sheet-brand-menu-expanded",nr="pcm-sheet-store-menu-expanded",ir="marketing-sheet-mgmt-expanded";let Tt="",Mt="",Ct="",At="",Bt="",Nt="",It="",Rt="",_t="";const yt="sidebar-nav-module-sheets-open-json-v1";let Ot={};const Q="transition-[transform,opacity] duration-[1000ms] ease-in-out will-change-[transform,opacity]",F="bg-sidebar-active/12 text-sidebar-foreground dark:bg-white/10 dark:text-white",rt="bg-sidebar-active/12 font-medium text-sidebar-foreground dark:bg-white/10 dark:text-white",N="text-sidebar-muted hover:bg-sidebar-foreground/[0.06] dark:hover:bg-white/5 hover:text-sidebar-foreground",K="border-b border-sidebar-foreground/10 dark:border-white/10",X="border-l border-sidebar-foreground/10 dark:border-white/10",an="border-t border-sidebar-foreground/10 dark:border-white/10",Y="text-sidebar-foreground dark:text-white",J="text-sidebar-muted transition-colors hover:bg-sidebar-foreground/[0.06] dark:hover:bg-white/5 hover:text-sidebar-foreground",Me="text-sidebar-foreground dark:text-white transition-colors hover:bg-sidebar-foreground/[0.06] dark:hover:bg-white/5",ee="shadow-[6px_0_28px_rgba(15,23,42,0.07)] dark:shadow-[6px_0_32px_rgba(0,0,0,0.45)]";function $t(){try{const e=sessionStorage.getItem(yt);if(!e)return{};const t=JSON.parse(e);if(!t||typeof t!="object"||Array.isArray(t))return{};const r={};for(const[n,i]of Object.entries(t))i===!0&&(r[n]=!0);return r}catch{return{}}}function Ae(e){return $t()[e]===!0}function Ce(e,t){const r={...$t()};t?r[e]=!0:delete r[e];try{sessionStorage.setItem(yt,JSON.stringify(r))}catch{}}function q(){try{sessionStorage.removeItem(yt)}catch{}}let Lt=!1;function on(){Lt||(Lt=!0,window.addEventListener("keydown",e=>{if(e.key!=="Escape")return;let t=!1;Le()&&(R(!1),t=!0),He()&&(_(!1),t=!0),De()&&(O(!1),t=!0),We()&&(L(!1),t=!0),je()&&(H(!1),t=!0),Ge()&&(D(!1),t=!0),Fe()&&(W(!1),t=!0),Ve()&&(j(!1),t=!0),qe()&&(G(!1),t=!0),Object.keys($t()).length>0&&(q(),t=!0),t&&y()}))}function Ht(e){return e==="/operations/inventory-ordering"||e.startsWith("/operations/inventory-ordering/")}function Le(){try{return sessionStorage.getItem(Ue)==="true"}catch{return!1}}function R(e){try{e?sessionStorage.setItem(Ue,"true"):sessionStorage.removeItem(Ue)}catch{}}function ln(){const e=k.find(t=>t.id==="inventory-ordering");return(e==null?void 0:e.children)??[]}function nt(e){return!!(e==="/product-center-main"||e.startsWith("/product-center-main/")||e==="/brand-products"||e.startsWith("/brand-products/")||e==="/brand-menu"||e.startsWith("/brand-menu/")||e==="/menu"||e.startsWith("/menu/"))}function He(){try{return sessionStorage.getItem(Ke)==="true"}catch{return!1}}function _(e){try{e?sessionStorage.setItem(Ke,"true"):sessionStorage.removeItem(Ke)}catch{}}function it(e){return e==="/marketing"||e.startsWith("/marketing/")}function De(){try{return sessionStorage.getItem(Ye)==="true"}catch{return!1}}function O(e){try{e?sessionStorage.setItem(Ye,"true"):sessionStorage.removeItem(Ye)}catch{}}function st(e){return e==="/promotions"||e.startsWith("/promotions/")}function We(){try{return sessionStorage.getItem(Ze)==="true"}catch{return!1}}function L(e){try{e?sessionStorage.setItem(Ze,"true"):sessionStorage.removeItem(Ze)}catch{}}function at(e){return e==="/members"||e.startsWith("/members/")}function je(){try{return sessionStorage.getItem(Qe)==="true"}catch{return!1}}function H(e){try{e?sessionStorage.setItem(Qe,"true"):sessionStorage.removeItem(Qe)}catch{}}function ot(e){return e==="/gift-cards"||e.startsWith("/gift-cards/")}function Ge(){try{return sessionStorage.getItem(Xe)==="true"}catch{return!1}}function D(e){try{e?sessionStorage.setItem(Xe,"true"):sessionStorage.removeItem(Xe)}catch{}}function Fe(){try{return sessionStorage.getItem(Je)==="true"}catch{return!1}}function W(e){try{e?sessionStorage.setItem(Je,"true"):sessionStorage.removeItem(Je)}catch{}}function lt(e){return e==="/print-templates"||e.startsWith("/print-templates/")}function Ve(){try{return sessionStorage.getItem(et)==="true"}catch{return!1}}function j(e){try{e?sessionStorage.setItem(et,"true"):sessionStorage.removeItem(et)}catch{}}function qe(){try{return sessionStorage.getItem(tt)==="true"}catch{return!1}}function G(e){try{e?sessionStorage.setItem(tt,"true"):sessionStorage.removeItem(tt)}catch{}}const be='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';function z(e,t,r,n,i){const o=r(e),s=(i==null?void 0:i.brandProductSecondLevel)===!0,c=s?"space-y-1 border-l-2 border-sidebar-active/40 pl-2.5":"space-y-0.5",f=s?"pl-0.5 pr-2.5":"px-2.5",g=s?"mt-1.5 space-y-0.5 border-l-2 border-sidebar-foreground/20 dark:border-white/25 ml-2 pl-3":"mt-1 space-y-0.5 border-l border-sidebar-foreground/15 dark:border-white/15 ml-3 pl-2",b=l=>{const p=l.sidebarChildren;if(p!=null&&p.length){const m=l.activePrefix??l.path,$=e===m||e.startsWith(`${m}/`),A=kt(l.id,e,$),B=l.path===o,Z=`pcm-sheet-tertiary-children-${l.id}`,le=n(e,l),d=`${u(l.title,l.titleEn)}${a("nav.tertiarySuffix")}`.replace(/"/g,"&quot;");return`
        <li class="mb-1">
          <button type="button"
            data-tertiary-sidebar-toggle="${l.id}"
            class="flex w-full min-h-11 items-center gap-2 rounded-lg ${f} py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${B?F:N}"
            aria-expanded="${A}"
            aria-controls="${Z}"
          >
            <span class="min-w-0 flex-1 truncate">${u(l.title,l.titleEn)}</span>
            <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${A?"":"-rotate-90"}">${be}</span>
          </button>
          <ul id="${Z}" class="${g} ${A?"":"hidden"}" role="list" aria-label="${d}" ${A?"":'aria-hidden="true"'}>
            ${p.map(x=>{const E=x.path===le;return`
            <li>
              <a href="#${x.path}"
                class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-xs sm:text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${E?rt:N}"
                ${E?'aria-current="page"':""}
                tabindex="${A?"0":"-1"}"
              >${u(x.title,x.titleEn)}</a>
            </li>`}).join("")}
          </ul>
        </li>`}const v=l.path===o;return`
        <li class="mb-0.5">
          <a href="#${l.path}"
            class="flex min-h-9 items-center rounded-md ${f} py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${v?rt:N}"
            ${v?'aria-current="page"':""}
          >${u(l.title,l.titleEn)}</a>
        </li>`},S=`<ul class="${c}" role="list">${t.map(b).join("")}</ul>`;return s?`<nav class="min-w-0" aria-label="${((i==null?void 0:i.sheetGroupedSubnavAriaLabel)??"商品管理 · 二级导航").replace(/"/g,"&quot;")}">${S}</nav>`:S}function oe(e,t){return""}function dn(e,t){const r=k.find(B=>B.id==="product-center-main"),n=r.children,i=u(n[0].title,n[0].titleEn),o=u(n[1].title,n[1].titleEn),s=u(n[2].title,n[2].titleEn),c=h(`${u(r.title,r.titleEn)}${a("nav.secondarySuffix")}`),f=h(I("nav.sheetNavFunction",{name:u(r.title,r.titleEn)})),g=`${o} · ${a("nav.subNavQualifier")}`,b=`${s} · ${a("nav.subNavQualifier")}`,S=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",w='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',l=cr(e),p=ur(e),v=pr(e),m="pt-0",$=`${an} pt-3`,A=`
        <div class="space-y-4">
          <section class="${m}">
            <button
              type="button"
              data-pcm-sheet-bp-mgmt-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${Me} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${l}"
              aria-controls="pcm-sheet-bp-mgmt-children"
            >
              <span class="min-w-0 flex-1 truncate">${i}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${l?"":"-rotate-90"}">${be}</span>
            </button>
            <div id="pcm-sheet-bp-mgmt-children" class="${l?"":"hidden"}" ${l?"":'aria-hidden="true"'}>
              ${z(e,ht,Cr,Nn,{brandProductSecondLevel:!0})}
            </div>
          </section>
          <section class="${$}">
            <button
              type="button"
              data-pcm-sheet-brand-menu-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${Me} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${p}"
              aria-controls="pcm-sheet-brand-menu-children"
            >
              <span class="min-w-0 flex-1 truncate">${o}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${p?"":"-rotate-90"}">${be}</span>
            </button>
            <div id="pcm-sheet-brand-menu-children" class="${p?"":"hidden"}" ${p?"":'aria-hidden="true"'}>
              ${z(e,ft,Ft,oe,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:g})}
            </div>
          </section>
          <section class="${$}">
            <button
              type="button"
              data-pcm-sheet-store-menu-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${Me} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${v}"
              aria-controls="pcm-sheet-store-menu-children"
            >
              <span class="min-w-0 flex-1 truncate">${s}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${v?"":"-rotate-90"}">${be}</span>
            </button>
            <div id="pcm-sheet-store-menu-children" class="${v?"":"hidden"}" ${v?"":'aria-hidden="true"'}>
              ${z(e,Oe,qt,fr,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:b})}
            </div>
          </section>
        </div>`;return`
    <div
      id="product-center-main-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${X} bg-sidebar ${ee} ${Q} ${S}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${c}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-product-center-main-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${w}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${u(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${f}">
        ${A}
      </nav>
    </div>`}function cn(e,t){const r=k.find(w=>w.id==="marketing"),{dialog:n,navFunc:i}=ae(r),o=a("sheet.marketingMgmt"),s=`${o} · ${a("nav.subNavQualifier")}`,c=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",f='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',g=hr(e),S=`
        <div class="space-y-4">
          <section class="pt-0">
            <button
              type="button"
              data-marketing-sheet-mgmt-toggle
              class="mb-2 flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-semibold tracking-tight ${Me} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              aria-expanded="${g}"
              aria-controls="marketing-sheet-mgmt-children"
            >
              <span class="min-w-0 flex-1 truncate">${o}</span>
              <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${g?"":"-rotate-90"}">${be}</span>
            </button>
            <div id="marketing-sheet-mgmt-children" class="${g?"":"hidden"}" ${g?"":'aria-hidden="true"'}>
              ${z(e,jt,Ar,oe,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:s})}
            </div>
          </section>
        </div>`;return`
    <div
      id="marketing-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${X} bg-sidebar ${ee} ${Q} ${c}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${n}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-marketing-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${f}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${u(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${S}
      </nav>
    </div>`}function un(e,t){const r=k.find(b=>b.id==="promotions"),{dialog:n,navFunc:i}=ae(r),o=ze[0],s=u(o.title,o.titleEn),c=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",f='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',g=`
        <div class="space-y-4">
          <section class="pt-0">
            ${z(e,ze,Br,oe,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:s})}
          </section>
        </div>`;return`
    <div
      id="promotions-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${X} bg-sidebar ${ee} ${Q} ${c}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${n}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-promotions-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${f}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${u(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${g}
      </nav>
    </div>`}function pn(e,t){const r=k.find(g=>g.id==="members"),{dialog:n,navFunc:i}=ae(r),o=`${u(r.title,r.titleEn)}${a("nav.secondarySuffix")}`,s=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",c='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',f=`
        <div class="space-y-4">
          <section class="pt-0">
            ${z(e,xe,Nr,Wr,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:o})}
          </section>
        </div>`;return`
    <div
      id="members-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${X} bg-sidebar ${ee} ${Q} ${s}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${n}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-members-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${c}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${u(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${f}
      </nav>
    </div>`}function hn(e,t){const r=k.find(g=>g.id==="gift-cards"),{dialog:n,navFunc:i}=ae(r),o=`${u(r.title,r.titleEn)} · ${a("nav.subNavQualifier")}`,s=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",c='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',f=`
        <div class="space-y-4">
          <section class="pt-0">
            ${z(e,Re,Ir,oe,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:o})}
          </section>
        </div>`;return`
    <div
      id="gift-cards-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${X} bg-sidebar ${ee} ${Q} ${s}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${n}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-gift-cards-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${c}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${u(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${f}
      </nav>
    </div>`}function fn(e,t){const r=k.find(g=>g.id==="reports-finance"),{dialog:n,navFunc:i}=ae(r),o=`${u(r.title,r.titleEn)}${a("nav.secondarySuffix")}`,s=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",c='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',f=`
        <div class="space-y-4">
          <section class="pt-0">
            ${z(e,_e,Hr,Dr,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:o})}
          </section>
        </div>`;return`
    <div
      id="reports-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${X} bg-sidebar ${ee} ${Q} ${s}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${n}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-reports-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${c}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${u(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${f}
      </nav>
    </div>`}function gn(e,t){const r=k.find(b=>b.id==="print-templates"),{dialog:n,navFunc:i}=ae(r),o=ue[0],s=u(o.title,o.titleEn),c=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",f='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',g=`
        <div class="space-y-4">
          <section class="pt-0">
            ${z(e,ue,Rr,oe,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:s})}
          </section>
        </div>`;return`
    <div
      id="print-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${X} bg-sidebar ${ee} ${Q} ${c}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${n}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-print-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${f}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${u(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${g}
      </nav>
    </div>`}function mn(e,t){const r=k.find(g=>g.id==="reservations"),{dialog:n,navFunc:i}=ae(r),o=`${u(r.title,r.titleEn)} · ${a("nav.subNavQualifier")}`,s=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",c='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',f=`
        <div class="space-y-4">
          <section class="pt-0">
            ${z(e,ke,_r,oe,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:o})}
          </section>
        </div>`;return`
    <div
      id="reservations-secondary-sheet"
      class="absolute inset-0 z-[31] flex flex-col ${X} bg-sidebar ${ee} ${Q} ${s}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${n}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-reservations-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${c}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${u(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${f}
      </nav>
    </div>`}function vn(e,t,r){const{dialog:n,navFunc:i}=ae(e),o=`${u(e.title,e.titleEn)} · ${a("nav.subNavQualifier")}`,s=r?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",c='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',f=gt(e),g=`
        <div class="space-y-4">
          <section class="pt-0">
            ${z(t,f,S=>Mr(S,e),oe,{brandProductSecondLevel:!0,sheetGroupedSubnavAriaLabel:o})}
          </section>
        </div>`;return`
    <div
      id="${`${e.id}-secondary-sheet`}"
      class="absolute inset-0 z-[31] flex flex-col ${X} bg-sidebar ${ee} ${Q} ${s}"
      ${r?"":"inert"}
      aria-hidden="${r?"false":"true"}"
      role="dialog"
      aria-modal="${r?"true":"false"}"
      aria-label="${n}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-nav-module-sheet-secondary-close="${e.id}"
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${c}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${h(u(e.title,e.titleEn))}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        ${g}
      </nav>
    </div>`}function bn(e,t){const r=k.find(g=>g.id==="inventory-ordering"),n=h(a("inventory.sheetTitle")),i=h(a("inventory.sheetNav")),o=ln(),s=t?"translate-x-0 pointer-events-auto opacity-100":"translate-x-full pointer-events-none opacity-0",c='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',f=o.map(g=>{const b=e===g.path||e.startsWith(`${g.path}/`);return`
        <li>
          <a
            href="#${g.path}"
            class="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${b?F:N}"
            ${b?'aria-current="page"':""}
          >
            <span class="min-w-0 flex-1 truncate">${u(g.title,g.titleEn)}</span>
          </a>
        </li>`}).join("");return`
    <div
      id="inventory-secondary-sheet"
      class="absolute inset-0 z-30 flex flex-col ${X} bg-sidebar ${ee} ${Q} ${s}"
      ${t?"":"inert"}
      aria-hidden="${t?"false":"true"}"
      role="dialog"
      aria-modal="${t?"true":"false"}"
      aria-label="${n}"
    >
      <div class="flex h-14 shrink-0 items-center gap-1 ${K} px-2">
        <button
          type="button"
          data-inventory-secondary-close
          class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${J} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
          aria-label="${h(a("nav.backToPrimaryNav"))}"
        >
          ${c}
        </button>
        <span class="min-w-0 truncate text-sm font-semibold ${Y}">${u(r.title,r.titleEn)}</span>
      </div>
      <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="${i}">
        <ul class="space-y-1" role="list">${f}</ul>
      </nav>
    </div>`}function xn(e){var w;if(e==="/ai-assistant/chat"||e.startsWith("/ai-assistant/"))return{title:a("findTitle.aiChat"),module:a("findTitle.aiModule")};if(wt(e))return{title:a("findTitle.productCenterB"),module:a("findTitle.productCenterBModule")};if(e.startsWith("/gift-cards")){const l=k.find(m=>m.id==="gift-cards"),p=[...Re].sort((m,$)=>$.path.length-m.path.length);let v;for(const m of p)if(e===m.path||e.startsWith(`${m.path}/`)){v=m;break}return{title:v?u(v.title,v.titleEn):u(l.title,l.titleEn),module:a("findTitle.moduleGiftCards")}}if(e.startsWith("/members")){const l=k.find(m=>m.id==="members"),p=xe.find(m=>m.id==="mem-card-mgmt");if(p!=null&&p.sidebarChildren){const m=[...p.sidebarChildren].sort(($,A)=>A.path.length-$.path.length);for(const $ of m)if(e===$.path||e.startsWith(`${$.path}/`))return{title:u($.title,$.titleEn),module:a("findTitle.moduleMembersCards")}}const v=xe.find(m=>m.id==="mem-points");return e==="/members/points"||e.startsWith("/members/points/")?{title:u((v==null?void 0:v.title)??"积分配置",v==null?void 0:v.titleEn),module:a("findTitle.moduleMembers")}:{title:u(l.title,l.titleEn),module:a("findTitle.moduleMembers")}}if(ye(e)){for(const p of _e){if((w=p.sidebarChildren)!=null&&w.length){const v=[...p.sidebarChildren].sort((m,$)=>$.path.length-m.path.length);for(const m of v)if(e===m.path||e.startsWith(`${m.path}/`))return{title:u(m.title,m.titleEn),module:I("findTitle.moduleReportsPrefix",{name:u(p.title,p.titleEn)})}}if(e===p.path||e.startsWith(`${p.path}/`))return{title:u(p.title,p.titleEn),module:a("findTitle.moduleReportsBase")}}const l=k.find(p=>p.id==="reports-finance");return{title:u((l==null?void 0:l.title)??"报表中心",l==null?void 0:l.titleEn),module:a("findTitle.moduleReportsBase")}}if(Lr(e)){const l=[...ue].sort((m,$)=>$.path.length-m.path.length);let p;for(const m of l)if(e===m.path||e.startsWith(`${m.path}/`)){p=m;break}const v=k.find(m=>m.id==="print-templates");return{title:p?u(p.title,p.titleEn):u(v.title,v.titleEn),module:a("findTitle.modulePrint")}}if(Or(e)){const l=[...ke].sort((m,$)=>$.path.length-m.path.length);let p;for(const m of l)if(e===m.path||e.startsWith(`${m.path}/`)){p=m;break}const v=k.find(m=>m.id==="reservations");return{title:p?u(p.title,p.titleEn):u(v.title,v.titleEn),module:a("findTitle.moduleReservations")}}const n=Kt(e);if(n){const l=Ut.find(p=>p.path===n);if(l)return{title:u(l.title,l.titleEn),module:a("findTitle.moduleTax")}}const i=Yt(e);if(i){const l=mt.find(p=>p.path===i);if(l)return{title:u(l.title,l.titleEn),module:a("findTitle.moduleSeasoning")}}const o=Zt(e);if(o){const l=vt.find(p=>p.path===o);if(l)return{title:u(l.title,l.titleEn),module:a("findTitle.moduleTags")}}const s=Qt(e);if(s){const l=bt.find(p=>p.path===s);if(l)return{title:u(l.title,l.titleEn),module:a("findTitle.moduleRecipes")}}const c=dt(e);if(c){const l=$e.find(p=>p.path===c);if(l)return{title:u(l.title,l.titleEn),module:a("findTitle.moduleDmHw")}}const f=ct(e);if(f){const l=Be.find(p=>p.path===f);if(l)return{title:u(l.title,l.titleEn),module:a("findTitle.moduleTips")}}const g=ut(e);if(g){const l=Ne.find(p=>p.path===g);if(l)return{title:u(l.title,l.titleEn),module:a("findTitle.moduleTeamReports")}}const b=pt(e);if(b){const l=Ie.find(p=>p.path===b);if(l)return{title:u(l.title,l.titleEn),module:a("findTitle.moduleTeamScheduling")}}if(e==="/operations/inventory-ordering/inventory-change-log"||e.startsWith("/operations/inventory-ordering/inventory-change-log/"))return{title:a("findTitle.inventoryChangeTitle"),module:a("findTitle.inventoryChangeModule")};const S=[...vr].sort((l,p)=>p.path.length-l.path.length);for(const l of S)if(e===l.path||e.startsWith(`${l.path}/`)){const p=e.startsWith("/brand-products")||e==="/brand-products"?a("findTitle.moduleBrandProducts"):e.startsWith("/brand-menu")||e==="/brand-menu"?a("findTitle.moduleBrandMenu"):a("findTitle.moduleStoreProducts");return{title:u(l.title,l.titleEn),module:p}}for(const l of k){if(l.path===e)return{title:u(l.title,l.titleEn),module:xt(l)};const p=[...l.children].sort((v,m)=>m.path.length-v.path.length);for(const v of p)if(e===v.path||e.startsWith(`${v.path}/`))return{title:u(v.title,v.titleEn),module:zr(l,v)}}return{title:a("findTitle.page"),module:void 0}}function se(e,t){var n;return((n=t.matchPrefixes)!=null&&n.length?t.matchPrefixes:[t.path]).some(i=>e===i||e.startsWith(`${i}/`))}function wn(e){for(const t of k){if(t.subNavPlacement!=="sheet")continue;const r=Ot[t.id];r!==void 0&&r!==e&&!se(e,t)&&Ce(t.id,!1),Ot[t.id]=e}}function yn(e){var n;let t,r=-1;for(const i of k){const o=(n=i.matchPrefixes)!=null&&n.length?i.matchPrefixes:[i.path];for(const s of o)(e===s||e.startsWith(`${s}/`))&&s.length>r&&(r=s.length,t=i)}return t}function P(e){const r=`#${e.startsWith("/")?e:`/${e}`}`;if(location.hash===r)return;const n=`${location.pathname}${location.search}${r}`;try{history.replaceState(history.state,"",n)}catch{location.replace(r)}}const sr="sidebar-primary-nav-scrollTop",ce={brand:"header-scope-filter-brand",region:"header-scope-filter-region",store:"header-scope-filter-store"};function $n(){const e=te(),t=h(a("locale.label"));return`<div class="flex shrink-0 items-center">
      <label for="global-ui-locale" class="sr-only">${t}</label>
      <select
        id="global-ui-locale"
        title="${t}"
        class="h-9 max-w-[8.5rem] cursor-pointer rounded-md border border-border bg-background px-2 text-sm text-foreground shadow-sm transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-11 sm:max-w-none sm:px-2.5"
        aria-label="${t}"
      >
        <option value="zh" ${e==="zh"?"selected":""}>${h(a("locale.optionZh"))}</option>
        <option value="en" ${e==="en"?"selected":""}>${h(a("locale.optionEn"))}</option>
      </select>
    </div>`}function kn(){const e=document.getElementById("global-ui-locale");e&&(e.value=te(),e.addEventListener("change",()=>{const t=e.value==="en"?"en":"zh";Vr(t),Jt(t),window.dispatchEvent(new CustomEvent("menusifu:ui-locale-change",{detail:{locale:t}})),y()}))}function Sn(){try{const e=sessionStorage.getItem(sr);if(e==null)return 0;const t=Number(e);return Number.isFinite(t)&&t>=0?t:0}catch{return 0}}function Dt(e){try{sessionStorage.setItem(sr,String(Math.max(0,Math.floor(e))))}catch{}}function En(){const e=location.hash.slice(1);if(e==="/brand-products"||e==="/brand-products/"){P("/brand-products/products");return}if(e==="/brand-menu"||e==="/brand-menu/"){P("/brand-menu/menus");return}if(e==="/menu"||e==="/menu/"){P("/menu/store-menu");return}if(e==="/gift-cards"||e==="/gift-cards/"){P("/gift-cards/cards");return}if(e==="/gift-cards/design"||e==="/gift-cards/design/"||e.startsWith("/gift-cards/design/")){P("/gift-cards/cards");return}if(e==="/marketing/ai/ads"||e.startsWith("/marketing/ai/ads/")){P("/marketing/campaigns");return}if(e==="/marketing"||e==="/marketing/"){P("/marketing/campaigns");return}if(e==="/reports"||e==="/reports/"){P("/reports/revenue");return}if(e==="/members/settings"||e==="/members/settings/"||e.startsWith("/members/settings/")){P("/members/card/coupon-mgmt");return}if(e==="/members"||e==="/members/"){P("/members/card/coupon-mgmt");return}if(e==="/print-templates"||e==="/print-templates/"){P("/print-templates/decoration");return}if(e==="/print-templates/list"||e==="/print-templates/list/"||e.startsWith("/print-templates/list/")){P("/print-templates/decoration");return}if(e==="/operations/reservations"||e==="/operations/reservations/"){P("/operations/reservations/waitlist");return}if(e==="/operations/reservations/language"||e==="/operations/reservations/language/"||e.startsWith("/operations/reservations/language/")||e==="/operations/reservations/refresh"||e==="/operations/reservations/refresh/"||e.startsWith("/operations/reservations/refresh/")){P("/operations/reservations/waitlist");return}if(e==="/operations/inventory-ordering"||e==="/operations/inventory-ordering/"){P("/operations/inventory-ordering/expiry");return}if(e==="/product-center-main"||e==="/product-center-main/"){P("/brand-products/products");return}if(e==="/reports/capital"||e==="/reports/capital/"||e.startsWith("/reports/capital/")){P("/dashboard/overview");return}if(e==="/store"||e==="/store/"||e.startsWith("/store/")){location.replace("#/stores/overview");return}if(e==="/ordering"||e==="/ordering/"||e.startsWith("/ordering/")){location.replace("#/dashboard/overview");return}if(e==="/payment-services"||e==="/payment-services/"||e.startsWith("/payment-services/")){location.replace("#/dashboard/overview");return}if(e==="/surcharge-fees"||e==="/surcharge-fees/"||e.startsWith("/surcharge-fees/")){location.replace("#/dashboard/overview");return}if(e==="/regions"||e==="/regions/"||e.startsWith("/regions/")){location.replace("#/stores/overview");return}if(e==="/operations/devices"||e==="/operations/devices/"){location.replace("#/device-management/overview");return}const t=e.match(/^\/operations\/devices\/([^/]+)(.*)$/);if(t){const s=t[1],c=t[2]??"",g={payments:"payments","cash-drawer":"cash-drawer",router:"router",pos:"pos","pos-go":"pos-go",kds:"kds","queue-display":"queue-display",printers:"printers",kiosk:"kiosk",emenu:"emenu"}[s];if(g){location.replace(`#/device-management/hardware/${g}${c}`);return}location.replace("#/device-management/overview");return}if(["/dashboard/shortcuts","/dashboard/locations"].some(s=>e===s||e.startsWith(`${s}/`))){location.replace("#/dashboard/overview");return}if(e==="/operations/customer-display"||e.startsWith("/operations/customer-display/")){location.replace("#/dashboard/overview");return}if(e==="/operations/store-patrol"||e.startsWith("/operations/store-patrol/")){location.replace("#/dashboard/overview");return}if(e==="/operations/floor-plan"||e.startsWith("/operations/floor-plan/")){location.replace("#/stores/overview");return}if(e==="/ai-assistant"||e==="/ai-assistant/"){location.replace("#/ai-assistant/chat");return}if(["/orders/dine-in","/orders/online","/orders/delivery","/orders/pickup"].some(s=>e===s||e.startsWith(`${s}/`))){location.replace("#/orders/all");return}if(["/menu/groups","/menu/items","/menu/availability"].some(s=>e===s||e.startsWith(`${s}/`))){location.replace("#/menu/store-menu");return}if(e==="/menu/inventory-change-log"||e.startsWith("/menu/inventory-change-log/")){const s=e.startsWith("/menu/inventory-change-log/")?e.slice(26):"";P(s?`/menu/inventory-changes${s}`:"/menu/inventory-changes");return}if(e==="/menu/product-recipe"||e.startsWith("/menu/product-recipe/")){const s=e.startsWith("/menu/product-recipe/")?e.slice(20):"";P(s?`/menu/recipe-list${s}`:"/menu/recipe-list");return}if(e==="/team/tips"||e==="/team/tips/"){P(yr());return}if(e==="/team/reports"||e==="/team/reports/"){P(kr());return}if(e==="/team/scheduling"||e==="/team/scheduling/"){P(Er());return}if(e==="/menu/tax-types"||e==="/menu/tax-types/"){location.replace("#/menu/tax-types/settings");return}if(e==="/device-management/hardware"||e==="/device-management/hardware/"){location.replace(`#${br()}`);return}if(e==="/brand-products/seasoning-mgmt"||e==="/brand-products/seasoning-mgmt/"){P(jr());return}if(e==="/brand-products/tags"||e==="/brand-products/tags/"){P(Gr());return}if(e==="/brand-products/recipes"||e==="/brand-products/recipes/"){P(Fr());return}const o=[["/brand-products/catalog","/brand-products/product-categories"],["/brand-products/categories","/brand-products/product-categories"],["/brand-products/specs","/brand-products/spec-groups"],["/brand-products/distribution","/brand-products/products"],["/brand-products/meal-groups","/brand-products/combo-groups"]];for(const[s,c]of o){if(e===s||e===`${s}/`){P(c);return}if(e.startsWith(`${s}/`)){P(`${c}${e.slice(s.length)}`);return}}for(const s of k)if((e===s.path||e===`${s.path}/`)&&s.defaultChildPath!==s.path){location.replace(`#${s.defaultChildPath}`);return}}function ar(e){return`sidebar-nav-expanded:${e}`}function or(e,t){try{const r=sessionStorage.getItem(ar(e.id));if(r==="true")return!0;if(r==="false")return!1}catch{}return se(t,e)}function Pn(e,t){try{sessionStorage.setItem(ar(e),t?"true":"false")}catch{}}function lr(e,t){const r=[...t].sort((n,i)=>i.path.length-n.path.length);for(const n of r)if(e===n.path||e.startsWith(`${n.path}/`))return n.path;return""}function dr(e){return`tertiary-sidebar-expanded:${e}`}function kt(e,t,r){try{const n=sessionStorage.getItem(dr(e));if(n==="true")return!0;if(n==="false")return!1}catch{}return r}function Tn(e,t){try{sessionStorage.setItem(dr(e),t?"true":"false")}catch{}}function cr(e){try{const t=sessionStorage.getItem(tr);if(t==="true")return!0;if(t==="false")return!1}catch{}return e.startsWith("/brand-products")}function Mn(e){try{sessionStorage.setItem(tr,e?"true":"false")}catch{}}function ur(e){try{const t=sessionStorage.getItem(rr);if(t==="true")return!0;if(t==="false")return!1}catch{}return e.startsWith("/brand-menu")}function Cn(e){try{sessionStorage.setItem(rr,e?"true":"false")}catch{}}function pr(e){try{const t=sessionStorage.getItem(nr);if(t==="true")return!0;if(t==="false")return!1}catch{}return e.startsWith("/menu")}function An(e){try{sessionStorage.setItem(nr,e?"true":"false")}catch{}}function hr(e){try{const t=sessionStorage.getItem(ir);if(t==="true")return!0;if(t==="false")return!1}catch{}return e.startsWith("/marketing")}function Bn(e){try{sessionStorage.setItem(ir,e?"true":"false")}catch{}}function Nn(e,t){return t.id==="bp-seasoning-mgmt"?Yt(e):t.id==="bp-tags-mgmt"?Zt(e):t.id==="bp-recipes-mgmt"?Qt(e):""}function fr(e,t){return t.id==="sm-tax-types"?Kt(e):""}const In='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';function Rn(e,t){const{navClass:r,navAriaLabel:n,heading:i,items:o,getActiveSubPath:s,getCollapsibleChildActivePath:c}=t,f=s(e),g=b=>{const S=b.sidebarChildren;if(S!=null&&S.length){const l=b.activePrefix??b.path,p=e===l||e.startsWith(`${l}/`),v=kt(b.id,e,p),m=b.path===f,$=`tertiary-children-${b.id}`,A=c(e,b);return`
        <li class="mb-1">
          <button type="button"
            data-tertiary-sidebar-toggle="${b.id}"
            class="flex w-full min-h-11 items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${m?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            aria-expanded="${v}"
            aria-controls="${$}"
          >
            <span class="min-w-0 flex-1 truncate">${u(b.title,b.titleEn)}</span>
            <span class="shrink-0 text-muted-foreground transition-transform duration-200 ${v?"":"-rotate-90"}">${In}</span>
          </button>
          <ul id="${$}" class="mt-1 space-y-0.5 border-l border-border ml-3 pl-2 ${v?"":"hidden"}" role="list" ${v?"":'aria-hidden="true"'}>
            ${S.map(B=>{const Z=B.path===A;return`
            <li>
              <a href="#${B.path}"
                class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${Z?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
                ${Z?'aria-current="page"':""}
                tabindex="${v?"0":"-1"}"
              >${u(B.title,B.titleEn)}</a>
            </li>`}).join("")}
          </ul>
        </li>`}const w=b.path===f;return`
        <li>
          <a href="#${b.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${w?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${w?'aria-current="page"':""}
          >${u(b.title,b.titleEn)}</a>
        </li>`};return`
    <nav class="${r} w-52 shrink-0 border-r border-border pr-4 ${pe}" aria-label="${n}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${i}</p>
      <ul class="space-y-0.5">
        ${o.map(g).join("")}
      </ul>
    </nav>
  `}function _n(e){const r=k.find(s=>s.id==="product-center").children.find(s=>s.path==="/brand-menu"),n=u(r.title,r.titleEn),i=n.replace(/"/g,"&quot;"),o=Ft(e);return`
    <nav class="brand-menu-subnav w-52 shrink-0 border-r border-border pr-4 ${pe}" aria-label="${i}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${n}</p>
      <ul class="space-y-0.5">
        ${ft.map(s=>{const c=s.path===o;return`
        <li>
          <a href="#${s.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${c?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${c?'aria-current="page"':""}
          >${u(s.title,s.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function On(e){const r=k.find(i=>i.id==="product-center").children.find(i=>i.path==="/menu"),n=u(r.title,r.titleEn);return Rn(e,{navClass:"store-menu-subnav",navAriaLabel:n.replace(/"/g,"&quot;"),heading:n,items:Oe,getActiveSubPath:qt,getCollapsibleChildActivePath:fr})}function Ln(e){const t=k.find(s=>s.id==="device-management"),r=t.children.find(s=>s.id==="dm-hardware"),n=`${u(t.title,t.titleEn)} · ${u(r.title,r.titleEn)}`.replace(/"/g,"&quot;"),i=u(r.title,r.titleEn),o=dt(e);return`
    <nav class="device-management-hardware-subnav w-52 shrink-0 border-r border-border pr-4 ${pe}" aria-label="${n}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${i}</p>
      <ul class="space-y-0.5">
        ${$e.map(s=>{const c=s.path===o;return`
        <li>
          <a href="#${s.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${c?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${c?'aria-current="page"':""}
          >${u(s.title,s.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Hn(){const e=location.hash.slice(1)||"/dashboard/overview",t=Le(),r=He(),n=De(),i=We(),o=je(),s=Ge(),c=Fe(),f=Ve(),g=qe(),b=k.some(w=>w.subNavPlacement==="sheet"&&Ae(w.id)),S=t||r||n||i||o||s||c||f||g||b?"opacity-40 pointer-events-none transition-opacity duration-300":"transition-opacity duration-300";return`
    <aside class="flex h-full min-h-0 w-72 shrink-0 flex-col overflow-hidden border-r border-border bg-sidebar text-sidebar-foreground" aria-label="${h(a("shell.navAside"))}">
      <div class="flex h-14 shrink-0 items-center gap-2 ${K} px-4">
        <span class="flex size-9 items-center justify-center rounded-lg bg-sidebar-active text-sidebar-active-fg" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h0v7"/></svg>
        </span>
        <div class="min-w-0">
          <p class="truncate text-sm font-semibold tracking-tight ${Y}">${h(a("shell.appName"))}</p>
          <p class="truncate text-xs text-sidebar-muted">${h(a("shell.appTagline"))}</p>
        </div>
      </div>
      <div class="relative min-h-0 flex flex-1 flex-col overflow-hidden">
        <nav class="sidebar-primary-nav-scroll min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-2 py-3 ${S}" id="nav-tree" aria-label="${h(a("shell.navTree"))}">
          ${k.map(w=>Fn(w,e)).join("")}
        </nav>
        ${bn(e,t)}
        ${dn(e,r)}
        ${cn(e,n)}
        ${un(e,i)}
        ${pn(e,o)}
        ${hn(e,s)}
        ${fn(e,c)}
        ${gn(e,f)}
        ${mn(e,g)}
        ${k.filter(w=>w.subNavPlacement==="sheet").map(w=>vn(w,e,Ae(w.id))).join("")}
      </div>
    </aside>
  `}function Dn(e){const t=a("tertiaryNav.tips").replace(/"/g,"&quot;"),r=ct(e);return`
    <nav class="tips-management-subnav w-52 shrink-0 border-r border-border pr-4 ${pe}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${a("tertiaryNav.tips")}</p>
      <ul class="space-y-0.5">
        ${Be.map(n=>{const i=n.path===r;return`
        <li>
          <a href="#${n.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${i?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${i?'aria-current="page"':""}
          >${u(n.title,n.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Wn(e){const t=a("tertiaryNav.teamReports").replace(/"/g,"&quot;"),r=ut(e);return`
    <nav class="team-reports-subnav w-52 shrink-0 border-r border-border pr-4 ${pe}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${a("tertiaryNav.teamReports")}</p>
      <ul class="space-y-0.5">
        ${Ne.map(n=>{const i=n.path===r;return`
        <li>
          <a href="#${n.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${i?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${i?'aria-current="page"':""}
          >${u(n.title,n.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function jn(e){const t=a("tertiaryNav.teamScheduling").replace(/"/g,"&quot;"),r=pt(e);return`
    <nav class="team-scheduling-subnav w-52 shrink-0 border-r border-border pr-4 ${pe}" aria-label="${t}">
      <p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">${a("tertiaryNav.teamScheduling")}</p>
      <ul class="space-y-0.5">
        ${Ie.map(n=>{const i=n.path===r;return`
        <li>
          <a href="#${n.path}"
            class="flex min-h-9 items-center rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${i?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-muted/60 hover:text-foreground"}"
            ${i?'aria-current="page"':""}
          >${u(n.title,n.titleEn)}</a>
        </li>`}).join("")}
      </ul>
    </nav>
  `}function Gn(e,t,r){const n=se(t,e);let i=lr(t,e.children);e.id==="product-center"&&Gt(t)&&(i="/brand-products"),e.id==="product-center"&&Vt(t)&&(i="/brand-menu"),e.id==="product-center"&&zt(t)&&(i="/menu");const o=`sidebar-children-${e.id}`;return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button type="button"
        data-sidebar-toggle="${e.id}"
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${r}"
        aria-controls="${o}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${r?"":"-rotate-90"}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></span>
      </button>
      <ul id="${o}" class="mt-1 space-y-0.5 border-l border-sidebar-foreground/15 dark:border-white/15 ml-4 pl-2 ${r?"":"hidden"}" role="list" ${r?"":'aria-hidden="true"'}>
        ${e.children.map(c=>{const f=c.path===i,g=c.chainOnly?`<span class="ml-1 rounded bg-sidebar-active/25 px-1 py-px text-[10px] text-sidebar-active-fg">${h(a("badge.chain"))}</span>`:"";return`
        <li>
          <a href="#${c.path}"
            class="flex min-h-9 items-center rounded-md px-2 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${f?rt:N}"
            ${f?'aria-current="page"':""}
            tabindex="${r?"0":"-1"}"
          ><span class="min-w-0 flex-1 truncate">${u(c.title,c.titleEn)}${g}</span></a>
        </li>`}).join("")}
      </ul>
    </div>`}function Fn(e,t){const r=e.defaultChildPath;if(e.id==="capital-turnover")return`
    <div class="mb-1" data-nav-module="${e.id}">
      <a
        href="${en}"
        target="_blank"
        rel="noopener noreferrer"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${N}"
        title="${h(a("capital.newTab"))}"
        aria-label="${h(a("capital.aria"))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-xs text-sidebar-muted/90" aria-hidden="true">↗</span>
      </a>
    </div>`;if(e.id==="product-center-main"){const n=nt(t),i=He();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-product-center-main-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="product-center-main-secondary-sheet"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="marketing"){const n=it(t),i=De();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-marketing-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="marketing-secondary-sheet"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="promotions"){const n=st(t),i=We();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-promotions-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="promotions-secondary-sheet"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="members"){const n=at(t),i=je();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-members-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="members-secondary-sheet"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="reports-finance"){const n=ye(t),i=Fe();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-reports-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="reports-secondary-sheet"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="print-templates"){const n=lt(t),i=Ve();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-print-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="print-secondary-sheet"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="reservations"){const n=we(t),i=qe();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-reservations-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="reservations-secondary-sheet"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="gift-cards"){const n=ot(t),i=Ge();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-gift-cards-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="gift-cards-secondary-sheet"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.id==="inventory-ordering"){const n=se(t,e),i=Le();return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-inventory-sidebar-open
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="inventory-secondary-sheet"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.subNavPlacement==="sheet"){const n=se(t,e),i=Ae(e.id),o=`${e.id}-secondary-sheet`;return`
    <div class="mb-1" data-nav-module="${e.id}">
      <button
        type="button"
        data-nav-module-sheet-sidebar-open="${e.id}"
        class="flex w-full min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${n?F:N}"
        aria-expanded="${i}"
        aria-controls="${o}"
        title="${h(I("nav.openSecondary",{name:M(e)}))}"
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
        <span class="shrink-0 text-sidebar-muted transition-transform duration-200 ${i?"rotate-180":""}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>
    </div>`}if(e.subNavPlacement==="sidebar"){const n=or(e,t);return Gn(e,t,n)}return`
    <div class="mb-1" data-nav-module="${e.id}">
      <a href="#${r}"
        class="flex w-full min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-active focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${se(t,e)?F:N}"
        ${se(t,e)?'aria-current="page"':""}
      >
        <span class="text-sidebar-active shrink-0 [&>svg]:block" aria-hidden="true">${V[e.icon]}</span>
        <span class="min-w-0 flex-1 truncate">${M(e)}</span>
      </a>
    </div>`}function Vn(){const e=wr.map(t=>`
      <li>
        <a
          href="#${t.path}"
          class="group flex min-h-[4.25rem] flex-col justify-center rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors duration-200 hover:border-primary/35 hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span class="text-sm font-semibold text-card-foreground group-hover:text-primary">${u(t.title,t.titleEn)}</span>
          <span class="mt-0.5 text-xs text-muted-foreground">${te()==="en"?t.title:t.titleEn??""}</span>
        </a>
      </li>`).join("");return`
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 class="text-base font-semibold tracking-tight text-card-foreground">${a("settings.overview.title")}</h2>
      <p class="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        ${a("settings.overview.desc")}
      </p>
      <ul class="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3" role="list">
        ${e}
      </ul>
    </div>
  `}function qn(){const e=a("ai.welcomeHtml"),t="rounded-full border border-border bg-background px-3 py-1.5 text-left text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",r=h(a("ai.voice"));return`
    <div class="flex min-h-0 min-w-0 flex-1 flex-col gap-4" id="ai-assistant-root">
      <div class="rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-3 text-sm leading-relaxed text-muted-foreground dark:bg-primary/10">
        <p class="flex items-start gap-2">
          <span class="mt-0.5 shrink-0 text-primary" aria-hidden="true">${er}</span>
          <span>${a("ai.contextNote")}</span>
        </p>
      </div>
      <div class="flex flex-wrap gap-2" role="group" aria-label="${h(a("ai.quickAria"))}">
        <button type="button" class="${t}" data-ai-quick-prompt="帮我查一下权限管理中心里店长和收银员的区别">${h(a("ai.quick.permissions"))}</button>
        <button type="button" class="${t}" data-ai-quick-prompt="搜索一下和打印中心相关的设置在哪里">${h(a("ai.quick.search"))}</button>
        <button type="button" class="${t}" data-ai-quick-prompt="分析一下最近一周各门店营业额趋势">${h(a("ai.quick.analysis"))}</button>
        <button type="button" class="${t}" data-ai-quick-prompt="我想把旗舰店的营业时间改成早上8点到晚上11点">${h(a("ai.quick.config"))}</button>
        <a href="#/permissions/overview" class="inline-flex items-center rounded-full border border-dashed border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/35 hover:text-foreground">${h(a("ai.link.permissions"))}</a>
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
            <p class="mt-2 text-xs text-muted-foreground">${a("ai.tipVoiceLang")}</p>
          </div>
        </div>
      </div>
      <form id="ai-assistant-form" class="flex min-w-0 shrink-0 flex-col gap-2 sm:flex-row sm:items-end">
        <div class="min-w-0 w-full flex-1 overflow-hidden sm:min-w-0">
          <label for="ai-assistant-input" class="sr-only">${h(a("ai.srInputLabel"))}</label>
          <textarea
            id="ai-assistant-input"
            rows="2"
            autocomplete="off"
            placeholder="${h(a("ai.input.placeholder"))}"
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
            ${h(a("ai.send"))}
          </button>
        </div>
      </form>
    </div>
  `}function zn(){const e=document.getElementById("ai-assistant-root"),t=document.getElementById("ai-assistant-form"),r=document.getElementById("ai-assistant-input"),n=document.getElementById("ai-assistant-thread");if(!e||!t||!r||!n)return;const i=(s,c)=>{const f=document.createElement("div");f.className=s==="user"?"flex justify-end":"flex justify-start";const g=document.createElement("div");g.className=s==="user"?"max-w-[90%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground shadow-sm sm:max-w-[85%]":"max-w-[90%] rounded-2xl rounded-bl-md border border-border bg-card px-4 py-2.5 text-sm leading-relaxed text-card-foreground shadow-sm sm:max-w-[85%]",g.innerHTML=h(c).replace(/\n/g,"<br/>"),f.appendChild(g),n.appendChild(f),n.scrollTop=n.scrollHeight};e.addEventListener("click",s=>{const c=s.target.closest("[data-ai-quick-prompt]");if(!c||!(c instanceof HTMLElement))return;const f=c.getAttribute("data-ai-quick-prompt");f&&(r.value=f,r.focus(),t.requestSubmit())}),t.addEventListener("submit",s=>{s.preventDefault();const c=r.value.trim();c&&(i("user",c),r.value="",window.setTimeout(()=>i("assistant",Ur(c)),450))}),r.addEventListener("keydown",s=>{s.key==="Enter"&&(s.shiftKey||s.isComposing||(s.preventDefault(),t.requestSubmit()))});const o=document.getElementById("ai-assistant-voice");o==null||o.addEventListener("click",()=>{const s=window,c=s.SpeechRecognition??s.webkitSpeechRecognition;if(!c){i("assistant",a("ai.speech.unsupported"));return}const f=new c;f.lang=te()==="en"?"en-US":"zh-CN",f.continuous=!1,f.interimResults=!1,o.setAttribute("aria-pressed","true"),o.classList.add("ring-2","ring-ring"),f.onresult=g=>{const b=g.results,S=Array.from(b).map(w=>{var l;return((l=w[0])==null?void 0:l.transcript)??""}).join("");r.value=(r.value?`${r.value} `:"")+S.trim()},f.onerror=()=>{i("assistant",a("ai.speech.micError"))},f.onend=()=>{o.setAttribute("aria-pressed","false"),o.classList.remove("ring-2","ring-ring")};try{f.start()}catch{i("assistant",a("ai.speech.startFailed")),o.setAttribute("aria-pressed","false"),o.classList.remove("ring-2","ring-ring")}})}function Wt(e,t){const r=t.children,n=lr(e,r);return`
    <nav class="mb-6" aria-label="${I("nav.subPagesAria",{name:u(t.title,t.titleEn)}).replace(/"/g,"&quot;")}">
      <div class="-mx-1 flex gap-0.5 overflow-x-auto overflow-y-hidden pb-px scroll-smooth [scrollbar-width:thin]" role="tablist">
        ${r.map(o=>{const s=o.path===n,c=o.chainOnly?`<span class="ml-1 rounded bg-primary/15 px-1 py-px text-[10px] text-primary dark:bg-primary/25">${h(a("badge.chain"))}</span>`:"";return`
          <a href="#${o.path}"
            role="tab"
            aria-selected="${s}"
            tabindex="${s?"0":"-1"}"
            class="shrink-0 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors duration-200 min-h-11 inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-t-md ${s?"border-primary text-primary bg-primary/5":"border-transparent text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground"}"
          >
            <span class="truncate">${u(o.title,o.titleEn)}${c}</span>
          </a>`}).join("")}
      </div>
      <div class="h-px w-full bg-border" aria-hidden="true"></div>
    </nav>
  `}function Un(){const e="h-9 max-w-[9rem] rounded-md border border-border bg-background px-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:max-w-[10.5rem]";return`
    <div
      class="flex max-w-full flex-wrap items-center justify-end gap-1.5 sm:gap-2"
      role="group"
      aria-label="${h(a("header.scopeGroup"))}"
      title="${h(a("header.scopeGroupTitle"))}"
    >
      <label class="sr-only" for="scope-brand-select">${h(a("header.scopeBrand"))}</label>
      <select id="scope-brand-select" class="${e}" aria-label="${h(a("header.scopeBrandAria"))}">
        <option value="">${h(a("header.scopeAllBrands"))}</option>
        <option value="miju">米聚餐饮集团</option>
        <option value="menusifu-na">MenuSifu 北美</option>
      </select>
      <label class="sr-only" for="scope-region-select">${h(a("header.scopeRegion"))}</label>
      <select id="scope-region-select" class="${e}" aria-label="${h(a("header.scopeRegionAria"))}">
        <option value="">${h(a("header.scopeAllRegions"))}</option>
        <option value="east-cn">华东大区</option>
        <option value="south-cn">华南大区</option>
        <option value="north-cn">华北大区</option>
        <option value="us-west">美国西海岸</option>
        <option value="us-east">美国东海岸</option>
      </select>
      <label class="sr-only" for="scope-store-select">${h(a("header.scopeStore"))}</label>
      <select id="scope-store-select" class="${e}" aria-label="${h(a("header.scopeStoreAria"))}">
        <option value="">${h(a("header.scopeAllStores"))}</option>
        <option value="flagship-nyc">旗舰店 · NYC</option>
        <option value="branch-la">分店 · LA</option>
        <option value="shanghai-ljz">上海陆家嘴店</option>
        <option value="guangzhou-tzh">广州天河店</option>
      </select>
    </div>
  `}function Kn(){const e=document.getElementById("scope-brand-select"),t=document.getElementById("scope-region-select"),r=document.getElementById("scope-store-select");if(!e||!t||!r)return;const n=s=>new Set(Array.from(s.options,c=>c.value));(()=>{try{const s=sessionStorage.getItem(ce.brand);s!=null&&n(e).has(s)&&(e.value=s);const c=sessionStorage.getItem(ce.region);c!=null&&n(t).has(c)&&(t.value=c);const f=sessionStorage.getItem(ce.store);f!=null&&n(r).has(f)&&(r.value=f)}catch{}})();const o=()=>{try{sessionStorage.setItem(ce.brand,e.value),sessionStorage.setItem(ce.region,t.value),sessionStorage.setItem(ce.store,r.value)}catch{}window.dispatchEvent(new CustomEvent("menusifu:scope-filter-change",{detail:{brand:e.value,region:t.value,store:r.value}}))};e.addEventListener("change",o),t.addEventListener("change",o),r.addEventListener("change",o)}function Yn(){const e=location.hash.slice(1)||"/dashboard/overview",t=yn(e),{title:r,module:n}=xn(e),i=t?xt(t):n??"",o=e.startsWith("/ai-assistant"),s=Gt(e),c=Vt(e),f=zt(e),g=xr(e),b=$r(e),S=Sr(e),w=Pr(e),l=wt(e),p=Xr(e),v=rn(e),m=o||c||f||g||b||S||w||v||p,$=sn(t),A="flex min-h-0 flex-1 flex-col gap-6 overflow-hidden sm:flex-row sm:items-stretch",B="min-w-0 min-h-0 flex-1 overflow-y-auto",Z=m?"min-h-0 flex-1 flex flex-col overflow-hidden p-4 md:p-6 animate-fade-in":"min-h-0 flex-1 overflow-y-auto p-4 md:p-6 animate-fade-in",le=o?"mx-auto flex w-full min-h-0 min-w-0 max-w-3xl flex-1 flex-col":m?"mx-auto flex w-full min-h-0 flex-1 flex-col max-w-[90rem]":"mx-auto max-w-6xl space-y-6",d=$?m?`<div class="mb-6 shrink-0">${Wt(e,t)}</div>`:Wt(e,t):"",x=m?' class="min-h-0 flex-1 flex flex-col overflow-hidden"':"";return`
    <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      ${`<header class="z-40 flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border bg-card/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-card/80 sm:flex-nowrap sm:gap-4 sm:py-0">
        <div class="min-w-0">
          <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">${i}</p>
          <h1 id="main-content" tabindex="-1" class="truncate text-lg font-semibold tracking-tight text-card-foreground">${h(r)}</h1>
        </div>
        <div class="flex w-full min-w-0 flex-wrap items-center justify-end gap-2 sm:w-auto sm:flex-nowrap">
          <a
            href="#/ai-assistant/chat"
            class="inline-flex h-9 items-center gap-1.5 rounded-md border border-primary/35 bg-primary/[0.08] px-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:h-10 sm:px-3"
            title="${h(a("header.aiOpenTitle"))}"
          >
            <span class="shrink-0 text-primary [&>svg]:block" aria-hidden="true">${er}</span>
            <span class="hidden sm:inline">${h(a("header.aiShort"))}</span>
          </a>
          ${Un()}
          ${$n()}
          <button type="button" id="theme-toggle" class="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:size-11" aria-label="${h(a("header.themeToggle"))}">
            <svg class="size-5 dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            <svg class="size-5 hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          </button>
        </div>
      </header>`}
      <main class="${Z}">
        <div class="${le}">
          ${d}
          <div role="tabpanel" aria-label="${r.replace(/"/g,"&quot;")}" id="module-tab-panel"${x}>
            ${o?qn():l?Zr():p?Jr():v?nn():s?ne(e,r,t,{brandProductsSubnav:!0}):c?`<div class="${A}">
                    ${_n(e)}
                    <div class="${B}">${ne(e,r,t,{brandMenuSubnav:!0})}</div>
                  </div>`:f?`<div class="${A}">
                    ${On(e)}
                    <div class="${B}">${ne(e,r,t,{storeMenuSubnav:!0})}</div>
                  </div>`:g?`<div class="${A}">
                    ${Ln(e)}
                    <div class="${B}">${ne(e,r,t,{deviceManagementHardwareSubnav:!0})}</div>
                  </div>`:S?`<div class="${A}">
                    ${Wn(e)}
                    <div class="${B}">${ne(e,r,t,{teamReportsSubnav:!0})}</div>
                  </div>`:w?`<div class="${A}">
                    ${jn(e)}
                    <div class="${B}">${ne(e,r,t,{teamSchedulingSubnav:!0})}</div>
                  </div>`:b?`<div class="${A}">
                    ${Dn(e)}
                    <div class="${B}">${ne(e,r,t,{tipsManagementSubnav:!0})}</div>
                  </div>`:e==="/settings/overview"?Vn():ne(e,r,t)}
          </div>
        </div>
      </main>
    </div>
  `}function ne(e,t,r,n){const i=(r==null?void 0:r.subNavPlacement)==="sidebar",o=(r==null?void 0:r.subNavPlacement)==="sheet",s=n==null?void 0:n.brandProductsSubnav,c=n==null?void 0:n.brandMenuSubnav,f=n==null?void 0:n.storeMenuSubnav,g=n==null?void 0:n.deviceManagementHardwareSubnav,b=n==null?void 0:n.tipsManagementSubnav,S=n==null?void 0:n.teamReportsSubnav,w=n==null?void 0:n.teamSchedulingSubnav,l=r?u(r.title,r.titleEn):"",p=g?a("placeholder.bullet.deviceHw"):b?a("placeholder.bullet.tips"):S?a("placeholder.bullet.teamReports"):w?a("placeholder.bullet.teamScheduling"):s?a("placeholder.bullet.brandProducts"):c?a("placeholder.bullet.brandMenu"):f?a("placeholder.bullet.storeMenu"):(r==null?void 0:r.id)==="permission-mgmt"?a("placeholder.bullet.permissions"):(r==null?void 0:r.id)==="reservations"?a("placeholder.bullet.reservations"):o&&r?I("placeholder.sheetModule",{title:l}):i&&r?I("placeholder.sidebarModule",{title:l}):r?I("placeholder.tabModule",{title:l}):"",v=a(i||o?"placeholder.navDocLong":"placeholder.navDocShort"),m=[a("placeholder.kpi.sales"),a("placeholder.kpi.orders"),a("placeholder.kpi.staff")];return`
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="text-sm text-muted-foreground leading-relaxed">${h(a("placeholder.route"))}<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">${e}</code></p>
      <p class="mt-4 text-base text-card-foreground">${I("placeholder.intro",{title:t})}</p>
      <ul class="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
        ${p?`<li>${p}</li>`:""}
        <li>${v}</li>
        <li>${a("placeholder.designTokens")}</li>
        <li>${a("placeholder.chainTab")}</li>
      </ul>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${m.map($=>`<div class="rounded-lg border border-border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">${h($)}</p><p class="mt-2 text-2xl font-semibold tabular-nums text-card-foreground">—</p></div>`).join("")}
    </div>
  `}let ie=null;function Zn(e,t){var n;const r=()=>{ie&&(window.removeEventListener("keydown",ie),ie=null),location.hash="#/dashboard/overview"};ie=i=>{i.key==="Escape"&&(i.preventDefault(),r())},window.addEventListener("keydown",ie),(n=document.getElementById(t))==null||n.addEventListener("click",i=>{i.preventDefault(),r()}),requestAnimationFrame(()=>{var i;(i=document.getElementById(e))==null||i.focus({preventScroll:!0})})}function y(){var c,f,g,b,S,w,l,p,v,m,$,A,B,Z,le;En(),Jt(te());const e=location.hash.slice(1)||"/dashboard/overview";Tt!==e&&!Ht(e)&&R(!1),Tt=e,Mt!==e&&!nt(e)&&_(!1),Mt=e,Ct!==e&&!it(e)&&O(!1),Ct=e,At!==e&&!st(e)&&L(!1),At=e,Bt!==e&&!at(e)&&H(!1),Bt=e,Nt!==e&&!ot(e)&&D(!1),Nt=e,It!==e&&!ye(e)&&W(!1),It=e,Rt!==e&&!lt(e)&&j(!1),Rt=e,_t!==e&&!we(e)&&G(!1),_t=e,wn(e),ie&&(window.removeEventListener("keydown",ie),ie=null);const t=document.getElementById("app");if(!t)return;const r=((c=document.getElementById("nav-tree"))==null?void 0:c.scrollTop)??0,n=Math.max(r,Sn()),o=wt(e);t.innerHTML=`
    <div class="relative h-dvh min-h-0 w-full overflow-hidden">
      <div class="flex h-full min-h-0 w-full">
        ${Hn()}
        ${Yn()}
      </div>
      ${o?Yr():""}
    </div>
  `;const s=()=>{const d=document.getElementById("nav-tree");if(!d)return;const x=Math.max(0,d.scrollHeight-d.clientHeight);d.scrollTop=Math.min(n,x),Dt(d.scrollTop)};requestAnimationFrame(()=>{s(),requestAnimationFrame(s)}),(f=document.getElementById("nav-tree"))==null||f.addEventListener("scroll",()=>{const d=document.getElementById("nav-tree");d&&Dt(d.scrollTop)},{passive:!0}),(g=document.getElementById("nav-tree"))==null||g.addEventListener("click",d=>{var Et;const x=d.target.closest("[data-inventory-sidebar-open]");if(x&&x instanceof HTMLButtonElement){d.preventDefault(),q(),_(!1),O(!1),L(!1),H(!1),D(!1),W(!1),j(!1),G(!1),R(!Le()),y();return}const E=d.target.closest("[data-product-center-main-sidebar-open]");if(E&&E instanceof HTMLButtonElement){d.preventDefault(),q(),R(!1),O(!1),L(!1),H(!1),D(!1),W(!1),j(!1),G(!1),_(!He()),y();return}const Se=d.target.closest("[data-marketing-sidebar-open]");if(Se&&Se instanceof HTMLButtonElement){d.preventDefault(),q(),R(!1),_(!1),L(!1),H(!1),D(!1),W(!1),j(!1),G(!1),O(!De()),y();return}const re=d.target.closest("[data-promotions-sidebar-open]");if(re&&re instanceof HTMLButtonElement){d.preventDefault(),q(),R(!1),_(!1),O(!1),H(!1),D(!1),W(!1),j(!1),G(!1),L(!We()),y();return}const de=d.target.closest("[data-members-sidebar-open]");if(de&&de instanceof HTMLButtonElement){d.preventDefault(),q(),R(!1),_(!1),O(!1),L(!1),D(!1),W(!1),j(!1),G(!1),H(!je()),y();return}const he=d.target.closest("[data-reports-sidebar-open]");if(he&&he instanceof HTMLButtonElement){d.preventDefault(),q(),R(!1),_(!1),O(!1),L(!1),H(!1),D(!1),j(!1),G(!1),W(!Fe()),y();return}const Ee=d.target.closest("[data-print-sidebar-open]");if(Ee&&Ee instanceof HTMLButtonElement){d.preventDefault(),q(),R(!1),_(!1),O(!1),L(!1),H(!1),D(!1),W(!1),G(!1),j(!Ve()),y();return}const Pe=d.target.closest("[data-reservations-sidebar-open]");if(Pe&&Pe instanceof HTMLButtonElement){d.preventDefault(),q(),R(!1),_(!1),O(!1),L(!1),H(!1),D(!1),W(!1),j(!1),G(!qe()),y();return}const fe=d.target.closest("[data-gift-cards-sidebar-open]");if(fe&&fe instanceof HTMLButtonElement){d.preventDefault(),q(),R(!1),_(!1),O(!1),L(!1),H(!1),W(!1),j(!1),G(!1),D(!Ge()),y();return}const C=d.target.closest("[data-nav-module-sheet-sidebar-open]");if(C&&C instanceof HTMLButtonElement){const T=C.getAttribute("data-nav-module-sheet-sidebar-open");if(!T)return;d.preventDefault();const ve=!Ae(T);R(!1),_(!1),O(!1),L(!1),H(!1),D(!1),W(!1),j(!1),G(!1),q(),ve&&Ce(T,!0),y();return}const ge=d.target.closest("a[href^='#']");if(ge&&ge instanceof HTMLAnchorElement){const T=((Et=ge.getAttribute("href"))==null?void 0:Et.slice(1))??"";T&&!Ht(T)&&R(!1),T&&!nt(T)&&_(!1),T&&!it(T)&&O(!1),T&&!st(T)&&L(!1),T&&!at(T)&&H(!1),T&&!ot(T)&&D(!1),T&&!ye(T)&&W(!1),T&&!lt(T)&&j(!1),T&&!we(T)&&G(!1);for(const ve of k)ve.subNavPlacement==="sheet"&&T&&!se(T,ve)&&Ce(ve.id,!1)}const me=d.target.closest("[data-sidebar-toggle]");if(!me||!(me instanceof HTMLButtonElement))return;const St=me.getAttribute("data-sidebar-toggle");if(!St)return;const Te=k.find(T=>T.id===St);if(!Te||Te.subNavPlacement!=="sidebar")return;d.preventDefault();const gr=location.hash.slice(1)||"/dashboard/overview",mr=or(Te,gr);Pn(Te.id,!mr),y()},!0),(b=document.getElementById("inventory-secondary-sheet"))==null||b.addEventListener("click",d=>{if(d.target.closest("[data-inventory-secondary-close]")){d.preventDefault(),R(!1),y();return}},!0),(S=document.getElementById("product-center-main-secondary-sheet"))==null||S.addEventListener("click",d=>{const x=d.target;if(x.closest("[data-pcm-sheet-bp-mgmt-toggle]")){d.preventDefault();const E=location.hash.slice(1)||"/dashboard/overview";Mn(!cr(E)),y();return}if(x.closest("[data-pcm-sheet-brand-menu-toggle]")){d.preventDefault();const E=location.hash.slice(1)||"/dashboard/overview";Cn(!ur(E)),y();return}if(x.closest("[data-pcm-sheet-store-menu-toggle]")){d.preventDefault();const E=location.hash.slice(1)||"/dashboard/overview";An(!pr(E)),y();return}x.closest("[data-product-center-main-secondary-close]")&&(d.preventDefault(),_(!1),y())},!0),(w=document.getElementById("marketing-secondary-sheet"))==null||w.addEventListener("click",d=>{const x=d.target;if(x.closest("[data-marketing-sheet-mgmt-toggle]")){d.preventDefault();const E=location.hash.slice(1)||"/dashboard/overview";Bn(!hr(E)),y();return}x.closest("[data-marketing-secondary-close]")&&(d.preventDefault(),O(!1),y())},!0),(l=document.getElementById("promotions-secondary-sheet"))==null||l.addEventListener("click",d=>{d.target.closest("[data-promotions-secondary-close]")&&(d.preventDefault(),L(!1),y())},!0),(p=document.getElementById("members-secondary-sheet"))==null||p.addEventListener("click",d=>{d.target.closest("[data-members-secondary-close]")&&(d.preventDefault(),H(!1),y())},!0),(v=document.getElementById("gift-cards-secondary-sheet"))==null||v.addEventListener("click",d=>{d.target.closest("[data-gift-cards-secondary-close]")&&(d.preventDefault(),D(!1),y())},!0),(m=document.getElementById("reports-secondary-sheet"))==null||m.addEventListener("click",d=>{d.target.closest("[data-reports-secondary-close]")&&(d.preventDefault(),W(!1),y())},!0),($=document.getElementById("print-secondary-sheet"))==null||$.addEventListener("click",d=>{d.target.closest("[data-print-secondary-close]")&&(d.preventDefault(),j(!1),y())},!0),(A=document.getElementById("reservations-secondary-sheet"))==null||A.addEventListener("click",d=>{d.target.closest("[data-reservations-secondary-close]")&&(d.preventDefault(),G(!1),y())},!0);for(const d of k)d.subNavPlacement==="sheet"&&((B=document.getElementById(`${d.id}-secondary-sheet`))==null||B.addEventListener("click",x=>{x.target.closest(`[data-nav-module-sheet-secondary-close="${d.id}"]`)&&(x.preventDefault(),Ce(d.id,!1),y())},!0));(Z=t.firstElementChild)==null||Z.addEventListener("click",d=>{var fe;const x=d.target.closest("[data-tertiary-sidebar-toggle]");if(!x||!(x instanceof HTMLButtonElement))return;const E=x.getAttribute("data-tertiary-sidebar-toggle");if(!E)return;const Se=k.filter(C=>C.subNavPlacement==="sheet").reduce((C,ge)=>C||gt(ge).find(me=>me.id===E),void 0),re=ht.find(C=>C.id===E)??Oe.find(C=>C.id===E)??xe.find(C=>C.id===E)??Re.find(C=>C.id===E)??_e.find(C=>C.id===E)??ue.find(C=>C.id===E)??ke.find(C=>C.id===E)??Se;if(!((fe=re==null?void 0:re.sidebarChildren)!=null&&fe.length))return;d.preventDefault();const de=location.hash.slice(1)||"/dashboard/overview",he=re.activePrefix??re.path,Ee=de===he||de.startsWith(`${he}/`),Pe=kt(E,de,Ee);Tn(E,!Pe),y()}),(le=document.getElementById("theme-toggle"))==null||le.addEventListener("click",()=>{var x;document.documentElement.classList.toggle("dark");const d=document.documentElement.classList.contains("dark");(x=document.querySelector('meta[name="theme-color"]'))==null||x.setAttribute("content",d?"#0f172a":"#f8fafc")}),o&&Zn("product-center-a-dialog","product-center-a-close"),zn(),Kn(),kn(),on()}window.addEventListener("hashchange",y);typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.classList.add("dark");y();
