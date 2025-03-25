'use client';

import { useEffect } from 'react';
import useLanguageStore from '../store/useLanguageStore';
import { useRouter } from 'next/navigation';

interface LanguageToggleButtonProps {
    locale: string;
}

const LanguageToggleButton = ({ locale }: LanguageToggleButtonProps) => {
    const { toggleLanguage, initializeLanguage } = useLanguageStore();
    const router = useRouter();

    useEffect(() => {
        initializeLanguage(locale);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    locale === 'en' ? 'translate-x-0' : 'translate-x-[36px]'
                }`}
            >
                {locale === 'en' ? 'ENG' : 'SLO'}
            </span>
            <span className='flex w-full justify-between px-2 text-[11px] font-medium'>
                <span className={locale === 'en' ? 'invisible' : ''}>ENG</span>
                <span className={locale === 'sl' ? 'invisible' : ''}>SLO</span>
            </span>
        </button>
    );
};

export default LanguageToggleButton;
