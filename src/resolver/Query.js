import {login} from "../middleware/AuthService";
import {getInfUser} from "../middleware/user";
import forum from "./Query/forumQuery";

export default {
  login: (_, args, {res}) => {
    return login(args, res);
  },
  getUser: (_, args) => {
    return getInfUser(args);
  },
  ...forum
};
