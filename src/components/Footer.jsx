import logoXlImg from '../assets/logo-xl.png';
import youtubeImg from '../assets/instagram.png';
import facebookImg from '../assets/facebook.png';
import twitterImg from '../assets/twitter.png';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src={logoXlImg} alt="KeenKeeper" className="h-9 w-auto brightness-0 invert" />
          <span className="text-3xl font-bold tracking-tight">
            <span className="font-light">Keen</span>Keeper
          </span>
        </div>

        {/* Tagline */}
        <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-3">Social Links</p>
          <div className="flex justify-center gap-3">
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
              <img src={youtubeImg} alt="Instagram" className="w-4 h-4 brightness-0 invert" />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
              <img src={facebookImg} alt="Facebook" className="w-4 h-4 brightness-0 invert" />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
              <img src={twitterImg} alt="Twitter" className="w-4 h-4 brightness-0 invert" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>© 2026 KeenKeeper. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
