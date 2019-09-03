import {gql} from "apollo-server-express";

import result from "./result";
import mutation from "./mutations";
import Query from "./Query";
import {User, userImage, topic, comment} from "./types";

export const typeDefs = gql`
  ${Query}

  ${User}
  ${userImage}
  ${topic}
  ${comment}

  ${result}

  ${mutation}
`;
