import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Plus, Users, CheckCircle, AlertCircle, Activity } from 'lucide-react';

function StatusBadge({ status }) {
  const map = {
    'overdue': { label: 'Overdue', cls: 'status-overdue' },
    'almost-due': { label: 'Almost Due', cls: 'status-almost' },
    'on-track': { label: 'On-Track', cls: 'status-ontrack' },
  };
  const s = map[status] || map['on-track'];
  return <span className={`status-badge ${s.cls}`}>{s.label}</span>;
}

export default function Home() {
  const { friends, loading, stats } = useApp();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Banner */}
        <section className="bg-white border-b border-gray-100 py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Friends to keep close in your life
            </h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto mb-6">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
            <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200">
              <Plus size={16} />
              Add a Friend
            </button>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="stat-card">
              <span className="text-3xl font-bold text-gray-900">{stats.total}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><Users size={12} /> Total Friends</span>
            </div>
            <div className="stat-card">
              <span className="text-3xl font-bold text-gray-900">{stats.onTrack}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><CheckCircle size={12} /> On Track</span>
            </div>
            <div className="stat-card">
              <span className="text-3xl font-bold text-gray-900">{stats.needAttention}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><AlertCircle size={12} /> Need Attention</span>
            </div>
            <div className="stat-card">
              <span className="text-3xl font-bold text-gray-900">{stats.interactions}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><Activity size={12} /> Interactions This Month</span>
            </div>
          </div>

          {/* Friends Grid */}
          <h2 className="text-lg font-semibold text-gray-900 mb-5">Your Friends</h2>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="spinner" />
              <p className="text-gray-400 text-sm">Loading your friends...</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {friends.map(friend => (
                <div
                  key={friend.id}
                  className="friend-card"
                  onClick={() => navigate(`/friend/${friend.id}`)}
                >
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                    onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&background=1e4d3a&color=fff`; }}
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{friend.name}</p>
                    <p className="text-xs text-gray-400">{friend.days_since_contact}d ago</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {friend.tags.map(tag => (
                      <span key={tag} className="tag-badge">{tag}</span>
                    ))}
                  </div>
                  <StatusBadge status={friend.status} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
