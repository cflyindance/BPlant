/**
 * 生成 docs/项目文档/财务中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-finance-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "财务中心-设置二级导航重设计方案.md");

const HUB = "财务中心";

const titles = {
  "cash-drawer-reconciliation": "钱箱与现金平账",
  "daily-close-settlement": "日结与结算",
  "register-audit-records": "收银记录与审计",
  "fees-tips-expense": "费用折扣与小费支出",
};

const reasons = {
  "cash-drawer-reconciliation":
    "现金底金、硬币卷、平账总额与误差阈值等钱箱规则；对标 Clover/Square 的现金抽屉与班次平账配置。",
  "daily-close-settlement":
    "每日结算时机与结算后报表输出；对标 Clover 结算设置、Square 报告日结算时间。",
  "register-audit-records":
    "付款记录、钱箱登入退出等审计轨迹；对标 Clover 支付记录与批次结算追踪。",
  "fees-tips-expense":
    "现金付费折扣与小费支出等财务费用项；对标 Peblla/Toast 的折扣与小费财务核算。",
};

/** seq → groupKey（财务中心 11 条） */
const assignMap = {
  "cash-drawer-reconciliation": [63, 64, 65, 76, 181],
  "daily-close-settlement": [171, 330],
  "register-audit-records": [449, 450],
  "fees-tips-expense": [305, 451],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title) {
  const t = `${nav}${mod}${title}`;
  if (t.includes("钱箱") || t.includes("平账")) return "平账";
  if (t.includes("结算")) return "结算";
  if (t.includes("记录")) return "审计";
  if (t.includes("折扣") || t.includes("小费")) return "费用";
  return "财务";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === HUB);
const order = [
  "cash-drawer-reconciliation",
  "daily-close-settlement",
  "register-audit-records",
  "fees-tips-expense",
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
  "# 财务中心 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 财务中心** 共 **11** 条功能设置  ",
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
  "| 二级分组数 | **8 组** / 11 条 | 几乎一条一组（付款记录/钱箱记录/小费支出） |",
  "| 主流程断裂 | 钱箱、日结、记录、费用混排 | 无法按财务关账流程逐步配置 |",
  "| 命名来源 | 旧模块直出 | 商户难理解哪些属于平账，哪些属于费用核算 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **4 组**，覆盖 11 条，匹配餐饮门店财务闭环",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（财务/结算设置维度）",
  "",
  "| 竞品 | 财务设置组织方式 | 本项目借鉴 |",
  "|------|------------------|------------|",
  "| **Clover** | 财务下含结算、对账单、支付记录、结算设置 | 结算与记录审计分轨 |",
  "| **Square** | 账单结算、报告日结算时间、现金/小费核算字段 | 钱箱平账与日结分组 |",
  "| **Peblla** | 结算时间、支付记录、打款对账、批次结算时间 | 日结结算独立组 |",
  "| **Snackpass** | 结算周期、账单记录、支付处理 | 财务流程按“结算→记录→账单”拆分 |",
  "| **Toast** | 日结报表与支付财务项关联 | 结算后自动打印报表单独归日结组 |",
  "",
  "### 2.1 财务设置四维（商户心智）",
  "",
  "```text",
  "钱箱与现金平账 → 日结与结算 → 收银记录与审计 → 费用折扣与小费支出",
  "```",
  "",
  "---",
  "",
  "## 3. 推荐二级导航结构（4 组）",
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
  "| 钱箱与现金平账 | 钱箱管理、系统安全、现金平账 |",
  "| 日结与结算 | 基本设置（每日结算）、现金备款/结算报表 |",
  "| 收银记录与审计 | 付款记录、钱箱登入退出记录 |",
  "| 费用折扣与小费支出 | 其他（现金付费折扣）、小费支出 |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-finance-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 财务中心 → 设置（`/finance/settings`）验证",
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
  "- 11 条全部保留；`seq` 与终版表行号一致。",
  "- 本次仅重组财务中心设置，不改财务主业务页。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
