
// #######################   Data for research-page / top card #############################

import { Award, MapPin, Users } from "lucide-react";
import { Project, TeamMember, University } from "./types";

export const projectData: Record<string, Project> = {
    "pathogen-host-interactions": {
        title: "Pathogen-Host Interactions",
        description: `We investigate how bacterial colonization influences immune modulation
    and contributes to disease progression and tumorigenesis.`,
        studies: [
            {
                title: "PREDICT-HP Study",
                description: `PREDICT-HP investigates the complex interactions between Helicobacter pylori
        colonization, the intestinal microbiome, and the immune system...`,
                image: '/assets/Research/HP_Study_1.png'
            },
            {
                title: "Multi-Cohort Analysis for Infection Diseases Diagnosis",
                description: `Our Lab leverages multi-cohort analysis to improve infectious disease diagnostics...`
            }
        ]
    },
    "clinical-metagenomics": {
        title: "Clinical Metagenomics",
        description: `We develop and apply cutting-edge next-generation sequencing (NGS) technologies
    to enhance infection diagnostics...`,
        studies: [
            {
                title: "INTERGATE Study",
                description: `Focused on advancing infection diagnostics through the application of next- and
        third-generation sequencing technologies...`,
                image: '/assets/Research/HP_Study_2.png'
            },
            {
                title: "SEPTICISION",
                description: `In SEPTICISION study we aim to apply nanopore third-generation and Illumina sequencing
        technologies to directly sequence and identify sepsis pathogens...`
            }
        ]
    },
    "microbiome-chronic-diseases": {
        title: "Microbiome in Chronic Diseases and Cancer",
        description: `We study the role of the gut, airway and various other microbial communities in chronic conditions such as Crohn's disease, pancreatic cancer, and lung cancer.`,
        studies: [
            {
                title: "Lung Microbiome and Cancer Study",
                description: `This study aims to characterize the lower airway microbiome in patients with nonsmall cell lung cancer, analyzing its potential role in disease progression and therapeutic interventions.`,
                image: '/assets/Research/HP_Study_3.png'
            }
        ]
    }
};

export const projects = [
    { id: 1, slug: "pathogen-host-interactions", title: "Gene Hunt", image: '/assets/Research/general-microbiome.png' },
    { id: 2, slug: "clinical-metagenomics", title: "Epigenetics in Immunology", image: '/assets/Research/LML-Graphical-Abstract.png' },
    { id: 3, slug: "microbiome-chronic-diseases", title: "The immune system and the microbiome", image: '/assets/Research/INTeGRATE.png' },
];




