import React from "react";
import { BadgeX } from "lucide-react";
import { Project } from "../../types";







const ProjectPopup: React.FC<{ project: Project | null; onClose: () => void }> = ({
    project,
    onClose
}) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-t from-main/60 to-PrimaryAccent/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-5xl w-full max-h-[70vh] overflow-y-auto ">
                <div className="bg-gradient-to-l from-main to-PrimaryAccent text-white p-4 rounded-t-xl flex justify-between items-center sticky top-0">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-PrimaryAccent focus:outline-none"
                    >
                        <BadgeX />
                    </button>
                </div>

                <div className="p-6">
                    <div className="bg-gradient-to-br from-main/5 to-PrimaryAccent/10 p-4 rounded-lg mb-6">
                        <p className="text-gray-700">{project.description}</p>
                    </div>

                    {!!project.studies?.length && (
                        <div className="space-y-6">
                            {project.studies.map((study, index) => (
                                <div key={index} className="border border-main/20 p-5 rounded-lg shadow-md bg-white">
                                    <h2 className="text-xl font-semibold text-main border-l-2 border-PrimaryAccent pl-3 rounded-2xl">{study.title}</h2>
                                    <p className="text-gray-700 mt-2">{study.description}</p>
                                    {study.image && <img src={study.image} alt={study.title} className="mt-4 rounded-lg border border-PrimaryAccent/30 shadow-sm h-64 w-full object-contain" />}
                                </div>
                            ))}
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
};

export default ProjectPopup;