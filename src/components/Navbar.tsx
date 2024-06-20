import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Define menu items as an array of objects
    const menuItems = [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Projects', to: '/projects' }
    ];

    return (
        <nav className={`text-white p-4 ${styles.navbar}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/">
                        <img src='/logo.png' alt='logo' className="h-8" />
                    </Link>
                </div>
                {/* Desktop navigation */}
                <div className="hidden md:flex space-x-4">
                    {/* Map through menuItems array */}
                    {menuItems.map((item, index) => (
                        <Link key={index} to={item.to} className="hover:underline">{item.text}</Link>
                    ))}
                </div>
                {/* Mobile navigation toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile menu dropdown */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    {/* Map through menuItems array for mobile */}
                    {menuItems.map((item, index) => (
                        <Link key={index} to={item.to} className="block hover:underline">{item.text}</Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
