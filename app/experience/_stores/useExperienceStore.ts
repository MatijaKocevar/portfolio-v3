import { create } from 'zustand';

type TechItem = {
    name: string;
};

export interface ExperienceItem {
    technologies: TechItem[];
    name: string;
    dateRange: Date[];
    description: string;
}

interface ExperienceStore {
    experiences: ExperienceItem[];
}

export const useExperienceStore = create<ExperienceStore>(() => ({
    experiences: [
        {
            name: 'Junior Software Engineer',
            dateRange: [new Date(2021, 0), new Date(2021, 0)],
            description: 'I am a junior software engineer',
            technologies: [{ name: 'React' }, { name: 'TypeScript' }, { name: 'TailwindCSS' }, { name: 'Node.js' }],
        },
        {
            name: 'Mid-Level Software Engineer',
            dateRange: [new Date(2021, 0), new Date(2022, 0)],
            description: 'I am a mid-level software engineer',
            technologies: [{ name: 'Vue' }, { name: 'Javascript' }, { name: 'Boostrap' }, { name: 'C#' }],
        },
        {
            name: 'Senior Software Engineer',
            dateRange: [new Date(2022, 0), new Date(2023, 0)],
            description: 'I am a senior software engineer',
            technologies: [{ name: 'Angular' }, { name: 'Javascript' }, { name: 'Materialize' }, { name: 'Java' }],
        },
    ],
}));
