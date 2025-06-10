import { z } from "zod"

export const addTerminalSchema = z.object({
  id_reference: z.number()
    .int()
    .min(12, "id inválido, deve conter no mínimo 12 caractéres"),
  serial: z.string()
    .min(5, "número de série inválido"),
  sim_card: z.number()
    .int()
    .min(9, "número do SIM inválido"),
  agent_id: z.string()
    .min(12, "id inválido, deve conter no mínimo 12 caractéres")
    .optional(),
})

export type TAddTerminalDTO = z.infer<typeof addTerminalSchema>
