'use client';

import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Project = {
    key: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    wip: boolean;
};

const showcaseProjects: Project[] = [
    {
        key: 'zelda',
        image: '/images/zelda-clone/webp/1200.webp',
        liveUrl: 'https://matijakocevar.github.io/zelda-clone/',
        githubUrl: 'https://github.com/MatijaKocevar/zelda-clone',
        wip: true,
    },
    {
        key: 'anasPlace',
        image: '/images/anas-place/webp/1200.webp',
        liveUrl: 'https://anas-place.net',
        githubUrl: 'https://github.com/MatijaKocevar/anas-place',
        wip: true,
    },
];

export default function Projects() {
    const t = useTranslations('home.projects');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const [imageLoading, setImageLoading] = useState(true);

    const nextProject = () => {
        if (isSliding) return;
        setIsSliding(true);
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
            setIsSliding(false);
        }, 500);
    };

    const prevProject = () => {
        if (isSliding) return;
        setIsSliding(true);
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
            setIsSliding(false);
        }, 500);
    };

    const currentProject = showcaseProjects[currentIndex];

    const slideClass = isSliding
        ? slideDirection === 'right'
            ? 'opacity-0 translate-x-[50px]'
            : 'opacity-0 -translate-x-[50px]'
        : 'opacity-100 translate-x-0';

    return (
        <div className='relative flex max-w-full flex-col'>
            <h1 className='shrink-0 text-2xl font-semibold'>{t('title')}</h1>

            <section
                className='relative flex flex-1 overflow-hidden rounded-xl bg-background/95 p-4 pt-1 md:p-8'
                style={{ paddingTop: '1rem' }}
            >
                <div
                    className={`flex h-full w-full flex-col items-center gap-4 transition-all duration-500 ease-in-out ${slideClass}`}
                >
                    <div className='flex w-full flex-col items-center gap-4 max-[1023px]:landscape:flex-row max-[1023px]:landscape:items-center max-[1023px]:landscape:justify-between'>
                        {/* Navigation buttons for landscape mobile */}
                        <button
                            onClick={prevProject}
                            className='hidden rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20 max-[1023px]:landscape:flex'
                            aria-label={t('navigation.prev')}
                            disabled={isSliding}
                        >
                            <ChevronLeft className='h-6 w-6' />
                        </button>

                        <div className='flex w-full flex-col gap-4 max-[1023px]:landscape:w-[90%] max-[1023px]:landscape:flex-row'>
                            <div className='w-full max-[1023px]:landscape:w-1/2'>
                                <div className='mb-4 flex flex-col items-center gap-2 text-center'>
                                    <h2 className='text-2xl font-semibold'>{t(`items.${currentProject.key}.title`)}</h2>
                                    {currentProject.wip && <span className='text-sm text-red-500'>{t('wip')}</span>}
                                </div>

                                <div className='relative aspect-[16/10] min-h-[300px] w-full max-[1023px]:landscape:min-h-[200px]'>
                                    {imageLoading && (
                                        <div className='absolute inset-0 animate-pulse rounded-lg bg-foreground/5' />
                                    )}
                                    <Image
                                        src={currentProject.image}
                                        alt={currentProject.key}
                                        fill
                                        sizes='(max-width: 768px) 800px, 1200px'
                                        quality={85}
                                        className={`rounded-lg object-contain transition-opacity duration-300 ${
                                            imageLoading ? 'opacity-0' : 'opacity-100'
                                        }`}
                                        priority
                                        onLoad={() => setImageLoading(false)}
                                    />
                                </div>
                            </div>

                            <div className='w-full max-[1023px]:landscape:w-1/2 max-[1023px]:landscape:self-center'>
                                <p className='mb-4 text-center text-sm text-foreground/70 max-[1023px]:landscape:text-left'>
                                    {t(`items.${currentProject.key}.description`)}
                                </p>

                                <div className='flex justify-center gap-4 max-[1023px]:landscape:justify-start'>
                                    <a
                                        href={currentProject.liveUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center gap-2 rounded-md bg-foreground/10 px-4 py-2 text-sm hover:bg-foreground/20'
                                    >
                                        <ExternalLink className='h-4 w-4' />
                                        {t('links.demo')}
                                    </a>
                                    <a
                                        href={currentProject.githubUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center gap-2 rounded-md bg-foreground/10 px-4 py-2 text-sm hover:bg-foreground/20'
                                    >
                                        <Github className='h-4 w-4' />
                                        {t('links.code')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={nextProject}
                            className='hidden rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20 max-[1023px]:landscape:flex'
                            aria-label={t('navigation.next')}
                            disabled={isSliding}
                        >
                            <ChevronRight className='h-6 w-6' />
                        </button>
                    </div>
                </div>
            </section>

            {/* Regular navigation buttons (hidden in landscape) */}
            <button
                onClick={prevProject}
                className='absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20 md:-left-8 max-[1023px]:landscape:hidden'
                aria-label={t('navigation.prev')}
                disabled={isSliding}
            >
                <ChevronLeft className='h-8 w-8' />
            </button>

            <button
                onClick={nextProject}
                className='absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20 md:-right-8 max-[1023px]:landscape:hidden'
                aria-label={t('navigation.next')}
                disabled={isSliding}
            >
                <ChevronRight className='h-8 w-8' />
            </button>
        </div>
    );
}
