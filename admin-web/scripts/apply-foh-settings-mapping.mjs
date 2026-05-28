/**
 * 将前厅管理中心 8 组分类写入 docs/项目文档/配置归类-分组映射.csv
 * 运行：node scripts/apply-foh-settings-mapping.mjs
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
  "tables-floor": "桌台与餐位",
  "pos-actions": "POS 操作与按钮",
  "pos-menu-ui": "POS 菜单与布局",
  "guest-menu": "食客端·菜单展示",
  "guest-order-rules": "食客端·下单与规则",
  "guest-notes-fees": "备注与附加服务",
  "wait-time": "等待时长提示",
  cds: "客显屏",
};

function range(a, b) {
  const out = [];
  for (let i = a; i < b; i++) out.push(i);
  return out;
}

const assignMap = {
  "tables-floor": [428, 169, 534, 642, 351],
  "pos-actions": [118, 164, 148, 483, 484, 485, 486, 347, ...range(193, 216)],
  "pos-menu-ui": [176, 177, 348, 350, ...range(216, 221)],
  "guest-menu": [
    515, 516, 517, 518, 519, 520, 524, 528, 532, 599, 601, 602, 603, 604, 605, 606, 607, 608, 611,
    612, 613, 614, 645,
  ],
  "guest-order-rules": [569, 570, 573, 577, 578, 579, 580, 597, 598, 600],
  "guest-notes-fees": [521, 522, 523, 544, 545, 609, 610, 616, 617, 618],
  "wait-time": [535, 536, 537, 538, 539, 540],
  cds: [461, 462, 463, 465, 466, 467],
};

const fohAssign = new Map();
for (const [key, seqs] of Object.entries(assignMap)) {
  for (const seq of seqs) {
    fohAssign.set(seq, { groupTitle: titles[key], groupKey: key });
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

if (!mappingPath) {
  throw new Error("未找到 配置归类-分组映射.csv");
}

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
  const next = fohAssign.get(seq);
  if (next) {
    out.push(`${seq},${escapeCsvCell(next.groupTitle)},${escapeCsvCell(next.groupKey)}`);
    updated++;
  } else {
    out.push(line);
  }
}

if (updated !== fohAssign.size) {
  throw new Error(`预期更新 ${fohAssign.size} 条前厅映射，实际更新 ${updated} 条`);
}

fs.writeFileSync(mappingPath, `${out.join("\n")}\n`, "utf8");
console.log(`Updated ${updated} rows in ${mappingPath}`);
