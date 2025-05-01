import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { MapPin, Mail, Phone, Send, User, MessageSquare, Bookmark, MailQuestion } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <MainLayout>
            <div className="py-12 px-4 container mx-auto">
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

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
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
                                Contact Information                                Contact Information
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
                            transition={{ duration: 0.6, delay: 1 }}
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
                            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.7,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                >
                                    <MessageSquare className="text-main" size={24} />
                                </motion.div>
                                Send a Message
                            </h2>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 p-6 rounded-lg text-center"
                                >
                                    <p className="text-PrimaryAccent font-medium text-lg mb-2">Message Sent Successfully!</p>
                                    <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="text-gray-400" size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                            className="bg-gray-50 w-full pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/50"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.9 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="text-gray-400" size={18} />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                            className="bg-gray-50 w-full pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/50"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Bookmark className="text-gray-400" size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            required
                                            className="bg-gray-50 w-full pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/50"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1.1 }}
                                    >
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            required
                                            rows={5}
                                            className="bg-gray-50 w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/50"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1.2 }}
                                        className="text-right"
                                    >
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`bg-gradient-to-l from-main to-PrimaryAccent px-4 py-2 rounded-md text-white hover:scale-[1.01] transition-all flex gap-2 justify-center align-middle ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <Send size={18} className="my-auto" />
                                        </button>
                                    </motion.div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Contact