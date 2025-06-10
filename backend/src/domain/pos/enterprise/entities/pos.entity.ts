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

type EditPosProps = {
  latitude: number
  longitude: number
  city_id: string
  zone_id: string
  type_id: string
  subtype_id: string
  area_id: string
  agent_id: string
  licence_id: string
  province_id: string
  administration_id: string
}

export type PosProps = {
  id_reference: number
  status?: boolean
  latitude: number
  longitude: number
  city: Partial<CityProps> & { id: string }
  zone: Partial<ZoneProps> & { id: string }
  type: Partial<TypeProps> & { id: string }
  subtype?: Partial<SubtypeProps> & { id: string }
  area: Partial<AreaProps> & { id: string }
  agent?: Partial<AgentProps> & { id: string }
  licence?: Partial<LicenceProps> & { id: string }
  province: Partial<ProvinceProps> & { id: string }
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
    if (data.agent_id) this.agent_id = data.agent_id
    if (data.administration_id) this.administration_id = data.administration_id
    if (data.area_id) this.area_id = data.area_id
    if (data.zone_id) this.zone_id = data.zone_id
    if (data.type_id) this.type_id = data.type_id
    if (data.subtype_id) this.subtype_id = data.subtype_id
    if (data.licence_id) this.licence_id = data.licence_id
    if (data.province_id) this.province_id = data.province_id
    if (data.latitude) this.latitude = data.latitude
    if (data.longitude) this.longitude = data.longitude
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

  get city_id(): string {
    return this.props.city.id
  }
  set city_id(value: string) {
    this.props.city.id = value
  }

  get zone_id(): string {
    return this.props.zone.id
  }
  set zone_id(value: string) {
    this.props.zone.id = value
  }

  get type_id(): string {
    return this.props.type.id
  }
  set type_id(value: string) {
    this.props.type.id = value
  }

  get subtype_id(): string | undefined {
    return this.props.subtype?.id
  }
  set subtype_id(value: string | undefined) {
    if (value) {
      this.props.subtype = { id: value, ...this.props.subtype }
    } else {
      this.props.subtype = undefined
    }
  }

  get area_id(): string {
    return this.props.area.id
  }
  set area_id(value: string) {
    this.props.area.id = value
  }

  get agent_id() {
    return this.props.agent?.id
  }
  set agent_id(value: string | undefined) {
    if (value) {
      this.props.agent = { id: value, ...this.props.agent }
    } else {
      this.props.agent = undefined
    }
  }

  get licence_id() {
    return this.props.licence?.id
  }
  set licence_id(value: string | undefined) {
    if (value) {
      this.props.licence = { id: value, ...this.props.licence }
    } else {
      this.props.licence = undefined
    }
  }

  get province_id(): string {
    return this.props.province.id
  }
  set province_id(value: string) {
    this.props.province.id = value
  }

  get administration_id(): string | undefined {
    return this.props.administration?.id
  }

  set administration_id(value: string | undefined) {
    if (value) {
      this.props.administration = { id: value, ...this.props.administration }
    } else {
      this.props.administration = undefined
    }
  }

  // created_at
  get createdAt(): Date {
    return this.props.created_at!
  }

  public checkPosStatus() {
    if (this.props.licence) {
      this.status = true
    }
  }
}
