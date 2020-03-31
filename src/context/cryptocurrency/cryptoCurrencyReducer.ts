import { GET_WS_PRICE, GET_DAILY_OHLCV, GET_ASSET } from "../types";

export function cryptoCurrencyReducer(state: any, action: any) {
  switch (action.type) {
    case GET_WS_PRICE:
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
    default:
      throw new Error();
  }
}
