# Kenth Charles Repollo — Portfolio

A personal CV and portfolio website that presents my profile, education, skills, projects, experience, and achievements in one responsive single-page site. It is built with React and Tailwind CSS, animated with Framer Motion, and deployed on Vercel.

**Live site:** _add your Vercel link here_

## Student

**Kenth Charles Repollo** — BSIT 4th Year, Davao del Norte State College

## Technologies Used

- [React 18](https://react.dev/) with [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Prettier](https://prettier.io/) for code formatting
- [Vercel](https://vercel.com/) for hosting

## Features

- **Single content file:** all text, links, projects, and certificates live in `src/data/portfolio.js`
- **Dark and light themes:** dark by default, with the choice saved in `localStorage`
- **Sticky navbar** that highlights the current section, a scroll progress bar, and a hamburger menu on mobile
- **Hero** with a typewriter effect for the professional title, profile photo, CV download, and social links
- **About** section with basic information, career objective, and career interests
- **Education and Experience** timelines
- **Skills** grouped into cards with level bars that fill when scrolled into view, plus soft skills
- **Projects** with an All / Web / Academic filter, a featured capstone card, hover zoom, and quick-link overlays
- **Achievements & certifications** grid that grows as certificates are added to the data file
- **Contact** section with mailto, a copy-email button, and social links
- **Animations:** first-visit loader, scroll-reveal sections, and hover effects, all reduced when the visitor's system asks for reduced motion
- **Responsive** layout for desktop, laptop, tablet, and mobile
- **Accessibility and SEO:** semantic HTML, alt text, keyboard navigation with visible focus, a skip link, meta description, Open Graph tags, and a "KCR" favicon
- **Performance:** lazy-loaded images, with placeholders shown if an image is missing

## Project Structure

```
public/
  images/        profile photo (profile.jpg)
  projects/      project screenshots
  favicon.svg
  cv.pdf         downloadable CV (add your own)
src/
  components/    reusable UI (Navbar, Section, ProjectCard, Timeline, ...)
  sections/      page sections (Hero, About, Education, Skills, Projects, ...)
  data/          portfolio.js — all site content
  hooks/         useTheme, useActiveSection, useTypewriter
  utils/         small helpers
```

## Run Locally

Requirements: [Node.js](https://nodejs.org/) 18 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/Kenth08/<repository-name>.git
cd <repository-name>

# 2. Install dependencies
npm install

# 3. Start the development server (http://localhost:5173)
npm run dev
```

Other scripts:

| Command           | What it does                            |
| ----------------- | --------------------------------------- |
| `npm run build`   | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally     |
| `npm run format`  | Formats the code with Prettier          |

## Editing Content

Open `src/data/portfolio.js` and change the text, links, or lists. For example, to add a certificate, copy the commented example inside `certifications` and fill in the title, issuer, date, and (optionally) an image path and link.

## Deployment

The site deploys to Vercel with the default Vite settings: build command `npm run build`, output directory `dist`.
