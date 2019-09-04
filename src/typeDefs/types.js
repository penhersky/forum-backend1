import {gql} from "apollo-server-express";
import result from "./types/result";
import user from "./types/user";
import forum from "./types/forum";

export default gql`
  ${user}
  ${result}
  ${forum}
`;
