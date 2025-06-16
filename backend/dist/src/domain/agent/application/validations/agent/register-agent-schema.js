"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAgentSchema = void 0;
const zod_1 = require("zod");
const agent_type_1 = require("@/domain/agent/enterprise/enums/agent-type");
const agent_status_1 = require("@/domain/agent/enterprise/enums/agent-status");
const agent_genre_1 = require("@/domain/agent/enterprise/enums/agent-genre");
exports.registerAgentSchema = zod_1.z.object({
    first_name: zod_1.z.string().min(1, "O nome é obrigatório"),
    last_name: zod_1.z.string().min(1, "O sobrenome é obrigatório"),
    phone: zod_1.z
        .number({ message: "O número de telefone deve ser um número inteiro" })
        .int("Deve ser um número inteiro")
        .refine((val) => val.toString().length === 9, {
        message: "O número de telefone deve conter exatamente 9 dígitos",
    })
        .refine((val) => val > 0, "O número de telefone é obrigatório"),
    afrimoney: zod_1.z
        .number({ message: "O número da afrimoney deve ser um número inteiro" })
        .int("Deve ser um número inteiro")
        .refine((val) => val.toString().length === 9, {
        message: "O número da afrimoney deve conter exatamente 9 dígitos",
    })
        .refine((val) => val > 0, "O número da afrimoney é obrigatório"),
    pos_id: zod_1.z.string().optional(),
    agent_type: zod_1.z
        .enum([agent_type_1.AgentTypeEnum.LOTARIA_NACIONAL, agent_type_1.AgentTypeEnum.REVENDOR], {
        message: "Tipo de agente inválido",
    })
        .refine((val) => val !== "", {
        message: "O tipo de agente é obrigatório",
    }),
    status: zod_1.z
        .nativeEnum(agent_status_1.AgentStatusEnum)
        .default(agent_status_1.AgentStatusEnum.INACTIVE)
        .optional(),
    type_id: zod_1.z.string().optional(),
    terminal_id: zod_1.z.string().optional(),
    bi_number: zod_1.z.string().optional(),
    genre: zod_1.z.nativeEnum(agent_genre_1.AgentGenreEnum).optional(),
});
//# sourceMappingURL=register-agent-schema.js.map