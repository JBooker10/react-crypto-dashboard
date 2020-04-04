import React from "react";

export default function Metric({ name, value, percentage }: any) {
  const isPositive = Math.sign(percentage);
  return (
    <div className="metrics-card">
      <p>{name}</p>
      <div className="card">
        <h6>
          {value}{" "}
          <span className={isPositive === 1 ? "up" : "down"}>{percentage}</span>
        </h6>
      </div>
    </div>
  );
}
