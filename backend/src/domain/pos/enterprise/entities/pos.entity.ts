import { Entity } from "@/core/domain/entity";

type PosProps = {
    id_pos:string
    id_reference_pos:string | null
    coordinates:string
    type:string
    admin:string | null
    licence:string 
    zone:string
    area:string
    city:string
    province:string
}

export class Pos extends Entity<PosProps> {
    
    static create(props: PosProps, id?:string):Pos{
        return new Pos(props, id)
    }

    get id_pos():string{
        return this.props.id_pos
    }
    get id_reference_pos():string | null {
        return this.props.id_reference_pos || null
    }
    get coordinates():string{
        return this.props.coordinates
    }
} 