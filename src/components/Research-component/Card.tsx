import { useNavigate } from "react-router-dom";
import Button from './../utilities/Button';
import geneHuntImg from '../../assets/lab1.jpg';
import epigeneticsImg from '../../assets/lab1.jpg';
import immuneSystemImg from '../../assets/lab1.jpg';

export default function Card() {
    const navigate = useNavigate();
    const projects = [
        { id: 1, title: "Gene Hunt", image: geneHuntImg },
        { id: 2, title: "Epigenetics in Immunology", image: epigeneticsImg },
        { id: 3, title: "The immune system and the microbiome", image: immuneSystemImg },
        { id: 4, title: "Epigenetics in Immunology", image: epigeneticsImg },
        { id: 5, title: "The immune system and the microbiome", image: immuneSystemImg },
        { id: 6, title: "Epigenetics in Immunology", image: epigeneticsImg }
    ];

    return (
        <div className="container">
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full lg:max-w-6xl mx-auto px-4 ">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className=" rounded-xl overflow-hidden shadow-lg hover:shadow-md hover:shadow-PrimaryAccent flex flex-col h-full border-x-2  border-main/20"
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-PrimaryAccent/40 to-main/40 opacity-50"></div>
                        </div>

                        <div className="p-4 sm:p-5 flex flex-col flex-grow">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700 md:min-h-14 text-center">{project.title}</h2>

                            <Button
                                onClick={() => navigate(`/research/${project.id}`)}
                                className="hover:scale-[1.03] text-lg"
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}