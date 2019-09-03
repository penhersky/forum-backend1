import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import models from "../database/models/models";
import {userValidation, loginValidation} from "../validation/validation";
import {salt as SALT} from "../config";
import {secret, image} from "../config";

export const register = async user => {
  // validation user
  const validation = userValidation(user);
  if (validation.error) return {error: validation.error.details[0].message};

  // checking the existence email
  const emailExist = await models.userModel.findOne({email: user.email});
  if (emailExist) return {error: "Email already exists!"};
  // checking the existence login
  const loginExist = await models.userModel.findOne({login: user.login});
  if (loginExist) return {error: "Login already exists!"};
  // Hash password
  const salt = await bcrypt.genSalt(Number(SALT));
  const hashPassword = await bcrypt.hash(user.password, salt);
  try {
    // crate user
    const newUser = await models.userModel.create({
      login: user.login,
      email: user.email,
      password: hashPassword
    });
    // add default image
    await models.userImageModel.create({
      image,
      owner: newUser._id
    });
    return {
      id: newUser._id,
      email: newUser.email
    };
  } catch (error) {
    return {error};
  }
};

export const login = async (user, res) => {
  // validation user
  const validation = loginValidation(user);
  if (validation.error) return {error: validation.error.details[0].message};
  // checking the existence email
  const fUser = await models.userModel.findOne({email: user.email});
  if (!fUser) return {error: "Email is not fount!"};
  // Password is correct
  const validPassword = await bcrypt.compare(user.password, fUser.password);
  if (!validPassword) return {error: "Invalid password!"};

  // create token
  const token = jwt.sign(
    {
      userId: fUser._id,
      userLogin: fUser.login,
      userEmail: fUser.email
    },
    secret
  );
  res.cookie("auth-token", token);
  return {User: fUser};
};
