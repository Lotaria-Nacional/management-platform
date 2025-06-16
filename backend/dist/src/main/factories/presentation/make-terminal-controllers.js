"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTerminalControllers = makeTerminalControllers;
const add_terminal_useCase_1 = require("@/domain/terminal/application/use-cases/add-terminal.useCase");
const add_terminal_controller_1 = require("@/domain/terminal/presentation/controllers/add-terminal.controller");
const remove_terminal_useCase_1 = require("@/domain/terminal/application/use-cases/remove-terminal.useCase");
const remove_terminal_controller_1 = require("@/domain/terminal/presentation/controllers/remove-terminal.controller");
const get_terminal_by_id_useCase_1 = require("@/domain/terminal/application/use-cases/get-terminal-by-id.useCase");
const edit_terminal_controller_1 = require("@/domain/terminal/presentation/controllers/edit-terminal.controller");
const edit_terminal_useCase_1 = require("@/domain/terminal/application/use-cases/edit-terminal.useCase");
const fetch_terminal_controller_1 = require("@/domain/terminal/presentation/controllers/fetch-terminal.controller");
const fetch_many_terminals_useCase_1 = require("@/domain/terminal/application/use-cases/fetch-many-terminals.useCase");
const get_terminal_by_id_controller_1 = require("@/domain/terminal/presentation/controllers/get-terminal-by-id.controller");
function makeTerminalControllers(repository) {
    const addTerminalController = new add_terminal_controller_1.AddTerminalController(new add_terminal_useCase_1.AddTerminalUseCase(repository));
    const editTerminalController = new edit_terminal_controller_1.EditTerminalController(new edit_terminal_useCase_1.EditTerminalUseCase(repository));
    const removeTerminalController = new remove_terminal_controller_1.RemoveTerminalController(new remove_terminal_useCase_1.RemoveTerminalUseCase(repository));
    const getTerminalByIdController = new get_terminal_by_id_controller_1.GetTerminalByIdController(new get_terminal_by_id_useCase_1.GetTerminalByIdUseCase(repository));
    const fetchManyTerminalsController = new fetch_terminal_controller_1.FetchManyTerminalsController(new fetch_many_terminals_useCase_1.FetchManyTerminalsUseCase(repository));
    return {
        addTerminalController,
        editTerminalController,
        removeTerminalController,
        getTerminalByIdController,
        fetchManyTerminalsController,
    };
}
//# sourceMappingURL=make-terminal-controllers.js.map