/**
 * 将外卖/来取 4 组分类写入 docs/项目文档/配置归类-分组映射.csv
 * 运行：node scripts/apply-delivery-settings-mapping.mjs
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
  "order-type-pickup": "订单类型与取餐流程",
  "scan-online-basics": "扫码·线上下单基础",
  "online-integration": "线上订餐服务对接",
  "delivery-packaging": "外送区域与打包费",
};

const assignMap = {
  "order-type-pickup": [31, 487, 488, 489, 490, 491, 503],
  "scan-online-basics": [90, 92, 93, 94],
  "online-integration": [95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106],
  "delivery-packaging": [429, 546],
};

const deliveryAssign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) {
    deliveryAssign.set(seq, { groupTitle: titles[key], groupKey: key });
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
  const next = deliveryAssign.get(seq);
  if (next) {
    out.push(`${seq},${escapeCsvCell(next.groupTitle)},${escapeCsvCell(next.groupKey)}`);
    updated++;
  } else {
    out.push(line);
  }
}

if (updated !== deliveryAssign.size) {
  throw new Error(`预期更新 ${deliveryAssign.size} 条，实际 ${updated} 条`);
}

fs.writeFileSync(mappingPath, `${out.join("\n")}\n`, "utf8");
console.log(`Updated ${updated} rows in ${mappingPath}`);
