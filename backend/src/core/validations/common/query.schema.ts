// import { AgentStatusEnum } from "@/domain/agent/enterprise/enums/agent-status"
import { AgentStatusEnum } from "@/domain/agent/enterprise/enums/agent-status"
import { z } from "zod"

export const QueryParamsSchema = z.object({
  page: z.coerce.number().default(1), // padrão definido aqui
  limit: z.coerce.number().default(10),
  area_id: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
  zone_id: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
  city_id: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
  province_id: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
  type_id: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
  status: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
})
