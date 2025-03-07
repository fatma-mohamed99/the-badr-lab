import { useEffect } from 'react';
import { ExternalLink, FileText, Book, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

export default function Publications() {
    const publications = [
        {
            id: 1,
            title: "Enhancing ascitic fungal infection diagnosis through next-generation sequencing: a pilot study in surgical ICU patients",
            authors: "Posadas-Cantera S, Mehrbarzin N, Wetzel S, Goelz H, Kousoulas L, Utzolino S, Häcker G, Badr MT",
            year: "2024",
            doi: "10.3389/fcimb.2024.1441805",
            url: "https://doi.org/10.3389/fcimb.2024.1441805"
        },
        {
            id: 2,
            title: "Comparison of the diversity of anaerobic-cultured gut bacterial communities on different culture media using 16S rDNA sequencing",
            authors: "Lichtenegger AS, Posadas-Cantera S, Badr MT, Häcker G",
            year: "2024",
            doi: "10.1016/j.mimet.2024.106988",
            url: "https://doi.org/10.1016/j.mimet.2024.106988"
        },
        {
            id: 3,
            title: "The Caspase-Activated DNase drives inflammation and contributes to defense against viral infection",
            authors: "Moeed A, Thilmany N, Beck F, Puthussery BK, Ortmann N, Haimovici A, Badr MT, Haghighi EB, Boerries M, Öllinger R, Rad R, Kirschnek S, Gentle IE, Donakonda S, Petric PP, Hummel JF, Pfaffendorf E, Zanetta P, Schell C, Schwemmle M, Weber A, Häcker G",
            year: "2024",
            doi: "10.1038/s41418-024-01320-7",
            url: "https://doi.org/10.1038/s41418-024-01320-7"
        },
        {
            id: 4,
            title: "Longitudinal dynamics of gut bacteriome and mycobiome interactions pre- and post-visceral surgery in Crohn's disease",
            authors: "Wetzel S, Müller A, Kohnert E, Mehrbarzin N, Huber R, Häcker G, Kreutz C, Lederer A-K, Badr MT",
            year: "2024",
            doi: "10.3389/fcimb.2023.1275405",
            url: "https://doi.org/10.3389/fcimb.2023.1275405"
        },
        {
            id: 5,
            title: "Gut microbiota in diagnosis, therapy and prognosis of cholangiocarcinoma and gallbladder carcinoma—a scoping review",
            authors: "Lederer A-K, Rasel H, Kohnert E, Kreutz C, Huber R, Badr MT, Dellweg PKE, Bartsch F, Lang H",
            year: "2023",
            doi: "10.3390/microorganisms11092363",
            url: "https://doi.org/10.3390/microorganisms11092363"
        },
        {
            id: 6,
            title: "Spontaneous activity of the mitochondrial apoptosis pathway drives chromosomal defects, the appearance of micronuclei and cancer metastasis through the Caspase-Activated DNase",
            authors: "Haimovici A, Höfer C, Badr MT, et al",
            year: "2022",
            doi: "10.1038/s41419-022-04768-y",
            url: "https://doi.org/10.1038/s41419-022-04768-y"
        },
        {
            id: 7,
            title: "Mitochondria supply sub-lethal signals for cytokine secretion and DNA-damage in H. pylori infection",
            authors: "Dörflinger B, Badr MT, Haimovici A, et al",
            year: "2022",
            doi: "10.1038/s41418-022-01009-9",
            url: "https://doi.org/10.1038/s41418-022-01009-9"
        },
        {
            id: 8,
            title: "Next- and third-generation sequencing outperforms culture-based methods in the diagnosis of ascitic fluid bacterial infections of ICU patients",
            authors: "Goelz H, Wetzel S, Mehrbarzin N, Utzolino S, Häcker G, Badr MT",
            year: "2021",
            doi: "10.3390/cells10113226",
            url: "https://doi.org/10.3390/cells10113226"
        },
        {
            id: 9,
            title: "Host blood gene signatures can detect the progression to severe and cerebral malaria",
            authors: "Omar M, Marchionni L, Häcker G, Badr MT",
            year: "2021",
            doi: "10.3389/fcimb.2021.743616",
            url: "https://doi.org/10.3389/fcimb.2021.743616"
        },
        {
            id: 10,
            title: "The AML-associated K313 mutation enhances C/EBPα activity by leading to C/EBPα overexpression",
            authors: "Gentle IE, Moelter I, Badr MT, et al",
            year: "2021",
            doi: "10.1038/s41419-021-03948-6",
            url: "https://doi.org/10.1038/s41419-021-03948-6"
        },
        {
            id: 11,
            title: "Neonatal and young infant sepsis in a regional hospital in Ghana",
            authors: "Afeke I, Hirose M, Amegan-Aho KH, Haertel C, Becker M, Moustafa A, Schilf P, Badr MT, Mensah GL, Mbroh HK, Rupp J, Ibrahim S",
            year: "2021",
            doi: "10.4236/ojped.2021.112027",
            url: "https://doi.org/10.4236/ojped.2021.112027"
        },
        {
            id: 12,
            title: "Draft genome sequences and antimicrobial profiles of three Staphylococcus epidermidis strains from neonatal blood samples",
            authors: "Afeke I, Moustafa A, Hirose M, Becker M, Busch H, Kuenstner A, Faehnrich A, Ablordey AS, Haertel C, Amega-Aho KH, Badr MT, Rupp J, Ibrahim S",
            year: "2021",
            doi: "10.1128/mra00170-21",
            url: "https://doi.org/10.1128/mra00170-21"
        },
        {
            id: 13,
            title: "Comprehensive integration of genome-wide association and gene expression studies reveals novel gene signatures and potential therapeutic targets for Helicobacter pylori-induced gastric disease",
            authors: "Badr MT, Omar M and Häcker G",
            year: "2021",
            doi: "10.3389/fimmu.624117",
            url: "https://doi.org/10.3389/fimmu.624117"
        },
        {
            id: 14,
            title: "Antimicrobial susceptibility patterns and wild-type MIC distributions of anaerobic bacteria at a German university hospital: a five-year retrospective study (2015–2019)",
            authors: "Badr MT, Blümel B, Baumgartner S, Komp JMA, Häcker G",
            year: "2020",
            doi: "10.3390/antibiotics9110823",
            url: "https://doi.org/10.3390/antibiotics9110823"
        },
        {
            id: 15,
            title: "Gene expression profiling meta-analysis reveals novel gene signatures and pathways shared between tuberculosis and rheumatoid arthritis",
            authors: "Badr MT, Häcker G",
            year: "2019",
            doi: "10.1371/journal.pone.0213470",
            url: "https://doi.org/10.1371/journal.pone.0213470"
        }
    ];

    const pubmedLink = "https://pubmed.ncbi.nlm.nih.gov/?term=Badr%20MT%20and%20freiburg";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <MainLayout>
            <div className="py-10 px-4 container mx-auto">
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-semibold flex gap-3 justify-center w-fit mx-auto bg-gradient-to-t from-transparent to-main/5 p-8 rounded-xl">
                        <motion.div
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                type: "spring",
                                stiffness: 100
                            }}
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
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                    scale: 0.95
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 70,
                                    damping: 12
                                }}
                                className="bg-gray-50 rounded-lg p-5 border-l-4 border-PrimaryAccent shadow-md bg-gradient-to-l from-main/5 to-PrimaryAccent/5"
                            >
                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
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