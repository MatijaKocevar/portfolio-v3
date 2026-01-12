'use client';

import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from '@/components/ui/sidebar';
import { useLocale, useTranslations } from 'next-intl';
import SocialLinks from './social-links';
import { ThemeModeToggle } from './theme-mode-toggle';
import LanguageToggleButton from './language-toggle-button';
import { useDeviceType } from '@/hooks/use-device-type';
import { setCookie } from 'cookies-next';

const data = {
    navMain: [
        {
            title: 'about',
            url: '/about',
        },
        {
            title: 'experience',
            url: '/experience',
        },
        {
            title: 'projects',
            url: '/projects',
        },
        {
            title: 'skills',
            url: '/skills',
        },
        {
            title: 'contact',
            url: '/contact',
        },
    ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations('nav');
    const { setOpenMobile, isMobile, open } = useSidebar();
    const { isPortrait } = useDeviceType();

    useEffect(() => {
        setCookie('sidebar_state', String(open), { maxAge: 60 * 60 * 24 * 30 });
    }, [open]);

    const sidebarSide = isMobile && isPortrait ? 'right' : 'left';

    const handleNavItemClick = () => {
        if (isMobile) {
            setOpenMobile(false);
        }
    };

    return (
        <Sidebar side={sidebarSide} {...props}>
            <SidebarHeader className='h-16 flex-row items-center justify-center bg-background'>
                <Link
                    href='/'
                    className={`text-xl font-bold text-foreground hover:text-primary`}
                    scroll={false}
                    onClick={handleNavItemClick}
                >
                    Matija Kočevar
                </Link>
            </SidebarHeader>
            <SidebarContent className='gap-2 bg-background pt-2'>
                {data.navMain.map((item) => {
                    const isActive = pathname === item.url;
                    return (
                        <Link
                            key={item.title}
                            href={item.url}
                            onClick={handleNavItemClick}
                            className={`flex h-10 w-full items-center px-4 text-sm ${
                                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {t(item.title)}
                        </Link>
                    );
                })}
            </SidebarContent>
            <SidebarFooter className='border-t bg-background p-4'>
                <div className='flex flex-col gap-4 bg-background'>
                    <div className='flex items-center justify-between'>
                        <LanguageToggleButton locale={locale} />
                        <ThemeModeToggle />
                    </div>
                    <div className='flex items-center justify-center'>
                        <SocialLinks />
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
