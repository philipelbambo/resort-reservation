import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaChevronRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Breadcrumb = ({ title, links }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  // Animation variants
  const containerVariants = {
    collapsed: {
      height: 60,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    expanded: {
      height: 120,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const searchVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="bg-gradient-to-r from-blue-900 to-[#942e6d] p-4 rounded-2xl shadow-lg mb-4 w-full mx-auto overflow-hidden"
      initial={false}
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => !searchQuery && setIsExpanded(false)}
    >
      <div className="flex justify-between items-center">
        <nav className="text-md text-white flex items-center gap-x-2">
          {links.map((link, index) => (
            <span key={index} className="flex items-center">
              <Link
                to={link.path}
                className="text-white hover:text-blue-300 transition-colors duration-200"
              >
                {link.name}
              </Link>
              {index < links.length - 1 && (
                <FaChevronRight className="mx-2 text-xs opacity-70" />
              )}
            </span>
          ))}
          <span className="text-gray-300 ml-2">{title}</span>
        </nav>

        <motion.div 
          className="relative"
          initial="hidden"
          animate={isExpanded ? "visible" : "hidden"}
          variants={searchVariants}
          transition={{ duration: 0.2 }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value) setIsExpanded(true);
            }}
            placeholder="Search..."
            className="w-64 pl-10 pr-8 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800 transition-all duration-300"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {searchQuery && (
            <button 
              onClick={() => {
                setSearchQuery('');
                setIsExpanded(false);
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>
          )}
        </motion.div>
      </div>

      {isExpanded && searchQuery && (
        <motion.div 
          className="mt-2 bg-white bg-opacity-10 p-2 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Search results would go here */}
          <p className="text-white text-sm">Search results for: {searchQuery}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Breadcrumb;