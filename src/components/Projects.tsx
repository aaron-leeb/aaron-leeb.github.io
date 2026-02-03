import { useEffect, useState } from "react";
import { useGitHubProfile } from "../hooks/useGitHubProfile";
import sankeyImage from '../assets/Sankey-diagram.png';

const Projects = () => {
    const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);
    const {
        githubProfile,
        contributions,
        loading,
        formatEvent,
    } = useGitHubProfile("aaron-leeb");

    useEffect(() => {
        if (!activeImage) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveImage(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeImage]);

    const projects = [
        {
            title: "NextGen Cognitive Radio",
            description: "Brief description of your project and what you built.",
            technologies: ["Raspberry Pi", "Scikit Learn", "Python", "Plotly Dash", "iwconfig", "Linux", "Numpy"],
            image: null,
            link: "#"
        },
        {
            title: "Student Pathways Visualizer",
            description: "Description of another project you've worked on.",
            technologies: ["Python", "Azure Functions", "Plotly", "Pandas", "Javascript", "React", "Material UI"],
            image: sankeyImage,
            link: "#"
        },
        {
            title: "BT Towne Virtual Environment",
            description: "Description of another project you've worked on.",
            technologies: ["Python", "Docker", "Pygame", "I/O Handling", "OOP", "ssh", "Accessibility"],
            image: null,
            link: "#"
        }
    ];

    return (
        <div className='bg-zinc-800 text-white py-32' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='bg-sky-900 px-12 py-8 justify-center rounded mb-8 mx-auto block shadow-xl shadow-black/30'>
                    <h2 className='text-4xl font-bold text-center'>Projects</h2>
                </div>
                {!loading && githubProfile && (
                    <div className='bg-zinc-700 px-6 py-4 rounded-lg mb-8 shadow-lg flex flex-col md:flex-row items-stretch justify-between gap-6'>
                        <div className='flex items-center gap-4 md:w-1/2'>
                            <img 
                                src={githubProfile.avatar_url} 
                                alt={githubProfile.login}
                                className='w-16 h-16 rounded-full flex-shrink-0'
                            />
                            <div>
                                <h3 className='text-xl font-bold hover:text-gray-200'><a href={githubProfile.url} target="_blank" rel="noopener noreferrer">{githubProfile.login}</a></h3>
                                <div className='flex gap-4 text-sm text-gray-300 mt-1'>
                                    <span> {githubProfile.public_repos} repos</span>

                                </div>
                            </div>
                        </div>
                        
                        <div className='md:w-1/2 border-t md:border-t-0 md:border-l border-zinc-600 pt-4 md:pt-0 md:pl-6'>
                            <h4 className='text-lg font-semibold text-white mb-3'>Recent Activity</h4>
                            <div className='space-y-2 max-h-24 overflow-y-auto'>
                                {contributions.length === 0 && (
                                    <p className='text-sm text-gray-400'>No recent activity.</p>
                                )}
                                {contributions.map((event, index) => (
                                    <div key={event.id ?? `${event.type}-${index}`} className='text-sm text-gray-200'>
                                        <div className='flex justify-between gap-2'>
                                            <span className='truncate'>
                                                {formatEvent(event.type)} in {event.repo.name}
                                            </span>
                                            <span className='text-xs text-gray-400 flex-shrink-0'>
                                                {new Date(event.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                
                <div className='flex flex-col gap-8'>
                    {projects.map((project, index) => (
                        <div key={index} className='bg-zinc-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                            <div className='flex flex-col md:flex-row'>
                                {project.image && (
                                    <div className='md:w-2/5 h-80 md:h-auto p-3'>
                                        <button
                                            type='button'
                                            onClick={() => setActiveImage({ src: project.image, title: project.title })}
                                            className='w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded'
                                            aria-label={`Open ${project.title} image`}
                                        >
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className='w-full h-full object-cover block rounded'
                                            />
                                        </button>
                                    </div>
                                )}
                                <div className='p-6 md:w-3/5 flex flex-col justify-between'>
                                    <div>
                                        <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
                                        <p className='text-gray-300 mb-4'>{project.description}</p>
                                        <div className='flex flex-wrap gap-2 mb-4'>
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className='bg-sky-900 px-3 py-1 rounded-full text-sm'>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {activeImage && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
                    role='dialog'
                    aria-modal='true'
                    aria-label={`${activeImage.title} image preview`}
                    onClick={() => setActiveImage(null)}
                >
                    <button
                        type='button'
                        className='absolute top-4 right-4 text-white text-2xl leading-none'
                        aria-label='Close image preview'
                        onClick={() => setActiveImage(null)}
                    >
                        ×
                    </button>
                    <img
                        src={activeImage.src}
                        alt={activeImage.title}
                        className='max-h-[90vh] max-w-[90vw] object-contain rounded shadow-2xl'
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
export default Projects;