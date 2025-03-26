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
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu';
import useThemeStore from '../store/useThemeStore';
import { useEffect, useState } from 'react';

type ThemeColorKey = 'lightColor' | 'darkColor';

export function ThemeModeToggle() {
    const t = useTranslations();
    const { resolvedTheme, theme, setTheme } = useTheme();
    const { baseThemes, getThemeColor, setCurrentTheme, loadTheme } = useThemeStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        loadTheme();
        setMounted(true);
    }, [loadTheme]);

    if (!mounted || !resolvedTheme) {
        return (
            <Button
                variant='outline'
                size='icon'
                className='relative h-8 w-8 rounded-full bg-transparent'
                aria-hidden='true'
            >
                <Brush className='h-[1.2rem] w-[1.2rem] text-transparent' />
            </Button>
        );
    }

    const currentThemeName = theme?.split('-')[0] || 'default';
    const currentMode = theme?.split('-')[1] || 'light';
    const currentColor = getThemeColor(currentThemeName, currentMode);

    const handleThemeChange = (newTheme: string) => {
        const newFullTheme = `${newTheme}-${currentMode}`;
        setTheme(newFullTheme);
        setCurrentTheme(newFullTheme);
    };

    const toggleMode = () => {
        const newMode = currentMode === 'light' ? 'dark' : 'light';
        const newFullTheme = `${currentThemeName}-${newMode}`;
        setTheme(newFullTheme);
        setCurrentTheme(newFullTheme);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='outline'
                    size='icon'
                    className='relative h-8 w-8 rounded-full text-foreground'
                    style={currentColor ? { backgroundColor: currentColor } : undefined}
                >
                    <Brush className='h-[1.2rem] w-[1.2rem] fill-foreground text-foreground' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={toggleMode}>
                    <div className='flex items-center gap-2'>
                        {currentMode === 'dark' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
                        <span>
                            {t('components.themeToggle.switchMode', {
                                mode:
                                    currentMode === 'light'
                                        ? t('components.themeToggle.dark')
                                        : t('components.themeToggle.light'),
                            })}
                        </span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <div className='flex items-center gap-2'>
                            <div
                                className='h-6 w-6 rounded-full'
                                style={{ backgroundColor: currentColor || undefined }}
                            />
                            <span>{t('components.themeToggle.changeColor')}</span>
                        </div>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
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
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
