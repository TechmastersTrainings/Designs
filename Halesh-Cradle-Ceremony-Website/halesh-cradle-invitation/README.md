# Halesh — Cradle Ceremony Luxury Digital Invitation

An interactive, responsive digital invitation website designed with a luxury Christian celebration aesthetic for **Baby Halesh's Cradle Ceremony** on **Sunday, 22 November 2026** at **Eden Garden Function Hall, Bidar, Karnataka**.

---

## 🎨 Creative & Aesthetic Direction

- **Deep Emerald Green (`#123B32`)**: Symbolizing life, hope, and new beginnings.
- **Burgundy Accents (`#641C35`)**: Velvet depth and rich wax-seal warmth.
- **Champagne Gold (`#D6B875`) & Antique Gold (`#B89650`)**: Fine ornamental filigree, subtle foil accents, and delicate framing.
- **Warm Ivory (`#FFF9ED`) & Soft Cream (`#F5EEDC`)**: Premium textured parchment card backgrounds.
- **Respectful Christian Symbolism**: Gold Latin cross, peace dove with olive branch, and Holy Scripture typography.

---

## ✨ Features & Interactive Sections

1. **Opening Envelope Experience**:
   - Fullscreen deep-emerald setting with ornamental gold corner flourishes.
   - 3D physical envelope with gold foil borders and crimson wax seal featuring an embossed Latin cross & "H" monogram.
   - Realistic 3D flap unfold animation, letter extraction, and golden floating sparkle particles.
2. **Hero Presentation**:
   - Calligraphic script typography for "Halesh" and spaced ceremonial lettering.
   - High-fidelity arched gold portrait frame featuring the supplied baby photograph (`halesh-baby.jpg`).
   - "Save to Calendar", "View Venue", and "Confirm RSVP" quick-action buttons.
3. **Holy Scripture Section**:
   - *“Children are a heritage from the Lord, offspring a reward from him.”* — Psalm 127:3.
   - Displayed on a warm ivory card with gold filigree and cross motifs.
4. **Event & Ceremony Details**:
   - Date: Sunday, 22 November 2026.
   - Ceremony: 2:40 PM onwards.
   - Fellowship Feast & Lunch: 2:00 PM onwards.
   - Venue: Eden Garden Function Hall, Mailoor, Near GND College, Bidar, Karnataka.
   - Officiating Pastors: Rev. R. L. David, Rev. Samuel Sathyamithra, and Rev. Jayasheel.
5. **Live Countdown Timer**:
   - Real-time countdown tracking Days, Hours, Minutes, and Seconds until 22 November 2026, 2:40 PM IST.
   - Switches to an angelic celebration blessing when the hour arrives.
6. **Family Invitation**:
   - Cordially hosted by Mrs. Muttamma & Mr. Arjun Rao Halesh.
   - Beloved Granddaughter of Mrs. Reshma & Mr. Pradeep Halesh.
   - With best compliments from Kum. Deepthi, Shreya, Rishita, Mahima Rani, and all Halesh family, relatives & friends.
7. **Keepsakes & Photo Gallery**:
   - Original baby portrait and authentic printed invitation card (`invitation-card.jpg`).
   - Click-to-enlarge lightbox modal with keyboard navigation (Escape to close).
8. **Venue & Google Maps**:
   - Embedded Google Map preview.
   - Direct destination search button opening Google Maps navigation to Eden Garden Function Hall, Bidar.
9. **WhatsApp RSVP System**:
   - Form capturing guest name, headcount, attendance confirmation, and personal prayers.
   - Automatically compiles and opens official WhatsApp message to the confirmed family number (`+91 7892447247`).
   - "Copy RSVP Message" and "Share Invitation" quick-share buttons.
10. **The Blessings Wall (Guestbook)**:
    - Guests can type and post prayers or congratulations for baby Halesh.
    - Saves locally to `localStorage` so messages persist between visits.
11. **Optional Background Instrumental Hymn**:
    - User-controlled floating music player pill with soundwave animation.
    - Synthesizes a soothing acoustic celesta/harp rendition of a Christian hymn using the browser's Web Audio API (completely offline, zero bandwidth, zero broken links).
12. **Reverent Closing Footer**:
    - *“With Love, Prayers & Blessings — Thank you for being a part of our special day.”*
    - Quick "Back to Top" navigation button.

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Icons**: Lucide React & Custom SVG Gold Ornaments
- **Styling**: Pure CSS Design System (`variables.css`, `envelope.css`, `components.css`)
- **Typography**: Google Fonts (*Cinzel*, *Cinzel Decorative*, *Great Vibes*, *Playfair Display*, *Cormorant Garamond*, *Plus Jakarta Sans*)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to Vercel

1. Push this project to a GitHub / GitLab / Bitbucket repository.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New" → "Project"**.
3. Import the repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Vercel will instantly generate a live production URL (e.g. `https://halesh-cradle-ceremony.vercel.app`).
