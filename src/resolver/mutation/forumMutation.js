import {createTopic, delTopic} from "../../middleware/topicManager";
import {createComment, delComment} from "../../middleware/commentManage";
import {storeUpload} from "../../middleware/Upload";
export default {
  addTopic: (_, args, {req}) => {
    return createTopic(args, req);
  },
  deleteTopic: (_, args, {req}) => {
    return delTopic(args.id, req);
  },
  addComment: (_, args, {req}) => {
    return createComment(args, req);
  },
  deleteComment: (_, args, {req}) => {
    return delComment(args.id, req);
  },
  setUserImage: async (_, {file}, {req}) => {
    const {stream, filename} = await file;
    return await storeUpload({stream, filename}, req);
  }
};
