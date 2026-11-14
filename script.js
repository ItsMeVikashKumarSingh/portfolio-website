/**
 * Vikash Kumar Singh — Portfolio Application Script
 * Dynamically binds content from config.js into the DOM.
 * Powers 3D interactive tilt physics, glass highlights & active state tracking.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check if configuration exists
    if (typeof portfolioConfig === 'undefined') {
        console.error('portfolioConfig not found. Please ensure config.js is loaded before script.js.');
        return;
    }

    const cfg = portfolioConfig;

    // 1. Initialize Personal & Hero Metadata
    initHero(cfg);

    // 2. Initialize Navigation & Links
    initNavigation(cfg);

    // 3. Initialize Philosophy, Ask Me About & Opportunities
    initPhilosophy(cfg);

    // 4. Initialize Skills Grid
    initSkills(cfg);

    // 5. Initialize Projects (Featured & Secondary)
    initProjects(cfg);

    // 7. Initialize Publications
    initPublications(cfg);

    // 8. Initialize Certifications
    initCertifications(cfg);

    // 9. Initialize Contact & Form Submission (with Reason dropdown)
    initContact(cfg);

    // 10. Initialize Scroll & UI Interactions
    initUIInteractions();

    // 11. Initialize 3D Parallax & Tilt Engine
    init3DTilt();
});

/* ==========================================================================
   1. HERO INITIALIZATION
   ========================================================================== */
function initHero(cfg) {
    const p = cfg.personal;
    
    // Page Title
    if (p.name && p.role) {
        document.title = `${p.name} — ${p.role}`;
    }

    // Avatar
    const avatarImg = document.getElementById('hero-avatar-img');
    const navAvatar = document.getElementById('nav-avatar');
    if (avatarImg && p.avatar) avatarImg.src = p.avatar;
    if (navAvatar && p.avatar) navAvatar.src = p.avatar;

    // Text & Badges
    setElemText('hero-name', p.name);
    setElemText('card-name', p.name);
    setElemText('hero-subtitle', p.role);
    setElemText('card-designation', `${p.designation} @ ${p.company}`);
    setElemText('hero-description', p.tagline);
    setElemText('hero-status-text', p.status);

    // Resume buttons
    const navResumeBtn = document.getElementById('nav-resume-btn');
    const heroResumeLink = document.getElementById('hero-resume-link');
    if (navResumeBtn && p.resumeUrl) {
        navResumeBtn.href = p.resumeUrl;
        if (p.resumeUrl.startsWith('http')) {
            navResumeBtn.target = '_blank';
            navResumeBtn.rel = 'noopener noreferrer';
            navResumeBtn.removeAttribute('download');
        }
    }
    if (heroResumeLink && p.resumeUrl) {
        heroResumeLink.href = p.resumeUrl;
        if (p.resumeUrl.startsWith('http')) {
            heroResumeLink.target = '_blank';
            heroResumeLink.rel = 'noopener noreferrer';
            heroResumeLink.removeAttribute('download');
        }
    }

    // Hero Socials
    const socialsContainer = document.getElementById('hero-socials');
    if (socialsContainer && cfg.contact) {
        socialsContainer.innerHTML = '';
        const socialMap = [
            { key: 'github', icon: 'fab fa-github', title: 'GitHub Profile' },
            { key: 'linkedin', icon: 'fab fa-linkedin-in', title: 'LinkedIn Profile' },
            { key: 'telegram', icon: 'fab fa-telegram', title: 'Telegram Dispatch' },
            { key: 'instagram', icon: 'fab fa-instagram', title: 'Instagram' },
            { key: 'email', icon: 'fas fa-envelope', title: 'Email Me', prefix: 'mailto:' }
        ];

        socialMap.forEach(item => {
            const rawVal = cfg.contact[item.key];
            if (rawVal) {
                const href = item.prefix ? `${item.prefix}${rawVal}` : rawVal;
                const link = document.createElement('a');
                link.href = href;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.className = 'social-icon-btn';
                link.title = item.title;
                link.innerHTML = `<i class="${item.icon}"></i>`;
                socialsContainer.appendChild(link);
            }
        });
    }

    // Hero Metrics Card
    const metricsGrid = document.getElementById('hero-metrics-grid');
    if (metricsGrid && cfg.stats) {
        metricsGrid.innerHTML = '';
        cfg.stats.forEach(st => {
            const box = document.createElement('div');
            box.className = 'metric-box';
            box.innerHTML = `
                <div class="metric-label"><i class="${st.icon}" style="margin-right: 4px;"></i>${escapeHTML(st.label)}</div>
                <div class="metric-value">${escapeHTML(st.value)}</div>
                <div class="metric-note">${escapeHTML(st.note || '')}</div>
            `;
            metricsGrid.appendChild(box);
        });
    }
}

