type BNB_BEP20 = {
  pair_address: string;
  base_name: string;
  base_symbol: string;
  base_address: string;
  quote_name: string;
  quote_symbol: string;
  quote_address: string;
  price: number;
  base_volume: number;
  quote_volume: number;
  liquidity: number;
  liquidity_BNB: number;
};

export type PairsData = {
  updated_at: number;
  data: BNB_BEP20;
};
