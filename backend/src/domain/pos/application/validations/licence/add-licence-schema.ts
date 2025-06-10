import { z } from "zod"

export const addLicenceSchema = z.object({
  administration_id: z.string().min(5, "id da administração muito curto"),
  licence_reference: z.string().min(1, "referência da licença é obrigatória"),
  pos_id: z.string().min(5, "id do pos muito curto").optional(),
})

export type TAddLicenceDTO = z.infer<typeof addLicenceSchema>
