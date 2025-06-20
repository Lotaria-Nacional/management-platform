import { Entity } from "@/core/domain/entity"
import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity"

export type TerminalProps = {
  id_reference: number
  serial: string
  sim_card: number
  pin?: number
  puk?: number
  province_id?: string
  city_id?: string
  area_id?: string
  zone_id?: string
  created_at?: Date
  agent_id?: string
  agent?: Partial<AgentProps> & { id: string }
}

export class Terminal extends Entity<TerminalProps> {
  static create(props: TerminalProps, id?: string): Terminal {
    return new Terminal(
      {
        ...props,
        serial: props.serial.trim().toUpperCase(),
        created_at: props.created_at ?? new Date(),
      },
      id
    )
  }

  update(data: Partial<TerminalProps>) {
    if (data.serial !== undefined) {
      this.props.serial = data.serial.trim().toUpperCase()
    }

    if (data.sim_card !== undefined) {
      this.props.sim_card = data.sim_card
    }

    if (data.pin !== undefined) {
      this.props.pin = data.pin
    }

    if (data.puk !== undefined) {
      this.props.puk = data.puk
    }

    if (data.agent_id !== undefined) {
      this.props.agent_id = data.agent_id
    }

    if (data.province_id !== undefined) {
      this.props.province_id = data.province_id
    }

    if (data.city_id !== undefined) {
      this.props.city_id = data.city_id
    }

    if (data.area_id !== undefined) {
      this.props.area_id = data.area_id
    }

    if (data.zone_id !== undefined) {
      this.props.zone_id = data.zone_id
    }
  }

  // Getters e setters

  get id_reference() {
    return this.props.id_reference
  }

  set id_reference(value: number) {
    this.props.id_reference = value
  }

  get serial() {
    return this.props.serial
  }

  set serial(value: string) {
    this.props.serial = value.trim().toUpperCase()
  }

  get sim_card() {
    return this.props.sim_card
  }

  set sim_card(value: number) {
    this.props.sim_card = value
  }

  get pin() {
    return this.props.pin
  }

  set pin(value: number | undefined) {
    this.props.pin = value
  }

  get puk() {
    return this.props.puk
  }

  set puk(value: number | undefined) {
    this.props.puk = value
  }

  get created_at() {
    return this.props.created_at
  }

  get agent_id() {
    return this.props.agent_id
  }

  set agent_id(value: string | undefined) {
    this.props.agent_id = value
  }

  get agent() {
    return this.props.agent
  }

  set agent(value: (Partial<AgentProps> & { id: string }) | undefined) {
    this.props.agent = value
  }

  get province_id() {
    return this.props.province_id
  }
  set province_id(value: string | undefined) {
    this.props.province_id = value
  }

  get city_id() {
    return this.props.city_id
  }
  set city_id(value: string | undefined) {
    this.props.city_id = value
  }
  get area_id() {
    return this.props.area_id
  }
  set area_id(value: string | undefined) {
    this.props.area_id = value
  }
  get zone_id() {
    return this.props.zone_id
  }
  set zone_id(value: string | undefined) {
    this.props.zone_id = value
  }
}
