import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileX, AlertCircle } from "lucide-react";

interface EmptyStateProps {
    contentType: string;
    redirectPath?: string;
    redirectLabel?: string;
    description?: string;
    showBackButton?: boolean;
    iconType?: "default" | "alert" | "custom";
    customIcon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    contentType,

    description,

    iconType = "default",
    customIcon,
}) => {
    const defaultDescription = description || `No ${contentType} are available at the moment. Please check back later.`;

    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 12; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 10 + 5,
                    delay: Math.random() * 5
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    const renderIcon = () => {
        switch (iconType) {
            case "alert":
                return <AlertCircle size={56} className="text-main" />;
            case "custom":
                return customIcon;
            default:
                return <FileX size={56} className="text-main" />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl mx-auto my-12"
        >
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full bg-gradient-to-r from-main/20 to-PrimaryAccent/20"
                            initial={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                opacity: 0.5
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                y: {
                                    duration: 3 + particle.delay,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                opacity: {
                                    duration: 3 + particle.delay,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    className="relative flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-PrimaryAccent/10"

                >
                    <motion.div
                        className="md:w-2/5 bg-gradient-to-br from-main/10 to-PrimaryAccent/10 relative overflow-hidden p-10 flex items-center justify-center"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative z-10">
                            <motion.div
                                className="relative"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
                                onHoverStart={() => setIsHovering(true)}
                                onHoverEnd={() => setIsHovering(false)}
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-main/30 to-PrimaryAccent/30"
                                    animate={{
                                        scale: isHovering ? [1, 1.2, 1] : 1,
                                    }}
                                    transition={{
                                        scale: {
                                            duration: 1.5,
                                            repeat: isHovering ? Infinity : 0,
                                            ease: "easeInOut"
                                        }
                                    }}
                                />

                                <motion.div
                                    className="h-64 w-64 rounded-full flex items-center justify-center border-8 border-white/20 bg-white/10 backdrop-blur-sm"
                                    animate={{
                                        rotate: isHovering ? 360 : 0
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 15,
                                            repeat: isHovering ? Infinity : 0,
                                            ease: "linear"
                                        }
                                    }}
                                >
                                    <motion.div
                                        className="h-40 w-40 rounded-full bg-white/80 shadow-lg flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            y: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }}
                                    >
                                        {renderIcon()}
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* خطوط زخرفية */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {[0, 45, 90, 135].map((angle) => (
                                    <motion.div
                                        key={angle}
                                        className="absolute h-full w-1 bg-white/10 origin-center"
                                        style={{ transform: `rotate(${angle}deg)` }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full bg-white/20"
                                    style={{
                                        width: `${Math.random() * 40 + 20}px`,
                                        height: `${Math.random() * 40 + 20}px`,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -50, 0],
                                        opacity: [0.2, 0.6, 0.2],
                                    }}
                                    transition={{
                                        y: {
                                            duration: Math.random() * 5 + 5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        opacity: {
                                            duration: Math.random() * 5 + 5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-3/5 p-10 flex flex-col justify-center"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="max-w-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-main to-PrimaryAccent text-transparent bg-clip-text">
                                    No {contentType} Found
                                </h2>
                                <div className="h-1 w-[90%] bg-gradient-to-r from-main to-PrimaryAccent rounded-full mb-6" />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="text-gray-600 text-lg mb-8"
                            >
                                {defaultDescription}
                            </motion.p>

                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default EmptyState;