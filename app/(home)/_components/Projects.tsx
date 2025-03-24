'use client';

import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDeviceType } from '@/hooks/useDeviceType';
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
        image: '/images/zelda-clone/zelda-clone.png',
        liveUrl: 'https://matijakocevar.github.io/zelda-clone/',
        githubUrl: 'https://github.com/MatijaKocevar/zelda-clone',
        wip: true,
    },
    {
        key: 'anasPlace',
        image: '/images/anas-place/anas-place-thumb.png',
        liveUrl: 'https://anas-place.net',
        githubUrl: 'https://github.com/MatijaKocevar/anas-place',
        wip: true,
    },
];

export default function Projects() {
    const t = useTranslations('home.projects');
    const { isMobile, isPortrait } = useDeviceType();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const [isMobileLandscape, setIsMobileLandscape] = useState(false);

    useEffect(() => {
        if (isMobile && !isPortrait) {
            setIsMobileLandscape(true);
        } else {
            setIsMobileLandscape(false);
        }
    }, [isMobile, isPortrait]);

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
        <div className='relative flex h-full flex-col px-0 md:px-16'>
            <h1 className='shrink-0 text-2xl font-semibold'>{t('title')}</h1>
            <button
                onClick={prevProject}
                className='absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20 md:-left-8'
                aria-label={t('navigation.prev')}
                disabled={isSliding}
            >
                <ChevronLeft className='h-8 w-8' />
            </button>

            <button
                onClick={nextProject}
                className='absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20 md:-right-8'
                aria-label={t('navigation.next')}
                disabled={isSliding}
            >
                <ChevronRight className='h-8 w-8' />
            </button>

            <section
                className='relative flex flex-1 overflow-hidden rounded-xl bg-background/95 p-4 md:p-8'
                style={{ paddingTop: isMobileLandscape ? '0px' : '2rem' }}
            >
                <div
                    className={`flex h-full w-full flex-col items-center gap-4 transition-all duration-500 ease-in-out ${slideClass}`}
                >
                    <div
                        className='flex shrink-0 flex-col items-center gap-2 text-center'
                        style={{ flexDirection: isMobileLandscape ? 'row' : 'column' }}
                    >
                        <h2 className='mb-2 text-2xl font-semibold'>{t(`items.${currentProject.key}.title`)}</h2>
                        {currentProject.wip && <span className='text-sm text-red-500'>{t('wip')}</span>}
                    </div>

                    <div
                        className='relative min-h-0 w-full max-w-2xl flex-1 overflow-hidden rounded-lg'
                        style={{ maxHeight: isMobile ? 'calc(100dvh - 300px)' : 'none' }}
                    >
                        <Image
                            src={currentProject.image}
                            alt={currentProject.key}
                            width={1280}
                            height={720}
                            className='h-full w-full object-contain transition-transform hover:scale-105'
                            unoptimized
                        />
                    </div>

                    <div className='w-full max-w-2xl shrink-0'>
                        <p className='mb-4 text-center text-sm text-foreground/70'>
                            {t(`items.${currentProject.key}.description`)}
                        </p>

                        <div className='flex justify-center gap-4'>
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
            </section>
        </div>
    );
}
