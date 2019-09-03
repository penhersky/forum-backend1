import {gql} from "apollo-server-express";

export default gql`
  type Mutation {
    register(login: String!, email: String!, password: String!): resultAuth!
    addTopic(title: String!, body: String!): result!
    deleteTopic(id: ID!): result!
    addComment(message: String!, topicID: String!): result!
    deleteComment(id: ID!): result!
    setUserImage(image: Upload!): result!
  }
`;
