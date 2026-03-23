# 餐饮商家后台 — 系统结构目录

依据 `docs/餐饮商家后台-导航与目录结构建议.md` **§八 整合后推荐导航树** 与 **§8.1 连锁/加盟扩展** 生成。

## 仓库目录树

```text
admin-web/
├── index.html                 # 入口 HTML（skip link、viewport、字体）
├── package.json
├── vite.config.ts             # Vite + @tailwindcss/vite
├── tsconfig.json
├── README.md
├── STRUCTURE.md               # 本文件
└── src/
    ├── main.ts                # 布局壳、Hash 路由、主题与连锁开关
    ├── vite-env.d.ts
    ├── styles/
    │   └── app.css            # Tailwind v4：@import + @theme 设计令牌 + dark
    └── config/
        └── navigation.ts      # 导航模块、子路由、chainOnly 标记
```

## 路由与模块映射（一级 → 路径前缀）

| 一级模块 | `path` 前缀 | 说明 |
|----------|-------------|------|
| 主页 | `/dashboard` | 概览、待办、KPI、多店切换 |
| 订单 | `/orders` | **侧栏**：全部订单、退单、订单历史 |
| 交易 | `/transactions` | **侧栏**：交易流水、支付方式、对账（可选后续并入报表） |
| 门店信息 | `/store` | **侧栏**：二级为「门店基础信息」「桌台平面图」；**门店基础信息** 在主区内为三级左侧导航（同 Kiosk），含 **基础信息、LOGO、营业时间**（`STORE_BASIC_SUBNAV`） |
| 菜单 | `/menu` | **侧栏**：门店菜单、门店商品、门店调味、库存变更记录、打印设置 |
| 智能点餐 | `/ordering` | **侧栏**：点击「智能点餐」展开/收起二级（POS、POS GO、PayPad、扫码、eMenu、Kiosk、Online Order、外卖平台、餐厅网站、点餐限制规则）；**Kiosk** 在 `/ordering/kiosk/*` 主内容区另有左侧细项导航（见下节） |
| 厨显 | `/operations/kitchen-kds` | 默认 Tab：厨显设置 |
| 客显 | `/operations/customer-display` | 顾客侧显示屏 |
| 叫号 | `/operations/queue-call` | 取餐叫号、语音播报等 |
| 预约 | `/operations/reservations` | 订座、预订 |
| 排队 | `/operations/waitlist` | 等位、取号队列 |
| 设备 | `/operations/devices` | Tab：设备、支付、钱箱、路由器、POS、POS GO、KDS、叫号屏、打印机、Kiosk、eMenu |
| 订货与库存 | `/operations/inventory-ordering` | 连锁扩展 |
| 巡店与巡检 | `/operations/store-patrol` | 连锁扩展 |
| 促销 | `/promotions` | **侧栏**：展开后二级「促销管理」 |
| 营销 | `/marketing` | **侧栏**：广告智投、社媒营销、创意素材 |
| 会员 | `/members` | **侧栏**：会员设置、福利活动、优惠券、列表、精准触达、360 洞察 |
| 评价 | `/reviews` | **侧栏**：评价洞察、设置、明细、统计 |
| 礼品卡 | `/gift-cards` | **侧栏**：卡面设计、模板管理 |
| 团队管理 | `/team` | **侧栏**：点击「团队管理」展开/收起二级（角色与员工、休息与加班、员工打卡、小费、员工报表、7Shifts、排班与考勤「连锁」、绩效与培训） |
| 报表与财务 | `/reports` | **侧栏**：展开后二级含收入/明细/餐段/菜品/损耗/钱箱/异常/礼品卡/会员/优惠券/月结/打款费用等（不含资金周转独立一级） |
| 资金周转 | `/reports/capital` | 独立一级；路由仍属 `/reports/capital` 前缀 |
| 设置 | `/settings` | 基础、打印、小费、安全、集成；连锁：数据范围 |

## 连锁/加盟扩展项（`chainOnly: true`）

在 `navigation.ts` 中标记；侧栏（及 Tab 模块的 Tab）**始终展示**对应入口；Tab 或侧栏二级上保留「连锁」角标以便识别。涉及路径：

- `operations/inventory-ordering` — 订货与库存  
- `operations/store-patrol` — 巡店与巡检  
- `team/scheduling` — 排班与考勤（与 §8.1 对齐）  
- `settings/data-scope` — 角色与数据范围  

## Tab 二级导航（全局约定）

**默认**：侧栏 **一级** 入口链向 `defaultChildPath`，**二级**在右侧主内容区 **顶部 Tab**（`role="tablist"` / `tab` / `tabpanel`）。

