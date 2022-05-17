const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Admin {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    medicalLicenseNumber:Int!
    password: String!
    results: [Result]
  }

  type Result {
    _id: ID
    patientFirstName: String!
    patientLastName: String!
    phoneNumber: Int!
    code: String!
    createdAt: Float!
  }

  type Auth {
    token: ID
    user: Admin
  }

  type Query {
    admin: Admin
    results: [Result]
  }

  type Mutation {
    addAdmin(firstName: String!, lastName: String!, email: String!, medicalLicenseNumber:Int!, password: String!): Auth
    addResult(patientFirstName: String!, patientLastName: String!, phoneNumber: Int!, code: String!, createdAt: Float!): Result
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