// #######################   Data for research-page / Collaborations #############################
export const universities: University[] = [
    {
        id: 1,
        name: "Freiburg University Medical Center",
        departments: [
            {
                id: 1,
                name: "Department of General and Visceral Surgery",
                collaborators: [{ id: 1, name: "Prof. Dr. Stefan Utzolino" }],
            },
            {
                id: 2,
                name: "Clinic for Thoracic Surgery",
                collaborators: [
                    { id: 2, name: "Dr. M. Hassan" },
                    { id: 3, name: "PD. Severin Schmid" },
                ],
            },
            {
                id: 3,
                name: "Clinic for Gastroenterology",
                collaborators: [
                    { id: 4, name: "Prof. Thimme" },
                    { id: 5, name: "Prof. Hasselblatt" },
                ],
            },
            {
                id: 4,
                name: "Clinic for Dentistry and Parodontology",
                collaborators: [
                    { id: 6, name: "Prof. Ali Al-Ahmad" },
                    { id: 7, name: "Dr. Sibylle Bartsch" },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "University Medical Center Mainz",
        departments: [
            {
                id: 5,
                name: "General and Visceral Surgery Department",
                collaborators: [{ id: 8, name: "PD Dr. med. Ann-Kathrin Lederer" }],
            },
        ],
    },
    {
        id: 3,
        name: "University of Lübeck",
        departments: [
            {
                id: 6,
                name: "",
                collaborators: [{ id: 9, name: "Dr. Yask Gupta" }],
            },
        ],
    },
    {
        id: 4,
        name: "Weill Cornell Medicine",
        departments: [
            {
                id: 7,
                name: "",
                collaborators: [{ id: 10, name: "Prof. Mohamed Omar" }],
            },
        ],
    },
];



// ######################################################## team-page current team #################################


export const currentTeam: TeamMember[] = [
    {
        name: "Niels van Best",
        role: "Assistant Professor",
        contact: "niels.vanbest@example.com",
        twitter: "nielsvanBest",
        linkedin: "niels-van-best",
    },
    {
        name: "David Barnett",
        role: "Postdoctoral Scientist",
        contact: "david.barnett@example.com",
        twitter: "davidbarnett",
        linkedin: "david-barnett",
    },
    {
        name: "Gianluca Galazzo",
        role: "Postdoctoral Scientist",
        contact: "gianluca.galazzo@example.com",
        twitter: "gianlucagalazzo",
        linkedin: "gianluca-galazzo",
    },
    {
        name: "Dr. Sara Posadas-Cantera",
        photo: "/assets/Team/2_Dr. Sara Posadas-Cantera.jpg",

        role: "Postdoctoral Scientist",
        contact: "sara.posadas.cantera@uniklinik-freiburg.de",
    },
    {
        name: "Uzochukwu Ukachukwu",
        photo: "/assets/Team/3_Uzochukwu Ukachukwu.png",

        role: "PhD student",
        contact: "uzochukwu.gospel.ukachukwu@uniklinik-freiburg.de",
    },
];


// ######################################################## team-page previous team #################################


export const previousTeam: TeamMember[] = [
    {
        name: "Anne Lichtenegger",
        role: "Graduated Medical doctoral student"
    },
    { name: "Ivan Potereba", role: "Graduated PhD student" },
    { name: "Negin Mehrbarzin", role: "Graduated Medical doctoral student", photo: "/assets/Team/6_NeginMehrbarzin.png" },
    {
        name: "Simon Wetzel", role: "Graduated Medical doctoral student",
    }
];





// ######################################################## news-page #################################

export const newsItems = [
    {
        id: 1,
        title: "The Badr Lab is on the Move!",
        date: "February 15, 2025",
        summary: "We are thrilled to announce that our lab is relocating from the University Medical Center Freiburg to the Institute for Medical Microbiology and Hospital Hygiene at Marburg University Clinic. This transition marks an exciting new chapter, and we are eager to explore fresh research opportunities and collaborations in this dynamic environment.",
        content: "I am looking forward to engaging with new colleagues, developing innovative project ideas, and continuing our mission to advance microbiome research. Stay tuned for updates on our latest endeavors, and feel free to reach out for potential collaborations! Let's embark on this new journey together.",
        icon: <MapPin size={20} />,
        iconBg: "bg-blue-50",

    },
    {
        id: 2,
        title: "Welcoming new team member: Uzochukwu Ukachukwu",
        date: "January 20, 2025",
        summary: "We are excited to welcome Dr. Uzochukwu Ukachukwu to our research team. Dr. Ukachukwu joins us from the University of Lagos with extensive experience in microbial genomics and infectious disease research.",
        content: "Dr. Ukachukwu completed his PhD in Molecular Microbiology and has published numerous papers on antibiotic resistance mechanisms. His expertise in bacterial genomics and bioinformatics will be invaluable to our ongoing projects on microbiome analysis in clinical settings. Please join us in welcoming him to the team!",
        icon: <Users size={20} />,
        iconBg: "bg-green-50",

    },
    {
        id: 3,
        title: "New Publication in Frontiers in Cellular and Infection Microbiology",
        date: "January 5, 2025",
        summary: "Our recent work on enhancing ascitic fungal infection diagnosis through next-generation sequencing has been published in Frontiers in Cellular and Infection Microbiology.",
        content: "This pilot study conducted in surgical ICU patients demonstrates the potential of NGS technologies to improve detection of fungal infections in ascitic fluid. The paper, authored by Posadas-Cantera S, Mehrbarzin N, Wetzel S, et al., highlights how this approach can lead to more accurate and timely diagnosis, potentially improving patient outcomes in critical care settings.",
        link: "https://doi.org/10.3389/fcimb.2024.1441805",
        icon: <Award size={20} />,
        iconBg: "bg-blue-50",

    },
    {
        id: 4,
        title: "Lab Receives New Grant for Microbiome Research",
        date: "December 10, 2024",
        summary: "We are pleased to announce that our lab has been awarded a three-year grant to study the role of gut microbiome in inflammatory bowel diseases.",
        content: "This project will focus on investigating the interactions between gut bacteria and host immune responses in patients with Crohn's disease and ulcerative colitis. Using a combination of metagenomic sequencing, metabolomics, and immunological assays, we aim to identify microbial signatures associated with disease progression and response to therapy. The findings could lead to novel diagnostic tools and therapeutic approaches for managing these chronic conditions.",
        icon: <Award size={20} />,   //###############  "You can get this icon from Lucide React — there are many different styles and shapes available, and don’t forget to import it." ########################################
        iconBg: "bg-yellow-50", // ########################################## color for card and icon ################################

    }
];
// ######################################################## Vacancies-page #####################################################
export const vacancies = [
    {
        id: 1,
        title: "PhD Position in Microbial Genomics",
        description: "We are seeking a highly motivated PhD candidate with a strong background in bioinformatics and microbiology to join our research team. The successful candidate will work on developing novel computational approaches for analyzing microbial communities in clinical samples.",
        requirements: "Master's degree in Bioinformatics, Computational Biology, or related field. Strong programming skills (Python, R) and experience with NGS data analysis.",
        deadline: "March 30, 2025",
        applyLink: "#application-form",
        important: "true"


    },
    {
        id: 2,
        title: "Postdoctoral Researcher in Microbiome Research",
        description: "A postdoctoral position is available to study host-microbiome interactions in inflammatory diseases. The project will involve multi-omics approaches to characterize microbial communities and their impact on host immune responses.",
        requirements: "PhD in Microbiology, Immunology, or related field. Experience with microbiome analysis, cell culture techniques, and molecular biology methods.",
        deadline: "April 15, 2025",
        applyLink: "#application-form",
        highlight: "true"

    },
    {
        id: 3,
        title: "Research Assistant in Clinical Microbiology",
        description: "We are looking for a research assistant to support our ongoing projects on antibiotic resistance in clinical isolates. The position involves sample processing, bacterial culture, antimicrobial susceptibility testing, and data management.",
        requirements: "Bachelor's or Master's degree in Microbiology or Medical Laboratory Science. Experience with bacterial culture techniques and antimicrobial susceptibility testing.",
        deadline: "Open until filled",
        applyLink: "#application-form",
        important: "true"
    }
];




// ######################################################## Publications-page #####################################################


export const publications = [
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
        url: "https://doi.org/10.1038/s41418-024-01320-7",
        important: "true"
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
        url: "https://doi.org/10.3390/microorganisms11092363",
        important: "true"
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

export const pubmedLink = "https://pubmed.ncbi.nlm.nih.gov/?term=Badr%20MT%20and%20freiburg";