'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useBioData } from '../_store/use-bio-data';
import IconRenderer from '@/components/icon-renderer';

export default function Bio() {
    const t = useTranslations('home.bio');
    const { techStack } = useBioData();

    return (
        <div className='flex w-full flex-col items-center p-5 pb-10 lg:p-10 lg:pb-10 landscape:h-full landscape:w-1/2'>
            <div className='flex w-full flex-col justify-around landscape:h-full'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <div className='relative h-60 w-60 overflow-hidden rounded-full md:h-56 md:w-56'>
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
                </div>

                <div className='flex flex-col items-center justify-center gap-5'>
                    <h1 className='text-2xl font-bold md:text-3xl'>Matija Kočevar</h1>
                    <p className='text-center text-lg text-foreground/80'>{t('tagline')}</p>
                </div>

                <div className='flex w-full flex-col justify-center'>
                    {/* <Banner /> */}
                    <div className='flex flex-col items-center gap-5'>
                        <h2 className='text-center'>{t('techStack')}</h2>
                        <div className='grid w-full max-w-xl grid-cols-3 gap-5 md:grid-cols-4'>
                            {techStack.map((tech) => (
                                <div key={tech.name} className='flex flex-col items-center gap-2'>
                                    <IconRenderer
                                        name={tech.name}
                                        className='h-8 w-8 text-foreground transition-colors md:h-10 md:w-10'
                                    />
                                    <span className='whitespace-nowrap text-xs md:text-sm'>{tech.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
