import {
    FaNodeJs,
} from 'react-icons/fa';

import {
    SiR,
    SiCoursera,
    SiPearson
} from 'react-icons/si';

import { useState } from 'react';
import pink from '../assets/pink_plate.png';
import blue from '../assets/blue_plate.png';
import compTIA from '../assets/comptia.jpg';
import learnX from '../assets/learnx.jpg';

const skills = [
  { label: 'Node.js', icon: FaNodeJs, image: null, color: '#339933' },
  { label: 'CompTIA Security+', icon: null, image: compTIA, color: '#000000' },
  { label: 'LearnX Python', icon: null, image: learnX, color: '#000000' },
  { label: 'R', icon: SiR, image: null, color: '#276DC3' },
  { label: 'Coursera Machine Learning Specialization', icon: SiCoursera, image: null, color: '#000000' },
  { label: 'Java IT Specialist', icon: SiPearson, image: null, color: '#364395' },
];

function chunkAlternating(arr: typeof skills) {
    const rows = [];
    let i = 0;
    let rowIndex = 0;
    while (i < arr.length) {
        const size = rowIndex % 2 == 0 ? 4 : 3;
        rows.push(arr.slice(i, i + size));
        i += size;
        rowIndex++;
    }

    return rows;
}

function chunkMobile(arr: typeof skills) {
    const rows = [];
    let i = 0;
    while (i < arr.length) {
        rows.push(arr.slice(i, i + 3));
        i += 3;
    }

    return rows;
}

// Function for each card
function SkillCard ({skill}: {skill: typeof skills[0]}) {
    const [ hovered, setHovered ] = useState(false);
    const Icon = skill.icon;
    const isMobile = window.innerWidth < 768;

    return (
        <div
            className="flex flex-col items-center justify-center cursor-default"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* plate with icon on top */}
            <div className="relative w-25 h-25 md:w-50 md:h-50 flex items-center justify-center">
                <img
                    src={hovered ? blue : pink}
                    alt="plate"
                    className="absolute inset-0 w-full h-full object-contain transition-all duration-200"
                    style={{ imageRendering: 'pixelated' }}
                />

                <div 
                    className="relative z-10"
                    style={{
                        marginTop: isMobile ? -25 : -35,
                        marginLeft: isMobile ? -10 : -15,
                    }}
                >
                    {Icon ? 
                        (<Icon size={isMobile ? 25 : 40} color={skill.color} />) :
                        skill.image ? 
                        (
                            <img
                                src={skill.image}
                                alt={skill.label}
                                className="w-6 h-6 md:w-10 md:h-10"
                            />
                        ) : (<span
                            className="text-base font-bold text-center"
                            style={{color:skill.color}}
                        >
                            {skill.label}
                        </span>
                    )}
                </div>
            </div>
            <span className="text-xs md:text-sm text-center text-gray-600 -mt-5 md:-mt-10">
                {skill.label}
            </span>
        </div>
    );
}

export default function Skills() {
    const isMobile = window.innerWidth < 768;
    const rows = isMobile ? chunkMobile(skills) : chunkAlternating(skills);

    return (
        <section id="skills" className="p-6 md:p-10 font-['Instrument_Serif']">
            <h2 className="mb-6 text-3xl border border-white/40 backdrop-blur-md bg-white/30 rounded-lg px-4 py-2 w-fit text-[#422308] italic shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default">
                other skills and certifications
            </h2>
            <div className="flex flex-col md:gap-2">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} 
                        className={`flex w-full gap-4 
                            ${isMobile && row.length !== 3 ? 'justify-center' : 'justify-between'}
                            ${!isMobile && rowIndex % 2 !== 0 ? 'px-[9.5%]' : ''}`}
                    >
                        {row.map((skill) => (
                            <SkillCard key={skill.label} skill={skill} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
