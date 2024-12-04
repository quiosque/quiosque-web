import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(100),
  cost: z.string(),
  quantity: z.number().min(1),
  quantity_min: z.number().min(1),
  measure: z.string(),
})

export default formSchema