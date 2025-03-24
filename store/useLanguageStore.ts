import { create } from 'zustand';

interface LanguageState {
    language: string | null;
    setLanguage: (newLanguage: string) => void;
    initializeLanguage: (language: string) => void;
    toggleLanguage: () => void;
}

const useLanguageStore = create<LanguageState>((set, get) => ({
    language: null,
    setLanguage: (newLanguage) => {
        set({ language: newLanguage });
        document.cookie = `MATIJAKOCEVARPORTFOLIO_LOCALE=${newLanguage}; path=/`;
    },
    initializeLanguage: (language) => {
        set({ language });
    },
    toggleLanguage: () => {
        const { language, setLanguage } = get();
        setLanguage(language === 'en' ? 'sl' : 'en');
    },
}));

export default useLanguageStore;
