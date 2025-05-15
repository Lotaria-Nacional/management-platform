import { Entity } from "@/core/domain/entity"
import { Revision } from "./revision.entity"

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
  terminal?: string | null
  revision?:Revision
}

export class Agent extends Entity<AgentProps> {
  static create(props: AgentProps, id?: string): Agent {
    return new Agent(
      {
        ...props,
        terminal: props.terminal || null,
        afrimoney: props.afrimoney || null,
        revision: props.revision ?? undefined
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
    return this.props.terminal || null
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

  set terminal(terminal: string | null) {
    this.props.terminal = terminal
  }

  set afrimoney(afrimoney: string | null | undefined) {
    this.props.afrimoney = afrimoney
  }

}
