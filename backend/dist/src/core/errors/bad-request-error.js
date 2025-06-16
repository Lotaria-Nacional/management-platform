"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const http_status_code_1 = require("../http/http-status-code");
const app_error_1 = require("./app-error");
class BadRequestError extends app_error_1.AppError {
    constructor(message = "Bad Request") {
        super(message, http_status_code_1.HttpStatusCode.BAD_REQUEST);
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=bad-request-error.js.map