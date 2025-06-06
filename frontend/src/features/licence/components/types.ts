import { AdministrationEntity, IFetchDataResponse } from "@/app/types"
import { PosEntity } from "@/features/pos/types"

export type LicenceEntity = {
    id:string
    administration_id?:string 
    status:boolean
    reference_id:number
    pos?:Partial<PosEntity>
    admin?:Partial<AdministrationEntity>
    created_at:Date
}

export interface IAddLicenceDTO extends Omit<LicenceEntity, "id" | "created_at" | "pos" | "status">{
    image?:File
}
export interface IEditLicenceDTO extends Omit<Partial<LicenceEntity>, "created_at" | "status">{
    image?:File
}

export interface IFetchLicencesResponse extends IFetchDataResponse<LicenceEntity>{}