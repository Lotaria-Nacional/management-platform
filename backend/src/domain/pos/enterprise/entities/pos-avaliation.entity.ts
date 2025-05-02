import { Entity } from "@/core/domain/entity";

export type PosItem = {
    name:string
    isChecked:boolean
}

export type PosAvaliationProps = {
    items:PosItem[]
    additional_info?:string | null
    image?: string | null
}   

export class PosAvaliation extends Entity<PosAvaliationProps> {
    static create(data:PosAvaliationProps){
        return new PosAvaliation(data)
    }

    get items():PosItem[] {
        return this.props.items
    }

    get additional_info():string | null | undefined {
        return this.props.additional_info
    }

    get image():string | null | undefined {
        return this.props.image
    }
}