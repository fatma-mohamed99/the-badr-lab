import React from "react";
import MainLayout from "../layouts/MainLayout";

const NotFound: React.FC = () => {
    return (
        <MainLayout>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </MainLayout>
    );
};

export default NotFound;
