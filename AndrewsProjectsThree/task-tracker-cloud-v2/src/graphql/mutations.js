/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActivityEvent = /* GraphQL */ `
  mutation CreateActivityEvent(
    $input: CreateActivityEventInput!
    $condition: ModelActivityEventConditionInput
  ) {
    createActivityEvent(input: $input, condition: $condition) {
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
export const updateActivityEvent = /* GraphQL */ `
  mutation UpdateActivityEvent(
    $input: UpdateActivityEventInput!
    $condition: ModelActivityEventConditionInput
  ) {
    updateActivityEvent(input: $input, condition: $condition) {
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
export const deleteActivityEvent = /* GraphQL */ `
  mutation DeleteActivityEvent(
    $input: DeleteActivityEventInput!
    $condition: ModelActivityEventConditionInput
  ) {
    deleteActivityEvent(input: $input, condition: $condition) {
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
