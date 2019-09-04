import {login} from "../middleware/AuthService";
import forum from "./Query/forumQuery";

export default {
  login: (_, args, {res}) => {
    return login(args, res);
  },
  ...forum
};
