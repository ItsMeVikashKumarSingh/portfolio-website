# Vikash Kumar Singh — Engineering Portfolio

A high-performance, single-source-of-truth developer portfolio for **Vikash Kumar Singh**, Software Engineer at Tata Consultancy Services (TCS), specializing in Java backend architecture, post-quantum cryptography, and autonomous AI agents.

Designed with an **Obsidian & Deep Slate Atelier** design aesthetic — replacing harsh neon glows with architectural minimalism, refined typography, and purposeful micro-interactions.

---

## 🏛️ Architecture & Highlights

- **Single Source of Truth (`config.js`)**: All personal metadata, skills, featured projects, telemetry metrics, research papers, certifications, and Web3Forms keys are managed in a single structured configuration file. The DOM dynamically hydrates from `config.js`.
- **Refined Non-Neon Design**: Built on obsidian deep darks (`#090d16`), subtle slate glass cards (`#0f172a`), warm amber/gold accents (`#f59e0b`), and clean typography using *Space Grotesk*, *Inter*, and *JetBrains Mono*.
- **Curated Open Source Showcase**: Showcases production and research repositories (`Zorvik-AI`, `Student-Management`, `Secure-Authentication-System`, `RideEase`, `E-Shop`, `AppBlocker`, `pqc-migration-framework`, `hacktoberfest`).
- **Research Publications**: Direct links and summaries for peer-reviewed papers published in the *CRD Journal (2025)* covering XChaCha20, Argon2, and Neural Program Repair.
- **Live Engineering Velocity**: Integrates daily telemetry grid, language distribution charts, and GitHub streak tracking.
- **Functional Contact Form**: Direct dispatch powered by Web3Forms with asynchronous submission and real-time status feedback.

---

## 📁 Repository Structure

```
vikash-portfolio-website/
├── index.html          # Clean semantic HTML5 skeleton
├── styles.css          # Obsidian & Deep Slate Atelier CSS design system
├── script.js           # Dynamic DOM hydration & interaction controller
├── config.js           # Single configuration source of truth
├── assets/             # Images, resume PDF, and dynamic SVGs
│   ├── profile.jpg
│   ├── favicon_vks.ico
│   ├── vikash-kumar-singh-resume.pdf
│   ├── analytics-grid.svg
│   ├── holographic-foil.svg
│   └── top-langs.svg
└── README.md           # Documentation
```

---

## ⚙️ Customization

To update any content on the site, simply edit [config.js](file:///C:/Users/vikas/OneDrive/Desktop/projects/vikash-portfolio-website/config.js):

```javascript
const portfolioConfig = {
    personal: {
        name: "Vikash Kumar Singh",
        role: "Java Backend Developer · AI Agents & Systems",
        designation: "Software Engineer",
        company: "Tata Consultancy Services (TCS)",
        // ...
    },
    // projects, skills, publications, etc.
};
```

---

## 📜 License & Credits

Designed & Engineered by [Vikash Kumar Singh](https://github.com/ItsMeVikashKumarSingh).
Open-source under the MIT License.
