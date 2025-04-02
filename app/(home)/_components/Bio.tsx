'use client';

import Image from 'next/image';
import Banner from '@/components/Banner';
import { useTranslations } from 'next-intl';
import { useBioData } from '../_store/useBioData';
import IconRenderer from '@/components/IconRenderer';

export default function Bio() {
    const t = useTranslations('home.bio');
    const { techStack } = useBioData();

    return (
        <div
            className={`flex min-h-[calc(100vh-68px)] flex-col justify-around rounded-xl bg-background/95 min-[1024px]:min-h-[600px] min-[1024px]:min-h-[calc(100vh-65px)] max-[1023px]:landscape:min-h-[calc(100vh-40px)]`}
        >
            <div className='flex h-full flex-col gap-12 portrait:gap-8 max-[1023px]:landscape:flex-row max-[1023px]:landscape:gap-8'>
                <div className='flex flex-col items-center justify-center max-[1023px]:landscape:w-[45%]'>
                    <div className='mb-4 flex justify-center'>
                        <div className='relative h-48 w-48 overflow-hidden rounded-full border-4 border-foreground/10 max-[1023px]:landscape:h-32 max-[1023px]:landscape:w-32'>
                            <Image
                                src='/images/me/384.webp'
                                alt='Profile'
                                width={192}
                                height={192}
                                className='object-cover'
                                priority
                                sizes='(max-width: 1023px) and (orientation: landscape) 128px, 192px'
                                quality={80}
                            />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='mb-4 text-4xl font-bold max-[1023px]:landscape:mb-2 max-[1023px]:landscape:text-2xl'>
                            {t('role')}
                        </h1>
                        <p className='text-lg text-foreground/80 max-[1023px]:landscape:text-sm'>{t('tagline')}</p>
                    </div>
                </div>

                <div className='flex flex-col justify-between gap-6 max-[1023px]:landscape:w-[55%] max-[1023px]:landscape:py-4'>
                    <Banner />
                    <div className='flex justify-center'>
                        <div className='flex w-full max-w-xl flex-wrap justify-center gap-4 md:flex-nowrap md:justify-between md:gap-6 max-[1023px]:landscape:gap-2'>
                            {techStack.map((tech) => (
                                <div
                                    key={tech.name}
                                    className='flex w-[20%] flex-col items-center gap-2 md:w-auto max-[1023px]:landscape:w-[15%] max-[1023px]:landscape:gap-1'
                                >
                                    <IconRenderer
                                        name={tech.name}
                                        className='h-8 w-8 text-foreground transition-colors hover:text-foreground/80 md:h-10 md:w-10 max-[1023px]:landscape:h-6 max-[1023px]:landscape:w-6'
                                    />
                                    <span className='whitespace-nowrap text-xs md:text-sm max-[1023px]:landscape:text-[10px]'>
                                        {tech.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
