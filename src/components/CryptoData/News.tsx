import React from "react";

export default function News({ news }: any) {
  return (
    <div className="columns" style={{ margin: "1em" }}>
      <div className="column col-7 col-mx-auto">
        <div className="header">
          <h5>{news.title}</h5>
          <p style={{ color: "#fff", fontSize: "16px" }}>{news.body}</p>
        </div>
      </div>
    </div>
  );
}
