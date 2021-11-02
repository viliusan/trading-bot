type BEP20_BEP20 = {
  price: number;
  base_volume: number;
  quote_volume: number;
  liquidity: number;
  liquidity_BNB: number;
};

export type SummaryData = {
  updated_at: number;
  data: BEP20_BEP20;
};
