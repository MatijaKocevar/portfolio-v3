import { create } from 'zustand';

type TechItem = {
    name: string;
    title: string;
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
            dateRange: [new Date(2023, 0), new Date(2024, 0)],
            description:
                'Developed React table library with advanced features. Worked on porting Laravel API to .NET. Created Microsoft Power Platform components.',
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
            dateRange: [new Date(2023, 0), new Date(2023, 11)],
            description:
                'Worked on a large-scale Vue.js/Angular application with 24/7 availability. Gained experience with Linux and Docker.',
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
            dateRange: [new Date(2021, 0), new Date(2023, 0)],
            description:
                'Full-stack development with focus on React and Typescript. Worked with .NET and SQL on backend.',
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
            dateRange: [new Date(2021, 0), new Date(2021, 11)],
            description:
                "After years of working in sales and having jobs where I didn't really enjoy myself, I began learning how to develop web apps. I used tutorials and independent searches to find out about modern frameworks and started making my own projects. The stacks I looked at were HTML, CSS, SQL, React JS, Vue JS, Node, .NET Core, and C#.",
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
            dateRange: [new Date(2019, 0), new Date(2020, 11)],
            description:
                'Created semi-automated Excel documents for sales & stock overview. Developed automated price checking system using Google App Scripts. Created a web scraper with React.js for price comparison.',
            technologies: [
                { name: 'excel', title: 'Excel' },
                { name: 'sheets', title: 'Google Sheets' },
            ],
        },
    ],
}));
