import ProductsResponse from "./ProductsResponse";

type ProductsTableData = ProductsResponse & {
  category: string;
}

export default ProductsTableData;