/**
 * 生成 docs/项目文档/营销中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-marketing-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "营销中心-设置二级导航重设计方案.md");

const HUB = "营销中心";

const titles = {
  "content-assets": "营销内容与素材",
  "placement-trigger": "投放位与触发规则",
};

const reasons = {
  "content-assets":
    "管理营销展示内容本体（海报Pro、广告、首页视频）；对标 Toast/Square 的营销素材与活动创意管理。",
  "placement-trigger":
    "管理内容在点单流程中的展示开关与触发时机；对标 Snackpass/Kiosk 的店内营销位与触发规则配置。",
};

/** seq → groupKey（营销中心 5 条） */
const assignMap = {
  "content-assets": [553, 557, 651],
  "placement-trigger": [648, 649],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title) {
  const t = `${nav}${mod}${title}`;
  if (t.includes("视频")) return "视频";
  if (t.includes("海报")) return "海报";
  if (t.includes("广告")) return "广告";
  if (t.includes("开启")) return "触发";
  return "内容";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === HUB);
const order = ["content-assets", "placement-trigger"];

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
  "# 营销中心 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 营销中心** 共 **5** 条功能设置  ",
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
  "| 二级分组数 | **4 组** / 5 条 | 海报Pro、广告、海报、首页视频分散，商户不清楚先配内容还是先配触发 |",
  "| 命名来源 | 旧功能模块直出 | 缺少“内容资产”与“投放规则”两层语义 |",
  "| 运营链路 | 素材与开关混排 | 无法按“建内容→定触发”顺序配置 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **2 组**，覆盖 5 条，符合营销投放常见流程",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（营销展示与运营位维度）",
  "",
  "| 竞品 | 营销设置组织方式 | 本项目借鉴 |",
  "|------|------------------|------------|",
  "| **Toast** | 营销、优惠、活动管理分为素材创建与投放管理 | 先内容资产，后触发开关 |",
  "| **Square** | 营销中心含活动、优惠券、店内营销位 | 促销素材与展示位分轨 |",
  "| **Peblla** | 营销活动 + POS 副屏视频与营销配置 | 视频/海报归内容资产组 |",
  "| **Snackpass** | Kiosk 显示奖励横幅与动态菜单屏营销位 | 触发与展示流程单独成组 |",
  "| **Clover** | 营销信息订阅与促销触达 | 内容与触达规则分层 |",
  "",
  "### 2.1 营销设置两维（商户心智）",
  "",
  "```text",
  "营销内容与素材 → 投放位与触发规则",
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
  "| 营销内容与素材 | 海报Pro、广告、首页视频 |",
  "| 投放位与触发规则 | 海报（开启海报、开启开始点单后展示海报） |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-marketing-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 营销中心 → 设置（`/marketing/settings`）验证",
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
  "- 5 条全部保留；`seq` 与终版表行号一致。",
  "- 本次仅重组营销中心设置分组，不新增营销活动业务能力。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
