import { z } from "zod"

export const addTerminalSchema = z.object({
  serial: z.string().min(1, "O número de série é obrigatório"),
  sim_card: z
    .number({ message: "O sim card deve ser um número" })
    .int({ message: "O sim card deve ser um número inteiro" })
    .min(1, "O sim card é obrigatório"),
  pin: z
    .number()
    .int({ message: "O pin deve ser um número inteiro" })
    .min(4, "O pin deve ter 4 dígitos")
    .max(4, "O pin deve ter 4 dígitos")
    .optional(),
  puk: z
    .number()
    .int({ message: "O puk deve ser um número inteiro" })
    .min(1, "O puk é obrigatório")
    .optional(),
  agent_id: z.string().min(1, "O id do agente é obrigatório").optional(),
})

export type TAddTerminalDTO = z.infer<typeof addTerminalSchema>
