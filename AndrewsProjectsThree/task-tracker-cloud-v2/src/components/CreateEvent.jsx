import { client } from '../api/events';

export default function CreateEvent() {
  const createEvent = async () => {
    await client.models.ActivityEvent.create({
      entityType: 'TASK',
      eventType: 'TASK_CREATED',
      value: 1,
      userId: 'user_1',
      timestamp: new Date().toISOString(),
    });
  };

  return <button onClick={createEvent}>Create Event</button>;
}
