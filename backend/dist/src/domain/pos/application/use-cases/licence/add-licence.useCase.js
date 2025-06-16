"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLicenceUseCase = void 0;
const licence_entity_1 = require("@/domain/pos/enterprise/entities/licence.entity");
const licence_enums_1 = require("@/domain/pos/enterprise/enums/licence.enums");
class AddLicenceUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    async execute({ licence_reference, administration_id, pos_id }) {
        const licence = licence_entity_1.Licence.create({
            licence_reference,
            status: licence_enums_1.LicenceStatusEnum.NOT_USED,
            administration_id,
            pos_id,
        });
        licence.checkLicenceStatus();
        await this.repo.create(licence);
    }
}
exports.AddLicenceUseCase = AddLicenceUseCase;
//# sourceMappingURL=add-licence.useCase.js.map