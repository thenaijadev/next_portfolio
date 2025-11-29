# Okwor Chukwuemeka Nnajiofor - Portfolio Website

A world-class, modern portfolio website showcasing my work as a Flutter Developer & Full-Stack Engineer. Built with Next.js, React, TypeScript, TailwindCSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Premium, polished UI with smooth animations and transitions
- **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Smooth Animations**: GSAP/Framer Motion powered scroll-triggered animations
- **Interactive Sections**: Hero, About, Skills, Experience, Projects, and Contact
- **Contact Form**: Integrated EmailJS for seamless contact form submissions
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd "Csv Viewer"
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your EmailJS credentials:
```
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

## 📧 EmailJS Setup

To enable the contact form:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file
6. Update the Contact component (`components/Contact.tsx`) with your credentials

Alternatively, you can use the EmailJS credentials directly in the Contact component (not recommended for production).

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom primary colors
  },
}
```

### Content

Update the content in each component:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section content
- `components/Skills.tsx` - Skills and technologies
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Featured projects
- `components/Contact.tsx` - Contact information

### Fonts

The project uses Inter and Poppins fonts from Google Fonts. You can change them in `app/layout.tsx`.

## 📱 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Deploy to Netlify

The project is configured for Netlify deployment with `netlify.toml`. Follow these steps:

1. **Push your code to GitHub**:
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
   - Netlify will automatically detect the settings from `netlify.toml`
   - The build command and publish directory are already configured

3. **Add Environment Variables** (Optional, for EmailJS):
   - Go to Site settings → Environment variables
   - Add the following variables:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - If not set, the contact form will fallback to opening the email client

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will build and deploy your site automatically
   - Your site will be live at `https://your-site-name.netlify.app`

**Note**: The `@netlify/plugin-nextjs` plugin is required. It will be automatically installed during the build process.

### Deploy to Other Platforms

The project is a standard Next.js application and can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email**: [EmailJS](https://www.emailjs.com/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Okwor Chukwuemeka Nnajiofor**

- Email: okworcloud@gmail.com
- LinkedIn: [linkedin.com/in/okworchukwuemeka](https://www.linkedin.com/in/okworchukwuemeka/)
- GitHub: [github.com/thenaijadev](https://github.com/thenaijadev)

## 🙏 Acknowledgments

- Design inspiration from Dribbble, Awwwards, and Behance
- Icons from React Icons
- Fonts from Google Fonts

---

Built with ❤️ using Next.js and TailwindCSS
