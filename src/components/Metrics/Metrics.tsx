import React from "react";
import Metric from "./Metric";
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
        <button className="button btn-secondary">add to favorite</button>
      </div>
      <Metric name="Change 24h" value={change24} percentage={changePercent} />
      <Metric name="Volume 24" value={volume} />
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
