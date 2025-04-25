export type Study = {
    title: string;
    description: string;
    image?: string;
};

export type Project = {
    title: string;
    description: string;
    studies?: Study[];
};


export interface Collaborator {
    id: number;
    name: string;
}

export interface Department {
    id: number;
    name: string;
    collaborators: Collaborator[];
}

export interface University {
    id: number;
    name: string;
    departments: Department[];
}

export interface TeamMember {
    name: string;
    role: string;
    photo?: string;
    contact?: string;
    twitter?: string;
    linkedin?: string;
}

export interface Vacancy {
    id: number;
    title: string;
    description: string;
    important: string;
}