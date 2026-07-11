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

import teapot from '../assets/about/teapot.png';
import milk from '../assets/about/milk.png';
import matcha from '../assets/about/matcha.png';
import coffee from '../assets/about/coffee_togo.png';

const funFacts = [
    {drink: teapot, fact: "I started college 2 years early at 16!"},
    {drink: milk, fact: "I've moved over 10 times across 2 different continents! Most recently from Austin :)"},
    {drink: matcha, fact: "I'm an avid player of the NYT games, and my favorites are the Mini and Connections."},
    {drink: coffee, list: [
        {label: "Reading", value: "The Joy of X"},
        {label: "Watching", value: "Jujutsu Kaisen"},
        {label: "Eating", value: "Indomie Noodles and Mango (separately)"},
    ]},
];

const photos = [ny_photo, ut, w_chibi, atx_lake, park, boats, mozarts, sky];

export default function About() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [selectedFact, setSelectedFact] = useState<number | null>(null);
    const carouselRef = useRef<HTMLElement>(null);

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
            <h2 className="mb-6 text-3xl border border-white/40 backdrop-blur-md bg-white/30 rounded-lg px-4 py-2 w-fit text-[#422308] italic shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default">
                about and contact: get to know me better
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

                <div className="flex-[2] backdrop-blur-md bg-[#422308]/80 rounded-lg p-8 text-[#fff7c2] text-lg md:text-xl flex flex-col gap-4">
                    <p>
                        It's nice to meet you! I'm Advika, a rising sophomore at UT Austin studying CS
                        and Math. While I'm deeply involved in STEM, I also hold a strong passion for the 
                        arts--a fun fact is all the graphics and designs in this website are hand-drawn :). 
                        Additionally, I'm a committed advocate for increasing accessibilty to education, particularly technical 
                        knowledge.
                    </p>
                    <p>
                        I thrive in creative, collaborative environments where curiousity is encouraged. 
                        Outside of academics, you can find me trying out new cafes and bakeries (one of my favorite hobbies, 
                        as you've probably gathered), hiking and photographing nature, binging an anime or comedy series, 
                        and/or hanging out with friends and family.
                    </p>
                    <p>P.S.: Click the drinks below for more fun facts ᯓ★</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    {selectedFact === null ?  (
                    <div className="backdrop-blur-md bg-[#422308]/90 rounded-2xl px-10 py-4 flex items-center justify-between h-full">
                        {funFacts.map((item, i) => (
                            <img
                                key={i}
                                src={item.drink}
                                alt=""
                                onClick={() => setSelectedFact(i)}
                                className="h-16 w-16 md:h-24 md:w-24 object-contain cursor-pointer transition-transform duration-200 hover:-translate-y-2"
                                style={{ imageRendering: 'pixelated' }}
                            />
                        ))}
                    </div>
                    ) : (
                    <div
                        className="backdrop-blur-md bg-[#422308]/90 rounded-2xl px-10 py-6 flex flex-col gap-8 mb-6 cursor-pointer h-full"
                        onClick={() => setSelectedFact(null)}
                    >
                        <div className="flex items-center gap-6 flex-1">
                            <img
                                src={funFacts[selectedFact].drink}
                                alt=""
                                className="h-16 w-16 md:h-24 md:w-24 object-contain shrink-0"
                                style={{ imageRendering: 'pixelated' }}
                            />
                            {funFacts[selectedFact].list ? (
                                <ul className="text-[#fff7c2] text-lg italic flex flex-col gap-1">
                                    {funFacts[selectedFact].list!.map((item, i) => (
                                        <li key={i}>
                                            <span>{item.label}:</span> {item.value}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-[#fff7c2] text-lg italic">
                                    {funFacts[selectedFact].fact}
                                </p>
                            )}
                        </div>

                        <p className="text-[#fff7c2] text-sm text-center mt-auto">
                            click anywhere to go back
                        </p>
                    </div>
                    )}
                </div>

                <div className="flex-1 backdrop-blur-md bg-[#422308]/80 rounded-lg p-8 text-[#fff7c2] text-lg">
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-3">
                            <FaEnvelope size={20} />
                            <a href="mailto:advikarapolu@gmail.com" className="hover:underline">
                                advikarapolu@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaLinkedin size={20} />
                            <a href="https://www.linkedin.com/in/advika-r-026a09252/" target="_blank" className="hover:underline">
                                linkedin.com/advika-r
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope size={20} />
                            <a href="mailto:adr4354@eid.utexas.edu" className="hover:underline">
                                adr4354@eid.utexas.edu
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaGithub size={20} />
                            <a href="https://github.com/Advi23" target="_blank" className="hover:underline">
                                advi23
                            </a>
                        </li>
                    </ul>       
                </div>

            </div>
        </section>

    )
}

