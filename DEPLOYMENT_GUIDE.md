# Deployment Guide - High Square Aluminium Website

## 1. Clone the Project

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

## 2. Run Locally

```bash
cd frontend
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. Build for Production

```bash
cd frontend
yarn build
```

The build output will be in `frontend/build/`.

## 4. Deploy via GitHub Actions (Recommended)

### One-Time Setup:

1. Push the project to GitHub
2. Go to your repo → **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. That's it — every push to `main` (or `master`) will auto-deploy

### How It Works:

- The workflow file at `.github/workflows/deploy.yml` handles everything
- It builds from the `frontend/` subfolder
- Uses Node.js 20
- Sets `PUBLIC_URL` automatically to `/<repo-name>` so all image paths work
- Deploys using official GitHub Pages Actions

### To Deploy:

Just push to `main`:
```bash
git add .
git commit -m "Update site"
git push origin main
```

GitHub Actions will automatically build and deploy. Check the **Actions** tab for status.

Your site will be live at:
```
https://<your-username>.github.io/<your-repo-name>/
```

## 5. Replacing Images

### Product Images
Place your images in `frontend/public/images/products/`:
- `windows.jpg`
- `doors.jpg`
- `partitions.jpg`

Edit titles/descriptions in `frontend/src/components/ProductShowcase.jsx`

### Project Images
Place your images in `frontend/public/images/projects/`:
- `project-1.jpg` through `project-6.jpg`

Edit titles/categories in `frontend/src/components/ProjectsGallery.jsx`

To add more projects, add entries to the `projects` array in that file.

## 6. Google Apps Script (Contact Form)

The contact form sends enquiries via Google Apps Script.

1. Open `frontend/src/components/ContactSection.jsx`
2. Replace the placeholder on line 16:
   ```js
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
   ```
3. See `README.md` for full Apps Script setup instructions

## 7. Troubleshooting

### Blank Screen After Deploy
- **Cause**: Router mismatch with GitHub Pages subpath
- **Fix**: This project uses NO router — it's a single-page scroll site. Navigation is anchor-based (`#about`, `#services`, etc.), not route-based. This eliminates all routing issues.

### Images Not Loading on GitHub Pages
- **Cause**: Absolute paths like `/images/...` don't work on subpaths
- **Fix**: All image paths use `process.env.PUBLIC_URL + "/images/..."`. The GitHub Actions workflow automatically sets `PUBLIC_URL=/<repo-name>` during build.

### Build Fails on GitHub Actions
- **Cause**: Node version too old
- **Fix**: Workflow uses Node.js 20. If you still get errors, check `frontend/yarn.lock` exists and is committed.

### Navigation Links Show Blank Page
- **Cause**: Using React Router routes for sections
- **Fix**: All nav links are anchor scrolls (`#about`, `#contact`, etc.) — they scroll to sections, not navigate to routes.

### Workflow Not Triggering
- Ensure you push to `main` or `master` branch
- Go to repo **Settings → Pages → Source** and select **GitHub Actions**
- Check the **Actions** tab for error details

### Images Still Broken Locally
- Ensure images exist in `frontend/public/images/products/` and `frontend/public/images/projects/`
- File names are case-sensitive
- Restart dev server after adding new files to `public/`
