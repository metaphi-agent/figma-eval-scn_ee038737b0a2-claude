# E-commerce Website Template

A pixel-perfect React implementation of an e-commerce website template converted from Figma design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with layouts optimized for mobile, tablet, and desktop
- **Modern Tech Stack**: React 19 + Vite + Tailwind CSS v4
- **Interactive Components**: Hover effects, product cards with "Add to Cart" functionality
- **Accessibility**: Semantic HTML tags, ARIA labels, keyboard navigation support
- **Modular Architecture**: Clean component separation for maintainability

## 🏗 Architecture

### Components Structure
- **Header**: Navigation with search, cart, and responsive mobile menu
- **Hero**: Landing section with statistics and call-to-action
- **BrandLogos**: Partner brand showcase
- **ProductGrid**: Dynamic product listings with filtering capabilities
- **BrowseByStyle**: Category-based browsing interface
- **CustomerReviews**: Testimonial carousel
- **Newsletter**: Email subscription with validation
- **Footer**: Site links and social media integration

### Data Layer
- Structured mock data for products, categories, and reviews
- TypeScript interfaces for type safety
- Dynamic rendering with no hardcoded HTML

## 🎨 Design System

### Typography
- Primary font: Inter
- Hierarchy: 6 text sizes with proper weights
- Accessibility-compliant contrast ratios

### Colors
- Primary: Black (#000000) and White (#FFFFFF)
- Neutral grays: 50-900 range
- Semantic colors for success, warning, error states

### Interactive Elements
- Hover effects on product cards reveal "Add to Cart" buttons
- Smooth transitions and animations
- Touch-friendly mobile interface

## 🔧 Technical Implementation

### Responsive Design
- CSS Grid and Flexbox layouts
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile-first progressive enhancement

### Performance
- Vite build optimization
- Component code splitting
- Optimized bundle size

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

## 📱 Mobile Features

- Collapsible navigation menu
- Touch-optimized product cards
- Swipeable review carousel
- Mobile search interface

## ♿ Accessibility

- Semantic HTML5 structure (`nav`, `main`, `section`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- Focus indicators and proper contrast

## 🎯 Key Interactions

1. **Product Cards**: Hover reveals "Add to Cart" button with smooth animation
2. **Search**: Fully functional search bar with mobile optimization
3. **Navigation**: Responsive menu with dropdown categories
4. **Reviews**: Navigation arrows with keyboard support

## 📦 File Structure

```
src/
├── components/
│   ├── ui/
│   │   └── StarRating.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── BrandLogos.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   ├── BrowseByStyle.tsx
│   ├── CustomerReviews.tsx
│   ├── Newsletter.tsx
│   └── Footer.tsx
├── data/
│   └── products.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🔗 Live Demo

The application builds successfully and is ready for deployment to any static hosting platform.

---

*Converted from Figma design using Claude AI with pixel-perfect accuracy and modern web standards.*