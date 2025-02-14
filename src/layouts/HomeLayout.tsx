import React, { ReactNode } from "react";
import Footer from "./../components/Footer";
import HomeHeader from "../components/Home-component/HomeHeader";

interface HomeLayoutProps {
    children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col  w-full text-white">
            < HomeHeader />
            <main  >{children}</main>
            <Footer />
        </div>
    );
};

export default HomeLayout;
