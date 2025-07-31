import "reflect-metadata";
import { container } from "tsyringe";
import { IAuthRepository } from "@/domain/i_repository/i_auth_repository";
import { LoginUseCase, RegisterUseCase } from "@/domain/usecases/AuthUsecases";
import { AuthRepositoryImpl } from "@/data/repository_impl/auth_repository_impl";
import { IAuthRemoteDataSource } from "@/data/i_datasource/i_auth_remote_datasource";
import { AuthRemoteDataSourceImpl } from "@/data/datasources/remote/auth_remote_datasource";

// Register data sources
container.register<IAuthRemoteDataSource>("IAuthRemoteDataSource", {
  useClass: AuthRemoteDataSourceImpl,
});

// Register repositories
container.register<IAuthRepository>("IAuthRepository", {
  useClass: AuthRepositoryImpl,
});

// Use Cases
container.register("LoginUseCase", {
  useClass: LoginUseCase,
});

container.register("RegisterUseCase", {
  useClass: RegisterUseCase,
});

export { container };
