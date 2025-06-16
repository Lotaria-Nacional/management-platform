"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditPosController = void 0;
const edit_pos_schema_1 = require("../../application/validations/edit-pos-schema");
const http_status_code_1 = require("@/core/http/http-status-code");
const params_schema_1 = require("@/core/validations/common/params.schema");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class EditPosController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { id } = params_schema_1.IdParamsSchema.parse(request.params);
            const body = edit_pos_schema_1.editPosSchema.parse({ ...request.body, id });
            await this.useCase.execute({ ...body, id });
            return {
                statusCode: http_status_code_1.HttpStatusCode.OK,
                body: {
                    message: "POS atualizado com sucesso",
                },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.EditPosController = EditPosController;
//# sourceMappingURL=edit-pos.controller.js.map