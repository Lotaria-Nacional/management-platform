import { Pos, PosProps } from "@/domain/pos/enterprise/entities/pos.entity"

export interface IFetchPosRequestDTO {}

export interface IFetchPosResponseDTO {
  pos: Array<{ id: string } & PosProps>
  total: number
  totalPages: number
}
