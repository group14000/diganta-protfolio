import React from 'react';
import styles from './Myprojects.module.css';

const projects = [
    {
        title: 'Bestway-Desktop',
        description: `BW9 is dedicated to providing a high-quality online gaming platform that puts player satisfaction and safety first. We prioritize secure transactions, fair gameplay, and attentive support. Our wide range of gaming options includes live casino, slots, table games, and sports betting. BW9 is a registered trademark owned by Wyn Ventures Inc. and licensed by PAGCOR. We are committed to responsible gaming and do not allow individuals under 21 to access our platform. We also adhere to Anti-Money Laundering regulations. Established in 2022, BW9 is focused on building a community that offers a fun, secure, and safe gaming experience for all players. Please note that our platform is only compatible with tablets, laptops, and desktops; for mobile-friendly gaming, please visit Bestway-Mobile.`,
        image: '/Bestway.png',
        link: 'https://bw9.io/ph/d/popular'
    },
    {
        title: 'Sydney Financial',
        description: `Sydney Financials: Navigating Loan Structures & Downsizer Contributions

This document captures conversations from Sydney Financials, focusing on loan structures and government co-contributions. It provides key insights into eligibility criteria for downsizer contributions, including age requirements and the benefits for estate planning. A valuable guide for anyone looking to navigate property transactions and retirement planning, this resource addresses the complexities of financial assistance and investment strategies.

### Key Highlights:
- Detailed user interactions around financial assistance and loan structures.
- Insights on eligibility and benefits of downsizer contributions for property owners.
- Focus on the 2024 minimum age requirement for downsizer contributions.
- Clarification on qualifying property types for downsizer contributions.
- Overview of government co-contribution initiatives to enhance financial planning.
- Common user inquiries about retirement strategies and property investments.

This document serves as a useful guide for understanding the financial aspects of property ownership, loan structures, and retirement planning strategies.

`,
        image: '/sydney.png',
        link: 'https://sydneyfin1.aviaralabs.com/'
    },
];

const MyProjects: React.FC = () => {
    return (
        <section className={`xl:h-full md:h-screen w-screen py-12 text-white ${styles.myproject}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold mb-2">
                    My Recent <span className="text-purple-500">Works</span>
                </h2>
                <p className="mb-8">Here are a few projects I've worked on recently.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.title} className="bg-gray-800 border border-purple-500 rounded-lg p-6 flex flex-col items-center">
                            <img src={project.image} alt={project.title} className="mb-4 w-full h-48 object-cover rounded-lg" />
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="mb-4 text-justify">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition">
                                <i className="fab fa-github mr-2"></i>View
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyProjects;
