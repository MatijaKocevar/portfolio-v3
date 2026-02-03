'use client';

import { useTranslations, useLocale } from 'next-intl';
import useNavigationStore from '../store/use-navigation-store';
import { useMemo } from 'react';

const SocialLinks = () => {
    const t = useTranslations();
    const locale = useLocale();
    const { socialLinks } = useNavigationStore();

    const allLinks = useMemo(() => {
        const cvLink = locale === 'sl' ? process.env.NEXT_PUBLIC_CV_LINK_SL : process.env.NEXT_PUBLIC_CV_LINK_EN;

        if (!cvLink) return socialLinks;

        return [
            ...socialLinks,
            {
                href: cvLink,
                label: 'CV',
                tooltipKey: 'nav.openResume',
            },
        ];
    }, [locale, socialLinks]);

    return (
        <div className='flex flex-row items-center gap-4'>
            {allLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`group relative rounded-full transition-colors`}
                    aria-label={link.label}
                    title={t(link.tooltipKey)}
                >
                    {link.icon ? (
                        <link.icon
                            className={`h-5 w-5 fill-muted-foreground text-muted-foreground hover:fill-primary hover:text-primary`}
                        />
                    ) : (
                        <span className={`font-bold text-muted-foreground hover:text-primary`}>{link.label}</span>
                    )}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
