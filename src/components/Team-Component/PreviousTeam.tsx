import React from "react";
import { Mail, Twitter, Linkedin, UserRound } from "lucide-react";
import memberimg from "../../assets/Team/5_IvanPotereba.jpg"
import memberimg2 from "../../assets/Team/6_NeginMehrbarzin.png"
interface TeamMember {
    name: string;
    role: string;
    photo?: string;
    contact?: string;
    twitter?: string;
    linkedin?: string;
}


const PreviousTeam: React.FC = () => {
    const previousTeam: TeamMember[] = [
        {
            name: "Anne Lichtenegger",
            role: "Graduated Medical doctoral student"
        },
        { name: "Ivan Potereba", role: "Graduated PhD student", photo: memberimg },
        { name: "Negin Mehrbarzin", role: "Graduated Medical doctoral student", photo: memberimg2 },
        {
            name: "Simon Wetzel", role: "Graduated Medical doctoral student",
        }
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
                    <div className="bg-gradient-to-l from-main/90 to-PrimaryAccent rounded-xl px-4 py-2 inline-block">
                        <h2 className="text-xl font-bold text-white">Previous Team Members</h2>
                    </div>
                    <div className="h-1 bg-gray-300 mt-2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {previousTeam.map(renderTeamMember)}
                </div>
            </div>
        </section>
    );
};

export default PreviousTeam;