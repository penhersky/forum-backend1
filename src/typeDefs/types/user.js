import {gql} from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    login: String!
    image: Upload
    email: String!
    sudo: Boolean!
    createdAt: String!
  }

  type userImage {
    id: ID!
    image: String!
    owner: User!
  }
`;
