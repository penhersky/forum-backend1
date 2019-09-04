import {gql} from "apollo-server-express";

export default gql`
  type topic {
    id: ID!
    title: String!
    body: String!
    author: User!
    createdAt: String!
    updatedAt: String!
    comments: [comment]
  }

  type comment {
    id: ID!
    message: String!
    author: User!
    topicOwner: topic!
    createdAt: String!
  }
`;
