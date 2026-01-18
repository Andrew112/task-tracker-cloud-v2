  //@ts-nocheck
 import { a, defineData } from '@aws-amplify/backend';
//this is compatiable code, for task tracker...
const schema = a.schema({
  ActivityEvent: a.model({
    id: a.id(),
    entityType: a.string().required(),   // TASK, USER, SYSTEM
    eventType: a.string().required(),    // CREATED, UPDATED, COMPLETED
    value: a.integer(),
    userId: a.string(),
    timestamp: a.datetime().required(),
  })
  .authorization([a.allow.public()])
});

export const data = defineData({
  schema,
});


