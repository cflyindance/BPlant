/**
 * 将商品中心 5 组分类写入 docs/项目文档/配置归类-分组映射.csv
 * 运行：node scripts/apply-product-settings-mapping.mjs
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
  "item-menu-base": "菜品与菜单基础",
  "pricing-tools": "价格与折扣工具",
  "combo-scenario-pricing": "套餐与场景计价",
  "tags-attributes": "标签与分类属性",
  "menu-scenarios": "品类与场景菜单",
};

const assignMap = {
  "item-menu-base": [112, 438, 439, 440, 441, 444, 456, 476],
  "pricing-tools": [145, 146, 147, 148, 446, 447],
  "combo-scenario-pricing": [139, 443, 575, 593],
  "tags-attributes": [542, 552, 628],
  "menu-scenarios": [655, 656, 657, 658, 659, 660, 661],
};

const productAssign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) {
    productAssign.set(seq, { groupTitle: titles[key], groupKey: key });
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
  const next = productAssign.get(seq);
  if (next) {
    out.push(`${seq},${escapeCsvCell(next.groupTitle)},${escapeCsvCell(next.groupKey)}`);
    updated++;
  } else {
    out.push(line);
  }
}

if (updated !== productAssign.size) {
  throw new Error(`预期更新 ${productAssign.size} 条，实际 ${updated} 条`);
}

fs.writeFileSync(mappingPath, `${out.join("\n")}\n`, "utf8");
console.log(`Updated ${updated} rows in ${mappingPath}`);
