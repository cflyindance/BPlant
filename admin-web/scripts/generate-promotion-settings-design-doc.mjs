/**
 * 生成 docs/项目文档/促销中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-promotion-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "促销中心-设置二级导航重设计方案.md");

const HUB = "促销中心";

const titles = {
  "promo-strategy": "促销活动与规则",
  "promo-channel": "促销渠道与载体",
};

const reasons = {
  "promo-strategy":
    "承载活动本体（促销活动、本地促销、抽奖活动）及规则开关；对标 Toast「优惠/促销活动」、Square「优惠券/促销活动」、Snackpass「促销活动+奖励」。",
  "promo-channel":
    "承载促销后台来源与投放渠道切换（Kiosk 本地促销后台）；对标 Peblla/Snackpass 的渠道接入与店内触达配置。",
};

/** seq → groupKey（促销中心 4 条） */
const assignMap = {
  "promo-strategy": [442, 549, 647],
  "promo-channel": [541],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title) {
  const t = `${nav}${mod}${title}`;
  if (t.includes("抽奖")) return "互动抽奖";
  if (t.includes("Kiosk") || t.includes("平台")) return "渠道";
  if (t.includes("促销")) return "促销";
  return "活动";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === HUB);
const order = ["promo-strategy", "promo-channel"];

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
  "# 促销中心 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 促销中心** 共 **4** 条功能设置  ",
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
  "| 二级分组数 | **4 组** / 4 条 | 一条一组，侧栏无聚合语义 |",
  "| 组名来源 | 促销活动 / 平台设置 / 促销 / 抽奖活动 | 商户难区分活动规则与渠道配置 |",
  "| 使用路径 | 活动开关与渠道开关并列 | 不能按“先建活动，再选投放渠道”配置 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **2 组**，覆盖 4 条，形成清晰运营流程",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（促销/活动维度）",
  "",
  "| 竞品 | 促销设置组织方式 | 本项目借鉴 |",
  "|------|------------------|------------|",
  "| **Toast** | 优惠与促销活动并行：创建优惠、管理优惠、推荐模板 | 活动策略统一归一组 |",
  "| **Square** | 营销下分优惠券、促销活动、奖励计划 | 促销活动与奖励互动（抽奖）可并轨 |",
  "| **Snackpass** | 促销活动 + 奖励系统 + Kiosk 展示位 | 活动本体与渠道触达分轨 |",
  "| **Peblla** | 促销活动、奖励中心，配合渠道投放 | 渠道来源单独分组 |",
  "| **Clover** | 折扣与营销触达在设置中配置 | 活动规则优先，渠道其次 |",
  "",
  "### 2.1 促销设置两维（商户心智）",
  "",
  "```text",
  "促销活动与规则 → 促销渠道与载体",
  "```",
  "",
  "---",
  "",
  "## 3. 推荐二级导航结构（2 组）",
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
  "| 促销活动与规则 | 促销活动、促销、抽奖活动 |",
  "| 促销渠道与载体 | 平台设置（Kiosk 本地促销后台） |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-promotion-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 促销中心 → 设置（`/promotions/settings`）验证",
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
  "- 4 条全部保留；`seq` 与终版表行号一致。",
  "- 促销活动与规则仅做导航重组，不改变活动业务逻辑。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
