'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useBioData } from '../_store/use-bio-data';
import IconRenderer from '@/components/icon-renderer';

export default function Bio() {
    const t = useTranslations('home.bio');
    const { techStack } = useBioData();

    return (
        <div className='flex w-full flex-col items-center p-5 lg:p-10'>
            <div className='flex w-full flex-col gap-10 landscape:flex-row landscape:justify-between'>
                <div className='flex flex-col items-center justify-center gap-5 landscape:w-[50%]'>
                    <div className='relative h-60 w-60 overflow-hidden rounded-full md:h-56 md:w-56 landscape:h-60 landscape:w-60'>
                        <Image
                            src='/images/me/384.webp'
                            alt='Profile'
                            width={350}
                            height={350}
                            className='object-cover'
                            priority
                            sizes='192px'
                            quality={80}
                        />
                    </div>
                    <h1 className='text-2xl font-bold md:text-3xl landscape:text-xl'>Matija Kočevar</h1>
                    <p className='text-center text-lg text-foreground/80 landscape:text-base'>{t('tagline')}</p>
                </div>

                <div className='flex w-full flex-col justify-center gap-10 landscape:w-[50%]'>
                    {/* <Banner /> */}
                    <div className='flex flex-col items-center gap-5'>
                        <h2 className='text-center'>{t('techStack')}</h2>
                        <div className='flex w-full max-w-xl flex-wrap justify-center gap-5 portrait:max-sm:gap-6 landscape:grid landscape:grid-cols-4 landscape:gap-2'>
                            {techStack.map((tech) => (
                                <div
                                    key={tech.name}
                                    className='flex w-[16.67%] flex-col items-center gap-2 md:w-auto portrait:max-sm:gap-3 landscape:w-full'
                                >
                                    <IconRenderer
                                        name={tech.name}
                                        className='h-8 w-8 text-foreground transition-colors md:h-10 md:w-10 landscape:h-7 landscape:w-7'
                                    />
                                    <span className='whitespace-nowrap text-xs md:text-sm landscape:text-[10px]'>
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
