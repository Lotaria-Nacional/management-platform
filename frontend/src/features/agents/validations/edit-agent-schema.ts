import { z } from "zod"
export const editAgentSchema = z.object({
  id: z.string(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z.coerce.number().nullable().optional(),
  type: z.enum(["REVENDEDOR", "LOTARIA-NACIONAL"]).optional(),
  afrimoney: z.coerce.number().nullable().optional(),
  pos_id: z.string().optional(),
  status: z.string().optional(),
  terminal_id: z.string().optional(),
})

export type EditAgentDTO = z.infer<typeof editAgentSchema>
