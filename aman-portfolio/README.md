# Aman Kumar Srivastava — Creative Graphic Designer Portfolio 🚀

A high-performance, modern, and editorial freelance portfolio built for **Aman Kumar Srivastava** (Graphic Designer & Brand Identity Specialist).

Fully responsive, zero-framework, lightning-fast vanilla web app engineered for instant 1-click deployment on **Vercel**.

---

## ✨ Features & Enhancements

- 🎨 **Visual Aesthetics & Design System**:
  - Dark Mode & Light Mode with smooth transition, memory persistence (`localStorage`), and automatic system preference detection.
  - Modern typography pairing: **Bricolage Grotesque** (bold editorial display) + **Plus Jakarta Sans** (clean body).
  - Ambient glowing mesh backgrounds, floating animated skill chips, and glassmorphic navigation with scroll-progress indicator.
- 🖼️ **Interactive Showcase & Lightbox Modal**:
  - Dynamic category filters: *All Projects*, *Branding & Identity*, *Social Media*, *YouTube & Digital*, *Print & Posters*, and *Pitch Decks*.
  - Full-screen interactive Lightbox modal with high-resolution imagery, client briefs, deliverables list, tools used, and direct WhatsApp project inquiry CTA.
  - Keyboard navigation (`ESC` to close, `←` / `→` arrows to cycle through projects).
- 💰 **Interactive Project Estimator**:
  - Real-time quote and timeline calculator for clients.
  - Dynamic pricing based on service scope, standard vs. express delivery speed, and optional add-ons (vector source files, editable Canva links, commercial rights).
  - 1-click **"Book on WhatsApp"** button that pre-fills WhatsApp with the exact configured package details.
- 📈 **Key Metrics & Dual Experience**:
  - Highlights Aman's unique combination of artistic design mastery and operations/account management background (Kiash Infotech, Agilent Technologies).
  - Displays professional Microsoft & Coursera certifications.
- 💬 **High-Conversion Contact Channels**:
  - Direct WhatsApp chat integration.
  - Interactive contact form with client-side validation and toast notifications.
  - 1-click "Copy Email" and "Copy Phone" buttons with instant feedback toast.
- ⚡ **SEO & Performance Optimized**:
  - OpenGraph social cards, Twitter meta tags, and Google-friendly Schema.org JSON-LD structured data (`Person` and `ProfessionalService`).
  - Production security headers and long-term asset caching configured in `vercel.json`.

---

## 🚀 How to Deploy on Vercel

### Method 1: Deploy with GitHub (Recommended — 2 Minutes)

1. **Initialize Git & Push to GitHub**:
   Open PowerShell or Terminal in this project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Aman Kumar Srivastava Portfolio"
   git branch -M main
   ```
2. Create a new repository on your [GitHub account](https://github.com/new) (e.g. `aman-portfolio`).
3. Link and push your repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/aman-portfolio.git
   git push -u origin main
   ```
4. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** → **"Project"**.
   - Select your `aman-portfolio` repository and click **"Import"**.
   - Leave the build settings as default (Framework Preset: **Other**, Root Directory: `./`).
   - Click **"Deploy"**.
   - 🎉 Your live portfolio will be deployed at `https://aman-portfolio.vercel.app` in under 30 seconds!

---

### Method 2: Deploy directly via Vercel CLI (1 Minute)

1. Install the Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. In this folder, run:
   ```bash
   vercel
   ```
3. Follow the 3 simple interactive prompts (press Enter for defaults).
4. When ready to publish to production:
   ```bash
   vercel --prod
   ```

---

## 💻 Local Testing & Preview

To preview the portfolio locally on your machine:

```bash
# Run using the npm script:
npm run dev

# Or with npx serve:
npx serve .
```

Open your browser and navigate to `http://localhost:3000`.

---

## 📁 Project Structure

```text
aman-portfolio/
├── index.html        # Main semantic & SEO-optimized HTML document
├── styles.css        # Complete CSS design system, dark/light theme, animations
├── main.js           # Interactive engine: gallery filter, lightbox modal, estimator, FAQ, toasts
├── vercel.json       # Production Vercel caching and security headers
├── package.json      # NPM scripts and project metadata
├── .gitignore        # Git ignore rules
└── images/           # High-resolution portfolio mockups & profile portrait
    ├── aman.jpg                 # Aman's official portrait
    ├── project-branding.jpg     # Aurora Noir luxury branding & stationery mockup
    ├── project-social.jpg       # HyperGrowth Studio social media kit mockup
    ├── project-youtube.jpg      # Scale 10X Academy YouTube thumbnail & banner mockup
    ├── project-poster.jpg       # Modernist Symposium Swiss print poster mockup
    ├── project-cards.jpg        # Huxley & Co. foil-stamped business cards mockup
    └── project-deck.jpg         # Future Horizons corporate pitch deck mockup
```

---

## 🛠️ Personalization & Updates

- **Contact Info**: Search for `amankumaar01722@gmail.com` or `+917618085023` in `index.html` to update email or phone.
- **Add New Projects**: Open [main.js](file:///c:/Users/PAKHI%20SRIVASTAVA/Downloads/aman-portfolio/main.js) and append a new project object to the `PORTFOLIO_PROJECTS` array. Add the image file into the `images/` directory.
