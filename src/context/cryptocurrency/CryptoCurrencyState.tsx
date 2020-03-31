import React, { useReducer } from "react";
import axios from "axios";

import { cryptoCurrencyReducer } from "./cryptoCurrencyReducer";
import CryptoCurrencyContext from "./cryptoCurrencyContext";
import { GET_DAILY_OHLCV, GET_WS_PRICE, GET_ASSET } from "../types";

const cryptoCompareAPI = "https://min-api.cryptocompare.com/data/v2/";
const coinCapAPI = "wss://ws.coincap.io/";

export default function CryptoCurrencyState(props: any): JSX.Element {
  const initialState: any = {
    price: 0.0,
    dailyOHLCV: [],
    asset: {},
    loading: true
  };

  const [state, dispatch] = useReducer(cryptoCurrencyReducer, initialState);

  const getDailyOHLCV = (period: string, symbol: string) => {
    axios
      .get(
        `${cryptoCompareAPI}histoday?fsym=${symbol}&tsym=USD&limit=${period}`
      )
      .then(res => {
        dispatch({
          type: GET_DAILY_OHLCV,
          payload: res.data.Data.Data
        });
      })
      .then(err => console.log(err));
  };

  const getAsset = (symbol: string) => {
    axios(`${coinCapAPI}v2/assets/${symbol}`)
      .then(res =>
        dispatch({
          type: GET_ASSET,
          payload: res.data.data
        })
      )
      .catch(err => console.log(err));
  };

  const getRealTimePrice = (symbol: string): void => {
    const pricesWs = new WebSocket(`${coinCapAPI}prices?assets=${symbol}`);
    pricesWs.onmessage = (msg: any) => {
      const data = JSON.parse(msg.data);
      dispatch({
        type: GET_WS_PRICE,
        payload: data[symbol]
      });
    };
  };

  const { asset, dailyOHLCV, price, loading } = state;

  return (
    <CryptoCurrencyContext.Provider
      value={{
        asset,
        dailyOHLCV,
        price,
        loading,

        getDailyOHLCV,
        getRealTimePrice,
        getAsset
      }}
    >
      {props.children}
    </CryptoCurrencyContext.Provider>
  );
}
