// Initialize AOS with enhanced animations
AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 100
});

// ============ NAVIGATION ============
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============ SMOOTH SCROLLING ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============ TYPING EFFECT ============
function typeWriter(element, text, speed = 60) {
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.innerHTML += '<span class="cursor">|</span>';
        }
    }
    type();
}

window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.typed-text');
    if (heroTitle) {
        setTimeout(() => {
            typeWriter(heroTitle, 'Vikash Kumar Singh', 80);
        }, 1000);
    }
});

// ============ COUNTER ANIMATION ============
function animateCounter(element, target, duration = 1500) {
    let current = 0;
    const increment = target / (duration / 30);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

const observeCounters = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-count'));
            animateCounter(counter, target);
            observeCounters.unobserve(counter);
        }
    });
});

document.querySelectorAll('[data-count]').forEach(counter => {
    observeCounters.observe(counter);
});

// ============ SKILL BARS ANIMATION ============
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        if (width) {
            setTimeout(() => {
                bar.style.width = width;
            }, index * 100);
        }
    });
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        if (width) {
            setTimeout(() => {
                bar.style.width = width;
            }, index * 200);
        }
    });
}

const observeAnimations = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('skills-container')) {
                animateSkillBars();
            } else if (entry.target.classList.contains('project-progress')) {
                animateProgressBars();
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-container, .project-progress').forEach(element => {
    observeAnimations.observe(element);
});

// ============ DYNAMIC PROJECT RENDERING ============
function getProjectIcon(projectName) {
    const iconMap = {
        'Zorvik-AI': 'fas fa-robot',
        'RideEase': 'fas fa-car',
        'AppBlocker': 'fas fa-shield-alt',
        'E-Shop': 'fas fa-shopping-cart',
        'Server': 'fas fa-server',
        'FrontDesk Agent': 'fas fa-robot',
        'BrainStormer': 'fas fa-brain',
        'Instagram Auto Responder': 'fab fa-instagram',
        'Portfolio Website': 'fas fa-globe'
    };
    
    return iconMap[projectName] || 'fas fa-code';
}

function getProjectFeatures(projectName) {
    const featuresMap = {
        'Zorvik-AI': ['✨ AI Chat Interface', '📐 LaTeX Rendering', '💻 Code Support'],
        'AppBlocker': ['🔒 Stealth Mode', '🛡️ Device Admin', '📱 App Blocking'],
        'E-Shop': ['🛒 E-commerce', '💳 Payment Gateway', '🔐 Secure Auth'],
        'Server': ['🔑 JWT Auth', '🔥 Firebase', '📊 MongoDB']
    };
    
    return featuresMap[projectName] || ['🚀 Feature 1', '⚡ Feature 2', '🎯 Feature 3'];
}

function getProjectTech(projectName) {
    const techMap = {
        'Zorvik-AI': ['JavaScript', 'FastAPI', 'Firebase', 'Vercel'],
        'AppBlocker': ['Java', 'Android', 'Accessibility Services', 'Security'],
        'E-Shop': ['Java', 'Firebase', 'Android', 'Payment APIs'],
        'Server': ['Node.js', 'JWT', 'MongoDB', 'Firebase']
    };
    
    return techMap[projectName] || ['Technology 1', 'Technology 2'];
}

function getProjectDescription(projectName) {
    const descriptions = {
        'Zorvik-AI': 'Advanced AI-powered chat application with next-word prediction, LaTeX mathematical rendering, and comprehensive code syntax highlighting. Built with modern web technologies for optimal performance and user experience.',
        'AppBlocker': 'Advanced Android security application using accessibility services and device admin privileges to restrict app access. Features stealth operation and custom crash handling for parental controls and productivity.',
        'E-Shop': 'Complete Android e-commerce platform with dual interfaces for buyers and sellers. Integrated UPI/COD payments, secure authentication, and comprehensive product management system.',
        'Server': 'Robust backend authentication system implementing JWT tokens, Firebase Auth, and MongoDB. Features industry-standard security practices for scalable user management.'
    };
    
    return descriptions[projectName] || 'Advanced project with modern technologies and best practices.';
}

