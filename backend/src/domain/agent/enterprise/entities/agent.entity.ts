import { Entity } from "@/core/domain/entity"
import { AgentType } from "../enums/agent-type"
import { SupervisionProps } from "./supervision.entity"
import { PosProps } from "@/domain/pos/enterprise/entities/pos.entity"
import { TerminalProps } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { AgentStatus, AgentStatusEnum } from "../enums/agent-status"

type AgentRelations = {
  pos?: Partial<PosProps> & { id: string }
  terminal?: Partial<TerminalProps> & { id: string }
  supervision?: Partial<SupervisionProps> & { id: string }
}

export type AgentProps = {
  id_reference: number
  first_name: string
  last_name: string
  phone: number | null
  afrimoney: number | null
  status: AgentStatus | null
  type: AgentType
  pos_id?: string
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
    if (props.phone !== undefined) this.props.phone = props.phone
    if (props.pos_id !== undefined) this.props.pos_id = props.pos_id
    if (props.status !== undefined) this.props.status = props.status
    if (props.afrimoney !== undefined) this.props.afrimoney = props.afrimoney
    if (props.terminal_id !== undefined) this.props.terminal_id = props.terminal_id
    if (props.last_name !== undefined) this.props.last_name = props.last_name.trim().toUpperCase()
    if (props.first_name !== undefined) this.props.first_name = props.first_name.trim().toUpperCase()
    if (props.pos !== undefined) this.props.pos = props.pos
    if (props.terminal !== undefined) this.props.terminal = props.terminal
    if (props.supervision !== undefined) this.props.supervision = props.supervision
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

  get terminal_id() {
    return this.props.terminal_id
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
