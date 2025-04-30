'use client';

import { useTranslations } from 'next-intl';
import useNavigationStore from '../store/use-navigation-store';

const SocialLinks = () => {
    const t = useTranslations();
    const { socialLinks } = useNavigationStore();

    return (
        <div className='flex flex-row items-center gap-4'>
            {socialLinks.map((link) => (
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
