'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import useThemeStore from '../store/use-theme-store';

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    const { getThemeList } = useThemeStore();

    return (
        <NextThemesProvider themes={getThemeList()} {...props}>
            {children}
        </NextThemesProvider>
    );
}
