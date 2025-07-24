import {
  userLoginSchema,
  userRegisterSchema,
  userTokenRefreshSchema,
} from "@utils/joiSchemasUtils";
import { commonResponseSetup } from "@utils/helperUtil";
import { NextFunction, Request, Response } from "express";
import * as authUserService from "@services/authUser.service";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let response;
  try {
    const { error } = userRegisterSchema.validate(req.body);

    if (error) {
      response = commonResponseSetup("400", null, error.details[0].message);
      res.status(400).json(response);
      return;
    }

    const { name, email, password } = req.body;
    await authUserService.register(name, email, password);

    response = commonResponseSetup("201", null, "Successfully Register!");
    res.status(200).json(response);
  } catch (err: any) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let response;
  try {
    const { error } = userLoginSchema.validate(req.body);

    if (error) {
      response = commonResponseSetup("400", null, error.details[0].message);
      res.status(400).json(response);
      return;
    }

    const { email, password } = req.body;
    const { accessToken, refreshToken } = await authUserService.login(
      email,
      password
    );

    const data = {
      access_token: accessToken,
    };

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    response = commonResponseSetup("200", data, "Successfully Login!");
    res.status(200).json(response);
  } catch (err: any) {
    next(err);
  }
};

export const refresh = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let response;
  try {
    const { error } = userTokenRefreshSchema.validate(req.body);

    if (error) {
      response = commonResponseSetup("400", null, error.details[0].message);
      res.status(400).json(response);
      return;
    }

    const { refresh_token } = req.body;
    await authUserService.refresh(refresh_token);
  } catch (err: any) {}
};
