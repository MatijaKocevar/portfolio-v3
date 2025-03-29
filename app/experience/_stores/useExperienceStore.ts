import { create } from 'zustand';

type TechItem = {
    name: string;
};

export interface ExperienceItem {
    technologies: TechItem[];
    name: string;
    dateRange: Date[];
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
            dateRange: [new Date(2024, 0), new Date()],
            description:
                'Started a new job as a Vue.js developer. Working on both legacy Vue 2 applications and new React projects. Lead frontend developer for new React project.',
            technologies: [{ name: 'Vue.js' }, { name: 'React' }, { name: 'Vite' }, { name: 'TypeScript' }],
        },
        {
            id: 5,
            name: 'Software engineer II - Frodx d.o.o.',
            dateRange: [new Date(2023, 0), new Date(2024, 0)],
            description:
                'Developed React table library with advanced features. Worked on porting Laravel API to .NET. Created Microsoft Power Platform components.',
            technologies: [{ name: 'React' }, { name: 'TypeScript' }, { name: '.NET' }, { name: 'PCF' }],
        },
        {
            id: 4,
            name: 'Software engineer - Dhimahi d.o.o.',
            dateRange: [new Date(2023, 0), new Date(2023, 11)],
            description:
                'Worked on a large-scale Vue.js/Angular application with 24/7 availability. Gained experience with Linux and Docker.',
            technologies: [{ name: 'Vue.js' }, { name: 'TypeScript' }, { name: 'Docker' }, { name: 'Linux' }],
        },
        {
            id: 3,
            name: 'Software developer - Agitavit Solutions d.o.o.',
            dateRange: [new Date(2021, 0), new Date(2023, 0)],
            description:
                'Full-stack development with focus on React and TypeScript. Worked with .NET and SQL on backend.',
            technologies: [{ name: 'React' }, { name: 'TypeScript' }, { name: '.NET' }, { name: 'SQL' }],
        },
        {
            id: 2,
            name: 'Learning web development',
            dateRange: [new Date(2021, 0), new Date(2021, 11)],
            description:
                "After years of working in sales and having jobs where I didn't really enjoy myself, I began learning how to develop web apps. I used tutorials and independent searches to find out about modern frameworks and started making my own projects. The stacks I looked at were HTML, CSS, SQL, React JS, Vue JS, Node, .NET Core, and C#.",
            technologies: [{ name: 'React' }, { name: 'Vue.js' }, { name: '.NET Core' }, { name: 'Bootstrap' }],
        },
        {
            id: 1,
            name: 'Data Analyst - Mimovrste d.o.o.',
            dateRange: [new Date(2019, 0), new Date(2020, 11)],
            description:
                'Created semi-automated Excel documents for sales & stock overview. Developed automated price checking system using Google App Scripts. Created a web scraper with React.js for price comparison.',
            technologies: [
                { name: 'Excel' },
                { name: 'Google Sheets' },
                { name: 'Google App Scripts' },
                { name: 'VBA' },
            ],
        },
    ],
}));
