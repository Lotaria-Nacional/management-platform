import { z } from "zod"

export const editPosSchema = z.object({
  id: z.string().min(1, "O id do POS é obrigatório"),
  zone_id: z.string().optional(),
  area_id: z.string().optional(),
  type_id: z.string().optional(),
  city_id: z.string().optional(),
  agent_id: z.string().optional(),
  licence_id: z.string().optional(),
  subtype_id: z.string().optional(),
  province_id: z.string().optional(),
  administration_id: z.string().optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
})

export type EditPosDTO = z.infer<typeof editPosSchema>
