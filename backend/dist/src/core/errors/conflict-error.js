"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = void 0;
const http_status_code_1 = require("../http/http-status-code");
const app_error_1 = require("./app-error");
class ConflictError extends app_error_1.AppError {
    constructor(message = "Conflict") {
        super(message, http_status_code_1.HttpStatusCode.CONFLICT);
    }
}
exports.ConflictError = ConflictError;
//# sourceMappingURL=conflict-error.js.map