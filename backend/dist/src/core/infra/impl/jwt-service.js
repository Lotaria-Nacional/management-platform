"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
class JwtService {
    constructor() {
        this.secret = process.env.JWT_SECRET || "default_secret";
    }
    async sign(payload) {
        return jsonwebtoken_1.default.sign(payload, this.secret, { expiresIn: "1d" });
    }
    async verify(token) {
        return jsonwebtoken_1.default.verify(token, this.secret);
    }
}
exports.JwtService = JwtService;
//# sourceMappingURL=jwt-service.js.map