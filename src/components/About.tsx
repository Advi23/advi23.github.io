import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

import ny_photo from '../assets/about/ny_photo.jpg';
import ut from '../assets/about/ut.jpeg';
import w_chibi from '../assets/about/w_chibi.jpeg';
import atx_lake from '../assets/about/atx_lake.jpeg';
import park from '../assets/about/park.jpeg';
import boats from '../assets/about/boats.jpg';
import mozarts from '../assets/about/mozarts.jpeg';
import sky from '../assets/about/sky.jpeg';

const funFacts = [
    'Fun Fact 1',
    'Fun Fact 2',
    'Fun Fact 3',
];

const photos = [ny_photo, ut, w_chibi, atx_lake, park, boats, mozarts, sky];

export default function About() {
    const [factIndex, setFactIndex] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);
    const carouselRef = useRef<HTMLElement>(null);

    const generateFact = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * funFacts.length);
        } while (factIndex == newIndex);
        setFactIndex(newIndex);
    };

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    interval = setInterval(() => {
                        setPhotoIndex((prev) => (prev + 1) % photos.length);
                    }, 4000); // sets up repeating timer
                } else {
                    clearInterval(interval);
                }
            },
            {threshold: 0.1}
        );

        if (carouselRef.current) 
            observer.observe(carouselRef.current);

        return () => {
            observer.disconnect();
            clearInterval(interval);
        };
    }, []);

    return (
        <section ref={carouselRef} id="about" className="p-6 md:p-10 font-['Instrument_Serif']">
            <h2 className="mb-6 text-3xl border border-white/40 backdrop-blur-md bg-white/30 rounded-lg px-4 py-2 w-fit text-[#422308] italic shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default active:scale-110 active:shadow-2xl">
                about and contact: fun and other thoughts
            </h2>

            {/* Paragraph and Photo Carousel */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1 backdrop-blur-md bg-[#422308]/60 rounded-lg p-4 flex flex-col items-center justify-center">
                    <img 
                        src={photos[photoIndex]}
                        alt="photo"
                        className="w-100 h-75 object-cover rounded"
                    />

                    <div className="flex gap-2 mt-3">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setPhotoIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors 
                                    ${index===photoIndex ? 'bg-[#422308]' : 'bg-[#422308]/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex-[2] backdrop-blur-md bg-[#422308]/80 rounded-lg p-8 text-[#fff7c2] text-md md:text-xl flex flex-col gap-4">
                    <p>
                        It's nice to meet you! I'm Advika, a rising sophomore at UT Austin studying CS
                        and Math. While I'm strongly involved in STEM, I also hold a strong passion for the 
                        arts--a fun fact is all the graphics and designs in this website are hand-drawn :). 
                        I'm a strong advocate for increasing accessibilty to education, particularly technical 
                        knowledge.
                    </p>
                    <p>
                        I thrive in creative, collaborative environments where curiousity is encouraged. 
                        Outside of academics and work, you can find me trying out new cafes and bakeries (one of my favorite hobbies, 
                        as you've probably gathered), hiking and photographing nature, binging an anime or comedy series, 
                        and/or hanging out with friends and family.
                    </p>
                    <p>P.S.: Click the drinks below for more fun facts ᯓ★</p>
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

