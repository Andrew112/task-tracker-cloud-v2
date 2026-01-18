import AnalyticsChart from './components/AnalyticsChart';
import CreateEvent from './components/CreateEvent';
import { useLiveEvents } from './components/useLiveEvents';

export default function App() {
  const events = useLiveEvents();

  return (
    <>
      <h1>Real-Time Analytics Dashboard</h1>
      <CreateEvent />
      <AnalyticsChart data={events} />
    </>
  );
}
