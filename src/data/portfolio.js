/**
 * All portfolio content lives in this file.
 * Edit text, links, projects, and certificates here — no component changes needed.
 *
 * Icons come from react-icons (https://react-icons.github.io/react-icons/).
 * To use a new icon, import it below and reference it in the data.
 */
import { FaCss3Alt, FaDatabase, FaFacebook, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJava, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiVercel } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { FiCode, FiLayers, FiPenTool, FiTool } from 'react-icons/fi';

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------
export const profile = {
  name: 'Kenth Charles Repollo',
  shortName: 'Kenth',
  initials: 'KCR',
  roles: ['BSIT Student', 'Aspiring Full-Stack Developer', 'Frontend Developer', 'UI/UX Enthusiast'],
  intro:
    'I’m a 4th-year BSIT student at Davao del Norte State College who builds modern, responsive web applications with React.',
  image: '/images/profile.jpg',
  cvUrl: '/cv.pdf',
  location: 'Davao, Philippines',
  email: 'kenthrepollo@gmail.com',
  availability: 'Open to internships and junior roles',
  description: [
    'I enjoy turning ideas into clean, fast, and accessible interfaces. Most of my work is built with React and Tailwind CSS, and I care about the details that make an app feel good to use — clear layouts, smooth interactions, and code that is easy to maintain.',
    'Outside of class projects, I build and ship real web apps, from blockchain-backed procurement systems to point-of-sale kiosks, and I keep learning by building.',
  ],
  objective:
    'To secure an internship or junior web developer role where I can apply my skills in React and full-stack development to real projects, learn from experienced engineers, and grow professionally while contributing to products that make a meaningful impact for users and the team.',
  interests: ['Frontend Development', 'Full-Stack Web Development', 'UI/UX Design', 'Blockchain Applications'],
};

// ---------------------------------------------------------------------------
// Social links (used in the hero, contact section, and footer)
// ---------------------------------------------------------------------------
export const socials = [
  { label: 'GitHub', url: 'https://github.com/Kenth08', icon: FaGithub, handle: '@Kenth08' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kenthcharles-repollo-78b005435/',
    icon: FaLinkedin,
    handle: 'Kenth Charles Repollo',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/repollo.kenthcharles/',
    icon: FaFacebook,
    handle: 'repollo.kenthcharles',
  },
];

// ---------------------------------------------------------------------------
// Navigation — `id` must match a section id on the page
// ---------------------------------------------------------------------------
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

// ---------------------------------------------------------------------------
// Education (newest first)
// ---------------------------------------------------------------------------
export const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Davao del Norte State College',
    period: '4th Year',
    status: 'Currently Enrolled',
    highlights: ['Capstone project: E-Procurement Blockchain System'],
  },
  {
    degree: 'Senior High School',
    school: 'Southern Davao National High School',
    period: 'ICT Strand',
    status: 'Graduated',
    highlights: [],
  },
];

// ---------------------------------------------------------------------------
// Skills — `level` is a percentage (0–100) used by the animated bars
// ---------------------------------------------------------------------------
export const skillGroups = [
  {
    title: 'Frontend',
    icon: FiCode,
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 92 },
      { name: 'CSS3', icon: FaCss3Alt, level: 88 },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, level: 82 },
      { name: 'React', icon: FaReact, level: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
      { name: 'Framer Motion', icon: TbBrandFramerMotion, level: 70 },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 80 },
      { name: 'GitHub', icon: FaGithub, level: 82 },
      { name: 'Vercel', icon: SiVercel, level: 78 },
      { name: 'VS Code', icon: VscVscode, level: 90 },
      { name: 'Figma', icon: FaFigma, level: 72 },
    ],
  },
  {
    title: 'Other',
    icon: FiLayers,
    skills: [
      { name: 'Java', icon: FaJava, level: 70 },
      { name: 'Database Management', icon: FaDatabase, level: 72 },
      { name: 'UI/UX Design', icon: FiPenTool, level: 76 },
    ],
  },
];

export const softSkills = ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability'];

