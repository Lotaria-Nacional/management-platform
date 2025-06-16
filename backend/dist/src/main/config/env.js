"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
const nodeEnv = process.env.NODE_ENV?.trim() || "development";
dotenv_1.default.config({
    path: (0, path_1.resolve)(process.cwd(), `.env.${nodeEnv}`),
});
exports.env = {
    port: Number(process.env.PORT) || 8080,
    database_uri: process.env.DATABASE_URL || "",
};
//# sourceMappingURL=env.js.map