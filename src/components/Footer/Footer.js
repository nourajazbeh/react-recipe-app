import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`p-4 text-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-cyan-500 text-black'}`}>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p>123 Main Street</p>
          <p>New York, NY 10001</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" data-testid="fb-link">
              <FaFacebook className="text-black dark:text-white hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="li-link">
              <FaLinkedin className="text-black dark:text-white hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

