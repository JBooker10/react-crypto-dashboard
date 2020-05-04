import { createContext } from "react";

interface PriceStreaming {
  price: number;
  prices: any;
  topPrices: any;
  quote: any;
  priceWebSocket: WebSocket;
  pricesWebSocket: WebSocket;
  topPriceWebSocket: WebSocket;
}

const defaultValue = {} as any;
const pricingContext = createContext(defaultValue);
export default pricingContext;
