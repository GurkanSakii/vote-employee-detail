import { gql } from "@apollo/client";

const GET_EMPLOYEES = gql`
  query {
    users {
      data {
        id
        name
        email
        username
        phone
        website
      }
    }
  }
`;

const EMPLOYEE_QUERY = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      name
      email
      username
      phone
      website
    }
  }
`;

export { GET_EMPLOYEES, EMPLOYEE_QUERY };
