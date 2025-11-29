# Portfolio Website - Okwor Chukwuemeka Nnajiofor

A world-class, modern portfolio website showcasing my work as a **Flutter Developer & Full-Stack Engineer**. Built with Next.js 14, React, TypeScript, TailwindCSS, and Framer Motion. Features smooth animations, dark mode, and a fully responsive design.

🌐 **Live Demo**: [Your Netlify URL here]

---

## ✨ Features

### Design & User Experience
- **Premium UI/UX**: Modern, polished interface inspired by top portfolios on Dribbble, Awwwards, and Behance
- **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **Dark Mode Toggle**: Persistent theme preference with smooth transitions
- **Smooth Animations**: Scroll-triggered animations powered by Framer Motion
- **Parallax Effects**: Elegant scrolling effects and micro-interactions
- **Premium Typography**: Google Fonts (Inter & Poppins) for professional appearance

### Sections
- **Hero Section**: Eye-catching introduction with call-to-action and social links
- **About Section**: Professional bio with contact information cards
- **Skills Section**: Categorized skills with progress indicators and icons
- **Experience Section**: Timeline-style work experience showcase
- **Education Section**: Academic qualifications and certifications display
- **Projects Section**: Interactive project cards with detailed modals
- **Contact Section**: Functional contact form with EmailJS integration
- **Footer**: Social links and quick navigation

### Functionality
- **CV Download**: Direct download link for resume PDF
- **Project Modals**: Click-to-expand project details with NDA protection notices
- **Contact Form**: EmailJS integration with fallback to email client
- **Smooth Scrolling**: Navigation with smooth scroll-to-section
- **Scroll to Top**: Floating button for easy navigation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading times and optimized assets

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher (20.x recommended)
- **Package Manager**: npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (Optional):
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your EmailJS credentials (optional - form will fallback to email client if not set):
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will automatically reload when you make changes to the code.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:
```bash
npm start
# or
yarn start
# or
pnpm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx             # Main page component
│   ├── globals.css          # Global styles and Tailwind directives
│   └── icon.svg             # Favicon (OCN initials)
├── components/
│   ├── Header.tsx           # Navigation header with theme toggle
│   ├── Hero.tsx             # Hero section with CTA
│   ├── About.tsx            # About section with bio
│   ├── Skills.tsx            # Skills showcase
│   ├── Experience.tsx        # Work experience timeline
│   ├── Education.tsx         # Education and certifications
│   ├── Projects.tsx          # Projects showcase with modals
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer with social links
│   ├── ScrollToTop.tsx       # Scroll to top button
│   └── ThemeProvider.tsx     # Dark/light mode context provider
├── public/
│   ├── resume.pdf           # CV/Resume file
│   └── favicon.ico          # Fallback favicon
├── netlify.toml             # Netlify deployment configuration
├── tailwind.config.js       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## 🎨 Customization

### Updating Content

#### Personal Information
- **Hero Section** (`components/Hero.tsx`): Update name, title, and social links
- **About Section** (`components/About.tsx`): Update bio and contact information
- **Resume**: Replace `public/resume.pdf` with your own CV

#### Skills
- Edit `components/Skills.tsx` to add/remove skills and adjust proficiency levels

#### Experience
- Update `components/Experience.tsx` with your work history

#### Education
- Modify `components/Education.tsx` to reflect your academic background and certifications

#### Projects
- Update `components/Projects.tsx` with your projects:
  - Add project details, technologies, and descriptions
  - Set `hasNDA: true` for NDA-protected projects
  - Add `website` URL for public projects

### Styling

#### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    50: '#f0f4ff',
    100: '#e0e9ff',
    // ... customize your primary colors
    600: '#667eea',  // Main primary color
    700: '#5568d3',
  },
}
```

#### Fonts
Change fonts in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
```

#### Theme Colors
Modify CSS variables in `app/globals.css` for light/dark theme customization.

---

## 📧 EmailJS Setup (Optional)

The contact form uses EmailJS for sending emails. If you don't set it up, the form will fallback to opening the user's email client.

### Setup Steps

1. **Sign up** for a free account at [EmailJS](https://www.emailjs.com/)

2. **Create an Email Service**:
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**:
   - Go to Email Templates → Create New Template
   - Use variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Save and note the Template ID

4. **Get Your Public Key**:
   - Go to Account → General
   - Copy your Public Key

5. **Add to Environment Variables**:
   - Add to `.env.local` for local development
   - Add to Netlify/Vercel environment variables for production

---

## 📱 Deployment

### Deploy to Netlify (Recommended)

The project is pre-configured for Netlify deployment.

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Go to [Netlify](https://www.netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Add environment variables (if using EmailJS)
   - Click "Deploy site"

3. **Your site will be live** at `https://your-site-name.netlify.app`

📖 **Detailed Guide**: See [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md) for step-by-step instructions.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to:
- **AWS Amplify**
- **Railway**
- **Render**
- **DigitalOcean App Platform**
- Any platform supporting Next.js

---

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Libraries & Tools
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[EmailJS](https://www.emailjs.com/)** - Email service (optional)

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🎯 Key Features Explained

### Project Modals
- Click any project card to view detailed information
- Projects with `hasNDA: true` show an NDA protection badge
- Public projects (like Teachally and Nubiaville) show a "View Website" button

### Dark Mode
- Toggle between light and dark themes
- Preference is saved in localStorage
- Respects system preference on first visit

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized layouts for all screen sizes

### Performance
- Static page generation (SSG)
- Optimized images and assets
- Code splitting and lazy loading
- Fast page loads and smooth animations

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Okwor Chukwuemeka Nnajiofor**

- 📧 Email: [okworcloud@gmail.com](mailto:okworcloud@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/okworchukwuemeka](https://www.linkedin.com/in/okworchukwuemeka/)
- 🐙 GitHub: [github.com/thenaijadev](https://github.com/thenaijadev)
- 🌍 Location: Paris, France

---

## 🙏 Acknowledgments

- Design inspiration from [Dribbble](https://dribbble.com), [Awwwards](https://www.awwwards.com), and [Behance](https://www.behance.net)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Built with [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Netlify Documentation](https://docs.netlify.com/)

---

**Built with ❤️ using Next.js, React, TypeScript, and TailwindCSS**

---

## 🔧 Troubleshooting

### Build Errors
- Ensure Node.js version is 18+ (20 recommended)
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check for TypeScript errors: `npm run build`

### Contact Form Not Working
- Verify EmailJS environment variables are set correctly
- Check browser console for errors
- Form will fallback to email client if EmailJS is not configured

### Styling Issues
- Clear browser cache
- Ensure TailwindCSS is properly configured
- Check `globals.css` for custom styles

### Deployment Issues
- Verify `netlify.toml` configuration
- Check build logs in Netlify dashboard
- Ensure all environment variables are set

---

**Need help?** Open an issue on GitHub or contact me directly!
