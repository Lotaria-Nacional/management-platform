import { RawData } from "@/core/types/raw-data.type"
import { safeString } from "@/shared/utils/safe-string"
import { Agent } from "../../enterprise/entities/agent.entity"

export class XlsxAgentMapper {
  static toAgents(rawData: RawData[]) {
    return rawData.map((item) =>
      Agent.create({
        agent_id: safeString(item["ID"] || item["agent_id"]),
        first_name: safeString(item["NOME"] || item["first_name"]),
        last_name: safeString(item["SOBRENOME"] || item["last_name"]),
        phone: safeString(item["Nº TELEFONE"] || item["phone"]),
        afrimoney: item["Afrimoney"] || null,
        status: safeString(item["ESTADO"] || item["status"]),
      })
    )
  }
}
