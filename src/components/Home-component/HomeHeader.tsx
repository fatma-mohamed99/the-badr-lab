import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from "../../assets/logo.gif";
import bgheader from "../../assets/bgheader.svg";
import Button from '../utilities/Button';


import tarekBadrOne from "../../assets/Home/TarekBadrone.jpg";
import tarekBadrTwo from "../../assets/Home/TarekBadrTwo.jpg";
import bild1 from "../../assets/Home/Bild1.png";

const carouselImages = [
    tarekBadrOne,
    tarekBadrTwo,
    bild1
];

const HomeHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // const prevImage = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    //     );
    // };
    const navigate = useNavigate();


    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="relative">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-main to-PrimaryAccent">
                <img
                    src={bgheader}
                    alt="Lab Research"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-main/80 to-PrimaryAccent/80"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <nav className="flex items-center gap-6 justify-between h-16">
                    <div className="w-32 h-32  mt-16 rounded-full overflow-hidden">
                        <Link to="/" className="text-xl font-bold text-gray-800">
                            <img src={logo} alt="logo" className="w-full h-full object-cover" />
                        </Link>
                    </div>

                    <ul className="hidden lg:flex space-x-8 flex-grow justify-end font-medium border-b border-blue-900 py-5">
                        <li>
                            <Link to="/" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/research" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Research
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to="/vacancies" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Vacancies
                            </Link>
                        </li>
                        <li>
                            <Link to="/publications" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Publications
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <button
                        className="lg:hidden p-2 mt-16 rounded-md hover:text-main hover:bg-secondary focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </nav>

                {isMenuOpen && (
                    <div className="lg:hidden relative">
                        <ul className="py-2 px-4 space-y-2 bg-gradient-to-l from-transparent to-main/80 rounded-lg">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 hover:text-main transition-colors p-2 rounded-md hover:bg-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/research"
                                    className="block py-2 hover:text-main transition-colors p-2 rounded-md hover:bg-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    className="block py-2 hover:text-main transition-colors p-2 rounded-md hover:bg-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/vacancies"
                                    className="block py-2 hover:text-main transition-colors p-2 rounded-md hover:bg-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Vacancies
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/publications"
                                    className="block py-2 hover:text-main transition-colors p-2 rounded-md hover:bg-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Publications
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="block py-2 hover:text-main transition-colors p-2 rounded-md hover:bg-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 w-full container xl:gap-28 md:gap-8 gap-0  lg:mt-0  mt-24">
                    <div className='col-span-1 my-auto xl:ml-32 lg:ml-28 ml-10'>
                        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
                            Welcome to the Badr Lab for Translational Microbiome Research!
                        </h1>
                        <p className="mt-4 text-xl mb-6">
                            At the Badr Lab, we study the human microbiome's role in health and disease,
                            focusing on how imbalances influence infection severity and patient outcomes.
                            Our research aims to identify microbial signatures and biomarkers for infection, cancer, and beyond.
                        </p>
                        <Button onClick={() => navigate('/team')} className='py-2.5 px-4 rounded-f text-2xl flex items-center gap-2 mb-4'>
                            <div className='rounded-full p-3 bg-white'><ArrowRight className='text-PrimaryAccent' /></div> Meet Our Team
                        </Button>
                    </div>
                    <div className='col-span-1 relative flex justify-end items-center h-[400px] sm:h-[700px]'>
                        <div className="relative w-full h-full max-h-[300px] sm:max-h-[650px] overflow-hidden rounded-lg">
                            <div className="relative w-full h-full ">
                                {carouselImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Badr Lab ${index + 1}`}
                                            className="w-full h-full object-cover "
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-PrimaryAccent/20"></div>
                                    </div>
                                ))}
                            </div>

                            {/* <div className="absolute inset-y-0 left-0 flex items-center">
                                <button
                                    onClick={prevImage}
                                    className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-r-lg focus:outline-none"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <button
                                    onClick={nextImage}
                                    className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-l-lg focus:outline-none"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div> */}

                            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                                {carouselImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;