import one from '../../assets/projects/project_1.png';
import two from '../../assets/projects/project_2.png';
import three from '../../assets/projects/project_3.png';
import four from '../../assets/projects/project_4.png';
import five from '../../assets/projects/project_5.png';
import six from '../../assets/projects/project_6.png';

import iconOne from '../../assets/projects/icon_1.png';
import iconTwo from '../../assets/projects/icon_2.png';
import iconThree from '../../assets/projects/icon_3.png';
import iconFour from '../../assets/projects/icon_4.png';
import iconFive from '../../assets/projects/icon_5.png';
import iconSix from '../../assets/projects/icon_6.png';


export const projects = [
    {id: 1, title: 'Personal Website', link: '', 
        description: 'My personal portfolio, built to showcase my interests, experience, and personality. Deployed via GitHub pages with a custom CI/CD pipeline. Fully responsive with custom design elements, animations, and mobile optimization.',
        skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Figma'], image: one,
        icon: iconOne
    },
    {id: 2, title: 'Dining Hall Bot', link: 'https://robot-dining-hall-personalized-plan.vercel.app/', 
        description: "Developed a Dining Hall Bot with a team that generates a meal plan and guides users around the dining hall to make it. This was mainly built for college students, whose busy schedules often don't allow for regular meal-planning. We built a web interface which connects to the OpenRouter API to generate LLM-powered meal plans. Indoor navigation is enabled via ROS topics and RViz. Contact for full paper.",
        skills: ['HTML/CSS', 'JavaScript', 'Vercel', 'Supabase (PostgreSQL Database)', 'ROS Topics', 'RViz', 'Large Language Models', 'Conducting a Research Study', 'Data Analysis'], image: one,
        icon: iconSix, iconStyle: '-mt-6'
    },
    {id: 3, title: 'ARM Processor', link: '', 
        description: 'Developed an in-order, pipelined processor for the charm-v5 subset of ARM instructions. Includes branch prediction, hazard control, and instruction forwarding. Also implemented a cache control simulator with LRU replacement and write-allocate policies.',
        skills: ['C', 'ARM Assembly', 'GDB', 'Git'], image: two,
        icon: iconTwo
    },
    {id: 4, title: 'Memory Manager', link: '', 
        description: 'Designed a custom dynamic memory allocator featuring a heap consistency checker. Using a binned free list approach with deferred coalescing. Optimized system design for throughput and space utilization via block splitting, placement, and free block insertion strategies.',
        skills: ['C', 'System Design', 'GDB', 'Git'], image: three,
        icon: iconThree
    },
    {id: 5, title: 'Huffman Encoding', link: '', 
        description: 'Built a lossless data compression algorithm with unambiguous decoding based on optimal prefix coding. Used a character frequency table with a HashMap, a min-heap Priority Queue to greedily merge two lowest frequency nodes at each step, and a Huffman binary tree.',
        skills: ['Java', 'Data Structures', 'Encoding Algorithm'], image: four,
        icon: iconFour
    },
    {id: 6, title: 'Artistry', link: 'https://github.com/Advi23/Artistry', 
        description: 'An educational and recreational app built to teach users art history. Pulling data from the Art Institute of Chicago API, provides user-selected, custom curated artworks. Features include saving images, a quiz on generated artworks, and unique animations such as a carousel.',
        skills: ['Java', 'JSON', 'REST API Integration', 'Project Documentation', 'Canva Design', 'GitHub'], image: five,
        icon: iconFive
    },
    {id: 7, title: 'CyberWise', link: 'https://github.com/Advi23/CyberWise', 
        description: 'An educational app designed to promote cybersecurity awareness. It offers interactive features like quizzes, games, and tips on topics such as password security, phishing attacks, social media privacy, and digital citizenship. The goal is to help users improve their online safety and become more responsible digital citizens.',
        skills: ['Swift', 'SwiftUI', 'Logo Design', 'Cybersecurity'], image: six,
        icon: iconSix, iconStyle: '-mt-4'
    },
];