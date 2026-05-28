/**
 * 生成 docs/项目文档/门店管理-设置二级导航重设计方案.md
 * 运行：node scripts/generate-store-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "门店管理-设置二级导航重设计方案.md");

const HUB = "门店管理";

const titles = {
  "store-profile-hours": "门店档案与营业信息",
  "brand-menu-presentation": "品牌与菜单展示",
  "data-maintenance-content": "地址数据与内容维护",
  "operation-mode-alerts": "运营模式与营业提醒",
};

const reasons = {
  "store-profile-hours":
    "门店基础档案、营业时段与地区信息；对标 Toast/Square/Clover 的门店信息与营业时间设置。",
  "brand-menu-presentation":
    "品牌视觉与菜单展示配置（品牌管理、菜单设置、品牌展示）；对标 Toast 门店档案与社媒品牌展示。",
  "data-maintenance-content":
    "地址数据导入清理与菜品评价清理，属于运维维护动作；对标门店后台数据维护入口。",
  "operation-mode-alerts":
    "餐厅模式、营业周期与打烊前提醒等经营策略项；对标 Clover/Square 的运营偏好与营业提醒。",
};

/** seq → groupKey（门店管理 12 条） */
const assignMap = {
  "store-profile-hours": [417, 418, 173],
  "brand-menu-presentation": [530, 547, 548],
  "data-maintenance-content": [419, 420, 421],
  "operation-mode-alerts": [77, 170, 582],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title) {
  const t = `${nav}${mod}${title}`;
  if (t.includes("营业") || t.includes("周期")) return "营业";
  if (t.includes("品牌") || t.includes("菜单")) return "品牌菜单";
  if (t.includes("地址") || t.includes("删除")) return "数据维护";
  if (t.includes("模式") || t.includes("提醒")) return "运营提醒";
  return "门店信息";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === HUB);
const order = ["store-profile-hours", "brand-menu-presentation", "data-maintenance-content", "operation-mode-alerts"];

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
  "# 门店管理 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 门店管理** 共 **12** 条功能设置  ",
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
  "| 二级分组数 | **8 组** / 12 条 | 门店信息、品牌、数据管理、营业策略碎片化 |",
  "| 命名来源 | 旧模块直出 | 用户难按“先配门店档案，再配品牌，再做维护”理解 |",
  "| 运维项分散 | 地址上传/删除与评价删除分离 | 日常维护入口不聚合 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **4 组**，覆盖 12 条，符合门店运营设置链路",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（门店设置维度）",
  "",
  "| 竞品 | 门店设置组织方式 | 本项目借鉴 |",
  "|------|------------------|------------|",
  "| **Toast** | 门店档案（名称/地址/电话）+ 营业时段 + 品牌展示 | 门店档案与品牌配置分轨 |",
  "| **Square** | 位置设置（位置信息/时区/营业）+ 多门店管理 | 营业信息独立组 |",
  "| **Clover** | 店铺信息、营业时间、偏好设置 | 运营模式提醒单列 |",
  "| **Peblla** | 门店启用与营业时间设置 | 营业提醒归经营策略组 |",
  "| **Snackpass** | 店铺信息、营业时间、店铺展示信息 | 地址与内容维护单独组 |",
  "",
  "### 2.1 门店设置四维（商户心智）",
  "",
  "```text",
  "门店档案与营业信息 → 品牌与菜单展示 → 地址数据与内容维护 → 运营模式与营业提醒",
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
  "| 门店档案与营业信息 | 餐馆信息（基本信息、营业时段）+ 基本设置（国家/地区） |",
  "| 品牌与菜单展示 | 品牌设置、品牌管理、菜单设置 |",
  "| 地址数据与内容维护 | 数据管理（上传地址、删除地址、删除评价） |",
  "| 运营模式与营业提醒 | 操作管理其他（营业周期）、基本设置（餐厅模式）、下单设置（营业结束提醒） |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-store-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 门店管理 → 设置（`/stores/settings`）验证",
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
  "- 12 条全部保留；`seq` 与终版表行号一致。",
  "- 本次仅重组门店管理设置，不改门店主业务页结构。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
