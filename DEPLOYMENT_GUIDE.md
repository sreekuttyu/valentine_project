# Valentine's Day Website - Deployment Guide

## Quick Deploy Options

### 🚀 Option 1: Netlify (Recommended - Easiest)

#### Method A: Drag & Drop (No Account Needed Initially)

1. **Build your project:**
   ```bash
   npm install
   npm run build
   ```

2. **Go to Netlify Drop:**
   - Visit https://app.netlify.com/drop
   - Drag the `dist` folder to the upload area
   - Wait 30 seconds for deployment
   - Get your live URL instantly!

#### Method B: Netlify CLI (More Control)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

3. **Follow prompts:**
   - Create & configure a new site
   - Choose `dist` as publish directory
   - Get your live URL!

#### Method C: GitHub Integration (Best for Updates)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Valentine's website"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

**✅ Netlify Features:**
- Free SSL certificate
- Free custom domain
- Automatic deployments from Git
- Easy rollbacks

---

### 🌐 Option 2: Vercel

#### Method A: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - Set up and deploy
   - Get your live URL!

#### Method B: GitHub Integration

1. **Push to GitHub** (see above)

2. **Import to Vercel:**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your repository
   - Framework Preset: Vite
   - Click "Deploy"

**✅ Vercel Features:**
- Automatic HTTPS
- Global CDN
- Preview deployments
- Easy custom domains

---

### 📄 Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/YOUR_REPO_NAME/',  // Add this line
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings
   - Pages section
   - Source: gh-pages branch
   - Save

**Your site will be live at:**
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

### 🔧 Option 4: Other Hosting Services

#### Cloudflare Pages

1. Build your project: `npm run build`
2. Go to https://pages.cloudflare.com
3. Create a new project
4. Upload `dist` folder
5. Deploy!

#### Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure:**
   - Public directory: `dist`
   - Single-page app: Yes
   - Set up automatic builds: No

4. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Pre-Deployment Checklist

### 1. Test Everything Locally

```bash
npm install
npm run dev
```

**Check:**
- ✅ All text is correct
- ✅ Names are personalized
- ✅ Photos load properly
- ✅ Music plays (if using real audio files)
- ✅ Buttons work correctly
- ✅ Mobile view looks good (resize browser)
- ✅ NO button runs away when hovered
- ✅ YES button shows success message

### 2. Optimize Assets

**Images:**
- Compress at https://tinypng.com
- Keep under 500KB each
- Use JPG for photos, PNG for graphics

**Audio:**
- Keep MP3s under 5MB
- Use 128-192 kbps bitrate
- Test playback before deploying

### 3. Build for Production

```bash
npm run build
```

**This creates:**
- Optimized files in `dist/` folder
- Minified CSS and JS
- Compressed assets

### 4. Preview Production Build

```bash
npm run preview
```

Test one more time before deploying!

---

## Custom Domain Setup

### Netlify

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Update DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: YOUR-SITE.netlify.app
   ```

### Vercel

1. Go to Settings → Domains
2. Add your domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## Troubleshooting

### Build Fails

**Issue:** npm install errors
```bash
# Try this:
rm -rf node_modules package-lock.json
npm install
```

**Issue:** Build errors
- Check config.json syntax
- Ensure all file paths are correct
- Verify all imported files exist

### Images Not Loading After Deploy

**Problem:** Paths are incorrect

**Solution:** Make sure paths in config.json start with `/src/assets/`

Example:
```json
"image": "/src/assets/couple_photo/photo1.jpg"
```

### Audio Not Playing

**Common causes:**
- File path incorrect
- File too large (>5MB)
- Wrong format (must be .mp3)
- Browser autoplay restrictions

**Solution:** 
- User must click play button
- Check browser console for errors

### Mobile Layout Broken

**Check:**
- Viewport meta tag in index.html
- CSS media queries in App.css
- Test in browser DevTools mobile view

---

## Performance Tips

### 1. Lazy Load Images

For better performance with many photos, consider lazy loading (advanced).

### 2. Use WebP Images

Convert images to WebP for smaller file sizes:
```bash
# Using online tools or:
npm install -g webp-converter-cli
webp-converter input.jpg -o output.webp
```

### 3. Enable Compression

Most hosting services (Netlify, Vercel) automatically enable gzip/brotli compression.

---

## Security Best Practices

1. **Don't commit sensitive data:**
   - API keys (if using any)
   - Personal information
   - Private photos you don't want public

2. **Use environment variables** (if needed):
   - Create `.env` file
   - Add to `.gitignore`
   - Reference as `import.meta.env.VITE_API_KEY`

3. **Keep dependencies updated:**
   ```bash
   npm audit
   npm update
   ```

---

## Monitoring & Analytics (Optional)

### Add Google Analytics

1. Get tracking ID from https://analytics.google.com
2. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

---

## Sharing Your Website

### Direct Link
Simply share your deployed URL:
```
https://your-site.netlify.app
```

### QR Code
Create a QR code at https://qr-code-generator.com pointing to your site

### Social Media
Most platforms will create a nice preview card automatically

---

## After Deployment

### Making Updates

1. **Edit files** (usually just config.json)
2. **Test locally:** `npm run dev`
3. **Rebuild:** `npm run build`
4. **Redeploy:**
   - Netlify/Vercel: Git push (auto-deploys)
   - Manual: Upload new dist folder
   - CLI: Run deploy command again

### Taking It Down

**Netlify:** Site settings → Delete site
**Vercel:** Settings → Delete Project
**GitHub Pages:** Repository Settings → Disable Pages

---

## Cost Breakdown

| Service | Cost | Free Tier |
|---------|------|-----------|
| Netlify | FREE | 100GB bandwidth/month |
| Vercel | FREE | 100GB bandwidth/month |
| GitHub Pages | FREE | 1GB storage, 100GB bandwidth/month |
| Cloudflare Pages | FREE | Unlimited requests |

**All options are completely FREE for this project!**

---

## Support

If you encounter issues:

1. Check the main README.md
2. Validate config.json at https://jsonlint.com
3. Check browser console (F12) for errors
4. Review deployment logs on hosting platform
5. Test locally first: `npm run dev`

---

## Final Reminders

✅ Test locally before deploying  
✅ Optimize all images  
✅ Check mobile responsiveness  
✅ Verify all personalized content  
✅ Test on different browsers  
✅ Have fun and enjoy the surprise! 💕

---

**Happy Valentine's Day!** 💝

Made with ❤️ for your special someone
