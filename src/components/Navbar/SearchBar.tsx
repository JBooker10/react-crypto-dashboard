import React, { useState, useEffect, useContext } from "react";
import cryptoCurrencyCTX from "./../../context/cryptocurrency/cryptoCurrencyContext";

import FilteredSearch from "./FilteredSearch";

export default function SearchBar() {
  const cryptoCTX = useContext(cryptoCurrencyCTX);
  const { getTopAssets, assets, loading } = cryptoCTX;
  const [find, setFind] = useState([]);

  // eslint-disable-next-line
  useEffect(() => getTopAssets(), [loading]);
  // eslint-disable-next-line
  useEffect(() => {}, [find.length <= 0]);

  const handleOnChange = (e: any) => {
    let filteredAssets = assets.filter((asset: any) =>
      asset.name.toLowerCase().match(new RegExp(e.target.value, "gi"))
    );
    if (e.target.value) {
      setFind(filteredAssets);
      return;
    }
    setFind([]);
  };

  return (
    <>
      <div className="input-group input-inline">
        <i
          className="icon icon-2x  icon-search"
          style={
            find.length > 0
              ? { color: "white", transform: "scale(1.02)", animation: "500ms" }
              : {}
          }
        ></i>
        <input
          onChange={handleOnChange}
          name="search"
          className=""
          type="text"
          placeholder="search crypto currency..."
        />
      </div>
      {find.length > 0 && <FilteredSearch search={find} setFind={setFind} />}
    </>
  );
}
