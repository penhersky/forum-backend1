import {gql} from "apollo-server-express";

export default gql`
  type result {
    id: ID
    message: String
    error: String
  }
  type resultAuth {
    id: String
    email: String
    error: String
  }
  type resultLogin {
    User: User
    error: String
  }
`;
