import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, User, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-5 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 bg-[#EFF1F0]/95 backdrop-blur-md border-b border-transparent">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-vitrus-dark rounded-br-xl rounded-tl-xl rounded-tr-sm rounded-bl-sm flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <span className="font-semibold text-xl tracking-tight text-vitrus-dark">Fit n Fab</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
        <Link to="/" className="text-sm font-medium text-gray-700 hover:text-vitrus-dark transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-vitrus-dark transition-colors">
          About Us
        </Link>
        <Link to="/workshop" className="text-sm font-medium text-gray-700 hover:text-vitrus-dark transition-colors">
          Workshops
        </Link>
        <Link to="/gallery" className="text-sm font-medium text-gray-700 hover:text-vitrus-dark transition-colors">
          Gallery
        </Link>
        <Link to="/#pricing" className="text-sm font-medium text-gray-700 hover:text-vitrus-dark transition-colors">
          Pricing
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate('/login')}
          className="hidden sm:flex items-center gap-2 bg-[#2C2C2C] text-white pl-4 pr-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-lg shadow-black/5"
        >
            <User className="w-4 h-4" />
            <span>Login</span>
        </button>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden bg-white p-2.5 rounded-full border border-gray-100 shadow-sm hover:bg-gray-50 flex items-center justify-center w-10 h-10"
        >
            {mobileMenuOpen ? <X className="w-4 h-4 text-gray-700" /> : <Menu className="w-4 h-4 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden border-t border-gray-100">
          <div className="flex flex-col p-6 space-y-4">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-vitrus-dark transition-colors py-2"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-vitrus-dark transition-colors py-2"
            >
              About Us
            </Link>
            <Link 
              to="/workshop" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-vitrus-dark transition-colors py-2"
            >
              Workshops
            </Link>
            <Link 
              to="/gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-vitrus-dark transition-colors py-2"
            >
              Gallery
            </Link>
            <Link 
              to="/#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-vitrus-dark transition-colors py-2"
            >
              Pricing
            </Link>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/login');
              }}
              className="flex items-center justify-center gap-2 bg-[#2C2C2C] text-white py-3 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-lg mt-4"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};