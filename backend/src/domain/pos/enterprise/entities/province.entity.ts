import { Entity } from "@/core/domain/entity";
import { CityProps } from "./city.entity";

export type ProvinceProps = {
    name:string
    cities:Partial<CityProps> & {id:string}[]
    created_at:Date
}

export class Province extends Entity<ProvinceProps>{
    
    static create(props:ProvinceProps, id?:string){
        return new Province({
            ...props,
            created_at: props.created_at ?? new Date()
        },id)
    }

    get name(): string {
        return this.props.name;
    }

    get cities() {
        return this.props.cities;
    }

    set name(value: string) {
        this.props.name = value;
    }
}