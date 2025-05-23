import { gql } from '@apollo/client'

export const GET_ALL_ISLANDS = gql`
  query GetAllIslands {
    islands {
      id
      name
      description
      imageUrl
    }
  }
`
