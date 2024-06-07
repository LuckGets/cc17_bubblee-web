import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).trim().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,24}$")).required(),
  email: Joi.string().email({ tlds: { allow: ["com", "net"] } }),
  phone: Joi.string().pattern(new RegExp("[0-9]{10}$")).required(),
});

export const loginSchema = Joi.object({
  emailOrPhone: Joi.alternatives([
    Joi.string().email({ tlds: { allow: ["com", "net"] } }),
    Joi.string().pattern(new RegExp("[0-9]{10}$")),
  ])
    .required()
    .messages({
      "alternatives.match":
        "Please enter your email or phone number you have registererd.",
      "string.pattern.base":
        "Please enter your email or phone number you have registererd.",
      "string.email":
        "Please enter your email or phone number you have registererd.",
    }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,24}$"))
    .required()
    .messages({
      "string.pattern.base":
        "password must be a number AND character with at least 8 characters to 24 characters.",
    }),
});
