import {
    SiCoursera,
    SiPearson,
} from 'react-icons/si';

import { useEffect, useRef } from 'react';
import compTIA from '../assets/skills/comptia.jpg';
import learnX from '../assets/skills/learnx.jpg';

interface Skill {
    logo: any,
    isIcon: boolean,
    size: number,
    label: string,
}

const skills: Skill[] = [
  { logo: learnX, isIcon: false, size: 200, label: "LearnX Python" },
  { logo: compTIA, isIcon: false, size: 240, label: "CompTIA Security+" },
  { logo: SiCoursera, isIcon: true, size: 200, label: "Coursera Machine Learning Specialization" },
  { logo: SiPearson, isIcon: true, size: 240, label: "Java IT Specialist" },
];

const DURATION_MS = 40000;

function SlidingCookies () {
    const containerRef = useRef<HTMLDivElement>(null); // reads pixel width
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const rafRef = useRef<number>(0); // stores requestAnimationFrame id to cancel on cleanup
    const startRef = useRef<number | null>(null);

    useEffect(() => {
        const tick = (timestamp : number) => {
            if (startRef.current === null) 
                startRef.current = timestamp;
            const elapsed = timestamp - startRef.current;

            const containerWidth = containerRef.current?.offsetWidth?? 0;

            skills.forEach((skill, i) => {
                const totalDistance = containerWidth + skill.size;
                const element = itemRefs.current[i];
                if (!element)
                    return;
                const offsetX = (i / skills.length) * totalDistance;
                const travelledX = (elapsed/DURATION_MS) * totalDistance;
                const x = ((travelledX + offsetX) % totalDistance) - skill.size;
                element.style.transform = `translateX(${x}px)`;
            });

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <div ref={containerRef} className="relative bg-[#422308] rounded-2xl h-40 overflow-hidden mx-auto">
            {skills.map((item, i) => (
                <div
                    key={i}
                    ref={(element) => { itemRefs.current[i] = element; }}
                    className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
                    style={{ width: item.size, height: item.size }}
                >
                    <div className="relative flex items-center justify-center">
                        { item.isIcon ? (
                            <item.logo size={45} className="relative z-10 text-white" />
                        ) : (
                            <img
                                src={item.logo}
                                alt=""
                                className="relative z-10 w-20 h-20 object-contain rounded"
                            />
                        )}
                    </div>
                    <span className="text-[#fff7c2] text-md text-center mt-2 leading-tight max-w-[120px]">
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="p-6 md:p-10 font-['Instrument_Serif']">
            <SlidingCookies/>
        </section>
    );
}
