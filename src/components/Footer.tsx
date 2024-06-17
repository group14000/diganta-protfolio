import React from 'react'
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={`text-white py-6 ${styles.footer}`}>
            <div className="container mx-auto flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
                <div className="text-center md:text-left">
                    <p>Designed and Developed by Diganta Halder</p>
                </div>
                <div className="text-center md:text-left">
                    <p>Copyright © 2024 DH</p>
                </div>
                <div className="flex space-x-4">
                    <img src='/instragram.svg' alt='instagram' className="w-6 h-6" />
                    <img src='/github.svg' alt='github' className="w-6 h-6" />
                    <img src='linkedin.svg' alt='linkedin' className="w-6 h-6" />
                    <img src='/mail.svg' alt='mail' className="w-6 h-6" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
