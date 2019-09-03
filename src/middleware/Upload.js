import models from "../database/models/models";
import {isDevelopment} from "../config";
import fs from "fs";

const mkPath = fileName => {
  return "../Upload" + Date.now().toString() + "/" + fileName;
};

const addFile = (filePath, stream) => {
  return new Promise((resolvers, reject) => {
    stream
      .pipe(fs.createWriteStream(filePath))
      .on("finish", () => resolvers())
      .on("error", reject);
  });
};

export const storeUpload = async ({stream, filename}, req) => {
  if (!req.user) return {error: "The user is not authorized!"};
  const filePath = mkPath(filename);

  addFile(filePath, stream);

  if (addFile) return {error: "Critical error file not added!"};

  try {
    const oldFile = await models.userImageModel.find({owner: req.user.userId});
    if (oldFile) await models.userImageModel.deleteOne({_id: oldFile._id});
    const imageId = await models.userImageModel.create({
      image: filePath,
      owner: req.user.userId
    })._id;

    return {message: "Image added!", id: imageId};
  } catch (error) {
    if (isDevelopment) console.log(error);
    return {error: "Critical error file not added!"};
  }
};
