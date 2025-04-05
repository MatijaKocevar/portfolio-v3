'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { useLocale } from 'next-intl';
import SocialLinks from './SocialLinks';
import { ThemeModeToggle } from './ThemeModeToggle';
import LanguageToggleButton from './LanguageToggleButton';

// This is sample data.
const data = {
    versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
    navMain: [
        {
            title: 'About',
            url: '/about',
        },
        {
            title: 'Experience',
            url: '/experience',
        },
        {
            title: 'Projects',
            url: '/projects',
        },
        {
            title: 'Skills',
            url: '/skills',
        },
        {
            title: 'Interests',
            url: '/interests',
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    const locale = useLocale();

    return (
        <Sidebar {...props}>
            <SidebarHeader className='h-16 items-center justify-center bg-background'>
                <Link href='/' className={`text-xl font-bold text-foreground hover:text-primary`} scroll={false}>
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
                            className={`flex h-10 w-full items-center px-4 text-sm ${
                                isActive
                                    ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground'
                                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                            }`}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </SidebarContent>
            <SidebarFooter className='border-t bg-background p-4 md:hidden'>
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
            <SidebarRail />
        </Sidebar>
    );
}
