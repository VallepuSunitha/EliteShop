# EliteShop - Responsive Interactive eCommerce Frontend

A modern, fully-featured eCommerce frontend built with React, TypeScript, and Tailwind CSS. This application provides a complete shopping experience with product browsing, cart management, filtering, and responsive design.

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


## Author
Sunitha Vallepu
