# Digital Portfolio

A modern, responsive digital portfolio built with Next.js, TypeScript, and Tailwind CSS. Features dynamic animations, dark mode support, and is optimized for deployment on GitHub Pages and Hugging Face Spaces.

## Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations using Framer Motion
- 📱 Mobile-first responsive design
- 🌙 Dark/Light theme toggle
- 🚀 Optimized for static export
- 📊 SEO optimized with meta tags
- 🎯 Easy to customize and modify

## Project Structure

```
/
├── pages/                 # Next.js pages
│   ├── index.tsx         # Home page
│   ├── about.tsx         # About page
│   ├── projects.tsx      # Projects showcase
│   ├── research.tsx      # Research section
│   ├── blog.tsx          # Blog posts
│   ├── music-media.tsx   # Creative work
│   ├── timeline.tsx      # Professional timeline
│   ├── startup-dreams.tsx # Entrepreneurial ideas
│   └── contact.tsx       # Contact form
├── components/           # Reusable components
│   └── Layout.tsx        # Main layout component
├── styles/              # Global styles
│   └── globals.css       # Tailwind CSS styles
└── public/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd digital-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### GitHub Pages

1. Update `next.config.js` with your repository name:
```javascript
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
```

2. Create a GitHub Actions workflow (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

3. Enable GitHub Pages in your repository settings and select "GitHub Actions" as the source.

### Hugging Face Spaces

1. Create a new Space on Hugging Face
2. Upload your project files
3. Create a `README.md` with the Space configuration:
```yaml
---
title: Digital Portfolio
emoji: 🚀
colorFrom: blue
colorTo: purple
sdk: static
pinned: false
license: mit
---
```

4. Hugging Face will automatically build and deploy your portfolio.

## Customization

### Colors and Themes

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content Updates

- **Projects**: Update the `projects` array in `pages/projects.tsx`
- **Research**: Modify research content in `pages/research.tsx`
- **Blog Posts**: Update blog categories and posts in `pages/blog.tsx`
- **Timeline**: Edit timeline events in `pages/timeline.tsx`
- **Contact Info**: Update contact details in `pages/contact.tsx`

### Adding New Pages

1. Create a new `.tsx` file in the `pages/` directory
2. Add the route to the navigation in `components/Layout.tsx`
3. Follow the existing page structure for consistency

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you have any questions or need help customizing the portfolio, please open an issue or contact me directly.

