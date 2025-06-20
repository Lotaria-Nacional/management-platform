import { User } from "../../enterprise/entities/user";
import { prisma } from "@/core/infra/database/prisma/prisma.config";
import { IUserRepository } from "../../application/interfaces/user-repository.interface";

export class UserPrismaRepository implements IUserRepository {

    async create(data: User) {
        const user = await prisma.user.create({
            data:{
                email:data.email,
                first_name:data.first_name,
                last_name:data.last_name,
                password:data.password,
                role:data.role,
            }
        })
        return User.create({
            role:user.role,
            email:user.email,
            first_name:user.first_name,
            last_name:user.last_name,
            password:user.password,
            created_at:user.created_at ?? new Date()
        }, user.id)
    }

    async save(data: User) {
        await prisma.user.update({
            where:{ id: data.id },
            data:{
                email: data.email,
                first_name:data.first_name,
                last_name:data.last_name,
                password:data.password,
                role:data.role
            }
        })
    }

    async delete(id: string) {
        await prisma.user.delete({ where:{ id } })
    }

    async fetchMany() {
        const users = await prisma.user.findMany()

        return users.map((user)=> User.create({
            email:user.email,
            first_name:user.first_name,
            last_name:user.last_name,
            role:user.role,
            password:user.password
        }))
    }

    async getByEmail(email: string) {
        const user = await prisma.user.findUnique({ 
            where: { email  }
        })

        return user ? User.create({
            email:user.email,
            first_name:user.first_name,
            last_name:user.last_name,
            role:user.role,
            password:user.password,
        }) : null
    }

    async getById(id: string) {
        const user = await prisma.user.findUnique({ 
            where: { id }
        })

        return user ? User.create({
            email:user.email,
            first_name:user.first_name,
            last_name:user.last_name,
            role:user.role,
            password:user.password,
        }) : null
    }
}