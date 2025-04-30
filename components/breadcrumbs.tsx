'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Breadcrumbs = () => {
    const t = useTranslations();
    const pathname = usePathname();

    if (pathname.startsWith('/public') || pathname.includes('/manifest/')) {
        return null;
    }

    const pathSegments = pathname
        .split('/')
        .filter(Boolean)
        .filter((segment) => !segment.includes('.'))
        .map((segment) => ({
            name: isNaN(Number(segment)) ? t(`nav.${segment}`) : segment,
            href: `/${segment}`,
        }));

    const breadcrumbs = [];

    if (pathname === '/') {
        breadcrumbs.push(
            <div key='home' className='flex items-center gap-2'>
                <span className='text-primary'>
                    <Home className='h-4 w-4' />
                </span>
                <span className='text-primary'>{t('nav.home')}</span>
            </div>,
        );
    } else {
        breadcrumbs.push(
            <div key='home' className='flex items-center gap-2'>
                <Link scroll={false} href='/' className='text-muted-foreground hover:text-primary'>
                    <Home className='h-4 w-4' />
                </Link>
            </div>,
        );

        pathSegments.forEach((segment, index) => {
            const isLastSegment = index === pathSegments.length - 1;
            const segmentElement = isLastSegment ? (
                <span className='text-primary'>{segment.name}</span>
            ) : (
                <Link scroll={false} href={segment.href} className='text-muted-foreground hover:text-primary'>
                    {segment.name}
                </Link>
            );

            breadcrumbs.push(
                <div key={segment.href} className='flex items-center gap-2'>
                    <ChevronRight className='h-4 w-4 text-muted-foreground' />
                    {segmentElement}
                </div>,
            );
        });
    }

    return <div className='flex items-center gap-2 text-sm'>{breadcrumbs}</div>;
};

export default Breadcrumbs;
