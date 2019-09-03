import {login} from "../middleware/AuthService";
import models from "../database/models/models";
import {isDevelopment, countItems} from "../config";

export default {
  login: (_, args, {res}) => {
    return login(args, res);
  },

  topics: async (_, {page}) => {
    try {
      const allTopics = await models.topicModel.find();
      if (page === undefined) return allTopics;
      // pagination
      return await allTopics.slice((page - 1) * countItems, page * countItems);
    } catch (e) {
      if (isDevelopment) console.log(e);
    }
  },

  topic: async id => {
    return await models.topicMode.findById(id);
  }
};
