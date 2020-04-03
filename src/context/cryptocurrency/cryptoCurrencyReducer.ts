import {
  GET_WS_PRICE,
  CLOSE_WS_PRICE,
  GET_DAILY_OHLCV,
  GET_ASSET,
  GET_STATISTICS,
  GET_TOP_ASSETS,
  SEARCH_ASSET,
  GET_TRADING_SIGNALS,
  STREAM_TICKER
} from "../types";

export function cryptoCurrencyReducer(state: any, action: any) {
  switch (action.type) {
    case GET_WS_PRICE:
      return {
        ...state,
        price: action.payload,
        loading: false
      };
    case CLOSE_WS_PRICE:
      return {
        ...state,
        price: action.payload,
        loading: false
      };
    case GET_DAILY_OHLCV:
      return {
        ...state,
        dailyOHLCV: action.payload,
        loading: false
      };
    case GET_ASSET:
      return {
        ...state,
        asset: action.payload,
        loading: false
      };
    case GET_STATISTICS:
      return {
        ...state,
        stats: action.payload,
        loading: false
      };
    case GET_TOP_ASSETS:
      return {
        ...state,
        assets: action.payload,
        loading: false
      };
    case GET_TRADING_SIGNALS:
      return {
        ...state,
        tradingSignals: action.payload,
        loading: false
      };
    case SEARCH_ASSET:
      return {
        ...state,
        searchAsset: action.payload,
        loading: false
      };
    case STREAM_TICKER:
      return {
        ...state,
        quote: action.payload,
        loading: false
      };
    default:
      throw new Error();
  }
}
