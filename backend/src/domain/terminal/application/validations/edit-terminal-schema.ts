import { z } from "zod"

export const editTerminalSchema = z.object({
  id: z.string().min(1, "O id do terminal é obrigatório"),
  serial: z.string().min(1, "O número de série é obrigatório").optional(),
  sim_card: z
    .number()
    .int({ message: "O sim card deve ser um número inteiro" })
    .min(1, "O sim card é obrigatório")
    .optional(),
  pin: z
    .number()
    .int({ message: "O pin deve ser um número inteiro" })
    .min(4, "O pin deve ter 4 dígitos")
    .optional(),
  puk: z
    .number()
    .int({ message: "O puk deve ser um número inteiro" })
    .min(1, "O puk é obrigatório")
    .optional(),
  agent_id: z.string().min(1, "O id do agente é obrigatório").optional(),
})

export type TEditTerminalDTO = z.infer<typeof editTerminalSchema>
