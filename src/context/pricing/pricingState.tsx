import React, { useReducer } from "react";
import { pricingReducer } from "./pricingReducer";
import PricingContext from "./pricingContext";

import { COIN_CAP_WS_URI } from "./../../config";
import { STREAM_PRICE, STREAM_PRICES, STREAM_TOP_PRICES } from "../types";

export default function PriceStreamingState(props: any) {
  const initialState: any = {
    price: null,
    prices: {},
    topPrices: {},
    priceWebSocket: null,
    pricesWebSocket: null,
    topPriceWebSocket: null
  };

  const [state, dispatch] = useReducer(pricingReducer, initialState);

  const streamPrice = (symbol: string) => {
    state.priceWebSocket = new WebSocket(
      `${COIN_CAP_WS_URI}prices?assets=${symbol}`
    );
    state.priceWebSocket.onmessage = (msg: any) => {
      const data = JSON.parse(msg.data);
      dispatch({
        type: STREAM_PRICE,
        payload: data[symbol]
      });
    };
    state.priceWebSocket.onerror = (err: Error) => console.warn(err);
  };

  const streamPrices = () => {
    state.pricesWebSocket = new WebSocket(
      `${COIN_CAP_WS_URI}prices?assets=ALL`
    );
    state.pricesWebSocket.onmessage = (msg: any) => {
      const data = JSON.parse(msg.data);
      console.log(data);
      dispatch({
        type: STREAM_PRICES,
        payload: data
      });
    };
    state.pricesWebSocket.onerror = (err: Error) => console.warn(err);
  };

  const streamTopPrices = (...symbols: string[]) => {
    state.topPriceWebSocket = new WebSocket(
      `${COIN_CAP_WS_URI}prices?assets=${symbols.join()}`
    );
    state.topPriceWebSocket.onmessage = (msg: any) => {
      const data = JSON.parse(msg.data);
      console.log(data);
      dispatch({
        type: STREAM_TOP_PRICES,
        payload: data
      });
    };
    state.topPriceWebSocket.onerror = (err: Error) => console.warn(err);
  };

  const { price, prices, topPrices } = state;

  return (
    <PricingContext.Provider
      value={{
        price,
        prices,
        topPrices,

        streamTopPrices,
        streamPrice,
        streamPrices
      }}
    >
      {props.children}
    </PricingContext.Provider>
  );
}
