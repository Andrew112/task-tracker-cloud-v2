/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivityEvent = /* GraphQL */ `
  query GetActivityEvent($id: ID!) {
    getActivityEvent(id: $id) {
      id
      entityType
      eventType
      value
      userId
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listActivityEvents = /* GraphQL */ `
  query ListActivityEvents(
    $filter: ModelActivityEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        entityType
        eventType
        value
        userId
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
