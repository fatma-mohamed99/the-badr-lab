import { useEffect } from 'react';
import { Briefcase, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

import { vacancies } from '../data';
import EmptyState from '../components/utilities/EmptyState';
export default function Vacancies() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <MainLayout>
            <div className="py-10 px-4 container mx-auto">
                <motion.div

                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-semibold flex gap-3 justify-center w-fit mx-auto bg-gradient-to-t from-transparent to-main/5 p-8 rounded-xl">
                        <motion.div


                        >
                            <Briefcase className="my-auto text-main/80" size={36} />
                        </motion.div>
                        <span>Vacancies</span>
                    </h2>
                </motion.div>

                <div className="lg:max-w-7xl mx-auto">
                    <motion.div

                        className="mb-10 p-6 bg-gradient-to-l from-main/5 to-PrimaryAccent/5 rounded-lg border-l-4 border-main"
                    >
                        <p className="text-gray-700 mb-4">
                            Our lab always welcomes motivated bachelor's, master's, and medical students. If you are
                            interested, please send your CV along with the research topics you are interested in.
                        </p>
                        <p className="text-gray-700">
                            At the moment, we have the following doctoral and postdoctoral positions available.
                            Check back regularly as new positions are posted here.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {vacancies.length > 1 ? (vacancies.map((vacancy,) => (
                            <motion.div
                                key={vacancy.id}
                                initial={{ opacity: 0, y: 44 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="bg-gray-50 rounded-lg p-5 border-l-4 border-PrimaryAccent shadow-md bg-gradient-to-l from-main/5 to-PrimaryAccent/5"
                            >
                                <motion.div

                                >
                                    <div className="flex gap-2">
                                        <div className="flex-shrink-0 w-8 h-8 bg-main/20 rounded-full flex items-center justify-center mt-1">
                                            <FileText className="text-main" size={18} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-800 mb-2 pr-6">
                                                {vacancy.title}
                                            </h3>
                                            <div className="text-gray-700 mb-2">{vacancy.description}</div>
                                            <div className="text-gray-600 mb-2">
                                                <span className="font-medium">Requirements:</span> {vacancy.requirements}
                                            </div>
                                            <div className="text-gray-600 mb-3">
                                                <span className="font-medium">Application Deadline:</span> {vacancy.deadline}
                                            </div>
                                            <a
                                                href={vacancy.applyLink}
                                                className="inline-flex items-center gap-1 text-main font-medium text-sm hover:underline"
                                            >
                                                Apply for this position
                                                <ExternalLink size={14} className="ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))) : (<EmptyState contentType='vacancies' iconType="custom" customIcon={<Briefcase size={56} className="text-main" />}
                        />)}

                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="mt-10 p-6 bg-gradient-to-l from-main/5 to-PrimaryAccent/5 rounded-lg border-x-4 border-main"
                        id="application-form"
                    >
                        <h3 className="font-semibold text-xl mb-4">How to Apply</h3>
                        <p className="text-gray-700 mb-3">
                            To apply for any of  positions another, please send the following documents to
                            <a href="mailto:mohamed.tarek.badr@uniklinik-freiburg.de" className="text-main ml-1 hover:underline">mohamed.tarek.badr@uniklinik-freiburg.de</a> :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                            <li>Detailed CV including your academic background and research experience</li>
                            <li>Motivation letter explaining why you are interested in the position</li>
                            <li>Contact information for 2-3 references</li>
                            <li>Any relevant publications or thesis work</li>
                        </ul>
                        <p className="text-gray-700">
                            Please indicate the position title in your email subject line. We will review applications on a rolling basis.
                        </p>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}