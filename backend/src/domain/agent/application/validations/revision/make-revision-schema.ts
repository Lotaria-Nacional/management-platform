import { z } from "zod"

export const makeRevisionSchema = z.object({
  agent_id: z.string(),
  image: z.string(),
  additional_info: z.string().nullable(),
  items: z.record(z.string(), z.boolean()),
})

export type TMakeRevisionDTO = z.infer<typeof makeRevisionSchema>
