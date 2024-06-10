import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).trim().required().messages({
    "string.empty": "Please input the required field",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,24}$"))
    .required()
    .messages({
      "string.empty": "Please input the required field",
      "string.pattern.base":
        "password must contains number AND character with at least 8 characters to 24 characters.",
    }),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .messages({
      "string.empty": "Please input the required field",
      "string.email": "Email address is in invalid form",
    }),
  phone: Joi.string().pattern(new RegExp("[0-9]{10}$")).required().messages({
    "string.empty": "Please input the required field",
    "string.pattern.base": "Please enter your phone numbers",
  }),
  confirmPassword: Joi.alternatives()
    .conditional(Joi.string(), {
      then: Joi.string().required().valid(Joi.ref("password")),
    })
    .messages({
      "alternatives.any": "Please confirm your password.",
      "any.only": "Password and Confirm password did not match",
    }),
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

export const guestSchema = Joi.object({
  name: Joi.string().min(2).trim().required().messages({
    "string.empty": "*Please input the required field",
  }),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .messages({
      "string.empty": "*Please input the required field",
      "string.email": "Email address is in invalid form",
    }),
  phone: Joi.string().pattern(new RegExp("[0-9]{10}$")).required().messages({
    "string.empty": "*Please input the required field",
    "string.pattern.base": "Please enter your phone numbers",
  }),
});
