import { Entity } from "@/core/domain/entity";

export type CityProps = {
    province_id:string
    name:string
    created_at:Date
}

export class City extends Entity<CityProps>{
    
    static create(props:CityProps){
        return new City({
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