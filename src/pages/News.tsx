import { useEffect } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import { newsItems } from '../data';
import EmptyState from '../components/utilities/EmptyState';

export default function News() {

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
                            <Newspaper className="my-auto text-main/80" size={36} />
                        </motion.div>
                        <span>News & Updates</span>
                    </h2>
                </motion.div>

                <div className="lg:max-w-7xl mx-auto">
                    <div className="relative space-y-6">
                        {newsItems.length > 1 ? (
                            newsItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`  ml-2 relative bg-gray-50 rounded-lg p-5 border-l-4 border-PrimaryAccent shadow-md bg-gradient-to-l from-main/5 to-PrimaryAccent/5 ${item.iconBg}`}
                                >
                                    <div className="absolute md:-left-6 -left-6 top-6 flex items-center justify-center">
                                        <div className={`w-10 h-10 rounded-full ${item.iconBg} shadow-lg p-2 border-2 border-white flex items-center justify-center transform transition-all duration-300 hover:scale-110 cursor-pointer`}>
                                            {item.icon ? (
                                                item.icon
                                            ) : (
                                                <div className={`w-4 h-4 rounded-full bg-main/80`}></div>
                                            )}
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, filter: "blur(2px)", y: 44 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{ duration: 1.5, delay: 0.1 + index * 0.1 }}
                                    >
                                        <div className="flex mb-2 items-center">

                                            <div className="text-sm text-gray-500">{item.date}</div>
                                        </div>

                                        <h3 className="font-bold text-lg text-gray-800 mb-3">
                                            {item.title}
                                        </h3>

                                        <div className="text-gray-700 mb-3">
                                            {item.summary}
                                        </div>

                                        <div className="text-gray-600 mb-3">
                                            {item.content}
                                        </div>

                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-main font-medium text-sm hover:underline"
                                            >
                                                Read more
                                                <ExternalLink size={14} className="ml-1" />
                                            </a>
                                        )}
                                    </motion.div>
                                </motion.div>
                            ))
                        ) : (<EmptyState contentType='news' iconType="custom" customIcon={<Newspaper size={56} className="text-main" />}
                        />)}

                    </div>


                </div>
            </div>
        </MainLayout>
    );
}