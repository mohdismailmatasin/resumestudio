# Resume Studio

**Resume Studio** is a privacy-first, client-side interactive resume builder designed to craft ATS-compliant (Applicant Tracking System), print-ready resumes with real-time preview, job description keyword matching, and flexible formatting options.

---

## Key Features

### 1. Live Interactive Resume Builder
- **Tabbed Interface**: Clean tab navigation between **Content**, **Design**, and **ATS Scanner**.
- **Comprehensive Sections**:
  - Contact Details (Full Name, Professional Title, Email, Phone, Location, Portfolio / LinkedIn / GitHub URLs)
  - Professional Summary with formatting aids
  - Work Experience (Roles, Employers, Dates, Bullet points with action verbs)
  - Education (Degrees, Institutions, Graduation Years, Honors)
  - Skills (Categorized technical, soft, and domain skills)
  - Projects & Highlights
  - Certifications & Licenses
  - Custom Sections (Languages, Publications, Volunteer Work, Awards)
- **Drag-and-Drop Ordering**: Reorder resume sections dynamically to highlight your strongest credentials.

### 2. Built-in ATS Keyword Matcher & Audit Engine
- **Job Description Analysis**: Paste any target job description to instantly compare keywords against your resume.
- **ATS Score Breakdown**: Overall compatibility score calculated across:
  - Keyword density and matching frequency
  - Essential contact detail presence
  - Section header clarity and hierarchy
  - Quantifiable metrics and action verb usage
- **Interactive Keyword Highlighting**: Click detected keywords in the ATS panel to highlight their occurrences live in the resume preview.
- **Missing Keyword Suggestions**: Identify high-frequency keywords present in the job posting that are missing from your resume.

### 3. Professional ATS-Safe Templates & Typography
- **Multiple Layout Styles**:
  - **Classic**: Traditional single-column layout preferred by conservative industries (Finance, Law, Healthcare).
  - **Modern**: Clean, balanced aesthetic with subtle accent dividers.
  - **Minimal**: Streamlined whitespace-focused layout.
  - **Technical**: Optimized for software engineering and technical roles.
  - **Executive**: Structured for senior leaders and management.
- **Typography Engine**: Font pairings for headings and body copy (Inter, Merriweather, Georgia, Garamond, Playfair Display, Roboto Mono) with adjustable baseline sizes and line heights.
- **Page Standards**: Instant toggle between **A4** (210 × 297 mm) and **US Letter** (8.5 × 11 in).
- **Standardized Margins**: Engineered with standard 1.27 cm (0.5 in) margins to maximize content area while remaining strictly printable.

### 4. Headshot / Profile Photo Adjuster
- **Multi-Format Framing**: Toggle headshot visibility with **Circle** or **Rounded Square** frames.
- **Precision Positioning**:
  - Direct drag-to-reposition in the adjuster widget or directly on the resume header preview.
  - Dedicated **Horizontal (Left ⟷ Right)** and **Vertical (Up ⟷ Down)** fine-tuning sliders.
  - One-click directional nudge buttons (**Left**, **Right**, **Up**, **Down**, **Center**, **Reset**).
  - Smooth wheel/pinch zoom control (100% – 400%).

### 5. Multi-Profile Management & Local Persistence
- **Multiple Resumes**: Create and switch between tailored resumes for different job roles (e.g., *Frontend Developer*, *Engineering Manager*, *Product Specialist*).
- **Duplicate & Archive**: Clone existing profiles with one click to quickly tailor applications.
- **Automatic Auto-Save**: Seamless offline persistence via browser `localStorage`.
- **Import / Export**: Backup or restore profiles as JSON files to transfer between browsers and devices.

### 6. Export Options
- **Print / PDF Export**: CSS `@page` printing optimized with standard 1.27 cm margins, automatic page break safeguards, and background graphics preservation.
- **Plain Text (TXT)**: Export unformatted text formatted for direct copy-pasting into online job portals and applicant tracking forms.
- **Markdown (.md)**: Clean markdown export for developer portfolios or version-controlled resumes.
- **JSON**: Complete structured data backup for archival and transfer.

### 7. Modern Dark & Light Mode
- **Dark Theme by Default**: Easy on the eyes with a warm, high-contrast dark aesthetic.
- **Instant Theme Toggle**: Switch anytime between dark and light UI themes using the top-bar button (`🌙` / `☀️`).
- **Agnostic Print**: The resume preview sheet remains authentic to print standards regardless of active UI mode.

---

## Tech Stack & Architecture

- **Frontend**: Vanilla TypeScript / ES6+ JavaScript, CSS3 Design Tokens & CSS Variables, HTML5 Semantic Elements.
- **Styling**: Pure CSS with responsive layout tokens and zero external CSS runtime dependencies.
- **Backend**: Lightweight Node.js / Express static file server (`server.js`).
- **Storage**: Client-side `localStorage` with JSON schema migration support.
- **Privacy**: **100% Client-Side execution**. No resume content, personal identifiers, or job descriptions are transmitted to external servers.

---

## Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or bun

### Installation

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd resume-studio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   Or:
   ```bash
   node server.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Production Build
To create the production distribution:
```bash
npm run build
```
This copies the application assets into the `dist/` directory, ready to be served by any static hosting provider or container service.

---

## Best Practices for ATS Compliance

1. **Prioritize Single-Column Layouts**: When applying through automated portals (Workday, Greenhouse, Lever, Taleo), select the **Classic** or **Minimal** templates.
2. **Standard Section Titles**: Use recognized headings such as *Experience*, *Education*, *Skills*, and *Summary*.
3. **Incorporate Job Description Keywords**: Use the built-in ATS tab to match terminology from the target job posting directly.
4. **Quantify Achievements**: Use strong action verbs combined with measurable results (e.g., *"Increased throughput by 42%"* instead of *"Responsible for speed improvements"*).
5. **Photo Policy**: Many US/UK recruiters recommend disabling photos for automated submissions to prevent ATS parsing issues; use the **Show Photo** toggle to customize based on regional market standards.

---

## Contributing

Contributions, issue reports, and feature requests are welcome. Before opening a pull request, please make sure the app still runs locally and that any changes to the resume preview, PDF export, or ATS checking are tested by hand with a few sample resumes.

For security or privacy issues, please open a private report through GitHub rather than opening a public issue with sensitive details.

## License

This project is open source and available under the [MIT License](LICENSE).
