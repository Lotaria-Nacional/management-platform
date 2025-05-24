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
  subtype: (Partial<SubtypeProps> & { id: string }) | undefined
  area: Partial<AreaProps> & { id: string }
  agent: Partial<AgentProps> & { id: string }
  licence: Partial<LicenceProps> & { id: string }
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

  get id_reference() {
    return this.props.id_reference
  }
  set id_reference(value: number) {
    this.props.id_reference = value
  }

  get subtype() {
    return this.props.subtype
  }

  get status(): boolean {
    return this.props.status
  }
  set status(value: boolean) {
    this.props.status = value
  }

  get coordinates(): number[] {
    return this.props.coordinates
  }
  set coordinates(value: number[]) {
    this.props.coordinates = value
  }
  get agent_id(): string {
    return this.props.agent.id
  }
  set agent_id(value: string) {
    this.props.agent.id = value
  }
}
