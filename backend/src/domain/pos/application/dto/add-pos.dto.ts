export interface IAddPosRequestDTO {
    id_pos:string
    id_reference_pos:string | null
    coordinates:number[]
    type:string
    subtype:string
    admin:string
    licence:string 
    zone:string
    area:string
    city:string
    province:string
    agent_id:string
}

export interface IAddPosResponseDTO  {}