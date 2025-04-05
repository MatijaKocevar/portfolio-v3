'use client';

import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '../../../components/ui/button';
import { Skeleton } from '../../../components/ui/skeleton';
import { useActiveProjects } from '../_store/useActiveProjects';

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
        <div className='flex h-[calc(100vh-64px)] w-full flex-col justify-center p-4 lg:p-8 max-[1023px]:landscape:h-full max-[1023px]:landscape:justify-center'>
            <div className='flex items-center justify-between gap-4'>
                <button
                    onClick={prevProject}
                    className='rounded-full bg-primary/10 p-4 text-primary transition-all hover:scale-110 hover:bg-primary/20'
                    aria-label={t('navigation.prev')}
                    disabled={isSliding}
                >
                    <ChevronLeft className='h-6 w-6' />
                </button>

                <h1 className='shrink-0 text-2xl font-semibold text-muted-foreground'>{t('title')}</h1>

                <button
                    onClick={nextProject}
                    className='rounded-full bg-primary/10 p-4 text-primary transition-all hover:scale-110 hover:bg-primary/20'
                    aria-label={t('navigation.next')}
                    disabled={isSliding}
                >
                    <ChevronRight className='h-6 w-6' />
                </button>
            </div>

            <section className='flex h-full justify-center overflow-hidden rounded-xl bg-background/95 pt-4 lg:h-auto'>
                <div
                    className={`flex w-full flex-col items-center transition-all duration-500 ease-in-out max-[1023px]:landscape:justify-center ${slideClass}`}
                >
                    <div className='flex h-full w-full flex-col items-center justify-center gap-8 max-[1023px]:landscape:flex-row'>
                        {/* Project information - goes to the left in landscape mobile */}
                        <div className='flex w-full flex-col justify-center max-[1023px]:landscape:w-[50%]'>
                            <div className='mb-4 flex flex-col items-center gap-2 text-center max-[1023px]:landscape:items-center max-[1023px]:landscape:text-center'>
                                <h2 className='text-2xl font-semibold'>{t(`items.${currentProject.key}.title`)}</h2>
                                {currentProject.wip && <span className='text-sm text-red-500'>{t('wip')}</span>}
                            </div>

                            <div className='w-full max-[1023px]:landscape:order-3'>
                                <p className='mb-4 text-center text-sm text-foreground/70 max-[1023px]:landscape:text-center'>
                                    {t(`items.${currentProject.key}.description`)}
                                </p>

                                <div className='flex flex-wrap justify-center gap-4'>
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

                        {/* Project image - goes to the right in landscape mobile */}
                        <div className='relative aspect-square max-h-[450px] min-h-[300px] w-full landscape:aspect-auto landscape:h-[60vh] landscape:max-h-none landscape:min-h-0 max-[1023px]:landscape:w-[50%]'>
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
            </section>
        </div>
    );
}
