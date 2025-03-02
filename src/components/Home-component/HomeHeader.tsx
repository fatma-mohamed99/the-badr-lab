import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from "../../assets/logo.gif";
import bghero from "../../assets/bghero.svg";
import bgheader from "../../assets/bgheader.svg";
import Button from '../utilities/Button';


const HomeHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);





    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" relative">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-main to-PrimaryAccent">
                <img
                    src={bgheader}
                    alt="Lab Research"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-main/80 to-PrimaryAccent/80 "></div>
            </div>

            <div className="container mx-auto px-4  relative">
                <nav className="flex items-center gap-6 justify-between h-16">
                    <div className="w-32 h-32 mt-16 rounded-full overflow-hidden">
                        <Link to="/" className="text-xl font-bold text-gray-800">
                            <img src={logo} alt="logo" className="w-full h-full object-cover" />
                        </Link>
                    </div>


                    <ul className="hidden md:flex space-x-8 flex-grow justify-end font-medium  border-b border-blue-900 py-5 ">
                        <li>
                            <Link to="/" className=" px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/research" className=" px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Research
                            </Link>
                        </li>
                        <li>
                            <Link to="/team" className=" px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link to="/publications " className=" px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Publications
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className=" px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <button
                        className="md:hidden p-2 rounded-md  hover:text-main  hover:bg-secondary focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {isMenuOpen && (
                    <div className="md:hidden relative">
                        <ul className="py-2 px-4 space-y-2 bg-white/90 ">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2  hover:text-main  transition-colors p-2 rounded-md    hover:bg-secondary "
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/research"
                                    className="block py-2  hover:text-main  transition-colors p-2 rounded-md    hover:bg-secondary "
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/team"
                                    className="block py-2  hover:text-main  transition-colors p-2 rounded-md   hover:bg-secondary "
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/publications"
                                    className="block py-2  hover:text-main  transition-colors p-2 rounded-md   hover:bg-secondary "
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Publications
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="block py-2  hover:text-main  transition-colors p-2 rounded-md   hover:bg-secondary "
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

                <div className=" grid grid-cols-1 lg:grid-cols-2 w-full container lg:gap-8 gap-0 lg:mt-0 md:mt-16  mt-24 ">
                    <div className='col-span-1 my-auto xl:ml-44 lg:ml-32  ml-10   '>
                        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold  ">
                            Welcome to the Badr Lab for Translational Microbiome Research!
                        </h1>
                        <p className="mt-4 text-xl mb-6">
                            At the Badr Lab, we study the human microbiome's role in health and disease,
                            focusing on how imbalances influence infection severity and patient outcomes.
                            Our research aims to identify microbial signatures and biomarkers for infection, cancer, and beyond.
                        </p>
                        <Button className=' py-2.5 px-4 rounded-f text-2xl flex  items-center gap-2 mb-4' >
                            <div className='rounded-full p-3 bg-white'><ArrowRight className='text-PrimaryAccent' /> </div> Meet Our Team
                        </Button>
                    </div>
                    <div className='col-span- max-h-[500px] lg:items-end items-center flex justify-end lg:inline-block   '> <img
                        src={bghero}
                        alt="Lab Research"
                        className=" h-full items-end self-end justify-end"
                    /></div>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;