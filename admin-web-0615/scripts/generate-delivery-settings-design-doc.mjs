/**
 * 生成 docs/项目文档/外卖来取-设置二级导航重设计方案.md
 * 运行：node scripts/generate-delivery-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "外卖来取-设置二级导航重设计方案.md");

const HUB = "外卖/来取";

const titles = {
  "order-type-pickup": "订单类型与取餐流程",
  "scan-online-basics": "扫码·线上下单基础",
  "online-integration": "线上订餐服务对接",
  "delivery-packaging": "外送区域与打包费",
};

const reasons = {
  "order-type-pickup":
    "堂食/外带/来取类型、取餐方式、号码牌与送餐到桌；对标 Toast「订单类型 / 外带与外送」、Snackpass 订单类型与取餐方式。",
  "scan-online-basics":
    "扫码点餐开关、订餐单号、免开端口、小票签名栏；对标 Toast「在线点餐可用性」、Clover 线上点餐基础。",
  "online-integration":
    "Online order service 与 callback 主机/端口/轮询参数；对标第三方线上订餐对接、Peblla 社交下单对接的技术配置层。",
  "delivery-packaging":
    "外送可配送区域、按菜品默认打包盒加收；对标 Toast「外带/外送-配送范围」、Peblla「配送设置 / 包装」。",
};

/** seq → groupKey（外卖/来取 25 条） */
const assignMap = {
  "order-type-pickup": [31, 487, 488, 489, 490, 491, 503],
  "scan-online-basics": [90, 92, 93, 94],
  "online-integration": [95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106],
  "delivery-packaging": [429, 546],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title) {
  const t = `${nav}${mod}${title}`;
  if (mod.includes("区域") || title.includes("外送")) return "外送";
  if (mod.includes("附加") || title.includes("打包")) return "打包";
  if (mod.includes("高级") || title.includes("callback") || title.includes("Online order") || title.includes("host"))
    return "对接";
  if (mod.includes("订单类型") || title.includes("取餐") || title.includes("订单类型")) return "类型";
  if (title.includes("餐牌") || title.includes("送餐")) return "送餐";
  return "线上";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === HUB);
const order = ["order-type-pickup", "scan-online-basics", "online-integration", "delivery-packaging"];

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
  "# 外卖/来取 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 外卖/来取** 共 **25** 条功能设置  ",
  "> 设置路径：`/operations/waitlist/settings`  ",
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
  "| 二级分组数 | **7 组** / 25 条 | 「高级设置」单组 **12** 条技术参数，商户难理解 |",
  "| 命名来源 | 旧「功能模块」 | 订单类型 5 条与 Kiosk「设置」分离 |",
  "| 业务/技术混排 | 扫码开关与 callback hash 同 hub | 未区分 **商户可懂场景** vs **IT 对接** |",
  "| 外送项分散 | 区域、打包费各 1 组 | 应合并为外送/包装场景 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **4 组**，覆盖 25 条：类型与取餐 → 线上下单 → 服务对接 → 外送包装",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（外卖/来取/线上点餐维度）",
  "",
  "| 竞品 | 外卖/来取/线上点餐组织方式 | 本项目借鉴 |",
  "|------|---------------------------|------------|",
  "| **Toast** | 「外带与外送」：在线点餐时段、预计出餐、配送范围、包装偏好、第三方接单 | **外送区域与打包** 独立；时段类若后续入终版可归入线上下单基础 |",
  "| **Clover** | 线上点餐与 Grubhub/DoorDash 对接；订单类型区分外卖/堂食 | **订单类型与取餐** 组吸收 Kiosk+食客端类型 |",
  "| **Square** | 外送、DoorDash 对接、履行方式 | 第三方对接参数归 **线上订餐服务对接** |",
  "| **Peblla** | 配送设置（范围、配送费、时间）、外卖税费 | 外送区域；打包加收 |",
  "| **Snackpass** | 配送最低金额、特殊配送时间、配送市场集成 | 外送规则与渠道对接分轨 |",
  "",
  "### 2.1 外卖/来取设置四维（商户心智）",
  "",
  "```text",
  "订单类型与取餐流程 → 扫码·线上下单基础 → 线上订餐服务对接 → 外送区域与打包费",
  "```",
  "",
  "**边界**：",
  "- **前厅管理中心**：食客端菜单展示、火锅轮次等不在此 hub。",
  "- **订单中心**：`seq 91` 扫码是否直接送厨在订单 hub。",
  "- **支付中心**：外卖免税 (144) 在支付税务组。",
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
  "| 订单类型与取餐流程 | 设置（Kiosk 订单类型）、订单类型、收据（餐牌号） |",
  "| 扫码·线上下单基础 | 基础设置（扫码/单号/端口/签名栏） |",
  "| 线上订餐服务对接 | 高级设置（Online order service + callback 全部） |",
  "| 外送区域与打包费 | 区域设置、附加费设置 |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-delivery-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 外卖/来取 → 设置 页验证",
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
  "- 25 条全部保留；`seq` 与终版表行号一致。",
  "- 「线上订餐服务对接」12 条偏 IT/实施配置，侧栏标题明确为 **对接** 以降低商户误点（可后续加权限仅管理员可见）。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
