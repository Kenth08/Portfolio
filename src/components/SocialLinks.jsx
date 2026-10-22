import { socials } from '../data/portfolio';

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ label, url, icon: Icon }) => (
        <li key={label}>
          <a href={url} target="_blank" rel="noreferrer" className="icon-btn" aria-label={`${label} (opens in a new tab)`}>
            <Icon size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
