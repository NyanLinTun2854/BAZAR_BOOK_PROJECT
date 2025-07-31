import { AuthToken } from "@/domain/models/auth_token";

export interface IAuthRepository {
  login(email: string, password: string): Promise<AuthToken>;
  register(name: string, email: string, password: string): Promise<void>;
}
