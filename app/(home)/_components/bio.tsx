'use client';

import Image from 'next/image';
import Banner from '@/app/(home)/_components/banner';
import { useTranslations } from 'next-intl';
import { useBioData } from '../_store/use-bio-data';
import IconRenderer from '@/components/icon-renderer';

export default function Bio() {
    const t = useTranslations('home.bio');
    const { techStack } = useBioData();

    return (
        <div className='flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center p-5 lg:p-10 lg:pr-5 max-[1023px]:landscape:min-h-[calc(100vh-64px)]'>
            <div className='flex h-full w-full flex-col justify-evenly gap-10 max-[1023px]:landscape:flex-row max-[1023px]:landscape:justify-between'>
                <div className='flex flex-col items-center justify-center gap-5 max-[1023px]:landscape:w-[50%]'>
                    <div className='relative h-60 w-60 overflow-hidden rounded-full md:h-56 md:w-56 max-[1023px]:landscape:h-40 max-[1023px]:landscape:w-40'>
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
                    <h1 className='text-2xl font-bold md:text-3xl max-[1023px]:landscape:text-xl'>Matija Kočevar</h1>
                    <p className='text-center text-lg text-foreground/80 max-[1023px]:landscape:text-base'>
                        {t('tagline')}
                    </p>
                </div>

                <div className='flex w-full flex-col justify-center gap-10 max-[1023px]:landscape:w-[50%]'>
                    <Banner />
                    <div className='flex justify-center'>
                        <div className='flex w-full max-w-xl flex-wrap justify-center gap-5 portrait:max-sm:gap-6 max-[1023px]:landscape:grid max-[1023px]:landscape:grid-cols-4 max-[1023px]:landscape:gap-2'>
                            {techStack.map((tech) => (
                                <div
                                    key={tech.name}
                                    className='flex w-[16.67%] flex-col items-center gap-2 md:w-auto portrait:max-sm:gap-3 max-[1023px]:landscape:w-full'
                                >
                                    <IconRenderer
                                        name={tech.name}
                                        className='h-8 w-8 text-foreground transition-colors md:h-10 md:w-10 max-[1023px]:landscape:h-7 max-[1023px]:landscape:w-7'
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
