import { ParsedRowDTO } from "@/domain/file/enterprise/dtos/parsed-row-dto"

export class FileData {
  private readonly data: ParsedRowDTO

  constructor(data: ParsedRowDTO) {
    this.data = data
  }

  // Exemplo: somar todas as colunas numéricas que terminam com "_DEPOSIT"
  getTotalDeposits(): number {
    return Object.entries(this.data)
      .filter(([key, value]) => key.endsWith("_DEPOSIT") && typeof value === "number")
      .reduce((sum, [, value]) => sum + (value as number), 0)
  }

  getAgentId(): number | undefined {
    const raw = this.data["AGENT ID"]
    return typeof raw === "number" ? raw : Number(raw) || undefined
  }

  toObject(): ParsedRowDTO & { totalDeposits: number } {
    return {
      ...this.data,
      totalDeposits: this.getTotalDeposits(),
    }
  }
}