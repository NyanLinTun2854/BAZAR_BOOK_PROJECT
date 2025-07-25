const CONSTANT = {
  baseEndPoint: "/v1/api",
  adminBaseEndPoint: "/v1/api/admin",
  server: {
    basePath: process.env.API_BASE_PATH,
    port: process.env.PORT,
  },
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  saltRounds: 10,
};

export default CONSTANT;
