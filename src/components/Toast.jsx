import { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function Toast({ toast }) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (toast) {
      setExiting(false);
      setVisible(true);
      const timer = setTimeout(() => {
        setExiting(true);
        setTimeout(() => setVisible(false), 300);
      }, 2700);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!toast || !visible) return null;

  const colorMap = {
    green: 'bg-primary',
    orange: 'bg-orange-500',
    blue: 'bg-blue-600',
    red: 'bg-red-500',
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl text-white shadow-xl
        ${colorMap[toast.color] || 'bg-primary'}
        ${exiting ? 'toast-exit' : 'toast-enter'}
      `}
    >
      <CheckCircle size={18} />
      <span className="text-sm font-medium">{toast.message}</span>
    </div>
  );
}
