import { useState, useEffect } from 'react';

const titles = ["Student", "Artist", "Technologist", "Bakery Enthusiast", "Social Advocate"];

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
            <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex-1 bg-[#422308] rounded-lg p-6 md:p-8 shadow-2xl">
                    <h1 className="text-3xl md:text-5xl font-normal mb-2 text-white italic">
                        Advika Rapolu:
                    </h1>
                    <h2 
                        key={currentIndex}
                        className="text-3xl md:text-5xl font-normal text-[#fff7c2] animate-[fadeIn_0.8s_ease-in-out]"
                    >
                        {titles[currentIndex]}
                    </h2>
                </div>
                <div className="flex-1 bg-[#422308] rounded-lg p-6 md:p-8 shadow-2xl">
                    <p className="text-lg text-center text-white">
                        Hi, I am a sophomore at the University of Texas at Austin double majoring in
                        Computer Science and Math with minors in Statistics & Data Science 
                        and Business. Enjoy solving hard problems and always open to new opportunities
                        that grow my boundaries. Interested in tech, research, and design roles.
                        Currently looking for Summer 2027 internships!
                    </p>
                </div>
            </div>
        </section>
    );
}