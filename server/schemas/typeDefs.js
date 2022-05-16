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
    createdAt: Float!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    results: [Result]
    admin: Admin
  }

  type Mutation {
    addAdmin( _id: ID, firstName: String!, lastName: String!, email: String!, medicalLicenseNumber:Int!, password: String!): Auth
    addResult(_id: ID, patientFirstName: String!, patientLastName: String!, phoneNumber: Int!, createdAt: Float!): Result
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
