import { Dot, HeartHandshake, Sparkle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface Collaborator {
    id: number;
    name: string;
}

interface Department {
    id: number;
    name: string;
    collaborators: Collaborator[];
}

interface University {
    id: number;
    name: string;
    departments: Department[];
}

const Collaborations: React.FC = () => {
    const universities: University[] = [
        {
            id: 1,
            name: "Freiburg University Medical Center",
            departments: [
                {
                    id: 1,
                    name: "Department of General and Visceral Surgery",
                    collaborators: [{ id: 1, name: "Prof. Dr. Stefan Utzolino" }],
                },
                {
                    id: 2,
                    name: "Clinic for Thoracic Surgery",
                    collaborators: [
                        { id: 2, name: "Dr. M. Hassan" },
                        { id: 3, name: "PD. Severin Schmid" },
                    ],
                },
                {
                    id: 3,
                    name: "Clinic for Gastroenterology",
                    collaborators: [
                        { id: 4, name: "Prof. Thimme" },
                        { id: 5, name: "Prof. Hasselblatt" },
                    ],
                },
                {
                    id: 4,
                    name: "Clinic for Dentistry and Parodontology",
                    collaborators: [
                        { id: 6, name: "Prof. Ali Al-Ahmad" },
                        { id: 7, name: "Dr. Sibylle Bartsch" },
                    ],
                },
            ],
        },
        {
            id: 2,
            name: "University Medical Center Mainz",
            departments: [
                {
                    id: 5,
                    name: "General and Visceral Surgery Department",
                    collaborators: [{ id: 8, name: "PD Dr. med. Ann-Kathrin Lederer" }],
                },
            ],
        },
        {
            id: 3,
            name: "University of Lübeck",
            departments: [
                {
                    id: 6,
                    name: "",
                    collaborators: [{ id: 9, name: "Dr. Yask Gupta" }],
                },
            ],
        },
        {
            id: 4,
            name: "Weill Cornell Medicine",
            departments: [
                {
                    id: 7,
                    name: "",
                    collaborators: [{ id: 10, name: "Prof. Mohamed Omar" }],
                },
            ],
        },
    ];

    return (
        <div className="py-10 px-4 container mx-auto">
            <motion.div
                initial={{ y: -20, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.4,
                    type: "spring",
                    bounce: 0.4
                }}
                className="text-center mb-8"
            >
                <h2 className="text-3xl font-semibold flex gap-3 justify-center w-fit mx-auto bg-gradient-to-t from-transparent to-main/5 p-8 rounded-xl ">
                    <motion.div
                        initial={{ rotate: -20, scale: 0.5 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            type: "spring"
                        }}
                    >
                        <HeartHandshake className="my-auto text-main/80" size={36} />
                    </motion.div>
                    <span>Collaborations</span>
                </h2>
            </motion.div>

            <div className="lg:max-w-6xl mx-auto">
                {universities.map((university, uIndex) => (
                    <motion.div
                        key={university.id}
                        initial={{ opacity: 0.5, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 80,
                            damping: 12,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                            }}
                            className="bg-gradient-to-l from-main/10 to-PrimaryAccent/10 px-4 py-2 rounded-xl"
                        >
                            <h3 className="text-xl font-bold flex gap-2">
                                <motion.div
                                    initial={{ rotate: 180, opacity: 0 }}
                                    whileInView={{ rotate: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.7, delay: 0.2 + uIndex * 0.1 }}
                                >
                                    <Sparkle className="my-auto text-main" />
                                </motion.div>
                                {university.name}
                            </h3>
                        </motion.div>

                        <div className="p-6 space-y-8">
                            {university.departments.map((department) => {
                                if (!department.collaborators || department.collaborators.length === 0) {
                                    return null;
                                }

                                return (
                                    <motion.div
                                        key={department.id}
                                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{
                                            duration: 0.7,

                                            type: "spring",
                                            stiffness: 90,
                                            damping: 12
                                        }}
                                        className="bg-gray-50 rounded-lg p-5 border-l-4 border-PrimaryAccent shadow-md"
                                    >
                                        {department.name && (
                                            <motion.h4
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.8 }}
                                                transition={{ duration: 0.3, delay: 0.3 }}
                                                className="font-bold mb-4 text-lg"
                                            >
                                                {department.name}
                                            </motion.h4>
                                        )}

                                        <div className="space-y-3">
                                            {department.collaborators.map((collaborator, index) => (
                                                collaborator.name && (
                                                    <motion.div
                                                        key={collaborator.id}
                                                        initial={{ opacity: 0, x: -30 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            duration: 0.5,
                                                            delay: 0.4 + index * 0.15,
                                                            type: "spring",
                                                            stiffness: 100,
                                                            damping: 12
                                                        }}
                                                        className="flex items-center p-3 rounded-md"
                                                    >
                                                        <motion.div
                                                            initial={{ scale: 0, opacity: 0, rotate: -90 }}
                                                            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay: 0.5 + index * 0.15,
                                                                type: "spring",
                                                                stiffness: 200
                                                            }}
                                                            className="flex-shrink-0 w-8 h-8 bg-PrimaryAccent/20 rounded-full flex items-center justify-center mr-3"
                                                        >
                                                            <span className="text-PrimaryAccent font-bold"><Dot size={48} strokeWidth={3} /></span>
                                                        </motion.div>
                                                        <span className="text-gray-800 font-medium text-lg">{collaborator.name}</span>
                                                    </motion.div>
                                                )
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Collaborations;