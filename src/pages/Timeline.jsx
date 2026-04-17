import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MessageSquare, Video, Filter, Users } from 'lucide-react';
import callImg from '../assets/call.png';
import textImg from '../assets/text.png';
import videoImg from '../assets/video.png';

const FILTER_OPTIONS = ['All', 'Call', 'Text', 'Video', 'Meetup'];

const iconMap = {
  call: <img src={callImg} alt="Call" className="w-8 h-8" />,
  text: <img src={textImg} alt="Text" className="w-8 h-8" />,
  video: <img src={videoImg} alt="Video" className="w-8 h-8" />,
  meetup: (
    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
      <span className="text-yellow-600 text-base">🤝</span>
    </div>
  ),
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });
}

export default function Timeline() {
  const { timeline } = useApp();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? timeline
    : timeline.filter(e => e.type.toLowerCase() === filter.toLowerCase());

  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h1>

        {/* Filter */}
        <div className="relative mb-8 w-52">
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-9 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer shadow-sm"
          >
            {FILTER_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt === 'All' ? 'Filter timeline' : opt}</option>
            ))}
          </select>
          <Filter size={14} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
        </div>

        {/* Timeline Entries */}
        {sorted.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Users size={40} className="mx-auto mb-3 opacity-40" />
            <p>No timeline entries yet. Start checking in with friends!</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-sm overflow-hidden">
            {sorted.map(entry => (
              <div key={entry.id} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  {iconMap[entry.icon] || iconMap['meetup']}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    <strong>{entry.type}</strong>{' '}
                    <span className="font-normal text-gray-500">with {entry.friendName}</span>
                  </p>
                  <p className="text-xs text-gray-400">{formatDate(entry.date)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
