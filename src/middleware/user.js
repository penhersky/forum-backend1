import models from "../database/models/models";
import {isDevelopment} from "../config";
import {additionalUserInfo} from "../validation/validation";

export const getInfUser = async args => {
  try {
    const User = await models.userModel.findById(args.id);
    if (!User) return {error: "User is not fount!"};
    return {User};
  } catch (error) {
    if (isDevelopment) console.log(error);
    return {error: "Error"};
  }
};

export const updateUser = async (
  {login, birthday, residence, links, skills, company, position, description},
  req
) => {
  if (!req.user) return {error: "The user is not authorized!"};

  const validation = additionalUserInfo(topic);
  if (validation.error) return {error: validation.error.details[0].message};

  try {
    const loginExist = await models.userModel.findOne({login: user.login});
    if (loginExist) return {error: "Login already exists!"};
    await models.userModel.findById(req.user.userId).update({login});

    await models.fullUserModel.find({owner: req.user.userId}).update({
      birthday,
      residence,
      company,
      position,
      links,
      skills,
      description
    });
  } catch (error) {
    if (isDevelopment) console.log(error);
    return {error: "User update failed!"};
  }
};

export const delUser = async (id, req) => {
  if (!req.user) return {error: "The user is not authorized!"};

  try {
    const userIsSudo = await models.userModel.findById(req.user.userId);
    const user = await models.userModel.findById(id);
    if (userIsSudo.sudo || user._id != req.user.userId)
      return {error: "You cannot delete a user!"};

    await models.userModel.deleteOne({_id: id});
    await models.fullUserModel.deleteOne({owner: id});
    await models.userImageModel.deleteOne({owner: id});

    return {message: "Comment deleted!", id: user._id};
  } catch (error) {
    if (isDevelopment) console.log(error);
    return {error: "Failed to delete user!"};
  }
};
