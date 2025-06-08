import { z } from "zod"

export const addLicenceSchema = z.object({
  administration_id: z.string().min(5, "id da administração muito curto"),
  reference_id: z.number().min(5, "id reference muito curto"),
  pos_id: z.string().min(5, "id do pos muito curto").optional(),
})

export type TAddLicenceDTO = z.infer<typeof addLicenceSchema>
