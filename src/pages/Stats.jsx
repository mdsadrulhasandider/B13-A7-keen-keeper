import { useApp } from '../context/AppContext';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#7c3aed', '#1e4d3a', '#22c55e'];

export default function Stats() {
  const { timeline } = useApp();

  const counts = timeline.reduce(
    (acc, e) => {
      const t = e.type.toLowerCase();
      if (t === 'call') acc.Call++;
      else if (t === 'text') acc.Text++;
      else if (t === 'video') acc.Video++;
      return acc;
    },
    { Call: 0, Text: 0, Video: 0 }
  );

  const data = [
    { name: 'Text', value: counts.Text },
    { name: 'Call', value: counts.Call },
    { name: 'Video', value: counts.Video },
  ].filter(d => d.value > 0);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Friendship Analytics</h1>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-6">By Interaction Type</p>

          {data.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p>No interaction data yet. Log some check-ins first!</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={130}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '13px' }}
                />
                <Legend
                  iconType="circle"
                  iconSize={10}
                  formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
