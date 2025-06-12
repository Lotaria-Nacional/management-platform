import { z } from "zod"

export const addPosSchema = z.object({
  subtype_id: z.string().optional(),
  agent_id: z.string().optional(),
  licence_id: z.string().optional(),
  area_id: z.string({ required_error: "A área é obrigatória" }).nonempty(),
  type_id: z.string({ required_error: "O tipo é obrigatório" }).nonempty(),
  zone_id: z.string({ required_error: "A zona é obrigatória" }).nonempty(),
  city_id: z.string({ required_error: "A cidade é obrigatória" }).nonempty(),
  province_id: z
    .string({ required_error: "A província é obrigatória*" })
    .nonempty(),
  administration_id: z.string().optional(),

  latitude: z.coerce
    .number({ invalid_type_error:"A latitude deve ser um número", required_error: "A latitude é obrigatória" })
    .min(-90, "Latitude mínima é -90")
    .max(90, "Latitude máxima é 90"),

  longitude: z.coerce
    .number({invalid_type_error:"A longitude deve ser um número" ,required_error: "A longitude é obrigatória" })
    .min(-180, "Longitude mínima é -180")
    .max(180, "Longitude máxima é 180"),

})

export type AddPosDTO = z.infer<typeof addPosSchema>
