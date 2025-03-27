import { z } from "zod"

const formSchema = z.object({
  name: z.string({
    required_error: "Campo obrigatório",
  }).min(2).max(50),
  description: z.string().min(2).max(100),
  type: z.string(),
  recurrency: z.string(),
  cost: z.string(),
})

export default formSchema