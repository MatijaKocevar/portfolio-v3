import { AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Banner() {
    const t = useTranslations('components.banner');

    return (
        <div className='mb-12 flex flex-col gap-2 rounded-md border border-red-500/20 bg-red-500/5 px-3 py-2 text-sm text-red-500'>
            <div className='flex items-center gap-2'>
                <AlertCircle className='h-4 w-4 shrink-0' />
                <span>{t('title')}</span>
            </div>
            <p className='pl-6 text-xs leading-relaxed'>{t('description')}</p>
            <p className='pl-6 text-xs leading-relaxed'>
                {t('previousPortfolio')}{' '}
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
