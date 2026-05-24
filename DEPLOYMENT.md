# Deployment Guide

Your AI/ML Engineer portfolio is ready for deployment. This guide covers multiple hosting options.

## 🚀 Quick Deploy Options

### Option 1: Manus (Recommended - Built-in Hosting)

Manus provides built-in hosting with custom domain support:

1. **In the Manus UI**:
   - Click the "Publish" button (top-right)
   - Your site will be deployed automatically
   - Get a free `*.manus.space` domain
   - Optional: Bind a custom domain

2. **Custom Domain Setup**:
   - Go to Settings → Domains
   - Purchase a domain or connect existing one
   - Follow DNS configuration steps

**Advantages**:
- ✅ One-click deployment
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Built-in analytics
- ✅ No configuration needed

---

### Option 2: Vercel (Easiest for Next.js-like Projects)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Configuration** (`vercel.json`):
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/public",
  "env": {
    "NODE_ENV": "production"
  }
}
```

**Advantages**:
- ✅ Free tier available
- ✅ Automatic deployments from Git
- ✅ Edge functions support
- ✅ Analytics included

---

### Option 3: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist/public
```

**Configuration** (`netlify.toml`):
```toml
[build]
  command = "pnpm build"
  publish = "dist/public"

[build.environment]
  NODE_VERSION = "18"
  PNPM_VERSION = "10"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Advantages**:
- ✅ Generous free tier
- ✅ Git-based deployments
- ✅ Form handling included
- ✅ Serverless functions

---

### Option 4: GitHub Pages

```bash
# Build the project
pnpm build

# Deploy to gh-pages branch
npm install -g gh-pages
gh-pages -d dist/public
```

**Configuration** (`package.json`):
```json
{
  "homepage": "https://yourusername.github.io/ai-engineer-portfolio",
  "scripts": {
    "deploy": "pnpm build && gh-pages -d dist/public"
  }
}
```

**Advantages**:
- ✅ Free hosting
- ✅ GitHub integration
- ✅ Custom domain support
- ✅ No build minutes limit

---

### Option 5: AWS S3 + CloudFront

```bash
# Build
pnpm build

# Upload to S3
aws s3 sync dist/public/ s3://your-bucket-name/

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Advantages**:
- ✅ Highly scalable
- ✅ CDN included
- ✅ Pay-as-you-go pricing
- ✅ Enterprise-grade

---

### Option 6: Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

**Configuration** (`railway.toml`):
```toml
[build]
builder = "nixpacks"

[deploy]
startCommand = "pnpm start"
```

**Advantages**:
- ✅ Simple deployment
- ✅ Free tier available
- ✅ Git integration
- ✅ Environment variables

---

## 📋 Pre-Deployment Checklist

Before deploying, verify:

- [ ] Build completes without errors: `pnpm build`
- [ ] No TypeScript errors: `pnpm check`
- [ ] All links are correct (update GitHub/LinkedIn URLs)
- [ ] Images load properly
- [ ] Mobile responsive design works
- [ ] Contact form is functional
- [ ] Social media links are updated
- [ ] Meta tags are set correctly
- [ ] Performance is acceptable

## 🔧 Environment Variables

If using backend features, create `.env.production`:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 📊 Post-Deployment

After deployment:

1. **Test the live site**:
   - Check all pages load
   - Test navigation and links
   - Verify animations work smoothly
   - Test on mobile devices

2. **Set up monitoring**:
   - Enable error tracking (Sentry)
   - Set up analytics (Google Analytics, Plausible)
   - Monitor performance (Lighthouse CI)

3. **Configure DNS** (if using custom domain):
   - Update nameservers
   - Add SSL certificate
   - Set up redirects

4. **SEO optimization**:
   - Submit sitemap to Google Search Console
   - Add meta tags for social sharing
   - Create robots.txt
   - Set up 301 redirects for old URLs

## 🚨 Troubleshooting Deployments

### Build fails with "Cannot find module"
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### 404 errors on page refresh
Ensure your hosting platform redirects all routes to `index.html` (SPA routing).

### Slow performance
- Enable gzip compression
- Use CDN for static assets
- Optimize images
- Code split large bundles

### CORS errors
Add CORS headers if calling external APIs:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
```

## 📈 Performance Optimization

### Before Deployment

1. **Minify and compress**:
   ```bash
   pnpm build  # Already handled by Vite
   ```

2. **Analyze bundle size**:
   ```bash
   npm install -g vite-plugin-visualizer
   ```

3. **Test Lighthouse**:
   - Open DevTools → Lighthouse
   - Run audit
   - Fix issues

### After Deployment

1. **Monitor Core Web Vitals**:
   - Set up Google Analytics 4
   - Monitor LCP, FID, CLS

2. **Enable caching**:
   - Set cache headers for static assets
   - Use service workers for offline support

3. **Use CDN**:
   - Serve assets from edge locations
   - Reduce latency globally

## 🔐 Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] No sensitive data in client code
- [ ] Environment variables protected
- [ ] Dependencies up to date
- [ ] No console errors/warnings
- [ ] CSP headers configured

## 📞 Support

For platform-specific issues:
- **Manus**: Check Manus documentation
- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com
- **AWS**: https://aws.amazon.com/documentation

---

**Your portfolio is production-ready! Choose your deployment platform and go live! 🎉**
