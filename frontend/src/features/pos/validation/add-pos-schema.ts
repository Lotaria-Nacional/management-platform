import { z } from "zod";

export const addPosSchema = z.object({
    subtype_id: z.string().optional(),
    id_reference: z.coerce.number().optional(),
    agent_id: z.string().min(1,"O agente é obrigatório").optional(),
    licence_id: z.string().min(1,"A licença é obrigatória").optional(),
    area_id: z.string({required_error:"A área é obrigatória"}).nonempty(),
    type_id: z.string({required_error:"O tipo é obrigatório"}).nonempty(),
    zone_id: z.string({required_error:"A zona é obrigatória"}).nonempty(),
    city_id: z.string({required_error:"A cidade é obrigatória"}).nonempty(),
    province_id: z.string({ required_error: "A província é obrigatória*" }).nonempty(),
    administration_id: z.string({required_error:"A administração é obrigatória"}).nonempty(),

    latitude: z.coerce
    .number({ required_error: "A latitude é obrigatória" })
    .min(-90, "Latitude mínima é -90")
    .max(90, "Latitude máxima é 90"),
  
    longitude: z.coerce
    .number({ required_error: "A longitude é obrigatória" })
    .min(-180, "Longitude mínima é -180")
    .max(180, "Longitude máxima é 180"),
})

export type AddPosDTO = z.infer<typeof addPosSchema>    