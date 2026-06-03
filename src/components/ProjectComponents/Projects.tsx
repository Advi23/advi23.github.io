import { useState, useRef } from 'react';
import './Projects.css'
import { projects } from './Projects.ts';
import ProjectCard from './ProjectCard';

import cheesecake from '../../assets/cheesecake.gif';
import croissant from '../../assets/croissant.gif';
import roll from '../../assets/roll.gif';

const desserts = [cheesecake, croissant, roll];

export default function Projects() {
    const [flipped, setFlipped] = useState<Set<number>>(new Set());
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const toggleFlip = (id : number) => {
        setFlipped((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    }

    const handleScroll = () => {
        if (!scrollRef.current)
            return;
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.offsetWidth;
        setActiveIndex(Math.round(scrollLeft/cardWidth));
    }

    return (
        <section id="projects" className="p-10 font-['Instrument_Serif']">
            <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-3xl border border-white/40 backdrop-blur-md bg-white/30 rounded-lg px-4 py-2 w-fit text-[#422308] italic shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default active:scale-110 active:shadow-2xl">
                    projects: a catalog of exploration, late-nights, and growth
                </h2>
                <p className="text-lg border border-[#d8c4aa]/40 backdrop-blur-md bg-[#d8c4aa]/50 rounded-lg px-4 py-2 text-[#422308] w-fit">
                    (flip the cards for skills and more info)
                </p>
            </div>

            <div className="md:hidden">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-2xl"
                    style={{scrollbarWidth: 'none'}}
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            flipped={flipped.has(project.id)}
                            onFlip = {() => toggleFlip(project.id)}
                        />
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-3">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                scrollRef.current?.scrollTo({
                                    left: index * scrollRef.current.offsetWidth,
                                    behavior: 'smooth',
                                });
                            }}
                            className={`w-4 h-4 rounded-full transition-all duration-300
                                ${index === activeIndex ? 'bg-[#422308]' : 'bg-[#422308]/30'}
                            `}
                        />
                    ))}
                </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        flipped={flipped.has(project.id)}
                        onFlip = {() => toggleFlip(project.id)}
                    />
                ))}
            </div>

            <div className="mt-12 bg-[#422308] rounded-2xl px-10 md:px-24 py-4 flex items-center justify-between mx-auto w-fit md:gap-10">
                {desserts.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt=""
                        className="h-20 w-20 md:h-24 md:w-24 object-contain"
                        style={{imageRendering: 'pixelated'}}
                    />
                ))}
            </div>
        </section>
    )
}