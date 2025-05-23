export interface IAddPosRequestDTO {
    id_reference:number
    coordinates:number[]
    province:string
    city:string
    area:string
    zone:string
    type:string
    subtype?:string
    licence:string 
    agent_id:string
    status: boolean
    administration:string
}

export interface IAddPosResponseDTO  {}