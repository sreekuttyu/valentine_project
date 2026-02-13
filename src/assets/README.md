# Assets Folder

## How to Add Your Files

### Couple Photos
1. Place your couple photos in the `couple_photo/` folder
2. Recommended formats: .jpg, .png, .jpeg
3. Recommended size: 800x600px or similar
4. Keep file sizes under 500KB for best performance

**Example:**
```
couple_photo/
├── photo1.jpg
├── photo2.jpg
└── photo3.jpg
```

### Songs
1. Place your MP3 files in the `songs/` folder
2. Format must be: .mp3
3. Keep files under 5MB
4. Use clear file names (no spaces or special characters)

**Example:**
```
songs/
├── perfect.mp3
├── thinking-out-loud.mp3
└── all-of-me.mp3
```

### Album Covers
1. Place album cover images in the `album-covers/` folder
2. Recommended formats: .jpg, .png
3. Recommended size: 300x300px (square)
4. Match the file names with your song names for easy reference

**Example:**
```
album-covers/
├── perfect.jpg
├── thinking-out-loud.jpg
└── all-of-me.jpg
```

### Gift Images
1. Place gift images in the `gift/` folder
2. Any image format supported
3. Will be displayed in the gift section

**Example:**
```
gift/
└── gift-box.png
```

## Important Notes

- All file paths in config.json should start with `/src/assets/`
- File names are case-sensitive
- Use simple names without spaces or special characters
- Compress images before adding (use tinypng.com)
- Test locally before deploying

## Default Placeholder Images

This template uses placeholder images from Unsplash.
Replace them with your own images by:
1. Adding your images to the appropriate folder
2. Updating the paths in config.json
