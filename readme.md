# Portfolio Website - Vikash Kumar Singh

A modern, responsive portfolio website showcasing Android & Backend development projects with futuristic design and smooth animations.

## 🚀 Features

- **Modern Design**: Futuristic UI with gradient backgrounds and smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Dynamic Content**: Projects loaded dynamically from configuration file
- **Smooth Animations**: Loading animations for each section with staggered effects
- **Interactive Elements**: Hover effects on cards, buttons, and navigation
- **Contact Form**: Functional contact form with Web3Forms integration
- **Performance Optimized**: Debounced scroll handlers and intersection observers

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animations**: AOS (Animate On Scroll) library
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter & JetBrains Mono from Google Fonts
- **Form Handling**: Web3Forms API
- **Assets**: JavaScript, JPG, SVG, ICO, and PNG files
- **Version Control**: Git

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styles
├── script.js           # JavaScript functionality
├── config.js           # Portfolio configuration
├── assets/            
│   ├── profile.jpg     # Profile image
│   ├── favicon_vks.ico # Website favicon
│   └── vikash-kumar-singh-resume.pdf
└── README.md           # Project documentation
```

## 🎨 Sections

1. **Hero Section**: Introduction with typing animation and profile card
2. **About**: Personal information, skills, and tech stack
3. **Current Work**: RideEase project with progress indicators
4. **Featured Projects**: Main projects with detailed descriptions
5. **Other Projects**: Additional notable projects
6. **Open Source**: Hacktoberfest contributions
7. **Publications**: Research papers and publications
8. **Certifications**: Professional certifications
9. **Hire Me**: Call-to-action section for opportunities
10. **Contact**: Contact form and social links

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ItsMeVikashKumarSingh/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser:**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

3. **Live Server (recommended):**
   ```bash
   # Using VS Code Live Server extension
   # Or using Python
   python -m http.server 8000
   ```

## 🔧 Configuration

### Personal Information
Edit `config.js` to customize:

```javascript
const portfolioConfig = {
    personal: {
        name: "Vikash Kumar Singh",
        title: "Android & Backend Developer | Learning AI",
        location: "Bihar, India",
        // ... other details
    },
    projects: {
        featured: [
            // Add your featured projects
        ],
        others: [
            // Add other projects
        ]
    }
};
```

### Contact Form
Update the Web3Forms access key in `config.js`:

```javascript
contactForm: {
    _accessKey: "ACESS_KEY_HERE"
}
```

## 🎯 Key Features Implementation

### Dynamic Project Loading
- Projects are loaded from `config.js`
- Icons automatically assigned based on project names
- Easy to add/remove projects by editing configuration

### Staggered Animations[1]
- Featured projects load row by row
- Other sections animate on scroll with proper timing
- Each card has individual timing delays for smooth transitions

### Responsive Design
- Mobile-first approach with breakpoints at 768px, 1024px, 480px
- Optimized grid layouts for all screen sizes
- Touch-friendly navigation and interactions

## 🎨 Customization

### Colors & Theme
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #7c3aed;
    --secondary-color: #a855f7;
    --accent-color: #06b6d4;
    --bg-dark: #0c0a1a;
    --bg-darker: #050314;
    /* ... other colors */
}
```

### Animations
Adjust AOS settings in `script.js`:

```javascript
AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Deployment Options

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch (main)
4. Site will be available at `itsmevikashkumarsingh.github.io/portfolio-website`

### Netlify
1. Connect GitHub repository: `https://github.com/ItsMeVikashKumarSingh/portfolio-website.git`
2. Build command: (none needed)
3. Publish directory: `/` (root)
4. Deploy automatically on push

### Vercel
1. Import GitHub repository
2. No build configuration needed
3. Deploy with one click

## 🎪 Live Demo

Visit the live website at: [Portfolio Website](https://portfolio-vikash-kumar-singh.netlify.app)

## 👨‍💻 Author

**Vikash Kumar Singh**
- **Location**: Bihar, India
- **Focus**: Android and Backend Developer learning AI[1]
- **GitHub**: [@ItsMeVikashKumarSingh](https://github.com/ItsMeVikashKumarSingh)
- **LinkedIn**: [itsmevikashkumarsingh](https://linkedin.com/in/itsmevikashkumarsingh)
- **Email**: vikashkumarsingh8352@gmail.com
- **Telegram**: [@encrypted_ghost](https://t.me/encrypted_ghost)
- **Instagram**: [@encrypted.ghost](https://www.instagram.com/encrypted.ghost)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔍 Project Highlights

- **Fresh Graduate**: B.Tech in AI & Data Science (2025)
- **44+ Repositories**: Active GitHub contributor
- **2 Publications**: Research papers in encryption and neural program repair
- **Red Hat Certified**: System Administrator certification
- **Open Source**: Hacktoberfest 2024 organizer and maintainer

## 📝 Changelog

### v1.0.0 (2025-07-19)
- ✅ Initial release with futuristic design[1]
- ✅ Responsive layout implementation
- ✅ Dynamic project loading system
- ✅ Staggered loading animations[1]
- ✅ Contact form integration
- ✅ Mobile optimization
- ✅ Enhanced hover effects and UI animations[1]

⭐ **Star this repository if you found it helpful!** ⭐

**Repository URL**: https://github.com/ItsMeVikashKumarSingh/portfolio-website.git
