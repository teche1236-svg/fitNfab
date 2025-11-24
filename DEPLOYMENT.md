# Fit n Fab - Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI** (if not already installed):
```bash
npm install -g netlify-cli
```

2. **Build your project**:
```bash
npm run build
```

3. **Login to Netlify**:
```bash
netlify login
```

4. **Deploy to Netlify**:
```bash
netlify deploy --prod
```

5. Follow the prompts:
   - Choose "Create & configure a new site"
   - Select your team
   - Enter a site name (e.g., `fitnfab-ravet`)
   - Publish directory: `dist`

### Option 2: Deploy via Netlify Dashboard

1. **Build your project locally**:
```bash
npm run build
```

2. **Go to Netlify Dashboard**:
   - Visit https://app.netlify.com/
   - Click "Add new site" → "Deploy manually"

3. **Drag and drop** the `dist` folder to deploy

### Option 3: Connect GitHub Repository (Best for Continuous Deployment)

1. **Push your code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit - Fit n Fab website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: 18
   - Click "Deploy site"

3. **Automatic deployments**: Every push to `main` branch will trigger a new deployment

## Environment Variables

If you need to add environment variables:

1. Go to your site in Netlify Dashboard
2. Navigate to "Site settings" → "Environment variables"
3. Add any required variables (e.g., API keys)

## Custom Domain Setup

1. Go to "Domain settings" in your Netlify site
2. Click "Add custom domain"
3. Enter your domain (e.g., `fitnfab.com`)
4. Follow DNS configuration instructions

## Build Settings

The `netlify.toml` file in the root directory contains:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects for React Router
- Security headers
- Cache headers for performance

## Troubleshooting

### Build fails
- Check Node version (should be 18+)
- Ensure all dependencies are in `package.json`
- Run `npm install` and `npm run build` locally first

### Routes not working (404 errors)
- The `netlify.toml` file handles redirects
- Ensure it's in the root directory

### Slow loading
- Images are cached for 1 year
- Static assets are cached
- Consider using a CDN for external images

## Post-Deployment Checklist

- ✅ Test all routes (/, /about, /workshop, /gallery, /login, /signup)
- ✅ Test mobile responsiveness
- ✅ Check contact phone numbers are clickable
- ✅ Verify all images load correctly
- ✅ Test navigation menu (desktop & mobile)
- ✅ Check form submissions (login/signup)

## Useful Netlify CLI Commands

```bash
# Deploy to draft URL (for testing)
netlify deploy

# Deploy to production
netlify deploy --prod

# Open site in browser
netlify open:site

# View deployment logs
netlify logs

# Check build status
netlify status
```

## Support

For issues with deployment, contact:
- Netlify Support: https://www.netlify.com/support/
- Check build logs in Netlify Dashboard

---

**Site Name**: Fit n Fab
**Location**: Ravet, Pune, Maharashtra
**Contact**: 845 2933 588 / 869 8022 555
