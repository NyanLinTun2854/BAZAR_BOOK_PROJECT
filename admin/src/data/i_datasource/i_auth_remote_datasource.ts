import { AuthTokenModel } from "../models/auth_token_model";

export interface IAuthRemoteDataSource {
  login(email: string, password: string): Promise<AuthTokenModel>;
  register(name: string, email: string, password: string): Promise<void>;
}
