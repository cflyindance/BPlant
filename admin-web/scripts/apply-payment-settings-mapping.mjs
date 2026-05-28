/**
 * 将支付中心 7 组分类写入 docs/项目文档/配置归类-分组映射.csv
 * 运行：node scripts/apply-payment-settings-mapping.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const repoDocs = path.join(root, "docs");
const projectDocs = path.join(repoDocs, "项目文档");
const mappingPath = [projectDocs, repoDocs]
  .map((d) => path.join(d, "配置归类-分组映射.csv"))
  .find((p) => fs.existsSync(p));

const titles = {
  "payment-methods": "支付方式与网关",
  "tax-rules": "税务规则",
  "tip-policy": "小费政策与计算",
  "batch-settlement": "BATCH与日结",
  "card-fees": "卡交易与附加费用",
  "guest-checkout-ux": "食客端·结账交互",
  "paypad-checkout": "Paypad·结账交互",
};

const assignMap = {
  "payment-methods": [29, 229, 233, 234, 448, 511],
  "tax-rules": [142, 143, 144, 160, 445],
  "tip-policy": [231, 232, 237, 244, 253, 293, 294, 295, 296],
  "batch-settlement": [230, 235, 236, 238, 239, 240],
  "card-fees": [242, 243, 307, 452, 454, 512, 543],
  "guest-checkout-ux": [8, 9, 464, 492, 493, 494, 495, 496, 497, 501],
  "paypad-checkout": [662, 663, 664, 665, 666, 667],
};

const paymentAssign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) {
    paymentAssign.set(seq, { groupTitle: titles[key], groupKey: key });
  }
}

function parseCsvLine(line) {
  const parts = [];
  let cur = "";
  let inQ = false;
  for (let j = 0; j < line.length; j++) {
    const ch = line[j];
    if (inQ) {
      if (ch === '"' && line[j + 1] === '"') {
        cur += '"';
        j++;
      } else if (ch === '"') inQ = false;
      else cur += ch;
    } else if (ch === '"') inQ = true;
    else if (ch === ",") {
      parts.push(cur);
      cur = "";
    } else cur += ch;
  }
  parts.push(cur);
  return parts;
}

function escapeCsvCell(value) {
  const s = String(value ?? "");
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

if (!mappingPath) throw new Error("未找到 配置归类-分组映射.csv");

const text = fs.readFileSync(mappingPath, "utf8");
const lines = text.split(/\r?\n/);
const out = [];
let updated = 0;

for (const line of lines) {
  if (!line.trim()) {
    out.push(line);
    continue;
  }
  if (line.startsWith("#") || line.startsWith("seq,")) {
    out.push(line);
    continue;
  }
  const parts = parseCsvLine(line);
  const seq = Number(parts[0]);
  if (!seq) {
    out.push(line);
    continue;
  }
  const next = paymentAssign.get(seq);
  if (next) {
    out.push(`${seq},${escapeCsvCell(next.groupTitle)},${escapeCsvCell(next.groupKey)}`);
    updated++;
  } else {
    out.push(line);
  }
}

if (updated !== paymentAssign.size) {
  throw new Error(`预期更新 ${paymentAssign.size} 条，实际 ${updated} 条`);
}

fs.writeFileSync(mappingPath, `${out.join("\n")}\n`, "utf8");
console.log(`Updated ${updated} rows in ${mappingPath}`);
