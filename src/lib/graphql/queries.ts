// src/lib/graphql/queries.ts
import { gql } from '@apollo/client'

export const GET_ISLANDS = gql`
  query GetIslands {
    islands {
      id
      name
      population
      congestion
      accessibility
      affordability
      airbnbCount
      geometry {
        type
        coordinates
      }
    }
  }
`

export const GET_ISLAND_BY_ID = gql`
  query GetIslandById($id: ID!) {
    island(id: $id) {
      id
      name
      population
      indicators {
        congestion
        accessibility
        affordability
      }
    }
  }
`
