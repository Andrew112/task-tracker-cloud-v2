import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export default function AnalyticsChart({ data }) {
  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" />
    </LineChart>
  );
}
