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
                    <a href="https://www.instagram.com/digontahalder/?igsh=MWM2dmJwcWxhY2Q1MQ%3D%3D" target="_blank" rel="noopener noreferrer">
                        <img src='/instragram.svg' alt='Instagram' className="h-8 w-8" />
                    </a>
                    <a href="https://github.com/group14000" target="_blank" rel="noopener noreferrer">
                        <img src='/github.svg' alt='GitHub' className="h-8 w-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/diganta-halder-aa7a141a2/" target="_blank" rel="noopener noreferrer">
                        <img src='/linkedin.svg' alt='LinkedIn' className="h-8 w-8" />
                    </a>
                    <a href="mailto:digantahalder14000@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src='/mail.svg' alt='Mail' className="h-8 w-8" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
