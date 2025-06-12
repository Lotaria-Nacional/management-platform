import { z } from "zod";

export const editLicenceSchema = z.object({
    id:z.string().min(1, "O id da licença é obrigatório"),
    licence_reference: z.string().optional(),
    administration_id:z.string().optional(),
    image:z.instanceof(FileList).optional().nullable()
})

export type EditLicenceDTO = z.infer<typeof editLicenceSchema>