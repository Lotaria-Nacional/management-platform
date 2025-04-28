export type AgentProps = {
    id?: string;
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

export class Agent {
    readonly id?: string;
    readonly agent_id: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly phone: string;
    readonly afrimoney: string | null;
    readonly status: string;
    readonly zone: string;
    readonly area: string;
    readonly city: string;
    readonly province: string;

    private constructor(props: AgentProps) {
        this.id = props.id;
        this.agent_id = props.agent_id;
        this.first_name = props.first_name;
        this.last_name = props.last_name;
        this.phone = props.phone;
        this.afrimoney = props.afrimoney ?? null;
        this.status = props.status;
        this.zone = props.zone;
        this.area = props.area;
        this.city = props.city;
        this.province = props.province;
    }

    static create(props: AgentProps): Agent {
        return new Agent(props);
    }

    public get fullName(): string {
        return `${this.first_name} ${this.last_name}`;
    }

    public isActive(): boolean {
        return this.status.toLowerCase() === 'active';
    }
}
