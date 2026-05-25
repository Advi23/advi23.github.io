import { useState } from 'react';
import './Projects.css';

const projects = [
    {id: 1, title: 'Personal Website', link: '#', description: 'This is a short description'},
    {id: 2, title: 'System Emulator', link: '#', description: 'This is a short description'},
    {id: 3, title: 'Memory Manager', link: '#', description: 'This is a short description'},
    {id: 4, title: 'Huffman Encoding', link: '#', description: 'This is a short description'},
    {id: 5, title: 'Artistry', link: '#', description: 'This is a short description'},
    {id: 6, title: 'CyberWise', link: '#', description: 'This is a short description'},
];

export default function Experience() {
    const [flipped, setFlipped] = useState<Set<number>>(new Set());

    const toggleFlip = (id : number) => {
        setFlipped((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    }

    return (
        <section id="projects" className="p-10 font-['Instrument_Serif']">
            <h2 className="text-2xl mb-6">
                Projects
                <span className="text-sm ml-2 text-gray-400">(flip to learn more)</span>
            </h2>
            {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
            <div className="flex overflow-x-auto gap-6 pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="card-container shrink-0 w-72 md:w-auto"
                        onClick = {() => toggleFlip(project.id)}
                    >
                        <div className={`card-inner ${flipped.has(project.id) ? 'flipped' : ''}`}>
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