/**
 * 设置 catalog 场景描述覆盖/追加（不改终版原文）。
 */
export const SETTINGS_CATALOG_SCENE_OVERRIDE_BY_SEQ = new Map([
  [
    39,
    "控制哪些订单类型的订单需要打印打包单（与「不需要厨房单的单类」独立，仅作用于打包条）",
  ],
]);

export const SETTINGS_CATALOG_SCENE_SUPPLEMENT_BY_SEQ = new Map([
  [461, "维护请至素材中心。"],
  [462, "维护请至素材中心。"],
]);

/** @param {number} seq @param {string} baseDesc */
export function buildCatalogSceneDesc(seq, baseDesc) {
  const n = Number(seq);
  const override = SETTINGS_CATALOG_SCENE_OVERRIDE_BY_SEQ.get(n);
  if (override) return override;

  const supplement = SETTINGS_CATALOG_SCENE_SUPPLEMENT_BY_SEQ.get(n);
  const base = (baseDesc && baseDesc !== "（未填写）" ? baseDesc : "").trim();
  if (!supplement) return base;
  if (!base) return supplement;
  return `${base} ${supplement}`;
}
