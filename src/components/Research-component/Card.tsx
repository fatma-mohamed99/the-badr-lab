import { useState } from "react";
import Button from './../utilities/Button';
import ProjectPopup from './ProjectPopup';
import { projectData, projects, } from "../../data";
import { Project } from "../../types";

const Card: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);



    const openProjectDetails = (slug: string) => {
        const project = projectData[slug];
        const fallbackImage = projects.find(p => p.slug === slug)?.image;

        if (project) {

            const updatedStudies = project.studies?.map(study => ({
                ...study,
                image: study.image || fallbackImage,
            }));

            setSelectedProject({
                ...project,
                studies: updatedStudies,
            });
        }
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    return (
        <div className="container">
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full lg:max-w-6xl mx-auto px-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-xl overflow-hidden shadow-lg hover:shadow-md hover:shadow-PrimaryAccent flex flex-col h-full border-x-2 border-main/20"
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-contain"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-PrimaryAccent/5 to-main/10"></div>
                        </div>
                        <div className="p-4 sm:p-5 flex flex-col flex-grow">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700 md:min-h-14 text-center">{project.title}</h2>
                            <Button
                                onClick={() => openProjectDetails(project.slug)}
                                className="hover:scale-[1.03] text-lg"
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <ProjectPopup
                project={selectedProject}
                onClose={closeProjectDetails}
            />
        </div>
    );
};

export default Card;