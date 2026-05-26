// import { useState, useEffect, useRef } from 'react';
import { useState } from 'react';

// import choco from '../assets/choco_donut.gif';
// import pink from '../assets/pink_donut.gif';
// import purple from '../assets/purple_donut.gif';

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

// const DONUT_SIZE = 192;
// const DURATION_MS = 10000;

// function RollingDonuts () {
//     const containerRef = useRef<HTMLDivElement>(null); // reads pixel width
//     const imgRefs = useRef<(HTMLImageElement | null)[]>([]); // references to each img element
//     const rafRef = useRef<number>(0); // stores requestAnimationFrame id to cancel on cleanup

//     useEffect(() => {
//         const srcs = [choco, pink, purple];
//         const offsets = srcs.map((_, index) => (index / srcs.length) * DURATION_MS); // evenly spacing donuts

//         const tick = (timestamp : number) => {
//             const container_width = containerRef.current?.offsetWidth ?? 0; // use 0 if ref isn't attached
//             const total_distance = container_width + DONUT_SIZE;

//             srcs.forEach((_, index) => {
//                 const img = imgRefs.current[index];
//                 if (!img) return;
//                 const progress = ((timestamp + offsets[index]) % DURATION_MS) / DURATION_MS; // 0 - 1 value representing donut's progress
//                 const x = -DONUT_SIZE + progress * total_distance;
//                 img.style.transform = `translateX(${x}px) translateY(-50%)`;
//             });

//             rafRef.current = requestAnimationFrame(tick);
//         };

//         rafRef.current = requestAnimationFrame(tick);
//         return () => cancelAnimationFrame(rafRef.current);
//     }, []);

//     return (
//         <div ref={containerRef} className="relative mt-6 overflow-hidden rounded-2xl h-32">
//             {[choco, pink, purple].map((src, i) => (
//                 <img
//                     key={i}
//                     ref={(el) => {imgRefs.current[i] = el;}}
//                     src={src}
//                     alt=""
//                     className="absolute top-1/2 h-48 w-48"
//                     style={{
//                         imageRendering: 'pixelated',
//                     }}
//                 />
//             ))}
//         </div>
//     );
// }

export default function Experience() {
    const [current, setCurrent] = useState(0);

    const goToPrev = () => 
        setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);

    const goToNext = () =>
        setCurrent((prev) => (prev + 1) % experiences.length);

    const experience = experiences[current];
    return (
        <section id="experience" className="p-6 md:p-10 font-['Instrument_Serif']">
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

            {/* <RollingDonuts /> */}
        </section>
    );
}