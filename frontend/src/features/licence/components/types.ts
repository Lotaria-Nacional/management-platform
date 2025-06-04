import { PosEntity } from "@/features/pos/types"

export type LicenceEntity = {
    id:string
    administration_id?:string 
    status:boolean
    reference_id:number
    pos?:Partial<PosEntity>
    created_at:Date
}

export interface IAddLicenceDTO extends Omit<LicenceEntity, "id" | "created_at" | "pos" | "status">{
    image?:File
}