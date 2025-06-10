import { Entity } from "@/core/domain/entity"
import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity"

export type TerminalProps = {
  id_reference: number
  serial: string
  sim_card: number
  pin: number | null
  puk: number | null
  agent_id?: string
  created_at?: Date
  agent?: Partial<AgentProps> & { id: string }
}

export class Terminal extends Entity<TerminalProps> {
  static create(props: TerminalProps, id?: string): Terminal {
    return new Terminal(
      {
        ...props,
        serial: props.serial.toUpperCase(),
        created_at: props.created_at ?? new Date(),
      },
      id
    )
  }

  update(data: Partial<TerminalProps>) {
    if (data.agent_id) this.props.agent_id = data.agent_id
    if (data.serial) this.props.serial = data.serial.toUpperCase()
    if (data.sim_card) this.props.sim_card = data.sim_card
    if (data.pin) this.props.pin = data.pin
    if (data.puk) this.props.puk = data.puk
  }

  get id_reference() {
    return this.props.id_reference
  }

  set id_reference(value: number) {
    this.props.id_reference = value
  }

  get serial(): string {
    return this.props.serial
  }

  set serial(serial: string) {
    this.props.serial = serial
  }

  get sim_card() {
    return this.props.sim_card
  }
  set sim_card(value: number) {
    this.props.sim_card = value
  }

  get agent_id() {
    return this.props.agent_id
  }

  set agent_id(agent_id: string | undefined) {
    this.props.agent_id = agent_id
  }
  get pin() {
    return this.props.pin
  }

  set pin(pin: number | null) {
    this.props.pin = pin
  }
  get puk() {
    return this.props.puk
  }

  set puk(puk: number | null) {
    this.props.puk = puk
  }
}
