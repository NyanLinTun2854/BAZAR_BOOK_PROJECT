import { commonResponseSetup } from "@utils/helperUtil";
import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err?.status_code || 500;
  const message = err.message || "Internal Server Error";

  const response = commonResponseSetup(String(status), null, message);
  res.status(status).json(response);
};
