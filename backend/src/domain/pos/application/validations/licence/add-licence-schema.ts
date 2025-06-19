import { z } from "zod"

export const addLicenceSchema = z.object({
  administration_id: z.string().min(1, "Id da administração muito curto"),
  description: z.string().min(1, "A descrição da licença é obrigatória"),
  licence_number: z.string().min(1, "O número da licença é obrigatório"),
  creation_date: z.coerce.date({ invalid_type_error:"Insira uma data válida", message:"A data de criação da licença é obrigatória" }),
  pos_id: z.string().optional(),
})

export type TAddLicenceDTO = z.infer<typeof addLicenceSchema>
