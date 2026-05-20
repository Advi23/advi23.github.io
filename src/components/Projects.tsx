import { useState } from 'react';
import './Projects.css';

const projects = [
    {id: 1, title: 'Personal Website', link: '#', description: 'This is a short description'},
    {id: 2, title: 'Instructional Design Student Assistant @ OnRamps', link: '#', description: 'This is a short description'},
    {id: 3, title: 'System Emulator', link: '#', description: 'This is a short description'},
    {id: 4, title: 'Memory Manager', link: '#', description: 'This is a short description'},
    {id: 5, title: 'Student Researcher @ Living with Robots Lab', link: '#', description: 'This is a short description'},
    {id: 6, title: 'Huffman Encoding', link: '#', description: 'This is a short description'},
    {id: 7, title: 'Artistry', link: '#', description: 'This is a short description'},
    {id: 8, title: 'CyberWise', link: '#', description: 'This is a short description'},
    {id: 9, title: 'Cyber Operations Student @ MIT BeaverWorks Institute', link: '#', description: 'This is a short description'},
];

export default function Projects() {
    const [flipped, setFlipped] = useState<number | null>(null);

    return (
        <section id="projects" className="p-10 font-['Jua']">
            <h2 className="text-2xl mb-6">
                Experiences / Projects
                <span className="text-sm ml-2 text-gray-400">(flip to learn more)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="card-container"
                        onClick = {() =>
                            setFlipped(flipped==project.id ? null : project.id)
                        }
                    >
                        <div className={`card-inner ${flipped == project.id ? 'flipped' : ""}`}>
                            {/* Front of Card */}
                            <div className="card-face card-front bg-[#d9d9d9] rounded-lg p-6">
                                <p>{project.title}</p>
                                <a
                                    href={project.link}
                                    onClick={(e) => e.stopPropagation()} // prevents clicking link from flipping card
                                    className="text-blue-500 text-sm"
                                >
                                    link
                                </a>
                            </div>

                            {/* Back of Card */}
                            <div className="card-face card-back bg-[#d9d9d9] rounded-lg p-6">
                                <p className="text-sm">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}