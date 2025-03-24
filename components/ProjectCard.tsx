'use client';

import { FolderKanban } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
    title: string;
    description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
    const t = useTranslations('components.projectCard');

    return (
        <div className='group relative overflow-hidden rounded-lg border border-foreground/10 p-4 transition-all hover:border-foreground/20'>
            <div className='flex h-40 w-full items-center justify-center rounded-lg bg-foreground/5'>
                <FolderKanban className='h-20 w-20 text-foreground/40' strokeWidth={1.5} />
            </div>
            <div className='mt-4 space-y-2'>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <p className='text-foreground/80'>{description}</p>
                <div className='flex gap-4'>
                    <a
                        href='#'
                        className='text-sm underline hover:text-foreground/80'
                        onClick={(e) => e.preventDefault()}
                    >
                        {t('liveDemo')}
                    </a>
                    <a
                        href='#'
                        className='text-sm underline hover:text-foreground/80'
                        onClick={(e) => e.preventDefault()}
                    >
                        {t('github')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
