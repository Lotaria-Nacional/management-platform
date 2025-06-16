export interface IJwtService {
  sign(payload: Record<string, any>): Promise<string>;
  verify<T = any>(token: string): Promise<T>;
}