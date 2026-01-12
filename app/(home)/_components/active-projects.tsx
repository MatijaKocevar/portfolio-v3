'use client';

import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '../../../components/ui/button';
import { Skeleton } from '../../../components/ui/skeleton';
import { useActiveProjects } from '../_store/use-active-projects';

export default function ActiveProjects() {
    const t = useTranslations('home.projects');
    const {
        currentIndex,
        isSliding,
        slideDirection,
        imageLoading,
        showcaseProjects,
        setImageLoading,
        nextProject,
        prevProject,
    } = useActiveProjects();

    const currentProject = showcaseProjects[currentIndex];

    const slideClass = isSliding
        ? slideDirection === 'right'
            ? 'opacity-0 translate-x-[50px]'
            : 'opacity-0 -translate-x-[50px]'
        : 'opacity-100 translate-x-0';

    return (
        <div className='flex w-full flex-col items-center justify-evenly p-4 lg:w-1/2'>
            <div className='flex w-full max-w-2xl items-center justify-between'>
                <button
                    onClick={prevProject}
                    className='rounded-full bg-primary/10 p-2 hover:bg-primary/20'
                    disabled={isSliding}
                >
                    <ChevronLeft className='h-6 w-6' />
                </button>

                <h1 className='text-xl font-semibold'>{t('title')}</h1>

                <button
                    onClick={nextProject}
                    className='rounded-full bg-primary/10 p-2 hover:bg-primary/20'
                    disabled={isSliding}
                >
                    <ChevronRight className='h-6 w-6' />
                </button>
            </div>

            <div className={`flex flex-col items-center gap-4 transition-all duration-500 ${slideClass}`}>
                <div className='flex flex-col items-center gap-2'>
                    <h2 className='text-xl font-semibold'>{t(`items.${currentProject.key}.title`)}</h2>
                    {currentProject.wip && <span className='text-sm text-red-500'>{t('wip')}</span>}
                </div>

                <p className='max-w-xl text-center text-sm text-foreground/70'>
                    {t(`items.${currentProject.key}.description`)}
                </p>

                <div className='flex gap-4'>
                    <Button size='lg'>
                        <a
                            href={currentProject.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2'
                        >
                            <ExternalLink className='h-5 w-5' />
                            {t('links.demo')}
                        </a>
                    </Button>
                    <Button size='lg'>
                        <a
                            href={currentProject.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2'
                        >
                            <Github className='h-5 w-5' />
                            {t('links.code')}
                        </a>
                    </Button>
                </div>

                <div className='relative aspect-square min-h-[300px] w-full min-w-[300px] max-w-[500px]'>
                    {imageLoading && <Skeleton className='h-full w-full rounded-2xl' />}
                    <Image
                        src={currentProject.image}
                        alt={currentProject.key}
                        fill
                        className='rounded-2xl object-cover'
                        priority
                        onLoad={() => setImageLoading(false)}
                    />
                </div>
            </div>
        </div>
    );
}
