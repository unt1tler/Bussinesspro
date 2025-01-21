# BusinessPro Website

A modern, responsive business website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

BusinessPro is a comprehensive business website template that includes:
- Responsive landing page
- Blog system with Disqus integration
- Documentation pages
- Mobile-optimized design
- Modern UI components

## Installation

1. Clone the repository:
```bash
git clone this repo
```

2. Install dependencies:
```bash
npm install --force
```

3. Start the development server:
```bash
npm run dev
```

## Dependencies

Major dependencies include:
- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI Components
- Lucide React Icons

## Configuration

### Site Configuration (site.ts)

The website can be customized through the `config/site.ts` file:

```typescript
export const siteConfig = {
  name: "Your Business Name",
  description: "Your Business Description",
  // ... other configurations
}
```

Key configuration sections:
- Basic Information
- Navigation
- Features
- Blog Settings
- Theme
- Pages Content

### Blog Configuration

To enable Disqus comments:

1. Create a Disqus account
2. Get your Disqus shortname
3. Update site.ts:
```typescript
features: {
  blog: {
    disqus: {
      enabled: true,
      shortname: "your-disqus-shortname"
    }
  }
}
```

## Components

### Core Components

- `Layout`: Main layout wrapper
- `Navigation`: Responsive navigation bar
- `Footer`: Site footer
- `Hero`: Landing page hero section
- `Services`: Services showcase
- `Testimonials`: Client testimonials
- `CaseStudies`: Project portfolio
- `Team`: Team member cards
- `Blog`: Blog layout and components

### UI Components

All UI components are located in `components/ui/` and include:
- Buttons
- Cards
- Forms
- Modals
- Tooltips
- etc.

## Customization

### Styling

1. Modify `tailwind.config.ts` for theme customization
2. Update `globals.css` for global styles
3. Use Tailwind classes in components

### Content

1. Update `site.ts` for main content
2. Modify page components in `app/` directory
3. Add new components as needed

### Images

1. Place images in `public/` directory
2. Use Next.js Image component for optimization
3. Follow naming conventions:
   - Blog: `/public/blog/`
   - Team: `/public/team/`
   - Case Studies: `/public/case-studies/`

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to your preferred platform:
- Vercel (recommended)
- Netlify
- AWS
- Custom server

### Vercel Deployment

1. Push to GitHub
2. Connect to Vercel
3. Configure build settings
4. Deploy

## Troubleshooting

### Common Issues

1. Build Errors
- Check Node.js version (16+ required)
- Clear `.next` directory
- Remove node_modules and reinstall

2. Image Optimization
- Ensure proper image formats
- Check image paths
- Verify public directory structure

3. Mobile Issues
- Test with Chrome DevTools
- Verify viewport settings
- Check media queries

### Support

For additional support:
1. Check GitHub Issues
2. Review documentation
3. Contact support team

## License

MIT License - See LICENSE file for details