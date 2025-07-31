import { postRequest } from "@/infrastructure/network/network";
import { AuthTokenModel } from "@/data/models/auth_token_model";
import { injectable } from "tsyringe";
import { IAuthRemoteDataSource } from "@/data/i_datasource/i_auth_remote_datasource";

@injectable()
export class AuthRemoteDataSourceImpl implements IAuthRemoteDataSource {
  async login(email: string, password: string): Promise<AuthTokenModel> {
    return await postRequest<AuthTokenModel>("/auth/login", {
      email,
      password,
    });
  }

  async register(name: string, email: string, password: string): Promise<void> {
    await postRequest<void>("/auth/register", {
      name,
      email,
      password,
    });
  }
}
