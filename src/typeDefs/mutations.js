import {gql} from "apollo-server-express";

export default gql`
  type Mutation {
    register(login: String!, email: String!, password: String!): resultAuth!
    setUserImage(image: Upload!): result!
    updateAdditionalInfo(
      login: String
      birthday: String
      residence: String
      links: [String!]
      skills: [String!]
      company: [String]
      position: String
      description: String
    ): result
    deleteUser(id: ID!): result

    addTopic(title: String!, body: String!): result!
    deleteTopic(id: ID!): result!

    addComment(message: String!, topicID: String!): result!
    deleteComment(id: ID!): result!
  }
`;
