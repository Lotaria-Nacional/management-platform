"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLicenceControllers = makeLicenceControllers;
const add_licence_useCase_1 = require("@/domain/pos/application/use-cases/licence/add-licence.useCase");
const edit_licence_useCase_1 = require("@/domain/pos/application/use-cases/licence/edit-licence.useCase");
const fetch_many_licences_useCase_1 = require("@/domain/pos/application/use-cases/licence/fetch-many-licences.useCase");
const get_licence_by_id_useCase_1 = require("@/domain/pos/application/use-cases/licence/get-licence-by-id.useCase");
const remove_licence_useCase_1 = require("@/domain/pos/application/use-cases/licence/remove-licence.useCase");
const add_licence_controller_1 = require("@/domain/pos/presentation/controllers/licence/add-licence.controller");
const edit_licence_controller_1 = require("@/domain/pos/presentation/controllers/licence/edit-licence.controller");
const fetch_many_licence_controller_1 = require("@/domain/pos/presentation/controllers/licence/fetch-many-licence.controller");
const get_licence_by_id_controller_1 = require("@/domain/pos/presentation/controllers/licence/get-licence-by-id.controller");
const remove_licence_controller_1 = require("@/domain/pos/presentation/controllers/licence/remove-licence.controller");
function makeLicenceControllers(repository) {
    const addLicenceController = new add_licence_controller_1.AddLicenceController(new add_licence_useCase_1.AddLicenceUseCase(repository));
    const editLicenceController = new edit_licence_controller_1.EditLicenceController(new edit_licence_useCase_1.EditLicenceUseCase(repository));
    const fetchManyLicencesController = new fetch_many_licence_controller_1.FetchManyLicenceController(new fetch_many_licences_useCase_1.FetchManyLicencesUseCase(repository));
    const getLicenceByIdController = new get_licence_by_id_controller_1.GetLicenceByIdController(new get_licence_by_id_useCase_1.GetLicenceByIdUseCase(repository));
    const removeLicenceController = new remove_licence_controller_1.RemoveLicenceController(new remove_licence_useCase_1.RemoveLicenceUseCase(repository));
    return {
        addLicenceController,
        editLicenceController,
        fetchManyLicencesController,
        getLicenceByIdController,
        removeLicenceController,
    };
}
//# sourceMappingURL=make-licence-controllers.js.map