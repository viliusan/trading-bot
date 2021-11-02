type BEP20 = {
  name: string;
  symbol: string;
  price: number;
  price_BNB: number;
};

export type TokenData = {
  updated_at: number;
  data: BEP20;
};
