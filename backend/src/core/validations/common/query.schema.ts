import { z } from "zod"

export const QueryParamsSchema = z.object({
  page: z
    .string()
    .optional()
    .transform((value) => (value ? parseInt(value) : undefined))
    .refine((value) => !value || !isNaN(value), {
      message: "A página deve ser um número válido.",
    }),
  limit: z
    .string()
    .optional()
    .transform((value) => (value ? parseInt(value) : undefined))
    .refine((value) => !value || !isNaN(value), {
      message: "O limite deve ser um número válido",
    }),
})
