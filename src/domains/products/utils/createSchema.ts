import { z } from "zod"

const formSchema = z.object({
  id: z.number().nullable(),
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(100),
  price: z.string(),
  category_id: z.number().nullable(),
  items: z.array(
    z.object({
      item_id: z.number(),
      item_quantity: z.number().min(1),
    })
  ),
})

export default formSchema