import { gql } from '@apollo/client';

export const QUERY_ADMIN = gql`
  query admin {
    Admin {
      _id
    firstName
    lastName
    email
    medicalLicenseNumber
    password
    }
  }
`;

export const QUERY_RESULTS = gql`
  query results {
    Result {
    _id
    patientFirstName
    patientLastName
    phoneNumber
    code
    createdAt
    }
  }
`;