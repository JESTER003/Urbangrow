import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ToggleButton from './ToggleButton'
import { FaHome, FaShoppingCart, FaBook, FaUserFriends, FaBlog, FaTools, FaLandmark } from 'react-icons/fa'

export function Navbar() {
  const { user, logout } = useAuth()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isWhatsAppEnabled, setIsWhatsAppEnabled] = useState(false)
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

  const toggleWhatsAppNotification = () => {
    setIsWhatsAppEnabled(!isWhatsAppEnabled)
  }

  return (
    <nav className="fixed top-0 left-0 h-full bg-white/80 backdrop-blur-md z-50 border-r w-16 md:w-48 lg:w-64">
      <div className="flex flex-col justify-between h-full">
        <div className="px-4 py-6">
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start space-x-2 text-emerald-600 hover:text-emerald-500 transition-colors mb-8"
          >
            <span className="text-xl font-bold hidden md:inline">UrbanGrow</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            {user?.role === 'user' && (
              <>
                <Link to="/" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaHome className="text-xl" />
                  <span className="hidden md:inline ml-2">Home</span>
                </Link>
                <Link to="/shop" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaShoppingCart className="text-xl" />
                  <span className="hidden md:inline ml-2">Shop</span>
                </Link>
                <Link to="/learn" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaBook className="text-xl" />
                  <span className="hidden md:inline ml-2">Learn</span>
                </Link>
                <Link to="/mentors" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaUserFriends className="text-xl" />
                  <span className="hidden md:inline ml-2">Mentors</span>
                </Link>
              </>
            )}
            {user?.role === 'mentor' && (
              <>
                <Link to="/" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaHome className="text-xl" />
                  <span className="hidden md:inline ml-2">Home</span>
                </Link>
                <Link to="/shop" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaShoppingCart className="text-xl" />
                  <span className="hidden md:inline ml-2">Shop</span>
                </Link>
                <Link to="/request" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaShoppingCart className="text-xl" />
                  <span className="hidden md:inline ml-2">Request</span>
                </Link>
                <Link to="/community" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaUserFriends className="text-xl" />
                  <span className="hidden md:inline ml-2">Community</span>
                </Link>
                <Link to="/blog" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaBlog className="text-xl" />
                  <span className="hidden md:inline ml-2">Blog</span>
                </Link>
                <Link to="/equipmentshare" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaTools className="text-xl" />
                  <span className="hidden md:inline ml-2">Equipment Share</span>
                </Link>
                <Link to="/schemes" className="flex items-center justify-center md:justify-start text-gray-600 hover:text-emerald-500 transition-colors">
                  <FaLandmark className="text-xl" />
                  <span className="hidden md:inline ml-2">Govt. Schemes</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Profile Section */}
        <div className="px-4 py-6">
          {user ? (
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center justify-center md:justify-start space-x-2 text-gray-600 hover:text-emerald-500 focus:outline-none"
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
                <div className="absolute bottom-12 left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
            <div className="flex flex-col space-y-4">
              <Link
                to="/login"
                className="inline-flex items-center justify-center md:justify-start px-4 py-2 border border-transparent text-sm font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center md:justify-start px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Sign up
              </Link>
            </div>
          )}

          {/* WhatsApp Notification Toggle */}
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-4">
            <span className="hidden md:inline text-gray-600">WhatsApp Notifications</span>
            <ToggleButton isEnabled={isWhatsAppEnabled} onToggle={toggleWhatsAppNotification} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

