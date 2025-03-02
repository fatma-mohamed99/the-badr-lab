import { useState } from "react";
import Button from './../utilities/Button';
import ProjectPopup from './ProjectPopup';
import geneHuntImg from '../../assets/lab1.jpg';
import epigeneticsImg from '../../assets/lab1.jpg';
import immuneSystemImg from '../../assets/lab1.jpg';
import Img from '../../assets/lab2.jpg';

type Study = {
    title: string;
    description: string;
    image?: string;
};

type Project = {
    title: string;
    description: string;
    studies?: Study[];
};

const projectData: Record<string, Project> = {
    "pathogen-host-interactions": {
        title: "Pathogen-Host Interactions",
        description: `We investigate how bacterial colonization influences immune modulation
    and contributes to disease progression and tumorigenesis.`,
        studies: [
            {
                title: "PREDICT-HP Study",
                description: `PREDICT-HP investigates the complex interactions between Helicobacter pylori
        colonization, the intestinal microbiome, and the immune system...`,
                image: Img
            },
            {
                title: "Multi-Cohort Analysis for Infection Diseases Diagnosis",
                description: `Our Lab leverages multi-cohort analysis to improve infectious disease diagnostics...`
            }
        ]
    },
    "clinical-metagenomics": {
        title: "Clinical Metagenomics",
        description: `We develop and apply cutting-edge next-generation sequencing (NGS) technologies
    to enhance infection diagnostics...`,
        studies: [
            {
                title: "INTERGATE Study",
                description: `Focused on advancing infection diagnostics through the application of next- and
        third-generation sequencing technologies...`,
                image: Img

            },
            {
                title: "SEPTICISION",
                description: `In SEPTICISION study we aim to apply nanopore third-generation and Illumina sequencing
        technologies to directly sequence and identify sepsis pathogens...`
            }
        ]
    },
    "microbiome-chronic-diseases": {
        title: "Microbiome in Chronic Diseases and Cancer",
        description: `We study the role of the gut, airway and various other microbial communities in chronic conditions such as Crohn's disease, pancreatic cancer, and lung cancer.`
        , studies: [
            {
                title: "Lung Microbiome and Cancer Study",
                description: `This study aims to characterize the lower airway microbiome in patients with nonsmall cell lung cancer, analyzing its potential role in disease progression and
therapeutic interventions.`,
                image: Img

            },

        ]
    }
};

const Card: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects = [
        { id: 1, slug: "pathogen-host-interactions", title: "Gene Hunt", image: geneHuntImg },
        { id: 2, slug: "clinical-metagenomics", title: "Epigenetics in Immunology", image: epigeneticsImg },
        { id: 3, slug: "microbiome-chronic-diseases", title: "The immune system and the microbiome", image: immuneSystemImg },
    ];

    const openProjectDetails = (slug: string) => {
        const project = projectData[slug];
        if (project) {
            setSelectedProject(project);
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
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-PrimaryAccent/40 to-main/40 opacity-50"></div>
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