'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Breadcrumbs = () => {
    const t = useTranslations();
    const pathname = usePathname();

    const pathSegments = pathname
        .split('/')
        .filter(Boolean)
        .map((segment) => ({
            name: t(`nav.${segment}`),
            href: `/${segment}`,
        }));

    if (pathname === '/') return null;

    return (
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            {pathSegments.map((segment, index) => (
                <div key={segment.href} className='flex items-center gap-2'>
                    <ChevronRight className='h-4 w-4' />
                    <span className='hover:text-foreground'>{segment.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Breadcrumbs;
