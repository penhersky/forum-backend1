import {register} from "../middleware/AuthService";
import forum from "./mutation/forumMutation";
export default {
  register: (_, args) => {
    return register(args);
  },
  ...forum
};
