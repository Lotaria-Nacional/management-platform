import { z } from "zod";

export const editPosSchema = z.object({
    id: z.string().min(1,"O id do POS é obrigatório"),
    zone_id: z.string().min(2,"").optional(),
    area_id: z.string().min(2,"").optional(),
    type_id: z.string().min(2,"").optional(),
    city_id: z.string().min(2,"").optional(),
    agent_id: z.string().min(2,"").optional(),
    licence_id: z.string().min(2,"").optional(),
    subtype_id: z.string().min(2,"").optional(),
    province_id: z.string().min(2,"").optional(),
    administration_id: z.string().min(2,"").optional(),
    id_reference: z.number().min(2,"").nullable().optional(),
    latitude: z.coerce
        .number()
        .min(-90, "A latitude mínima é -90")
        .max(90, "A latitude mínima é 90")
        .optional(),
    longitude :z.coerce
        .number()
        .min(-180, "A latitude mínima é -180")
        .max(180, "A latitude mínima é 180")
        .optional()
})

export type EditPosDTO = z.infer<typeof editPosSchema>