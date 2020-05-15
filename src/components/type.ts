export interface SVGIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface Asset {
  symbol: string;
  name: string;
}

export type Sentiment = "bullish" | "bearish";

export interface TradingSignals {
  id: number;
  partner_symbol: string;
  symbol: string;
  time: number;
  largetxsVar: Signal;
  addressesNetGrowth: Signal;
  concentrationVar: Signal;
  inOutVar: Signal;
}

export interface Signal {
  category: string;
  score: number;
  score_threshold_bearish: number;
  score_threshold_bullish: number;
  sentiment: Sentiment;
  value: number;
}
