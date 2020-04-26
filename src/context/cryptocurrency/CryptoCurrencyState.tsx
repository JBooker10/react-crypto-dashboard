import React, { useReducer } from "react";
import axios from "axios";

import { cryptoCurrencyReducer } from "./cryptoCurrencyReducer";
import CryptoCurrencyContext from "./cryptoCurrencyContext";

import {
  GET_DAILY_OHLCV,
  GET_ASSET,
  GET_TOP_ASSETS,
  GET_STATISTICS,
  GET_TRADING_SIGNALS,
  GET_NEWS,
  SEARCH_ASSET,
  STREAM_TICKER,
} from "../types";
import { COIN_CAP_URI, CRYPTO_COMPARE_URI } from "./../../config";

export default function CryptoCurrencyState(props: any): JSX.Element {
  const initialState: any = {
    dailyOHLCV: [],
    asset: {},
    assets: [],
    stats: {},
    loading: true,
    quote: {},
    news: [],
    tradingSignals: {},
    searchAsset: {
      symbol: "BTC",
      name: "bitcoin",
    },
  };

  const [state, dispatch] = useReducer(cryptoCurrencyReducer, initialState);

  const getDailyOHLCV = (
    period: string,
    symbol: string,
    history = "histoday"
  ) => {
    axios
      .get(
        `${CRYPTO_COMPARE_URI}v2/${history}?fsym=${symbol}&tsym=USD&limit=${period}`
      )
      .then((res) => {
        dispatch({
          type: GET_DAILY_OHLCV,
          payload: res.data.Data.Data,
        });
      })
      .catch((err) => console.error(err));
  };

  const getAsset = (symbol: string) => {
    axios(`${COIN_CAP_URI}assets/${symbol}`)
      .then((res) => {
        dispatch({
          type: GET_ASSET,
          payload: res.data.data,
        });
      })
      .catch((err) => console.error(err));
  };

  const getStats = (symbol: string) => {
    axios
      .get(`${CRYPTO_COMPARE_URI}pricemultifull?fsyms=${symbol}&tsyms=USD`)
      .then((res) => {
        dispatch({
          type: GET_STATISTICS,
          payload: res.data.RAW[symbol.toUpperCase()].USD,
        });
      })
      .catch((err) => console.error(err));
  };

  const getTopAssets = (): void => {
    axios(`${COIN_CAP_URI}assets`)
      .then((res) => {
        dispatch({
          type: GET_TOP_ASSETS,
          payload: res.data.data,
        });
      })
      .catch((err) => console.error(err));
  };

  const getTradingSignals = (symbol: string) => {
    axios(
      `${CRYPTO_COMPARE_URI}tradingsignals/intotheblock/latest?fsym=${symbol}`
    )
      .then((res) => {
        dispatch({
          type: GET_TRADING_SIGNALS,
          payload: res.data.Data,
        });
      })
      .catch((err) => console.error(err));
  };

  const streamQuote = (symbol: string) => {
    var ccStreamer = new WebSocket("wss://streamer.cryptocompare.com/v2");

    ccStreamer.onopen = function onStreamOpen() {
      var subRequest = {
        action: "SubAdd",
        subs: [`0~Coinbase~${symbol}~USD`],
      };
      ccStreamer.send(JSON.stringify(subRequest));
    };

    ccStreamer.onmessage = function onStreamMessage(message) {
      const data = JSON.stringify(message.data);
      dispatch({
        type: STREAM_TICKER,
        payload: data,
      });
      console.error("Received from Cryptocompare: " + data);
    };
  };

  const searchNewAsset = (symbol: string, name: string) => {
    dispatch({
      type: SEARCH_ASSET,
      payload: {
        symbol,
        name,
      },
    });
  };

  const getNews = () => {
    axios(`${CRYPTO_COMPARE_URI}v2/news/?lang=EN`)
      .then((res) => {
        dispatch({
          type: GET_NEWS,
          payload: res.data.Data,
        });
      })
      .catch((err) => console.error(err));
  };

  const {
    searchAsset,
    asset,
    assets,
    dailyOHLCV,
    news,
    loading,
    stats,
    pricesWs,
    tradingSignals,
    quote,
  } = state;

  return (
    <CryptoCurrencyContext.Provider
      value={{
        asset,
        assets,
        dailyOHLCV,
        news,
        loading,
        stats,
        searchAsset,
        pricesWs,
        tradingSignals,
        quote,

        getDailyOHLCV,
        getNews,
        getTopAssets,
        getTradingSignals,
        getAsset,
        getStats,
        searchNewAsset,
        streamQuote,
      }}
    >
      {props.children}
    </CryptoCurrencyContext.Provider>
  );
}
