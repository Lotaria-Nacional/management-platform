import { Entity } from "@/core/domain/entity";

export const UserRoleEnum = {
    ADMIN: "Admin",
    AREA_MANAGER: "Area manager",
    SUPERVISOR: "Supervisor",
}  

export type UserRole = typeof UserRoleEnum[keyof typeof UserRoleEnum]

export type UserProps = {
    first_name:string
    last_name:string
    email:string
    password:string
    role:UserRole
    created_at?:Date
}

export class User extends Entity<UserProps> {

    static create(props:UserProps){
        return new User({
            ...props,
            created_at: props.created_at ?? new Date()
        })
    }

    get first_name(){
        return this.props.first_name
    }
    set first_name(value:string){
        this.props.first_name = value
    }

    get last_name(){
        return this.props.last_name
    }
    set last_name(value:string){
        this.props.last_name = value
    }

    get email(){
        return this.props.email
    }
    set email(value:string){
        this.props.email = value
    }

    get password(){
        return this.props.password
    }
    set password(value:string){
        this.props.password = value
    }

    get role(){
        return this.props.role
    }
    set role(value:UserRole){
        this.props.role = value
    }

}