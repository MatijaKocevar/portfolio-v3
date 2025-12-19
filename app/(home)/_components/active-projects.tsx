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
        <div className='flex w-full flex-col items-center p-5 pb-10 lg:p-10 lg:pb-10 landscape:h-full landscape:w-1/2'>
            <div className='flex w-full flex-col justify-around landscape:h-full'>
                <div className='flex w-full items-center justify-between gap-5 lg:max-w-screen-md'>
                    <button
                        onClick={prevProject}
                        className='rounded-full bg-primary/10 p-3 text-primary transition-all hover:scale-110 hover:bg-primary/20'
                        aria-label={t('navigation.prev')}
                        disabled={isSliding}
                    >
                        <ChevronLeft className='h-6 w-6' />
                    </button>

                    <h1 className='shrink-0 text-2xl font-semibold text-muted-foreground'>{t('title')}</h1>

                    <button
                        onClick={nextProject}
                        className='rounded-full bg-primary/10 p-3 text-primary transition-all hover:scale-110 hover:bg-primary/20'
                        aria-label={t('navigation.next')}
                        disabled={isSliding}
                    >
                        <ChevronRight className='h-6 w-6' />
                    </button>
                </div>

                <div className='flex w-full flex-col items-center justify-center gap-5'>
                    <div
                        className={`flex w-full flex-col items-center transition-all duration-500 ease-in-out ${slideClass}`}
                    >
                        <div className='mb-5 flex flex-col items-center gap-2 text-center'>
                            <h2 className='text-2xl font-semibold'>{t(`items.${currentProject.key}.title`)}</h2>
                            {currentProject.wip && <span className='text-sm text-red-500'>{t('wip')}</span>}
                        </div>

                        <p className='mb-5 text-center text-sm text-foreground/70'>
                            {t(`items.${currentProject.key}.description`)}
                        </p>

                        <div className='flex flex-wrap justify-center gap-5 pb-4'>
                            <Button size='lg' className='min-h-12 min-w-[120px] p-0'>
                                <a
                                    href={currentProject.liveUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex w-full items-center justify-center gap-2 p-4 text-base'
                                >
                                    <ExternalLink className='h-5 w-5' />
                                    {t('links.demo')}
                                </a>
                            </Button>
                            <Button size='lg' className='min-h-12 min-w-[120px] p-0'>
                                <a
                                    href={currentProject.githubUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex w-full items-center justify-center gap-2 p-4 text-base'
                                >
                                    <Github className='h-5 w-5' />
                                    {t('links.code')}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='relative aspect-square max-h-[450px] min-h-[300px] w-full lg:max-w-screen-md'>
                    {imageLoading && <Skeleton className='mx-auto h-full w-full rounded-2xl' />}
                    <Image
                        src={currentProject.image}
                        alt={currentProject.key}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        quality={85}
                        className={`rounded-2xl object-cover transition-opacity duration-300 ${
                            imageLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                        priority
                        onLoad={() => setImageLoading(false)}
                    />
                </div>
            </div>
        </div>
    );
}
