import { useTranslations } from 'next-intl';
import { ProjectShowcaseGrid } from '@/components/showcase/ProjectShowcaseGrid';
import type { ShowcaseProject } from '@/types/showcase';

const projectsData: ShowcaseProject[] = [
    {
        id: '5',
        title: 'Zelda Clone',
        description: 'projects.showcase.projectDescriptions.zelda',
        imageUrl: '/images/zelda-clone/zelda_clone.webp',
        githubUrl: 'https://github.com/MatijaKocevar/anas-place',
        liveUrl: 'https://matijakprojects.com/zelda-clone/',
    },
    {
        id: '4',
        title: 'Space Invaders',
        description: 'projects.showcase.projectDescriptions.spaceInvaders',
        imageUrl: '/images/space-invaders/space-invaders.webp',
        githubUrl: 'https://github.com/MatijaKocevar/space-invaders',
        liveUrl: 'https://matijakprojects.com/space-invaders/',
    },
    {
        id: '10',
        title: "Ana's Place",
        description: 'projects.showcase.projectDescriptions.anasPlace',
        imageUrl: '/images/anas-place/anas_place.webp',
        githubUrl: 'https://github.com/MatijaKocevar/anas-place',
        liveUrl: 'https://anas-place.net/',
    },
    {
        id: '3',
        title: 'Task Management',
        description: 'projects.showcase.projectDescriptions.taskManagement',
        imageUrl: '/images/task-management/task-management.webp',
        githubUrl: 'https://github.com/MatijaKocevar/task-management',
        liveUrl: 'https://matijakprojects.com/task-management-frontend/',
    },
    {
        id: '1',
        title: 'Portfolio V2',
        description: 'projects.showcase.projectDescriptions.portfolioV2',
        imageUrl: '/images/portfolioV2/portfolioV2.png',
        githubUrl: 'https://github.com/MatijaKocevar/portfolio_V2',
        liveUrl: 'https://matijakprojects.com/portfolio_V2/',
    },
    {
        id: '2',
        title: 'Portfolio V1',
        description: 'projects.showcase.projectDescriptions.portfolioV1',
        imageUrl: '/images/portfolioV1/portfolioV1.png',
        githubUrl: 'https://github.com/MatijaKocevar/myPortfolio',
        liveUrl: 'https://matijakprojects.com/myPortfolio/',
    },
    {
        id: '6',
        title: 'Vue Dynamic Forms',
        description: 'projects.showcase.projectDescriptions.vueDynamicForms',
        imageUrl: '/images/vue-dynamic-forms/vue-dynamic-forms.png',
        githubUrl: 'https://github.com/MatijaKocevar/vue-dynamic-forms',
        liveUrl: 'https://matijakprojects.com/vue-dynamic-forms/#/registration',
    },
    {
        id: '7',
        title: 'Diffing API',
        description: 'projects.showcase.projectDescriptions.diffingApi',
        imageUrl: '/images/diffingApi/diffingApi.png',
        githubUrl: 'https://github.com/yourusername/diffing-api',
    },
    {
        id: '8',
        title: 'Drum Box',
        description: 'projects.showcase.projectDescriptions.drumBox',
        imageUrl: '/images/drumbox/drumbox.png',
        githubUrl: 'https://github.com/yourusername/drumbox',
    },
    {
        id: '9',
        title: 'Holidays Calculator',
        description: 'projects.showcase.projectDescriptions.holidaysCalculator',
        imageUrl: '/images/holidaysCalculator/holidaysCalculator.png',
        githubUrl: 'https://github.com/yourusername/holidays-calculator',
    },
];

export default function ProjectsPage() {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-5 p-5 lg:p-10'>
            <h1 className='mb-6 text-3xl font-bold'>{t('projects.title')}</h1>
            <div className='mb-8'>
                <p>{t('projects.description')}</p>
            </div>
            <ProjectShowcaseGrid projects={projectsData} />
        </div>
    );
}
