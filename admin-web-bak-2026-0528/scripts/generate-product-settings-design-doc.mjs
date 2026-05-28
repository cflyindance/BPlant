/**
 * 生成 docs/项目文档/商品中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-product-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "商品中心-设置二级导航重设计方案.md");

const titles = {
  "item-menu-base": "菜品与菜单基础",
  "pricing-tools": "价格与折扣工具",
  "combo-scenario-pricing": "套餐与场景计价",
  "tags-attributes": "标签与分类属性",
  "menu-scenarios": "品类与场景菜单",
};

const reasons = {
  "item-menu-base":
    "菜品主数据、规格、调味、成分、菜谱与多语言；对标 Toast「菜单管理 / 品项库」、Square「商品库 + 加料」、Peblla「商品 / 加料」。",
  "pricing-tools":
    "全局调价、四舍五入、预设折扣/加收、套餐子菜价展示；对标 Toast「价格编辑器 / 价位等级」、Clover 定价与折扣工具。",
  "combo-scenario-pricing":
    "套餐自动点完、按时计价、火锅/人数等场景计价；对标 Toast 套餐与特殊品项、Peblla 套餐与分层菜单场景规则。",
  "tags-attributes":
    "菜单标签、Kiosk 标签数据源、标签元数据；对标 Toast「品项标签」、Snackpass 菜单属性与渠道标签。",
  "menu-scenarios":
    "自助餐品类、分类菜单、营业时间、特殊菜单并行展示；对标 Toast「特殊菜单」、Peblla「分层菜单 / 分类」。",
};

/** seq → groupKey（商品中心 27 条） */
const assignMap = {
  "item-menu-base": [112, 438, 439, 440, 441, 444, 456, 476],
  "pricing-tools": [145, 146, 147, 446, 447],
  "combo-scenario-pricing": [139, 443, 575, 593],
  "tags-attributes": [542, 552, 628],
  "menu-scenarios": [655, 656, 657, 658, 659, 660, 661],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title, feature) {
  const t = `${nav}${mod}${title}${feature}`;
  if (mod.includes("多语言") || title.includes("多语言")) return "国际化";
  if (mod.includes("标签") || title.includes("标签") || title.includes("Kiosk")) return "标签";
  if (mod.includes("品类") || mod.includes("分类") || mod.includes("特殊菜单") || mod.includes("营业时间"))
    return "场景菜单";
  if (mod.includes("套餐") || title.includes("套餐") || title.includes("自动点完")) return "套餐";
  if (
    mod.includes("价格") ||
    mod.includes("折扣") ||
    mod.includes("加收") ||
    title.includes("四舍五入") ||
    title.includes("调味价格")
  )
    return "价格";
  if (title.includes("按时") || title.includes("人数") || title.includes("锅底")) return "场景计价";
  if (mod.includes("菜谱") || title.includes("菜谱")) return "配方";
  return "菜品";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === "商品中心");
const order = [
  "item-menu-base",
  "pricing-tools",
  "combo-scenario-pricing",
  "tags-attributes",
  "menu-scenarios",
];

const missing = rows.filter((r) => !assign.has(r.seq)).map((r) => r.seq);
if (missing.length) throw new Error(`未归类 seq: ${missing.join(", ")}`);
const extra = [...assign.keys()].filter((s) => !rows.some((r) => r.seq === s));
if (extra.length) throw new Error(`映射多余 seq: ${extra.join(", ")}`);

const by = new Map(order.map((k) => [k, []]));
for (const r of rows) {
  const key = assign.get(r.seq);
  by.get(key).push({
    ...r,
    area: inferArea(r.nav, r.moduleName, r.title, r.feature),
  });
}

const lines = [];
const push = (...xs) => lines.push(...xs);

push(
  "# 商品中心 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 商品中心** 共 **27** 条功能设置  ",
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
  "| 二级分组数 | **约 18 组** / 27 条 | 几乎「一条一组」（菜单、菜品调味、菜品单位…） |",
  "| 命名来源 | 旧「功能模块」直出 | 商户看不出「先建菜 → 定价 → 打标签 → 配场景菜单」流程 |",
  "| 重复结构 | 品类设置 vs 分类设置各 4 项 | 营业时间/菜单设置分散在 4 个组名里，难对照 |",
  "| 渠道项 | Kiosk 本地标签 (542) | 与菜单标签 (552/628) 分散，应归入标签轨 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **5 组**，覆盖 27 条，符合餐饮商品/菜单 SSOT 心智",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（菜单/商品设置维度）",
  "",
  "| 竞品 | 菜单/商品设置组织方式 | 本项目借鉴 |",
  "|------|----------------------|------------|",
  "| **Toast** | 一级「菜单」：搭建/编辑、批量价格、设置（开单品项、销售分类、品项标签、道次、价位等级、税率） | **菜品基础** 与 **价格工具** 分轨；特殊菜单单独场景组 |",
  "| **Square** | 商品库、分类、加料/规格(Modifier)、价格 | 调味/单位/成分归入菜品基础；折扣加收为价格工具 |",
  "| **Clover** | 商品→分类、加料组、打印标签、营收分类 | 标签与营收属性独立成「标签与分类属性」 |",
  "| **Peblla** | 菜单/分类/商品/套餐/加料/分层菜单；堂食分层菜单 | **品类与场景菜单** 吸收自助餐、特殊菜单、分类并行 |",
  "| **Snackpass** | 设置→菜单：菜单组、菜单风格、渠道菜品 | 商品中心偏 **主数据与规则**；渠道展示在前厅/外卖设置 |",
  "",
  "### 2.1 商品设置五维（商户心智）",
  "",
  "```text",
  "菜品与菜单基础 → 价格与折扣工具 → 套餐与场景计价 → 标签与分类属性 → 品类与场景菜单",
  "```",
  "",
  "**边界**：",
  "- **前厅管理中心**：POS/eMenu 菜单 **展示布局**（按钮、首页）不在此 hub。",
  "- **支付中心**：税率、支付方式在支付/税务 hub。",
  "- **库存中心**：进销存、成本核算不在此 27 条（菜谱管理 476 为配方/耗材，留菜品基础组）。",
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
    push(
      `| ${r.seq} | ${r.area} | ${r.nav} | ${r.moduleName} | ${r.title} | ${sceneSummary(r.sceneDesc)} |`,
    );
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
  "| 菜品与菜单基础 | 基础设置、菜单、菜品调味、菜品单位、菜品序号、菜品成分、菜单多语言、（未填写）菜谱 |",
  "| 价格与折扣工具 | 价格、折扣比率设置、加收比率设置 |",
  "| 套餐与场景计价 | 自定义单/套餐、按时计价、下单设置（火锅/人数） |",
  "| 标签与分类属性 | 菜单标签、标签设置、平台设置（Kiosk 标签源） |",
  "| 品类与场景菜单 | 品类设置、分类设置、特殊菜单、营业时间、菜单设置、类别设置 |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-product-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 商品中心 → 设置（`/product-center-main/settings`）验证",
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
  "- 27 条全部保留；`seq` 与终版表行号一致。",
  "- `seq 655–661`：品类设置（自助餐）与分类设置结构对称，统一在「品类与场景菜单」便于对照配置。",
  "- `seq 147` 总价四舍五入属订单级计算规则，因归属商品中心价格 SSOT 放在「价格与折扣工具」。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
