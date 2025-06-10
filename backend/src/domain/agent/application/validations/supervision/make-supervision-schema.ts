import { z } from "zod"

export const makeSupervisionSchema = z.object({
  agent_id: z.string(),
  image: z.string(),
  additional_info: z.string().nullable(),
  items: z.record(z.string(), z.boolean()),
})

export type TMakeSupervisionDTO = z.infer<typeof makeSupervisionSchema>
