"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAgentControllers = makeAgentControllers;
const edit_agent_useCase_1 = require("@/domain/agent/application/use-cases/agent/edit-agent.useCase");
const register_agent_useCase_1 = require("@/domain/agent/application/use-cases/agent/register-agent.useCase");
const get_agent_by_id_useCase_1 = require("@/domain/agent/application/use-cases/agent/get-agent-by-id.useCase");
const edit_agent_controller_1 = require("@/domain/agent/presentation/controllers/agent/edit-agent.controller");
const fetch_many_agents_useCase_1 = require("@/domain/agent/application/use-cases/agent/fetch-many-agents.useCase");
const get_agent_by_id_controller_1 = require("@/domain/agent/presentation/controllers/agent/get-agent-by-id.controller");
const register_agent_controller_1 = require("@/domain/agent/presentation/controllers/agent/register-agent.controller");
const fetch_many_agents_controller_1 = require("@/domain/agent/presentation/controllers/agent/fetch-many-agents.controller");
function makeAgentControllers(repository, posRepository, terminalRepository) {
    const registerAgentController = new register_agent_controller_1.RegisterAgentController(new register_agent_useCase_1.RegisterAgentUseCase(repository, posRepository, terminalRepository));
    const editAgentController = new edit_agent_controller_1.EditAgentController(new edit_agent_useCase_1.EditAgentUseCase(repository, posRepository, terminalRepository));
    const fetchManyAgentsController = new fetch_many_agents_controller_1.FetchManyAgentsController(new fetch_many_agents_useCase_1.FetchManyAgentsUseCase(repository));
    const getAgentByIdController = new get_agent_by_id_controller_1.GetAgentByIdController(new get_agent_by_id_useCase_1.GetAgentByIdUseCase(repository));
    return {
        registerAgentController,
        editAgentController,
        fetchManyAgentsController,
        getAgentByIdController,
    };
}
//# sourceMappingURL=make-agent-controllers.js.map