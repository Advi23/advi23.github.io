import { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

import bread from '../assets/bread.png';
import breadShadow from '../assets/bread-shadow.png';
import compTIA from '../assets/comptia.jpg';
import learnX from '../assets/learnx.jpg';

const funFacts = [
    'Fun Fact 1',
    'Fun Fact 2',
    'Fun Fact 3',
];

const photos = [bread, breadShadow, compTIA, learnX];

export default function About() {
    const [factIndex, setFactIndex] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);

    const generateFact = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * funFacts.length);
        } while (factIndex == newIndex);
        setFactIndex(newIndex);
    };

    useEffect(() => {
            const interval = setInterval(() => {
                setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
            }, 4000); // sets up repeating timer
    
            return () => clearInterval(interval); // resets interval
            
        }, []);

    return (
        <section id="about" className="p-6 md:p-10 font-['Instrument_Serif']">
            <h2 className="text-2xl mb-6">About / Contact</h2>

            {/* Paragraph and Photo Carousel */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-[2] bg-[#d9d9d9] rounded-lg p-8">
                    <p>
                        This is a more personal description about my interests, motivation,
                        and character traits.
                    </p>
                </div>

                <div className="flex-1 bg-[#d9d9d9] rounded-lg p-4 flex flex-col items-center justify-center min-h-[200px]">
                    <img 
                        src={photos[photoIndex]}
                        alt="photo"
                        className="w-48 h-48 object-cover rounded"
                    />

                    <div className="flex gap-2 mt-3">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setPhotoIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors 
                                    ${index===photoIndex ? 'bg-gray-600' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Fun Fact Generator */}
            <div className="bg-[#d9d9d9] rounded-lg p-8 mb-6 flex flex-col items-center gap-6 text-center">
                <p className="text-lg">{funFacts[factIndex]}</p>
                <button
                    onClick={generateFact}
                    className="bg-red-700 text-white px-8 py-2 rounded text-sm hover:bg-red-800 transition-colors"
                >
                    Click Here
                </button>
            </div>

            {/* Contact Information */}
            <div className="bg-[#d9d9d9] rounded-lg p-8 w-full md:w-1/2">
                 <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3">
                        <FaEnvelope size={20} />
                        <a href="mailto:advikarapolu@gmail.com" className="text-sm hover:underline">
                            advikarapolu@gmail.com
                        </a>
                    </li>
                    <li className="flex items-center gap-3">
                        <FaLinkedin size={20} />
                        <a href="https://www.linkedin.com/in/advika-r-026a09252/" target="_blank" className="text-sm hover:underline">
                            linkedin.com/advika-r
                        </a>
                    </li>
                    <li className="flex items-center gap-3">
                        <FaEnvelope size={20} />
                        <a href="mailto:adr4354@eid.utexas.edu" className="text-sm hover:underline">
                            adr4354@eid.utexas.edu
                        </a>
                    </li>
                    <li className="flex items-center gap-3">
                        <FaGithub size={20} />
                        <a href="https://github.com/Advi23" target="_blank" className="text-sm hover:underline">
                            advi23
                        </a>
                    </li>
                </ul>       
            </div>

        </section>

    )
}

