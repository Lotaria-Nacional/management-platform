import { z } from "zod"
export const addTerminalSchema = z.object({
  serial: z.string().min(1, "número de série é obrigatório"),
  sim_card: z.string().min(1, "O cartão sim é obrigatório"),
  pin: z.coerce
    .number()
    .optional()
    .nullable()
    .refine(
      (val) => val === null || val === undefined || val.toString().length === 4,
      { message: "O pin deve conter 4 dígitos" }
    ),
  puk: z.coerce.number().optional().nullable(),
  agent_id: z.string().optional(),
})

export type AddTerminalDTO = z.infer<typeof addTerminalSchema>
