import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from './../components/Research-component/Card';
import Collaborations from "../components/Research-component/Collaborations";
import { Search } from "lucide-react";

const Research: React.FC = () => {
    return (
        <MainLayout>
            <div className="mb-12 mt-2 text-center ">
                <h1 className="text-3xl font-semibold flex gap-3 justify-center bg-gradient-to-t from-transparent to-main/5 p-8 rounded-xl w-fit mx-auto "><Search className="my-auto text-main/80" size={36} /> Research Focus</h1>
                <h2 className="text-2xl mt-4 max-w-6xl mx-auto text-gray-700">Our laboratory focuses on understanding the complex interactions between
                    pathogens, the microbiome, and the human immune system to advance infection
                    diagnostics and treatment strategies.</h2>
            </div>
            <  Card />
            <Collaborations />
        </MainLayout>
    );
};

export default Research;
