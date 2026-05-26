import { useState, useEffect } from 'react';
import menu from '../assets/menu-icon.png';

const menuItems = [ // array of objects defining each menu link
    {label: 'home', href: '#home', id: 'home'},
    {label: 'projects', href: '#projects', id: 'projects'}, // each href is a link that scrolls to that section
    {label: 'experience', href: '#experience', id: 'experience'},
    {label: 'skills/certs', href: '#skills', id: 'skills'},
    {label: 'about/contact', href: '#about', id: 'about'}
];

// nav element marks up block of nav links
// looping through each menuItem and generating a nav link
export default function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            let current = menuItems[0].id;
            menuItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (!section) 
                    return;
                if (section.offsetTop <= scrollY + 100) {
                    current = item.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, {passive : true});
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-[#d8c4aa] z-[1000] px-6 py-3 backdrop-blur-md bg-[#d8c4aa]/30">

            {/* Desktop menubar */}
            <nav className="hidden md:flex flex-row items-center">
                <img src={menu} alt="menu icon" className="h-16 w-16" style={{
                        imageRendering: 'pixelated',}}
                />
                {menuItems.map((item, index) => {
                    const isActive = (activeSection == item.id);
                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            style={ index === 0 ? {marginLeft: '2rem'} : {}}
                            className={`flex-1 text-center px-5 py-2 no-underline rounded-full border transition-color 
                                font-['Instrument_Serif'] text-lg
                                ${isActive ?
                                    'bg-[#422308] text-white border-[#422308]'
                                    : 'bg-transparent text-black border-transparent'
                                }`}
                        >
                            {item.label}
                        </a>
                    );
                })}
            </nav>

            {/* Mobile menubar */}
            <div className="md:hidden flex justify-between items-center">
                <img src={menu} alt="menu icon" className="h-16 w-16" style={{imageRendering: 'pixelated',}}/>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 font-['Instrument_Serif'] text-lg"
                >
                    <span>menu</span>
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <nav className="md:hidden flex flex-col bg-[#422308] rounded-xl mt-2 py-4 px-6">
                    {menuItems.map((item) => {
                        const isActive = (activeSection === item.id);
                        return (
                            <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`py-3 no-underline font-['Instrument_Serif'] text-2xl text-white transition-all
                                ${isActive ? 'italic' : ''}`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>
            )}
        </header>
    );
}