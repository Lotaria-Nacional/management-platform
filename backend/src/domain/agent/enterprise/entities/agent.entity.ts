import { Entity } from "@/core/domain/entity";

export type AgentProps = {
    agent_id: string;
    first_name: string;
    last_name: string;
    phone: string;
    afrimoney?: string | null;
    status: string;
    zone: string;
    area: string;
    city: string;
    province: string;
    terminal?: number | null
};

export class Agent extends Entity<AgentProps> {

    static create(props: AgentProps, id?:string): Agent {
        return new Agent({
            ...props, 
            terminal: props.terminal || null,
            afrimoney:props.afrimoney || null
        }, id);
    }

     get first_name(): string {
        return this.props.first_name
    }
     get last_name(): string {
        return this.props.last_name;
    }
     get fullName(): string {
        return `${this.props.first_name} ${this.props.last_name}`;
    }
     get phone(): string {
        return this.props.phone;
    }
     get area(): string {
        return this.props.area;
    }
     get zone(): string {
        return this.props.zone;
    }
     get province(): string {
        return this.props.province;
    }
     get status(): string {
        return this.props.status;
    }
     get terminal() {
        return this.props.terminal || null;
    }

    isActive(): boolean {
        return this.props.status.toLowerCase() === 'active';
    }
}
