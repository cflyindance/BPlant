/**
 * 生成 docs/项目文档/订单中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-order-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "订单中心-设置二级导航重设计方案.md");

const titles = {
  "order-init-scenario": "开单·桌台与场景",
  "order-numbering": "单号规则",
  "kitchen-send": "送厨策略",
  "order-ui": "点单界面",
  "split-merge-edit": "分单合单与改单",
  "find-checkout": "找单与收银",
  "discount-void": "折扣加收与删退",
};

const reasons = {
  "order-init-scenario":
    "开单前置（跳桌/人数、默认单型、一桌一单）、桌台与人数选择、火锅/品类场景下单；对标 Toast「订单类型 / 餐位开单」、Peblla「订单设置 / 就餐流程」。",
  "order-numbering":
    "单号模式、起始/上限、分类单号与重置；对标 Toast「单号」、Clover 订单流水。",
  "kitchen-send":
    "送厨/付款联动、延迟送厨、扫码与 Kiosk 送厨、菜单送厨方式；对标 Toast POS 送厨与 Snackpass 订单进厨规则。",
  "order-ui":
    "POS 点单页展示（座位、合拆行、菜序、键盘、ASAP、单菜序号）；对标 Toast「点餐界面设置 / 界面选项」。",
  "split-merge-edit":
    "分单展示、合单、改应收、部分支付、小数数量、促销重算；对标 Clover「合并商品 / 分单」与 Toast 订单编辑策略。",
  "find-checkout":
    "找单列表、盘点模式、支付前确认、条码找单付款、收据打印；对标 Toast「订单与发票 / 找单结账」、Square 结账流程。",
  "discount-void":
    "折扣/加收原因、线上服务费、删单厨打、退菜作废；对标 Toast「折扣原因 / 作废」、Clover「记录移除原因」。",
};

/** seq → groupKey（订单中心 61 条） */
const assignMap = {
  "order-init-scenario": [
    107, 108, 110, 111, 126, 533, 619, 625, 643, 644, 592, 571, 572, 574,
  ],
  "order-numbering": [127, 128, 129, 130, 131],
  "kitchen-send": [91, 113, 114, 120, 123, 125, 502, 567, 581],
  "order-ui": [132, 133, 134, 135, 136, 137, 178],
  "split-merge-edit": [115, 116, 117, 119, 121, 122, 124, 140, 141, 149, 150],
  "find-checkout": [151, 152, 153, 154, 221, 248, 251],
  "discount-void": [155, 156, 157, 158, 159, 161, 162, 163],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title) {
  const t = `${nav}${mod}${title}`;
  if (mod.includes("删单") || title.includes("删单") || title.includes("退款") || title.includes("失效"))
    return "删退";
  if (mod.includes("折扣") || mod.includes("加收") || title.includes("折扣") || title.includes("服务费"))
    return "折扣";
  if (mod.includes("找单") || mod.includes("付款") || mod.includes("收据") || title.includes("找单"))
    return "收银";
  if (mod.includes("单号")) return "单号";
  if (title.includes("送厨") || mod.includes("送厨") || title.includes("Kiosk"))
    return "送厨";
  if (mod.includes("点单界面") || mod.includes("界面") || mod.includes("单菜")) return "界面";
  if (title.includes("分单") || title.includes("合单") || title.includes("编辑") || title.includes("支付"))
    return "改单";
  if (mod.includes("火锅") || mod.includes("品类") || title.includes("一桌多单") || title.includes("人数"))
    return "场景";
  if (mod.includes("桌子") || title.includes("桌") || title.includes("开单")) return "桌台";
  return "开单";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === "订单中心");
const order = [
  "order-init-scenario",
  "order-numbering",
  "kitchen-send",
  "order-ui",
  "split-merge-edit",
  "find-checkout",
  "discount-void",
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
  "# 订单中心 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 订单中心** 共 **61** 条功能设置  ",
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
  "| 二级分组数 | **17 组** / 61 条 | 「基础设置」单组 18 条，侧栏难扫读 |",
  "| 命名来源 | 旧「功能模块」 | 送厨、分单、找单、删单规则混在「基础设置」 |",
  "| 渠道不清 | 点单 / 网上点餐 / 服务设置 / 全局设置 | 同一业务规则分散在不同原导航下 |",
  "| 与 hub 重复 | 订单中心已有订单列表、找单业务页 | 设置页应表达 **规则与策略**，非操作入口 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **7 组**，覆盖 61 条，符合「开单 → 编号 → 点单/送厨 → 结账 → 调价作废」流程",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（订单/点单设置维度）",
  "",
  "| 竞品 | 订单/点单设置组织方式 | 本项目借鉴 |",
  "|------|----------------------|------------|",
  "| **Toast** | 前厅→订单类型、点餐界面、快速点餐；设置→订单与发票、单号、自动关账；删单/折扣原因 | **开单场景 / 单号 / 界面 / 送厨 / 找单结账 / 折扣作废** 分轨 |",
  "| **Clover** | 设置→订单类型、合并商品、移除原因、订单类型免税 | 合单、删单原因、订单类型归开单与删退组 |",
  "| **Square** | 履行方式、订单设置、折扣层级 | 找单与折扣工具分轨 |",
  "| **Peblla** | 设置→订单设置（序号、预约单）、POS 折扣选项 | 单号与折扣加收独立组 |",
  "| **Snackpass** | 设置→所有订单、自提订单设置 | 线上单送厨策略并入送厨组；桌台弱则并入开单 |",
  "",
  "### 2.1 订单设置七维（商户心智）",
  "",
  "```text",
  "开单·桌台与场景 → 单号规则 → 送厨策略 → 点单界面 → 分单合单与改单 → 找单与收银 → 折扣加收与删退",
  "```",
  "",
  "**边界**：",
  "- **前厅管理中心**：POS 按钮显隐、食客端下单展示不在此 hub。",
  "- **后厨管理中心**：厨单票面/排版在厨房设置。",
  "- **支付中心**：支付方式、BATCH、税率在支付 hub。",
  "- **商品中心**：菜价、套餐计价在商品 hub。",
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
  "| 开单·桌台与场景 | 基础设置（开单/人数/单型）、桌子设置、用户设置、服务员设置、下单设置（火锅/品类）、权限设置（延迟送厨外的场景项） |",
  "| 单号规则 | 单号设置（全部） |",
  "| 送厨策略 | 基础设置（送厨/付款联动）、网上点餐、收据（Kiosk）、权限设置（菜单延迟送厨） |",
  "| 点单界面 | 点单界面设置、单菜设置、点餐界面模式（仅界面类） |",
  "| 分单合单与改单 | 基础设置（分单/合单/编辑）、自定义单/套餐、价格（合单重算） |",
  "| 找单与收银 | 找单、付款收据、点餐界面模式（支付前确认） |",
  "| 折扣加收与删退 | 折扣、加收、删单 |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-order-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 订单中心 → 设置（`/orders/settings`）验证",
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
  "- 61 条全部保留；`seq` 与终版表行号一致。",
  "- `seq 221` 支付前确认客户信息：属结账确认，归入「找单与收银」而非点单界面。",
  "- `seq 567` 菜单延迟送厨：送厨时序规则，归入「送厨策略」。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
