'use client';

import { useEffect } from 'react';
import useLanguageStore from '../store/useLanguageStore';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

const LanguageToggleButton = () => {
    const { language, toggleLanguage, initializeLanguage } = useLanguageStore();
    const router = useRouter();

    useEffect(() => {
        if (!language) {
            const locale = document.documentElement.lang;
            initializeLanguage(locale);
        }
    }, []);

    if (!language) {
        return <Skeleton className='h-7 w-[74px] rounded-full opacity-60' />;
    }

    const handleToggle = () => {
        toggleLanguage();
        router.refresh();
    };

    return (
        <button
            className='relative flex h-7 w-[74px] items-center rounded-full bg-foreground/10 p-1 transition-all duration-300 hover:bg-foreground/20'
            onClick={handleToggle}
            aria-label='Toggle language'
        >
            <span
                className={`absolute z-10 flex h-5 w-[32px] transform items-center justify-center rounded-full bg-foreground text-[11px] font-medium text-background transition-transform ${
                    language === 'en' ? 'translate-x-0' : 'translate-x-[36px]'
                }`}
            >
                {language === 'en' ? 'ENG' : 'SLO'}
            </span>
            <span className='flex w-full justify-between px-2 text-[11px] font-medium'>
                <span className={language === 'en' ? 'invisible' : ''}>ENG</span>
                <span className={language === 'sl' ? 'invisible' : ''}>SLO</span>
            </span>
        </button>
    );
};

export default LanguageToggleButton;