// ---------------------------------------------------------------------------
// Projects
// category: 'web' | 'academic'  (used by the filter)
// Leave `live` or `github` as an empty string to hide that button.
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: 'E-Procurement Blockchain System',
    label: 'Capstone Project',
    description:
      'A blockchain-integrated bidding and procurement platform that handles procurement requests, supplier registration, and budgeting, with transparent public visibility of bidding results.',
    image: '/projects/capstone.png',
    tags: ['React', 'Blockchain', 'Tailwind CSS', 'Vercel'],
    live: 'https://capstone-bidding-system.vercel.app/',
    github: 'https://github.com/Kenth08/CAPSTONE-BIDDING-SYSTEM',
    category: 'web',
    featured: true,
  },
  {
    title: 'Campus Store POS Kiosk',
    description:
      'A self-service touchscreen kiosk with order review, cash, QR, and card payment options, and digital receipts.',
    image: '/projects/pos-kiosk.png',
    tags: ['React', 'Tailwind CSS', 'UI/UX'],
    live: 'https://pos-kiosk-practical-examination.vercel.app/',
    github: 'https://github.com/Kenth08/POS-Kiosk--Practical-examination',
    category: 'web',
  },
  {
    title: 'HAVEN Real Estate',
    description:
      'A real estate website for browsing homes, exploring neighborhoods, and getting in touch with an agent.',
    image: '/projects/haven.png',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    live: 'https://haven-real-state-taupe.vercel.app/',
    github: 'https://github.com/Kenth08/HAVEN-RealState',
    category: 'web',
  },
  {
    title: 'Ascend',
    description:
      'A responsive landing page for a sales and revenue platform with feature highlights and call-to-action sections.',
    image: '/projects/ascend.png',
    tags: ['React', 'Tailwind CSS', 'Landing Page'],
    live: 'https://ascend-ten-fawn.vercel.app/',
    github: 'https://github.com/Kenth08/Ascend',
    category: 'web',
  },
  {
    title: 'AgriRoute',
    description: 'A mobile app for agriculture route planning and resource management.',
    tags: ['Mobile', 'Mapping'],
    live: '',
    github: '',
    category: 'academic',
  },
  {
    title: 'FKK Enterprise',
    description: 'An automotive parts shop system with inventory, point of sale, and sales tracking.',
    tags: ['Inventory', 'POS', 'Database'],
    live: '',
    github: '',
    category: 'academic',
  },
  {
    title: 'Barber Shop Booking System',
    description: 'A Java Swing desktop app for managing appointments and schedules.',
    tags: ['Java', 'Swing', 'Desktop'],
    live: '',
    github: '',
    category: 'academic',
  },
  {
    title: 'Bakery Management System',
    description: 'A Java console app for handling orders, the menu, and stock records.',
    tags: ['Java', 'Console App'],
    live: '',
    github: '',
    category: 'academic',
  },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'academic', label: 'Academic' },
];

// ---------------------------------------------------------------------------
// Experience (newest first)
// ---------------------------------------------------------------------------
export const experience = [
  {
    role: 'Freelance React Developer',
    company: 'Self-employed',
    location: 'Remote',
    period: '2023 – Present',
    description:
      'Design and develop responsive web interfaces for small businesses and student organizations, taking each project from concept to deployment.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Student Tech Org',
    location: 'On-site',
    period: '2023',
    description:
      'Built reusable component libraries and improved page performance and accessibility across internal tools.',
    tags: ['React', 'Accessibility', 'Performance'],
  },
];

// ---------------------------------------------------------------------------
// Achievements & certifications
// To add a certificate, copy the example object into `certifications`.
// `image` and `url` are optional — leave them empty to hide them.
// ---------------------------------------------------------------------------
export const achievements = [
  {
    title: 'Capstone Project — E-Procurement Blockchain System',
    issuer: 'Davao del Norte State College',
    date: 'BSIT Capstone',
    description:
      'Designed and built a blockchain-integrated bidding and procurement platform focused on transparency and accountability in public procurement.',
    image: '',
    url: 'https://capstone-bidding-system.vercel.app/',
  },
];

export const certifications = [
  // {
  //   title: 'Certificate title',
  //   issuer: 'Issuing organization',
  //   date: 'Month Year',
  //   description: 'One short sentence about it (optional).',
  //   image: '/images/certificates/example.jpg',
  //   url: 'https://link-to-credential.example',
  // },
];

// ---------------------------------------------------------------------------
// GitHub call-to-action
// ---------------------------------------------------------------------------
export const githubCta = {
  url: 'https://github.com/Kenth08',
  username: 'Kenth08',
  heading: 'See more of my work',
  text: 'Experiments, class projects, and everything in between — my repositories are where I build in public.',
};
