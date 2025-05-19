import { Entity } from "@/core/domain/entity"
import { Revision, RevisionProps } from "./revision.entity"
import {
  Terminal,
  TerminalProps,
} from "@/domain/terminal/enterprise/entities/terminal.entity"

export type AgentProps = {
  agent_id: string
  first_name: string
  last_name: string
  phone: string
  afrimoney?: string | null
  status: string | null
  zone: string
  city: string
  province: string
  terminal?: Partial<TerminalProps>
  revision?: Partial<Revision>
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

  get zone() {
    return this.props.zone
  }

  get province() {
    return this.props.province
  }

  get status(): string | null {
    return this.props.status
  }

  get terminal() {
    return this.props.terminal
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

  set city(city: string) {
    this.props.city = city
  }

  set agent_id(agent_id: string) {
    this.props.agent_id = agent_id
  }

  set zone(zone: string) {
    this.props.zone = zone
  }

  set province(province: string) {
    this.props.province = province
  }

  set status(status: string) {
    this.props.status = status
  }

  set afrimoney(afrimoney: string | null | undefined) {
    this.props.afrimoney = afrimoney
  }

  set revision(revision: Partial<RevisionProps> | undefined) {
    this.props.revision = revision
  }

  set terminal(terminal: Partial<TerminalProps> | undefined) {
    this.props.terminal = terminal
  }
}
