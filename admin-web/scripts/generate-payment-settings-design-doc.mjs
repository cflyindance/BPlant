/**
 * 生成 docs/项目文档/支付中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-payment-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "支付中心-设置二级导航重设计方案.md");

const titles = {
  "payment-methods": "支付方式与网关",
  "tax-rules": "税务规则",
  "tip-policy": "小费政策与计算",
  "batch-settlement": "BATCH与日结",
  "card-fees": "卡交易与附加费用",
  "guest-checkout-ux": "食客端·结账交互",
  "paypad-checkout": "Paypad·结账交互",
};

const reasons = {
  "payment-methods":
    "可选支付方式、自定义付款类型、支付网关参数；对标 Toast「支付方式 / 支付选项」、Peblla「自定义支付方式」。",
  "tax-rules":
    "税率与计税基数、外卖免税、加收计税；对标 Toast「管理税率」、Peblla「税费设置」、Clover 订单类型免税。",
  "tip-policy":
    "小费算法、建议比例、税前/折扣前基数、多次支付小费；对标 Toast「自定义/默认小费比例」、团队 hub 分配规则之外的 **收取策略**。",
  "batch-settlement":
    "批量结算、自动结账、未 batch 上限、batch 前处理；对标 Toast「自动关账 / 日结」、Clover 结算周期。",
  "card-fees":
    "刷卡门槛、签名门槛、手续费、现金折扣、双重定价、整单附加费；对标 Peblla「现金折扣 / 双重定价」、Snackpass 支付费率。",
  "guest-checkout-ux":
    "客显屏/扫码端小费·签名·收据流程；对标 Toast「支付选项-预授权/小费/小票」、前厅客显屏策略 SSOT 在支付中心。",
  "paypad-checkout":
    "Paypad 终端结账页小费/签名/小票；与食客端分轨，便于按 **终端类型** 配置。",
};

/** seq → groupKey（支付中心 49 条） */
const assignMap = {
  "payment-methods": [29, 229, 233, 234, 448, 511],
  "tax-rules": [142, 143, 144, 160, 445],
  "tip-policy": [231, 232, 237, 244, 253, 293, 294, 295, 296],
  "batch-settlement": [230, 235, 236, 238, 239, 240],
  "card-fees": [242, 243, 307, 452, 454, 512, 543],
  "guest-checkout-ux": [8, 9, 464, 492, 493, 494, 495, 496, 497, 501],
  "paypad-checkout": [662, 663, 664, 665, 666, 667],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title) {
  const t = `${nav}${mod}${title}`;
  if (mod.includes("Paypad") || title.includes("Paypad")) return "Paypad";
  if (mod.includes("客显") || nav.includes("相关设备")) return "客显";
  if (mod.includes("小费") || title.includes("小费")) return "小费";
  if (mod.includes("税") || title.includes("税")) return "税务";
  if (title.includes("Batch") || title.includes("batch") || title.includes("结账") || title.includes("结算"))
    return "日结";
  if (mod.includes("信用卡") || title.includes("信用卡") || title.includes("折扣") || title.includes("定价") || mod.includes("附加"))
    return "卡费";
  if (mod.includes("收据") || title.includes("签名") || title.includes("收据")) return "交互";
  return "支付";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === "支付中心");
const order = [
  "payment-methods",
  "tax-rules",
  "tip-policy",
  "batch-settlement",
  "card-fees",
  "guest-checkout-ux",
  "paypad-checkout",
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
  "# 支付中心 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 支付中心** 共 **49** 条功能设置  ",
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
  "| 二级分组数 | **约 18 组** / 49 条 | 「基本设置」12 条堆叠支付方式、小费、BATCH |",
  "| 小费分散 | 基本设置 / 小费 / 小费设置 / 小费 / Paypad | 计算规则与交互流程未分轨 |",
  "| 终端不清 | 客显屏、服务设置、Paypad 混排 | 商户难按 **终端** 找结账页配置 |",
  "| 重复心智 | 建议小费比例在 237 与 295 | 分属 **政策** vs **收据展示**，需组内说明 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **7 组**，覆盖 49 条，符合「能付什么 → 怎么算税/小费 → 日结 → 卡费 → 顾客怎么付」",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（支付/结账设置维度）",
  "",
  "| 竞品 | 支付/结账设置组织方式 | 本项目借鉴 |",
  "|------|----------------------|------------|",
  "| **Toast** | 独立「支付」：支付选项（小费/预授权/小票）、自动关账、税率、附加费 | **支付方式 / 税务 / 小费政策 / BATCH / 卡费** 五轨 + 终端交互 |",
  "| **Clover** | 设置→支付、订单类型免税、现金折扣 | 税务与支付方式分轨 |",
  "| **Square** | 支付处理、折扣层级、履行方式支付 | 卡交易门槛与手续费独立组 |",
  "| **Peblla** | 支付设置：税费、小费、自定义支付、现金折扣、双重定价 | **税务 / 小费 / 卡费** 三段与 Peblla 对齐 |",
  "| **Snackpass** | 设置→支付、小费页；渠道支付规则 | 食客端结账交互独立；Kiosk 支付方式入方式组 |",
  "",
  "### 2.1 支付设置七维（商户心智）",
  "",
  "```text",
  "支付方式与网关 → 税务规则 → 小费政策与计算 → BATCH与日结 → 卡交易与附加费用 → 食客端结账 → Paypad结账",
  "```",
  "",
  "**边界**：",
  "- **团队管理**：小费 **分配比例/工资计算** 不在此 hub。",
  "- **前厅管理中心**：POS 按钮上的「小费」显隐在 POS 操作组；**小费页流程与比例 SSOT** 在支付中心。",
  "- **订单中心**：BATCH 前检查下班卡 (241) 在订单 hub。",
  "",
  "---",
  "",
  "## 3. 推荐二级导航结构（7 组）",
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
  "| 支付方式与网关 | 设置、基本设置（支付图标/第三方）、自定义付款类型、操作权限（Payment Service） |",
  "| 税务规则 | 税、税率、加收（税后服务费） |",
  "| 小费政策与计算 | 基本设置（小费算法/比例）、小费设置、付款收据、信用卡（隐藏现金小费） |",
  "| BATCH与日结 | 基本设置（结算/batch/自动结账） |",
  "| 卡交易与附加费用 | 信用卡、报表手续费、现金折扣、双重定价、附加费、服务设置支付门槛 |",
  "| 食客端·结账交互 | 客显屏、服务（签名）、服务设置小费/收据/支付（食客端） |",
  "| Paypad·结账交互 | Paypad设置（全部） |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-payment-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 支付中心 → 设置（`/transactions/settings`）验证",
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
  "- 49 条全部保留；`seq` 与终版表行号一致。",
  "- `seq 237`（基本设置建议小费比例）与 `seq 295`（收据建议百分比）同属小费政策组，前者偏 **POS/全局预设**，后者偏 **收据展示默认值**。",
  "- `seq 8/9` 原属相关设备·客显屏，因 hub=支付中心且为结账交互 SSOT，归入「食客端·结账交互」。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
