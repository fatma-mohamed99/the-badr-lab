import React from "react";
import { Link } from "react-router-dom";

const Highlights: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-PrimaryAccent/10 to-transparent w-full py-32">
            <div className=" container mx-auto ">
                <h2 className="text-2xl font-semibold text-gray-800">Highlights</h2>
                <div className="mt-4 space-y-4">
                    <Link to="/research" className="block text-blue-600 hover:underline">
                        🔬 Featured project: PREDICT-HP
                    </Link>
                    <Link to="/publications" className="block text-blue-600 hover:underline">
                        📄 Recent publication: "Longitudinal Dynamics of Gut Bacteriome and Mycobiome Interactions..."
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
