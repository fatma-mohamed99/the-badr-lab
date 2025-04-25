import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { MapPin, Mail, Phone, Bookmark, MailQuestion } from "lucide-react";
import { motion } from "framer-motion";
import tarekBadrTwo from "/assets/Contact/Contact.jpg";

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout>
            <div className="py-12 sm:px-4 px-1 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-3xl font-semibold flex gap-3 justify-center bg-gradient-to-t from-transparent to-main/5 p-8 rounded-xl w-fit mx-auto">
                        <MailQuestion className="my-auto text-main/80" size={36} /> Get in Touch
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto text-lg">
                        Have questions or want to collaborate? Reach out to us through any of the channels below.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto place-items-center ">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-PrimaryAccent">
                            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                >
                                    <Bookmark className="text-main" size={24} />
                                </motion.div>
                                Contact Information
                            </h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="space-y-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-main/10 p-3 rounded-full">
                                        <MapPin className="text-main" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg">Address</h3>
                                        <p className="text-gray-600">
                                            Institute for Microbiology and Hygiene<br />
                                            Hermann-Herder-Str. 11,<br />
                                            D-79104 Freiburg, Germany
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-main/10 p-3 rounded-full">
                                        <Mail className="text-main" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg">Email</h3>
                                        <a href="mailto:mohamed.tarek.badr@uniklinik-freiburg.de" className="text-main hover:underline">
                                            mohamed.tarek.badr@uniklinik-freiburg.de
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-main/10 p-3 rounded-full">
                                        <Phone className="text-main" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg">Phone</h3>
                                        <a href="tel:+4976127083685" className="text-main hover:underline">
                                            +49 761 270 83685
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6, delay: 1 }}
                            className="bg-gradient-to-br from-main/10 to-PrimaryAccent/10 p-6 rounded-xl"
                        >
                            <p className="text-gray-700 italic">
                                "Our team is dedicated to advancing research in microbiology and welcomes inquiries about potential collaborations and opportunities."
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="bg-white shadow-lg rounded-2xl p-8 border-r-4 border-PrimaryAccent">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.6, delay: 0.7 }}
                                className="overflow-hidden rounded-xl"
                            >
                                <img
                                    src={tarekBadrTwo}
                                    alt="Dr. Mohamed Tarek Badr"
                                    className="w-full h-auto rounded-xl shadow-md "
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="text-xl font-medium text-gray-800">Dr. Mohamed Tarek Badr</h3>
                                    <p className="text-gray-600">For any inquiries or collaboration, please feel free to contact me</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Contact;