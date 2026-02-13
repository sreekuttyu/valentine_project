# 🚀 Quick Start Guide

Get your Valentine's website up and running in 5 minutes!

## ⚡ Super Fast Setup

### Step 1: Install Dependencies (1 minute)

Open terminal in the project folder and run:

```bash
npm install
```

### Step 2: Customize config.json (2 minutes)

Open `config.json` and change:

```json
{
  "names": {
    "sender": "John",              // ← Your name here
    "receiver": "Sarah"            // ← Partner's name here
  },
  "content": {
    "title": "Will you be my Valentine?",
    "subtitle": "You make my life beautiful ❤️",
    "successMessage": "You just made me the happiest person alive! 🎉"
  }
}
```

### Step 3: Test Locally (30 seconds)

```bash
npm run dev
```

Open http://localhost:5173 in your browser

### Step 4: Deploy (1 minute)

```bash
npm run build
```

Then drag the `dist` folder to https://app.netlify.com/drop

**Done! 🎉** Share your link!

---

## 📸 Adding Your Photos (Optional)

1. Put photos in: `src/assets/couple_photo/`
2. Update `config.json`:

```json
"couplePhotos": [
  {
    "image": "/src/assets/couple_photo/us.jpg",
    "caption": "Our first date ❤️"
  }
]
```

---

## 🎵 Adding Your Songs (Optional)

1. Put MP3s in: `src/assets/songs/`
2. Put album covers in: `src/assets/album-covers/`
3. Update `config.json`:

```json
"songs": [
  {
    "title": "Our Song",
    "artist": "Artist Name",
    "audio": "/src/assets/songs/our-song.mp3",
    "cover": "/src/assets/album-covers/our-song.jpg",
    "duration": "3:45"
  }
]
```

---

## 🎨 Changing Colors

In `config.json`:

```json
"theme": {
  "primaryColor": "#ff69b4",      // Pink
  "secondaryColor": "#ff1493",    // Deep pink
  "backgroundColor": "#667eea"    // Purple
}
```

Popular color schemes:
- **Red & Pink:** `#ff0000` and `#ff69b4`
- **Rose Gold:** `#b76e79` and `#e8a798`
- **Purple:** `#667eea` and `#764ba2`

---

## ❓ Common Questions

**Q: Do I need to code?**
A: No! Just edit config.json

**Q: Can I use my own photos?**
A: Yes! Add them to the assets folder

**Q: How do I update the site later?**
A: Edit config.json, rebuild, and redeploy

**Q: Is it free?**
A: Yes! Completely free hosting on Netlify/Vercel

**Q: Works on mobile?**
A: Yes! Fully responsive

---

## 🆘 Help

**Photos not showing?**
- Check file path in config.json
- Make sure file exists in correct folder

**Build errors?**
```bash
rm -rf node_modules
npm install
```

**Need more help?**
- Check README.md (detailed guide)
- Check DEPLOYMENT_GUIDE.md (deployment help)

---

## ✅ Pre-Launch Checklist

Before sharing with your Valentine:

- [ ] Changed names in config.json
- [ ] Customized all messages
- [ ] Added your photos (optional)
- [ ] Tested locally
- [ ] Built successfully
- [ ] Deployed to hosting
- [ ] Tested deployed link
- [ ] Works on mobile

---

## 🎁 Ready to Share!

Once deployed, just share the link:
```
https://your-site.netlify.app
```

Or create a QR code to make it special!

---

**Happy Valentine's Day! 💝**

Total time: ~5-10 minutes
Difficulty: Easy
Coding required: None!
