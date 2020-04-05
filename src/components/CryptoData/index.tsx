import React, { useContext, useEffect } from "react";
import CryptoTimeSeries from "./CryptoTimeSeries";
import cryptoCurrencyCTX from "../../context/cryptocurrency/cryptoCurrencyContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Analysis from "./Analysis";
import ErrorNoData from "./ErrorNoData";

export default function CryptoData() {
  const cryptoCTX = useContext(cryptoCurrencyCTX);
  const {
    tradingSignals,
    getTradingSignals,
    loading,
    searchAsset,
    getDailyOHLCV,
    dailyOHLCV
  } = cryptoCTX;

  useEffect(() => {
    getTradingSignals(searchAsset.symbol);
    getDailyOHLCV("180", searchAsset.symbol);

    // eslint-disable-next-line
  }, [searchAsset, loading]);

  return (
    <Tabs className="column crypto-data">
      <TabList className="tab tab-block">
        <Tab className="tab-item active">Overview</Tab>
        <Tab className="tab-item active">Analysis</Tab>
        <Tab className="tab-item active">News</Tab>
        <Tab className="tab-item active">Trade</Tab>
        <Tab className="tab-item active">Timeline</Tab>
      </TabList>

      <TabPanel>
        <CryptoTimeSeries
          getDailyOHLCV={getDailyOHLCV}
          dailyOHLCV={dailyOHLCV}
          symbol={searchAsset.symbol}
        />
      </TabPanel>
      <TabPanel>
        {Object.keys(tradingSignals).length !== 0 ? (
          <Analysis tradingSignals={tradingSignals} />
        ) : (
          <ErrorNoData />
        )}
      </TabPanel>
      <TabPanel></TabPanel>
      <TabPanel>
        <h2>Trade</h2>
      </TabPanel>
      <TabPanel>
        <h2>Timeline</h2>
      </TabPanel>
    </Tabs>
  );
}
