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
          <h1>{c.name}</h1>
          <h1 className="secondary">{c.symbol}</h1>
        </div>
      ))}
    </div>
  );
}
