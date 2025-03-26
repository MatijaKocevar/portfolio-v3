import { create } from 'zustand';
interface Theme {
    name: string;
    lightColor: string;
    darkColor: string;
}

interface ThemeState {
    baseThemes: Theme[];
    variants: string[];
    getThemeList: () => string[];
    getThemeColor: (themeName: string, variant: string) => string | null;
    currentTheme: string;
    setCurrentTheme: (theme: string) => void;
    loadTheme: () => void;
}

const useThemeStore = create<ThemeState>((set, get) => ({
    baseThemes: [
        {
            name: 'default',
            lightColor: '#a1a1aa',
            darkColor: '#a1a1aa',
        },
        {
            name: 'red',
            lightColor: '#FF3B30',
            darkColor: '#FF3B30',
        },
        {
            name: 'blue',
            lightColor: '#0A84FF',
            darkColor: '#0A84FF',
        },
    ],
    variants: ['light', 'dark'],
    getThemeList: () => {
        return get().baseThemes.reduce((acc: string[], theme) => {
            return [...acc, ...get().variants.map((variant) => `${theme.name}-${variant}`)];
        }, []);
    },
    getThemeColor: (themeName: string, variant: string) => {
        const theme = get().baseThemes.find((theme) => theme.name === themeName);

        if (!theme) {
            return null;
        }

        return theme[`${variant}Color` as 'lightColor' | 'darkColor'];
    },
    currentTheme: 'default-light',
    setCurrentTheme: (theme: string) => {
        set({ currentTheme: theme });
        localStorage.setItem('theme', theme);
    },
    loadTheme: () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            set({ currentTheme: savedTheme });
        }
    },
}));

export default useThemeStore;
