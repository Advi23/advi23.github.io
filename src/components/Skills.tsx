// import {
//     FaNodeJs,
// } from 'react-icons/fa';

// import {
//     SiR,
//     SiCoursera,
//     SiPearson
// } from 'react-icons/si';

// import { useState } from 'react';
// import pink from '../assets/pink_plate.png';
// import blue from '../assets/blue_plate.png';
// import compTIA from '../assets/comptia.jpg';
// import learnX from '../assets/learnx.jpg';

// const skills = [
//   { label: 'Node.js', icon: FaNodeJs, image: null, color: '#339933' },
//   { label: 'CompTIA Security+', icon: null, image: compTIA, color: '#000000' },
//   { label: 'LearnX Python', icon: null, image: learnX, color: '#000000' },
//   { label: 'R', icon: SiR, image: null, color: '#276DC3' },
//   { label: 'Coursera Machine Learning Specialization', icon: SiCoursera, image: null, color: '#000000' },
//   { label: 'Java IT Specialist', icon: SiPearson, image: null, color: '#364395' },
// ];

// // const DONUT_SIZE = 192;
// // const DURATION_MS = 10000;

// // function RollingDonuts () {
// //     const containerRef = useRef<HTMLDivElement>(null); // reads pixel width
// //     const imgRefs = useRef<(HTMLImageElement | null)[]>([]); // references to each img element
// //     const rafRef = useRef<number>(0); // stores requestAnimationFrame id to cancel on cleanup

// //     useEffect(() => {
// //         const srcs = [choco, pink, purple];
// //         const offsets = srcs.map((_, index) => (index / srcs.length) * DURATION_MS); // evenly spacing donuts

// //         const tick = (timestamp : number) => {
// //             const container_width = containerRef.current?.offsetWidth ?? 0; // use 0 if ref isn't attached
// //             const total_distance = container_width + DONUT_SIZE;

// //             srcs.forEach((_, index) => {
// //                 const img = imgRefs.current[index];
// //                 if (!img) return;
// //                 const progress = ((timestamp + offsets[index]) % DURATION_MS) / DURATION_MS; // 0 - 1 value representing donut's progress
// //                 const x = -DONUT_SIZE + progress * total_distance;
// //                 img.style.transform = `translateX(${x}px) translateY(-50%)`;
// //             });

// //             rafRef.current = requestAnimationFrame(tick);
// //         };

// //         rafRef.current = requestAnimationFrame(tick);
// //         return () => cancelAnimationFrame(rafRef.current);
// //     }, []);

// //     return (
// //         <div ref={containerRef} className="relative mt-6 overflow-hidden rounded-2xl h-32">
// //             {[choco, pink, purple].map((src, i) => (
// //                 <img
// //                     key={i}
// //                     ref={(el) => {imgRefs.current[i] = el;}}
// //                     src={src}
// //                     alt=""
// //                     className="absolute top-1/2 h-48 w-48"
// //                     style={{
// //                         imageRendering: 'pixelated',
// //                     }}
// //                 />
// //             ))}
// //         </div>
// //     );
// // }

// // Function for each card
// function SkillCard ({skill}: {skill: typeof skills[0]}) {
//     const [ hovered, setHovered ] = useState(false);
//     const Icon = skill.icon;
//     const isMobile = window.innerWidth < 768;

//     return (
//         <div
//             className="flex flex-col items-center gap-2 cursor-default"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//         >
//             {/* plate with icon on top */}
//             <div className="relative w-25 h-25 md:w-50 md:h-50 flex items-center justify-center">
//                 <img
//                     src={hovered ? blue : pink}
//                     alt="plate"
//                     className="absolute inset-0 w-full h-full object-contain transition-all duration-200"
//                     style={{ imageRendering: 'pixelated' }}
//                 />

//                 <div className="relative z-10 flex items-center justify-center -translate-y-2">
//                     {Icon ? 
//                         (<Icon size={isMobile ? 25 : 50} color={skill.color} />) :
//                         skill.image ? 
//                         (
//                             <img
//                                 src={skill.image}
//                                 alt={skill.label}
//                                 className="w-6 h-6 md:w-15 md:h-15"
//                             />
//                         ) : (<span
//                             className="text-base font-bold text-center"
//                             style={{color:skill.color}}
//                         >
//                             {skill.label}
//                         </span>
//                     )}
//                 </div>
//             </div>
//             <span
//                 key={skill.label}
//                 className="px-3 py-1 bg-white text-[#422308] rounded-lg text-md md:text-md text-center max-w-[80px] md:max-w-[160px] leading-tight cursor-pointer transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
//             >
//                 {skill.label}
//             </span>
//         </div>
//     );
// }

// export default function Skills() {
//     const isMobile = window.innerWidth < 768;
//     const rows = isMobile ? chunkMobile(skills) : chunkAlternating(skills);

//     return (
//         <section id="skills" className="p-6 md:p-10 font-['Instrument_Serif']">
//             <h2 className="mb-6 text-3xl border border-white/40 backdrop-blur-md bg-white/30 rounded-lg px-4 py-2 w-fit text-[#422308] italic shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default">
//                 other skills and certifications
//             </h2>
//             <div className="flex flex-col md:gap-2">
//                 {rows.map((row, rowIndex) => (
//                     <div key={rowIndex} 
//                         className={`flex w-full gap-4 
//                             ${isMobile && row.length !== 3 ? 'justify-center' : 'justify-between'}
//                             ${!isMobile && rowIndex % 2 !== 0 ? 'px-[9.5%]' : ''}`}
//                     >
//                         {row.map((skill) => (
//                             <SkillCard key={skill.label} skill={skill} />
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
