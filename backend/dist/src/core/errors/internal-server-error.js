"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const http_status_code_1 = require("../http/http-status-code");
const app_error_1 = require("./app-error");
class InternalServerError extends app_error_1.AppError {
    constructor(message = "Internal Server Error") {
        super(message, http_status_code_1.HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=internal-server-error.js.map