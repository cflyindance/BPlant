/**
 * 设置 catalog 场景描述覆盖/追加（不改终版原文）。
 */
export const SETTINGS_CATALOG_SCENE_OVERRIDE_BY_SEQ = new Map([
  [
    39,
    "控制哪些订单类型的订单需要打印打包单（与「不需要厨房单的单类」独立，仅作用于打包条）",
  ],
  [
    419,
    "批量上传地址数据（门店运维；若为外送顾客地址库则归属外卖/来取，待产品确认）",
  ],
  [
    420,
    "批量删除地址数据（门店运维；若为外送顾客地址库则归属外卖/来取，待产品确认）",
  ],
  [421, "批量删除菜品评价数据（评价/UGC 治理，配置入口在评价中心设置）"],
  [547, "配置一个门店有哪些品牌，并为每个品牌绑定营业时间与菜单（原 seq 548 并入）"],
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
