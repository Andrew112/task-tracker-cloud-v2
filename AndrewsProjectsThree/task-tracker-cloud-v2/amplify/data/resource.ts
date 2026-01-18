import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  ActivityEvent: a.model({
    id: a.id(),
    entityType: a.string().required(),   // TASK, USER, SYSTEM
    eventType: a.string().required(),    // CREATED, UPDATED, COMPLETED
    value: a.integer(),
    userId: a.string(),
    timestamp: a.datetime().required(),
  })
  .authorization((allow) => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

