export interface Agent {
  _id: string
  props: {
    agent_id: string
    afrimoney: string
    area: string
    city: string
    name: string
    lastname: string
    phone_number: string
    province: string
    status: string
    zone: string
  }
}

export interface RegisterAgentRequestDTO {
  afrimoney: string
  area: string
  city: string
  name: string
  lastname: string
  phone_number: string
  province: string
  status: string
  zone: string
}

export interface VerifyAgentRequestDTO {
  items:string[]
  additional_info:string
  image:File
}
