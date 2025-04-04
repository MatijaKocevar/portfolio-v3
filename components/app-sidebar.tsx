'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

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
                                isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
