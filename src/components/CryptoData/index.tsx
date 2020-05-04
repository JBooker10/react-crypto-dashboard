import React, { useContext, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CryptoTimeSeries from "./CryptoTimeSeries";
import cryptoCurrencyCTX from "../../context/cryptocurrency/cryptoCurrencyContext";
import cryptoStreamCTX from "./../../context/pricing/pricingContext";
import News from "./News";
import Trades from "./Trades";
import Analysis from "./Analysis";
import ErrorNoData from "./ErrorNoData";

export default function CryptoData() {
  const cryptoCTX = useContext(cryptoCurrencyCTX);
  const cryptoStream = useContext(cryptoStreamCTX);
  const {
    tradingSignals,
    getTradingSignals,
    loading,
    searchAsset,
    getDailyOHLCV,
    dailyOHLCV,
    news,
    getNews,
  } = cryptoCTX;
  // const { streamQuote, quote } = cryptoStream;

  useEffect(() => {
    getTradingSignals(searchAsset.symbol);
    getDailyOHLCV("180", searchAsset.symbol);
    // streamQuote(searchAsset.symbol);
    getNews();

    // eslint-disable-next-line
  }, [searchAsset, loading, news.length !== 0]);

  //  F: "1"
  // FSYM: "BTC"
  // ID: "90301121"
  // M: "Coinbase"
  // P: 8823.84
  // Q: 0.03254678
  // RTS: 1588528603
  // RTSNS: 61000000
  // TOTAL: 287.1875792352
  // TS: 1588528602
  // TSYM: "USD"
  // TYPE: "0"

  return (
    <Tabs className="column crypto-data">
      <TabList className="tab tab-block">
        <Tab className="tab-item active">Overview</Tab>
        <Tab className="tab-item active">Analysis</Tab>
        <Tab className="tab-item active">News</Tab>
        <Tab className="tab-item active">Trades</Tab>
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
      <TabPanel>
        <News news={news} />
      </TabPanel>
      <TabPanel>
        <Trades symbol={searchAsset.symbol} />
      </TabPanel>
      <TabPanel>
        <h2>Timeline</h2>
      </TabPanel>
    </Tabs>
  );
}
