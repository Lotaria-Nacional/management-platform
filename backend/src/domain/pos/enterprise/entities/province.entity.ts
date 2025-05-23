import { Entity } from "@/core/domain/entity";

export type ProvinceProps = {
    name:string
    created_at:Date
}

export class Province extends Entity<ProvinceProps>{
    
    static create(props:ProvinceProps){
        return new Province({
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
}