// Configuration file for portfolio
const portfolioConfig = {
    personal: {
        name: "Vikash Kumar Singh",
        title: "Android & Backend Developer | Learning AI",
        subtitle: "B.Tech Graduate (2025) • Fresher Seeking Opportunities",
        location: "Bihar, India",
        profileImage: "assets/profile.jpg",
        resumeUrl: "assets/vikash-kumar-singh-resume.pdf"
    },
    
    contact: {
        email: "vikashkumarsingh8352@gmail.com",
        linkedin: "https://linkedin.com/in/itsmevikashkumarsingh",
        github: "https://github.com/ItsMeVikashKumarSingh",
        telegram: "https://t.me/encrypted_ghost",
        instagram: "https://www.instagram.com/encrypted.ghost",
        portfolio: "https://aboutvikash.netlify.app"
    },
    
    publications: [
        {
            title: "Comparison of XChaCha20 and Argon2 with AES and bcrypt: Performance, Security, and Implementation",
            journal: "CRD Journal",
            volume: "Vol. 25, Issue 4 (2025)",
            description: "Comprehensive analysis of modern encryption algorithms focusing on performance benchmarks and security implementations for authentication systems.",
            keywords: ["Encryption", "Security", "Performance", "Authentication"]
        },
        {
            title: "Neural Program Repair: Automatic Bug Detection and Patch Generation Using Deep Learning",
            journal: "CRD Journal", 
            volume: "Vol. 25, Issue 5 (2025)",
            description: "Proposed an innovative deep learning model for automated code repair and bug detection, improving software development efficiency and code quality.",
            keywords: ["Deep Learning", "Program Repair", "Bug Detection", "Neural Networks"]
        }
    ],
    
    contactForm: {
        actionUrl: "https://api.web3forms.com/submit",
        accessKey: "6d915a88-9221-4553-abe5-27a572fc7233"
    },
    
    projects: {
        featured: [
            {
                name: "Zorvik-AI",
                github: "https://github.com/ItsMeVikashKumarSingh/Zorvik-AI",
                demo: "#",
                hasDocsLink: false
            },
            {
                name: "AppBlocker", 
                github: "https://github.com/ItsMeVikashKumarSingh/AppBlocker",
                demo: "#",
                hasDocsLink: false
            },
            {
                name: "E-Shop",
                github: "https://github.com/ItsMeVikashKumarSingh/E-Shop", 
                demo: "#",
                hasDocsLink: false
            },
            {
                name: "Server",
                github: "https://github.com/ItsMeVikashKumarSingh/server",
                demo: "#",
                hasDocsLink: true
            }
        ],
        current: {
            name: "RideEase",
            github: "https://github.com/ItsMeVikashKumarSingh/RideEase",
            demo: "#",
            progress: {
                backend: 85,
                android: 70,
                realtime: 60
            }
        },
        openSource: {
            name: "Hacktoberfest",
            github: "https://github.com/ItsMeVikashKumarSingh/hacktoberfest",
            demo: "#"
        },
        others: [
            {
                name: "FrontDesk Agent",
                description: "AI-powered virtual assistant for handling front desk operations and customer inquiries with intelligent response system.",
                github: "https://github.com/ItsMeVikashKumarSingh/frontdesk-agent",
                demo: "#",
                tech: ["JavaScript", "React", "Firebase", "AI"]
            },
            {
                name: "BrainStormer",
                description: "Hackathon project for K12 education featuring study materials, interactive tests, assignment tracking, and learning analytics for students.",
                github: "https://github.com/ItsMeVikashKumarSingh/brainstormer",
                demo: "#",
                tech: ["Python", "Django", "PostgreSQL", "Education"]
            },
            {
                name: "Instagram Auto Responder",
                description: "Automation tool for managing Instagram direct messages with intelligent auto-replies and customer engagement features.",
                github: "https://github.com/ItsMeVikashKumarSingh/insta-auto-responder",
                demo: "#",
                tech: ["Python", "Instagram API", "Automation"]
            },
            {
                name: "Portfolio Website",
                description: "Modern, responsive portfolio website showcasing projects and skills with futuristic design and smooth animations.",
                github: "https://github.com/ItsMeVikashKumarSingh/portfolio-website",
                demo: window.location.href,
                tech: ["HTML", "CSS", "JavaScript", "Web Design"]
            }
        ]
    }
};
