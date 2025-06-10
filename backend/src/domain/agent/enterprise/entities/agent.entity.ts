import { Entity } from "@/core/domain/entity"
import { SupervisionProps } from "./supervision.entity"
import { PosProps } from "@/domain/pos/enterprise/entities/pos.entity"
import { TerminalProps } from "@/domain/terminal/enterprise/entities/terminal.entity"

export type AgentProps = {
  type: string
  phone: number
  pos_id?: string
  last_name: string
  first_name: string
  terminal_id?: string
  id_reference: number
  status: string | null
  afrimoney: number | null

  pos?: Partial<PosProps> & { id: string }
  terminal?: Partial<TerminalProps> & { id: string }
  supervision?: Partial<SupervisionProps> & { id: string }
}

export class Agent extends Entity<AgentProps> {
  static create(props: AgentProps, id?: string): Agent {
    return new Agent(
      {
        ...props,
        first_name: props.first_name.toUpperCase(),
        last_name: props.last_name.toUpperCase(),
        status: props.status ?? "ACTIVO",
        terminal: props.terminal ?? undefined,
        supervision: props.supervision ?? undefined,
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
  get first_name() {
    return this.props.first_name
  }
  set first_name(value: string) {
    this.props.first_name = value
  }

  get last_name() {
    return this.props.last_name
  }
  set last_name(value: string) {
    this.props.last_name = value
  }

  get phone() {
    return this.props.phone
  }
  set phone(value: number) {
    this.props.phone = value
  }
  get afrimoney() {
    return this.props.afrimoney
  }
  set afrimoney(value: number | null) {
    this.props.afrimoney = value
  }

  get status() {
    return this.props.status
  }
  set status(value: string | null) {
    this.props.status = value
  }

  get pos_id() {
    return this.props.pos_id
  }
  set pos_id(value: string | undefined) {
    this.props.pos_id = value
  }

  get terminal_id() {
    return this.props.terminal_id
  }
  set terminal_id(value: string | undefined) {
    this.props.terminal_id = value
  }

  get type() {
    return this.props.type
  }

  set type(value: string) {
    this.props.type = value
  }
}
