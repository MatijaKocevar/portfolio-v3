'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useBioData } from '../_store/use-bio-data';
import IconRenderer from '@/components/icon-renderer';

export default function Bio() {
    const t = useTranslations('home.bio');
    const { techStack } = useBioData();

    return (
        <div className='flex w-full flex-col items-center justify-evenly p-4 lg:w-1/2'>
            <div className='relative h-56 w-56 shrink-0 overflow-hidden rounded-full'>
                <Image src='/images/me/384.webp' alt='Profile' fill className='object-cover' priority />
            </div>

            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-2xl font-bold'>Matija Kočevar</h1>
                <p className='text-center text-base text-foreground/80'>{t('tagline')}</p>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <h2 className='text-lg'>{t('techStack')}</h2>
                <div className='grid grid-cols-4 gap-4'>
                    {techStack.map((tech) => (
                        <div key={tech.name} className='flex flex-col items-center gap-2'>
                            <IconRenderer name={tech.name} className='h-8 w-8' />
                            <span className='text-xs'>{tech.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
