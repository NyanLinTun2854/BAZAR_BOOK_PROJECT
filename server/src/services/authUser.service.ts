import bcrypt from "bcryptjs";
import CONSTANT from "@config/constant";
import { HttpError } from "@utils/helperUtil";
import {
  ILoginServiceResp,
  IUser,
  IUserFromTokenDecode,
} from "@customTypes/authUser.interface";
import jwt from "jsonwebtoken";
import {
  createUser,
  getUserByEmail,
  isUserExisting,
} from "@models/authUser.model";

export const register = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  const isExist = await isUserExisting(email);
  if (isExist) {
    throw new HttpError("Email already registered.", 409);
  }

  const hashed = await bcrypt.hash(password, CONSTANT.saltRounds);

  const newUser: IUser = {
    name,
    email,
    password: hashed,
  };
  await createUser(newUser);
};

export const login = async (
  email: string,
  password: string
): Promise<ILoginServiceResp> => {
  // Validate User
  const user = await getUserByEmail(email);
  if (
    !user ||
    (user.password && !(await bcrypt.compare(password, user.password)))
  ) {
    throw new HttpError("Invalid email or password.", 401);
  }

  // Generate Tokens
  const payload = { id: user._id, name: user.name, email: user.email };
  const accessToken = jwt.sign(payload, CONSTANT.JWT_ACCESS_SECRET as string, {
    expiresIn: "30m",
  });
  const refreshToken = jwt.sign(
    payload,
    CONSTANT.JWT_REFRESH_SECRET as string,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

export const refresh = async (refresh_token: string): Promise<void> => {
  jwt.verify(
    refresh_token,
    CONSTANT.JWT_REFRESH_SECRET as string,
    async (err, decoded) => {
      if (err || !decoded || typeof decoded !== "object") {
        // throw new HttpError(err?.message, 403);
      }

      const user = decoded as IUserFromTokenDecode;
    }
  );
};
