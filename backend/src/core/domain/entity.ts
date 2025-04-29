import { randomUUID } from "node:crypto"

export abstract class Entity<Props> {
    protected readonly _id:string
    protected readonly props:Props

    constructor(props:Props, id?:string){
        this._id = id ?? randomUUID()
        this.props = props
    }

    get id():string {
        return this._id
    }

    equals(entity:Entity<any>):boolean{
        if(entity === this) return true
        if(!entity === !(entity instanceof Entity)) return false
        return entity.id === this._id
    }
}