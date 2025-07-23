# EliteShop - Responsive Interactive eCommerce Frontend

A modern, fully-featured eCommerce frontend built with React, TypeScript, and Tailwind CSS. This application provides a complete shopping experience with product browsing, cart management, filtering, and responsive design.

![EliteShop Preview](https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200)

## 🚀 Features

### Core Functionality
- **Product Browsing** - Grid-based product display with detailed information
- **Shopping Cart** - Add, remove, and update item quantities with persistence
- **Product Search** - Real-time search across product names and descriptions
- **Advanced Filtering** - Filter by category, price range, and sort options
- **Product Details** - Comprehensive product pages with image galleries
- **Wishlist** - Save favorite products for later
- **Responsive Design** - Optimized for mobile, tablet, and desktop

### User Experience
- **Dark/Light Theme** - Toggle between themes with system preference detection
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Loading States** - Visual feedback during interactions
- **Persistent Data** - Cart and preferences saved in localStorage
- **Mobile Navigation** - Collapsible menu for mobile devices

### Design Features
- **Modern UI** - Clean, professional design with gradient accents
- **Card-based Layout** - Elegant product cards with hover effects
- **Typography Hierarchy** - Clear information structure
- **Color System** - Comprehensive color palette with proper contrast
- **Interactive Elements** - Buttons, forms, and navigation with visual feedback

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.3.1** - Component-based UI library
- **TypeScript** - Type-safe JavaScript development
- **Vite 5.4.2** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Beautiful SVG icons
- **Custom CSS** - Additional animations and effects

### State Management
- **React Context API** - Global state management
- **useReducer** - Complex state logic for cart operations
- **localStorage** - Data persistence

### Routing & Navigation
- **React Router DOM 7.7.0** - Client-side routing

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eliteshop-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar with search and cart
│   ├── ProductCard.tsx # Individual product display card
│   └── ProductFilters.tsx # Filtering and sorting controls
├── context/            # React Context providers
│   ├── CartContext.tsx # Shopping cart state management
│   ├── ThemeContext.tsx # Dark/light theme management
│   └── WishlistContext.tsx # Wishlist functionality
├── data/               # Mock data and types
│   └── products.ts     # Product data and interfaces
├── pages/              # Main application pages
│   ├── HomePage.tsx    # Landing page with featured products
│   ├── ProductsPage.tsx # Product listing with filters
│   ├── ProductDetailPage.tsx # Individual product details
│   └── CartPage.tsx    # Shopping cart and checkout
├── App.tsx             # Main application component
├── App.css             # Custom styles and animations
├── main.tsx            # Application entry point
└── index.css           # Tailwind CSS imports
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) - Main brand color
- **Secondary**: Purple (#8B5CF6) - Accent and highlights
- **Success**: Green (#10B981) - Positive actions
- **Warning**: Orange (#F59E0B) - Alerts and notifications
- **Error**: Red (#EF4444) - Error states
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold weights (600-800) with proper hierarchy
- **Body Text**: Regular weight (400) with 150% line height
- **UI Elements**: Medium weight (500-600) for buttons and labels

### Spacing System
- **8px Grid System** - Consistent spacing throughout the application
- **Responsive Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:

- **Mobile (< 640px)**: Single column layout, collapsible navigation
- **Tablet (640px - 1024px)**: Two-column product grid, adapted filters
- **Desktop (> 1024px)**: Multi-column layouts, sidebar filters

## 🔧 Key Components

### CartContext
Manages shopping cart state with the following features:
- Add items to cart with variant selection
- Update item quantities
- Remove items from cart
- Calculate totals and item counts
- Persist cart data in localStorage

### ThemeContext
Handles dark/light theme switching:
- System preference detection
- Manual theme toggle
- Persistent theme selection
- CSS class management for theme application

### ProductFilters
Advanced filtering system including:
- Category-based filtering
- Price range sliders
- Multiple sorting options
- Search functionality
- Mobile-responsive filter panel

## 🛒 Shopping Cart Features

- **Add to Cart** - Add products with selected variants
- **Quantity Management** - Increase/decrease item quantities
- **Remove Items** - Delete items from cart
- **Price Calculation** - Real-time total updates
- **Persistence** - Cart contents saved across sessions
- **Checkout Simulation** - Mock checkout process

## 🔍 Search & Filtering

### Search Functionality
- Real-time search across product names
- Search in product descriptions
- URL parameter support for search queries

### Filter Options
- **Categories**: Electronics, Clothing, Shoes, Accessories
- **Price Range**: Adjustable min/max sliders
- **Sort By**: Featured, Price (low/high), Rating, Newest

## 🎯 Performance Optimizations

- **Lazy Loading** - Components loaded on demand
- **Memoization** - Optimized re-renders with useMemo
- **Image Optimization** - Responsive images with proper sizing
- **Bundle Splitting** - Efficient code splitting with Vite

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your Git repository
- **GitHub Pages** - Use the built files
- **Any Static Host** - Upload the `dist` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pexels** - High-quality product images
- **Lucide** - Beautiful icon set
- **Tailwind CSS** - Utility-first CSS framework
- **React Team** - Amazing frontend library

## 📞 Support

For support, email support@eliteshop.com or create an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**