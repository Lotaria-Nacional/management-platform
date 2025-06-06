export interface IAddLicenceDTO {
    administration_id:string 
    reference_id:number
    pos_id?:string
}

export interface IEditLicenceDTO {
    id:string
    administration_id?:string 
    status?:boolean
    reference_id?:number
    pos_id?:string
}