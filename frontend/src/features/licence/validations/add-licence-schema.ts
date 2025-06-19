import { z } from "zod";

export const addLicenceSchema = z.object({
    creation_date: z.string(),
    description: z.string().min(1,"A descrição da licença é obrigatória"),
    licence_number: z.string().min(1,"O número da licença é obrigatório"),
    administration_id:z.string({required_error:"A administração é obrigatória"}).min(1,"A administração é obrigatória"),
    image:z.any().refine(img => img instanceof File).optional().nullable(),
})

export type AddLicenceDTO = z.infer<typeof addLicenceSchema>