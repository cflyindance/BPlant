/**
 * 生成 docs/前厅管理中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-foh-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const docsDir = path.join(root, "docs");
const projectDocsDir = path.join(docsDir, "项目文档");
const sourcePath = [projectDocsDir, docsDir].map((d) => path.join(d, "配置归类-终版.md")).find((p) => fs.existsSync(p))
  ?? path.join(projectDocsDir, "配置归类-终版.md");
const outPath = path.join(projectDocsDir, "前厅管理中心-设置二级导航重设计方案.md");

const titles = {
  "tables-floor": "桌台与餐位",
  "pos-actions": "POS 操作与按钮",
  "pos-menu-ui": "POS 菜单与布局",
  "guest-menu": "食客端·菜单展示",
  "guest-order-rules": "食客端·下单与规则",
  "guest-notes-fees": "备注与附加服务",
  "wait-time": "等待时长提示",
  cds: "客显屏",
};

const reasons = {
  "tables-floor": "桌台平面图、清桌与自动释放；对标 Toast「服务区与餐位 / POS 餐位图」。",
  "pos-actions": "POS 点单页按钮显隐、工具栏排序与收银操作；对标 Toast「点餐界面设置 / 快速点餐」。",
  "pos-menu-ui": "POS 端菜单分类/菜品按钮布局与时段菜单；对标 Toast「点餐界面设置-界面选项」。",
  "guest-menu": "扫码点餐（eMenu）菜单树、首页与购物车展示；对标 Snackpass 在线/店内菜单与 Toast「移动点餐」。",
  "guest-order-rules": "食客端下单前提示、用餐时长、火锅与轮次规则；对标 Snackpass「所有订单」行为规则。",
  "guest-notes-fees": "备注能力开关与餐具/打包附加费；对标 Snackpass 订单备注与附加费用。",
  "wait-time": "向食客展示预计等待时长及样式；门店运营透明化（茶饮等场景）。",
  cds: "客显屏品牌、小费页、小票与语言；交互展示层（支付政策 SSOT 在支付中心）。",
};

const assignMap = {
  "tables-floor": [428, 169, 534, 642, 351],
  "pos-actions": [118, 164, 148, 483, 484, 485, 486, 347, ...range(193, 216)],
  "pos-menu-ui": [176, 177, 348, 350, ...range(216, 221)],
  "guest-menu": [
    515, 516, 517, 518, 519, 520, 524, 528, 532, 599, 601, 602, 603, 604, 605, 606, 607, 608, 611,
    612, 613, 614, 645,
  ],
  "guest-order-rules": [569, 570, 573, 577, 578, 579, 580, 597, 598, 600],
  "guest-notes-fees": [521, 522, 523, 544, 545, 609, 610, 616, 617, 618],
  "wait-time": [535, 536, 537, 538, 539, 540],
  cds: [461, 462, 463, 465, 466, 467],
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
  if (seq >= 461 && seq <= 467) return "客显";
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

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === "前厅管理中心");
const order = [
  "tables-floor",
  "pos-actions",
  "pos-menu-ui",
  "guest-menu",
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
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 前厅管理中心** 共 **100** 条功能设置  ",
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
  "- 二级导航收敛为 **8 个** 有餐饮场景语义的分类",
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
  "| **Toast** | 独立「前厅」：点餐界面设置、快速点餐、桌边服务、服务区与餐位、移动点餐 | 桌台独立成组；POS 按钮与菜单布局分组 |",
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
  "## 3. 推荐二级导航结构（8 组）",
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
push(`| | **合计** | | **${total}** | |`, "", "---", "", "## 4. 分类结果明细", "");

for (let i = 0; i < order.length; i++) {
  const k = order[i];
  push(`### 4.${i + 1} ${titles[k]}（\`${k}\`）`, "", `**归类理由**：${reasons[k]}`, "");
  push("| seq | 终端 | 原导航 | 功能模块 | 功能设置 | 功能场景描述（摘要） |");
  push("|-----|------|--------|----------|----------|----------------------|");
  for (const r of [...by.get(k)].sort((a, b) => a.seq - b.seq)) {
    push(
      `| ${r.seq} | ${r.terminal} | ${r.nav} | ${r.moduleName} | ${r.title} | ${sceneSummary(r.sceneDesc)} |`,
    );
  }
  push("");
}

push(
  "---",
  "",
  "## 5. 与旧分组对照（26 组 → 8 组）",
  "",
  "| 新 groupTitle | 吸收的旧分组示例 |",
  "|---------------|------------------|",
  "| 桌台与餐位 | 平面图、桌子设置、部分基本设置 |",
  "| POS 操作与按钮 | 常见按键、其他按键、点单页配置 |",
  "| POS 菜单与布局 | 点餐界面模式、时段菜单 |",
  "| 食客端·菜单展示 | 菜单、展示设置（大部分）、菜单样式 |",
  "| 食客端·下单与规则 | 提示信息、下单设置 |",
  "| 备注与附加服务 | 附加费设置、备注相关 |",
  "| 等待时长提示 | 等待时长 |",
  "| 客显屏 | 封面、Logo、服务、语言 |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 按本文 **第 4 节** 更新 `docs/项目文档/配置归类-分组映射.csv` 中对应 `seq` 的 `groupTitle`、`groupKey`",
  "2. 执行：`cd admin-web && npm run build:settings-catalog`",
  "3. 在前厅管理中心 → 设置 页验证二级导航",
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
  "- **客显小费页** 在前厅配置展示；小费政策 SSOT 建议在支付中心。",
  "- 670 条中属于前厅的 100 条均已列入上文，不删项。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
