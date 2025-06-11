import { z } from "zod"

export const addPosSchema = z.object({
  latitude: z.number()
    .min(-90,"A latitude mínima é -90")
    .max(90,"A latitude máxima é 90"),
  longitude: z.number()
    .min(-180,"A longitude mínima é -180")
    .max(180,"A longitude máxima é 180"),
  province_id: z.string()
    .min(1, "A província é obrigatória")
    .nonempty(),
  city_id: z.string()
    .min(1, "A cidade é obrigatória")
    .nonempty(),
  area_id: z.string()
    .min(1, "A área é obrigatória")
    .nonempty(),
  zone_id: z.string()
    .min(1, "A zona é obrigatória")
    .nonempty(),
  type_id: z.string()
    .min(1, "O tipo de POS é obrigatório")
    .nonempty(),
  subtype_id: z.string().optional(),
  licence_id: z.string().optional(),
  agent_id: z.string().optional(),
  administration_id: z.string().optional(),
})

export type TAddPosDTO = z.infer<typeof addPosSchema>
