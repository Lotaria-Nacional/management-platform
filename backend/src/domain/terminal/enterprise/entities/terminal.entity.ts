import { Entity } from "@/core/domain/entity"
import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity"

export type TerminalProps = {
  id_reference: number
  serial: string
  sim_card: number
  agent_id?: string
  created_at?: Date
  agent?: Partial<AgentProps> & { id: string }
}

export class Terminal extends Entity<TerminalProps> {
  static create(props: TerminalProps, id?: string): Terminal {
    return new Terminal(
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
}
