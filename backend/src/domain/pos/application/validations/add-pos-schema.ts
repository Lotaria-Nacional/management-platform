import { z } from "zod"

export const addPosSchema = z.object({
  coordinates: z.array(z.string()),
  province_id: z.string().min(12, "id da província não é válido").max(12),
  city_id: z.string().min(12, "id da cidade não é válido").max(12),
  area_id: z.string().min(12, "id da área não é válido").max(12),
  zone_id: z.string().min(12, "id da zona não é válido").max(12),
  type_id: z.string().min(12, "id do tipo não é válido").max(12),
  subtype_id: z.string().min(12, "id do subtipo não é válido").max(12),
  licence_id: z
    .string()
    .min(12, "id da licença não é válido")
    .max(12)
    .optional()
    .nullable(),
  agent_id: z.string().min(5, "o id refence do agente é muito curto").max(5),
  administration_id: z
    .string()
    .min(12, "id da administração não é válido")
    .max(12)
    .optional(),
})

export type TAddPosDTO = z.infer<typeof addPosSchema>
