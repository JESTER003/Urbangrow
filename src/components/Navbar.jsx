import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'

export function Navbar() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const profileDropdownRef = useRef(null)

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    setIsProfileOpen(false)
  }

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)
    setIsLanguageOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-500 transition-colors"
          >
            <span className="text-xl font-bold">UrbanGrow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-emerald-500 transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-emerald-500 transition-colors">Shop</Link>
            <Link to="/learn" className="text-gray-600 hover:text-emerald-500 transition-colors">Learn</Link>
            <Link to="/mentors" className="text-gray-600 hover:text-emerald-500 transition-colors">Mentors</Link>
            <Link to="/community" className="text-gray-600 hover:text-emerald-500 transition-colors">Community</Link>
            <Link to="/blog" className="text-gray-600 hover:text-emerald-500 transition-colors">Blog</Link>

            {/* Language Selector */}
            {/* <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center text-gray-600 hover:text-emerald-500 transition-colors focus:outline-none"
              >
                <span>{selectedLanguage}</span>
                <svg
                  className={`ml-2 h-5 w-5 transform transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <button
                      onClick={() => handleLanguageSelect('English')}
                      className={`block px-4 py-2 text-sm w-full text-left ${
                        selectedLanguage === 'English'
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      role="menuitem"
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageSelect('Hindi')}
                      className={`block px-4 py-2 text-sm w-full text-left ${
                        selectedLanguage === 'Hindi'
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      role="menuitem"
                    >
                      हिंदी (Hindi)
                    </button>
                  </div>
                </div>
              )}
            </div> */}

            {/* Profile Section */}
            {user ? (
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-emerald-500 focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    {user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}
                  </div>
                  <svg
                    className={`ml-1 h-5 w-5 transform transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {/* Profile Header */}
                      <div className="px-4 py-2 border-b">
                        <p className="text-sm font-medium text-gray-900">{user.name || 'User'}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>

                      {/* Profile Links */}
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Orders
                      </Link>
                      
                      {/* Logout Button */}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                        role="menuitem"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-emerald-500 focus:outline-none"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
            <Link
              to="/shop"
              className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/learn"
              className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Learn
            </Link>
            <Link
              to="/mentors"
              className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Mentors
            </Link>
            <Link
              to="/community"
              className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Community
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Blog
            </Link>
            <div className="px-3 py-2">
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>

            {/* Language Selector for Mobile */}
            <div className="px-3 py-2">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center w-full text-gray-600 hover:text-emerald-500"
              >
                <span>Language: {selectedLanguage}</span>
                <svg
                  className={`ml-2 h-5 w-5 transform transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isLanguageOpen && (
                <div className="mt-2 space-y-1">
                  <button
                    onClick={() => handleLanguageSelect('English')}
                    className={`block w-full px-3 py-2 text-left text-sm ${
                      selectedLanguage === 'English'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('Hindi')}
                    className={`block w-full px-3 py-2 text-left text-sm ${
                      selectedLanguage === 'Hindi'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    हिंदी (Hindi)
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Profile Section */}
            {user && (
              <div className="px-3 py-2 border-t">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    {user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{user.name || 'User'}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
                >
                  Your Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
                >
                  Settings
                </Link>
                <Link
                  to="/orders"
                  className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
                >
                  Your Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

