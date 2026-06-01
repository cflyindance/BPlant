/**
 * 设置 catalog 展示所属一级导航（覆盖 配置归类-终版.md 的 B平台一级导航）。
 * 用于跨 hub 归类：终版原文不改，设置滑层按商户心智挂载。
 */
export const SETTINGS_HUB_OVERRIDE_BY_SEQ = {
  148: "商品中心",
  164: "订单中心",
  463: "支付中心",
  465: "支付中心",
  652: "前厅管理中心",
  653: "前厅管理中心",
  /** 行级合并矩阵 SSOT：后厨展示三列，终版 hub 仍为打印中心 */
  287: "后厨管理中心",
  288: "后厨管理中心",
  301: "后厨管理中心",
  302: "后厨管理中心",
};

/** @param {{ seq: number; hub: string }} row */
export function getSettingsHub(row) {
  return SETTINGS_HUB_OVERRIDE_BY_SEQ[row.seq] ?? row.hub;
}

/** @param {Array<{ seq: number; hub: string }>} rows @param {string} hubName */
export function filterRowsForSettingsHub(rows, hubName) {
  return rows.filter((r) => getSettingsHub(r) === hubName);
}
