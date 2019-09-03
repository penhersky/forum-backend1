import Joi from "@hapi/joi";

export const userValidation = data => {
  const schema = {
    login: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .email()
      .min(6)
      .required(),
    password: Joi.string().min(5)
  };
  return Joi.validate(data, schema);
};

export const loginValidation = data => {
  const schema = {
    email: Joi.string()
      .email()
      .min(6)
      .required(),
    password: Joi.string().min(5)
  };
  return Joi.validate(data, schema);
};

export const topicValidation = data => {
  const schema = {
    title: Joi.string()
      .min(6)
      .max(60)
      .required(),
    body: Joi.string()
      .min(26)
      .max(1080)
      .required()
  };
  return Joi.validate(data, schema);
};

export const commentValidation = data => {
  const schema = {
    message: Joi.string()
      .min(1)
      .max(420)
      .required()
  };
  return Joi.validate(data, schema);
};
