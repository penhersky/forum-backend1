import models from "../database/models/models";
import {commentValidation} from "../validation/validation";
import {isDevelopment} from "../config";

export const createComment = async (comment, req) => {
  // verification for user authentication
  if (!req.user) return {error: "The user is not authorized!"};

  // validation topic
  const validation = commentValidation({message: comment.message});
  if (validation.error) return {error: validation.error.details[0].message};

  // check for topic
  const topic = await models.topicModel.findById(comment.topicID);
  if (!topic) return {error: "Topic does not exist!"};

  try {
    // create new topic
    const newComment = await models.commentModel.create({
      message: comment.message,
      author: req.user.userId,
      topicOwner: comment.topicID
    });
    return {message: "Comment added!", id: newComment._id};
  } catch (error) {
    if (isDevelopment) {
      console.log(error);
    } else {
      return {error: "The database is not active!"};
    }
  }
};

export const delComment = async (id, req) => {
  // verification for user authentication
  if (!req.user) return {error: "The user is not authorized!"};

  try {
    // check for topic!
    const comment = await models.commentModel.findOne({_id: id});
    if (!comment) return {error: "Comment does not exist!"};

    const sudo = await models.userModel.findById(req.user.userId.sudo);
    // checking the relevance of the topic for this author this user is admin
    if (comment.author != req.user.userId || !sudo)
      return {error: "This comment does not belong to you!"};

    // delete Topics
    await models.commentModel.deleteOne({_id: id});

    return {message: "Comment deleted!", id: comment._id};
  } catch (error) {
    if (isDevelopment) console.log(error);
    return {error: "The Comment could not be deleted!"};
  }
};
