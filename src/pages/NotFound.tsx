import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { Home, ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout>
            <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="md:w-1/2 bg-gradient-to-br from-main to-PrimaryAccent p-12 flex flex-col justify-center items-center text-white"
                        >
                            <div className="text-center">
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                                    className="text-9xl font-bold mb-4"
                                >
                                    404
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    className="relative"
                                >
                                    <div className="absolute -inset-1 opacity-20 rounded-full blur-xl bg-white animate-pulse"></div>
                                    <div className="relative">
                                        <div className="w-32 h-32 mx-auto border-8 border-white/30 rounded-full flex items-center justify-center">
                                            <Search size={50} strokeWidth={2} className="animate-pulse" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="md:w-1/2 p-12 flex flex-col justify-center"
                        >
                            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                                Page Not Found
                            </h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-gray-600 mb-8"
                            >
                                The page you are looking for might have been removed, had its name changed,
                                or is temporarily unavailable.
                            </motion.p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="space-y-4"
                            >
                                <Link to="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-main to-PrimaryAccent text-white px-5 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <Home size={18} />
                                    Return to Homepage
                                </Link>

                                <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 w-full justify-center">
                                    <ArrowLeft size={18} />
                                    Go Back
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-main/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-PrimaryAccent/5 rounded-full blur-3xl -z-10"></div>
            </div>
        </MainLayout>
    );
};

export default NotFound;