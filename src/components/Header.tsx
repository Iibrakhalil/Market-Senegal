import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-700 shadow-md' : 'bg-green-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">🇸🇳 Sénégal Market</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products/women" className="text-white hover:text-yellow-300 transition-colors">Femmes</Link>
            <Link to="/products/men" className="text-white hover:text-yellow-300 transition-colors">Hommes</Link>
            <Link to="/products/children" className="text-white hover:text-yellow-300 transition-colors">Enfants</Link>
            <Link to="/products/home" className="text-white hover:text-yellow-300 transition-colors">Maison</Link>
            <Link to="/products/electronics" className="text-white hover:text-yellow-300 transition-colors">Électronique</Link>
            <Link to="/products/entertainment" className="text-white hover:text-yellow-300 transition-colors">Divertissement</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-white hover:text-yellow-300 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <button className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-md transition-colors">
              S'inscrire
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transition-colors">
              Se connecter
            </button>
            <Link 
              to="/sell" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
            >
              <ShoppingBag className="w-4 h-4 mr-1" />
              Vendre
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white hover:text-yellow-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/products/women"
              className="block px-3 py-2 text-white hover:bg-green-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Femmes
            </Link>
            <Link
              to="/products/men"
              className="block px-3 py-2 text-white hover:bg-green-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Hommes
            </Link>
            <Link
              to="/products/children"
              className="block px-3 py-2 text-white hover:bg-green-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Enfants
            </Link>
            <Link
              to="/products/home"
              className="block px-3 py-2 text-white hover:bg-green-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Maison
            </Link>
            <Link
              to="/products/electronics"
              className="block px-3 py-2 text-white hover:bg-green-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Électronique
            </Link>
            <Link
              to="/products/entertainment"
              className="block px-3 py-2 text-white hover:bg-green-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Divertissement
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-white hover:bg-green-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Panier
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <button className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-md transition-colors">
                S'inscrire
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transition-colors">
                Se connecter
              </button>
              <Link 
                to="/sell" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="w-4 h-4 mr-1" />
                Vendre
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;