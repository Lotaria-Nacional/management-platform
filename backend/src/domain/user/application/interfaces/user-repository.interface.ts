import { User } from "../../enterprise/entities/user"

export interface IUserRepository {
    create(data:User):Promise<User>
    save(data:User):Promise<void>
    delete(is:string):Promise<void>
    fetchMany():Promise<User[]>
    getById(id:string):Promise<User | null>
    getByEmail(email:string):Promise<User | null>
}