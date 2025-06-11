import { z } from "zod"

export const addTerminalSchema = z.object({
  serial: z.string().min(1, "O número de série é obrigatório"),
  sim_card: z.coerce
      .string()
      .min(9, "O número do sim deve conter 9 dígitos")
      .max(9, "O número do sim deve conter 9 dígitos")
      .transform(val => Number(val)),
  pin: z.coerce
      .string()
      .min(4, "O pin deve conter 4 dígitos")
      .max(4, "O pin deve conter 4 dígitos")
      .transform(val => Number(val))
      .optional(),
  puk: z
    .number()
    .int({ message: "O puk deve ser um número inteiro" })
    .optional(),
  agent_id: z.string().optional(),
})

export type TAddTerminalDTO = z.infer<typeof addTerminalSchema>
