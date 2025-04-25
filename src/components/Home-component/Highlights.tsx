import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Briefcase, FileText, ExternalLink, X, BadgeX, Newspaper, Highlighter, ChevronRight } from "lucide-react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { publications, vacancies } from "../../data";

const Highlights = () => {
    const importantVacancies = vacancies.filter(vacancy => vacancy.important === "true");
    const importantPublications = publications.filter(pub => pub.important === "true");

    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedVacancy, setSelectedVacancy] = useState(null);

    const titleRef = React.useRef(null);
    const vacanciesRef = React.useRef(null);
    const pubsRef = React.useRef(null);
    const titleInView = useInView(titleRef, { once: true });
    const vacanciesInView = useInView(vacanciesRef, { once: true });
    const pubsInView = useInView(pubsRef, { once: true });


    const titleControls = useAnimation();
    const vacanciesControls = useAnimation();
    const pubsControls = useAnimation();


    useEffect(() => {
        if (titleInView) titleControls.start("visible");
        if (vacanciesInView) vacanciesControls.start("visible");
        if (pubsInView) pubsControls.start("visible");
    }, [titleInView, vacanciesInView, pubsInView, titleControls, vacanciesControls, pubsControls]);

    const openPopup = (vacancy: any) => {
        setSelectedVacancy(vacancy);
        setPopupOpen(true);

        document.body.style.overflow = "hidden";
    };

    const closePopup = () => {
        setPopupOpen(false);
        setSelectedVacancy(null);

        document.body.style.overflow = "auto";
    };

    return (
        <section className="w-full py-20 bg-gradient-to-b from-PrimaryAccent/5 to-main/5 overflow-hidden bg-gray-50">

            <div className="container mx-auto px-4 lg:max-w-7xl">





                {/* #################################Publications Section############################################# */}
                {importantPublications.length > 0 && (
                    <motion.div
                        ref={pubsRef}
                    >
                        <motion.div
                            className="flex items-center justify-center gap-3 mt-10 mb-16 "

                        >
                            <div className="h-px bg-gray-300 w-16 " />
                            <h3 className="text-2xl font-semibold text-gray-700 flex items-center ">
                                <FileText className="text-main mr-2" size={24} />
                                Must-Read Publications	                            </h3>
                            <div className="h-px bg-gray-300 w-16" />
                        </motion.div>

                        <div className="grid grid-cols-1 gap-6">
                            {importantPublications.map((publication,) => (
                                <motion.div
                                    key={publication.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 1.6 }}
                                    className="bg-white rounded-lg overflow-hidden shadow-md  transition-all duration-300 border-l-4 border-PrimaryAccent"
                                >
                                    <div className="px-4 py-8">
                                        <div className="flex gap-4 items-start">
                                            <motion.div
                                                className="bg-PrimaryAccent/10 p-2 rounded-full"
                                            >
                                                <FileText className="text-PrimaryAccent" size={20} />
                                            </motion.div>
                                            <div>
                                                <h4 className="font-bold text-xl text-gray-800 mb-2">{publication.title}</h4>
                                                <p className="text-gray-600 mb-4">{publication.authors} ({publication.year})</p>
                                            </div>

                                        </div>
                                        <a
                                            href={publication.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-PrimaryAccent font-medium hover:text-main transition-colors ml-14"
                                        >
                                            View publication
                                            <motion.span
                                                transition={{ type: "spring", stiffness: 500 }}
                                            >
                                                <ExternalLink size={16} />
                                            </motion.span>
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>


                    </motion.div>

                )}



                {/* #####################################################Vacancies Section################################################################## */}
                {importantVacancies.length > 0 && (
                    <motion.div
                        ref={vacanciesRef}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                        }}
                        initial="hidden"
                        animate={vacanciesControls}
                        className="mb-20 "
                    >





                        <motion.div
                            className="flex items-center justify-center gap-3 mt-28 mb-16 "

                        >
                            <div className="h-px bg-gray-300 w-16 " />
                            <h3 className="text-2xl font-semibold text-gray-700 flex items-center ">
                                <Briefcase className="text-main mr-2" size={24} />
                                Current Vacancies
                            </h3>
                            <div className="h-px bg-gray-300 w-16" />
                        </motion.div>



                        <div className={`grid ${importantVacancies.length % 2 !== 0 ? 'grid-cols-1' : ' grid-cols-1 md:grid-cols-2'} gap-6 justify-center`}>
                            {importantVacancies.map((vacancy, index) => (
                                <motion.div
                                    key={vacancy.id}
                                    variants={{
                                        hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 1 }}
                                    className="bg-white rounded-lg overflow-hidden shadow-md  "
                                >
                                    <div className="h-2 bg-gradient-to-r from-PrimaryAccent/60 to-main/30" />
                                    <div className="px-9 py-8">
                                        <h4 className="font-bold text-xl text-gray-800 mb-3 ">{vacancy.title}</h4>
                                        <p className="text-gray-600 mb-4">{vacancy.description}</p>
                                        <button
                                            onClick={() => openPopup(vacancy)}
                                            className="inline-flex items-center gap-1 text-main font-medium hover:text-PrimaryAccent transition-colors"
                                        >
                                            Apply
                                            <motion.span
                                                transition={{ type: "spring", stiffness: 500 }}
                                            >
                                                <ArrowUpRight size={16} />
                                            </motion.span>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

            </div>
            {/*#########################Apply Popup########################################### */}
            {popupOpen && (
                <motion.div
                    className="fixed inset-0 bg-gradient-to-t from-main/20 to-PrimaryAccent/40 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closePopup}
                >
                    <motion.div
                        className=" bg-white rounded-lg w-full max-w-4xl max-h-full overflow-y-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-gradient-to-l from-main to-PrimaryAccent text-white p-4 rounded-t-xl flex justify-between items-center sticky top-0">
                            <h3 className="text-xl font-bold flex items-center ">

                                {selectedVacancy ? selectedVacancy.title : "Application Form"}
                            </h3>
                            <button
                                onClick={closePopup}
                                className="text-white hover:text-PrimaryAccent focus:outline-none"
                            >
                                <BadgeX />
                            </button>
                        </div>

                        <div className="px-6 py-9 bg-gradient-to-l from-main/5 to-PrimaryAccent/5 rounded-b-lg border-x-4 border-main/55">
                            <h3 className="font-semibold text-xl mb-4 text-main">How to Apply</h3>
                            <p className="text-gray-700 mb-3">
                                To apply for this position, please send the following documents to
                                <a href="mailto:mohamed.tarek.badr@uniklinik-freiburg.de" className="text-main ml-1 hover:underline">mohamed.tarek.badr@uniklinik-freiburg.de</a>:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Detailed CV including your academic background and research experience</li>
                                <li>Motivation letter explaining why you are interested in the position</li>
                                <li>Contact information for 2-3 references</li>
                                <li>Any relevant publications or thesis work</li>
                            </ul>
                            <p className="text-gray-700 mb-4">
                                Please indicate the position title in your email subject line. We will review applications on a rolling basis.
                            </p>
                            <div className="flex justify-end mt-4">

                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Highlights;