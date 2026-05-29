import { useState } from 'react';
import './Projects.css'
import { projects } from './Projects.ts';
import ProjectCard from './ProjectCard';

export default function Projects() {
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
            <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-3xl border border-white/40 backdrop-blur-md bg-white/30 rounded-lg px-4 py-2 w-fit text-[#422308] italic shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default">
                    projects: a catalog of exploration, late-nights, and growth
                </h2>
                <p className="text-lg border border-[#d8c4aa]/40 backdrop-blur-md bg-[#d8c4aa]/50 rounded-lg px-4 py-2 text-[#422308] w-fit">
                    (flip the cards for skills and more info)
                </p>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        flipped={flipped.has(project.id)}
                        onFlip = {() => toggleFlip(project.id)}
                    />
                ))}
            </div>
        </section>
    )
}