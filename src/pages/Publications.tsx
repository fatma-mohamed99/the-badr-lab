import { useEffect } from 'react';
import { ExternalLink, FileText, Book, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import { publications, pubmedLink } from '../data';

export default function Publications() {

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
                            <Book className="my-auto text-main/80" size={36} />
                        </motion.div>
                        <span> Publications</span>
                    </h2>
                </motion.div>

                <div className="lg:max-w-6xl mx-auto">
                    <div className="space-y-6">
                        {publications.map((publication, index) => (
                            <motion.div
                                key={publication.id}
                                initial={{ opacity: 0, y: 44 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="bg-gray-50 rounded-lg p-5 border-l-4 border-PrimaryAccent shadow-md bg-gradient-to-l from-main/5 to-PrimaryAccent/5"
                            >
                                <motion.div

                                >
                                    <a
                                        href={publication.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group"
                                    >
                                        <div className="flex gap-2">
                                            <div className="flex-shrink-0 w-8 h-8 bg-main/20 rounded-full flex items-center justify-center mt-1">
                                                <FileText className="text-main" size={18} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-800 mb-2 pr-6">
                                                    {publication.title}
                                                </h3>
                                                <div className="text-gray-700 mb-2">{publication.authors} ({publication.year})</div>
                                                <div className="flex items-center text-main font-medium text-sm">
                                                    <span>DOI: {publication.doi}</span>
                                                    <ExternalLink size={14} className="ml-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="mt-10 text-center"
                    >
                        <a
                            href={pubmedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-l from-main/10 to-PrimaryAccent/10 hover:bg-main/20 text-main font-medium py-3 px-6 rounded-lg transition-colors"
                        >
                            <span className='lg:text-xl '>View all publications on PubMed</span>
                            <ChevronRight size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}