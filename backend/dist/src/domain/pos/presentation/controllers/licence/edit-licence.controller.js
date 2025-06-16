"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditLicenceController = void 0;
const edit_licence_schema_1 = require("@/domain/pos/application/validations/licence/edit-licence-schema");
const http_status_code_1 = require("@/core/http/http-status-code");
const params_schema_1 = require("@/core/validations/common/params.schema");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class EditLicenceController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { id } = params_schema_1.IdParamsSchema.parse(request.params);
            const body = edit_licence_schema_1.editLicenceSchema.parse({ ...request.body, id });
            await this.useCase.execute({ ...body });
            return {
                statusCode: http_status_code_1.HttpStatusCode.OK,
                body: {
                    message: "Licença atualizada com sucesso",
                },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.EditLicenceController = EditLicenceController;
//# sourceMappingURL=edit-licence.controller.js.map