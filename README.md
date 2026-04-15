# High Square Aluminium - Premium Website

A premium, ultra-modern showcase website for **High Square Aluminium by Monalisa Aluminium** — crafting premium aluminium solutions since 1998.

## Tech Stack

- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **Backend**: FastAPI + MongoDB
- **Animations**: Framer Motion (scroll reveals, parallax, 3D tilt, counters, marquee)

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- MongoDB

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd high-square-aluminium

# Backend
cd backend
pip install -r requirements.txt
cp .env.example .env  # Update with your MongoDB URL
uvicorn server:app --host 0.0.0.0 --port 8001

# Frontend
cd frontend
yarn install
yarn start
```

### Environment Variables

**Backend (`/backend/.env`)**:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=highsquare_db
CORS_ORIGINS=*
```

**Frontend (`/frontend/.env`)**:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

---

## Google Sheets Integration (Contact Form)

The contact form currently saves submissions to MongoDB. To also sync submissions to Google Sheets, follow these steps:

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click **Select Project** > **New Project**
3. Name it: `high-square-aluminium`
4. Click **Create**

### Step 2: Enable Google Sheets API

1. In your project, go to **APIs & Services** > **Library**
2. Search for **Google Sheets API**
3. Click **Enable**

### Step 3: Create a Service Account

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **Service Account**
3. Name: `highsquare-sheets`
4. Click **Create and Continue** > **Done**
5. Click on the service account email
6. Go to **Keys** tab > **Add Key** > **Create New Key** > **JSON**
7. Download the JSON key file

### Step 4: Create & Share the Google Sheet

1. Create a new Google Sheet
2. Add headers in Row 1: `Name | Email | Phone | Service | Message | Location | Submitted At`
3. Copy the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```
4. Share the sheet with your service account email (found in the JSON key file as `client_email`) with **Editor** access

### Step 5: Add Credentials to Backend

Add these to your `/backend/.env`:

```env
GOOGLE_SHEETS_ENABLED=true
GOOGLE_SPREADSHEET_ID=YOUR_SPREADSHEET_ID_HERE
GOOGLE_SERVICE_ACCOUNT_JSON=path/to/your-service-account-key.json
```

### Step 6: Install Dependencies

```bash
cd backend
pip install google-auth google-auth-httplib2 google-api-python-client
```

Then integrate in `server.py` by importing the Google Sheets client and appending rows on each contact form submission.

---

## Deployment

### Deploy to Vercel

1. Push the `frontend` folder to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set the **Root Directory** to `frontend`
5. Add environment variable: `REACT_APP_BACKEND_URL=https://your-backend-url.com`
6. Deploy

### Deploy to Netlify

1. Push the `frontend` folder to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import from Git
4. Set **Base directory** to `frontend`
5. **Build command**: `yarn build`
6. **Publish directory**: `frontend/build`
7. Add environment variable: `REACT_APP_BACKEND_URL=https://your-backend-url.com`
8. Deploy

### Deploy Backend (Railway / Render)

1. Push the `backend` folder to GitHub
2. Go to [Railway](https://railway.app) or [Render](https://render.com)
3. Create a new service from your repo
4. Set **Root Directory** to `backend`
5. Add environment variables (`MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`)
6. Deploy

---

## Project Structure

```
/
├── backend/
│   ├── server.py            # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   └── .env                 # Environment variables
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js           # Router
│   │   ├── App.css          # Custom styles
│   │   ├── index.css        # Global styles + CSS vars
│   │   ├── pages/
│   │   │   └── HomePage.jsx # Main page
│   │   └── components/
│   │       ├── Navbar.jsx
│   │       ├── HeroSection.jsx
│   │       ├── BrandStatement.jsx
│   │       ├── AboutSection.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── ProductShowcase.jsx
│   │       ├── WhyChooseUs.jsx
│   │       ├── ProjectsGallery.jsx
│   │       ├── CustomSolutions.jsx
│   │       ├── ContactSection.jsx
│   │       ├── WhatsAppButton.jsx
│   │       ├── Graphics.jsx
│   │       └── Footer.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env
│
└── README.md
```

## Contact

- **Phone**: +91 98273 33552
- **WhatsApp**: [Chat Now](https://wa.me/919827333552)
- **Head Office**: Indore, MP
- **Branch**: Dewas, MP
