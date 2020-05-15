import React from "react";
import moment from "moment";

export default function News({ news }: any) {
  function truncate(input: string, length: number) {
    if (input.length > length) return input.substring(0, length) + "...";
    else return input;
  }

  return (
    <div
      className=""
      style={{
        margin: "1em",
        display: "flex",
        flexWrap: "wrap",
        flex: 1,
      }}
    >
      {news.map((n: any) => (
        <div key={n.id} className="news">
          <div className="header">
            <h5>{n.title}</h5>
            <p style={{ color: "#fff", fontSize: "16px" }}>
              {truncate(n.body, 220)}
            </p>
            <div style={{ display: "flex" }}>
              {n.categories.split("|").map((c: string) => (
                <small className="pill" key={c}>
                  {c}
                </small>
              ))}
            </div>
            <div className="meta-news-data">
              <div className="time-news">
                <small>
                  <i className="icon icon-time"></i>
                  {moment.unix(n.published_on).format("MM/DD/YYYY hh:mm a")}
                </small>
              </div>

              <small>
                source:{" "}
                <a href={n.url} target="_blank" rel="noopener noreferrer">
                  {n.source}{" "}
                </a>
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

News.defaultProps = {
  news: {
    title: "Lorem ETC",
    body:
      "There are various ways to represent undirected graphs as a data structure class. Two of the most common ways to do this are by using an adjacency matrix or an adjacency list. The adjacency list uses a vertex as the key for nodes with its neighbors stored into a list, whereas an adjacency matrix is a V by V",
  },
};
