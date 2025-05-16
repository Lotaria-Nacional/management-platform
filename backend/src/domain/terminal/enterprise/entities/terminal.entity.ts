import { Entity } from "@/core/domain/entity";
import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity";

export type TerminalProps = {
    id_terminal:string
    serial:string
    sim_card:string
    agent_id:string
    created_at?:Date
    agent?:Partial<AgentProps> | null
}

export class Terminal extends Entity<TerminalProps> {

    static create(props:TerminalProps, id?:string):Terminal{
        return new Terminal({
            ...props,
            agent:props.agent ?? null,
            created_at: props.created_at ?? new Date()
        }, id)
    }

    get id_terminal():string {
        return this.props.id_terminal
    }
    
    get serial():string {
        return this.props.serial
    }

    get sim_card():string {
        return this.props.sim_card
    }

    get agent_id():string {
        return this.props.agent_id
    }

    set id_terminal(id_terminal:string) {
        this.props.id_terminal = id_terminal
    }
    
    set serial(serial:string) {
         this.props.serial = serial
    }

    set sim_card(sim_card:string) {
        this.props.sim_card = sim_card
    }
    
}