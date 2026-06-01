/**
 * 生成 docs/前厅管理中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-foh-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";
import { isSettingsCatalogExcluded } from "./lib/settings-catalog-exclusions.mjs";
import { filterRowsForSettingsHub } from "./lib/settings-hub-override.mjs";
import { INTRA_GROUP_SORT_BY_SEQ } from "./lib/settings-intra-group-sort.mjs";
import { buildCatalogSceneDesc } from "./lib/settings-catalog-scene-supplement.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const docsDir = path.join(root, "docs");
const projectDocsDir = path.join(docsDir, "项目文档");
const sourcePath = [projectDocsDir, docsDir].map((d) => path.join(d, "配置归类-终版.md")).find((p) => fs.existsSync(p))
  ?? path.join(projectDocsDir, "配置归类-终版.md");
const outPath = path.join(projectDocsDir, "前厅管理中心-设置二级导航重设计方案.md");

const titles = {
  "tables-floor": "桌台与餐位",
  "pos-button-visibility": "POS 按钮显隐",
  "pos-order-toolbar": "POS 点单页工具栏",
  "pos-menu-ui": "POS 菜单与布局",
  "guest-menu-structure": "食客端·菜单结构",
  "guest-menu-global": "食客端·首页与版式",
  "guest-menu-cart": "食客端·购物车展示",
  "guest-facing-locale": "食客端·界面语言",
  "guest-order-rules": "食客端·下单与规则",
  "guest-notes-fees": "备注与附加服务",
  "wait-time": "等待时长提示",
  cds: "客显屏",
};

const reasons = {
  "tables-floor":
    "清桌与自动释放、服务员（企台）现场操作权限；平面图 seq 428 为独立功能页「餐位平面图」。",
  "pos-button-visibility":
    "POS 点单页操作按钮是否展示、是否收入「更多」（seq 193–215，不含分割线命名）；对标 Toast「点餐界面设置」按钮显隐。",
  "pos-order-toolbar":
    "点单页工具栏按钮组成、排序及分割线命名（含 seq 196）；对标 Toast「点餐界面设置」工具栏布局。",
  "pos-menu-ui":
    "POS 端菜单搜索、时段菜单、分类/菜品按钮布局与 iPad 菜单扩展；组内按「查找 → 时段 → 界面布局 → iPad」连续展示。",
  "guest-menu-structure":
    "eMenu 服务设置·菜单：组类树、导航位、瀑布流与价格展示等结构项；展示 SSOT（515/516/524/528），去重见 §3.8。",
  "guest-menu-global":
    "全店默认菜单组、点单模式、首页入口与列表版式（含 600 纯展示、604 Pro）；532/612 为 **品牌露出显隐**（eMenu）；Kiosk/eMenu 封面·门店 Logo **维护**在素材中心（555/556 等），见 §3.11。",
  "guest-menu-cart": "购物车内的送厨状态、订单价格与售罄隐藏展示（616–618）。",
  "guest-facing-locale":
    "eMenu / Kiosk / 客显等 **C 端界面**可选语言与默认语言（SSOT：652/653）；不含 467/513/514 重复项；菜单文案多语言在商品中心。",
  "guest-order-rules":
    "食客端下单前提示、用餐时长、火锅与轮次规则（不含纯展示模式 600）；对标 Snackpass「所有订单」行为规则。",
  "guest-notes-fees":
    "食客端备注能力（521–523）与餐具/打包附加费（544、545）；不含购物车展示项与已去重 609/610。",
  "wait-time":
    "等待时长展示与样式；**535/536** 为主开关 + 展开子项（分钟/杯数阈值），**537–540** 为展示类型与字体样式。",
  cds:
    "客显屏封面/Logo（461/462）与 Pickup/Delivery 场景启用（466）；与素材中心分工见 §3.11；界面语言见 `guest-facing-locale`。",
};

const assignMap = {
  "tables-floor": [169, 534, 642, 351, 347],
  "pos-button-visibility": [...range(193, 196), ...range(197, 216)],
  "pos-order-toolbar": [196, 483, 484, 485, 486],
  "pos-menu-ui": [118, 176, 177, 348, 350, ...range(216, 221)],
  "guest-menu-structure": [515, 516, 517, 518, 519, 520, 524, 528],
  "guest-menu-global": [532, 599, 601, 602, 604, 606, 607, 608, 611, 600, 612, 645],
  "guest-menu-cart": [616, 617, 618],
  "guest-facing-locale": [652, 653],
  "guest-order-rules": [569, 570, 573, 577, 578, 579, 580, 597, 598],
  "guest-notes-fees": [521, 522, 523, 544, 545],
  "wait-time": [535, 536, 537, 538, 539, 540],
  cds: [461, 462, 466],
};

function range(a, b) {
  const out = [];
  for (let i = a; i < b; i++) out.push(i);
  return out;
}

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferTerminal(seq, nav) {
  if (seq === 652 || seq === 653) return "eMenu/Kiosk/客显";
  if (seq >= 461 && seq <= 466) return "客显";
  if (nav === "iPad") return "iPad/POS";
  if (nav === "界面设置" || nav === "点单页配置" || nav === "点单") return "POS";
  if (nav === "桌子") return "POS";
  if (nav === "客显屏") return "客显";
  if (["服务设置", "全局设置", "附加费设置"].includes(nav)) return "eMenu";
  if (seq === 351) return "POS/iPad";
  return "前厅";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

function sortItemsInGroup(items) {
  return [...items].sort((a, b) => {
    const oa = INTRA_GROUP_SORT_BY_SEQ.get(a.seq);
    const ob = INTRA_GROUP_SORT_BY_SEQ.get(b.seq);
    const hasA = oa !== undefined;
    const hasB = ob !== undefined;
    if (hasA && hasB && oa !== ob) return oa - ob;
    if (hasA !== hasB) return hasA ? -1 : 1;
    return a.seq - b.seq;
  });
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = filterRowsForSettingsHub(parseConfigMd(md), "前厅管理中心").filter(
  (r) => !isSettingsCatalogExcluded(r.seq),
);
const order = [
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

const missing = rows.filter((r) => !assign.has(r.seq)).map((r) => r.seq);
if (missing.length) {
  throw new Error(`未归类 seq: ${missing.join(", ")}`);
}

const by = new Map(order.map((k) => [k, []]));
for (const r of rows) {
  const key = assign.get(r.seq);
  by.get(key).push({
    ...r,
    terminal: inferTerminal(r.seq, r.nav),
  });
}

const lines = [];
const push = (...xs) => lines.push(...xs);

push(
  "# 前厅管理中心 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.6（已确认）  ",
  "> 数据范围：前厅设置 catalog **91** 条（终版 B 平台归属前厅 100 条；跨 hub / 去重见 §3.2–§3.11）  ",
  "> 竞品参考：Toast / Clover / Square / Peblla / Snackpass 商家后台结构文档及《餐饮行业竞品后台信息架构深度分析》",
  "",
  "---",
  "",
  "## 1. 背景与目标",
  "",
  "### 1.1 现状问题",
  "",
  "| 指标 | 现状 | 问题 |",
  "|------|------|------|",
  "| 二级分组数 | **26 组** / 100 条 | 组过多，侧栏难扫读 |",
  "| 命名来源 | 多为旧系统「功能模块」 | 如「常见按键」「其他按键」，商户难以理解 |",
  "| 重复组名 | 「展示设置」「菜单」等重复出现 | 无法区分 POS 与 eMenu |",
  "| 渠道不清 | POS / iPad / eMenu / 客显屏混排 | 不符合竞品「场景 + 渠道」心智 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **12 个** 有餐饮场景语义的分类（食客端菜单 §3.9、C 端语言 §3.10；客显屏 §3.11 组内分封面/场景）",
  "- 每条功能设置有明确归属与归类理由",
  "- 为 `docs/项目文档/配置归类-分组映射.csv` 提供可执行的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（前厅/前台设置维度）",
  "",
  "| 竞品 | 前厅/前台设置组织方式 | 本项目借鉴 |",
  "|------|----------------------|------------|",
  "| **Toast** | 独立「前厅」：点餐界面设置、快速点餐、桌边服务、服务区与餐位、移动点餐 | 桌台独立成组；POS 按钮显隐、工具栏与菜单布局分轨 |",
  "| **Snackpass** | 设置→前台：全渠道 / 在线 / Kiosk与收银台；小费单独页 | 食客端规则与菜单分轨；终端用标签表达渠道 |",
  "| **Square** | 履行方式分 POS/线上；设备模式 | 组内用终端列标注 scope |",
  "| **Peblla** | 设置中心 + 表单「适用场景/渠道」 | 组内用终端列标注 scope |",
  "| **Clover** | 前厅弱，多在设置→交易 | 订单类型/折扣等留在订单/支付中心 |",
  "",
  "### 2.1 前厅设置五维（商户心智）",
  "",
  "```text",
  "桌台与餐位 → POS 收银点单 → 食客端扫码点餐 → 客显屏",
  "```",
  "",
  "---",
  "",
  "## 3. 推荐二级导航结构（12 组，已确认）",
  "",
  "| 序号 | groupTitle | groupKey | 条数 | 说明 |",
  "|------|------------|----------|------|------|",
);

let total = 0;
for (let i = 0; i < order.length; i++) {
  const k = order[i];
  const n = by.get(k).length;
  total += n;
  push(`| ${i + 1} | **${titles[k]}** | \`${k}\` | ${n} | ${reasons[k]} |`);
}
push(
  `| | **合计** | | **${total}** | |`,
  "",
  "### 3.1 v1.1 变更说明（已确认）",
  "",
  "将原 **POS 操作与按钮**（`pos-actions`，31 条）拆为两组，便于侧栏扫读与对标竞品「按钮显隐」与「工具栏布局」分轨：",
  "",
  "| 新组 | groupKey | 条数 | 范围 |",
  "|------|----------|------|------|",
  "| POS 按钮显隐 | `pos-button-visibility` | 27 | seq 118、148、164、193–215、196、347 |",
  "| POS 点单页工具栏 | `pos-order-toolbar` | 4 | seq 483–486（整单/菜品详情/订单信息/订单金额） |",
  "",
  "catalog 对 `/operations/queue-call/settings` 使用固定 `groupOrder`，保证侧栏顺序为：桌台 → 按钮显隐 → 点单工具栏 → 菜单布局 → …",
  "",
  "### 3.2 v1.2 变更说明（已确认）",
  "",
  "收紧 **POS 按钮显隐** 边界，仅保留 seq **193–215**（是否收入「更多」）；其余迁出：",
  "",
  "| seq | 功能设置 | 迁入 |",
  "|-----|----------|------|",
  "| 118 | 搜索菜单 | 前厅 · `pos-menu-ui` |",
  "| 196 | 自定义分割线名称 | 前厅 · `pos-order-toolbar` |",
  "| 347 | 允许更换企台 | 前厅 · `tables-floor` |",
  "| 164 | 自定义折扣原因 | 订单中心 · `discount-void`（与 162/163 同组） |",
  "| 148 | 比价功能模式 | 商品中心 · `pricing-tools` |",
  "",
  "设置 catalog 通过 `scripts/lib/settings-hub-override.mjs` 挂载跨 hub 项（**不修改**终版原文）。",
  "",
  "### 3.3 `pos-menu-ui` 组内排序（已确认）",
  "",
  "滑层列表按 **菜单查找 → 时段菜单 → 界面布局 → iPad 扩展** 分段连续展示（见 §4.4）。",
  "",
  "### 3.4 客显屏边界收紧（已确认）",
  "",
  "结账交互迁支付中心；**界面语言**迁 §3.10；客显屏组内封面/Logo/场景见 §3.11：",
  "",
  "| seq | 功能设置 | 迁入 |",
  "|-----|----------|------|",
  "| 463 | 小费（客显屏展示小费页） | 支付中心 · `guest-checkout-ux` |",
  "| 465 | 小票（客显屏自主选择打印） | 支付中心 · `guest-checkout-ux` |",
  "| 467 | 语言设置 | catalog 不展示（SSOT 652/653，见 §3.10） |",
  "",
  "### 3.5 备注项去重（已确认）",
  "",
  "从 `guest-notes-fees` **移除** seq **609、610**（全局「展示菜品/订单备注」），与 **522 产品备注、521 订单备注** 场景重复；catalog 不展示 609/610。",
  "",
  "### 3.6 备注组边界收紧（已确认）",
  "",
  "seq **616、617、618**（购物车送厨状态/价格/售罄隐藏）自备注组迁入食客端菜单（v1.3 为 **`guest-menu-cart`**）；`guest-notes-fees` 仅保留备注 521–523 与附加费 544、545。",
  "",
  "### 3.7 下单与规则边界收紧（已确认）",
  "",
  "seq **600**（全局纯展示模式，不可加购）自下单规则迁入食客端菜单（v1.3 为 **`guest-menu-global`**）；`guest-order-rules` 仅保留提示/火锅/用餐时长/轮次规则（9 条）。",
  "",
  "| 配置 | seq | 说明 |",
  "|------|-----|------|",
  "| 全局纯展示 | 600 | 前厅 · `guest-menu-global`（v1.3） |",
  "| 单桌/设备纯展示 | 561 | 硬件管理中心（覆盖关系见硬件方案） |",
  "",
  "### 3.8 菜单展示去重与硬件分工（已确认）",
  "",
  "**catalog 去重**（保留服务设置 SSOT，不展示全局重复项）：",
  "",
  "| 保留（SSOT） | 排除（catalog 不展示） |",
  "|--------------|------------------------|",
  "| 515 展示菜单序号 | 614 展示菜品编号 |",
  "| 516 显示组名称 | 605 展示组名称 |",
  "| 524 瀑布流模式 | 603 瀑布流模式 |",
  "| 528 菜价为0展示价格 | 613 菜价为0,展示价格 |",
  "",
  "**全局 vs 硬件双入口**（均保留在前厅 catalog，文档约定覆盖关系）：",
  "",
  "| 能力 | 前厅 seq | 硬件 seq |",
  "|------|----------|----------|",
  "| 默认展示菜单组 | 599 | 560 |",
  "| 纯展示模式 | 600 | 561 |",
  "| eMenu Pro 版式 | 604 | 569 |",
  "",
  "### 3.9 食客端菜单展示拆组（v1.3，已确认）",
  "",
  "原 **`guest-menu`**（23 条）侧栏单组过长，按终版「服务设置·菜单 / 全局展示 / 购物车」拆为 3 个二级导航：",
  "",
  "| 新组 | groupKey | 条数 | seq |",
  "|------|----------|------|-----|",
  "| 食客端·菜单结构 | `guest-menu-structure` | 8 | 515–520、524、528 |",
  "| 食客端·首页与版式 | `guest-menu-global` | 12 | 532、599–612、600、604、645 |",
  "| 食客端·购物车展示 | `guest-menu-cart` | 3 | 616–618 |",
  "",
  "侧栏顺序：… → POS 菜单与布局 → **菜单结构 → 首页与版式 → 购物车** → 界面语言 → 下单与规则 → …",
  "",
  "### 3.10 对客界面语言（v1.4，已确认）",
  "",
  "**问题**：467 挂在客显屏，但 eMenu / Kiosk 等同属 C 端也需配置界面语言；513/514 与 652/653 为重复入口。",
  "",
  "| 能力 | catalog SSOT | 排除（不展示） | 生效渠道 |",
  "|------|--------------|----------------|----------|",
  "| 可选语言列表 | 652 | 513、467 | eMenu、Kiosk、客显等 C 端 UI |",
  "| 默认语言 | 653 | 514 | 同上 |",
  "",
  "- **挂载**：652/653 终版归属系统设置，经 `settings-hub-override.mjs` 在前厅 **`guest-facing-locale`** 展示（不改终版原文）。",
  "- **分工**：**109** 留在系统设置（店员 POS 默认语言）；**456** 在商品中心（菜单文案多语言）。",
  "",
  "### 3.11 C 端视觉与客显分工（v1.5–v1.6，已确认）",
  "",
  "侧栏为单一 **「客显屏」**（`cds`，3 条）；组内顺序：461 封面 → 462 Logo → 466 场景启用。",
  "",
  "| 能力 | 入口 hub | seq | 说明 |",
  "|------|----------|-----|------|",
  "| 客显屏封面、Logo | 前厅 · `cds` | 461、462 | 客显专用；滑层注明「维护请至素材中心」 |",
  "| Pickup/Delivery 启用客显 | 前厅 · `cds` | 466 | 前场渠道规则 |",
  "| Kiosk/eMenu 首页封面、门店 Logo | **素材中心** | 555、556、433 等 | 默认展示，无显隐开关 |",
  "| eMenu 第三方品牌露出 | 前厅 · `guest-menu-global` | 532、612 | 是否展示（显隐） |",
  "| 屏显图片库 | **素材中心** | 431 | 图片库维护 |",
  "",
  "---",
  "",
  "## 4. 分类结果明细",
  "",
);

for (let i = 0; i < order.length; i++) {
  const k = order[i];
  push(`### 4.${i + 1} ${titles[k]}（\`${k}\`）`, "", `**归类理由**：${reasons[k]}`, "");
  if (k === "pos-button-visibility") {
    push(
      "",
      "**组内展示顺序**：193–195 删单/移单/清桌 → 197–212 常见按键 → 213–215 其他按键。",
      "",
      "**193–215** 右侧**开关**（关闭/开启标签，保留功能场景描述；原型 localStorage）。**196** 归 `pos-order-toolbar`。",
      "",
    );
  }
  if (k === "guest-menu-structure") {
    push(
      "",
      "**组内展示顺序**：515–520 菜单树 → 524 瀑布流 → 528 零价展示。",
      "",
      "**SSOT**：515/516/524/528；不含全局重复项 603/605/613/614（见 §3.8）。",
      "",
    );
  }
  if (k === "guest-menu-global") {
    push(
      "",
      "**组内展示顺序**：532 品牌 → 599/601/602/604 模式与菜单组 → 606–608 列表 → 611/612 首页 → 600 纯展示 → 645 字体。",
      "",
      "**532/612** 为品牌露出显隐；**封面/门店 Logo 换图** 见素材中心 §3.11。**600/599/604** 与硬件 561/560/569 见 §3.8。",
      "",
      "**全组** 右侧**开关**（关闭/开启，保留功能场景描述）。**608 展示菜详情**：开启后可选无属性菜；**607 菜单图片展示模式**：原始/小图/大图 + 大图菜选择；**645 菜品名称字体大小**：字号（px，默认 16）。",
      "",
    );
  }
  if (k === "guest-menu-cart") {
    push(
      "",
      "**组内展示顺序**：616 送厨状态 → 617 订单价格 → 618 售罄隐藏。",
      "",
      "**616–618** 右侧**开关**（关闭/开启标签，保留功能场景描述；原型 localStorage）。",
      "",
    );
  }
  if (k === "guest-facing-locale") {
    push(
      "",
      "**组内展示顺序**：652 可选语言 → 653 默认语言。",
      "",
      "**SSOT**：652/653；不含 467/513/514（见 §3.10）。**109** 为店员端，归系统设置。",
      "",
      "**652 选择语言**：多选（英语、中文简体、中文繁体、法语、日语、俄语、西班牙语、越南语、泰语、韩语；默认勾选英语+中文简体）。**653 默认语言**：单选，选项随 652 已选语言联动（原型 localStorage）。",
      "",
    );
  }
  if (k === "guest-order-rules") {
    push(
      "",
      "**组内展示顺序**：569/570 提示 → 573 火锅菜单 → 577–580 用餐时长 → 597/598 轮次规则。",
      "",
      "**569 点单须知 / 570 火锅页面提示**：右侧**开关**（保留功能场景描述）；开启后展开**标题**（20 字）、**内容**（200 字）及字数统计（原型 localStorage）。",
      "",
      "**573、577–580** 右侧**开关**（保留功能场景描述）：火锅锅底下单后仍展示锅底、展示用餐时长、用餐时长倒计时展示、用餐剩余时长提示、用餐剩余时长提示后不允许下单。",
      "",
      "**597 每轮菜品互斥下单**：主开关 + 规则行（下单菜品 ⇄ 互斥 ⇄ 不可再下单菜品），支持**增加**多条；**598 每轮菜品组合下单**：主开关 + **下单菜品**、**订单中必须再包含任意菜品 N 份**、必选菜品，支持**增加**多条（原型菜品标签 + localStorage）。",
      "",
    );
  }
  if (k === "guest-notes-fees") {
    push(
      "",
      "**SSOT 备注**：521 订单、522 产品、523 套餐子项；**附加服务**：544 餐具、545 打包带。",
      "",
      "**521–523** 右侧**开关**（保留功能场景描述）；**544/545** **关闭/开启**主开关，开启后展开**单选**：免费、`$1.5`、其他金额（原型 localStorage）。",
      "",
    );
  }
  if (k === "wait-time") {
    push(
      "",
      "**535/536** 主开关 + 子项（分钟/杯数）；**537** 多选（排队数量/等待时间）；**538** 字体大小（默认/倍数）；**539/540** 字体背景色/颜色（默认/自定义色块）。",
      "",
    );
  }
  if (k === "cds") {
    push(
      "",
      "**组内展示顺序**：461 封面 → 462 Logo → 466 场景启用。",
      "",
      "**461/462/466** 设置滑层右侧提供**开关**，控制是否展示（原型 localStorage）；461/462 附「维护请至素材中心」。Kiosk/eMenu 封面·Logo 见 §3.11。",
      "",
    );
  }
  if (k === "pos-menu-ui") {
    push(
      "",
      "**组内展示顺序**（同类连续）：",
      "",
      "1. **菜单查找**：118 搜索菜单",
      "2. **时段菜单**：176、177（堂吃/外食）、348（iPad 按时段）",
      "3. **POS 点餐界面布局**：216 组平铺 → 217 类展示 → 218 菜展示 → 219 按钮颜色 → 220 显示价格",
      "4. **iPad 扩展**：350 电子菜单自定义消息",
      "",
    );
  }
  push("| seq | 终端 | 原导航 | 功能模块 | 功能设置 | 功能场景描述（摘要） |");
  push("|-----|------|--------|----------|----------|----------------------|");
  for (const r of sortItemsInGroup(by.get(k))) {
    const scene = buildCatalogSceneDesc(r.seq, r.sceneDesc);
    push(
      `| ${r.seq} | ${r.terminal} | ${r.nav} | ${r.moduleName} | ${r.title} | ${sceneSummary(scene)} |`,
    );
  }
  push("");
}

push(
  "---",
  "",
  "## 5. 与旧分组对照（26 组 → 12 组）",
  "",
  "| 新 groupTitle | 吸收的旧分组示例 |",
  "|---------------|------------------|",
  "| 桌台与餐位 | 平面图、桌子设置、企台操作权限 |",
  "| POS 按钮显隐 | 常见按键、其他按键（隐藏到「更多」） |",
  "| POS 点单页工具栏 | 点单页配置、分割线命名 |",
  "| POS 菜单与布局 | 点餐界面模式、时段菜单、搜索菜单 |",
  "| 食客端·菜单结构 | 服务设置·菜单（515–520、524、528） |",
  "| 食客端·首页与版式 | 全局展示设置、菜单样式、首页入口；不含全局重复项 |",
  "| 食客端·购物车展示 | 购物车送厨/价格/售罄展示（616–618） |",
  "| 食客端·界面语言 | 全局多语言 652/653（eMenu·Kiosk·客显 C 端 UI） |",
  "| 食客端·下单与规则 | 提示信息、下单设置（火锅/用餐时长/轮次，不含纯展示） |",
  "| 备注与附加服务 | 备注（521–523）、餐具/打包附加费（544、545） |",
  "| 等待时长提示 | 等待时长 |",
  "| 客显屏 | 封面、Logo（461/462）、场景启用（466）；语言见食客端·界面语言 |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 按本文 **第 4 节** 更新 `docs/项目文档/配置归类-分组映射.csv` 中对应 `seq` 的 `groupTitle`、`groupKey`",
  "2. 执行：`node scripts/apply-foh-settings-mapping.mjs`（可选，与本文映射一致）",
  "3. 执行：`cd admin-web && npm run build:settings-catalog`",
  "4. 执行：`apply-order-settings-mapping.mjs`、`apply-product-settings-mapping.mjs`、`apply-payment-settings-mapping.mjs`",
  "5. 在前厅 / 订单 / 商品 / 支付中心 → 设置 页验证二级导航",
  "",
  "### 6.1 映射表（可直接写入 CSV）",
  "",
  "```csv",
  "seq,groupTitle,groupKey",
);

for (const r of [...rows].sort((a, b) => a.seq - b.seq)) {
  const key = assign.get(r.seq);
  lines.push(`${r.seq},${titles[key]},${key}`);
}

push(
  "```",
  "",
  "---",
  "",
  "## 7. 边界说明",
  "",
  "- **送厨时机、支付方式、税率** 等以订单/支付/商品中心为主入口；前厅保留界面与交互项。",
  "- **客显屏**（`cds`）：461/462/466；与素材中心、guest-menu-global 分工见 §3.11。",
  "- **C 端界面语言**（652/653）在 `guest-facing-locale`；**小费页、小票**（463、465）在支付中心。",
  "- **菜单文案多语言**（456）在商品中心；**店员默认语言**（109）在系统设置。",
  "- 670 条中属于前厅的 100 条均已列入上文，不删项。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
