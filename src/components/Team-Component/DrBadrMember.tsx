import { useState, useEffect } from 'react';
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import badrimg from "../../assets/Team/1_MohamedTarekBadr.jpg";

export default function DrBadrMember() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className={`max-w-4xl mx-auto bg-white rounded-lg shadow-lg border-x-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-4">
                        <div >
                            <img
                                src={badrimg}
                                alt="Dr. Mohamed Tarek Badr"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className={`mt-4 transition-all duration-500 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h3 className="text-lg font-semibold">Dr. med. Mohamed Tarek Badr</h3>
                            <p className="text-gray-600 mt-1">Principal Investigator</p>
                        </div>

                        <div className="mt-6">
                            <div className="flex flex-wrap gap-2 mt-4">
                                {[
                                    { icon: Mail, text: "mohamed.tarek.badr", href: "mailto:mohamed.tarek.badr@uniklinik-freiburg.de" },
                                    { icon: ExternalLink, text: "BlueSky", href: "https://bsky.app/profile/tarek-badr.bsky.social" },
                                    { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-tarek-badr-86878a181/" },
                                    { icon: ExternalLink, text: "ORCID", href: "https://orcid.org/0000-0002-8800-6380" },
                                    { icon: ExternalLink, text: "ResearchGate", href: "https://www.researchgate.net/profile/Mohamed_Tarek_Badr" }
                                ].map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center text-main bg-PrimaryAccent/20 px-3 py-1 rounded-full hover:bg-PrimaryAccent/30 hover:scale-105 transition-all duration-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                                        >
                                            <Icon size={14} className="mr-1" /> {link.text}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={`md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-gray-200 transition-all duration-500 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <h2 className="text-xl font-bold text-main mb-4">
                            CV Dr. med. Mohamed Tarek Badr
                        </h2>

                        <div className="space-y-4">
                            {[
                                "Since 2025, Dr. Badr has been serving as a Consultant at the Institute for Medical Microbiology and Hospital Hygiene at Marburg University Clinic, where he also leads the research group for translational Microbiome Research.",
                                "Since 2021, he has been a Junior Group Leader in Clinical Metagenomics at the Institute of Medical Microbiology and Hygiene, University Medical Center Freiburg, leading the clinical metagenomics laboratory, supervising PhD and MD students, and coordinating microbiome research projects.",
                                "From 2020 to 2023, he was a DFG Clinician Scientist Fellow under the IMM-PACT Programme, focusing on the role of mitochondria in Helicobacter pylori-induced immune response and tumor development.",
                                "Prior to that, he completed his doctoral thesis at the Lübeck Institute for Experimental Dermatology, exploring mitochondrial function modulators in Alzheimer's disease.",
                                "Dr. Badr obtained his medical license in 2015 and pursued his medical residency at the University Medical Center Freiburg from 2018 to 2024, specializing in microbiology, virology, and infectious disease epidemiology.",
                                "Throughout his career, he has been actively involved in teaching, serving as an instructor and lecturer for various microbiology and immunology courses."
                            ].map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="transition-all duration-500 ease-out transform"
                                    style={{
                                        transitionDelay: `${400 + index * 100}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                                    }}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}