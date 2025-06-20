import { Entity } from "@/core/domain/entity";
import { AuditLogsActionType } from "../enums/audit-log-actions";

export type AuditLogProps = {
    action:AuditLogsActionType
    entity:string
    entity_id:string
    user_id:string
    timestamp:Date
    metadata:Record<string,string>
}

export class AuditLog extends Entity<AuditLogProps> {
    
    static create(props:AuditLogProps, id?:string):AuditLog{
        return new AuditLog({
            action:props.action,
            entity:props.entity,
            entity_id:props.entity_id,
            metadata:props.metadata,
            timestamp:props.timestamp,
            user_id:props.user_id
        }, id)
    }

    get action(){
        return this.props.action
    }

    set action(value:AuditLogsActionType){
        this.props.action = value
    }

    get entity(){
        return this.props.entity
    }

    set entity(value:string){
        this.props.entity = value
    }

    get entity_id(){
        return this.props.entity_id
    }

    set entity_id(value:string){
        this.props.entity_id = value
    }

    get user_id(){
        return this.props.user_id
    }

    set user_id(value:string){
        this.props.user_id = value
    
    }
    get metadata(){
        return this.props.metadata
    }

    set metadata(value:Record<string,string>){
        this.props.metadata = value
    }

    get timestamp(){
        return this.props.timestamp
    }

    set timestamp(value:Date){
        this.props.timestamp = value
    }
}
