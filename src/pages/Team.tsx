import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import DrBadrMember from './../components/Team-Component/DrBadrMember';
import CurrentTeam from "../components/Team-Component/CurrentTeam";
import PreviousTeam from './../components/Team-Component/PreviousTeam';
import { UsersRound } from "lucide-react";

const Team: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <MainLayout>
            <div className="mt-2 mb-4 text-center">
                <h1 className="text-3xl font-semibold flex gap-3 justify-center bg-gradient-to-t from-transparent to-main/5 p-8 rounded-xl w-fit mx-auto "><UsersRound className="my-auto text-main/80" size={36} />   Meet Our Team</h1>
            </div>
            <div className="flex flex-col gap-16">
                <DrBadrMember />
                <CurrentTeam />
                <PreviousTeam />
            </div>
        </MainLayout>
    );
};

export default Team;