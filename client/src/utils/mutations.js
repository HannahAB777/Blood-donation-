import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_ADMIN = gql`
  mutation AddAdmin(
    $firstName: String!
    $lastName: String!
    $email: String!
    $medicalLicenseNumber: String!
    $password: String!
  ) {
    addAdmin(
      firstName: $firstName
      lastName: $lastName
      email: $email
      medicalLicenseNumber: $medicalLicenseNumber
      password: $password
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_RESULT = gql`
  mutation addResult(
    $patientFirstName: String!
    $patientLastName: String!
    $phoneNumber: String!
    $code: String!
    $createdAt: String!
  ) {
    addResult(
      patientFirstName: $patientFirstName
      patientLastName: $patientLastName
      phoneNumber: $phoneNumber
      code: $code
      createdAt: $createdAt
    ) {
      _id
      email
    }
  }
`;