function renderFeaturedProjects() {
    const container = document.querySelector('.projects-grid-featured');
    if (!container || !portfolioConfig.projects.featured) return;
    
    container.innerHTML = '';
    
    portfolioConfig.projects.featured.forEach(project => {
        const features = getProjectFeatures(project.name);
        const tech = getProjectTech(project.name);
        const icon = getProjectIcon(project.name);
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="project-stats">
                    <span class="stat"><i class="fas fa-star"></i> 0</span>
                    <span class="stat"><i class="fas fa-code-branch"></i> 0</span>
                </div>
            </div>
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">
                ${getProjectDescription(project.name)}
            </p>
            <div class="project-features">
                ${features.map(feature => `<span class="feature">${feature}</span>`).join('')}
            </div>
            <div class="project-tech">
                ${tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link">
                    <i class="fab fa-github"></i> Code
                </a>
                <a href="${project.demo}" class="project-link">
                    <i class="fas fa-${project.hasDocsLink ? 'book' : 'external-link-alt'}"></i> 
                    ${project.hasDocsLink ? 'API Docs' : 'Demo'}
                </a>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

function renderOtherProjects() {
    const container = document.querySelector('.other-projects-grid');
    if (!container || !portfolioConfig.projects.others) return;
    
    container.innerHTML = '';
    
    portfolioConfig.projects.others.forEach(project => {
        const icon = getProjectIcon(project.name);
        
        const projectCard = document.createElement('div');
        projectCard.className = 'mini-project-card';
        projectCard.innerHTML = `
            <div class="mini-project-header">
                <div class="mini-project-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="mini-project-stats">
                    <span class="mini-stat"><i class="fas fa-star"></i> 0</span>
                </div>
            </div>
            <h4 class="mini-project-title">${project.name}</h4>
            <p class="mini-project-description">
                ${project.description}
            </p>
            <div class="mini-project-tech">
                ${project.tech.map(t => `<span class="mini-tech-tag">${t}</span>`).join('')}
            </div>
            <div class="mini-project-links">
                <a href="${project.github}" class="mini-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="${project.demo}" class="mini-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

function initializeProjectGrid() {
    const featuredContainer = document.querySelector('.projects-grid-featured');
    const otherContainer = document.querySelector('.other-projects-grid');
    
    if (featuredContainer) {
        featuredContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        featuredContainer.style.maxWidth = '800px';
    }
    
    if (otherContainer) {
        otherContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        otherContainer.style.maxWidth = '800px';
    }
}

// ============ FEATURED PROJECTS ROW-BY-ROW LOADING ============
const observeFeaturedProjectRows = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const container = entry.target;
            const projectCards = container.querySelectorAll('.project-card');
            
            // Group projects into rows (2 per row)
            const rows = [];
            for (let i = 0; i < projectCards.length; i += 2) {
                rows.push(Array.from(projectCards).slice(i, i + 2));
            }
            
            // Animate each row with delay
            rows.forEach((row, rowIndex) => {
                setTimeout(() => {
                    row.forEach((card, cardIndex) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, cardIndex * 150);
                    });
                }, rowIndex * 400);
            });
            
            observeFeaturedProjectRows.unobserve(container);
        }
    });
}, { threshold: 0.05, rootMargin: '0px 0px 100px 0px' });

// ============ UNIVERSAL SECTION OBSERVER - CORRECTED ============
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            console.log('Animating section:', section.id);
            
            // Handle different sections
            if (section.classList.contains('other-projects')) {
                const cards = section.querySelectorAll('.mini-project-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, index * 150);
                });
            } 
            else if (section.classList.contains('open-source')) {
                const cards = section.querySelectorAll('.contribution-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, index * 200);
                });
            }
            else if (section.classList.contains('publications')) {
                const cards = section.querySelectorAll('.publication-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, index * 200);
                });
            }
            else if (section.classList.contains('certifications')) {
                const cards = section.querySelectorAll('.cert-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, index * 200);
                });
            }
            
            sectionObserver.unobserve(section);
        }
    });
}, { 
    threshold: 0.1, 
    rootMargin: '0px 0px -100px 0px' 
});

// ============ ENHANCED PROFILE CARD INTERACTIONS ============
function enhanceProfileCard() {
    const profileCard = document.querySelector('.profile-card');
    const stats = document.querySelectorAll('.stat');
    
    if (profileCard) {
        profileCard.addEventListener('mouseenter', () => {
            profileCard.style.transform = 'translateY(-15px) scale(1.02)';
            profileCard.style.boxShadow = '0 25px 50px rgba(124, 58, 237, 0.6)';
        });
        
        profileCard.addEventListener('mouseleave', () => {
            profileCard.style.transform = 'translateY(0) scale(1)';
            profileCard.style.boxShadow = 'var(--shadow-glow)';
        });
    }
    
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            stat.style.background = 'rgba(6, 182, 212, 0.2)';
            stat.style.transform = 'translateY(-8px)';
        });
        
        stat.addEventListener('mouseleave', () => {
            stat.style.background = 'transparent';
            stat.style.transform = 'translateY(0)';
        });
    });
}

// ============ ENHANCED SKILL SECTION INTERACTIONS ============
function enhanceSkillSections() {
    const skillCategories = document.querySelectorAll('.skill-category');
    const techItems = document.querySelectorAll('.tech-item');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'translateY(-10px)';
            category.style.borderColor = 'var(--accent-color)';
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.transform = 'translateY(0)';
            category.style.borderColor = 'rgba(124, 58, 237, 0.2)';
        });
    });
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.05)';
            item.style.borderColor = 'var(--primary-color)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.borderColor = 'rgba(124, 58, 237, 0.2)';
        });
    });
}

// ============ CONTACT FORM HANDLING ============
const contactForm = document.getElementById('contact-form');
const formMessages = document.getElementById('form-messages');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formBtn = this.querySelector('.form-btn');
    const btnText = formBtn.querySelector('.btn-text');
    const btnLoading = formBtn.querySelector('.btn-loading');
    
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    formBtn.disabled = true;
    
    formMessages.innerHTML = '';
    
    try {
        const formData = new FormData(this);
        
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            showSuccessMessage();
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
        
    } catch (error) {
        showErrorMessage();
        console.error('Form submission error:', error);
    } finally {
        setTimeout(() => {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            formBtn.disabled = false;
        }, 1000);
    }
});

function showSuccessMessage() {
    formMessages.innerHTML = `
        <div class="success-message">
            <i class="fas fa-check-circle"></i>
            <h4>Message Sent Successfully!</h4>
            <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
        </div>
    `;
}

function showErrorMessage() {
    formMessages.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h4>Oops! Something went wrong</h4>
            <p>Please try again or contact me directly at:</p>
            <a href="mailto:vikashkumarsingh8352@gmail.com" class="fallback-email">
                <i class="fas fa-envelope"></i>
                vikashkumarsingh8352@gmail.com
            </a>
        </div>
    `;
}

// ============ FORM ENHANCEMENT ============
function enhanceContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;
    
    const formContainer = form.parentElement;
    formContainer.style.maxWidth = '580px';
    formContainer.style.margin = '0 auto';
    
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = 'var(--primary-color)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = 'rgba(124, 58, 237, 0.2)';
        });
    });
}

// ============ GITHUB STATS UPDATER ============
async function updateGitHubStats() {
    try {
        const response = await fetch('https://api.github.com/users/ItsMeVikashKumarSingh');
        const data = await response.json();
        
        const repoCount = document.querySelector('[data-count="44"]');
        if (repoCount && data.public_repos) {
            repoCount.setAttribute('data-count', data.public_repos);
        }
        
    } catch (error) {
        console.log('GitHub API request failed:', error);
    }
}

// ============ ERROR HANDLING ============
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// ============ ACCESSIBILITY ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ============ CORRECTED INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Render dynamic projects first
    renderFeaturedProjects();
    renderOtherProjects();
    initializeProjectGrid();
    
    // Setup observer for featured projects
    const featuredContainer = document.querySelector('.projects-grid-featured');
    if (featuredContainer) {
        observeFeaturedProjectRows.observe(featuredContainer);
    }
    
    // Setup observers for sections using class selectors
    const sectionsToObserve = [
        '.other-projects',
        '.open-source', 
        '.publications',
        '.certifications'
    ];
    
    sectionsToObserve.forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            console.log('Found section:', selector);
            sectionObserver.observe(section);
        } else {
            console.warn('Section not found:', selector);
        }
    });
    
    // Initialize other features
    enhanceContactForm();
    updateGitHubStats();
    enhanceProfileCard();
    enhanceSkillSections();
    
    console.log('All animations properly initialized!');
});

window.addEventListener('resize', function() {
    initializeProjectGrid();
});

// ============ DEBOUNCE FOR PERFORMANCE ============
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const optimizedScrollHandler = debounce(() => {
    // Additional scroll-based logic
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);
