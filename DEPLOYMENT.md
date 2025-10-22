# Digital Portfolio Deployment Guide

This guide will help you deploy your digital portfolio to both GitHub Pages and Hugging Face Spaces.

## GitHub Pages Deployment

### Step 1: Update Configuration

1. Update `next.config.js` with your repository name:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
}
```

### Step 2: GitHub Actions Setup

The `.github/workflows/deploy.yml` file is already configured. Just push your code to the main branch and GitHub Actions will automatically deploy.

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the source
4. Your site will be available at `https://yourusername.github.io/your-repo-name`

## Hugging Face Spaces Deployment

### Step 1: Create a New Space

1. Go to [Hugging Face Spaces](https://huggingface.co/spaces)
2. Click "Create new Space"
3. Choose "Static" as the SDK
4. Name your space (e.g., "digital-portfolio")

### Step 2: Upload Files

1. Upload all your project files to the Space
2. Rename `huggingface-readme.md` to `README.md` in the Space
3. The Space will automatically build and deploy your portfolio

### Step 3: Customize Space Settings

Update the frontmatter in your Space's README.md:
```yaml
---
title: Your Portfolio Name
emoji: 🚀
colorFrom: blue
colorTo: purple
sdk: static
pinned: false
license: mit
---
```

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## Customization

### Updating Content

1. **Projects**: Edit `pages/projects.tsx`
2. **Research**: Modify `pages/research.tsx`
3. **Blog**: Update `pages/blog.tsx`
4. **Timeline**: Edit `pages/timeline.tsx`
5. **Contact**: Update `pages/contact.tsx`

### Styling

- Colors: Edit `tailwind.config.js`
- Global styles: Modify `styles/globals.css`
- Component styles: Update individual page files

### Adding New Pages

1. Create new `.tsx` file in `pages/` directory
2. Add route to navigation in `components/Layout.tsx`
3. Follow existing page structure

## Troubleshooting

### Common Issues

1. **Build Errors**: Check that all imports are correct
2. **Styling Issues**: Ensure Tailwind CSS is properly configured
3. **Deployment Failures**: Check GitHub Actions logs or Hugging Face build logs

### Getting Help

- Check the console for errors
- Review the Next.js documentation
- Open an issue in the repository

## Performance Tips

1. Optimize images before adding them
2. Use appropriate image formats (WebP, AVIF)
3. Minimize bundle size by removing unused dependencies
4. Enable compression on your hosting platform

## SEO Optimization

The portfolio includes:
- Meta tags for social sharing
- Open Graph tags
- Twitter Card tags
- Semantic HTML structure
- Proper heading hierarchy

Update the meta tags in `pages/_document.tsx` with your information.

