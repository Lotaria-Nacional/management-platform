import { CityProps } from "./city.entity"
import { TypeProps } from "./type.entity"
import { ZoneProps } from "./zone.entity"
import { AreaProps } from "./area.entity"
import { Entity } from "@/core/domain/entity"
import { SubtypeProps } from "./subtype.entity"
import { LicenceProps } from "./licence.entity"
import { ProvinceProps } from "./province.entity"
import { AdministrationProps } from "./administration.entity"
import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity"

export type EditPosProps = {
  latitude: number
  longitude: number
  city_id: string
  zone_id: string
  type_id: string
  subtype_id: string
  area_id: string
  agent_id?: string | null
  licence_id?: string | null
  province_id: string
  administration_id: string
}

export type PosProps = {
  id_reference: number
  status?: boolean
  latitude: number
  longitude: number
  city_id?:string,
  zone_id?:string,
  type_id?:string,
  area_id?:string,
  province_id?:string,
  subtype_id?:string,
  agent_id?:string,
  licence_id?:string,
  administration_id?:string,

  city?: Partial<CityProps> & { id: string }
  zone?: Partial<ZoneProps> & { id: string }
  type?: Partial<TypeProps> & { id: string }
  subtype?: Partial<SubtypeProps> & { id: string }
  area?: Partial<AreaProps> & { id: string }
  agent?: Partial<AgentProps> & { id: string }
  licence?: Partial<LicenceProps> & { id: string }
  province?: Partial<ProvinceProps> & { id: string }
  administration?: Partial<AdministrationProps> & { id: string }

  created_at?: Date
}

export class Pos extends Entity<PosProps> {
  static create(props: PosProps, id?: string) {
    return new Pos(
      {
        ...props,
        created_at: props.created_at ?? new Date(),
      },
      id
    )
  }

  update(data: Partial<EditPosProps>) {
    if (data.province_id) this.province_id = data.province_id
    if (data.area_id) this.area_id = data.area_id
    if (data.zone_id) this.zone_id = data.zone_id
    if (data.type_id) this.type_id = data.type_id
    if (data.subtype_id) this.subtype_id = data.subtype_id
    if (data.latitude) this.latitude = data.latitude
    if (data.longitude) this.longitude = data.longitude
    if (data.administration_id) this.administration_id = data.administration_id
    
    if (data.agent_id){
      this.agent_id = data.agent_id
    }else if("agent_id" in data && !data.agent_id ){
      this.agent_id = undefined
    } 

    if (data.licence_id ){
      this.licence_id = this.licence_id = data.licence_id
    } else if("licence_id" in data && !data.licence_id) {
      this.licence_id = undefined
    }
  }

  get id_reference() {
    return this.props.id_reference
  }

  set id_reference(value: number) {
    this.props.id_reference = value
  }

  set status(value: boolean | undefined) {
    this.props.status = value
  }

  get status() {
    return this.props.status
  }

  get latitude() {
    return this.props.latitude
  }
  set latitude(value: number) {
    this.props.latitude = value
  }

  get longitude() {
    return this.props.longitude
  }
  set longitude(value: number) {
    this.props.longitude = value
  }

  get city_id() {
    return this.props.city_id
  }
  set city_id(value: string | undefined) {
    this.props.city_id = value
  }

  get zone_id() {
    return this.props.zone_id
  }
  set zone_id(value: string | undefined) {
    this.props.zone_id = value
  }

  get type_id() {
    return this.props.type_id
  }
  set type_id(value: string | undefined) {
    this.props.type_id = value
  }

  get subtype_id(): string | undefined {
    return this.props.subtype_id
  }
  set subtype_id(value: string | undefined) {
      this.props.subtype_id = value
  }

  get area_id() {
    return this.props.area_id
  }
  set area_id(value: string | undefined) {
    this.props.area_id = value
  }

  get agent_id() {
    return this.props.agent_id
  }

  set agent_id(value: string | undefined) {
    this.props.agent_id = value
  }

  get licence_id() {
    return this.props.licence_id
  }

  set licence_id(value: string | undefined) {
    this.props.licence_id = value
  }

  get province_id() {
    return this.props.province_id
  }
  set province_id(value: string | undefined) {
    this.props.province_id = value
  }

  get administration_id(): string | undefined {
    return this.props.administration_id
  }

  set administration_id(value: string | undefined) {
    this.props.administration_id = value
  }

  // created_at
  get createdAt(): Date {
    return this.props.created_at!
  }

  public checkPosStatus() {
    if (this.props.agent) {
      this.status = false
    }else {
      this.status = true
    }
  }
}
