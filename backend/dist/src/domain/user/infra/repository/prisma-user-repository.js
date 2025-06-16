"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrismaRepository = void 0;
const user_1 = require("../../enterprise/entities/user");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class UserPrismaRepository {
    async create(data) {
        await prisma_config_1.prisma.user.create({
            data: {
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
                password: data.password,
                role: data.role,
            }
        });
    }
    async save(data) {
        await prisma_config_1.prisma.user.update({
            where: { id: data.id },
            data: {
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
                password: data.password,
                role: data.role
            }
        });
    }
    async delete(id) {
        await prisma_config_1.prisma.user.delete({ where: { id } });
    }
    async fetchMany() {
        const users = await prisma_config_1.prisma.user.findMany();
        return users.map((user) => user_1.User.create({
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            role: user.role,
            password: user.password
        }));
    }
    async getByEmail(email) {
        const user = await prisma_config_1.prisma.user.findUnique({
            where: { email }
        });
        return user ? user_1.User.create({
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            role: user.role,
            password: user.password,
        }) : null;
    }
    async getById(id) {
        const user = await prisma_config_1.prisma.user.findUnique({
            where: { id }
        });
        return user ? user_1.User.create({
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            role: user.role,
            password: user.password,
        }) : null;
    }
}
exports.UserPrismaRepository = UserPrismaRepository;
//# sourceMappingURL=prisma-user-repository.js.map