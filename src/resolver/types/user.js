import {readFileSync} from "fs";

import models from "../../database/models/models";

export const User = {
  image: async parent => {
    const userImage = await models.userImageModel.findOne({owner: parent.id});
    return await readFileSync(userImage.image);
  }
};

export const userImage = {
  owner: async parent => {
    return await models.userModel.findOne({_id: parent.owner});
  }
};
