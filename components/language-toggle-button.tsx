'use client';

import { useEffect, useState } from 'react';
import useLanguageStore from '../store/use-language-store';
import { useRouter } from 'next/navigation';
import useThemeStore from '../store/use-theme-store';

interface LanguageToggleButtonProps {
    locale: string;
}

const LanguageToggleButton = ({ locale }: LanguageToggleButtonProps) => {
    const { toggleLanguage, initializeLanguage } = useLanguageStore();
    const router = useRouter();
    const { currentTheme } = useThemeStore();
    const [isDefaultTheme, setIsDefaultTheme] = useState(false);

    useEffect(() => {
        const isDefault = currentTheme.includes('default');

        setIsDefaultTheme(isDefault);
    }, [currentTheme]);

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
                className={`absolute z-10 flex h-5 w-[32px] transform items-center justify-center rounded-full bg-primary text-[11px] font-medium transition-transform ${
                    locale === 'en' ? 'translate-x-0' : 'translate-x-[36px]'
                } ${isDefaultTheme ? 'text-background' : 'text-foreground'}`}
            >
                {locale === 'en' ? 'ENG' : 'SLO'}
            </span>
            <span className='flex w-full justify-between px-2 text-[11px] font-medium text-muted-foreground'>
                <span className={locale === 'en' ? 'invisible' : ''}>ENG</span>
                <span className={locale === 'sl' ? 'invisible' : ''}>SLO</span>
            </span>
        </button>
    );
};

export default LanguageToggleButton;
