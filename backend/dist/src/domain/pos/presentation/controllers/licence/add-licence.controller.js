"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLicenceController = void 0;
const http_status_code_1 = require("@/core/http/http-status-code");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
const add_licence_schema_1 = require("@/domain/pos/application/validations/licence/add-licence-schema");
class AddLicenceController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const body = add_licence_schema_1.addLicenceSchema.parse(request.body);
            await this.useCase.execute({ ...body });
            return {
                statusCode: http_status_code_1.HttpStatusCode.OK,
                body: { message: "Licença criada com sucesso" },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.AddLicenceController = AddLicenceController;
//# sourceMappingURL=add-licence.controller.js.map