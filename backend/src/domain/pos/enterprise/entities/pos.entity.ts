import { CityProps } from "./city.entity"
import { TypeProps } from "./type.entity"
import { ZoneProps } from "./zone.entity"
import { AreaProps } from "./area.entity"
import { Entity } from "@/core/domain/entity"
import { LicenceProps } from "./licence.entity"
import { ProvinceProps } from "./province.entity"
import { AdministrationProps } from "./administration.entity"
import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity"
import { SubtypeProps } from "./subtype.entity"

export type PosProps = {
  id_reference: number
  status: boolean
  coordinates: string[]
  city: Partial<CityProps> & { id: string }
  zone: Partial<ZoneProps> & { id: string }
  type: Partial<TypeProps> & { id: string }
  subtype?: Partial<SubtypeProps> & { id: string }
  area: Partial<AreaProps> & { id: string }
  agent: Partial<AgentProps> & { id: string }
  licence?: Partial<LicenceProps> & { id?: string | null }
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

  // id_reference
  get id_reference(): number {
    return this.props.id_reference
  }
  set id_reference(value: number) {
    this.props.id_reference = value
  }

  // status
  get status(): boolean {
    return this.props.status
  }
  set status(value: boolean) {
    this.props.status = value
  }

  // coordinates
  get coordinates(): string[] {
    return this.props.coordinates
  }
  set coordinates(value: string[]) {
    this.props.coordinates = value
  }

  // city
  get city_id(): string {
    return this.props.city.id
  }
  set city_id(value: string) {
    this.props.city.id = value
  }

  // zone
  get zone_id(): string {
    return this.props.zone.id
  }
  set zone_id(value: string) {
    this.props.zone.id = value
  }

  // type
  get type_id(): string {
    return this.props.type.id
  }
  set type_id(value: string) {
    this.props.type.id = value
  }

  // subtype
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

  // area
  get area_id(): string {
    return this.props.area.id
  }
  set area_id(value: string) {
    this.props.area.id = value
  }

  // agent
  get agent_id(): string {
    return this.props.agent.id
  }
  set agent_id(value: string) {
    this.props.agent.id = value
  }

  // licence
  get licence_id() {
    return this.props.licence?.id
  }
  set licence_id(value: string | undefined | null) {
    this.props.licence ? (this.props.licence.id = value) : null
  }

  // province
  get province_id(): string {
    return this.props.province.id
  }
  set province_id(value: string) {
    this.props.province.id = value
  }

  // administration
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

  // administration
  get agent(): Partial<AgentProps> & { id: string } {
    return this.props.agent
  }

  set agent(value: Partial<AgentProps> & { id: string }) {
    if (value) {
      this.props.agent = this.props.agent 
    } else {
      this.props.administration = undefined
    }
  }

  // created_at
  get createdAt(): Date {
    return this.props.created_at!
  }
}
