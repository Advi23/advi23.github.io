import { useState } from 'react';

import choco from '../assets/choco_donut.gif';
import pink from '../assets/pink_donut.gif';
import purple from '../assets/purple_donut.gif';

const experiences = [
    {
        id: 1,
        title: "Student Researcher at Living with Robots Lab",
        link: '#',
        dates: "July 2024 - August 2024",
        description: 'This is a short description',
    },
    {
        id: 2,
        title: "Instructional Design Student Assistant at OnRamps",
        link: '#',
        dates: "July 2024 - August 2024",
        description: 'This is a short description',
    },
    {
        id: 3,
        title: "Cyber Operations Student at MIT BeaverWorks Summer Institute",
        link: '#',
        dates: "July 2024 - August 2024",
        description: 'This is a short description',
    },
];

export default function Experience() {
    const [current, setCurrent] = useState(0);

    const goToPrev = () => 
        setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);

    const goToNext = () =>
        setCurrent((prev) => (prev + 1) % experiences.length);

    const experience = experiences[current];
    return (
        <>
            <style>
                {`
                    @keyframes rollAcross {
                        from { transform: translateX(-40px) translateY(-50%);}
                        to { transform: translateX(100vw) translateY(-50%);}
                    }
                `}
            </style>

            <section id="experience" className="p-6 md:p-10 font-['Jua']">
                <h2 className="text-2xl mb-6">Experience</h2>

                {/* Carousel */}
                <div className="flex items-center gap-4">

                    {/* Left Arrow */}
                    <button
                        onClick={goToPrev}
                        className="text-2xl px-2 hover:text-gray-500"
                    >
                        ←
                    </button>

                    {/* Card */}
                    <div className="flex-1 bg-[#d9d9d9] rounded-lg p-8 min-h-[200px]">
                        <h3 className="text-xl mb-1">{experience.title}</h3>
                        <div className="flex gap-4 mb-4">
                            <a href={experience.link} className="text-blue-500 text-sm">
                                link
                            </a>
                            <span className="text-sm text-gray-600">{experience.dates}</span>
                        </div>
                        <p className="text-sm">{experience.description}</p>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className="text-2xl px-2 hover:text-gray-500"
                    >
                        →
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    {experiences.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-colors 
                                ${index==current ? 'bg-gray-600' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>

                {/* Donut Animation */}
                <div className="relative mt-6 overflow-hidden rounded-2xl h-32">
                    {[choco, pink, purple].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt=""
                            className="absolute top-1/2 h-48 w-48"
                            style={{
                                animation:'rollAcross 10s linear infinite',
                                animationDelay: `${i * -2}s`,
                                imageRendering: 'pixelated',
                            }}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}