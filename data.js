/* =================== DATA LAYER =================== */
/* Edit this file to update your info, skills, projects, experience, and repos.
   Nothing here touches rendering logic — that lives in script.js. */

const personalInfo = {
  name: "Rey Rameses Jude III S. Macalutas",
  title: "Full-Stack Developer",
  location: "Purok-2, Sinanguyan, Don Carlos, Bukidnon",
  email: "macalutasreyramesesjudeiii@gmail.com",
  github: "https://github.com/rrjmac026",
  githubUsername: "rrjmac026",
  linkedin: "https://linkedin.com/in/reyramesesjudeiiimacalutas"
};

const skills = [
  {cat:"frontend", name:"React", level:"Advanced", desc:"Component architecture, hooks, and real-time UI state."},
  {cat:"frontend", name:"JavaScript", level:"Advanced", desc:"ES6+, async patterns, browser APIs."},
  {cat:"frontend", name:"HTML", level:"Advanced", desc:"Semantic, accessible markup."},
  {cat:"frontend", name:"CSS", level:"Advanced", desc:"Layout systems, animation, responsive design."},
  {cat:"frontend", name:"Tailwind CSS", level:"Intermediate", desc:"Utility-first styling for fast iteration."},
  {cat:"backend", name:"Node.js", level:"Advanced", desc:"Express APIs, sockets, background jobs."},
  {cat:"backend", name:"Express", level:"Advanced", desc:"REST routing, middleware, JWT auth."},
  {cat:"backend", name:"Laravel", level:"Intermediate", desc:"Eloquent, Inertia, queued jobs, broadcasting."},
  {cat:"backend", name:"REST APIs", level:"Advanced", desc:"Designing and consuming resource-oriented APIs."},
  {cat:"backend", name:".NET / C#", level:"Intermediate", desc:"WPF desktop apps, primary constructors, service layers."},
  {cat:"database", name:"PostgreSQL", level:"Advanced", desc:"Schema design, migrations, query tuning."},
  {cat:"database", name:"Supabase", level:"Advanced", desc:"Auth, row-level security, realtime channels."},
  {cat:"database", name:"MySQL", level:"Intermediate", desc:"Relational schema design for Laravel apps."},
  {cat:"database", name:"EF Core / Npgsql", level:"Intermediate", desc:"ORM layer for .NET desktop apps against Postgres."},
  {cat:"tools", name:"Git", level:"Frequently Used", desc:"Branching, rebasing, resolving real conflicts."},
  {cat:"tools", name:"GitHub", level:"Frequently Used", desc:"Issue tracking, PR review, CI."},
  {cat:"tools", name:"VS Code", level:"Frequently Used", desc:"Primary editor and debugger."},
  {cat:"tools", name:"Postman", level:"Familiar", desc:"API testing and request collections."},
  {cat:"other", name:"WebSockets", level:"Advanced", desc:"Socket.IO channels for real-time multiplayer state."},
  {cat:"other", name:"Authentication", level:"Advanced", desc:"JWT in httpOnly cookies, custom auth flows."},
  {cat:"other", name:"Real-time Systems", level:"Advanced", desc:"In-memory schedulers, live state sync across clients."},
  {cat:"other", name:"AI APIs", level:"Familiar", desc:"Integrating LLM/AI endpoints into applications."}
];

