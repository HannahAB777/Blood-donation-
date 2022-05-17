import { gql } from '@apollo/client';

export const QUERY_ADMIN = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_RESULTS = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;