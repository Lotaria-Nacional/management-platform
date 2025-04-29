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
};

export class Agent extends Entity<AgentProps> {

    static create(props: AgentProps, id?:string): Agent {
        return new Agent(props, id);
    }

     get fullName(): string {
        return `${this.props.first_name} ${this.props.last_name}`;
    }

    isActive(): boolean {
        return this.props.status.toLowerCase() === 'active';
    }
}
