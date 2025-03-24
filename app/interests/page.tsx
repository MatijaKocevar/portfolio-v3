'use client';

import VideoGallery from './_components/VideoGallery';
import ShortsGallery from './_components/ShortsGallery';
import { useTranslations } from 'next-intl';

export default function InterestsPage() {
    const t = useTranslations();

    return (
        <div className='container flex h-full flex-col items-center justify-center'>
            <h1 className='mb-8 text-3xl font-bold'>{t('interests.youtube.title')}</h1>

            <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
                <div className='w-full'>
                    <VideoGallery />
                </div>
                <div className='w-full'>
                    <ShortsGallery />
                </div>
            </div>
        </div>
    );
}
