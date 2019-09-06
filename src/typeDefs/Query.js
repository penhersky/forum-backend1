import {gql} from "apollo-server-express";

export default gql`
  type Query {
    login(email: String!, password: String!): resultUser!
    getUser(id: ID!): resultUser!
    topics(page: Int): [topic]!
    topic(id: String!): topic!
  }
`;
