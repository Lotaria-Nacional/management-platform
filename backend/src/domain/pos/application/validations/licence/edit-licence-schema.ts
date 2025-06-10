import { z } from "zod"

export const editLicenceSchema = z.object({
  id: z.string(),
  administration_id: z
    .string()
    .min(5, "id da administração muito curto")
    .optional(),
  status: z.boolean().optional(),
  pos_id: z.string().min(5, "id do pos muito curto").optional(),
  licence_reference: z.string().min(1, "referência da licença é obrigatória").optional(),
})

export type TEditLicenceDTO = z.infer<typeof editLicenceSchema>
