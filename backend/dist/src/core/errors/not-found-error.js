"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const http_status_code_1 = require("../http/http-status-code");
const app_error_1 = require("./app-error");
class NotFoundError extends app_error_1.AppError {
    constructor(message = "Not Found") {
        super(message, http_status_code_1.HttpStatusCode.NOT_FOUND);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=not-found-error.js.map