import React, { useContext } from "react";

import cryptoCurrencyCTX from "./../../context/cryptocurrency/cryptoCurrencyContext";

export default function FilteredSearch({ search, setFind }: any) {
  const cryptoCTX = useContext(cryptoCurrencyCTX);
  const { searchNewAsset } = cryptoCTX;

  const handleOnClick = (symbol: string, name: string) => {
    searchNewAsset(symbol, name);
    setFind([]);
  };

  return (
    <div className="filter-search">
      {search.map((c: any) => (
        <div
          key={c.id}
          onClick={() => handleOnClick(c.symbol, c.id)}
          className="search-item"
        >
          <h1>
            {c.name} <span className="secondary">{c.symbol}</span>
          </h1>
          <p>
            ${parseFloat(c.priceUsd).toFixed(2)}{" "}
            <span>{parseFloat(c.changePercent24Hr).toFixed(2)}%</span>
          </p>
        </div>
      ))}
    </div>
  );
}
