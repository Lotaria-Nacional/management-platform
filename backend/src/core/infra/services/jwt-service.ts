import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import { IJwtService } from "@/core/interfaces/jwt-service";

dotenv.config()

export class JwtService implements IJwtService {
  private readonly secret = process.env.JWT_SECRET || "default_secret";

  async sign(payload: Record<string, any>): Promise<string> {
    return jwt.sign(payload, this.secret, { expiresIn: "1d" });
  }

  async verify<T = any>(token: string): Promise<T> {
    return jwt.verify(token, this.secret) as T;
  }
}