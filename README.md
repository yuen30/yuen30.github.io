# 🚀 Taweechai.dev - Senior Software Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-Runtime-black?style=for-the-badge&logo=bun)](https://bun.sh/)

> **Modern portfolio website showcasing 10+ years of enterprise software development expertise**

## 👨‍💻 About

**ทวีชัย ยืนยั่ง (Taweechai Yuenyang)**  
Senior Software Developer specializing in:
- 🏭 **Industrial IoT & PLC Integration**
- 📦 **ERP/WMS Systems (Odoo, Custom Solutions)**
- ⚡ **Real-time Monitoring & Analytics**
- 🔧 **DevOps & Infrastructure Automation**

## ✨ Features

### 🎨 **Modern Design**
- Glass morphism UI with dark theme
- Smooth animations with Framer Motion
- Responsive design for all devices
- Accessibility-first approach

### 🚀 **Performance Optimized**
- Next.js 16 with App Router
- Static site generation
- Optimized images and assets
- Bun runtime for faster builds

### 📊 **Interactive Sections**
- **Success Stories**: Real project case studies with metrics
- **Technical Deep Dive**: Expandable technical explanations
- **Skills Visualization**: Animated progress bars with experience levels
- **Achievement Metrics**: Live statistics and accomplishments

### 🔧 **Technical Excellence**
- TypeScript for type safety
- Error boundaries for graceful error handling
- SEO optimized with structured data
- PWA ready with manifest
- Analytics integration ready

## 🛠 Tech Stack

### **Frontend**
- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Animations**: Motion 12.26.1 (faster than Framer Motion)
- **Icons**: Lucide React 0.562.0

### **Content & Data**
- **Blog**: MDX with @next/mdx
- **Projects**: GitHub API integration
- **Images**: Next.js Image optimization

### **Development**
- **Runtime**: Bun (faster than Node.js)
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yuen30/my-portfolio.git
cd my-portfolio

# Install dependencies
bun install

# Start development server
bun run dev
```

### Available Scripts

```bash
# Development
bun run dev          # Start dev server on port 3001 with Turbopack

# Production
bun run build        # Build for production
bun run start        # Start production server

# Code Quality
bun run lint         # Run ESLint
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── projects/          # Project showcase
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # SEO robots.txt
├── components/            # React Components
│   ├── ui/               # Reusable UI components
│   ├── blog/             # Blog-specific components
│   ├── SuccessStories.tsx # Case studies section
│   ├── Achievements.tsx   # Metrics & specializations
│   ├── TechnicalDeepDive.tsx # Technical explanations
│   ├── EnhancedHero.tsx   # Hero with typing animation
│   ├── ErrorBoundary.tsx  # Error handling
│   └── LoadingSpinner.tsx # Loading states
├── content/              # MDX blog posts
├── public/               # Static assets
│   ├── manifest.json     # PWA manifest
│   ├── sitemap.xml       # SEO sitemap
│   └── robots.txt        # SEO robots
└── lib/                  # Utility functions
```

## 🎯 Key Sections

### 1. **Enhanced Hero**
- Typing animation with multiple roles
- Social links and download resume
- Key statistics display
- Smooth scroll indicators

### 2. **Success Stories**
- Real project case studies
- Before/after metrics
- Technology stacks used
- Visual impact demonstrations

### 3. **Technical Deep Dive**
- Expandable technical sections
- Code examples and patterns
- Architecture explanations
- Best practices showcase

### 4. **Skills Visualization**
- Animated progress bars
- Experience levels (years)
- Categorized by expertise
- Interactive hover effects

## 🔧 Configuration

### Environment Variables
Create `.env.local` for local development:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# GitHub API (for projects)
GITHUB_TOKEN=your-github-token
```

### SEO Configuration
Update `app/layout.tsx` for your information:
- Meta tags and descriptions
- Open Graph images
- Structured data (JSON-LD)
- Social media links

## 📈 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimizations
- Static site generation
- Image optimization
- Code splitting
- Lazy loading
- Minimal JavaScript bundle

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel --prod
```

### Static Export
```bash
# Build static files
bun run build

# Files will be in ./out directory
# Deploy to any static hosting service
```

### Docker
```dockerfile
FROM oven/bun:1 as base
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Build application
COPY . .
RUN bun run build

# Serve static files
FROM nginx:alpine
COPY --from=base /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Taweechai Yuenyang**
- 📧 Email: [taweechai.yue@outlook.co.th](mailto:taweechai.yue@outlook.co.th)
- 🌐 Website: [https://taweechai.dev](https://taweechai.dev)
- 💼 GitHub: [@yuen30](https://github.com/yuen30)
- 🔗 LinkedIn: [taweechai-yuenyang](https://linkedin.com/in/taweechai-yuenyang)

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

[View Live Site](https://taweechai.dev) • [Report Bug](https://github.com/yuen30/my-portfolio/issues) • [Request Feature](https://github.com/yuen30/my-portfolio/issues)

</div>