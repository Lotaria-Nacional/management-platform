import { Entity } from "@/core/domain/entity";

export type AreaProps = {
    province_id:string
    name:string
    created_at:Date
}

export class Area extends Entity<AreaProps>{
    
    static create(props:AreaProps){
        return new Area({
            ...props,
            created_at: props.created_at ?? new Date()
        })
    }

    get name(): string {
        return this.props.name;
    }

    set name(value: string) {
        this.props.name = value;
    }

    get province_id(): string {
        return this.props.province_id;
    }

    set province_id(value:string) {
        this.props.province_id = value;
    }
}