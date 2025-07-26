import { ICommonRsp } from "@/infrastructure/network/types/index.type";
import { ILoginResponse } from "@/infrastructure/network/types/auth.type";

export interface AuthRepository {
  login(email: string, password: string): Promise<ICommonRsp<ILoginResponse>>;
  register(
    name: string,
    email: string,
    password: string
  ): Promise<ICommonRsp<any>>;
}
