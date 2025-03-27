'use client';

import Link from 'next/link';
import { Github, Linkedin, Menu } from 'lucide-react';
import LanguageToggleButton from './LanguageToggleButton';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTranslations } from 'next-intl';
import { ThemeModeToggle } from './ThemeModeToggle';
import { usePathname } from 'next/navigation';

interface NavigaitonProps {
    locale: string;
}

const Navigation = ({ locale }: NavigaitonProps) => {
    const t = useTranslations();
    const pathname = usePathname();

    const links = [
        { href: '/about', label: t('nav.about') },
        { href: '/experience', label: t('nav.experience') },
        { href: '/projects', label: t('nav.projects') },
        { href: '/skills', label: t('nav.skills') },
        { href: '/interests', label: t('nav.interests') },
    ];

    const socialLinks = [
        {
            href: 'https://github.com/MatijaKocevar',
            icon: Github,
            label: 'GitHub',
            tooltip: t('nav.openGithub'),
        },
        {
            href: 'https://www.linkedin.com/in/matija-ko%C4%8Devar-59a198109/',
            icon: Linkedin,
            label: 'LinkedIn',
            tooltip: t('nav.openLinkedIn'),
        },
        {
            href: 'https://drive.google.com/file/d/1a7A1h59XqKjEQ6zNjrlA5oWAMhsIqi1n/view',
            label: 'CV',
            tooltip: t('nav.openResume'),
        },
    ];

    const renderSocialLinks = (isMobile: boolean) => (
        <div className='flex gap-4'>
            {socialLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`group relative rounded-full ${isMobile ? 'p-2' : 'p-1'} transition-colors hover:bg-foreground/10`}
                    aria-label={link.label}
                    title={link.tooltip}
                >
                    {link.icon ? (
                        <link.icon className={`h-5 w-5 text-primary`} />
                    ) : (
                        <span className={`font-bold text-primary`}>{link.label}</span>
                    )}
                </a>
            ))}
        </div>
    );

    return (
        <nav className='fixed left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-sm'>
            <div className='relative flex w-full items-center justify-between px-8 py-4 max-[1023px]:landscape:py-1'>
                <div className='mx-auto flex w-full items-center justify-between'>
                    <Link
                        href='/'
                        className={`text-xl font-bold text-foreground max-[1023px]:landscape:text-base ${
                            pathname === '/' ? 'border-b-2 border-primary' : ''
                        }`}
                    >
                        Matija Kočevar
                    </Link>

                    <div className='flex items-center gap-4'>
                        {/* Desktop Social Links */}
                        <div className='hidden items-center gap-4 md:flex'>{renderSocialLinks(false)}</div>
                        {/* Desktop Language Toggle */}
                        <div className='hidden md:block'>
                            <LanguageToggleButton locale={locale} />
                        </div>

                        <Sheet>
                            <SheetTrigger asChild>
                                <button className='rounded-md p-2 hover:bg-accent' aria-label='Menu'>
                                    <Menu className='h-5 w-5' />
                                </button>
                            </SheetTrigger>

                            <SheetContent side='right' className='w-[250px] sm:w-[300px]'>
                                <div className='flex flex-col gap-4 py-4'>
                                    <div className='flex flex-col gap-4'>
                                        {links.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`text-lg text-muted-foreground transition-colors hover:text-foreground/80 ${
                                                    pathname === link.href
                                                        ? 'border-b-2 border-primary text-foreground'
                                                        : ''
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Mobile Social Links */}
                                    <div className='flex flex-col justify-center gap-4 border-t pt-4 md:hidden'>
                                        {renderSocialLinks(true)}
                                    </div>
                                    <div className='flex flex-col justify-center gap-4 border-t pt-4'>
                                        <div className='flex items-center justify-between gap-2 md:justify-end'>
                                            {/* Mobile Language Toggle */}
                                            <div className='md:hidden'>
                                                <LanguageToggleButton locale={locale} />
                                            </div>
                                            <ThemeModeToggle />
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
