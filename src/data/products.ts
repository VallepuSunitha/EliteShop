export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  trending: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 124,
    category: "Electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    description: "Experience premium audio quality with these wireless headphones featuring active noise cancellation and 30-hour battery life.",
    features: ["Active Noise Cancellation", "30-hour battery", "Quick charge", "Premium build quality"],
    colors: ["Black", "White", "Silver"],
    sizes: [],
    inStock: true,
    trending: true,
    featured: true
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 89.99,
    rating: 4.5,
    reviews: 87,
    category: "Clothing",
    image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    description: "Timeless denim jacket crafted from premium cotton denim with a comfortable fit and classic styling.",
    features: ["100% Cotton", "Classic fit", "Durable construction", "Versatile styling"],
    colors: ["Blue", "Black", "Light Blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    trending: false,
    featured: false
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.7,
    reviews: 203,
    category: "Electronics",
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and comprehensive health insights.",
    features: ["Heart rate monitoring", "GPS tracking", "7-day battery", "Water resistant"],
    colors: ["Black", "White", "Rose Gold"],
    sizes: ["40mm", "44mm"],
    inStock: true,
    trending: true,
    featured: true
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 129.99,
    rating: 4.6,
    reviews: 156,
    category: "Accessories",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    description: "Elegant crossbody bag made from genuine leather with adjustable strap and multiple compartments.",
    features: ["Genuine leather", "Adjustable strap", "Multiple compartments", "Premium hardware"],
    colors: ["Brown", "Black", "Tan"],
    sizes: [],
    inStock: true,
    trending: false,
    featured: true
  },
  {
    id: 5,
    name: "Running Sneakers",
    price: 149.99,
    rating: 4.4,
    reviews: 298,
    category: "Shoes",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    description: "High-performance running shoes with advanced cushioning and breathable mesh upper.",
    features: ["Advanced cushioning", "Breathable mesh", "Durable outsole", "Lightweight design"],
    colors: ["White", "Black", "Blue"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    inStock: true,
    trending: true,
    featured: false
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.3,
    reviews: 89,
    category: "Electronics",
    image: "https://images.pexels.com/photos/4790264/pexels-photo-4790264.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/4790264/pexels-photo-4790264.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    description: "Fast wireless charging pad compatible with all Qi-enabled devices with sleek design.",
    features: ["Fast charging", "Qi compatible", "LED indicator", "Non-slip base"],
    colors: ["Black", "White"],
    sizes: [],
    inStock: true,
    trending: false,
    featured: false
  },
  {
    id: 7,
    name: "Casual Cotton T-Shirt",
    price: 24.99,
    rating: 4.2,
    reviews: 145,
    category: "Clothing",
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    description: "Comfortable cotton t-shirt perfect for everyday wear with a relaxed fit and soft feel.",
    features: ["100% Cotton", "Relaxed fit", "Pre-shrunk", "Machine washable"],
    colors: ["White", "Black", "Gray", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    trending: false,
    featured: false
  },
  {
    id: 8,
    name: "Professional Camera Lens",
    price: 799.99,
    rating: 4.9,
    reviews: 67,
    category: "Electronics",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    description: "Professional-grade camera lens with exceptional optical quality and weather sealing.",
    features: ["Weather sealed", "Image stabilization", "Fast autofocus", "Professional grade"],
    colors: ["Black"],
    sizes: [],
    inStock: true,
    trending: true,
    featured: true
  }
];

export const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Shoes",
  "Accessories"
];