import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart2 } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="KeenKeeper" className="h-7 w-auto" />
          <span className="font-bold text-lg tracking-tight">
            <span className="text-gray-900">Keen</span>
            <span className="text-primary">Keeper</span>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <Home size={15} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <Clock size={15} />
            <span>Timeline</span>
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <BarChart2 size={15} />
            <span>Stats</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
