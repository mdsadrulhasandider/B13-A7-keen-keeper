import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Bell, Archive, Trash2, Edit2, Phone, MessageSquare, Video } from 'lucide-react';
import callImg from '../assets/call.png';
import textImg from '../assets/text.png';
import videoImg from '../assets/video.png';

function StatusBadge({ status }) {
  const map = {
    'overdue': { label: 'Overdue', cls: 'status-overdue' },
    'almost-due': { label: 'Almost Due', cls: 'status-almost' },
    'on-track': { label: 'On-Track', cls: 'status-ontrack' },
  };
  const s = map[status] || map['on-track'];
  return <span className={`status-badge ${s.cls}`}>{s.label}</span>;
}

export default function FriendDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, addTimelineEntry, showToast } = useApp();
  const [editGoal, setEditGoal] = useState(false);

  const friend = friends.find(f => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <p className="text-gray-400">Friend not found.</p>
        <button onClick={() => navigate('/')} className="mt-4 text-primary hover:underline text-sm">← Back to Home</button>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleCheckin = (type) => {
    addTimelineEntry(type, friend.name);
    const msgMap = {
      Call: `📞 Call logged with ${friend.name}!`,
      Text: `💬 Text logged with ${friend.name}!`,
      Video: `🎥 Video call logged with ${friend.name}!`,
    };
    showToast(msgMap[type], 'green');
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Friend Info Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-gray-100 mb-3"
                onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&background=1e4d3a&color=fff&size=80`; }}
              />
              <h2 className="text-lg font-bold text-gray-900 mb-2">{friend.name}</h2>
              <div className="flex justify-center gap-1.5 mb-2">
                <StatusBadge status={friend.status} />
                {friend.tags.map(tag => (
                  <span key={tag} className="tag-badge">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-2">{friend.email}</p>
              <p className="text-sm text-gray-500 italic mb-1">"{friend.bio}"</p>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm divide-y divide-gray-100">
              <button className="action-btn">
                <Bell size={16} className="text-gray-400" />
                <span>Snooze 2 Weeks</span>
              </button>
              <button className="action-btn">
                <Archive size={16} className="text-gray-400" />
                <span>Archive</span>
              </button>
              <button className="action-btn text-red-500 hover:text-red-600">
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="stat-card">
                <span className="text-3xl font-bold text-gray-900">{friend.days_since_contact}</span>
                <span className="text-xs text-gray-400 text-center">Days Since Contact</span>
              </div>
              <div className="stat-card">
                <span className="text-3xl font-bold text-gray-900">{friend.goal}</span>
                <span className="text-xs text-gray-400 text-center">Goal (Days)</span>
              </div>
              <div className="stat-card">
                <span className="text-xl font-bold text-gray-900">{formatDate(friend.next_due_date)}</span>
                <span className="text-xs text-gray-400 text-center">Next Due</span>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Relationship Goal</h3>
                <button
                  onClick={() => setEditGoal(!editGoal)}
                  className="text-xs border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50 flex items-center gap-1 transition-colors"
                >
                  <Edit2 size={11} /> Edit
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Connect every <strong className="text-gray-900">{friend.goal} days</strong>
              </p>
            </div>

            {/* Quick Check-In */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Check-In</h3>
              <div className="flex gap-3">
                <button className="checkin-btn" onClick={() => handleCheckin('Call')}>
                  <img src={callImg} alt="Call" className="w-7 h-7" />
                  <span>Call</span>
                </button>
                <button className="checkin-btn" onClick={() => handleCheckin('Text')}>
                  <img src={textImg} alt="Text" className="w-7 h-7" />
                  <span>Text</span>
                </button>
                <button className="checkin-btn" onClick={() => handleCheckin('Video')}>
                  <img src={videoImg} alt="Video" className="w-7 h-7" />
                  <span>Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
