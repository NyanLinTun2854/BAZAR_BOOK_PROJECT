import { inject, injectable } from "tsyringe";
import { AuthToken } from "@/domain/models/auth_token";
import { IAuthRepository } from "@/domain/i_repository/i_auth_repository";
import type { IAuthRemoteDataSource } from "@/data/i_datasource/i_auth_remote_datasource";

@injectable()
export class AuthRepositoryImpl implements IAuthRepository {
  constructor(
    @inject("IAuthRemoteDataSource")
    private remoteDataSource: IAuthRemoteDataSource
  ) {}
  async login(email: string, password: string): Promise<AuthToken> {
    const res = await this.remoteDataSource.login(email, password);

    const accessToken: AuthToken = {
      accessToken: res.access_token,
    };

    return accessToken;
  }

  async register(name: string, email: string, password: string): Promise<void> {
    await this.remoteDataSource.register(name, email, password);
  }
}
