import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={`bg-cover bg-center h-screen flex items-center justify-center text-white ${styles.hero}`}>
            <div className="text-center p-4 bg-black bg-opacity-50 rounded-lg">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 ">Hi, I'm Diganta Halder</h1>
                <p className="text-xl md:text-2xl mb-6 ">A passionate Software Developer</p>
                <a href="https://drive.google.com/file/d/1ncHAYDlTQml8H1MAI3TgA4zkAtG14P3G/view?usp=sharing" className={`text-white font-bold py-2 px-4 rounded animate-fadeIn delay-2s ${styles.hireme}`}>
                    Hire Me
                </a>
            </div>
        </section>
    );
};

export default Hero;
