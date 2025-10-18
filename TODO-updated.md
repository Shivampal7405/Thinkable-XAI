# Company Landing Page Rewrite Plan

## Current State Analysis
- Next.js app with TypeScript, Tailwind CSS, Framer Motion
- Components: Navbar, Hero, About, Features, Pricing, Testimonials, FAQ, Team, Newsletter, Contact, Footer
- Additional: BackToTop, CookieConsent, ThemeProvider
- API routes for contact and newsletter (SQLite database)
- Animations and responsive design
- Contact data stored in: `company-landing-page/data/contacts.db`

## Goals
- Rewrite code with perfection: clean, efficient, bug-free
- Add functionalities with CSS: animations, transitions, interactive elements
- Enhance user experience: responsive, accessible, modern design
- Fix existing bugs and connect APIs properly

## Tasks
- [x] Fix Contact form bug (label typo: `laNaNonChange` → `label`)
- [ ] Connect Newsletter component to actual API (currently simulated)
- [ ] Enhance globals.css with more custom animations and effects
- [ ] Add micro-interactions and hover effects to components
- [ ] Improve loading states and UX feedback
- [ ] Add scroll-triggered animations
- [ ] Enhance component styling and responsiveness
- [ ] Add interactive elements and transitions
- [ ] Optimize performance and code quality
- [ ] Test all functionalities

## New Functionalities to Add
- Smooth scroll to sections
- Enhanced hover effects and transitions
- Interactive form feedback
- Better loading animations
- Micro-interactions on buttons and cards
- Advanced CSS animations
- Improved accessibility features

## CSS Enhancements
- Custom keyframe animations
- Advanced hover effects
- Transform and transition effects
- Enhanced gradients and backgrounds
- Better color schemes and themes
- Micro-interactions and feedback

## Database Access
Contact form submissions are stored in SQLite database at:
`company-landing-page/data/contacts.db`

To view contact data, you can use:
```bash
cd company-landing-page
node -e "const Database = require('better-sqlite3'); const db = new Database('data/contacts.db'); const rows = db.prepare('SELECT * FROM contacts').all(); console.log('Contacts:', rows); db.close();"
