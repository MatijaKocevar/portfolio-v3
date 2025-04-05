'use client';

import * as React from 'react';
import { Moon, Sun, Brush } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useThemeStore from '../store/useThemeStore';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

type ThemeColorKey = 'lightColor' | 'darkColor';

export function ThemeModeToggle() {
    const t = useTranslations();
    const { theme, setTheme } = useTheme();
    const { baseThemes, getThemeColor, setCurrentTheme, loadTheme } = useThemeStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        loadTheme();
        setMounted(true);
    }, [loadTheme]);

    // Get current theme properties (safely)
    const currentThemeName = mounted ? theme?.split('-')[0] || 'default' : 'default';
    const currentMode = mounted ? theme?.split('-')[1] || 'light' : 'light';
    const currentColor = mounted ? getThemeColor(currentThemeName, currentMode) : undefined;

    const handleThemeChange = (newTheme: string) => {
        const newFullTheme = `${newTheme}-${currentMode}`;
        setTheme(newFullTheme);
        setCurrentTheme(newFullTheme);
    };

    const toggleMode = () => {
        if (!mounted) return;
        const newMode = currentMode === 'light' ? 'dark' : 'light';
        const newFullTheme = `${currentThemeName}-${newMode}`;
        setTheme(newFullTheme);
        setCurrentTheme(newFullTheme);
    };

    // Always render both buttons to prevent layout shift
    return (
        <div className='flex items-center gap-2'>
            {!mounted ? (
                <>
                    <Skeleton className='h-8 w-8 rounded-full' />
                    <Skeleton className='h-8 w-8 rounded-full' />
                </>
            ) : (
                <>
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={toggleMode}
                        className='h-8 w-8 rounded-full'
                        disabled={!mounted}
                    >
                        {currentMode === 'dark' ? (
                            <Sun className={`h-4 w-4 ${!mounted ? 'opacity-0' : ''}`} />
                        ) : (
                            <Moon className={`h-4 w-4 ${!mounted ? 'opacity-0' : ''}`} />
                        )}
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild disabled={!mounted}>
                            <Button
                                variant='outline'
                                size='icon'
                                className='relative h-8 w-8 rounded-full text-foreground'
                                style={currentColor && mounted ? { backgroundColor: currentColor } : undefined}
                            >
                                <Brush
                                    className={`h-[1.2rem] w-[1.2rem] ${mounted ? 'fill-foreground text-foreground' : 'opacity-0'}`}
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            {baseThemes.map((theme) => (
                                <DropdownMenuItem key={theme.name} onClick={() => handleThemeChange(theme.name)}>
                                    <div className='flex items-center gap-2'>
                                        <div
                                            className='h-4 w-4 rounded-full'
                                            style={{ backgroundColor: theme[`${currentMode}Color` as ThemeColorKey] }}
                                        />
                                        {t(`themes.${theme.name}`)}
                                    </div>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            )}
        </div>
    );
}
