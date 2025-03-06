import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Microscope, FileText } from "lucide-react";

const HighlightCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
}> = ({ icon, title, description, link }) => {
    return (
        <Link
            to={link}
            className="block p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] group"
        >
            <div className="flex items-start gap-4">
                <div className="p-3 bg-PrimaryAccent/10 rounded-full text-PrimaryAccent">
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-PrimaryAccent transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-600">{description}</p>
                </div>
                <div className="text-PrimaryAccent opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} />
                </div>
            </div>
        </Link>
    );
};

const Highlights: React.FC = () => {
    const highlights = [
        {
            icon: <Microscope size={24} />,
            title: "Featured Project: PREDICT-HP",
            description: "Pioneering research on predictive biomarkers for health outcomes in microbiome-related conditions.",
            link: "/research"
        },
        {
            icon: <FileText size={24} />,
            title: "Recent Publication",
            description: "Longitudinal Dynamics of Gut Bacteriome and Mycobiome Interactions and Their Impact on Host Health",
            link: "/publications"
        }
    ];

    return (
        <section className="bg-gradient-to-b from-PrimaryAccent/10 to-transparent w-full py-32 md:py-50">
            <div className="container mx-auto px-4 lg:max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 relative">
                        Highlights
                        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-PrimaryAccent"></span>
                    </h2>
                    <Link
                        to="/news"
                        className="text-PrimaryAccent hover:text-PrimaryAccent/80 font-medium flex items-center gap-1 mt-4 md:mt-0"
                    >
                        View all News <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {highlights.map((highlight, index) => (
                        <HighlightCard key={index} {...highlight} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;