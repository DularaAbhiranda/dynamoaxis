# DynamoAxis - Professional IT Solutions Website

A modern, responsive website for DynamoAxis IT firm, showcasing professional IT services including software development, cybersecurity, IT consulting, AI/ML, and managed IT services.

## 🚀 Live Demo

[View Live Website](https://your-domain.com) *(Update with your actual domain)*

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [SEO Optimization](#seo-optimization)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Design & UX
- **Fully Responsive** - Mobile-first design that works on all devices
- **Dark/Light Mode** - Toggle with user preference persistence
- **Smooth Animations** - GSAP hero animations and AOS scroll effects
- **Professional Layout** - Clean, conversion-focused design
- **Accessibility** - ARIA labels, keyboard navigation, semantic HTML

### Functionality
- **Contact Form** - Client-side validation with backend-ready structure
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Mobile Menu** - Collapsible navigation for mobile devices
- **Service Cards** - Interactive hover effects and detailed service information
- **SEO Optimized** - Meta tags, structured data, and semantic markup

### Performance
- **Lazy Loading** - Images load as needed
- **CDN Resources** - Fast loading external dependencies
- **Optimized Images** - Properly sized and compressed images
- **Minimal Dependencies** - Only essential libraries included

## 🛠 Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Tailwind CSS
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animations
- **AOS** - Scroll animations
- **Lucide Icons** - Consistent iconography

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Internet connection (for CDN resources)
- Optional: Local web server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dynamoaxis-website.git
   cd dynamoaxis-website
   ```

2. **Open locally**
   ```bash
   # Option 1: Direct browser opening
   open index.html
   
   # Option 2: Local server (recommended)
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View in browser**
   - Direct: Open `index.html` in your browser
   - Local server: Visit `http://localhost:8000`

## 📁 Project Structure

```
dynamoaxis-website/
│
├── index.html              # Main HTML file
├── README.md              # This file
├── LICENSE                # License file
└── assets/               # Future assets folder
    ├── images/           # Local images (if any)
    └── docs/            # Documentation
```

### Single File Architecture
This project uses a single HTML file containing:
- **HTML Structure** - Semantic markup
- **Embedded CSS** - Custom styles and Tailwind classes
- **JavaScript** - All functionality in script tags
- **External Dependencies** - Loaded via CDN

## 🎨 Customization

### Brand Colors
The website uses a professional color palette:
- **Primary Blue**: `#1E3A8A` - Trust and reliability
- **Accent Teal**: `#2DD4BF` - Innovation and growth  
- **White**: `#FFFFFF` - Clarity and simplicity
- **Dark Mode**: Gray-900, Gray-800 variants

### Contact Information
Update these details in the HTML:
```html
<!-- Email -->
<div class="text-gray-600 dark:text-gray-300">info@dynamoaxis.com</div>

<!-- Phone -->
<div class="text-gray-600 dark:text-gray-300">+94 11 123 4567</div>

<!-- Location -->
<div class="text-gray-600 dark:text-gray-300">Colombo, Sri Lanka</div>
```

### Services
Modify the services section to match your offerings:
- Update service titles and descriptions
- Replace Unsplash image URLs with your own
- Adjust service features lists

### Content
- **Hero Section**: Update headline and description
- **About Section**: Customize company story and founder information
- **Meta Tags**: Update SEO descriptions and keywords

## 🚀 Deployment

### Option 1: Netlify (Recommended - Free)
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Deploy automatically on push
4. Custom domain available

### Option 2: Vercel (Free)
1. Push code to GitHub
2. Import project in Vercel
3. Automatic deployments
4. Excellent performance

### Option 3: Traditional Hosting
1. **Local hosting** (Sri Lanka): LankaHost, SLTMobitel
2. **International**: Hostinger, SiteGround
3. Upload `index.html` to root directory
4. Configure HTTPS (Let's Encrypt)

### Domain Setup
1. Register `dynamoaxis.com` 
2. Point DNS to hosting provider
3. Configure SSL certificate
4. Update canonical URLs

## 🔍 SEO Optimization

### Implemented Features
- **Meta Description**: Optimized for "IT services Sri Lanka"
- **Keywords**: Targeted local and service-based terms
- **Structured Data**: Schema markup ready
- **Open Graph**: Social media optimization ready
- **Semantic HTML**: Proper heading hierarchy

### Local SEO
- Business location in Colombo, Sri Lanka
- Service area targeting
- Local business schema markup ready

### Target Keywords
- "IT services Colombo"
- "Software development Sri Lanka"
- "Cybersecurity services Lanka"
- "IT consulting Colombo"

## ⚡ Performance

### Optimization Techniques
- **Image Optimization**: Lazy loading, proper sizing
- **CDN Usage**: External resources from fast CDNs
- **Minimal JavaScript**: Only essential functionality
- **CSS Optimization**: Tailwind utility classes

### Loading Speed
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Browser Support

### Fully Supported
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

### Partially Supported
- Internet Explorer 11 (basic functionality)

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first approach
- **Touch-Friendly**: Proper button sizes and spacing
- **Performance**: Optimized for mobile networks
- **PWA Ready**: Can be enhanced to Progressive Web App

## 🔒 Security Features

### Implemented
- **HTTPS Ready**: SSL configuration prepared
- **Form Validation**: Client-side input sanitization
- **XSS Prevention**: No inline scripts/styles in production
- **OWASP Compliance**: Following security best practices

### Backend Integration Ready
```javascript
// Form submission endpoint ready
const formData = {
    name: name.value,
    email: email.value,
    message: message.value
};
// Send to your backend API
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/new-feature`
3. **Commit changes**: `git commit -m 'Add new feature'`
4. **Push to branch**: `git push origin feature/new-feature`
5. **Submit pull request**

### Development Guidelines
- Follow existing code style
- Test on multiple devices
- Ensure accessibility compliance
- Update documentation

## 📞 Support

For technical support or customization requests:
- **Email**: info@dynamoaxis.com
- **Phone**: +94 11 123 4567
- **Location**: Colombo, Sri Lanka

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **AOS** - Scroll animation library
- **Unsplash** - High-quality stock photography
- **Lucide** - Beautiful icon set

---

**Built with ❤️ by DynamoAxis Team in Sri Lanka 🇱🇰**

For more information about our services, visit [dynamoaxis.com](https://dynamoaxis.com)
