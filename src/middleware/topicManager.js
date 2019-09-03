import models from "../database/models/models";
import {topicValidation} from "../validation/validation";
import {isDevelopment} from "../config";

export const createTopic = async (topic, req) => {
  // verification for user authentication
  if (!req.user) return {error: "The user is not authorized!"};

  // validation topic
  const validation = topicValidation(topic);
  if (validation.error) return {error: validation.error.details[0].message};

  try {
    // create new topic
    const newTopic = await models.topicModel.create({
      title: topic.title,
      body: topic.body,
      author: req.user.userId
    });
    return {message: "Topic added!", id: newTopic._id};
  } catch (error) {
    if (isDevelopment) {
      console.log(error);
    } else {
      return {error: "The database is not active!"};
    }
  }
};

export const delTopic = async (id, req) => {
  // verification for user authentication
  if (!req.user) return {error: "The user is not authorized!"};

  try {
    // check for topic!
    const topic = await models.topicModel.findOne({_id: id});
    if (!topic) return {error: "Topic does not exist!"};

    // checking the relevance of the topic for this author
    if (topic.author != req.user.userId)
      return {error: "This topic does not belong to you!"};

    // delete Topic
    await models.topicModel.deleteOne({_id: id});

    return {message: "topic deleted!", id: topic._id};
  } catch (error) {
    if (isDevelopment) console.log(error);
    return {error: "The topic could not be deleted!"};
  }
};
