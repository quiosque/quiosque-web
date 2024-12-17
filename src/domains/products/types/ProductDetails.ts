import { Item } from "@/domains/items/types"

type ProductDetails = {
  categoryId?: number
  category_id: number
  store_id: number
  name: string
  description: string
  price: number
  items: Item[]
}

export default ProductDetails;