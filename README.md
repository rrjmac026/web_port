# Portfolio File Inventory and Project Overview

This document lists the main files, folders, assets, links, and content sources used in this portfolio website.

## Project Overview

This portfolio belongs to Rey Rameses Jude III S. Macalutas and presents:
- personal profile and contact details
- project case studies
- skills and technology stack
- timeline and experience
- resume download
- GitHub and LinkedIn links

It is a static website built with:
- HTML
- CSS
- JavaScript
- data-driven content from `data.js`

---

## Root Folder Files

### Main website files

- `index.html`  
  Main page structure of the portfolio. Contains all sections such as hero, about, skills, projects, experience, education, GitHub, and contact.

- `styles.css`  
  Main stylesheet for all visual design, layout, responsiveness, colors, sections, cards, buttons, modal layouts, and animations.

- `script.js`  
  JavaScript logic that renders the portfolio dynamically, including:
  - nav behavior
  - theme toggle
  - skill rendering
  - project rendering
  - project modal
  - timeline
  - GitHub repo cards
  - form validation

- `data.js`  
  Main content source file for the portfolio. It contains:
  - personal info
  - skill list
  - project data
  - experience timeline
  - repository metadata

- `README.md`  
  Project documentation and file inventory.

---

## Related Folders

### `assets/`
Contains design/image assets used in the website.

Files:
- `assets/background.png`  
  Background graphic used in the hero section.

- `assets/code logo.png`  
  Code-themed decorative asset used in the design.

- `assets/code panel.png`  
  Additional code-themed visual asset.

- `assets/developer.png`  
  Portrait or developer illustration asset.

### `images/`
Stores project screenshots and galleries for the portfolio case studies.

Subfolders:
- `images/comelec/`  
  Screenshots for the BukSU Comelec voting system projects.

- `images/dlis/`  
  Screenshots for the DLIS project.

- `images/gas/`  
  Screenshots for the Gamified Accounting System.

- `images/peo/`  
  Screenshots for the Provincial Engineer's Office system.

- `images/scms/`  
  Screenshots for the Student Counseling Management System.

- `images/tcms/`  
  Screenshots for the Training Center Management System.

### `resume/`
Stores downloadable resume and CV documents.

Files:
- `resume/Resume.pdf`  
  Downloadable resume for the portfolio.

---

## Page Structure / Sections in `index.html`

The portfolio page is organized into these sections:

1. `#hero`  
   Intro section with name, title, description, location, and action buttons.

2. `#about`  
   Personal profile, summary, skills preview, featured projects summary.

3. `#skills`  
   Technology stack and skill categories.

4. `#projects`  
   Main project showcase and filters.

5. `#engineering`  
   Development workflow and architecture overview.

6. `#experience`  
   Timeline of work and project experience.

7. `#why`  
   Reasons to hire / value proposition.

8. `#education`  
   Education and resume information.

9. `#github`  
   GitHub / repository summary section.

10. `#contact`  
    Contact details and inquiry section.

---

## Personal / Portfolio Links

These are the public links and contact details listed in the portfolio:

- Email: `macalutasreyramesesjudeiii@gmail.com`
- Phone: `+63 9977968305, 09940090476`
- GitHub: https://github.com/rrjmac026
- LinkedIn: https://linkedin.com/in/rey-rameses-jude-iii-macalutas-751a16405
- Resume download: `resume/Resume.pdf`

---

## Main Portfolio Content Source

The file `data.js` stores the actual data used by the site. This includes:

### Personal info
- name
- title
- location
- email
- phone
- GitHub
- LinkedIn

### Skills
Examples from the site:
- React
- JavaScript
- TypeScript
- HTML
- CSS
- Laravel
- PHP
- Node.js
- Express
- REST APIs
- .NET / C#
- MySQL
- PostgreSQL
- MongoDB
- Flutter
- Android Studio
- Git
- GitHub
- Docker
- Multi-Tenancy
- MVC / MVVM

### Featured projects
The portfolio highlights these projects:

- DLIS  
  Damulog Legislative Information System  
  Technologies: C#, WPF, .NET 10, React, TypeScript, Laravel, Docker, PostgreSQL

- PEO Management System  
  Provincial Engineer's Office internship project  
  Technologies: Laravel, Docker, JavaScript, MySQL, PHP

- TCMS  
  Training Center Management System  
  Technologies: Laravel, Multi-Tenancy, MySQL

- SCMS  
  Student Counseling Management System  
  Technologies: Laravel, PHP, MySQL

- GAS  
  Gamified Accounting System  
  Technologies: Laravel, MySQL, JavaScript

- BukSU Comelec Voting System v1  
  Technologies: Laravel, Docker, PHP, MySQL

- BukSU Comelec Voting System v2  
  Technologies: Laravel, Docker, PHP, MySQL

- BukSU Comelec Mobile App  
  Technologies: Android Studio, Node.js, Firebase

- Dineflow  
  Restaurant Management System  
  Technologies: Laravel, Multi-Tenancy, MySQL

- SPTA Scanner  
  School Parent-Teacher Association Scanner App  
  Technologies: Flutter, Dart, Android

> Note: Some project entries in `data.js` still contain placeholder descriptions or GitHub URLs and should be updated later for full completion.

---

## Experience Summary

From `data.js` the portfolio highlights:

- 2026 — Freelance Full-Stack Developer (Commissioned Project)  
  Damulog LGU, Philippines  
  Built DLIS, a Windows desktop + web legislative management system.

- 2026 — System Developer Intern  
  Provincial Engineer's Office, Malaybalay City, Bukidnon  
  Built PEO Management System during internship.

---

## Repository / GitHub Card Data

The `repos` section in `data.js` includes sample repository metadata such as:

- `LLOIS`
- `dlis-web`
- `buksu_comelec2k26`
- `TCMS`
- `PEO`

These are displayed in the GitHub section of the portfolio.

---

## How the Site Works

The website is structured as a static front-end with data-driven rendering:

- `index.html` defines the layout
- `data.js` stores content
- `script.js` reads the data and renders sections dynamically
- `styles.css` handles styling and design

This makes it easy to update profile information, projects, skills, and experience without rewriting the page structure.

---

## Quick File Map

```text
Portfolio/
├── index.html
├── styles.css
├── script.js
├── data.js
├── README.md
├── assets/
│   ├── background.png
│   ├── code logo.png
│   ├── code panel.png
│   └── developer.png
├── images/
│   ├── comelec/
│   ├── dlis/
│   ├── gas/
│   ├── peo/
│   ├── scms/
│   └── tcms/
├── resume/
│   └── Resume.pdf
└── .git/
```

---

## Notes

- This portfolio is designed to be editable through `data.js`.
- To update project details, add new screenshots, change contact info, or modify tech stack, edit the data in `data.js`.
- The repository contains placeholder text in some project entries; these should be replaced with final project details if needed.

---

## Summary

This portfolio is a personal system developer portfolio that showcases:
- professional identity
- project work
- technical skills
- resume and contact information
- digital presence via GitHub and LinkedIn

It is a clean, static, data-driven portfolio site intended for showcasing completed work and professional growth.
