import { inject, injectable } from "tsyringe";
import type { IAuthRepository } from "../i_repository/i_auth_repository";
import { AuthToken } from "@/domain/models/auth_token";

@injectable()
export class LoginUseCase {
  constructor(@inject("IAuthRepository") private authRepo: IAuthRepository) {}

  async execute(email: string, password: string): Promise<AuthToken> {
    if (!email) {
      throw new Error("Email must not be empty!");
    }

    if (!password) {
      throw new Error("Password must not be empty!");
    }

    return await this.authRepo.login(email, password);
  }
}

@injectable()
export class RegisterUseCase {
  constructor(@inject("IAuthRepository") private authRepo: IAuthRepository) {}

  async execute(name: string, email: string, password: string): Promise<void> {
    if (!name) {
      throw new Error("Name must not be empty!");
    }

    if (!email) {
      throw new Error("Email must not be empty!");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format!");
    }

    if (!password) {
      throw new Error("Password must not be empty!");
    }

    await this.authRepo.register(name, email, password);
  }
}
