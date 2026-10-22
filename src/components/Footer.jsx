import { FiArrowUp } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import SocialLinks from './SocialLinks';
import { scrollToTop } from '../utils/scrollToTop';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {year} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <span aria-hidden="true" className="mx-1 h-6 w-px bg-line" />
          <button type="button" onClick={scrollToTop} className="icon-btn" aria-label="Back to top">
            <FiArrowUp size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
