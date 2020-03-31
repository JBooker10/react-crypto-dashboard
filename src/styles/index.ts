import { Light } from "./colors";

const chartWidth =
  window.innerWidth >= 900 ? window.innerWidth / 1.68 : window.innerWidth - 20;

const chartToolTipStyle = {
  background: "rgba(24, 27, 33, .95)",
  border: `1px solid ${Light}`,
  borderRadius: "3px"
};

export { chartWidth, chartToolTipStyle };
