// import { useState, useEffect, useRef } from 'react';
import { useState } from 'react';
import { RiExternalLinkLine } from "react-icons/ri";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

// import choco from '../assets/choco_donut.gif';
// import pink from '../assets/pink_donut.gif';
// import purple from '../assets/purple_donut.gif';

const experiences = [
    {
        id: 1,
        title: "Autonomous Robotics Student Researcher",
        link: 'https://fri.cns.utexas.edu/research-streams/autonomous-robots',
        dates: "January 2026 - Present",
        description: "As a student researcher in the Autonomous Robots FRI (Freshman Research Initiative) stream under Dr. Justin Hart, I focus on the goal of broadly capable service robots. A few interesting projects I've worked on include object identification using OpenCV, QR based following using spatial transformations, task planning with PDDL, and a Dining Hall Bot (mentioned above).", 
        skills: ['GitHub', 'ROS Topics', 'Python', 'C++', 'OpenCV', 'PDDL', 'RViz', 'Robot Navigation', 'Analyzing Research Papers'
        ]
    },
    {
        id: 2,
        title: "Instructional Design Student Assistant at OnRamps",
        link: 'https://onramps.utexas.edu/',
        dates: "January 2026 - May 2026",
        description: ["As an Instructional Design Student Assistant, I contribute to OnRamps' mission of increasing access to advanced academic courses to students. I have been a long-time advocate of equal access to education, going back to before high school.",
            " Responsibilities include altering various courses to align with state accessibility standards and using HTML and CSS to modify course designs. Extensive knowledge in spreadsheets, Microsoft PowerPoints, and soft skills such as communication among cross-team projects."
        ],
        skills: ['HTML/CSS', 'Smartsheet', 'Communication', 'Project Management']
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
            <h2 className="mb-6 text-3xl border border-white/40 backdrop-blur-md bg-white/30 rounded-lg px-4 py-2 w-fit text-[#422308] italic shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default">
                experience: long term commitments and learning
            </h2>

            {/* Carousel */}
            <div className="flex items-center gap-4">

                {/* Left Arrow */}
                <button
                    onClick={goToPrev}
                    className="text-2xl px-2 hover:text-gray-500"
                >
                    <FaArrowAltCircleLeft className="w-8 h-8 text-[#422308]"/>
                </button>

                {/* Card */}
                <div className="flex-1 shadow-2xl backdrop-blur-md bg-[#422308]/90 rounded-lg p-8 min-h-[200px]">
                    <h3 className="text-2xl mb-1 text-[#fff7c2]">{experience.title}</h3>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-lg text-white italic">{experience.dates}</span>
                        <a
                            href={experience.link}
                            target="_blank"
                        >
                            <RiExternalLinkLine className="w-6 h-6 text-white"/>
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {experience.skills.map((skill) => (
                            <span
                                key={skill}
                                onClick={(e) => e.stopPropagation()}
                                className="px-3 py-1 bg-white text-[#422308] rounded-lg text-md cursor-pointer transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <p className="text-lg text-white">{experience.description}</p>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={goToNext}
                    className="text-2xl px-2 hover:text-gray-500"
                >
                    <FaArrowAltCircleRight className="w-8 h-8 text-[#422308]"/>
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {experiences.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-colors 
                            ${index==current ? 'bg-[#422308]' : 'bg-[#422308]/30'
                        }`}
                    />
                ))}
            </div>

            {/* <RollingDonuts /> */}
        </section>
    );
}