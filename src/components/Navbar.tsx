import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`text-white p-4 ${styles.navbar}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <img src='/logo.png' alt='logo' className="h-8" />
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to='/' className="hover:underline">Home</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/projects" className="hover:underline">Projects</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <Link to='/' className="block hover:underline">Home</Link>
                    <Link to="/about" className="block hover:underline">About</Link>
                    <Link to="/projects" className="block hover:underline">Projects</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
