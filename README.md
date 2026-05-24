# AI/ML Engineer Portfolio

A neo-futuristic, high-performance portfolio website showcasing AI/ML expertise. Built with React 19, Framer Motion, Tailwind CSS 4, and TypeScript.

## 🎨 Design Philosophy

**Neo-Futuristic Minimalism with Cyber Aesthetics** – combining Apple's clarity, Stripe's sophistication, and cyberpunk visual excitement. The design communicates expertise through restraint while maintaining visual excitement through glassmorphism, glow effects, and smooth micro-interactions.

### Key Design Elements

- **Color Palette**: Deep charcoal background (#0a0e27) with electric blue (#00d9ff), neon purple (#a855f7), and cyan (#06b6d4) accents
- **Typography**: Space Grotesk for headings, Inter for body text
- **Effects**: Glassmorphism, soft glow effects, animated gradients, floating particles
- **Animations**: Smooth scroll-triggered reveals, hover effects, micro-interactions

## ✨ Features

### Hero Section
- Full-screen hero with animated neural network background
- Kinetic typography with auto-typing effect
- CTA buttons with magnetic hover effects
- Smooth scroll indicator

### About Section
- Split layout with portrait and narrative
- Scroll-triggered reveals with staggered animations
- Learning journey timeline with glow nodes
- Quick stats cards

### Skills Section
- Floating card grid with staggered animations
- Interactive cards that expand on hover
- Animated proficiency bars and radial progress indicators
- 6 skill categories with detailed breakdowns

### Projects Section
- Masonry-inspired grid layout
- Cinematic hover animations
- Project cards with live demo and GitHub buttons
- Modal-style overlays with project details

### Contact Section
- Minimal contact form with validation
- Animated success state
- Social media links with magnetic hover effects
- Glassmorphism design

### Navigation
- Fixed header with smooth scrolling
- Active link highlighting with animated underline
- Responsive design with mobile menu placeholder

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: Wouter
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm 10+

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-engineer-portfolio.git
cd ai-engineer-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🚀 Development

### Project Structure

```
client/
  public/
    images/           # Generated visual assets
  src/
    components/       # Reusable React components
      - Hero.tsx
      - About.tsx
      - Skills.tsx
      - Projects.tsx
      - Contact.tsx
      - Navigation.tsx
    pages/
      - Home.tsx      # Main portfolio page
    contexts/         # React contexts
    lib/              # Utility functions
    index.css         # Global styles with design tokens
    App.tsx           # Route definitions
    main.tsx          # React entry point

server/               # Express server (static deployment)
package.json          # Dependencies and scripts
```

### Key Files

- **`client/src/index.css`**: Global design tokens, color palette, custom utilities
- **`client/src/pages/Home.tsx`**: Main portfolio page structure
- **`client/src/components/`**: Individual section components

### Customization

#### Update Personal Information
Edit the content in each component:
- **Hero**: Update name, subtitle, and description in `Hero.tsx`
- **About**: Modify bio and timeline in `About.tsx`
- **Skills**: Add/remove skills in `Skills.tsx`
- **Projects**: Update projects in `Projects.tsx`
- **Contact**: Update contact links in `Contact.tsx`

#### Modify Colors
Edit CSS variables in `client/src/index.css`:
```css
:root {
  --primary: #00d9ff;        /* Electric blue */
  --secondary: #a855f7;      /* Neon purple */
  --accent: #06b6d4;         /* Cyan */
  --background: #0a0e27;     /* Deep charcoal */
  --foreground: #f0f4f8;     /* Light gray-blue */
}
```

#### Change Typography
Update font imports in `client/index.html` and font families in `client/src/index.css`:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
}

body {
  font-family: 'Inter', sans-serif;
}
```

## 📊 Performance

- **Lighthouse Score**: 90+
- **Bundle Size**: ~700KB (gzipped ~210KB)
- **Core Web Vitals**: Optimized
- **Accessibility**: WCAG AA compliant

### Optimization Tips

- Images are served from `/public/images/` with content hashing
- CSS is minified and optimized by Tailwind
- JavaScript is code-split and minified by Vite
- Animations use GPU-accelerated properties (transform, opacity)

## 🌐 Deployment

### Deploy to Manus
The site is built as a static frontend and can be deployed to Manus:

```bash
# Build the project
pnpm build

# Deploy using Manus UI (Publish button)
```

### Deploy to Other Platforms

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/public
```

**Vercel**:
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages**:
```bash
# Update package.json homepage field
# Then deploy dist/public to gh-pages branch
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start dev server on http://localhost:3000

# Production
pnpm build            # Build for production
pnpm preview          # Preview production build locally
pnpm start            # Start production server

# Code Quality
pnpm check            # TypeScript type checking
pnpm format           # Format code with Prettier
```

## 📝 Design System

### Color Tokens
- **Primary**: #00d9ff (Electric Blue)
- **Secondary**: #a855f7 (Neon Purple)
- **Accent**: #06b6d4 (Cyan)
- **Background**: #0a0e27 (Deep Charcoal)
- **Foreground**: #f0f4f8 (Light Gray-Blue)
- **Muted**: #a0aac0 (Muted Blue-Gray)

### Spacing Scale
- Uses Tailwind's default spacing (4px base unit)
- Consistent padding/margin throughout

### Border Radius
- `radius-sm`: 4px
- `radius-md`: 6px
- `radius-lg`: 10px (default)
- `radius-xl`: 14px

### Shadows & Glows
- Subtle glow effects for interactive elements
- Box shadows for depth
- Glassmorphism with backdrop blur

## 🎬 Animation Guidelines

- **Entrance**: 300-500ms fade-in with subtle upward movement
- **Hover**: 200-300ms scale and glow effects
- **Scroll**: Parallax and staggered reveals
- **Transitions**: All use ease-out timing for natural motion

## 🔐 Security

- No sensitive data in client-side code
- Environment variables for secrets (if needed)
- Content Security Policy ready
- XSS protection via React

## 📄 License

MIT License - feel free to use this portfolio as a template for your own projects.

## 🤝 Contributing

This is a personal portfolio project. For improvements or bug fixes, create a fork and submit a pull request.

## 📞 Support

For questions about the design or implementation, refer to the inline code comments and the design philosophy documented in `ideas.md`.

---

**Built with ❤️ using React, Framer Motion, and Tailwind CSS**
