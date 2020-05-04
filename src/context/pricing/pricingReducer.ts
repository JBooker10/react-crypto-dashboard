import {
  STREAM_PRICE,
  STREAM_TOP_PRICES,
  STREAM_PRICES,
  STREAM_TICKER,
} from "./../types";

export function pricingReducer(state: any, action: any) {
  switch (action.type) {
    case STREAM_PRICE:
      return {
        ...state,
        price: action.payload,
        loading: false,
      };
    case STREAM_PRICES:
      return {
        ...state,
        prices: action.payload,
        loading: false,
      };
    case STREAM_TOP_PRICES:
      return {
        ...state,
        topPrices: action.payload,
        loading: false,
      };
    case STREAM_TICKER:
      return {
        ...state,
        quote: action.payload,
        loading: false,
      };
    default:
      throw new Error();
  }
}
