# Caleb Li - Portfolio Website

A minimal, clean, and bold portfolio website built with Next.js, React, and Tailwind CSS. Showcasing AI solutions engineering, full-stack web development, and business analytics capabilities.

## Features

- ✨ Modern, responsive design with playful scroll animations
- 📱 Mobile-first approach
- 🎨 Dark mode support
- ⚡ Fast performance (optimized with Next.js)
- 🚀 Easy to deploy on Vercel
- 📦 Project showcase with live demos and GitHub links
- 🎯 Contact page with email and LinkedIn links

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting**: Vercel
- **Language**: TypeScript (optional)

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)
- Git

### Installation

1. **Clone the repository** (or create a new one after downloading):
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Customizing Content

#### Update Your Information

1. **Edit `src/app/page.tsx`** - Update the hero section with your headline and description
2. **Edit `src/app/about/page.tsx`** - Add your bio, skills, and background
3. **Edit `src/app/projects/page.tsx`** - Update project URLs and descriptions
4. **Edit `src/components/Footer.tsx`** - Update your email, LinkedIn, and GitHub URLs

#### Add Projects

Projects are defined in `src/app/projects/page.tsx`. To add a new project:

1. Add a new entry to the `projects` array with title, description, tech stack, and URLs
2. Create a corresponding entry in `projectDetails` in `src/app/projects/[slug]/page.tsx`

Example:
```javascript
{
  title: 'Your Project Name',
  description: 'Brief description of what the project does.',
  technologies: ['Next.js', 'React', 'Tailwind CSS'],
  demoUrl: 'https://example.com',
  githubUrl: 'https://github.com/your-username/project',
  slug: 'your-project-slug',
}
```

#### Customize Colors

Edit `tailwind.config.js` to change the primary blue color and other theme variables:

```javascript
colors: {
  primary: '#2B5797',        // Change your primary color here
  'primary-light': '#4472C4',
}
```

Also update the hardcoded color references in components (search for `#2B5797`).

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

3. **Auto-Deploy**: Every push to `main` will automatically deploy your updates

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the `.next` folder to Netlify
```

#### Traditional Server
```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── projects/
│   │   ├── page.tsx         # Projects listing
│   │   └── [slug]/
│   │       └── page.tsx     # Project detail page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   └── ProjectCard.tsx      # Reusable project card
└── ...
```

## Creating a GitHub Repository

1. **Create a new repository** on GitHub (without initializing with README)
2. **Initialize and push** your local project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio-website.git
   git push -u origin main
   ```

## Connecting GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste your GitHub repository URL
5. Click "Import"
6. Vercel will auto-detect Next.js and configure settings
7. Click "Deploy"

**That's it!** Your portfolio is now live. Every time you push to GitHub, Vercel automatically deploys the changes.

## Performance Optimization

- Images are automatically optimized by Next.js
- CSS is minified and tree-shaken
- Code splitting happens automatically
- Lazy loading for images and components

## Adding Analytics (Optional)

### Vercel Web Analytics
1. Go to your Vercel project dashboard
2. Navigate to "Analytics"
3. Enable "Web Analytics"
4. No additional code needed!

### Plausible Analytics (Privacy-Friendly Alternative)
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Add the tracking script to `src/app/layout.tsx`:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

## Troubleshooting

### Port 3000 is already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Deployment issues
- Check Vercel logs in your project dashboard
- Ensure `package.json` and `package-lock.json` are committed
- Verify environment variables (if any) are set in Vercel project settings

## SEO Optimization

The portfolio includes basic SEO setup. To improve:

1. Update `src/app/layout.tsx` with your actual metadata
2. Add Open Graph images to `public/` folder
3. Create a `public/sitemap.xml` for better indexing
4. Submit your site to Google Search Console

## Next Steps

1. ✅ Customize content (about, projects, contact info)
2. ✅ Update project links (live demos and GitHub URLs)
3. ✅ Push to GitHub
4. ✅ Deploy to Vercel
5. ✅ Share your portfolio with recruiters and your network!

## License

This portfolio template is open source. Feel free to use and modify it for your own portfolio.

## Support

Have questions? Reach out to Caleb at `caleb.nz.li@gmail.com`

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
