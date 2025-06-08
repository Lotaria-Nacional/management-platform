import { z } from "zod"

export const editLicenceSchema = z.object({
  administration_id: z
    .string()
    .min(5, "id da administração muito curto")
    .optional(),
  status: z.boolean().optional(),
  pos_id: z.string().min(5, "id do pos muito curto").optional(),
  reference_id: z.number().min(5, "id reference muito curto").optional(),
})
