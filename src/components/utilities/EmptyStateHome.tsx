import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookX, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface EmptyStateHomeProps {
    type: "publications" | "vacancies";
}

const EmptyStateHome: React.FC<EmptyStateHomeProps> = ({ type }) => {
    const [isHovering, setIsHovering] = useState(false);

    const mainColor = "#2966d6b8";
    const accentColor = "#39ccceb9";



    const contentConfig = {
        publications: {
            title: "No Must-Read Publications Currently",
            description: "There are no critical publications marked for urgent reading at this time. Feel free to explore our complete research repository.",
            icon: <BookX size={32} className="text-black" />,
            linkText: "View All Publications",
            linkUrl: "/publications"
        },
        vacancies: {
            title: "No Open Positions Available",
            description: "We don't have any research positions open at the moment. Please check back later or submit your CV for future opportunities.",
            icon: <Briefcase size={32} className="text-black" />,
            linkText: "Visit Vacancies Page",
            linkUrl: "/vacancies"
        }
    };

    const config = contentConfig[type];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="my-6 max-w-5xl mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}

        >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">



                <div
                    className="relative backdrop-blur-sm bg-gradient-to-r from-PrimaryAccent/10 to-main/5"
                    style={{
                        borderTop: `4px solid ${mainColor}`,
                        borderBottom: `4px solid ${accentColor}`
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">

                        <motion.div
                            className="md:col-span-3 flex justify-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative">

                                <motion.div
                                    className="absolute inset-0"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: `${mainColor}` }} />
                                </motion.div>

                                <motion.div
                                    className="absolute inset-0"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: `${accentColor}` }} />
                                </motion.div>

                                <motion.div
                                    className="relative z-10 flex items-center justify-center w-32 h-32 mb-4 md:mb-0"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    <motion.div
                                        className="w-24 h-24 rounded-full flex items-center justify-center relative"
                                        style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColor})` }}
                                        animate={{
                                            boxShadow: isHovering
                                                ? [
                                                    `0 0 0 0 ${mainColor}`,
                                                    `0 0 20px 10px ${mainColor}`,
                                                    `0 0 0 0 ${mainColor}`
                                                ]
                                                : `0 0 0 0 ${mainColor}`
                                        }}
                                        transition={{ duration: 2, repeat: isHovering ? Infinity : 0 }}
                                    >
                                        {config.icon}

                                        {isHovering && (
                                            <>
                                                <motion.div
                                                    className="absolute text-black"
                                                    style={{ top: '0%', left: '25%' }}
                                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <Sparkles size={12} />
                                                </motion.div>
                                                <motion.div
                                                    className="absolute text-black"
                                                    style={{ top: '20%', right: '10%' }}
                                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                                                    transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                                                >
                                                    <Sparkles size={14} />
                                                </motion.div>
                                                <motion.div
                                                    className="absolute text-black"
                                                    style={{ bottom: '15%', left: '10%' }}
                                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                                                    transition={{ duration: 1.8, delay: 1, repeat: Infinity }}
                                                >
                                                    <Sparkles size={10} />
                                                </motion.div>
                                            </>
                                        )}
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="md:col-span-9"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3
                                    className="text-2xl font-bold mb-5"
                                    style={{ color: mainColor }}
                                >
                                    {config.title}
                                </h3>
                                {/* <div
                                    className="h-1 max-w-[60%]  rounded-full mb-4"
                                    style={{ background: `linear-gradient(to right, ${mainColor}, ${accentColor})` }}
                                /> */}
                            </motion.div>

                            <motion.p
                                className="text-black mb-6"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {config.description}
                            </motion.p>

                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link to={config.linkUrl}>
                                    <motion.div
                                        className="inline-flex items-center px-5 py-2 rounded-2xl text-black shadow-md"
                                        style={{ background: `linear-gradient(135deg, ${mainColor}, ${accentColor})` }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: `0 4px 15px ${mainColor}40`
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <span className="font-medium">{config.linkText}</span>
                                        <motion.div
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            className="ml-2"
                                        >
                                            <ArrowRight size={18} />
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default EmptyStateHome;