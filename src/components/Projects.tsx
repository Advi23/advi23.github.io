import { useState } from 'react';
import './Projects.css';
import { RiExternalLinkLine } from "react-icons/ri";

const projects = [
    {id: 1, title: 'Personal Website', link: '', 
        description: 'My personal portfolio, built to showcase my interests, experience, and personality. Deployed via GitHub pages with a custom CI/CD pipeline. Fully responsive with custom design elements, animations, and mobile optimization.',
        skills: ['React', 'Typescript', 'Vite', 'Tailwind CSS', 'Figma']},
    {id: 2, title: 'ARM Processor', link: '', 
        description: 'Developed an in-order, pipelined processor for the charm-v5 subset of ARM instructions. Includes branch prediction, hazard control, and instruction forwarding. Also implemented a cache control simulator with LRU replacement and write-allocate policies.',
        skills: ['C', 'ARM Assembly', 'GDB', 'Git']
    },
    {id: 3, title: 'Memory Manager', link: '', 
        description: 'Designed a custom dynamic memory allocator featuring a heap consistency checker. Using a binned free list approach with deferred coalescing. Optimized system design for throughput and space utilization via block splitting, placement, and free block insertion strategies.',
        skills: ['C', 'System Design', 'GDB', 'Git']
    },
    {id: 4, title: 'Huffman Encoding', link: '', 
        description: 'Built a lossless data compression algorithm with unambiguous decoding based on optimal prefix coding. Built a character frequency table using a HashMap, a min-heap Priority Queue to greedily merge two lowest frequency nodes at each step, and a Huffman binary tree.',
        skills: ['Java', 'Data Structures', 'Encoding Algorithm']
    },
    {id: 5, title: 'Artistry', link: 'https://github.com/Advi23/Artistry', 
        description: 'An educational and recreational app built to teach users art history. Pulling data from the Art Institute of Chicago API, provides user-selected, custom curated artworks. Features include saving images, a quiz on generated artworks, and unique animations such as a carousel.',
        skills: ['Java', 'JSON', 'REST API Integration', 'Project Documentation', 'Canva Design', 'GitHub']
    },
    {id: 6, title: 'CyberWise', link: 'https://github.com/Advi23/CyberWise', 
        description: 'An educational app designed to promote cybersecurity awareness. It offers interactive features like quizzes, games, and tips on topics such as password security, phishing attacks, social media privacy, and digital citizenship. The goal is to help users improve their online safety and become more responsible digital citizens.',
        skills: ['Swift', 'SwiftUI', 'Logo Design', 'Cybersecurity']
    },
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
            <div className="flex overflow-x-auto gap-6 pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="card-container shrink-0 w-100 md:w-auto"
                        onClick = {() => toggleFlip(project.id)}
                    >
                        <div className={`card-inner ${flipped.has(project.id) ? 'flipped' : ''}`}>
                            {/* Front of Card */}
                            <div className="card-face card-front shadow-2xl backdrop-blur-md bg-[#422308]/90 rounded-lg p-6">
                                <div className="flex items-center gap-2 mb-3">
                                <p className="text-2xl text-white">{project.title}</p>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <RiExternalLinkLine className="w-6 h-6 text-white"/>
                                    </a>
                                )}
                                </div>
                                <p className="text-lg text-white">{project.description}</p>
                            </div>

                            {/* Back of Card */}
                            <div className="card-face card-back shadow-2xl backdrop-blur-md bg-[#422308]/90 rounded-lg p-6">
                                <p className="text-2xl text-white mb-3">Skills</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            onClick={(e) => e.stopPropagation()}
                                            className="px-3 py-1 bg-white text-[#422308] rounded-lg text-md cursor-pointer transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}