export type Sale = {
  store_id: number;
  sold_at: string;
  total_value: number;
  products: Product[];
  user_id: number;
};

export type Product = {
  id: number;
  quantity: number;
};

export type SaleResponseData = {
  id: number;
  products: {
    id: number;
    name: string;
    quantity: number;
    value: number;
  }[];
  total_value: number;
  sold_at: string;
};
