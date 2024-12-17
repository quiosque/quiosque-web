type ProductFormValues = {
  id?: number | null;
  category_id: number | null;
  store_id: number;
  name: string;
  description: string;
  price: number;
  items: Item[];
};

export type Item = {
  item_id: number;
  item_quantity: number;
};

export default ProductFormValues