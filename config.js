/**
 * Portfolio Configuration File
 * Single source of truth for all portfolio content and metadata.
 * Edit this file to update content, projects, links, skills, and styling presets.
 */
const portfolioConfig = {
    personal: {
        name: "Vikash Kumar Singh",
        role: "Java Backend Developer · AI Agents & Systems",
        designation: "Software Engineer",
        company: "Tata Consultancy Services (TCS)",
        tagline: "Engineering secure, high-concurrency backends with cryptographic integrity & autonomous AI agents.",
        status: "Open Source Contributor & Systems Engineer",
        location: "India",
        avatar: "assets/profile.jpg",
        resumeUrl: "https://drive.google.com/file/d/1r88yEZ-fWfsC8AeTfp90aJd_J1-SnTw8/view?usp=sharing",
        philosophy: {
            headline: "Engineering secure, scalable backend architectures from cryptographic primitives to intuitive, reliable user experiences.",
            description: "Software Engineer at Tata Consultancy Services (TCS) with 67+ public repositories spanning distributed backend architecture, post-quantum cryptographic systems, AI agents, and Android applications. Dedicated to resilient distributed services, zero-knowledge privacy protocols, and low-level engineering."
        },
        askMeAbout: [
            "Java & Spring Boot",
            "Post-Quantum Cryptography & Argon2",
            "Autonomous AI Agents & MCP",
            "Distributed Systems & Redis",
            "Android & Mobile Security",
            "Reverse Engineering & System Internals"
        ],
        funFact: "I love reverse engineering applications and understanding system internals down to binary execution paths!"
    },

    stats: [
        { label: "Public Repositories", value: "67+", icon: "fas fa-code-branch", note: "Active open-source" },
        { label: "Total Contributions", value: "2,471+", icon: "fas fa-chart-line", note: "All-time GitHub commits" },
        { label: "Research Papers", value: "2", icon: "fas fa-book-journal-whills", note: "CRD Journal (2025)" },
        { label: "Certifications", value: "RHCSA & GCP", icon: "fas fa-shield-halved", note: "Verified credentials" }
    ],

    contact: {
        email: "vikashkumarsingh8352@gmail.com",
        linkedin: "https://linkedin.com/in/itsmevikashkumarsingh",
        github: "https://github.com/ItsMeVikashKumarSingh",
        telegram: "https://t.me/encrypted_ghost",
        instagram: "https://www.instagram.com/encrypted.ghost",
        location: "India"
    },

    contactForm: {
        actionUrl: "https://api.web3forms.com/submit",
        accessKey: "6d915a88-9221-4553-abe5-27a572fc7233",
        inquiryTypes: [
            { value: "job-opportunity", label: "💼 Job Opportunity / Full-time Role" },
            { value: "freelance-project", label: "💻 Freelance / Contract Architecture" },
            { value: "collaboration", label: "🤝 Technical Collaboration / Open Source" },
            { value: "general-inquiry", label: "💬 General Inquiry / Architecture Discussion" },
            { value: "other", label: "📋 Other Inquiry" }
        ]
    },

    currentlyBuilding: {
        name: "RideEase",
        status: "Active Development · 2026",
        tagline: "High-Concurrency Ride-Hailing Distributed Architecture",
        description: "Architecting a distributed ride-sharing engine with geohash spatial indexing, real-time WebSocket vehicle telemetry, and transactional state matching.",
        github: "https://github.com/ItsMeVikashKumarSingh/RideEase",
        demo: null,
        metrics: [
            { area: "Backend Microservices & Architecture", percent: 85 },
            { area: "Real-Time WebSocket Dispatch & Redis Cache", percent: 75 },
            { area: "Android Client & Driver Telemetry", percent: 70 }
        ]
    },

    lookingFor: [
        "Java Backend Developer",
        "Systems & Microservices Engineer",
        "Autonomous AI Agents & MCP Developer",
        "Security & Cryptography Architect"
    ],

    skills: [
        {
            category: "Core & Languages",
            icon: "fas fa-code",
            items: [
                { name: "Java", level: "Expert" },
                { name: "Python", level: "Advanced" },
                { name: "TypeScript", level: "Advanced" },
                { name: "C / C++", level: "Intermediate" },
                { name: "Rust", level: "Intermediate" },
                { name: "JavaScript", level: "Advanced" },
                { name: "SQL & Bash", level: "Proficient" }
            ]
        },
        {
            category: "Backend & Distributed Systems",
            icon: "fas fa-server",
            items: [
                { name: "Spring Boot", level: "Expert" },
                { name: "Spring Cloud", level: "Advanced" },
                { name: "Microservices", level: "Advanced" },
                { name: "RESTful APIs", level: "Expert" },
                { name: "Hibernate / JPA", level: "Advanced" },
                { name: "SSE & WebSockets", level: "Proficient" },
                { name: "Kafka & Redis", level: "Proficient" }
            ]
        },
        {
            category: "Security & Cryptography",
            icon: "fas fa-user-shield",
            items: [
                { name: "Post-Quantum Cryptography", level: "Research" },
                { name: "Argon2 & Libsodium", level: "Advanced" },
                { name: "XChaCha20 & AES-GCM", level: "Advanced" },
                { name: "OAuth2 & JWT", level: "Expert" },
                { name: "Keycloak SPI", level: "Advanced" },
                { name: "Zero-Knowledge Concepts", level: "Proficient" }
            ]
        },
        {
            category: "AI & Autonomous Agents",
            icon: "fas fa-robot",
            items: [
                { name: "Autonomous AI Agents", level: "Advanced" },
                { name: "Model Context Protocol (MCP)", level: "Advanced" },
                { name: "LLM Orchestration & Tools", level: "Advanced" },
                { name: "Deep Learning (NPR)", level: "Research" },
                { name: "Prompt & Context Design", level: "Proficient" }
            ]
        },
        {
            category: "Cloud, Systems & DevOps",
            icon: "fas fa-cloud",
            items: [
                { name: "Red Hat Linux (RHCSA)", level: "Certified" },
                { name: "Google Cloud Platform (GCP)", level: "Certified" },
                { name: "Docker & Containers", level: "Proficient" },
                { name: "GitHub Actions & CI/CD", level: "Advanced" },
                { name: "Git & Version Control", level: "Expert" }
            ]
        },
        {
            category: "Databases & Storage",
            icon: "fas fa-database",
            items: [
                { name: "PostgreSQL", level: "Advanced" },
                { name: "MySQL", level: "Advanced" },
                { name: "Redis In-Memory Cache", level: "Proficient" },
                { name: "Firebase Firestore", level: "Proficient" }
            ]
        }
    ],

    projects: {
        featured: [
            {
                name: "Zorvik AI",
                tagline: "Frontier Multi-Model Intelligence & Streaming Cascade",
                description: "Enterprise-grade AI platform & 11-engine cloud cascade (Gemini 2.5 Flash, Cerebras LPU, Groq). Features sub-50ms upstream SSE streaming, hands-free voice conversation mode, live interactive code sandbox, neural memory persistence, and multi-tenant admin control.",
                tech: ["React 19", "Node.js", "Express", "SSE Streaming", "Redis", "Supabase"],
                github: "https://github.com/ItsMeVikashKumarSingh/Zorvik-AI",
                demo: "https://ai.zorviktech.com",
                featured: true
            },
            {
                name: "Student-Management",
                tagline: "Enterprise Spring Boot System",
                description: "Secure, role-based Student Management System built with Spring Boot, MySQL, and modern JavaScript. Features granular RBAC, course assignment autocomplete, and audit logging.",
                tech: ["Java", "Spring Boot", "MySQL", "Spring Security", "JavaScript"],
                github: "https://github.com/ItsMeVikashKumarSingh/Student-Management",
                demo: null,
                featured: true
            },
            {
                name: "Secure-Authentication-System",
                tagline: "Privacy-First Cryptographic Identity Framework",
                description: "Zero-knowledge, pseudonymous authentication framework providing ready-to-integrate APIs for registration and session management without storing personal identities or IP addresses. Features Argon2 hashing, Libsodium client-server encryption, TOTP 2FA, and backup-key recovery.",
                tech: ["Node.js", "Express", "Libsodium", "Argon2", "TOTP 2FA", "JWT", "MongoDB", "Redis"],
                github: "https://github.com/ItsMeVikashKumarSingh/Secure-Authentication-System",
                demo: null,
                featured: true
            },
            {
                name: "RideEase",
                tagline: "Real-Time Ride Dispatch Backend",
                description: "High-concurrency ride-hailing backend architecture featuring geohash spatial driver matching, real-time WebSocket vehicle telemetry, and dynamic fare estimation.",
                tech: ["Java", "Spring Boot", "Redis", "WebSockets", "Android"],
                github: "https://github.com/ItsMeVikashKumarSingh/RideEase",
                demo: null,
                featured: true
            },
            {
                name: "E-Shop",
                tagline: "Multi-Tier E-Commerce Platform",
                description: "End-to-end commerce mobile application with seller KYC verification, transactional cart lock, secure payment integration, and real-time inventory management.",
                tech: ["Android", "Java", "Firebase", "Payment Gateway"],
                github: "https://github.com/ItsMeVikashKumarSingh/E-shop",
                demo: null,
                featured: true
            },
            {
                name: "AppBlocker",
                tagline: "System-Level Digital Wellness Tool",
                description: "Low-level Android process supervisor engineered to enforce app and VPN restrictions by intercepting foreground tasks, monitoring system intent broadcasts, and preventing bypass vectors.",
                tech: ["Android", "Kotlin", "Accessibility Services", "System APIs"],
                github: "https://github.com/ItsMeVikashKumarSingh/AppBlocker",
                demo: null,
                featured: true
            }
        ],
        more: [
            {
                name: "pqc-migration-framework",
                description: "Post-quantum cryptographic migration toolkit benchmarking lattice-based schemes (ML-KEM, ML-DSA) against classical RSA and ECC.",
                tech: ["Cryptography", "PQC", "Python", "Libsodium"],
                github: "https://github.com/ItsMeVikashKumarSingh/pqc-migration-framework",
                demo: null
            },
            {
                name: "hacktoberfest",
                description: "Curated open-source contribution repository with clean algorithms, data structure implementations, and collaborative PR workflows.",
                tech: ["Open Source", "Algorithms", "Git"],
                github: "https://github.com/ItsMeVikashKumarSingh/hacktoberfest",
                demo: null
            },
            {
                name: "Portfolio Website",
                description: "Modern, high-performance developer portfolio built with modular vanilla architecture, single-source configuration, and sleek obsidian glass aesthetic.",
                tech: ["HTML5", "CSS3", "JavaScript", "Config-Driven"],
                github: "https://github.com/ItsMeVikashKumarSingh/portfolio-website",
                demo: "#"
            }
        ]
    },

    publications: [
        {
            title: "Comparison of XChaCha20 and Argon2 with AES and bcrypt: Performance, Security, and Implementation",
            journal: "CRD Journal",
            volume: "Vol. 25, Issue 4 (2025)",
            description: "Empirical benchmarking and cryptographic analysis evaluating memory-hard hashing (Argon2 vs. bcrypt) and stream ciphers (XChaCha20 vs. AES-GCM) under constrained computational environments.",
            url: "http://journalcrd.org/wp-content/uploads/38-CRD2780.pdf",
            keywords: ["Argon2", "XChaCha20", "AES-GCM", "Memory-Hard Functions", "Cryptography"]
        },
        {
            title: "Neural Program Repair: Automatic Bug Detection and Patch Generation Using Deep Learning",
            journal: "CRD Journal",
            volume: "Vol. 25, Issue 5 (2025)",
            description: "Deep learning architecture for automated AST bug localization and semantic patch synthesis, enhancing code verification cycles and software development lifecycle throughput.",
            url: "http://journalcrd.org/wp-content/uploads/9-CRD2851.pdf",
            keywords: ["Deep Learning", "Automated Program Repair", "AST Analysis", "Neural Networks"]
        }
    ],

    certifications: [
        {
            title: "Red Hat Certified System Administrator (RHCSA)",
            issuer: "Red Hat",
            badge: "RHCSA",
            description: "Enterprise Linux systems administration, storage management, SELinux security policies, process scheduling, and operational automation.",
            icon: "fab fa-redhat"
        },
        {
            title: "Google Cloud Platform Certified (GCP)",
            issuer: "Google Cloud",
            badge: "GCP Certified",
            description: "Cloud architecture, IAM security governance, serverless deployments, managed databases, and scalable distributed infrastructure.",
            icon: "fab fa-google"
        }
    ]
};

// Export for Node/CommonJS if used in build scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