/* ==========================================================================
   2. NAVIGATION & LINKS
   ========================================================================== */
function initNavigation(cfg) {
    const brandName = document.getElementById('nav-brand-name');
    if (brandName && cfg.personal.name) {
        brandName.textContent = cfg.personal.name;
    }

    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close when clicking a nav link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

/* ==========================================================================
   3. PHILOSOPHY, ASK ME ABOUT & OPPORTUNITIES
   ========================================================================== */
function initPhilosophy(cfg) {
    const p = cfg.personal;
    if (p.philosophy) {
        setElemText('philosophy-headline', `"${p.philosophy.headline}"`);
        setElemText('philosophy-desc', p.philosophy.description);
    }
    if (p.funFact) {
        setElemText('fun-fact-text', p.funFact);
    }

    // Ask Me About Pills
    const pillsContainer = document.getElementById('ask-me-pills');
    if (pillsContainer && p.askMeAbout) {
        pillsContainer.innerHTML = '';
        p.askMeAbout.forEach(topic => {
            const pill = document.createElement('span');
            pill.className = 'pill-item';
            pill.textContent = topic;
            pillsContainer.appendChild(pill);
        });
    }

    // Open For Roles Pills
    const lookingForContainer = document.getElementById('looking-for-pills');
    if (lookingForContainer && cfg.lookingFor) {
        lookingForContainer.innerHTML = '';
        cfg.lookingFor.forEach(role => {
            const pill = document.createElement('span');
            pill.className = 'pill-item';
            pill.style.borderColor = 'rgba(245, 158, 11, 0.3)';
            pill.style.color = 'var(--gold-bright)';
            pill.textContent = role;
            lookingForContainer.appendChild(pill);
        });
    }
}

/* ==========================================================================
   4. SKILLS SECTION
   ========================================================================== */
function initSkills(cfg) {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid || !cfg.skills) return;

    skillsGrid.innerHTML = '';
    cfg.skills.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'skill-category-card card-3d';

        const chipsHtml = (cat.items || []).map(item => `
            <span class="skill-chip">
                <span class="level-dot"></span>
                <span>${escapeHTML(item.name)}</span>
            </span>
        `).join('');

        card.innerHTML = `
            <div class="skill-cat-header">
                <div class="skill-cat-icon"><i class="${cat.icon || 'fas fa-code'}"></i></div>
                <h3 class="skill-cat-title">${escapeHTML(cat.category)}</h3>
            </div>
            <div class="skill-chips">
                ${chipsHtml}
            </div>
        `;
        skillsGrid.appendChild(card);
    });
}

/* ==========================================================================
   5. PROJECTS SECTION
   ========================================================================== */
