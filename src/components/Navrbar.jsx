// Navbar.jsx
import { useState } from 'react';
import { HomeIcon, BellIcon, UserIcon, MagnifyingGlassIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setDropdownOpen(false); // Close dropdown when sidebar is opened
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent sidebar close when clicking the dropdown
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 p-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl font-bold">Social Media</div>

          {/* Hamburger Icon for Sidebar */}
          <button onClick={toggleSidebar} className="text-white lg:hidden">
            &#9776; {/* Hamburger icon */}
          </button>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white p-1">
              <UserIcon className="h-5 w-5" /> {/* User icon */}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg">
                <button
                  onClick={toggleDropdown}
                  className="absolute top-1 right-1 rounded-full bg-red-400 text-white h-8 w-8 flex items-center justify-center"
                >
                  &times; {/* Close icon */}
                </button>
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">
                  <UserIcon className="h-5 w-5 inline mr-2" /> Profile
                </a>
                <a href="/signup" className="block px-4 py-2 hover:bg-gray-200">
                  <UserIcon className="h-5 w-5 inline mr-2" /> Sign Up
                </a>
                <a href="/signin" className="block px-4 py-2 hover:bg-gray-200">
                  <UserIcon className="h-5 w-5 inline mr-2" /> Sign In
                </a>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  <UserIcon className="h-5 w-5 inline mr-2" /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6 text-white ml-6">
            <a href="/" className="flex items-center hover:text-gray-300">
              <HomeIcon className="h-5 w-5 mr-1" /> Home
            </a>
            <a href="/messages" className="flex items-center hover:text-gray-300">
              <ChatBubbleLeftIcon className="h-5 w-5 mr-1" /> Message
            </a>
            <a href="/notifications" className="flex items-center hover:text-gray-300">
              <BellIcon className="h-5 w-5 mr-1" /> Notification
            </a>
          </div>

          {/* Search Input */}
          <div className="hidden lg:flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 lg:hidden" onClick={toggleSidebar}>
          <div className="absolute top-0 right-0 bg-gray-500 w-64 h-full p-1" onClick={(e) => e.stopPropagation()}>
            <button className="rounded-full bg-red-400 text-white h-8 w-8 flex items-center justify-center" onClick={toggleSidebar}>
              &times; {/* Close icon */}
            </button>
            <div className="flex flex-col space-y-4 mt-4">
              <div className="relative">
                <button onClick={toggleDropdown} className="text-gray-200 p-1">
                  <UserIcon className="h-5 w-5" /> User &#9662;
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-gray-100 text-black rounded shadow-lg">
                    <button
                      onClick={toggleDropdown}
                      className="absolute top-1 right-1 rounded-full bg-red-400 text-white h-8 w-8 flex items-center justify-center"
                    >
                      &times; {/* Close icon */}
                    </button>
                    <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">
                      <UserIcon className="h-5 w-5 inline mr-2" /> Profile
                    </a>
                    <a href="/signup" className="block px-4 py-2 hover:bg-gray-200">
                      <UserIcon className="h-5 w-5 inline mr-2" /> Sign Up
                    </a>
                    <a href="/signin" className="block px-4 py-2 hover:bg-gray-200">
                      <UserIcon className="h-5 w-5 inline mr-2" /> Sign In
                    </a>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                      <UserIcon className="h-5 w-5 inline mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
              <a href="/" className="flex items-center text-gray-200 hover:text-blue-600">
                <HomeIcon className="h-5 w-5 mr-1" /> Home
              </a>
              <a href="/messages" className="flex items-center text-gray-200 hover:text-blue-600">
                <ChatBubbleLeftIcon className="h-5 w-5 mr-1" /> Message
              </a>
              <a href="/notifications" className="flex items-center text-gray-200 hover:text-blue-600">
                <BellIcon className="h-5 w-5 mr-1" /> Notification
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
