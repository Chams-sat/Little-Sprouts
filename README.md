# Little Sprouts Kindergarten Website

A vibrant, responsive website for Little Sprouts Kindergarten, designed to showcase the nurturing environment, programs, and activities offered to young children. This project serves as a prototype demonstrating modern web development skills, including internationalization (English and Arabic), responsive design, and interactive features.

<p align="center">
  <img src="public/Little.png" alt="Project Screenshot" width="80%" />
</p>

## 🚀 Live Demo

[View Live Demo](https://chams-sat.github.io/Little-Sprouts/)


## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices using Tailwind CSS.
- **Bilingual Support**: Switch between English and Arabic with full RTL (Right-to-Left) support for Arabic.
- **Interactive Elements**: Mobile-friendly navigation menu, smooth scrolling, hover effects, and form handling.
- **Child-Friendly UI**: Colorful, engaging design with custom fonts and icons to appeal to families and children.
- **Sections Included**:
  - Hero section with call-to-action
  - About Us with mission, vision, and staff profiles
  - Programs (Toddlers, Preschool, Pre-K) with expandable details
  - Daily activities and rhythm
  - Testimonials from parents
  - Photo gallery
  - News and events with calendar
  - Online registration process
  - Contact form and information
- **Accessibility**: Basic accessibility features with semantic HTML and keyboard navigation.

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for structure.
- **CSS3**: Custom styles with CSS variables for theming, integrated with Tailwind CSS for utility-first styling.
- **JavaScript (ES6+)**: Interactive functionality including language switching, mobile menu, and form submissions.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development (loaded via CDN for simplicity).
- **Google Fonts**: Fredoka and Gaegu fonts for a playful, child-friendly typography.
- **Material Symbols**: Icons for visual elements.

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- Optional: Python 3 or Node.js for local development server.

### Installation

1. **Clone or Download the Project**:
   ```bash
   git clone <your-repo-url>
   cd little-sprouts-kindergarten
   ```

2. **Serve the Files Locally** (Optional, for development):
   - Using Python:
     ```bash
     python3 -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.
   - Using Node.js (if you have `http-server` installed):
     ```bash
     npx http-server
     ```

3. **View the Website**:
   - Simply open `index.html` in your browser for a quick preview.
   - For full functionality (e.g., language switching), serve it via a local server to avoid CORS issues.

### Usage

- **Navigation**: Use the header menu to navigate sections. On mobile, tap the hamburger menu.
- **Language Switch**: Click the language button in the header to toggle between English and Arabic.
- **Forms**: Fill out the newsletter signup or contact form; submissions are logged to the console (for demo purposes).
- **Responsive Testing**: Resize your browser or use developer tools to test mobile responsiveness.

## 📁 Project Structure

```
little-sprouts-kindergarten/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles and variables
├── main.js             # JavaScript for interactivity
├── README.md           # This file
└── .DS_Store          # macOS system file (can be ignored)
```

## 🎨 Customization

- **Colors**: Modify CSS variables in `style.css` (e.g., `--primary: #FF6B6B`) to change the theme.
- **Content**: Update text in `index.html` and translations in `main.js`.
- **Fonts**: Change font imports in `index.html` and `.font-display` class in `style.css`.
- **Images**: Replace placeholder images with actual photos (currently using external URLs).

## 🔧 Development Notes

- **Production Considerations**: For production, install Tailwind CSS locally, optimize images, and integrate backend for form handling.
- **Internationalization**: Translations are managed in `main.js`. For larger projects, consider using a library like i18next.
- **Performance**: Minimize external dependencies and consider lazy loading for images.
- **Accessibility**: Enhance with more ARIA labels and test with screen readers.

## 📸 Screenshots

*(Add screenshots here or link to a live demo)*

- **Home Page**: Hero section with bilingual support.
- **Programs**: Expandable program details.
- **Mobile View**: Responsive navigation menu.

## 🤝 Contributing

This is a prototype project. If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or suggestions:
- **Email**:shamssatour14@gmail.com
- **Phone**: (555) 123-4567 (demo)
- **Website**: [Little Sprouts Kindergarten](#) (link to live site if deployed)

---

Built by Chams for showcasing web development skills. Inspired by the joy of early childhood education!
