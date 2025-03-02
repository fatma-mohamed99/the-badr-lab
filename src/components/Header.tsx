import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo2.gif";
const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white ">
            <div className="max-w-7xl mx-auto px-4 border-b border-black ">
                <nav className="flex items-center gap-6 justify-between   h-16">
                    <div className=" w-20 h-20 p-2">
                        <Link to="/" className="text-xl font-bold text-gray-800">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <ul className="hidden md:flex space-x-8 flex-grow justify-end   ">
                        <li>
                            <Link to="/" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/research" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Research
                            </Link>
                        </li>
                        <li>
                            <Link to="/team" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link to="/publications" className=" px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Publications
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <button
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <ul className="py-2 px-4 space-y-2 bg-white border-t">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/research"
                                    className="block py-2 px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/team"
                                    className="block py-2 px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/publications"
                                    className="block py-2 px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Publications
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="block py-2 px-3 py-2 transition-colors hover:px-3 hover:rounded-md  hover:bg-gradient-to-l hover:from-main hover:to-PrimaryAccent"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
                <div></div>
            </div>
        </header>
    );
};

export default Header;