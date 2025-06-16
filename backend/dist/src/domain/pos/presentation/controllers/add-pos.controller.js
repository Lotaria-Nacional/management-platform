"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPosController = void 0;
const http_status_code_1 = require("@/core/http/http-status-code");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
const add_pos_schema_1 = require("../../application/validations/add-pos-schema");
class AddPosController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const body = add_pos_schema_1.addPosSchema.parse(request.body);
            console.log(body);
            await this.useCase.execute({ ...body });
            return {
                statusCode: http_status_code_1.HttpStatusCode.OK,
                body: {
                    message: "POS adicionado com sucesso",
                },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.AddPosController = AddPosController;
//# sourceMappingURL=add-pos.controller.js.map