import { useEffect, useState } from 'react';

import { client } from '../api/events';

export function useLiveEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    client.models.ActivityEvent.observeQuery().subscribe({
      next: ({ items }) => setEvents(items),
    });
  }, []);

  return events;
}
