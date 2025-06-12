import { z } from "zod"
export const editTerminalSchema = z.object({
  id: z.string(),
  serial: z.string().optional(),
  sim_card: z.coerce.number().optional(),
  agent_id: z.string().optional(),
  pin: z.coerce.number().optional(),
  puk: z.coerce.number().optional(),
})

export type EditTerminalDTO = z.infer<typeof editTerminalSchema>
