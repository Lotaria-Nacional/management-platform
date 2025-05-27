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
  coordinates: number[]
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
  get idReference(): number {
    return this.props.id_reference
  }
  set idReference(value: number) {
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
  get coordinates(): number[] {
    return this.props.coordinates
  }
  set coordinates(value: number[]) {
    this.props.coordinates = value
  }

  // city
  get cityId(): string {
    return this.props.city.id
  }
  set cityId(value: string) {
    this.props.city.id = value
  }

  // zone
  get zoneId(): string {
    return this.props.zone.id
  }
  set zoneId(value: string) {
    this.props.zone.id = value
  }

  // type
  get typeId(): string {
    return this.props.type.id
  }
  set typeId(value: string) {
    this.props.type.id = value
  }

  // subtype
  get subtypeId(): string | undefined {
    return this.props.subtype?.id
  }
  set subtypeId(value: string | undefined) {
    if (value) {
      this.props.subtype = { id: value, ...this.props.subtype }
    } else {
      this.props.subtype = undefined
    }
  }

  // area
  get areaId(): string {
    return this.props.area.id
  }
  set areaId(value: string) {
    this.props.area.id = value
  }

  // agent
  get agentId(): string {
    return this.props.agent.id
  }
  set agentId(value: string) {
    this.props.agent.id = value
  }

  // licence
  get licenceId() {
    return this.props.licence?.id
  }
  set licenceId(value: string | undefined | null) {
    this.props.licence ? this.props.licence.id = value : null
  }

  // province
  get provinceId(): string {
    return this.props.province.id
  }
  set provinceId(value: string) {
    this.props.province.id = value
  }

  // administration
  get administrationId(): string | undefined {
    return this.props.administration?.id
  }
  set administrationId(value: string | undefined) {
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
}
