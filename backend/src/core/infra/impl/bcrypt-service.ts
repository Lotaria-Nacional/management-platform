import bcrypt from "bcrypt";
import { IHashService } from "@/core/interfaces/hash-service";

export class BcryptService implements IHashService {
  async hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, 10);
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}