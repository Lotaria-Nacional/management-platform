import { z } from "zod"

export const editTerminalSchema = z.object({
  id: z.string().min(1, "O id do terminal é obrigatório"),
  serial: z.string().min(1, "O número de série é obrigatório").optional(),
  sim_card: z
    .coerce
    .string()
    .min(9, "O número do sim deve conter 9 dígitos")
    .max(9, "O número do sim deve conter 9 dígitos")
    .transform(val => Number(val))
    .optional(),
  pin: z
    .number()
    .int({ message: "O pin deve ser um número inteiro" })
    .optional(),
  puk: z
    .number()
    .int({ message: "O puk deve ser um número inteiro" })
    .optional(),
  agent_id: z.string().optional(),
})

export type TEditTerminalDTO = z.infer<typeof editTerminalSchema>
