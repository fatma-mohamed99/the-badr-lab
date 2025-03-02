import React from 'react';
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import badrimg from "../../assets/lab2.jpg";

export default function DrBadrMember() {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border-x-2 "
                >
                    <div className="flex flex-col md:flex-row">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="md:w-1/3 p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    delay: 0.5
                                }}
                                className="aspect-square  rounded-lg bg-gray-100"
                            >
                                <img
                                    src={badrimg}
                                    alt="Dr. Mohamed Tarek Badr"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <h3 className="text-lg font-semibold mt-4">Dr. med. Mohamed Tarek Badr</h3>
                                <p className="text-gray-600 mt-1">Principal Investigator</p>
                            </motion.div>

                            <motion.div
                                className="mt-6 space-y-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >

                                <div className="flex flex-wrap gap-2 mt-4">
                                    <motion.a
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.1 }}
                                        href="mailto:mohamed.tarek.badr@uniklinik-freiburg.de"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-main bg-PrimaryAccent/20 px-3 py-1 rounded-full hover:bg-opacity-80 hover:scale-105 transition-all"

                                    >
                                        <Mail size={14} className="mr-1" />   mohamed.tarek.badr

                                    </motion.a>
                                    <motion.a
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.1 }}
                                        href="https://bsky.app/profile/tarek-badr.bsky.social"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-main bg-PrimaryAccent/20 px-3 py-1 rounded-full hover:bg-opacity-80 hover:scale-105 transition-all"

                                    >
                                        <ExternalLink size={14} className="mr-1" /> BlueSky
                                    </motion.a>
                                    <motion.a
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.2 }}
                                        href="https://www.linkedin.com/in/mohamed-tarek-badr-86878a181/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-main bg-PrimaryAccent/20 px-3 py-1 rounded-full hover:bg-opacity-80 hover:scale-105 transition-all"

                                    >
                                        <Linkedin size={14} className="mr-1" /> LinkedIn
                                    </motion.a>
                                    <motion.a
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.3 }}
                                        href="https://orcid.org/0000-0002-8800-6380"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-main bg-PrimaryAccent/20 px-3 py-1 rounded-full hover:bg-opacity-80 hover:scale-105 transition-all"

                                    >
                                        <ExternalLink size={14} className="mr-1" /> ORCID
                                    </motion.a>
                                    <motion.a
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.4 }}
                                        href="https://www.researchgate.net/profile/Mohamed_Tarek_Badr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-main bg-PrimaryAccent/20 px-3 py-1 rounded-full hover:bg-opacity-80 hover:scale-105 transition-all"

                                    >
                                        <ExternalLink size={14} className="mr-1" /> ResearchGate
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-gray-200"
                        >
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="text-xl font-bold text-main mb-4"
                            >
                                CV Dr. med. Mohamed Tarek Badr
                            </motion.h2>

                            <div className="space-y-4">
                                {[
                                    "Since 2025, Dr. Badr has been serving as a Consultant at the Institute for Medical Microbiology and Hospital Hygiene at Marburg University Clinic, where he also leads the research group for translational Microbiome Research.",
                                    "Since 2021, he has been a Junior Group Leader in Clinical Metagenomics at the Institute of Medical Microbiology and Hygiene, University Medical Center Freiburg, leading the clinical metagenomics laboratory, supervising PhD and MD students, and coordinating microbiome research projects.",
                                    "From 2020 to 2023, he was a DFG Clinician Scientist Fellow under the IMM-PACT Programme, focusing on the role of mitochondria in Helicobacter pylori-induced immune response and tumor development.",
                                    "Prior to that, he completed his doctoral thesis at the Lübeck Institute for Experimental Dermatology, exploring mitochondrial function modulators in Alzheimer's disease.",
                                    "Dr. Badr obtained his medical license in 2015 and pursued his medical residency at the University Medical Center Freiburg from 2018 to 2024, specializing in microbiology, virology, and infectious disease epidemiology.",
                                    "Throughout his career, he has been actively involved in teaching, serving as an instructor and lecturer for various microbiology and immunology courses."
                                ].map((paragraph, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}