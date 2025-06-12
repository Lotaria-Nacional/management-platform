import { PosEntity } from "@/features/pos/types"
import { AdministrationEntity, IFetchDataResponse } from "@/app/types"

export type LicenceEntity = {
  id: string
  administration_id?: string
  admin?: Partial<AdministrationEntity>
  pos?: Partial<PosEntity>
  status: boolean
  licence_reference: string
  created_at: Date
}

export interface IAddLicenceDTO
  extends Omit<LicenceEntity, "id" | "created_at" | "pos" | "status"> {
  image?: File
}
export interface IEditLicenceDTO
  extends Omit<Partial<LicenceEntity>, "created_at" | "status"> {
  image?: File
}

export interface IFetchLicencesResponse
  extends IFetchDataResponse<LicenceEntity> {}
