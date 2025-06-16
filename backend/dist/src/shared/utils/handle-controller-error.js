"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleControllerError = handleControllerError;
const zod_1 = require("zod");
const app_error_1 = require("@/core/errors/app-error");
const http_status_code_1 = require("@/core/http/http-status-code");
function handleControllerError(error) {
    if (error instanceof app_error_1.AppError) {
        return {
            body: { message: error.message },
            statusCode: error.statusCode,
        };
    }
    if (error instanceof zod_1.ZodError) {
        return {
            body: {
                message: error.errors[0].message,
            },
            statusCode: http_status_code_1.HttpStatusCode.BAD_REQUEST,
        };
    }
    console.error("Unhandled Error: " + error);
    return {
        body: { message: "Erro interno no servidor" },
        statusCode: 500,
    };
}
//# sourceMappingURL=handle-controller-error.js.map