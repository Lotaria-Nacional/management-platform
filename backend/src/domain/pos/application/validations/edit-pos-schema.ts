import { z } from "zod"

export const editPosSchema = z.object({
  id: z.string().min(1, "o id do pos é obrigatório"),
  latitude: z
    .number()
    .min(-90, "A latitude mínima é -90")
    .max(90, "A latitude máxima é 90")
    .optional(),
  longitude: z
    .number()
    .min(-180, "A longitude mínima é -180")
    .max(180, "A longitude máxima é 180")
    .optional(),
  province_id: z.string().optional(),
  city_id: z.string().optional(),
  area_id: z.string().optional(),
  zone_id: z.string().optional(),
  type_id: z.string().optional(),
  subtype_id: z.string().optional(),
  agent_id: z.string().optional().nullable(),
  licence_id: z.string().optional().nullable(),
  administration_id: z.string().optional(),
})

export type TEditPosDTO = z.infer<typeof editPosSchema>
