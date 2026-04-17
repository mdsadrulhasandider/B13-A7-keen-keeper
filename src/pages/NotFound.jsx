import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-sm">
        <h1 className="text-8xl font-black text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Page Not Found</h2>
        <p className="text-gray-500 text-sm mb-8">
          Looks like this friendship doesn't exist yet. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          <Home size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
