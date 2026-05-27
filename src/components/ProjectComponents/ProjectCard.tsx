import { RiExternalLinkLine } from "react-icons/ri";

interface Project {
    id: number;
    title: string;
    link: string;
    description: string;
    skills: string[];
    image: string;
    icon: string;
}

interface Props {
    project: Project;
    flipped: boolean;
    onFlip: () => void;
}

export default function ProjectCard({ project, flipped, onFlip }: Props) {
    return (
        <div
            key={project.id}
            className="card-container shrink-0 w-[80vw] md:w-auto"
            onClick={onFlip}
        >
            <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
                {/* Front of Card */}
                <div className="card-face card-front shadow-2xl backdrop-blur-md bg-[#422308]/90 rounded-lg p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                    <p className="text-2xl text-[#fff7c2]">{project.title}</p>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <RiExternalLinkLine className="w-6 h-6 text-white"/>
                        </a>
                    )}
                    </div>
                    <p className="text-lg text-white">{project.description}</p>
                    <div className="mt-3 flex justify-center">
                        <img
                            src={project.icon}
                            alt=""
                            className="h-24 w-24 object-contain"
                            style={{imageRendering: 'pixelated'}}
                        />
                    </div>
                </div>

                {/* Back of Card */}
                <div className="card-face card-back shadow-2xl backdrop-blur-md bg-[#422308]/90 rounded-lg p-6 flex flex-col gap-3">
                    <p className="text-2xl text-white">Skills</p>
                    <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                            <span
                                key={skill}
                                onClick={(e) => e.stopPropagation()}
                                className="px-3 py-1 bg-white text-[#422308] rounded-lg text-md cursor-pointer transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex-1 min-h-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}