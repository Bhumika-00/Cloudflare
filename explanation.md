# POD T-Shirt Customization Page – Submission Explanation

## 👋 Overview

This project is a single-page T-shirt customization tool built with **React**, **Vite**, **TailwindCSS**, and **react-hook-form**, deployed on **Cloudflare Pages**. It replicates and extends the UI from [this CodePen reference](https://codepen.io/jkantner/full/OPJrMbp) while adding interactive customization features, form control, and drag-drop support.

---

## ✅ Features Implemented

### 1. **Size Details Customization (Replaced "Width in Characters")**
- Replaced the original text-based “Width in Characters” input with:
  - **Height (cm)** – default 180cm
  - **Weight (kg)** – default 80kg
  - **Build** – dropdown with options: *lean*, *regular*, *athletic* (default), *big*

All form-controlled using `react-hook-form`.

---

### 2. **Image Upload + Preview**
- Added:
  - **28% width live preview** (right side), shows the selected/uploaded image in full height
  - **Dropzone-style upload box** with a default image shown in smaller size
  - User can drag and drop OR click to upload a custom image.
- Built using native drag-drop events and `useRef`.

---

### 3. **Custom Text Input (Bottom Area)**
- The previous large display box was converted into a **multi-line textbox (3 lines max)**.
- User can type any text to print on the T-shirt.
- Input is limited to 3 lines using a combination of `textarea` rows and JS line counting.
- Controlled by `react-hook-form`.

---

### 4. **Theme Switching via Alt+Q**
- Implemented **three UI themes/styles**:
  - 🎨 Theme 1: Light + Sky Blue UI
  - 🌙 Theme 2: Dark Mode + Neon Accents
  - 🧁 Theme 3: Pastel Candy Colors
- Pressing **Alt + Q** cycles between the themes using a `useEffect` and global key listener.
- Theme is controlled via `useState` and Tailwind utility classes (`className` conditional rendering).

---

### 5. **Responsiveness + Styling**
- Used **TailwindCSS** to ensure mobile-first responsiveness.
- The layout collapses into a stacked format on small screens and expands into a 2-column flexbox on larger ones.
- Drag-drop area, live preview, and form elements are all fully responsive.

---

### 6. **Cloudflare Pages Deployment**
- App built using `Vite` with a static `dist/` folder output.
- Deployed on **Cloudflare Pages** using the "Direct Upload" method:
  - Set the **Build command**: `npm run build`
  - Set the **Output directory**: `dist`
  - Added a `wrangler.toml` and configured for static assets only.

---

## 🧠 Use of AI Assistance

- **AI Consulted (ChatGPT)** for:
  - Validating Tailwind class combinations
  - Optimizing use of `react-hook-form` with dynamic field switching
  - Suggestions for Alt+Q hotkey implementation across browsers
- **All logic and code was implemented manually**, with AI providing reference guidance only.

---

## 📁 Tech Stack

- React (via Vite)
- Tailwind CSS
- React Hook Form
- Drag and Drop API (HTML5)
- Cloudflare Pages (Static hosting)

---

## 📦 Deployment Details

- ✅ **Live link**: [https://pod-customizer-b2k.pages.dev/](#)  
- ✅ **GitLab Export**: `pod-customizer-export.gz`  
- ✅ **Repository Name**: `pod-customizer`  
- ✅ **Build command**: `npm run build`  
- ✅ **Output folder**: `dist`

---



Thank you for the opportunity. Looking forward to your feedback!
