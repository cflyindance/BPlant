/**
 * 生成 docs/项目文档/会员中心-设置二级导航重设计方案.md
 * 运行：node scripts/generate-member-settings-design-doc.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseConfigMd } from "./lib/parse-bplant-config-md.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const projectDocs = path.join(root, "docs", "项目文档");
const sourcePath = path.join(projectDocs, "配置归类-终版.md");
const outPath = path.join(projectDocs, "会员中心-设置二级导航重设计方案.md");

const HUB = "会员中心";

const titles = {
  "member-account-system": "会员账户与卡体系",
  "points-rewards": "积分规则与兑换商品",
  "login-verification": "登录注册与信息校验",
  "member-guidance-benefits": "会员引导与权益展示",
};

const reasons = {
  "member-account-system":
    "定义会员卡可用条件、有效期、查询方式、本地会员档案与等级；对标 Square/Clover 的礼品卡与会员档案体系。",
  "points-rewards":
    "定义积分赚取/兑换规则与积分菜展示策略；对标 Square/Snackpass 忠诚度奖励与兑换规则。",
  "login-verification":
    "定义入会入口、手机号/姓名采集、验证码、下单前强制登录；对标 Snackpass 注册收集与 Toast 会员加入路径。",
  "member-guidance-benefits":
    "定义登录引导图、付费会员引导弹窗、权益会员介绍；对标 Square/Snackpass 的店内会员营销触达位。",
};

/** seq → groupKey（会员中心 32 条） */
const assignMap = {
  "member-account-system": [82, 86, 87, 88, 89, 479, 480, 481, 482],
  "points-rewards": [83, 84, 85, 509, 525, 526, 527],
  "login-verification": [10, 30, 222, 223, 504, 505, 506, 507, 508, 510, 622, 623, 624],
  "member-guidance-benefits": [554, 615, 650],
};

const assign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) assign.set(seq, key);
}

function inferArea(nav, mod, title) {
  const t = `${nav}${mod}${title}`;
  if (t.includes("积分")) return "积分";
  if (t.includes("会员卡") || t.includes("会员等级") || t.includes("本地会员")) return "账户";
  if (t.includes("验证码") || t.includes("登录") || t.includes("注册")) return "登录";
  if (t.includes("手机号") || t.includes("姓名")) return "信息采集";
  if (t.includes("引导") || t.includes("权益")) return "引导";
  if (t.includes("菜单")) return "兑换商品";
  return "会员";
}

function sceneSummary(scene) {
  const s = scene && scene !== "（未填写）" ? scene : "—";
  return s.length > 80 ? `${s.slice(0, 77)}...` : s;
}

const md = fs.readFileSync(sourcePath, "utf8");
const rows = parseConfigMd(md).filter((r) => r.hub === HUB);
const order = [
  "member-account-system",
  "points-rewards",
  "login-verification",
  "member-guidance-benefits",
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
  "# 会员中心 · 设置二级导航重设计方案",
  "",
  "> 文档版本：v1.0  ",
  "> 数据范围：`docs/项目文档/配置归类-终版.md` 中 **B平台一级导航 = 会员中心** 共 **32** 条功能设置  ",
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
  "| 二级分组数 | **13 组** / 32 条 | 基础设置 8 条、用户信息 7 条，规则与流程混排 |",
  "| 命名来源 | 旧模块直出 | 会员卡、积分、登录、引导的边界不清晰 |",
  "| 关键空组 | `（未填写）` 2 条 | 本地会员档案入口语义缺失 |",
  "| 入口分散 | 客显屏/Kiosk/POS/食客端均有会员项 | 用户无法按“入会→积分类→权益展示”找配置 |",
  "",
  "### 1.2 设计目标",
  "",
  "- 二级导航收敛为 **4 组**，覆盖 32 条，符合餐饮会员运营流程",
  "- 输出可写入 `docs/项目文档/配置归类-分组映射.csv` 的 `groupTitle` / `groupKey`",
  "- **不修改** `配置归类-终版.md` 原文",
  "",
  "---",
  "",
  "## 2. 竞品对照（会员/忠诚度设置维度）",
  "",
  "| 竞品 | 会员/忠诚度组织方式 | 本项目借鉴 |",
  "|------|--------------------|------------|",
  "| **Square** | 忠诚度（积分、奖励、等级）、礼品卡、订阅并行 | 账户体系与积分规则分轨，权益引导独立 |",
  "| **Snackpass** | 奖励系统 + Kiosk 展示横幅 + 收银台兑换 | 积分兑换商品与店内引导位拆分 |",
  "| **Peblla** | 会员、会员分组、会员忠诚度、奖励中心 | 账户档案/等级归一组，奖励规则单独一组 |",
  "| **Clover** | 会员基础能力偏简，重在收集客户信息与营销订阅 | 登录注册与信息采集独立分组 |",
  "| **Toast** | 会员加入入口与促销触达联动 | 入会校验与权益引导应有明确顺序 |",
  "",
  "### 2.1 会员设置四维（商户心智）",
  "",
  "```text",
  "会员账户与卡体系 → 积分规则与兑换商品 → 登录注册与信息校验 → 会员引导与权益展示",
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
  "| 会员账户与卡体系 | 基础设置（会员卡规则）、会员卡、会员等级、（未填写）本地会员档案 |",
  "| 积分规则与兑换商品 | 基础设置（积分兑换）、用户信息（账户积分）、菜单（积分菜） |",
  "| 登录注册与信息校验 | 设置、客显屏、点餐界面模式、用户信息（手机号/姓名/验证码）、用户设置（登录注册） |",
  "| 会员引导与权益展示 | 登陆引导图、展示设置、权益会员 |",
  "",
  "---",
  "",
  "## 6. 落地步骤",
  "",
  "1. 确认本方案后运行 `node scripts/apply-member-settings-mapping.mjs`",
  "2. `cd admin-web && npm run build:settings-catalog`",
  "3. 会员中心 → 设置（`/members/settings`）验证",
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
  "- 32 条全部保留；`seq` 与终版表行号一致。",
  "- `seq 509`（展示账户积分）归入“积分规则与兑换商品”，用于与积分菜展示形成完整兑换链路。",
  "- `seq 10`（客显屏加入会员）归入“登录注册与信息校验”，作为入会入口开关。",
  "- 确认写入后执行 apply 脚本并重建 catalog。",
  "",
);

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outPath} (${rows.length} items, ${order.length} groups)`);
