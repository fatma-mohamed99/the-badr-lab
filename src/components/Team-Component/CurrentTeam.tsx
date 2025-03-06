import React from "react";
import { Mail, Twitter, Linkedin, UserRound } from "lucide-react";
import memberimg from "../../assets/Team/3_Uzochukwu Ukachukwu.png"
import memberimg2 from "../../assets/Team/2_Dr. Sara Posadas-Cantera.jpg"



interface TeamMember {
    name: string;
    role: string;
    photo?: string;
    contact?: string;
    twitter?: string;
    linkedin?: string;
}

const CurrentTeam: React.FC = () => {
    const currentTeam: TeamMember[] = [
        {
            name: "Niels van Best",
            role: "Assistant Professor",
            contact: "niels.vanbest@example.com",
            twitter: "nielsvanBest",
            linkedin: "niels-van-best",
        },
        {
            name: "David Barnett",
            role: "Postdoctoral Scientist",
            contact: "david.barnett@example.com",
            twitter: "davidbarnett",
            linkedin: "david-barnett",
        },
        {
            name: "Gianluca Galazzo",
            role: "Postdoctoral Scientist",
            contact: "gianluca.galazzo@example.com",
            twitter: "gianlucagalazzo",
            linkedin: "gianluca-galazzo",
        },
        {
            name: "Dr. Sara Posadas-Cantera",
            photo: memberimg2,

            role: "Postdoctoral Scientist",
            contact: "sara.posadas.cantera@uniklinik-freiburg.de",
        },
        {
            name: "Uzochukwu Ukachukwu",
            photo: memberimg,

            role: "PhD student",
            contact: "uzochukwu.gospel.ukachukwu@uniklinik-freiburg.de",
        },
    ];

    const renderTeamMember = (member: TeamMember, index: number) => (
        <div key={index} className="flex flex-col items-center text-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-2">
                {member.photo ? (
                    <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <UserRound size={60} className="text-PrimaryAccent/90" />
                    </div>
                )}
            </div>
            <h3 className="font-medium text-lg">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>

            <div className="flex space-x-2 mt-2">
                {member.contact && (
                    <a
                        href={`mailto:${member.contact}`}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        <Mail size={16} />
                    </a>
                )}
                {member.twitter && (
                    <a
                        href={`https://twitter.com/${member.twitter}`}
                        className="text-blue-400 hover:text-blue-600"
                    >
                        <Twitter size={16} />
                    </a>
                )}
                {member.linkedin && (
                    <a
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        className="text-blue-800 hover:text-blue-900"
                    >
                        <Linkedin size={16} />
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="relative mb-8">
                    <div className="bg-gradient-to-l from-main/90 to-PrimaryAccent px-4 py-2 inline-block rounded-xl">
                        <h2 className="text-xl font-bold text-white">Team members</h2>
                    </div>
                    <div className="h-1 bg-gray-300 mt-2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {currentTeam.map(renderTeamMember)}
                </div>
            </div>
        </section>
    );
};

export default CurrentTeam;