import { create } from 'zustand';

type TechItem = {
    name: string;
    title: string;
};

export interface ExperienceItem {
    technologies: TechItem[];
    name: string;
    dateRange: Date[];
    current?: boolean;
    description: string;
    id: number;
}

interface ExperienceStore {
    experiences: ExperienceItem[];
}

export const useExperienceStore = create<ExperienceStore>(() => ({
    experiences: [
        {
            id: 6,
            name: 'Frontend developer - Amibit d.o.o.',
            dateRange: [new Date(2024, 5), new Date()],
            current: true,
            description: 'experience.descriptions.6',
            technologies: [
                { name: 'react', title: 'React' },
                { name: 'vue', title: 'Vue.js' },
                { name: 'nextjs', title: 'Next.js' },
                { name: 'typescript', title: 'TypeScript' },
                { name: 'javascript', title: 'JavaScript' },
                { name: 'docker', title: 'Docker' },
                { name: 'php', title: 'PHP' },
                { name: 'java', title: 'Java' },
                { name: 'figma', title: 'Figma' },
            ],
        },
        {
            id: 5,
            name: 'Software engineer II - Frodx d.o.o.',
            dateRange: [new Date(2023, 10), new Date(2024, 2)],
            description: 'experience.descriptions.5',
            technologies: [
                { name: 'react', title: 'React' },
                { name: 'vue', title: 'Vue.js' },
                { name: 'typescript', title: 'TypeScript' },
                { name: 'javascript', title: 'JavaScript' },
                { name: 'dotnet', title: '.NET' },
                { name: 'php', title: 'PHP' },
            ],
        },
        {
            id: 4,
            name: 'Software engineer - Dhimahi d.o.o.',
            dateRange: [new Date(2023, 8), new Date(2023, 10)],
            description: 'experience.descriptions.4',
            technologies: [
                { name: 'vue', title: 'Vue.js' },
                { name: 'angular', title: 'Angular' },
                { name: 'typescript', title: 'TypeScript' },
                { name: 'javascript', title: 'JavaScript' },
                { name: 'docker', title: 'Docker' },
                { name: 'php', title: 'PHP' },
            ],
        },
        {
            id: 3,
            name: 'Software developer - Agitavit Solutions d.o.o.',
            dateRange: [new Date(2021, 7), new Date(2023, 5)],
            description: 'experience.descriptions.3',
            technologies: [
                { name: 'react', title: 'React' },
                { name: 'typescript', title: 'TypeScript' },
                { name: 'javascript', title: 'JavaScript' },
                { name: 'umbraco', title: 'Umbraco' },
                { name: 'dotnet', title: '.NET' },
                { name: 'sql', title: 'SQL Server' },
            ],
        },
        {
            id: 2,
            name: 'Learning web development',
            dateRange: [new Date(2020, 9), new Date(2021, 7)],
            description: 'experience.descriptions.2',
            technologies: [
                { name: 'react', title: 'React' },
                { name: 'vue', title: 'Vue.js' },
                { name: 'dotnet', title: '.NET' },
                { name: 'bootstrap', title: 'Bootstrap' },
            ],
        },
        {
            id: 1,
            name: 'Data Analyst - Mimovrste d.o.o.',
            dateRange: [new Date(2019, 10), new Date(2020, 8)],
            description: 'experience.descriptions.1',
            technologies: [
                { name: 'excel', title: 'Excel' },
                { name: 'sheets', title: 'Google Sheets' },
                { name: 'react', title: 'React' },
            ],
        },
    ],
}));
