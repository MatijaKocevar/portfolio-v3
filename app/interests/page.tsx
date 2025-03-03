'use client';

import VideoGallery from './components/VideoGallery';
import ShortsGallery from './components/ShortsGallery';

export default function InterestsPage() {
    return (
        <div className='container mx-auto flex h-full flex-col items-center justify-center px-4 py-8'>
            <h1 className='mb-8 text-3xl font-bold'>My YouTube Content</h1>

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
