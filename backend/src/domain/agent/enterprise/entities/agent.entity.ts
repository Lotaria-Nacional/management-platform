import { Entity } from "@/core/domain/entity"
import { Revision } from "./revision.entity"
import { TerminalProps } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { PosProps } from "@/domain/pos/enterprise/entities/pos.entity"

export type AgentProps = {
  agent_id: string
  first_name: string
  last_name: string
  phone: string
  afrimoney?: string | null
  status: string | null
  pos_id?: string
  terminal_id?: string
  pos?: Partial<PosProps> & { id: string }
  terminal?: Partial<TerminalProps> & { id: string }
  revision?: Partial<Revision> & { id: string }
}

export class Agent extends Entity<AgentProps> {
  static create(props: AgentProps, id?: string): Agent {
    return new Agent(
      {
        ...props,
        afrimoney: props.afrimoney ?? null,
        terminal: props.terminal ?? undefined,
        revision: props.revision ?? undefined,
      },
      id
    )
  }

  get agent_id() {
    return this.props.agent_id
  }

  get afrimoney() {
    return this.props.afrimoney
  }

  get first_name() {
    return this.props.first_name
  }

  get revision() {
    return this.props.revision
  }

  get last_name() {
    return this.props.last_name
  }

  get fullName() {
    return `${this.props.first_name} ${this.props.last_name}`
  }

  get phone() {
    return this.props.phone
  }

  get status(): string | null {
    return this.props.status
  }

  get terminal() {
    return this.props.terminal
  }

  get pos() {
    return this.props.pos
  }
  set pos(pos: (Partial<PosProps> & { id: string }) | undefined) {
    this.props.pos = pos
  }

  set first_name(name: string) {
    this.props.first_name = name
  }

  set last_name(last_name: string) {
    this.props.last_name = last_name
  }

  set phone(phone: string) {
    this.props.phone = phone
  }

  set agent_id(agent_id: string) {
    this.props.agent_id = agent_id
  }

  set status(status: string) {
    this.props.status = status
  }

  set afrimoney(afrimoney: string | null | undefined) {
    this.props.afrimoney = afrimoney
  }
}
