"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePosControllers = makePosControllers;
const add_pos_useCase_1 = require("@/domain/pos/application/use-cases/add-pos.useCase");
const edit_pos_useCase_1 = require("@/domain/pos/application/use-cases/edit-pos.useCase");
const fetch_many_pos_useCase_1 = require("@/domain/pos/application/use-cases/fetch-many-pos.useCase");
const get_pos_by_id_useCase_1 = require("@/domain/pos/application/use-cases/get-pos-by-id.useCase");
const remove_pos_useCase_1 = require("@/domain/pos/application/use-cases/remove-pos.useCase");
const add_pos_controller_1 = require("@/domain/pos/presentation/controllers/add-pos.controller");
const edit_pos_controller_1 = require("@/domain/pos/presentation/controllers/edit-pos.controller");
const fetch_many_pos_controller_1 = require("@/domain/pos/presentation/controllers/fetch-many-pos.controller");
const get_pos_by_id_controller_1 = require("@/domain/pos/presentation/controllers/get-pos-by-id.controller");
const remove_pos_controller_1 = require("@/domain/pos/presentation/controllers/remove-pos.controller");
function makePosControllers(repository) {
    const addPosController = new add_pos_controller_1.AddPosController(new add_pos_useCase_1.AddPosUseCase(repository));
    const editPosController = new edit_pos_controller_1.EditPosController(new edit_pos_useCase_1.EditPosUseCase(repository));
    const fetchManyPosController = new fetch_many_pos_controller_1.FetchManyPosController(new fetch_many_pos_useCase_1.FetchManyPosUseCase(repository));
    const getPosByIdController = new get_pos_by_id_controller_1.GetPosByIdController(new get_pos_by_id_useCase_1.GetPosByIdUseCase(repository));
    const removePosController = new remove_pos_controller_1.RemovePosController(new remove_pos_useCase_1.RemovePosUseCase(repository));
    return {
        addPosController,
        editPosController,
        fetchManyPosController,
        getPosByIdController,
        removePosController,
    };
}
//# sourceMappingURL=make-pos-controllers.js.map