import React, { useReducer } from "react";
import axios from "axios";

import { cryptoCurrencyReducer } from "./cryptoCurrencyReducer";
import CryptoCurrencyContext from "./cryptoCurrencyContext";

import {
  GET_DAILY_OHLCV,
  GET_WS_PRICE,
  GET_ASSET,
  GET_STATISTICS
} from "../types";
import {
  COIN_CAP_URI,
  CRYPTO_COMPARE_URI,
  COIN_CAP_WS_URI
} from "./../../config";

export default function CryptoCurrencyState(props: any): JSX.Element {
  const initialState: any = {
    price: 0.0,
    dailyOHLCV: [],
    asset: {},
    stats: {},
    loading: true
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
      .then(res => {
        dispatch({
          type: GET_DAILY_OHLCV,
          payload: res.data.Data.Data
        });
      })
      .catch(err => console.log(err));
  };

  const getAsset = (symbol: string) => {
    axios(`${COIN_CAP_URI}assets/${symbol}`)
      .then(res => {
        dispatch({
          type: GET_ASSET,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err));
  };

  const getStats = (symbol: string) => {
    axios
      .get(`${CRYPTO_COMPARE_URI}pricemultifull?fsyms=${symbol}&tsyms=USD`)
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_STATISTICS,
          payload: res.data.DISPLAY[symbol.toUpperCase()].USD
        });
      })
      .catch(err => console.log(err));
  };

  const getRealTimePrice = (symbol: string): void => {
    const pricesWs = new WebSocket(`${COIN_CAP_WS_URI}prices?assets=${symbol}`);
    pricesWs.onmessage = (msg: any) => {
      const data = JSON.parse(msg.data);
      dispatch({
        type: GET_WS_PRICE,
        payload: data[symbol]
      });
    };
  };

  const { asset, dailyOHLCV, price, loading, stats } = state;

  return (
    <CryptoCurrencyContext.Provider
      value={{
        asset,
        dailyOHLCV,
        price,
        loading,
        stats,

        getDailyOHLCV,
        getRealTimePrice,
        getAsset,
        getStats
      }}
    >
      {props.children}
    </CryptoCurrencyContext.Provider>
  );
}
