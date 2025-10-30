import React, { useState } from 'react';
import { Search, Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link text-gray-700 hover:text-starbucks-green font-medium">
              Про каву Starbucks®
            </a>
            <a href="#" className="nav-link text-gray-700 hover:text-starbucks-green font-medium">
              Зробити вдома
            </a>
            <a href="#" className="nav-link text-gray-700 hover:text-starbucks-green font-medium">
              Дізнатися більше
            </a>
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/starbucks-logo.png" 
              alt="Starbucks" 
              className="h-12 w-12"
            />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Пошук"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-starbucks-green focus:border-starbucks-green sm:text-sm"
              />
            </div>

            {/* Language Selector */}
            <button className="flex items-center space-x-1 text-gray-700 hover:text-starbucks-green">
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">UA</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-starbucks-green focus:outline-none focus:text-starbucks-green"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-starbucks-green hover:bg-gray-50">
              Про каву Starbucks®
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-starbucks-green hover:bg-gray-50">
              Зробити вдома
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-starbucks-green hover:bg-gray-50">
              Дізнатися більше
            </a>
            <div className="px-3 py-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Пошук"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-starbucks-green focus:border-starbucks-green sm:text-sm"
                />
              </div>
            </div>
            <div className="px-3 py-2">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-starbucks-green">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">UA</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;