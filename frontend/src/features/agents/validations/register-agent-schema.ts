import { z } from "zod"
export const registerAgentSchema = z.object({
  first_name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(50, "Nome muito longo"),
  last_name: z
    .string()
    .min(2, "o sobrenome deve ter pelo menos 2 caracteres")
    .max(50, "Sobrenome muito longo"),
  phone: z.coerce
    .number()
    .int()
    .refine((val) => val.toString().length === 9, {
      message: "O número de telefone deve ter 9 dígitos",
    }),
  afrimoney: z.coerce.number().optional().nullable(),
  type: z.enum(["REVENDEDOR", "LOTARIA-NACIONAL"]),
  pos_id: z.string().min(1, "POS é obrigatório").optional(),
  terminal_id: z.string().min(1, "Terminal é obrigatório").optional(),
})

export type RegisterAgentDTO = z.infer<typeof registerAgentSchema>
