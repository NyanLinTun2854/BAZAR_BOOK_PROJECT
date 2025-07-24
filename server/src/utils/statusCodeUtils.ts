const status = {
  Success: {
    code: "200",
    message: "Success",
  },
  ObjectNotFound: {
    code: "404",
    message: "No Data Found",
  },
  SystemError: {
    code: "500",
    message: "System Error",
  },
  AccessDenied: {
    code: "401",
    message: "Access Denied",
  },
  InvalidParameter: {
    code: "501",
    message: "Invalid Parameters",
  },
  Unauthorized: {
    code: "401",
    message: "Unauthorized",
  },
  BadRequest: {
    code: "400",
    message: "Bad Request",
  },
};

export default status;
