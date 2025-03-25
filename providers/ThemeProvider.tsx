'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    const themeList = ['light', 'dark', 'red-light', 'red-dark', 'blue-light', 'blue-dark'];

    return (
        <NextThemesProvider themes={themeList} {...props}>
            {children}
        </NextThemesProvider>
    );
}
