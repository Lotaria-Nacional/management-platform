import { z } from "zod"

export const editSupervisionSchema = z.object({
  id: z.string(),
  agent_id: z.string().optional(),
  image: z.string().optional(),
  additional_info: z.string().nullable().optional(),
  items: z.record(z.string(), z.boolean()).optional(),
})

export type TEditSupervisionDTO = z.infer<typeof editSupervisionSchema>
