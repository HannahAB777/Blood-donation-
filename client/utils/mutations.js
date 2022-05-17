import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      admin {
        _id
      }
    }
  }
`;

export const ADD_ADMIN = gql`
  mutation addAdmin($firstName: String!, $lastName: String!, $email: String!, $medicalLicenseNumber: Int!, $password: String!) {
    addAdmin(firstName: $firstName, lastName: $lastName, email: $email, medicalLicenseNumber: $medicalLicenseNumber, password: $password) {
      token
      user {
        _id
      }
      }
    }
  }
`;

export const ADD_RESULT = gql`
mutation addResult($patientFirstName: String!, $patientLastName: String!, $phoneNumber: Int!, $code: String!, $createdAt: Float!) {
  addResult(patientFirstName: $patientFirstName, patientLastName: $patientLastName, phoneNumber: $phoneNumber, code: $code, createdAt: $createdAt) {
      Result
       {
        _id
      }
    }
  }
`;
