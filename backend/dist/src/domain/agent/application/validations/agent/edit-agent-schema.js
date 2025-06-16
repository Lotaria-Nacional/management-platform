"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editAgentSchema = void 0;
const zod_1 = require("zod");
const agent_type_1 = require("@/domain/agent/enterprise/enums/agent-type");
const agent_status_1 = require("@/domain/agent/enterprise/enums/agent-status");
const agent_genre_1 = require("@/domain/agent/enterprise/enums/agent-genre");
exports.editAgentSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "O id é obrigatório"),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    phone: zod_1.z
        .number({ message: "O número de telefone deve ser um número inteiro" })
        .int("Deve ser um número inteiro")
        .refine((val) => val.toString().length === 9, {
        message: "O número de telefone deve conter exatamente 9 dígitos",
    })
        .optional(),
    afrimoney: zod_1.z
        .number({ message: "O número afrimoney deve ser um número inteiro" })
        .int("Deve ser um número inteiro")
        .refine((val) => val.toString().length === 9, {
        message: "O número afrimoney deve conter exatamente 9 dígitos",
    })
        .optional(),
    agent_type: zod_1.z
        .enum([agent_type_1.AgentTypeEnum.LOTARIA_NACIONAL, agent_type_1.AgentTypeEnum.REVENDOR], {
        message: "Tipo de agente inválido",
    })
        .optional(),
    status: zod_1.z.nativeEnum(agent_status_1.AgentStatusEnum).optional(),
    pos_id: zod_1.z.string().optional(),
    terminal_id: zod_1.z.string().optional(),
    bi_number: zod_1.z.string().optional(),
    genre: zod_1.z.nativeEnum(agent_genre_1.AgentGenreEnum).optional(),
});
//# sourceMappingURL=edit-agent-schema.js.map