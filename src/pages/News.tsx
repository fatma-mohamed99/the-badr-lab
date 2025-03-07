import { useEffect } from 'react';
import { Newspaper, ExternalLink, Award, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

export default function News() {
    const newsItems = [
        {
            id: 1,
            title: "The Badr Lab is on the Move!",
            date: "February 15, 2025",
            summary: "We are thrilled to announce that our lab is relocating from the University Medical Center Freiburg to the Institute for Medical Microbiology and Hospital Hygiene at Marburg University Clinic. This transition marks an exciting new chapter, and we are eager to explore fresh research opportunities and collaborations in this dynamic environment.",
            content: "I am looking forward to engaging with new colleagues, developing innovative project ideas, and continuing our mission to advance microbiome research. Stay tuned for updates on our latest endeavors, and feel free to reach out for potential collaborations! Let's embark on this new journey together.",
            icon: <MapPin size={20} />,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            id: 2,
            title: "Welcoming new team member: Uzochukwu Ukachukwu",
            date: "January 20, 2025",
            summary: "We are excited to welcome Dr. Uzochukwu Ukachukwu to our research team. Dr. Ukachukwu joins us from the University of Lagos with extensive experience in microbial genomics and infectious disease research.",
            content: "Dr. Ukachukwu completed his PhD in Molecular Microbiology and has published numerous papers on antibiotic resistance mechanisms. His expertise in bacterial genomics and bioinformatics will be invaluable to our ongoing projects on microbiome analysis in clinical settings. Please join us in welcoming him to the team!",
            icon: <Users size={20} />,
            iconBg: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            id: 3,
            title: "New Publication in Frontiers in Cellular and Infection Microbiology",
            date: "January 5, 2025",
            summary: "Our recent work on enhancing ascitic fungal infection diagnosis through next-generation sequencing has been published in Frontiers in Cellular and Infection Microbiology.",
            content: "This pilot study conducted in surgical ICU patients demonstrates the potential of NGS technologies to improve detection of fungal infections in ascitic fluid. The paper, authored by Posadas-Cantera S, Mehrbarzin N, Wetzel S, et al., highlights how this approach can lead to more accurate and timely diagnosis, potentially improving patient outcomes in critical care settings.",
            link: "https://doi.org/10.3389/fcimb.2024.1441805",
            icon: <Award size={20} />,
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            id: 4,
            title: "Lab Receives New Grant for Microbiome Research",
            date: "December 10, 2024",
            summary: "We are pleased to announce that our lab has been awarded a three-year grant to study the role of gut microbiome in inflammatory bowel diseases.",
            content: "This project will focus on investigating the interactions between gut bacteria and host immune responses in patients with Crohn's disease and ulcerative colitis. Using a combination of metagenomic sequencing, metabolomics, and immunological assays, we aim to identify microbial signatures associated with disease progression and response to therapy. The findings could lead to novel diagnostic tools and therapeutic approaches for managing these chronic conditions.",
            icon: <Award size={20} />,
            iconBg: "bg-yellow-100",
            iconColor: "text-yellow-600"
        }
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <MainLayout>
            <div className="py-10 px-4 container mx-auto">
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-semibold flex gap-3 justify-center w-fit mx-auto bg-gradient-to-t from-transparent to-main/5 p-8 rounded-xl">
                        <motion.div
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            <Newspaper className="my-auto text-main/80" size={36} />
                        </motion.div>
                        <span>News & Updates</span>
                    </h2>
                </motion.div>

                <div className="lg:max-w-7xl mx-auto">
                    <div className="relative space-y-6">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-main/70 via-PrimaryAccent/50 to-main/20 h-full"></div>

                        {newsItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{
                                    opacity: 0,
                                    x: -40,
                                    scale: 0.95
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 70,
                                    damping: 12
                                }}
                                className="ml-12 relative bg-gray-50 rounded-lg p-5 border-l-4 border-PrimaryAccent shadow-md bg-gradient-to-l from-main/5 to-PrimaryAccent/5"
                            >
                                <div className="absolute -left-16 top-6 w-6 h-6 rounded-full bg-white border-2 border-main flex items-center justify-center">
                                    <div className={`w-4 h-4 rounded-full ${item.iconBg}`}></div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                >
                                    <div className="flex mb-2 items-center">
                                        <div className={`mr-2 p-2 rounded-full ${item.iconBg} ${item.iconColor}`}>
                                            {item.icon}
                                        </div>
                                        <div className="text-sm text-gray-500">{item.date}</div>
                                    </div>

                                    <h3 className="font-bold text-lg text-gray-800 mb-3">
                                        {item.title}
                                    </h3>

                                    <div className="text-gray-700 mb-3">
                                        {item.summary}
                                    </div>

                                    <div className="text-gray-600 mb-3">
                                        {item.content}
                                    </div>

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-main font-medium text-sm hover:underline"
                                        >
                                            Read more
                                            <ExternalLink size={14} className="ml-1" />
                                        </a>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="mt-10 text-center"
                    >
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-gradient-to-l from-main/10 to-PrimaryAccent/10 hover:bg-main/20 text-main font-medium py-3 px-6 rounded-lg transition-colors"
                        >
                            <span className="lg:text-lg">View all news archives</span>
                            <ChevronRight size={18} />
                        </a>
                    </motion.div> */}
                </div>
            </div>
        </MainLayout>
    );
}