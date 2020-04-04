import React from "react";
import Metric from "./Metric";
import Numeral from "numeral";
import "./Metrics.scss";

export default function Metrics({
  volume,
  high24,
  open24,
  change24,
  changePercent
}: any) {
  return (
    <div className="metrics">
      <div className="metric-actions">
        <button className="button btn-primary">open orders</button>
        <button className="button btn-secondary">add to watchList</button>
      </div>
      <Metric
        name="Change 24h"
        value={Numeral(change24).format("$0.00")}
        percentage={changePercent.toFixed(3) + "%"}
      />
      <Metric
        name="Volume 24"
        value={Numeral(volume)
          .format("($ 0.000 a)")
          .toUpperCase()}
      />
      <Metric name="High 24" value={high24} />
      <Metric name="Open 24" value={open24} />
    </div>
  );
}

Metrics.defaultProps = {
  volume: 8067826541,
  change24: 15.11,
  high24: 271.63,
  open24: 249.26,
  changePercent: 9.6
};
