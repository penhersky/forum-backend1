import {gql} from "apollo-server-express";

export const User = gql`
  type User {
    id: ID!
    login: String!
    image: Upload
    email: String!
    createdAt: String!
  }
`;

export const userImage = gql`
  type userImage {
    id: ID!
    image: String!
    owner: User!
  }
`;

export const topic = gql`
  type topic {
    id: ID!
    title: String!
    body: String!
    author: User!
    createdAt: String!
    updatedAt: String!
    comments: [comment]
  }
`;

export const comment = gql`
  type comment {
    id: ID!
    message: String!
    author: User!
    topicOwner: topic!
    createdAt: String!
  }
`;
