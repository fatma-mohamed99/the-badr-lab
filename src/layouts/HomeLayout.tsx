import React, { ReactNode } from "react";
import Footer from "./../components/Footer";
import HomeHeader from "../components/Home-component/HomeHeader";

interface HomeLayoutProps {
    children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col  w-full text-white">
            <div className="flex flex-col min-h-screen w-full  ">
                < HomeHeader />
                <main  >{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;
