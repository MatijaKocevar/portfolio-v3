import Link from 'next/link';
import { Github, Linkedin, Menu } from 'lucide-react';
import LanguageToggleButton from './LanguageToggleButton';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTranslations } from 'next-intl';

interface NavigaitonProps {
    locale: string;
}

const Navigation = ({ locale }: NavigaitonProps) => {
    const t = useTranslations();

    const links = [
        { href: '/about', label: t('nav.about') },
        { href: '/education', label: t('nav.education') },
        { href: '/experience', label: t('nav.experience') },
        { href: '/interests', label: t('nav.interests') },
        { href: '/projects', label: t('nav.projects') },
        { href: '/skills', label: t('nav.skills') },
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

    return (
        <nav className='fixed left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-sm'>
            <div className='relative flex w-full items-center justify-between px-8 py-4 max-[1023px]:landscape:py-1'>
                <div className='mx-auto flex w-full items-center justify-between'>
                    <Link href='/' className='text-xl font-bold max-[1023px]:landscape:text-base'>
                        Matija Kočevar
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden items-center gap-4 md:flex'>
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className='transition-colors hover:text-foreground/80 max-[1023px]:landscape:text-sm'
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className='flex items-center gap-4 border-l pl-4 max-[1023px]:landscape:gap-2'>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='group relative rounded-full p-1 transition-colors hover:bg-foreground/10'
                                    aria-label={link.label}
                                    title={link.tooltip}
                                >
                                    {link.icon ? (
                                        <link.icon className='h-5 w-5 max-[1023px]:landscape:h-4 max-[1023px]:landscape:w-4' />
                                    ) : (
                                        <span className='font-bold max-[1023px]:landscape:text-sm'>{link.label}</span>
                                    )}
                                </a>
                            ))}
                        </div>
                        <div className='flex items-center gap-2 border-l pl-4'>
                            <LanguageToggleButton locale={locale} />
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className='flex items-center gap-4 md:hidden'>
                        <LanguageToggleButton locale={locale} />
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className='rounded-md p-2 hover:bg-accent' aria-label='Menu'>
                                    <Menu className='h-5 w-5' />
                                </button>
                            </SheetTrigger>
                            <SheetContent side='right' className='w-[250px] sm:w-[300px]'>
                                <div className='flex flex-col gap-6 py-6'>
                                    <div className='flex flex-col gap-4'>
                                        {links.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className='text-lg transition-colors hover:text-foreground/80'
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className='flex flex-col gap-4 border-t pt-4'>
                                        <h3 className='text-sm font-medium text-muted-foreground'>
                                            {t('common.connect')}
                                        </h3>
                                        <div className='flex gap-4'>
                                            {socialLinks.map((link) => (
                                                <a
                                                    key={link.label}
                                                    href={link.href}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='group relative rounded-full p-2 transition-colors hover:bg-foreground/10'
                                                    aria-label={link.label}
                                                    title={link.tooltip}
                                                >
                                                    {link.icon ? (
                                                        <link.icon className='h-5 w-5' />
                                                    ) : (
                                                        <span className='font-bold'>{link.label}</span>
                                                    )}
                                                </a>
                                            ))}
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
