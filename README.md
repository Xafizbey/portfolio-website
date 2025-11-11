# Abdulhafiz's Modern Portfolio

A visually stunning, fully animated portfolio website built with Next.js 15, React, Tailwind CSS, and Framer Motion. Featuring smooth parallax animations, interactive components, and a modern dark/light mode design.

## Features

- **Hero Section** - Eye-catching hero with animated gradients, parallax background effects, and animated CTAs
- **About Section** - Smooth text animations, skill showcase with categorized tech stack, and achievement statistics
- **Projects Section** - Interactive project cards with filtering, hover animations, and detailed previews
- **Contact Form** - Beautiful contact form with focus animations, form validation, and success/error states
- **Dark/Light Mode** - Seamless theme switching with smooth transitions
- **Fully Responsive** - Mobile-first design that looks perfect on all devices
- **Performance Optimized** - Lazy loading, smooth scroll behavior, and efficient animations
- **Accessibility** - Semantic HTML, ARIA labels, and keyboard navigation support

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19.2
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Component Library**: Shadcn/ui
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles and theme tokens
│   └── _client-layout.tsx       # Client-side layout wrapper
├── components/
│   ├── navbar.tsx              # Navigation with theme toggle
│   ├── footer.tsx              # Footer with social links
│   ├── scroll-to-top.tsx       # Scroll to top button
│   ├── theme-provider.tsx      # Theme context provider
│   └── sections/
│       ├── hero.tsx            # Hero section with parallax
│       ├── about.tsx           # About section with skills
│       ├── projects.tsx        # Projects with filtering
│       └── contact.tsx         # Contact form
├── hooks/
│   └── use-scroll-animation.ts # Custom scroll animation hook
└── lib/
    └── utils.ts                # Utility functions
\`\`\`

## Key Components

### Hero Section
- Animated gradient background with floating orbs
- Parallax mouse movement effects
- Smooth text animations with stagger effects
- Interactive CTA buttons

### About Section
- Achievement statistics with counter animations
- Categorized skills grid with hover effects
- Tech stack proficiency bars
- Mission statement card

### Projects Section
- Category filtering with smooth transitions
- Featured project badges
- Image hover zoom effects
- Tech stack badges
- Statistics display on hover

### Contact Form
- Real-time field focus animations
- Gradient underline indicators
- Form validation with visual feedback
- Success/error message states
- Contact information cards

## Customization

### Theme Colors

Edit the design tokens in `app/globals.css`:

\`\`\`css
:root {
  --primary: oklch(0.35 0.15 250);    /* Main brand color */
  --accent: oklch(0.65 0.2 250);      /* Accent color */
  --background: oklch(0.98 0 0);      /* Light mode background */
}

.dark {
  --primary: oklch(0.55 0.18 250);    /* Dark mode primary */
  --accent: oklch(0.65 0.2 250);      /* Dark mode accent */
  --background: oklch(0.1 0 0);       /* Dark mode background */
}
\`\`\`

### Content

Update your personal information in:
- `components/navbar.tsx` - Logo/name
- `components/sections/hero.tsx` - Hero content
- `components/sections/about.tsx` - About text and skills
- `components/sections/projects.tsx` - Project data
- `components/sections/contact.tsx` - Contact information
- `components/footer.tsx` - Social links

### Animation Speeds

Adjust animation timing in component-specific `transition` props:
\`\`\`tsx
transition={{ duration: 0.6, ease: 'easeOut' }}
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Click "Deploy"

### Other Platforms

Build the project:
\`\`\`bash
npm run build
npm run start
\`\`\`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

- Smooth 60fps animations
- Optimized images with proper sizing
- Lazy-loaded components
- CSS-in-JS with critical CSS extraction
- Minified and code-split bundles

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Motion preferences respected (prefers-reduced-motion)

## Future Enhancements

- Blog section with MDX support
- Case studies with detailed project breakdowns
- Testimonials section
- Newsletter signup
- CMS integration
- i18n support for multiple languages

## License

MIT License - feel free to use this as a template for your own portfolio!

## Author

**Abdulhafiz Zholodoshov**
- Email: hafizbeyofficial@gmail.com
- LinkedIn: [Profile Link]
- GitHub: [GitHub Link]
- Instagram: [@hafizbey_official](https://instagram.com/hafizbey_official)

---

Built with passion and modern web technologies. Let's create something amazing together!
