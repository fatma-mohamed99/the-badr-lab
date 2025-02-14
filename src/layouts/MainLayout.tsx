import React, { ReactNode } from "react";
import Footer from "./../components/Footer";
import Header from './../components/Header';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen w-full  ">
            <Header />
            <main className="flex-grow py-12 container mx-auto  ">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
