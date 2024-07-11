import React from 'react';
import styles from './Myprojects.module.css';

const projects = [
    {
        title: 'Bestway-Desktop',
        description: `BW9 is dedicated to providing a high-quality online gaming platform that puts player satisfaction and safety first. We prioritize secure transactions, fair gameplay, and attentive support. Our wide range of gaming options includes live casino, slots, table games, and sports betting. BW9 is a registered trademark owned by Wyn Ventures Inc. and licensed by PAGCOR. We are committed to responsible gaming and do not allow individuals under 21 to access our platform. We also adhere to Anti-Money Laundering regulations. Established in 2022, BW9 is focused on building a community that offers a fun, secure, and safe gaming experience for all players. Please note that our platform is only compatible with tablets, laptops, and desktops; for mobile-friendly gaming, please visit Bestway-Mobile.`,
        image: '/Bestway.png',
        link: 'https://wmdesktop-staging.iegaming.io/'
    },
    {
        title: 'Bestway-Mobile',
        description: `BW9 is dedicated to providing a high-quality online gaming platform that puts player satisfaction and safety first. We prioritize secure transactions, fair gameplay, and attentive support. Our wide range of gaming options includes live casino, slots, table games, and sports betting. BW9 is a registered trademark owned by Wyn Ventures Inc. and licensed by PAGCOR. We are committed to responsible gaming and do not allow individuals under 21 to access our platform. We also adhere to Anti-Money Laundering regulations. Established in 2022, BW9 is focused on building a community that offers a fun, secure, and safe gaming experience for all players.`,
        image: '/Bestway-mobile.png',
        link: 'https://wmplayer-staging.iegaming.io/'
    },
    {
        title: 'GeniusForge',
        description: `Welcome to our AI-powered content generator platform, where creativity meets efficiency. With our advanced artificial intelligence technology, you can effortlessly generate high-quality and engaging content for your various needs. Whether you are a blogger, marketer, or business owner looking to boost your online presence, our innovative tool provides endless possibilities. Say goodbye to writer's block and hello to limitless content creation potential. Try our AI content generator today and revolutionize the way you create content.`,
        image: '/genius-forge.png',
        link: 'https://genius-forge.vercel.app/'
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
