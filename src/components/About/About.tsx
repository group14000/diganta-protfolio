import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <div className={`xl:h-full md:h-screen w-screen py-12 ${styles.about}`}>
            Hi
        </div>
    );
};

export default About;
