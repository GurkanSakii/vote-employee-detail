import { gql } from "@apollo/client";

const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      firstName
      lastName
      jobTitle
    }
  }
`;

const EMPLOYEE_QUERY = gql`
  query GetEmployee($id: ID!) {
    employee(id: $id) {
      id
      firstName
      lastName
      jobTitle
      email
      phone
      address
    }
  }
`;

export { GET_EMPLOYEES, EMPLOYEE_QUERY };