function initProjects(cfg) {
    const featuredGrid = document.getElementById('featured-projects-grid');
    const moreGrid = document.getElementById('more-projects-grid');

    // Featured Projects
    if (featuredGrid && cfg.projects && cfg.projects.featured) {
        featuredGrid.innerHTML = '';
        cfg.projects.featured.forEach(prj => {
            const card = document.createElement('div');
            card.className = 'project-card card-3d';

            const techTags = (prj.tech || []).map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('');
            
            let actionsHtml = '';
            if (prj.github) {
                actionsHtml += `<a href="${prj.github}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fab fa-github"></i> Repository</a>`;
            }
            if (prj.demo && prj.demo !== '#') {
                actionsHtml += `<a href="${prj.demo}" target="_blank" rel="noopener noreferrer" class="project-link" style="color: var(--gold-bright);"><i class="fas fa-arrow-up-right-from-square"></i> Live Demo</a>`;
            }

            card.innerHTML = `
                <div class="project-top">
                    <div class="project-header-row">
                        <h3 class="project-title">${escapeHTML(prj.name)}</h3>
                    </div>
                    <div class="project-tagline">${escapeHTML(prj.tagline || '')}</div>
                    <p class="project-desc">${escapeHTML(prj.description)}</p>
                    <div class="project-tech-tags">${techTags}</div>
                </div>
                <div class="project-actions">${actionsHtml}</div>
            `;
            featuredGrid.appendChild(card);
        });
    }

    // Additional Projects
    if (moreGrid && cfg.projects && cfg.projects.more) {
        moreGrid.innerHTML = '';
        cfg.projects.more.forEach(prj => {
            const card = document.createElement('div');
            card.className = 'mini-project-card card-3d';

            const techTags = (prj.tech || []).map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('');

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <h4 style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">${escapeHTML(prj.name)}</h4>
                    ${prj.github ? `<a href="${prj.github}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fab fa-github"></i></a>` : ''}
                </div>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 14px;">${escapeHTML(prj.description)}</p>
                <div class="project-tech-tags" style="margin-bottom: 0;">${techTags}</div>
            `;
            moreGrid.appendChild(card);
        });
    }
}

/* ==========================================================================
   7. PUBLICATIONS SECTION
   ========================================================================== */
function initPublications(cfg) {
    const pubGrid = document.getElementById('publications-grid');
    if (!pubGrid || !cfg.publications) return;

    pubGrid.innerHTML = '';
    cfg.publications.forEach(pub => {
        const card = document.createElement('div');
        card.className = 'publication-card card-3d';

        const keywordsHtml = (pub.keywords || []).map(k => `<span class="keyword-tag">${escapeHTML(k)}</span>`).join('');

        card.innerHTML = `
            <div>
                <div class="publication-journal">${escapeHTML(pub.journal)} · ${escapeHTML(pub.volume)}</div>
                <h3 class="publication-title">${escapeHTML(pub.title)}</h3>
                <p class="publication-desc">${escapeHTML(pub.description)}</p>
                <div class="publication-keywords">${keywordsHtml}</div>
            </div>
            <div>
                <a href="${pub.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="font-size: 0.82rem; padding: 8px 16px;">
                    <i class="fas fa-file-pdf" style="color: #ef4444;"></i> Read Journal PDF
                </a>
            </div>
        `;
        pubGrid.appendChild(card);
    });
}

/* ==========================================================================
   8. CERTIFICATIONS SECTION
   ========================================================================== */
function initCertifications(cfg) {
    const certGrid = document.getElementById('certifications-grid');
    if (!certGrid || !cfg.certifications) return;

    certGrid.innerHTML = '';
    cfg.certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'cert-card card-3d';

        card.innerHTML = `
            <div class="cert-icon"><i class="${cert.icon || 'fas fa-award'}"></i></div>
            <div class="cert-info">
                <h3>${escapeHTML(cert.title)}</h3>
                <div class="cert-issuer">${escapeHTML(cert.issuer)}</div>
                <p class="cert-desc">${escapeHTML(cert.description)}</p>
            </div>
        `;
        certGrid.appendChild(card);
    });
}

/* ==========================================================================
   9. CONTACT SECTION & WEB3FORMS (WITH REASONS)
   ========================================================================== */
function initContact(cfg) {
    // Populate direct contact channels
    const channelsContainer = document.getElementById('contact-channels');
    if (channelsContainer && cfg.contact) {
        channelsContainer.innerHTML = '';
        const items = [
            { label: cfg.contact.email, icon: 'fas fa-envelope', href: `mailto:${cfg.contact.email}` },
            { label: 'LinkedIn Profile', icon: 'fab fa-linkedin', href: cfg.contact.linkedin },
            { label: 'GitHub Repositories', icon: 'fab fa-github', href: cfg.contact.github },
            { label: 'Telegram Direct', icon: 'fab fa-telegram', href: cfg.contact.telegram },
            { label: 'Instagram', icon: 'fab fa-instagram', href: cfg.contact.instagram }
        ];

        items.forEach(it => {
            if (it.href && !it.href.includes('undefined')) {
                const a = document.createElement('a');
                a.href = it.href;
                a.className = 'channel-item';
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.innerHTML = `
                    <div class="channel-icon"><i class="${it.icon}"></i></div>
                    <span class="channel-label">${escapeHTML(it.label)}</span>
                `;
                channelsContainer.appendChild(a);
            }
        });
    }

    // Configure Web3Forms access key
    const accessKeyInput = document.getElementById('form-access-key');
    if (accessKeyInput && cfg.contactForm && cfg.contactForm.accessKey) {
        accessKeyInput.value = cfg.contactForm.accessKey;
    }

    // Populate Subject / Reason Dropdown
    const reasonSelect = document.getElementById('sender-reason');
    if (reasonSelect && cfg.contactForm && cfg.contactForm.inquiryTypes) {
        reasonSelect.innerHTML = '<option value="" disabled selected>Select Subject / Reason</option>';
        cfg.contactForm.inquiryTypes.forEach(opt => {
            const el = document.createElement('option');
            el.value = opt.value;
            el.textContent = opt.label;
            reasonSelect.appendChild(el);
        });
    }

    // Handle form submit
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit-btn');

    if (contactForm && cfg.contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!submitBtn || !formStatus) return;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';
            formStatus.className = 'form-status';
            formStatus.textContent = '';

            const formData = new FormData(contactForm);
            const actionUrl = cfg.contactForm.actionUrl || 'https://api.web3forms.com/submit';

            try {
                const res = await fetch(actionUrl, {
                    method: 'POST',
                    body: formData
                });
                const data = await res.json();

                if (data.success) {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '✓ Message sent successfully! I will reply shortly.';
                    contactForm.reset();
                } else {
                    formStatus.className = 'form-status error';
                    formStatus.textContent = `Error: ${data.message || 'Unable to send message. Please email me directly.'}`;
                }
            } catch (err) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Network error. Please email me directly at ' + (cfg.contact.email || '');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            }
        });
    }

    // Footer Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/* ==========================================================================
   10. UI SCROLL & ACTIVE STATE INTERACTIONS
   ========================================================================== */
function initUIInteractions() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Navbar blur elevation
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link tracking
        let currentSectionId = '';
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.clientHeight;
            if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   11. 3D TILT & PARALLAX ENGINE
   ========================================================================== */
function init3DTilt() {
    const selector = '.card-3d, .hero-card, .project-card, .skill-category-card, .publication-card, .cert-card, .philosophy-card, .ask-me-card, .currently-building-card';
    const cards = document.querySelectorAll(selector);

    cards.forEach(card => {
        // Ensure 3D class is present
        if (!card.classList.contains('card-3d')) {
            card.classList.add('card-3d');
        }

        // Create specular glare overlay if not present
        if (!card.querySelector('.glare-overlay')) {
            const glare = document.createElement('div');
            glare.className = 'glare-overlay';
            card.appendChild(glare);
        }

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Subtle, elegant 3D tilt angles (-7 to +7 deg)
            const rotateX = ((centerY - y) / centerY) * 6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
            card.style.setProperty('--mouse-x', `${((x / rect.width) * 100).toFixed(1)}%`);
            card.style.setProperty('--mouse-y', `${((y / rect.height) * 100).toFixed(1)}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}

/* ==========================================================================
   UTILITY HELPERS
   ========================================================================== */
function setElemText(id, text) {
    const elem = document.getElementById(id);
    if (elem && text) elem.textContent = text;
}

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
