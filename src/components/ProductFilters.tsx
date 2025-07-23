import React from 'react';
import { Filter, X } from 'lucide-react';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceChange,
  sortBy,
  onSortChange,
  isOpen,
  onToggle,
}) => {
  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filters Sidebar */}
      <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
          <button onClick={onToggle} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Sort By */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Sort By</h4>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Price Range</h4>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-600 dark:text-gray-400">Min Price: ${minPrice}</label>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={minPrice}
                onChange={(e) => onPriceChange(Number(e.target.value), maxPrice)}
                className="w-full mt-1"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 dark:text-gray-400">Max Price: ${maxPrice}</label>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={maxPrice}
                onChange={(e) => onPriceChange(minPrice, Number(e.target.value))}
                className="w-full mt-1"
              />
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => {
            onCategoryChange('All');
            onPriceChange(0, 1000);
            onSortChange('featured');
          }}
          className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </>
  );
};

export default ProductFilters;