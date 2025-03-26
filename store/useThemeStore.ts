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
}

const useThemeStore = create<ThemeState>((set, get) => ({
    baseThemes: [
        {
            name: 'default',
            lightColor: '#000000',
            darkColor: '#FFFFFF',
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
}));

export default useThemeStore;
