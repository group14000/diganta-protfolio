import React from 'react';
import styles from './Hero.module.css';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
    return (
        <section className={`xl:h-full md:h-screen w-screen py-12 ${styles.hero}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold text-white">
                            Hi, I'm <span className={styles.h1tage}>Diganta Halder</span>
                        </h1>
                        <p className={`mt-4 text-lg text-gray-200 ${styles.h1tage}`}>A passionate MERN Stack Developer</p>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <img src='/person.png' alt='Diganta Halder' className="mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between mt-12 space-y-8 md:space-y-0'>
                    <div className="md:w-3/5 xl:text-left md:text-center">
                        <h2 className={`text-4xl font-semibold  ${styles.h1tage}`}>Profile Summary</h2>
                        <ul className="mt-4 text-lg text-gray-200 list-disc list-inside text-justify">
                            <li>Dynamic and results-driven Software Developer Engineer with hands-on experience in developing scalable web applications using React.js, Node.js, and related technologies.</li>
                            <li>Proven track record of optimizing performance, enhancing user experience, and delivering high-quality software solutions.</li>
                            <li>Seeking to leverage expertise in a challenging SDE role within a growth-oriented organization.</li>
                        </ul>
                    </div>
                    <div className="md:w-2/5 flex-shrink-0 flex justify-center md:justify-end">
                        <img src='/person-logo.svg' alt='person-logo' className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-lg" />
                    </div>
                </div>

                <div className="mt-12">
                    <Button className={`inline-block text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-105 ${styles.hireme}`}>
                        <a
                            href="https://drive.google.com/file/d/1U7bz6ipNopC529rLE9rvgpG6GlZ-5srm/view"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hire Me
                        </a>
                    </Button>
                </div>
            </div>
            <div className="mt-16 text-center">
                <h2 className={`text-2xl font-semibold ${styles.h1tage}`}>Find Me On</h2>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="https://www.instagram.com/digontahalder/?igsh=MWM2dmJwcWxhY2Q1MQ%3D%3D" target="_blank" rel="noopener noreferrer">
                        <img src='/instragram.svg' alt='Instagram' className="h-8 w-8 hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://github.com/group14000" target="_blank" rel="noopener noreferrer">
                        <img src='/github.svg' alt='GitHub' className="h-8 w-8 hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://www.linkedin.com/in/diganta-halder-aa7a141a2/" target="_blank" rel="noopener noreferrer">
                        <img src='/linkedin.svg' alt='LinkedIn' className="h-8 w-8 hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="mailto:digantahalder14000@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src='/mail.svg' alt='Mail' className="h-8 w-8 hover:opacity-80 transition-opacity" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
