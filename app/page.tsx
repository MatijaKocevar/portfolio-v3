import { Code2, Blocks, Boxes, Layers, Database, FileCode, UserCircle2 } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
    const techStack = [
        // Backend & Languages
        { icon: Code2, label: 'C#' },
        { icon: Blocks, label: '.NET' },
        { icon: Code2, label: 'PHP Symfony' },
        { icon: Code2, label: 'Python' },

        // Frontend
        { icon: Code2, label: 'JavaScript' },
        { icon: Code2, label: 'TypeScript' },
        { icon: Blocks, label: 'React' },
        { icon: Blocks, label: 'Vue' },
        { icon: Blocks, label: 'Angular' },
        { icon: Boxes, label: 'Next.js' },
        { icon: FileCode, label: 'HTML & CSS' },
        { icon: FileCode, label: 'Tailwind' },

        // Databases
        { icon: Database, label: 'PostgreSQL' },
        { icon: Database, label: 'MySQL' },
        { icon: Database, label: 'SQL Server' },
        { icon: Layers, label: 'Prisma' },

        // Infrastructure
        { icon: Boxes, label: 'AWS' },
        { icon: Boxes, label: 'Docker' },
        { icon: Layers, label: 'Vercel' },
        { icon: FileCode, label: 'GitHub' },
    ];

    const featuredProjects = [
        {
            title: 'Project 1',
            description: 'Short description of the project',
        },
        {
            title: 'Project 2',
            description: 'Short description of the project',
        },
    ];

    return (
        <div className='flex h-[calc(100vh-133px)] items-center'>
            <div className='flex w-full flex-col gap-4 md:flex-row'>
                <div className='flex w-full flex-col justify-center space-y-12 md:w-1/2'>
                    <div className='-mt-12 flex flex-col items-center space-y-8 md:items-start'>
                        <div className='relative mb-20 ml-auto mr-auto flex h-48 w-48 items-center justify-center rounded-full border-4 border-foreground/10'>
                            <UserCircle2 className='h-32 w-32 text-foreground/80' strokeWidth={1.5} />
                        </div>
                        <div className='space-y-4 text-center md:text-left'>
                            <h1 className='text-4xl font-bold md:text-5xl'>Software Developer</h1>
                            <p className='text-lg text-foreground/80'>
                                Passionate about creating elegant solutions to complex problems. Specialized in building
                                modern web applications with focus on performance and user experience.
                            </p>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <h2 className='text-center text-2xl font-semibold md:text-left'>Tech Stack</h2>
                        <div className='space-y-6'>
                            <div className='space-y-4'>
                                <div className='flex flex-wrap justify-center gap-6 md:justify-start'>
                                    {techStack.map((tech) => (
                                        <div key={tech.label} className='flex flex-col items-center space-y-2'>
                                            <tech.icon
                                                className='h-10 w-10 transition-colors hover:text-foreground/80'
                                                strokeWidth={1.5}
                                            />
                                            <span className='text-sm'>{tech.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-1/2'>
                    <div className='h-full overflow-y-auto'>
                        <h2 className='mb-6 text-2xl font-semibold'>Featured Projects</h2>
                        <div className='grid gap-6'>
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project.title} {...project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
