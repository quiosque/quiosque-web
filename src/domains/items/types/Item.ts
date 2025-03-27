type Item = {
  id?: number
  store_id?: number
  name: string
  description: string
  cost: number
  quantity: number
  quantity_min: number
  measure: string
  totalCost?: number
  item_quantity?: number
}

export default Item;