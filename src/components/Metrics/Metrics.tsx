import React, { useState } from "react";
import SignupModal from "./../Dashboard/SignupModal";
import Metric from "./Metric";
import Numeral from "numeral";
import "./Metrics.scss";

interface MetricProps {
  volume: number;
  high24: number;
  open24: number;
  change24: number;
  changePercent?: number;
}

export default function Metrics({
  volume,
  high24,
  open24,
  change24,
  changePercent,
}: MetricProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="metrics">
      <div className="metric-actions">
        <button className="button btn-primary" onClick={openModal}>
          open orders
        </button>
        <button className="button btn-secondary" onClick={openModal}>
          add to watchList
        </button>
      </div>
      <SignupModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Metric
        name="Change 24h"
        value={Numeral(change24).format("$0.00")}
        percentage={changePercent && changePercent.toFixed(3) + "%"}
      />
      <Metric
        name="Volume 24"
        value={Numeral(volume).format("($ 0.000 a)").toUpperCase()}
      />
      <Metric name="High 24" value={high24} />
      <Metric name="Open 24" value={open24} />
    </div>
  );
}
