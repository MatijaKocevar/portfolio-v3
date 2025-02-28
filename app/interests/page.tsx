import VideoGallery from './components/VideoGallery';
import ShortsGallery from './components/ShortsGallery';

export default function InterestsPage() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='mb-8 text-3xl font-bold'>My YouTube Content</h1>

            <div className='flex min-h-[600px] flex-col gap-8 md:flex-row'>
                <div className='flex-1'>
                    <VideoGallery />
                </div>
                <div className='flex-1'>
                    <ShortsGallery />
                </div>
            </div>
        </div>
    );
}