**例外 — 侧栏折叠二级**（`subNavPlacement: "sidebar"`）：当前为 **订单**、**门店信息**、**菜单**、**智能点餐**、**交易**、**促销**、**营销**、**会员**、**评价**、**礼品卡**、**团队管理**、**报表与财务**。二级在 **左侧主导航**内展示；点击一级行 **仅展开/收起**（不直接跳转路由），再点子项进入对应 `#/...`。展开状态用 `sessionStorage` 键 **`sidebar-nav-expanded:<模块 id>`** 记忆；未设置且当前路由已在该模块前缀下时默认展开。兼容旧键 `ordering-sidebar-expanded`（仅智能点餐）。**资金周转**仍为独立一级（`/reports/capital`），不在「报表与财务」折叠组内。

- `navigation.ts`：每个模块必填 `defaultChildPath`（与某子路由一致）
- `main.ts`：`getTabModule()` 按 **最长 path 前缀** 匹配当前模块（避免 `/orders` 与 `/ordering`、``/reports`` 与 ``/reports/capital`` 等歧义）
- `normalizeTabModuleHashes()`：访问 `#/menu`、`#/reports` 等仅一级路径时，自动跳到对应 `defaultChildPath`（`defaultChildPath === path` 的单页模块不跳转）；**`#/operations/floor-plan`** → **`#/store/floor-plan`**；**`#/orders/dine-in`** 等 → **`#/orders/all`**；**`#/menu/groups`** / **`#/menu/items`** / **`#/menu/availability`**（及子路径）→ **`#/menu/store-menu`**
- **侧栏子项高亮**：`getActiveChildTabPath()` 按子项 **最长 path 前缀** 匹配（含 `/ordering/kiosk/...` 归到 Kiosk）；`/store/basic`、`/store/logo`、`/store/business-hours` 等归到侧栏二级「门店基础信息」

### 门店基础信息（三级：侧栏「门店基础信息」+ 主区左侧细项）

路径 **`/store/basic`**、**`/store/logo`**、**`/store/business-hours`**（及以其为前缀的子路径）：主导航展开「门店信息」后选 **门店基础信息**，`tabpanel` 内左侧细项见 **`STORE_BASIC_SUBNAV`**，交互对齐 Kiosk 点餐三级区。

### Kiosk 点餐（三级：侧栏渠道 + 主区左侧细项）

路径前缀 **`/ordering/kiosk/`**：先在侧栏「智能点餐」下选 **Kiosk 点餐**，再在 `tabpanel` 内渲染 **左侧竖向细项导航**，条目见 **`KIOSK_ORDERING_SUBNAV`**（含订单类型、小费/收据/支付、菜单/菜单标签/本地促销、展示与桌台/平台/产品对接、封面图/海报/屏保/登录引导、附加费、品牌与设备管理等）。访问 **`#/ordering/kiosk`**（或带尾斜杠）会重定向到 **`getKioskOrderingDefaultPath()`**。

| 模块 | `defaultChildPath` |
|------|-------------------|
| 主页 | `/dashboard/overview` |
| 订单 | `/orders/all` |
| 交易 | `/transactions/ledger` |
| 门店信息 | `/store/basic` |
| 菜单 | `/menu/store-menu` |
| 智能点餐 | `/ordering/pos` |
| 厨显 | `/operations/kitchen-kds` |
| 客显 | `/operations/customer-display` |
| 叫号 | `/operations/queue-call` |
| 预约 | `/operations/reservations` |
| 排队 | `/operations/waitlist` |
| 设备 | `/operations/devices`（Tab 含 `…/payments`、`…/cash-drawer`、`…/router`、`…/pos`、`…/pos-go`、`…/kds`、`…/queue-display` 等） |
| 订货与库存 | `/operations/inventory-ordering` |
| 巡店与巡检 | `/operations/store-patrol` |
| 促销 | `/promotions/campaigns` |
| 营销 | `/marketing/ai/ads` |
| 会员 | `/members/settings` |
| 评价 | `/reviews/insights` |
| 礼品卡 | `/gift-cards/design` |
| 团队管理 | `/team/roles-employees` |
| 报表与财务 | `/reports/revenue` |
| 资金周转 | `/reports/capital` |
| 设置 | `/settings/basic` |

## 后续可扩展目录（建议）

接入真实业务时可在 `src/` 下增加：

```text
src/
├── pages/           # 按模块拆分的页面逻辑
├── components/      # 可复用 UI（按钮、表格、表单 — CVA + 语义 token）
├── lib/utils.ts     # cn() 等
└── router.ts        # 由 Hash 升级为 SPA 路由时可抽出
```
