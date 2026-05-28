/**
 * 生成 docs/项目文档/打印中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-print-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "打印中心-设置二级导航重设计方案.md");

const HUB = "打印中心";

const titles = {
  "print-foundation-devices": "打印基础与设备",
  "payment-receipt-flow": "支付收据流程",
  "receipt-layout-details": "收据版式与明细",
  "kitchen-ticket-packaging": "厨房单与打包单",
  "ticket-number-slip": "单号小票",
};

const reasons = {
  "print-foundation-devices":
    "打印页高、Logo、轮打、模板与基础显示规则；对标 Toast/Square「打印机与钱箱/打印机配置文件」基础项。",
  "payment-receipt-flow":
    "支付前后收据触发、支付方式打印、小费与部分付款自动打印；对标 Clover/Square「支付小票流程」。",
  "receipt-layout-details":
    "收据字段显示、合并规则、条码/备注/间距等排版细节；对标 Toast/Clover/Square 收据打印偏好。",
  "kitchen-ticket-packaging":
    "厨房单、打包单、外送单份数与内容策略；对标 Toast「打印机、单据与KDS」、Peblla 厨房/取餐小票打印范围。",
  "ticket-number-slip":
    "单号小票触发场景与份数；对标 Clover 订单号小票配置。",
};

/** seq → groupKey（打印中心 54 条） */
const assignMap = {
  "print-foundation-devices": [167, 172, 180, 256, 259, 455],
  "payment-receipt-flow": [245, 246, 247, 249, 250, 252, 260, 261, 263, 266, 268, 272, 500, 654],
  "receipt-layout-details": [
    262, 264, 265, 269, 270, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289,
    290,
  ],
  "kitchen-ticket-packaging": [34, 257, 258, 267, 271, 297, 301, 302, 303],
  "ticket-number-slip": [291, 292],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title) {
  const t = `${nav}${mod}${title}`;
  if (t.includes("厨房") || t.includes("打包")) return "厨房/打包";
  if (t.includes("单号")) return "单号";
  if (t.includes("支付") || t.includes("信用卡") || t.includes("小费")) return "支付收据";
  if (t.includes("收据") || t.includes("打印")) return "收据";
  if (t.includes("模板") || t.includes("Logo") || t.includes("页高") || t.includes("轮打")) return "基础";
  return "打印";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === HUB);
const order = [
  "print-foundation-devices",
  "payment-receipt-flow",
  "receipt-layout-details",
  "kitchen-ticket-packaging",
  "ticket-number-slip",
];

const missing = rows.filter((r) => !assign.has(r.seq)).map((r) => r.seq);
if (missing.length) throw new Error(`未归类 seq: ${missing.join(", ")}`);
const extra = [...assign.keys()].filter((s) => !rows.some((r) => r.seq === s));
if (extra.length) throw new Error(`映射多余 seq: ${extra.join(", ")}`);

const by = new Map(order.map((k) => [k, []]));
for (const r of rows) {
  const key = assign.get(r.seq);
  by.get(key).push({ ...r, area: inferArea(r.nav, r.moduleName, r.title) });
}

const lines = [];
const push = (...xs) => lines.push(...xs);

push(
  "# 打印中心 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 打印中心** 共 **54** 条功能设置  ",
  "> 竞品参考：Toast / Clover / Square / Peblla / Snackpass 商家后台结构文档",
  "",
  "---",
  "",
  "## 1. 背景与目标",
  "",
  "### 1.1 现状问题",
  "",
  "| 指标 | 现状 | 问题 |",
  "|------|------|------|",
  "| 二级分组数 | **约 13 组** / 54 条 | 收据打印与支付收据分散，配置路径长 |",
  "| 大组过重 | `打印设置` + `收据排版` + `打包单设置` | 商户难按“先触发、再版式、后厨房单”理解 |",
  "| 场景混排 | 厨房单、支付小票、单号小票并列 | 现场运维人员与收银人员关注点不同 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **5 组**，覆盖 54 条，贴合餐饮门店打印流程",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（打印/小票设置维度）",
  "",
  "| 竞品 | 打印设置组织方式 | 本项目借鉴 |",
  "|------|------------------|------------|",
  "| **Toast** | 打印机与钱箱、账单小票设置、打印机/单据/KDS | 支付收据与厨房单分轨 |",
  "| **Clover** | 订单小票、支付小票、打印偏好、设备打印机 | 收据流程和收据版式分层 |",
  "| **Square** | 打印机配置文件、收据打印选项、订单票与标签 | 触发逻辑与版式字段独立 |",
  "| **Peblla** | 打印设置、厨房打印机、取餐小票、标签打印 | 厨房单与打包单单独成组 |",
  "| **Snackpass** | 订单中心自动打印与无纸化后厨 | 打印触发开关优先级明确 |",
  "",
  "### 2.1 打印设置五维（商户心智）",
  "",
  "```text",
  "打印基础与设备 → 支付收据流程 → 收据版式与明细 → 厨房单与打包单 → 单号小票",
  "```",
  "",
  "---",
  "",
  "## 3. 推荐二级导航结构（5 组）",
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
  push("| seq | 场景 | 原导航 | 功能模块 | 功能设置 | 功能场景描述（摘要） |");
  push("|-----|------|--------|----------|----------|----------------------|");
  for (const r of [...by.get(k)].sort((a, b) => a.seq - b.seq)) {
    push(`| ${r.seq} | ${r.area} | ${r.nav} | ${r.moduleName} | ${r.title} | ${sceneSummary(r.sceneDesc)} |`);
  }
  push("");
}

push(
  "---",
  "",
  "## 5. 与旧分组对照",
  "",
  "| 新 groupTitle | 吸收的旧分组 |",
  "|---------------|--------------|",
  "| 打印基础与设备 | 基本设置、打印设置（模板/Logo/轮打） |",
  "| 支付收据流程 | 支付相关（信用卡/付款收据）、服务设置收据、全局设置收据 |",
  "| 收据版式与明细 | 收据打印（打印设置/收据排版） |",
  "| 厨房单与打包单 | 厨房单打印、打包单设置、外卖平台备注、外送小票份数 |",
  "| 单号小票 | 单号设置 |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-print-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 打印中心 → 设置验证",
  "",
  "### 6.1 映射表（CSV）",
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
  "- 54 条全部保留；`seq` 与终版表行号一致。",
  "- 本次仅重组打印中心设置，不改打印机绑定与业务页流程。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
