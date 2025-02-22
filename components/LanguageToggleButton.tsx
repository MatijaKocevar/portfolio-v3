'use client';

import useLanguageStore from '../store/useLanguageStore';

const LanguageToggleButton = () => {
    const { language, setLanguage } = useLanguageStore();

    return (
        <button
            className='relative flex h-7 w-[74px] items-center rounded-full bg-foreground/10 p-1 transition-colors hover:bg-foreground/20'
            onClick={() => setLanguage(language === 'ENG' ? 'SLO' : 'ENG')}
            aria-label='Toggle language'
        >
            <span
                className={`absolute z-10 flex h-5 w-[32px] transform items-center justify-center rounded-full bg-foreground text-[11px] font-medium text-background transition-transform ${
                    language === 'ENG' ? 'translate-x-0' : 'translate-x-[36px]'
                }`}
            >
                {language}
            </span>
            <span className='flex w-full justify-between px-2 text-[11px] font-medium'>
                <span className={language === 'ENG' ? 'invisible' : ''}>ENG</span>
                <span className={language === 'SLO' ? 'invisible' : ''}>SLO</span>
            </span>
        </button>
    );
};

export default LanguageToggleButton;
