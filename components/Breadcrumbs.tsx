'use client';

import { ChevronRight } from 'lucide-react';
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

    return (
        <div className='flex items-center gap-2 text-sm'>
            {pathname === '/' ? (
                <div className='flex items-center gap-2'>
                    <ChevronRight className='h-4 w-4 text-muted-foreground' />
                    <span className='text-primary'>{t('nav.home')}</span>
                </div>
            ) : (
                pathSegments.map((segment, index) => (
                    <div key={segment.href} className='flex items-center gap-2'>
                        <ChevronRight className='h-4 w-4 text-muted-foreground' />
                        {index === pathSegments.length - 1 ? (
                            <span className='text-foreground'>{segment.name}</span>
                        ) : (
                            <Link
                                scroll={false}
                                href={segment.href}
                                className='text-muted-foreground hover:text-primary'
                            >
                                {segment.name}
                            </Link>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default Breadcrumbs;
