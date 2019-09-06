import {register} from "../middleware/AuthService";
import forum from "./mutation/forumMutation";
import {updateUser, delUser} from "../middleware/user";
export default {
  register: (_, args) => {
    return register(args);
  },
  updateAdditionalInfo: (_, args, {req}) => {
    return updateUser(args, req);
  },
  deleteUser: (_, {id}, {req}) => {
    return delUser(id, req);
  },
  ...forum
};
