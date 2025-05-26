import { Entity } from "@/core/domain/entity";
import { AreaProps } from "./area.entity";

export type CityProps = {
    province_id:string
    name:string
    created_at:Date
    areas:Partial<AreaProps & { id:string }>[]
}

export class City extends Entity<CityProps>{
    
    static create(props:CityProps, id?:string){
        return new City({
            ...props,
            created_at: props.created_at ?? new Date()
        },id)
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

    get areas() {
        return this.props.areas;
    }

    set province_id(value:string) {
        this.props.province_id = value;
    }
}