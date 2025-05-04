import { ProjectShowcaseGrid } from '@/app/projects/_components/project-showcase-grid';
import type { ShowcaseProject } from '@/types/showcase';

const projectsData: ShowcaseProject[] = [
    {
        id: '12',
        title: 'Portfolio V3',
        description: 'projects.showcase.projectDescriptions.portfolioV3',
        imageUrl: '/images/portfolioV3/portfolioV3.webp',
        githubUrl: 'https://github.com/MatijaKocevar/portfolio-v3',
    },
    {
        id: '11',
        title: 'Role/Permission Management',
        description: 'projects.showcase.projectDescriptions.roles',
        imageUrl: '/images/roles/roles.webp',
        githubUrl: 'https://github.com/MatijaKocevar/roles-poc',
        liveUrl: 'https://roles-poc.vercel.app/',
    },
    {
        id: '5',
        title: 'Zelda Clone',
        description: 'projects.showcase.projectDescriptions.zelda',
        imageUrl: '/images/zelda-clone/zelda_clone.webp',
        githubUrl: 'https://github.com/MatijaKocevar/zelda-clone',
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
        githubUrl: 'https://github.com/MatijaKocevar/diffs',
    },
    {
        id: '8',
        title: 'Drum Box',
        description: 'projects.showcase.projectDescriptions.drumBox',
        imageUrl: '/images/drumbox/drumbox.png',
        githubUrl: 'https://github.com/MatijaKocevar/drumbox',
    },
    {
        id: '9',
        title: 'Holidays Calculator',
        description: 'projects.showcase.projectDescriptions.holidaysCalculator',
        imageUrl: '/images/holidaysCalculator/holidaysCalculator.png',
        githubUrl: 'https://github.com/MatijaKocevar/HolidaysApi',
    },
];

export default function ProjectsPage() {
    return (
        <div className='scrollable-element flex flex-col p-5 lg:p-10'>
            <ProjectShowcaseGrid projects={projectsData} />
        </div>
    );
}
