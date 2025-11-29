# Netlify Deployment Guide

This guide will help you deploy your portfolio to Netlify.

## Prerequisites

- A GitHub account
- A Netlify account (sign up at https://www.netlify.com)
- Your code pushed to a GitHub repository

## Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure your code is pushed to GitHub:

```bash
git init
git add .
git commit -m "Ready for Netlify deployment"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Deploy on Netlify

1. **Sign in to Netlify**
   - Go to https://www.netlify.com
   - Sign in with your GitHub account

2. **Import Your Project**
   - Click "Add new site" → "Import an existing project"
   - Select "Deploy with GitHub"
   - Authorize Netlify to access your GitHub repositories
   - Select your portfolio repository

3. **Configure Build Settings**
   - Netlify will automatically detect settings from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `.next`
     - Node version: 20
   - **No manual configuration needed!**

4. **Add Environment Variables (Optional)**
   - Go to Site settings → Environment variables
   - Add these variables if you want EmailJS to work:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - If you don't add these, the contact form will fallback to opening the email client

5. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically:
     - Install dependencies (`npm install`)
     - Build your project (`npm run build`)
     - Deploy it to a live URL

### 3. Post-Deployment

- Your site will be live at `https://your-site-name.netlify.app`
- You can customize the site name in Site settings → General → Site details
- Set up a custom domain in Site settings → Domain management

## Environment Variables

The following environment variables are optional but recommended:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS Service ID | No |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS Template ID | No |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS Public Key | No |

**Note**: These are public keys (prefixed with `NEXT_PUBLIC_`) and safe to expose in client-side code.

## Troubleshooting

### Build Fails

- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version is 20 (configured in `netlify.toml`)

### Contact Form Not Working

- Verify EmailJS environment variables are set correctly
- Check EmailJS dashboard for service status
- The form will fallback to email client if EmailJS is not configured

### Site Not Updating

- Netlify automatically deploys on every push to your main branch
- Check deployment logs for errors
- Clear browser cache if changes aren't visible

## Continuous Deployment

Netlify automatically deploys your site whenever you push to your main branch. You can also:

- Set up branch previews for pull requests
- Configure deploy contexts for different branches
- Set up build hooks for manual deployments

## Support

For issues specific to:
- **Netlify**: Check [Netlify Docs](https://docs.netlify.com/)
- **Next.js**: Check [Next.js Docs](https://nextjs.org/docs)
- **This Project**: Check the main README.md

---

Happy deploying! 🚀

