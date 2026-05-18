import './Home.css';
import { useState, useEffect } from 'react';

const titles = ["Innovator", "Artist", "Student", "Social Advocate"];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0); // stores index of currently displayed title
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000); // sets up repeating timer

        return () => clearInterval(interval); // resets interval
        
    }, []);

    return (
        <section id="home">
            <div className="home-container">
                <div className="home-box">
                    <p>
                        Hi, I am a student at UT Austin double majoring in
                        computer science and mathematics with minors in Statistics
                        and Data Science and Business. Always open to new opportunities
                        that grow my boudaries and feed my curiousity. Currently looking
                        for Summer 2027 internships!
                    </p>
                </div>
                <div className="home-box">
                    <h1 className="home-name">Advika Rapolu:</h1>
                    <h2 className="home-title" key={currentIndex}>{titles[currentIndex]}</h2>
                </div>
            </div>
        </section>
    );
}