const projects = [
  {
    id:"tcms",
    title:"TCMS",
    subtitle:"Multi-Tenant Training Course Management System",
    description:"A SaaS platform for TESDA-style training providers to manage courses, enrollments, assessments, and certifications across multiple organizations, each with an isolated tenant environment.",
    problem:"Training organizations needed a system to manage courses, trainers, trainees, schedules, attendance, and certification — with each organization operating in its own isolated environment under one platform, and role-based access spanning SuperAdmin, Admin, Trainer, and Trainee.",
    solution:"Built on Laravel 12 with the stancl/tenancy package for subdomain-based multi-tenancy, Sanctum + Socialite for authentication (including Google OAuth), and DomPDF/FPDF for automated certificate generation, with PhpSpreadsheet powering data export.",
    result:"A working multi-tenant platform where SuperAdmins manage tenants and subscriptions centrally, while each tenant's Admins, Trainers, and Trainees operate independently — covering enrollment, scheduling, attendance tracking, assessments, and automated PDF certificate generation.",
    technologies:["Laravel 12","PHP 8.2","MySQL","PostgreSQL","Tailwind CSS","Vite","Sanctum","Socialite"],
    categories:["fullstack","backend","database"],
    github:"https://github.com/rrjmac026/TCMS",
    demo:"",
    featured:true,
    status:"Actively Developed",
    images: ["images/tcms/tcms-1.png", "images/tcms/tcms-2.png", "images/tcms/tcms-3.png", "images/tcms/tcms-4.png", "images/tcms/tcms-5.png"],
    features:[
      "Subdomain-based multi-tenancy via stancl/tenancy, with centralized SuperAdmin management",
      "Role-based access control across SuperAdmin, Admin, Trainer, and Trainee roles",
      "Google OAuth login through a dedicated SocialAuth controller",
      "Automated PDF certificate generation with DomPDF/FPDF",
      "Excel export via PhpSpreadsheet for reporting and analytics",
      "Attendance tracking, assessments, and subscription/plan management per tenant"
    ],
    challenges:[
      "Keeping tenant data and configuration fully isolated while sharing one centralized codebase",
      "Structuring role-based permissions cleanly across four distinct user roles",
      "Coordinating subscription/plan state with tenant-level access and central superadmin oversight"
    ],
    solutionsList:[
      "Adopted stancl/tenancy for domain-based tenant isolation and central domain configuration",
      "Layered role-based middleware and policies per role (SuperAdmin/Admin/Trainer/Trainee)",
      "Centralized subscription and analytics logic at the SuperAdmin level, scoped per-tenant elsewhere"
    ],
    arch:["React/Blade + Tailwind (client)","Laravel 12 (multi-tenant)","stancl/tenancy routing","MySQL / PostgreSQL"]
  },
  {
    id:"llois",
    title:"LLOIS",
    subtitle:"Local Legislative Ordinance Information System",
    description:"A .NET 10 WPF desktop application for managing legislative ordinances, user accounts, and audit trails against a Postgres backend.",
    problem:"Local government staff needed a desktop system to record, edit, and audit legislative ordinances with proper user management and timezone-correct timestamps.",
    solution:"Built a WPF desktop app on .NET 10 with EF Core + Npgsql against Supabase/PostgreSQL, including a full audit logging pipeline and themeable UI.",
    result:"A working desktop system with user management, ordinance CRUD (including PDF attachments), audit logging, and dark/light themes — now moving attachment storage off local disk toward centralized access.",
    technologies:[".NET 10","WPF","C#","EF Core","PostgreSQL","Supabase"],
    categories:["fullstack","database","backend"],
    github:"[YOUR_GITHUB_URL]/llois",
    demo:"",
    featured:true,
    status:"In Progress",
    features:[
      "User management with Edit User flow (EditUserDialog + IAuthService.UpdateUser)",
      "AuthService built on a C# 12 primary constructor over IUserRepository and IDbContextFactory",
      "AddEditOrdinanceWindow handles both Add and Edit modes in a single class",
      "Full dark/light theme pass across Dark.xaml and Light.xaml"
    ],
    challenges:[
      "DateTime.UtcNow throwing Npgsql timezone exceptions",
      "A cross-thread WPF exception from touching UI values inside Task.Run",
      "Ordinance PDF attachments only resolving on the machine that uploaded them"
    ],
    solutionsList:[
      "Normalized timestamp handling and added a computed TimestampPH property for Philippine-time display",
      "Marshalled UI access back onto the UI thread instead of inside background tasks",
      "Designing centralized document storage so attachments resolve from any machine"
    ],
    arch:["WPF (XAML views)","C# service layer","EF Core + Npgsql","Supabase (PostgreSQL)"]
  },
  {
    id:"peo",
    title:"PEO Management System",
    subtitle:"Contractor Work Request & Concrete Pouring Approval Platform",
    description:"A workflow management platform for the Provincial Engineer's Office (PEO) of the Province of Bukidnon, built with Laravel 12. Digitizes the end-to-end lifecycle of contractor work requests and concrete pouring approvals — replacing paper-based triplicate forms with a structured, role-gated review pipeline backed by automated email notifications and PDF/Excel report generation.",
    problem:"The PEO tracked contractor work requests and concrete pouring approvals through paper-based triplicate forms, with no structured way to enforce reviewer order across up to seven roles, notify the right people at each step, or audit who approved what and when.",
    solution:"Built a Laravel 12 platform with role-gated, turn-based review pipelines for both work requests and concrete pouring, digital signature capture via drawing pad or upload, automated email + in-app notifications at every transition, and PDF generation that reproduces the province's official document layouts.",
    result:"A working system spanning three linked modules — work requests, concrete pouring, and internal memos — each with role-based dashboards, full activity audit logs (including acting user and IP address), per-recipient read tracking on memos, and exportable PDF/Excel reports across four report views.",
    technologies:["Laravel 12","PHP","PDF Generation","Excel Export"],
    categories:["fullstack","backend","database"],
    github:"https://github.com/rrjmac026/PEO",
    demo:"",
    featured:true,
    status:"Actively Developed",
    images: ["images/peo/peo-1.png", "images/peo/peo-2.png", "images/peo/peo-3.png", "images/peo/peo-4.png", "images/peo/peo-5.png"],
    features:[
      "Multi-step review pipelines with role-based turn enforcement across up to seven reviewer roles",
      "Digital signature capture via on-screen drawing pad or uploaded image, embedded into generated PDFs",
      "Automated email and in-app notifications at every pipeline transition",
      "Full activity audit logs capturing every state change, who made it, when, and from what IP address",
      "Internal memo system with scoped recipients, scheduled sending, attachments, and per-recipient read tracking",
      "Four-view reports module (Overview, Work Requests, Concrete Pourings, Memos) exportable as PDF or Excel"
    ],
    challenges:[
      "Enforcing that each reviewer in a multi-role pipeline can only act on their turn, while auto-skipping roles nobody assigned",
      "Reproducing the province's official paper form layouts as generated PDFs with embedded signatures",
      "Keeping three independent workflows — work requests, concrete pouring, and memos — consistently audited and notified without duplicating logic"
    ],
    solutionsList:[
      "Built a shared role-gated, turn-based pipeline engine for both work requests and concrete pouring, auto-advancing past unassigned roles",
      "Generated PDFs that mirror the official government layouts, embedding signatures captured via drawing pad or upload",
      "Centralized activity logging and notification dispatch so every pipeline transition triggers a consistent audit entry and email/in-app notification"
    ],
    arch:["Laravel 12 (role-gated pipelines)","Digital signature capture","PDF/Excel generation layer","Email + in-app notification dispatch"]
  },
  {
    id:"spta-payment",
    title:"SPTA Payment System",
    subtitle:"School payment verification & record-keeping (Flutter)",
    description:"A Flutter mobile app for verifying and recording school payments — scans payment QR/barcodes, stores transactions locally, and syncs to Firebase/Firestore with exports and audit logs for administrators.",
    problem:"School staff needed a fast, reliable way to verify student payments at the point of collection, keep accurate local records even offline, and give administrators exportable, auditable payment data.",
    solution:"Built a Flutter (Material 3) app with mobile_scanner for QR/barcode scanning, sqflite for local-first storage, and cloud_firestore/firebase_auth for cloud sync and authentication — with pdf/excel export and audit logging for admins.",
    result:"A working cross-platform app (mobile, web, desktop targets) where scanning a code creates a transaction saved locally via a repository layer, then syncs to Firestore in the background — with Excel/PDF exports shareable via share_plus/open_filex and a full audit trail.",
    technologies:["Flutter","Dart","Firebase","Firestore","sqflite"],
    categories:["fullstack","frontend","database"],
    github:"[YOUR_GITHUB_URL]/REPOSITORY",
    demo:"",
    featured:false,
    status:"In Progress",
    features:[
      "QR/barcode payment scanning via mobile_scanner, feeding straight into transaction records",
      "Local-first storage with sqflite, so scanning and recording work without connectivity",
      "Background sync to Firebase/Firestore via FirestoreSyncService, initialized at app boot",
      "Excel and PDF export of payment/student records, shared via share_plus/open_filex",
      "Audit log screens tracking payment and record changes for administrators",
      "AuthGate-driven login flow with Firebase Auth (email/Google Sign-In)"
    ],
    challenges:[
      "Keeping local records and Firestore in sync reliably when connectivity drops mid-session",
      "Structuring repositories (student/payment/audit) so local-first writes stay consistent with cloud sync",
      "Supporting multiple build targets (mobile, web, desktop) from one Flutter codebase"
    ],
    solutionsList:[
      "Used connectivity_plus to detect network state and drive when sync_repository/firestore_sync_service push local changes",
      "Split data access into dedicated repository/helper classes (StudentRepository, PaymentRepository, DatabaseHelper) as the single source of truth for local writes",
      "Isolated platform-specific code per target (android/ios/macos/linux/windows/web) while keeping business logic in lib/ shared across all"
    ],
    arch:["Flutter UI (screens/)","Local repositories (sqflite)","FirestoreSyncService","Firebase Auth + Firestore"]
  },
  {
    "id": "comelec2k26",
    "title": "[COMELEC 2K26 - Online Voting System]",
    "subtitle": "Laravel 12 based election management for educational institutions",
    "description": "A full-featured Laravel application that provides secure, role-based online voting with real-time vote counting, reporting, backups, and an admin dashboard. The repo includes source code (Blade views + Laravel controllers), a SQL dump (comelec2k26.sql) with sample data, and deployment instructions.",
    "problem": "Manual or ad-hoc election workflows in schools are slow, hard to audit, and error-prone. Administrators need an auditable, role-controlled, and easily deployable voting system.",
    "solution": "A Laravel 12 application that implements secure authentication and role-based access, multi-position voting, real-time vote counters (served to the public page), PDF reporting, activity logging, scheduled backups, and an admin UI for managing elections, candidates, partylists, and organizations.",
    "result": "Working codebase with database dump and seeders, clear README and deployment notes, ability to run locally (php artisan serve + npm run dev) or via Docker. The project is deployable with provided docs and contains automated backup tooling (spatie/laravel-backup) and PDF generation (FPDF).",
    "technologies": [
        "PHP (Laravel 12)",
        "Blade (server-side templates)",
        "Tailwind CSS",
        "Alpine.js",
        "Vite",
        "MySQL / MariaDB",
        "Docker (Dockerfile + docker-compose.yml)",
        "FPDF",
        "spatie/laravel-backup"
    ],
    "categories": [
        "web",
        "fullstack",
        "laravel",
        "education",
        "backend"
    ],
    "github": "https://github.com/rrjmac026/buksu_comelec2k26",
    "demo": "",
    "featured": false,
    "status": "Completed (deployable prototype)",
    "images": [
        "images/comelec/comelec-1.png",
        "images/comelec/comelec-2.png"
    ],
    "features": [
        "Secure, role-based authentication (admin, voter, candidate, manager)",
        "Multi-position voting with unique vote constraint (prevents duplicate votes per position)",
        "Real-time vote counts exposed to public page (PublicController::stats)",
        "PDF reporting (FPDF)",
        "Activity logging / audit trail",
        "Organization, candidate, partylist management with photo uploads",
        "Automated database backups (spatie/laravel-backup)",
        "Admin analytics dashboard and feedback collection",
        "Database seeders + SQL dump (comelec2k26.sql) for quick setup",
        "Docker support and deployment docs (DEPLOYMENT.md, Dockerfile, docker-compose.yml)"
    ],
    "challenges": [
        "Ensuring real-time vote count scaling and concurrency while preventing double-votes",
        "Protecting personally identifiable information and vote privacy in seeded/sample data",
        "Deploying securely (APP_KEY, mail, DB credentials) and hardening production environment"
    ],
    "solutionsList": [
        "Unique database constraint and application checks to prevent duplicate votes (README and casted_votes table definition)",
        "Activity logs and IP logging for auditing suspicious activity",
        "Use of spatie/laravel-backup for scheduled backups and database dumps included (comelec2k26.sql)",
        "Clear environment and deployment instructions (README, .env.example, DEPLOYMENT.md) to reduce misconfiguration risk"
    ],
    "arch": [
        "Frontend — Blade templates + Tailwind CSS + Alpine.js (resources/views, resources/css, resources/js)",
        "Application/API — Laravel controllers, middleware, services (app/Http, app/Services, routes/web.php, routes/api.php)",
        "Database — MySQL/MariaDB with migrations/seeders and comelec2k26.sql dump (database/)",
        "Background/ops — scheduled jobs and backup tooling (spatie/laravel-backup) and queue jobs"
    ]
    },
  {
    id:"auth-system",
    title:"[Authentication & API System]",
    subtitle:"[One-line description placeholder]",
    description:"[Placeholder description — replace with a real auth/API system project.]",
    problem:"[What problem did this solve?]",
    solution:"[What did you build to solve it?]",
    result:"[What was the outcome?]",
    technologies:["Express","JWT","PostgreSQL"],
    categories:["backend","database"],
    github:"[YOUR_GITHUB_URL]/REPOSITORY",
    demo:"",
    featured:false,
    status:"Planned",
    features:["[Feature placeholder]","[Feature placeholder]"],
    challenges:["[Challenge placeholder]"],
    solutionsList:["[Solution placeholder]"],
    arch:["Frontend","API layer","Database"]
  }
];

const experience = [
  {year:"2026", role:"Full-Stack Developer", org:"[Personal / Independent Projects]", desc:"Building and maintaining TCMS and LLOIS end to end — architecture, migrations, and bug resolution across web and desktop.", tech:["Laravel","PHP","MySQL",".NET","Supabase"]},
  {year:"2025", role:"[Role Placeholder]", org:"[Company / Organization]", desc:"[Placeholder — replace with real experience, or remove this entry if not applicable.]", tech:["[Tech]"]}
];

const repos = [
  {name:"TCMS", desc:"Multi-tenant training course management system built with Laravel.", lang:"PHP", color:"#4F5D95", stars:"—", forks:"—", updated:"Aug 2026"},
  {name:"llois", desc:"WPF desktop app for legislative ordinance management.", lang:"C#", color:"#178600", stars:"—", forks:"—", updated:"Jul 2026"},
  {name:"PEO Management System", desc:"[Description placeholder]", lang:"TypeScript", color:"#3178c6", stars:"—", forks:"—", updated:"—"},
  {name:"SPTA Payment System", desc:"[Description placeholder]", lang:"Python", color:"#3572A5", stars:"—", forks:"—", updated:"—"}
];