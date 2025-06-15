import { Entity } from "@/core/domain/entity"
import { AgentType } from "../enums/agent-type"
import { SupervisionProps } from "./supervision.entity"
import { AgentStatus, AgentStatusEnum } from "../enums/agent-status"
import { PosProps } from "@/domain/pos/enterprise/entities/pos.entity"
import { TypeProps } from "@/domain/pos/enterprise/entities/type.entity"
import { AreaProps } from "@/domain/pos/enterprise/entities/area.entity"
import { ZoneProps } from "@/domain/pos/enterprise/entities/zone.entity"
import { CityProps } from "@/domain/pos/enterprise/entities/city.entity"
import { ProvinceProps } from "@/domain/pos/enterprise/entities/province.entity"
import { TerminalProps } from "@/domain/terminal/enterprise/entities/terminal.entity"

type AgentRelations = {
  province?: Partial<ProvinceProps> & { id: string }
  city?: Partial<CityProps> & { id: string }
  area?: Partial<AreaProps> & { id: string }
  zone?: Partial<ZoneProps> & { id: string }
  type?: Partial<TypeProps> & { id: string }
  pos?: Partial<PosProps> & { id: string }
  terminal?: Partial<TerminalProps> & { id: string }
  supervision?: Partial<SupervisionProps> & { id: string }
}

export type AgentProps = {
  id_reference: number
  first_name: string
  last_name: string
  bi_number?: string
  genre?: string
  phone: number | null
  afrimoney: number | null
  status: AgentStatus | null
  agent_type: AgentType
  pos_id?: string
  type_id?: string
  province_id?: string
  city_id?: string
  area_id?: string
  zone_id?: string
  terminal_id?: string
} & AgentRelations

export class Agent extends Entity<AgentProps> {
  static create(props: AgentProps, id?: string): Agent {
    return new Agent(
      {
        ...props,
        first_name: props.first_name.trim().toUpperCase(),
        last_name: props.last_name.trim().toUpperCase(),
        status: props.status ?? AgentStatusEnum.INACTIVE,
      },
      id
    )
  }

  update(props: Partial<AgentProps>) {
    if (props.type !== undefined) this.props.type = props.type
    if (props.bi_number !== undefined) this.props.bi_number = props.bi_number
    if (props.genre !== undefined) this.props.genre = props.genre
    if (props.phone !== undefined) this.props.phone = props.phone
    if (props.pos_id !== undefined) this.props.pos_id = props.pos_id
    if (props.status !== undefined) this.props.status = props.status
    if (props.afrimoney !== undefined) this.props.afrimoney = props.afrimoney
    if (props.terminal_id !== undefined)
      this.props.terminal_id = props.terminal_id
    if (props.last_name !== undefined)
      this.props.last_name = props.last_name.trim().toUpperCase()
    if (props.first_name !== undefined)
      this.props.first_name = props.first_name.trim().toUpperCase()
    if (props.pos !== undefined) this.props.pos = props.pos
    if (props.terminal !== undefined) this.props.terminal = props.terminal
    if (props.supervision !== undefined)
      this.props.supervision = props.supervision
    if (props.agent_type !== undefined) this.props.agent_type = props.agent_type
    if (props.type_id !== undefined) this.props.type_id = props.type_id
    if (props.area_id !== undefined) this.props.area_id = props.area_id
    if (props.zone_id !== undefined) this.props.zone_id = props.zone_id
    if (props.province_id !== undefined)
      this.props.province_id = props.province_id
    if (props.city_id !== undefined) this.props.city_id = props.city_id
  }

  // Getters e Setters

  get id_reference() {
    return this.props.id_reference
  }

  get first_name() {
    return this.props.first_name
  }

  get last_name() {
    return this.props.last_name
  }

  get phone() {
    return this.props.phone
  }

  get afrimoney() {
    return this.props.afrimoney
  }

  get status() {
    return this.props.status
  }

  get pos_id() {
    return this.props.pos_id
  }
  get bi_number() {
    return this.props.bi_number
  }
  get genre() {
    return this.props.genre
  }

  get terminal_id() {
    return this.props.terminal_id
  }
  get province_id() {
    return this.props.province_id
  }
  get city_id() {
    return this.props.city_id
  }
  get area_id() {
    return this.props.area_id
  }
  get zone_id() {
    return this.props.zone_id
  }

  get type() {
    return this.props.type
  }

  get supervision() {
    return this.props.supervision
  }

  get pos() {
    return this.props.pos
  }

  get terminal() {
    return this.props.terminal
  }
}
