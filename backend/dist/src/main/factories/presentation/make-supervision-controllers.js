"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSupervisionControllers = makeSupervisionControllers;
const make_supervision_useCase_1 = require("@/domain/agent/application/use-cases/supervision/make-supervision.useCase");
const fetch_many_supervision_useCase_1 = require("@/domain/agent/application/use-cases/supervision/fetch-many-supervision.useCase");
const fetch_many_supervision_controller_1 = require("@/domain/agent/presentation/controllers/supervision/fetch-many-supervision.controller");
const remove_supervision_useCase_1 = require("@/domain/agent/application/use-cases/supervision/remove-supervision.useCase");
const get_supervision_by_id_useCase_1 = require("@/domain/agent/application/use-cases/supervision/get-supervision-by-id.useCase");
const get_supervision_by_id_controller_1 = require("@/domain/agent/presentation/controllers/supervision/get-supervision-by-id.controller");
const make_supervision_controller_1 = require("@/domain/agent/presentation/controllers/supervision/make-supervision.controller");
const remove_supervision_controller_1 = require("@/domain/agent/presentation/controllers/supervision/remove-supervision.controller");
function makeSupervisionControllers(repository) {
    const makeSupervisionController = new make_supervision_controller_1.MakeSupervisionController(new make_supervision_useCase_1.MakeSupervisionUseCase(repository));
    const fetchManySupervisionController = new fetch_many_supervision_controller_1.FetchManySupervisionController(new fetch_many_supervision_useCase_1.FetchManySupervisionUseCase(repository));
    const removeSupervisionController = new remove_supervision_controller_1.RemoveSupervisionController(new remove_supervision_useCase_1.RemoveSupervisionUseCase(repository));
    const getSupervisionByIdController = new get_supervision_by_id_controller_1.GetSupervisionByIdController(new get_supervision_by_id_useCase_1.GetSupervisionByIdUseCase(repository));
    return {
        makeSupervisionController,
        fetchManySupervisionController,
        removeSupervisionController,
        getSupervisionByIdController,
    };
}
//# sourceMappingURL=make-supervision-controllers.js.map