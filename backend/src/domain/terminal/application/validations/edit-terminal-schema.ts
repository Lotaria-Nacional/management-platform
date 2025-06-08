import { z } from "zod"

export const editTerminalSchema = z.object({
  id: z.string().min(12, "id deve conter no mínimo 12 caractéres"),
  id_terminal: z
    .string()
    .min(12, "id inválido, deve conter no mínimo 12 caractéres")
    .optional(),
  serial: z.string().min(5, "número de série inválido").optional(),
  sim_card: z.string().min(9, "número do SIM inválido").optional(),
  agent_id: z
    .string()
    .min(12, "id inválido, deve conter no mínimo 12 caractéres")
    .optional(),
})

export type TEditTerminalDTO = z.infer<typeof editTerminalSchema>
