'use client';

import { Code2, Blocks, Database } from 'lucide-react';
import Image from 'next/image';
import Banner from '@/components/Banner';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useTranslations } from 'next-intl';

const techStack = [
    // Frontend & Languages
    { icon: Blocks, label: 'react' },
    { icon: Blocks, label: 'vue' },
    { icon: Blocks, label: 'nextjs' },
    { icon: Code2, label: 'typescript' },

    // Backend
    { icon: Code2, label: 'csharp' },
    { icon: Code2, label: 'php' },

    // Database
    { icon: Database, label: 'postgresql' },
    { icon: Database, label: 'sqlserver' },
];

export default function Bio() {
    const { isMobile, isPortrait } = useDeviceType();
    const isMobileLandscape = isMobile && !isPortrait;
    const t = useTranslations('home.bio');

    return (
        <div
            className='flex flex-col justify-around rounded-xl bg-background/95 p-4 md:min-h-0 md:p-8'
            style={
                isMobile ? (isPortrait ? { height: 'calc(100vh - 68px)' } : { minHeight: 'calc(100vh - 40px)' }) : {}
            }
        >
            {isMobileLandscape ? (
                <div className='flex h-full gap-8'>
                    <div className='flex w-[45%] flex-col items-center justify-center'>
                        <div className='mb-4 flex justify-center'>
                            <div className='relative h-32 w-32 overflow-hidden rounded-full border-4 border-foreground/10'>
                                <Image
                                    src='/images/me.png'
                                    alt='Profile'
                                    width={192}
                                    height={192}
                                    className='object-cover'
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='mb-2 text-2xl font-bold'>{t('role')}</h1>
                            <p className='text-sm text-foreground/80'>{t('tagline')}</p>
                        </div>
                    </div>

                    <div className='flex w-[55%] flex-col justify-between gap-6 py-4'>
                        <Banner />
                        <div className='flex justify-center'>
                            <div className='flex w-full flex-wrap justify-center gap-2'>
                                {techStack.map((tech) => (
                                    <div key={tech.label} className='flex w-[15%] flex-col items-center gap-1'>
                                        <tech.icon className='h-6 w-6 transition-colors hover:text-foreground/80' />
                                        <span className='text-[10px]'>{t(`techStack.${tech.label}`)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='flex justify-center'>
                        <div className='relative h-48 w-48 overflow-hidden rounded-full border-4 border-foreground/10'>
                            <Image
                                src='/images/me.png'
                                alt='Profile'
                                width={192}
                                height={192}
                                className='object-cover'
                                unoptimized
                            />
                        </div>
                    </div>

                    <div className='text-center'>
                        <h1 className='mb-4 text-4xl font-bold'>{t('role')}</h1>
                        <p className='text-lg text-foreground/80'>{t('tagline')}</p>
                    </div>

                    <Banner />

                    <div className='flex justify-center'>
                        <div className='flex w-full max-w-xl flex-wrap justify-center gap-4 md:flex-nowrap md:justify-between md:gap-6'>
                            {techStack.map((tech) => (
                                <div key={tech.label} className='flex w-[20%] flex-col items-center gap-2 md:w-auto'>
                                    <tech.icon className='h-8 w-8 transition-colors hover:text-foreground/80 md:h-10 md:w-10' />
                                    <span className='text-xs md:text-sm'>{t(`techStack.${tech.label}`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
