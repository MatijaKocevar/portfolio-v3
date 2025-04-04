import * as React from 'react';
import Link from 'next/link';
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
    return (
        <Sidebar {...props}>
            <SidebarHeader className='h-16 items-center justify-center bg-background'>
                <Link href='/' className={`text-xl font-bold text-foreground hover:text-primary`} scroll={false}>
                    Matija Kočevar
                </Link>
            </SidebarHeader>
            <SidebarContent className='gap-0 bg-background'>
                {data.navMain.map((item) => (
                    <Link
                        key={item.title}
                        href={item.url}
                        className='text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-10 w-full items-center px-4 text-sm'
                    >
                        {item.title}
                    </Link>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
