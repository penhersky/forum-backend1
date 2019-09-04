import Mutation from "./mutation";
import types from "./types";
import Query from "./Query";

export const resolvers = {
  Query,

  ...types,

  Mutation
};
