import { useTranslations } from 'next-intl';
import { ProjectShowcaseGrid } from '@/components/showcase/ProjectShowcaseGrid';
import type { ShowcaseProject } from '@/types/showcase';

const projectsData: ShowcaseProject[] = [
    {
        id: '5',
        title: 'Zelda Clone',
        description: 'A tribute game inspired by The Legend of Zelda, built with modern web technologies.',
        imageUrl: '/images/zelda-clone/zelda_clone.webp',
        githubUrl: 'https://github.com/MatijaKocevar/anas-place',
        liveUrl: 'https://matijakprojects.com/zelda-clone/',
    },
    {
        id: '4',
        title: 'Space Invaders',
        description: 'A clone of Space Invaders in Typescript.',
        imageUrl: '/images/space-invaders/space-invaders.webp',
        githubUrl: 'https://github.com/MatijaKocevar/space-invaders',
        liveUrl: 'https://matijakprojects.com/space-invaders/',
    },
    {
        id: '10',
        title: "Ana's Place",
        description: 'A custom website for managing a small nail saloon.',
        imageUrl: '/images/anas-place/anas_place.webp',
        githubUrl: 'https://github.com/MatijaKocevar/anas-place',
        liveUrl: 'https://anas-place.net/',
    },
    {
        id: '3',
        title: 'Task Management',
        description: 'A comprehensive task management system for organizing and tracking tasks.',
        imageUrl: '/images/task-management/task-management.webp',
        githubUrl: 'https://github.com/MatijaKocevar/task-management',
        liveUrl: 'https://matijakprojects.com/task-management-frontend/',
    },
    {
        id: '1',
        title: 'Portfolio V2',
        description: 'Second iteration of my personal portfolio.',
        imageUrl: '/images/portfolioV2/portfolioV2.png',
        githubUrl: 'https://github.com/MatijaKocevar/portfolio_V2',
        liveUrl: 'https://matijakprojects.com/portfolio_V2/',
    },
    {
        id: '2',
        title: 'Portfolio V1',
        description: 'First version of my portfolio website.',
        imageUrl: '/images/portfolioV1/portfolioV1.png',
        githubUrl: 'https://github.com/MatijaKocevar/myPortfolio',
        liveUrl: 'https://matijakprojects.com/myPortfolio/',
    },

    {
        id: '6',
        title: 'Vue Dynamic Forms',
        description: 'A basic web app with routing built with Vue.js.',
        imageUrl: '/images/vue-dynamic-forms/vue-dynamic-forms.png',
        githubUrl: 'https://github.com/MatijaKocevar/vue-dynamic-forms',
        liveUrl: 'https://matijakprojects.com/vue-dynamic-forms/#/registration',
    },
    {
        id: '7',
        title: 'Diffing API',
        description: 'An API service for comparing and finding diffs in two base 64 encoded strings.',
        imageUrl: '/images/diffingApi/diffingApi.png',
        githubUrl: 'https://github.com/yourusername/diffing-api',
    },
    {
        id: '8',
        title: 'Drum Box',
        description: 'An MIDI playback tool for creating and playing drum patterns.',
        imageUrl: '/images/drumbox/drumbox.png',
        githubUrl: 'https://github.com/yourusername/drumbox',
    },
    {
        id: '9',
        title: 'Holidays Calculator',
        description: 'A tool for calculating and managing holiday dates in Slovenia.',
        imageUrl: '/images/holidaysCalculator/holidaysCalculator.png',
        githubUrl: 'https://github.com/yourusername/holidays-calculator',
    },
];

export default function ProjectsPage() {
    return (
        <div className='flex flex-col gap-5 p-5 lg:p-10'>
            <ProjectShowcaseGrid projects={projectsData} />
        </div>
    );
}
