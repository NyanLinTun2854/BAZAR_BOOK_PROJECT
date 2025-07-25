import Joi from "joi";

export const userRegisterSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.base": `"name" should be a type of 'text'`,
    "string.empty": `"name" cannot be empty field`,
    "string.min": `"name" should have a minimum length of {#limit}`,
    "any.required": `"name" is a required field`,
  }),
  email: Joi.string().email().required().messages({
    "string.email": `"email" must be a valid email`,
    "any.required": `"email" is a required field`,
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,30}$/)
    .required()
    .messages({
      "string.pattern.base": `"password" must be 6-30 characters and include only letters, numbers, and special characters`,
    }),
});

export const userLoginSchema = Joi.object({
  email: Joi.string().required().messages({
    "string.email": `"email" must be a valid email`,
    "string.empty": `"email" cannot be an empty field`,
    "any.required": `"email" is a required field`,
  }),
  password: Joi.string().required().messages({
    "any.required": `"password" is a required field`,
    "string.empty": `"passwrod" cannot be empty field`,
  }),
});

export const userTokenRefreshSchema = Joi.object({
  refresh_token: Joi.string().required().messages({
    "any.required": `"refresh_token" is a required field`,
    "string.empty": `"refresh_token" cannot be empty field`,
  }),
});

export const adminUserRegisterSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.base": `"name" should be a type of 'text'`,
    "string.empty": `"name" cannot be empty field`,
    "string.min": `"name" should have a minimum length of {#limit}`,
    "any.required": `"name" is a required field`,
  }),
  email: Joi.string().email().required().messages({
    "string.email": `"email" must be a valid email`,
    "any.required": `"email" is a required field`,
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,30}$/)
    .required()
    .messages({
      "string.pattern.base": `"password" must be 6-30 characters and include only letters, numbers, and special characters`,
    }),
});

export const adminUserLoginSchema = Joi.object({
  email: Joi.string().required().messages({
    "string.email": `"email" must be a valid email`,
    "string.empty": `"email" cannot be an empty field`,
    "any.required": `"email" is a required field`,
  }),
  password: Joi.string().required().messages({
    "any.required": `"password" is a required field`,
    "string.empty": `"passwrod" cannot be empty field`,
  }),
});

export const adminUserTokenRefreshSchema = Joi.object({
  refresh_token: Joi.string().required().messages({
    "any.required": `"refresh_token" is a required field`,
    "string.empty": `"refresh_token" cannot be empty field`,
  }),
});
