# HDF Media Production Platform

A modern, sleek, and minimalistic media production platform built with HTML, CSS, and JavaScript. Features a beautiful glass-morphism design with your brand colors (blue to purple gradient) and responsive layout.

## 🎨 Features

### Design & UI
- **Glass Morphism Effects**: Subtle glass effects with backdrop blur and transparency
- **Brand Colors**: Blue to purple gradient matching your HDF logo
- **Modern Typography**: Clean Inter font with proper hierarchy
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Micro-interactions and hover effects
- **Soft Shadows**: Elegant shadow system for depth

### Functionality
- **YouTube Video Integration**: Embed YouTube videos in portfolio section
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Statistics Animation**: Animated counters for statistics
- **Scroll to Top**: Convenient back-to-top button

### Sections
1. **Hero Section**: Eye-catching introduction with call-to-action
2. **Services**: Four main service categories with detailed descriptions
3. **Process**: Four-step workflow visualization
4. **Portfolio**: YouTube video showcase with tags
5. **Contact**: Contact form and information
6. **Footer**: Links and social media

## 🚀 Quick Start

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content and styling as needed

## 📁 File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎯 Customization Guide

### Changing Brand Colors

The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary-blue: #1e3a8a;
    --primary-purple: #7c3aed;
    --gradient-start: #1e3a8a;
    --gradient-end: #7c3aed;
    /* ... other variables */
}
```

### Adding YouTube Videos

Replace the placeholder YouTube URLs in the portfolio section:

```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

### Updating Content

1. **Services**: Modify the service cards in the services section
2. **Portfolio**: Add your actual video projects with YouTube links
3. **Contact**: Update contact information and form handling
4. **Statistics**: Adjust the numbers in the "Do You Know" section

### Adding New Sections

1. Create a new section in `index.html`
2. Add corresponding styles in `styles.css`
3. Include any JavaScript functionality in `script.js`

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Blue (#1e3a8a) to Purple (#7c3aed)
- **Neutral Grays**: 50-900 scale for text and backgrounds
- **Accent Colors**: Orange (#f97316) and Red (#ef4444)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Size Scale**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl

### Spacing
- **Consistent Scale**: xs, sm, md, lg, xl, 2xl, 3xl
- **Responsive**: Adapts to different screen sizes

### Components
- **Glass Cards**: Transparent backgrounds with blur effects
- **Buttons**: Primary and secondary styles with hover effects
- **Icons**: Font Awesome icons throughout the interface

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Performance Features

- **Lazy Loading**: YouTube videos load only when visible
- **Optimized Animations**: Hardware-accelerated CSS transitions
- **Minimal JavaScript**: Efficient event handling
- **CSS Variables**: Easy customization and maintenance

## 📧 Contact Form

The contact form includes:
- **Client-side validation**
- **Success/error notifications**
- **Form reset after submission**

To make it functional, you'll need to:
1. Set up a backend service (PHP, Node.js, etc.)
2. Configure email sending
3. Update the form action and method

## 🎬 YouTube Integration

The platform supports YouTube video embedding:
- **Responsive iframes**
- **Lazy loading** for performance
- **Custom styling** to match the design
- **Easy to update** video IDs

## 🔄 Updates and Maintenance

### Regular Updates
- Keep Font Awesome updated for icons
- Update Google Fonts if needed
- Test on new browser versions

### Content Updates
- Refresh portfolio videos regularly
- Update statistics and testimonials
- Keep contact information current

## 📄 License

This project is created for HDF Media Production. Feel free to modify and use for your business needs.

## 🤝 Support

For questions or customization help:
- Email: info@hdframes.co.uk
- Website: https://hdframes.co.uk

---

**Built with ❤️ for HDF Media Production**