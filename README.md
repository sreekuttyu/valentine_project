# Valentine's Day Website Template
## Complete Configuration & Deployment Guide

## 1. Introduction

This guide explains how to customize, test, and deploy your Valentine's Day website template.

The template is designed so that you only need to edit one file: **config.json**.

No advanced coding knowledge is required. Follow each step carefully for a smooth setup.

---

## 2. Project File Structure Overview

Your project folder should look like this:

```
your-valentine-website/
├── config.json → Main configuration file (EDIT THIS)
├── src/
│   ├── App.jsx → Main application component
│   ├── App.css → Main styles
│   ├── main.jsx → Entry point
│   ├── config.js → Configuration loader
│   ├── assets/
│   │   ├── couple_photo/ → Add your photos here
│   │   ├── gift/ → Gift images
│   │   ├── songs/ → Add your MP3 files here
│   │   ├── album-covers/ → Add album cover images here
│   │   ├── music-bear.gif (optional)
│   │   └── your_songs.mp3
│   └── components/
│       ├── FloatingHearts.jsx
│       ├── QuestionCard.jsx
│       ├── SuccessPage.jsx
│       ├── PhotoGallery.jsx
│       ├── MusicPlayer.jsx
│       └── GiftSection.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 3. Key File Explanation

### 3.1 config.json (Most Important File)

This is your personal customization file.

**You can edit:**
- Names
- Website text
- Photos
- Songs
- Album covers
- Colors and theme

**You do NOT need to modify any other file unless you want advanced customization.**

---

## 4. Step-by-Step Customization Guide

### Step 1: Open the Project Folder

Open the folder in:
- VS Code
- Notepad++
- Sublime
- Or any text editor

**Open the file:** `config.json`

---

### Step 2: Customize Names

**Example:**
```json
"names": {
  "sender": "Your Name",
  "receiver": "Your Partner's Name"
}
```

**Replace:**
- `"Your Name"` → Your name
- `"Your Partner's Name"` → Your partner's name

---

### Step 3: Customize Main Content

**Example:**
```json
"content": {
  "title": "Will you be my Valentine?",
  "subtitle": "You make my life beautiful ❤️",
  "yesButtonText": "YES! 💕",
  "noButtonText": "NO 😢",
  "successMessage": "You just made me the happiest person alive! 🎉"
}
```

**You can modify:**
- Main title
- Subtitle
- Button text
- Success message

---

### Step 4: Add Your Photos

#### 4.1 Add Photos to Folder

Place your images inside:
```
src/assets/couple_photo/
```

**Example:**
```
photo1.jpg
photo2.jpg
memory1.png
```

#### 4.2 Update Photo Section in config.json

```json
"couplePhotos": [
  {
    "image": "/src/assets/couple_photo/photo1.jpg",
    "caption": "Our first date ❤️"
  },
  {
    "image": "/src/assets/couple_photo/photo2.jpg",
    "caption": "Best memories together 💑"
  }
]
```

**Make sure:**
- File name matches exactly
- Extension is correct (.jpg, .png, .jpeg)
- No spelling mistakes

---

### Step 5: Add Songs

#### 5.1 Add MP3 Files

Place audio files inside:
```
src/assets/songs/
```

**Example:**
```
love-song.mp3
our-favorite.mp3
```

#### 5.2 Add Album Covers

Place images inside:
```
src/assets/album-covers/
```

**Example:**
```
love-song.jpg
our-favorite.jpg
```

#### 5.3 Update Songs in config.json

```json
"songs": [
  {
    "title": "Perfect",
    "duration": "4:20",
    "album": "Divide",
    "artist": "Ed Sheeran",
    "cover": "/src/assets/album-covers/love-song.jpg",
    "audio": "/src/assets/songs/love-song.mp3"
  }
]
```

---

## 5. Theme Customization

You can change colors and fonts.

**Example:**
```json
"theme": {
  "primaryColor": "#ff69b4",
  "secondaryColor": "#ff1493",
  "backgroundColor": "#667eea",
  "fontFamily": "Arial, sans-serif"
}
```

**You can:**
- Change hex color codes
- Use Google Fonts if supported
- Adjust overall visual style

---

## 6. Important Technical Rules

### 6.1 File Path Rules

- Always use forward slash `/`
- Paths start with `/src/`
- File names are case-sensitive

**Correct:**
```
/src/assets/songs/song1.mp3
```

**Incorrect:**
```
\src\assets\songs\song1.mp3
```

---

### 6.2 File Naming Best Practices

**Use:**
- Simple names
- No spaces
- No special characters

**Good:**
```
photo1.jpg
our_song.mp3
album1.jpg
```

**Avoid:**
```
our song!.mp3
photo @ beach.jpg
```

---

### 6.3 JSON Formatting Rules

- Use double quotes `" "`
- Add commas between items
- No comma after last item
- Validate JSON online if errors occur

---

## 7. Testing Locally (Recommended Before Deployment)

Open terminal inside project folder and run:

```bash
npm install
```

Then:

```bash
npm run dev
```

Then open:
```
http://localhost:5173
```

### What to Test

✔ Buttons work  
✔ Photos load correctly  
✔ Songs play  
✔ Text is correct  
✔ Mobile layout works

---

## 8. Deployment Options

### Option 1: Netlify (Easiest)

1. Visit https://netlify.com
2. Drag and drop project folder
3. Wait for deployment
4. Get live website link

### Option 2: Vercel

1. Visit https://vercel.com
2. Import project
3. Deploy
4. Get live URL

### Option 3: GitHub Pages

1. Create GitHub repository
2. Push project files
3. Enable GitHub Pages
4. Wait for build
5. Access live URL

---

## 9. Troubleshooting Guide

### Issue: Website Not Loading

**Check:**
- JSON syntax errors
- Missing files
- Incorrect file paths

### Issue: Images Not Showing

**Check:**
- Correct folder location
- Correct extension
- Exact file name match

### Issue: Audio Not Playing

**Check:**
- File is .mp3 format
- Path is correct
- File exists in folder

### Issue: Build Errors

**Run:**
```bash
npm install
```

**Then:**
```bash
npm run build
```

---

## 10. Performance Recommendations

- Compress images (use TinyPNG)
- Keep audio under 5MB
- Use optimized JPG or WebP
- Remove unused files

---

## 11. Final Checklist Before Sharing

✔ All content personalized  
✔ All images working  
✔ Songs playing  
✔ Mobile responsive  
✔ No spelling errors  
✔ Deployed successfully

---

## 12. Best Practices

- Keep backup of original template
- Test after every major change
- Use simple file names
- Double-check JSON formatting

---

## 13. Features

✨ **Interactive Elements:**
- Moving "NO" button that runs away
- Confetti animation on "YES" click
- Floating hearts background

🎵 **Music Player:**
- Full audio playback
- Play, pause, next, previous controls
- Album cover display

📸 **Photo Gallery:**
- Responsive grid layout
- Hover effects
- Custom captions

🎨 **Customizable Theme:**
- Colors via config.json
- Automatic CSS variable application

📱 **Mobile Responsive:**
- Works on all devices
- Touch-friendly buttons
- Optimized layouts

---

## 14. Advanced Customization (Optional)

### Changing Animations

Edit `src/App.css` to modify:
- Heart floating speed
- Button hover effects
- Card entrance animations

### Adding More Components

Create new components in `src/components/` and import them in `SuccessPage.jsx`

### Custom Fonts

Add Google Fonts in `index.html` and update `theme.fontFamily` in config.json

---

## 15. Support

If you need help:
1. Check this README
2. Validate your config.json at https://jsonlint.com
3. Check browser console for errors (F12)
4. Ensure all file paths are correct

---

## 16. Conclusion

This template is designed to be **simple, customizable, and easy to deploy**.

By editing only the **config.json** file and placing your media in the correct folders, you can create a personalized and meaningful Valentine's website.

Take your time, test carefully, and share it with confidence.

**HAPPY VALENTINE'S DAY!** 💝

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

Made with ❤️ for your special someone!
#   v a l e n t i n e _ p r o j e c t  
 