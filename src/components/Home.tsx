import { useState, useEffect } from 'react';
import coffee from '../assets/coffee_cup.gif'

import flan from '../assets/flan.gif';
import tiramisu from '../assets/tiramisu.gif';
import shortcake from '../assets/shortcake.gif';

const desserts = [flan, shortcake, tiramisu];
const titles = ["Student", "Artist", "Technologist", "Bakery Enthusiast"];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0); // stores index of currently displayed title
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000); // sets up repeating timer

        return () => clearInterval(interval); // resets interval
        
    }, []);

    return (
        <section id="home" className="flex items-center justify-center p-10 font-['Instrument_Serif']">
            <div className="flex flex-col gap-6 w-full items-center">
                <div className="flex flex-col md:flex-row gap-6 w-full">
                    <div className="flex-1 rounded-lg p-6 md:p-8 shadow-5xl backdrop-blur-md bg-[#422308] flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-normal mb-2 text-white italic">
                            Advika Rapolu:
                            </h1>
                            <h2 
                                key={currentIndex}
                                className="text-3xl md:text-5xl font-normal text-[#fff7c2] animate-[fadeIn_0.8s_ease-in-out] min-h-[4.5rem]"
                            >
                                {titles[currentIndex]}
                            </h2>
                        </div>
                        <img
                            src={coffee}
                            alt="coffee cup"
                            className="h-32 w-32 mr-5"
                            style={{ imageRendering: 'pixelated' }}
                        />
                    </div>
                    <div className="flex-1 bg-[#422308] rounded-lg p-6 md:p-8 shadow-2xl backdrop-blur-md bg-[#422308]/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default active:scale-105 active:shadow-2xl">
                        <p className="text-lg text-center text-white">
                            Hi, I am a sophomore at the University of Texas at Austin double majoring in
                            Computer Science and Math with minors in Statistics & Data Science 
                            and Business. I enjoy solving hard problems and am always open to new opportunities
                            that grow my boundaries. Interested in tech, robotics, research, and design roles.
                            Currently looking for Summer 2027 internships!
                        </p>
                    </div>
                </div>

                <div className="mt-12 bg-[#422308] rounded-2xl md:px-24 px-10 py-4 flex items-center justify-between mx-auto w-fit md:gap-10">
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
            </div>
        </section>
    );
}