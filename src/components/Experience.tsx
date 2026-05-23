// import { useState, useEffect, useRef } from 'react';

// import choco from '../assets/choco_donut.gif';
// import pink from '../assets/pink_donut.gif';
// import purple from '../assets/purple_donut.gif';

// const experiences = [
//     {
//         id: 1,
//         title: "Student Researcher at Living with Robots Lab",
//         link: '#',
//         dates: "July 2024 - August 2024",
//         description: 'This is a short description',
//     },
//     {
//         id: 2,
//         title: "Instructional Design Student Assistant at OnRamps",
//         link: '#',
//         dates: "July 2024 - August 2024",
//         description: 'This is a short description',
//     },
//     {
//         id: 3,
//         title: "Cyber Operations Student at MIT BeaverWorks Summer Institute",
//         link: '#',
//         dates: "July 2024 - August 2024",
//         description: 'This is a short description',
//     },
// ];

// const DONUT_SIZE = 192;
// const DURATION_MS = 10000;

// function 

// export default function Experience() {
//     const [current, setCurrent] = useState(0);
//     const boxRef = useRef<HTMLDivElement>(null);
//     const [boxWidth, setBoxWidth] = useState(0);
//     const donutSize = 192;

//     useEffect(() => {
//         const update = () => {
//             if (boxRef.current) setBoxWidth(boxRef.current.offsetWidth)
//         };
//         update();
//         window.addEventListener('resize', update);
//         return () => window.removeEventListener('resize', update);
//     }, []);


//     const goToPrev = () => 
//         setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);

//     const goToNext = () =>
//         setCurrent((prev) => (prev + 1) % experiences.length);

//     const experience = experiences[current];
//     return (
//         <>
//             <style>
//                 {`
//                     @keyframes rollAcross-${boxWidth} {
//                         from { transform: translateX(-${donutSize}px) translateY(-50%);}
//                         to { transform: translateX(${boxWidth}px) translateY(-50%);}
//                     }
//                 `}
//             </style>

//             <section id="experience" className="p-6 md:p-10 font-['Jua']">
//                 <h2 className="text-2xl mb-6">Experience</h2>

//                 {/* Carousel */}
//                 <div className="flex items-center gap-4">

//                     {/* Left Arrow */}
//                     <button
//                         onClick={goToPrev}
//                         className="text-2xl px-2 hover:text-gray-500"
//                     >
//                         ←
//                     </button>

//                     {/* Card */}
//                     <div className="flex-1 bg-[#d9d9d9] rounded-lg p-8 min-h-[200px]">
//                         <h3 className="text-xl mb-1">{experience.title}</h3>
//                         <div className="flex gap-4 mb-4">
//                             <a href={experience.link} className="text-blue-500 text-sm">
//                                 link
//                             </a>
//                             <span className="text-sm text-gray-600">{experience.dates}</span>
//                         </div>
//                         <p className="text-sm">{experience.description}</p>
//                     </div>

//                     {/* Right Arrow */}
//                     <button
//                         onClick={goToNext}
//                         className="text-2xl px-2 hover:text-gray-500"
//                     >
//                         →
//                     </button>
//                 </div>

//                 <div className="flex justify-center gap-2 mt-4">
//                     {experiences.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrent(index)}
//                             className={`w-3 h-3 rounded-full transition-colors 
//                                 ${index==current ? 'bg-gray-600' : 'bg-gray-300'
//                             }`}
//                         />
//                     ))}
//                 </div>

//                 {/* Donut Animation */}
//                 <div className="relative mt-6 overflow-hidden rounded-2xl h-32">
//                     {[choco, pink, purple].map((src, i) => (
//                         <img
//                             key={i}
//                             src={src}
//                             alt=""
//                             className="absolute top-1/2 h-48 w-48"
//                             style={{
//                                 animation:`rollAcross-${boxWidth} 10s linear infinite`,
//                                 animationDelay: `${i * -3.33}s`,
//                                 imageRendering: 'pixelated',
//                             }}
//                         />
//                     ))}
//                 </div>
//             </section>
//         </>
//     )
// }

import { useState, useEffect, useRef } from 'react';

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

const DONUT_SIZE = 192;   // px — matches h-48 w-48
const DURATION   = 10000; // ms to cross the container

function DonutTrack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRefs      = useRef<(HTMLImageElement | null)[]>([]);
    const rafRef       = useRef<number>(0);

    useEffect(() => {
        const srcs    = [choco, pink, purple];
        const offsets = srcs.map((_, i) => (i / srcs.length) * DURATION); // evenly spread

        const tick = (timestamp: number) => {
            const containerWidth = containerRef.current?.offsetWidth ?? 0;
            const totalDistance  = containerWidth + DONUT_SIZE; // left edge to right edge

            srcs.forEach((_, i) => {
                const img = imgRefs.current[i];
                if (!img) return;
                // progress 0..1 repeating, each donut offset by its fraction
                const progress = ((timestamp + offsets[i]) % DURATION) / DURATION;
                const x = -DONUT_SIZE + progress * totalDistance;
                img.style.transform = `translateX(${x}px) translateY(-50%)`;
            });

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <div ref={containerRef} className="relative mt-6 overflow-hidden rounded-2xl h-32">
            {[choco, pink, purple].map((src, i) => (
                <img
                    key={i}
                    ref={(el) => { imgRefs.current[i] = el; }}
                    src={src}
                    alt=""
                    className="absolute top-1/2 h-48 w-48"
                    style={{ imageRendering: 'pixelated' }}
                />
            ))}
        </div>
    );
}

export default function Experience() {
    const [current, setCurrent] = useState(0);

    const goToPrev = () =>
        setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);

    const goToNext = () =>
        setCurrent((prev) => (prev + 1) % experiences.length);

    const experience = experiences[current];

    return (
        <section id="experience" className="p-6 md:p-10 font-['Jua']">
            <h2 className="text-2xl mb-6">Experience</h2>

            <div className="flex items-center gap-4">
                <button onClick={goToPrev} className="text-2xl px-2 hover:text-gray-500">←</button>

                <div className="flex-1 bg-[#d9d9d9] rounded-lg p-8 min-h-[200px]">
                    <h3 className="text-xl mb-1">{experience.title}</h3>
                    <div className="flex gap-4 mb-4">
                        <a href={experience.link} className="text-blue-500 text-sm">link</a>
                        <span className="text-sm text-gray-600">{experience.dates}</span>
                    </div>
                    <p className="text-sm">{experience.description}</p>
                </div>

                <button onClick={goToNext} className="text-2xl px-2 hover:text-gray-500">→</button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {experiences.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-colors 
                            ${index === current ? 'bg-gray-600' : 'bg-gray-300'}`}
                    />
                ))}
            </div>

            <DonutTrack />
        </section>
    );
}