import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

const NotFound: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <MainLayout>
            <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-t from-transparent to-PrimaryAccent/5 rounded-2xl mt-4">
                <h1 className="text-3xl font-bold drop-shadow-lg animate-fade-in">404 - Page Not Found</h1>
                <p className="text-xl mt-4 animate-fade-in delay-200">
                    Sorry, the page you are looking for does not exist.                </p>
            </div>
        </MainLayout>
    );
};

export default NotFound;
