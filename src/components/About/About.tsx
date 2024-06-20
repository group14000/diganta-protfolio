import React from 'react';
import styles from './About.module.css';

const skills = [
    { name: 'HTML', icon: '/html.svg' },
    { name: 'CSS', icon: '/css.svg' },
    { name: 'JavaScript', icon: '/javascript.svg' },
    { name: 'TypeScript', icon: '/typescript.svg' },
    { name: 'Node.js', icon: '/nodejs.svg' },
    { name: 'React', icon: '/react.svg' },
    { name: 'MySQL', icon: '/mysql.png' },
    { name: 'MongoDB', icon: '/mongodb.png' },
    { name: 'Next.js', icon: '/nextjs.svg' },
    { name: 'Git', icon: '/git.png' },
    { name: 'Github', icon: '/github.png' },
    { name: 'Docker', icon: '/docker.png' },
    { name: 'Express JS', icon: '/express js.png' },
    { name: 'REST API', icon: '/rest-api.png' },
    { name: 'Firebase', icon: '/firebase.png' },
    { name: 'Superbase', icon: '/superbase.png' },
    { name: 'Tailwind CSS', icon: '/tailwind-css.png' },
    { name: 'AntD', icon: '/ant-design.svg' },
    { name: 'Material UI', icon: '/material-ui.svg' },
    { name: 'Shad CN', icon: '/shad-cn.png' },
];

const tools = [
    { name: 'Vs Code', icon: '/vs code.png' },
    { name: 'Postman', icon: '/postman.svg' },
    { name: 'Clerk', icon: '/clerk.png' },
    { name: 'Vercel', icon: '/vercel.png' },
]

const About: React.FC = () => {
    return (
        <section className={`py-12 text-white ${styles.about}`}>
            <div className='flex flex-col lg:flex-row items-center justify-between '>
                <div className="max-w-3xl mx-auto px-6 lg:px-8  lg:w-1/2 text-justify">
                    <h2 className="text-5xl font-bold mb-6">
                        Know Who <span className="text-purple-500">I'M</span>
                    </h2>
                    <p className="text-lg mb-4">
                        Hi Everyone, I am <span className="text-purple-400">Diganta Halder</span> from <span className="text-purple-400">Bangalore, India</span>.
                    </p>
                    <p className="text-lg mb-4">
                        Targeting SDE roles with an organization of high repute with a scope of improving and further career growth.
                    </p>
                    <p className="text-lg mb-4">
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul className="list-none text-lg mb-8 space-y-2">
                        <li className="flex items-center">
                            <img src='/arrow-icon.svg' alt='Playing Games' className="h-6 w-6 mr-2" />
                            Playing Games
                        </li>
                        <li className="flex items-center">
                            <img src='/arrow-icon.svg' alt='Writing Tech Blogs' className="h-6 w-6 mr-2" />
                            Writing Tech Blogs
                        </li>
                        <li className="flex items-center">
                            <img src='/arrow-icon.svg' alt='Watching Anime' className="h-6 w-6 mr-2" />
                            Watching Anime
                        </li>
                    </ul>
                    <p className="italic text-purple-300">
                        "Aspire to create meaningful impact through your creations!"
                    </p>
                    <p className="text-purple-300">— Diganta</p>
                </div>
                <div className="lg:w-1/2 mt-12 lg:mt-0">
                    <img src='/person-pc.png' alt='Illustration' className="w-full max-w-lg mx-auto" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold mb-8">
                    Professional <span className="text-purple-500">Skillset</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-center p-6 bg-gray-800 border border-purple-500 rounded-lg">
                            <img src={skill.icon} alt={skill.name} className="h-12 w-12" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
                <h2 className="text-4xl font-bold mb-8">
                    Tech<span className="text-purple-500">{" "}Tools </span>I Use
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tools.map((tool) => (
                        <div key={tool.name} className="flex items-center justify-center p-6 bg-gray-800 border border-purple-500 rounded-lg">
                            <img src={tool.icon} alt={tool.name} className="h-12 w-12" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
