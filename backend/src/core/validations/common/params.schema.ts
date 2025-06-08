import { z } from "zod"

export const IdParamsSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
})
