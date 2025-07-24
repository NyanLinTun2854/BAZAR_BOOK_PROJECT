import { IResponse } from "@customTypes/index";

export const commonResponseSetup = (
  status_code: string,
  data: any,
  message: string | null
): IResponse => {
  let response: IResponse = {
    status:
      status_code === "200" || status_code === "201" ? "success" : "error",
    status_code,
  };

  if (data) {
    response.data = data;
  }

  if (message) {
    response.message = message;
  }

  return response;
};

export class HttpError extends Error {
  status_code: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.status_code = statusCode;
    Object.setPrototypeOf(this, HttpError.prototype); // Required for instanceof to work
  }
}
