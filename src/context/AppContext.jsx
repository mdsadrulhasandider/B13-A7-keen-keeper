import { createContext, useContext, useState, useEffect } from 'react';
import friendsData from '../data/friends.json';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState(() => {
    try {
      const saved = localStorage.getItem('kk_timeline');
      return saved ? JSON.parse(saved) : [
        { id: 1, type: 'Meetup', friendName: 'Tom Baker', date: '2026-03-29', icon: 'meetup' },
        { id: 2, type: 'Text', friendName: 'Sarah Chen', date: '2026-03-28', icon: 'text' },
        { id: 3, type: 'Meetup', friendName: 'Olivia Martinez', date: '2026-03-26', icon: 'meetup' },
        { id: 4, type: 'Video', friendName: 'Aisha Patel', date: '2026-03-23', icon: 'video' },
        { id: 5, type: 'Meetup', friendName: 'Sarah Chen', date: '2026-03-21', icon: 'meetup' },
        { id: 6, type: 'Call', friendName: 'Marcus Johnson', date: '2026-03-18', icon: 'call' },
        { id: 7, type: 'Meetup', friendName: 'Aisha Patel', date: '2026-03-17', icon: 'meetup' },
        { id: 8, type: 'Text', friendName: 'Olivia Martinez', date: '2026-03-13', icon: 'text' },
        { id: 9, type: 'Call', friendName: 'Lisa Nakamura', date: '2026-03-11', icon: 'call' },
        { id: 10, type: 'Call', friendName: 'Sarah Chen', date: '2026-03-11', icon: 'call' },
        { id: 11, type: 'Video', friendName: 'Marcus Johnson', date: '2026-03-06', icon: 'video' },
        { id: 12, type: 'Video', friendName: "Ryan O'Brien", date: '2026-02-24', icon: 'video' },
      ];
    } catch {
      return [];
    }
  });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Simulate fetch delay
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('kk_timeline', JSON.stringify(timeline));
  }, [timeline]);

  const addTimelineEntry = (type, friendName) => {
    const today = new Date().toISOString().split('T')[0];
    const newEntry = {
      id: Date.now(),
      type,
      friendName,
      date: today,
      icon: type.toLowerCase(),
    };
    setTimeline(prev => [newEntry, ...prev]);
  };

  const showToast = (message, color = 'green') => {
    setToast({ message, color });
    setTimeout(() => setToast(null), 3000);
  };

  const stats = {
    total: friends.length,
    onTrack: friends.filter(f => f.status === 'on-track').length,
    needAttention: friends.filter(f => f.status !== 'on-track').length,
    interactions: timeline.length,
  };

  return (
    <AppContext.Provider value={{ friends, loading, timeline, addTimelineEntry, toast, showToast, stats }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
