import { AlertCircle } from 'lucide-react';

export default function Banner() {
    return (
        <div className='mb-12 flex flex-col gap-2 rounded-md border border-red-500/20 bg-red-500/5 px-3 py-2 text-sm text-red-500'>
            <div className='flex items-center gap-2'>
                <AlertCircle className='h-4 w-4 shrink-0' />
                <span>New Portfolio Coming Soon!</span>
            </div>
            <p className='pl-6 text-xs leading-relaxed'>
                I&apos;m completely rebuilding my portfolio from scratch with some cool new features and a fresh design!
            </p>
            <p className='pl-6 text-xs leading-relaxed'>
                While I work on this, you can view my previous portfolio at{' '}
                <a
                    href='https://matijakprojects.com/portfolio_V2/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-medium underline decoration-2 hover:text-red-400'
                >
                    matijakprojects.com/portfolio_V2
                </a>
            </p>
        </div>
    );
}
