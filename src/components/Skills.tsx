import {
    FaGithub,
    FaNodeJs,
} from 'react-icons/fa';

import {
    SiJavascript,
    SiR,
    SiComptia,
    SiCoursera,
} from 'react-icons/si';

const skills = [
  { label: 'GitHub', icon: FaGithub, color: '#000000' },
  { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { label: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { label: 'CompTIA Security+', icon: SiComptia, color: '#000000' },
  { label: 'LearnX Python', icon: null, color: '#000000' },
  { label: 'R', icon: SiR, color: '#276DC3' },
  { label: 'Coursera', icon: SiCoursera, color: '#000000' },
  { label: 'Assembly', icon: null, color: '#000000' },
  { label: 'Java IT Specialist', icon: null, color: '#000000' },
];

function chunkAlternating(arr: typeof skills) {
    const rows = [];
    let i = 0;
    let rowIndex = 0;
    while (i < arr.length) {
        const size = rowIndex % 2 == 0 ? 5 : 4;
        rows.push(arr.slice(i, i + size));
        i += size;
        rowIndex++;
    }

    return rows;
}

export default function Skills() {
    const rows = chunkAlternating(skills);

    return (
        <section id="skills" className="p-6 md:p-10 font-['Jua']">
            <h2 className="text-2xl mb-6">Other Skills and Certifications</h2>
            <div className="flex flex-col gap-2">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className={`flex w-full justify-between gap-4 ${
                        rowIndex % 2 !== 0 ? 'px-[9.5%]' : ''}`}>
                        {row.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={skill.label}
                                    className="flex flex-col items-center justify-center w-32 h-32 rounded-lg p-2 border-2 border-transparent hover:border-gray-400 transition-all duration-200 cursor-default"
                                >
                                    {Icon ? 
                                    (<Icon size={40} color={skill.color} />) :
                                    (<span
                                        className="text-base font-bold text-center"
                                        style={{color:skill.color}}
                                    >
                                        {skill.label}
                                    </span>
                                    )}
                                    <span className="text-xs mt-1 text-center text-gray-600">
                                        {skill.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
}
