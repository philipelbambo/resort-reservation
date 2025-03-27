import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing a search icon from React Icons

const Breadcrumb = ({ title, links }) => {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-200 via-pink-200 to-blue-400 p-4 rounded-lg shadow-md mb-4 w-full max-h-full mx-auto">
      <nav className="text-md text-white flex items-center gap-x-4">
        {links.map((link, index) => (
          <span key={index} className="flex items-center">
            <Link
              to={link.path} // Navigates to the specified path when clicked
              className="text-white hover:text-blue-700"
            >
              {link.name}
            </Link>
            {index < links.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
        <span className="text-gray-400">{title}</span>
      </nav>

      {/* Search Bar with Icon */}
      <div className="mt-4 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default Breadcrumb;
