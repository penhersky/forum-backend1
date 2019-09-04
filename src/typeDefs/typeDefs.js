import {gql} from "apollo-server-express";
import mutation from "./mutations";
import Query from "./Query";
import types from "./types";

export const typeDefs = gql`
  ${Query}

  ${types}

  ${mutation}
`;
