import React from 'react';
import styles from './Myprojects.module.css';

const projects = [
    {
        title: 'Bestway',
        description: `BW9 is committed to providing a premier, ever-evolving online gaming platform that prioritizes player satisfaction and safety. With a focus on secure transactions, fair gameplay, and attentive support, BW9 offers a wide range of gaming options, including live casino, slots, table games, and sports betting. As a registered trademark owned by Wyn Ventures Inc. and licensed by PAGCOR, BW9 emphasizes responsible gaming by prohibiting access to individuals under 21 and adhering to Anti-Money Laundering regulations. Established in 2022, BW9 is dedicated to fostering a community focused on delivering a fun, secure, and safe gaming experience for all players.`,
        image: '/Bestway.png',
        link: 'https://wmdesktop-staging.iegaming.io/'
    },
    // {
    //     title: 'Mail Box',
    //     description: `Discover the perfect mailbox for your needs at our website! Explore a range of stylish and functional mailboxes designed to complement your home. From classic to modern, find the ideal solution that adds both charm and security. Upgrade your curb appeal and receive mail in style with our diverse collection. Browse now for a better mailbox experience!`,
    //     image: '/path/to/mailbox.png',
    //     link: 'https://github.com/your-username/mailbox'
    // },
    // {
    //     title: 'Expense Tracker',
    //     description: `Effortlessly manage your finances with our intuitive Expense Tracker website. Gain control over your spending, track transactions, and achieve your financial goals with ease. Start your journey to financial wellness today!`,
    //     image: '/path/to/expensetracker.png',
    //     link: 'https://github.com/your-username/expensetracker'
    // }
];

const MyProjects: React.FC = () => {
    return (
        <section className={`xl:h-full md:h-screen w-screen  py-12  text-white ${styles.myproject}`}>
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
                            <p className="mb-4">{project.description}</p>
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
