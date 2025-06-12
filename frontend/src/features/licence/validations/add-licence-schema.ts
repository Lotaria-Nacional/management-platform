import { z } from "zod";

export const addLicenceSchema = z.object({
    licence_reference: z.string().min(1,"A referência da licença é obrigatória"),
    administration_id:z.string({required_error:"A administração é obrigatória"}).min(1,"A administração é obrigatória"),
    image:z.any().refine(img => img instanceof File).optional().nullable(),
})

export type AddLicenceDTO = z.infer<typeof addLicenceSchema>