'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import LanguageToggleButton from './LanguageToggleButton';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTranslations } from 'next-intl';
import { ThemeModeToggle } from './ThemeModeToggle';
import { usePathname } from 'next/navigation';
import useNavigationStore from '../store/useNavigationStore';
import Breadcrumbs from './Breadcrumbs';
import { useState } from 'react';
import WebPush from '../webpush/webpush';

interface NavigaitonProps {
    locale: string;
}

const Navigation = ({ locale }: NavigaitonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations();
    const pathname = usePathname();
    const { links, socialLinks } = useNavigationStore();

    const renderSocialLinks = () => (
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

    return (
        <nav className='fixed left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-sm'>
            <div className='relative flex w-full items-center justify-between px-8 py-4 max-[1023px]:landscape:py-1'>
                <div className='mx-auto flex w-full items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center'>
                            <Link
                                href='/'
                                onClick={(e) => pathname === '/' && e.preventDefault()}
                                className={`text-xl font-bold text-foreground hover:text-primary max-[1023px]:landscape:text-base ${
                                    pathname === '/' ? 'border-b-2 border-primary' : ''
                                }`}
                                scroll={false}
                            >
                                Matija Kočevar
                            </Link>
                        </div>
                        <div className='flex items-center pt-1'>
                            <Breadcrumbs />
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='hidden items-center gap-4 md:flex'>{renderSocialLinks()}</div>
                        <div className='hidden border-l pl-4 md:block'>
                            <LanguageToggleButton locale={locale} />
                        </div>

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button className='rounded-md p-2 hover:bg-accent' aria-label='Menu'>
                                    <Menu className='h-5 w-5' />
                                </button>
                            </SheetTrigger>

                            <SheetContent side='right' className='w-[250px] sm:w-[300px]'>
                                <div className='flex h-full flex-col justify-between gap-4 py-4'>
                                    <div>
                                        <div className='flex flex-col gap-4 pb-4'>
                                            {links.map((link) => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    scroll={false}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`text-lg text-muted-foreground transition-colors hover:text-foreground/80 ${
                                                        pathname === link.href
                                                            ? 'border-b-2 border-primary text-foreground'
                                                            : ''
                                                    }`}
                                                >
                                                    {t(link.labelKey)}
                                                </Link>
                                            ))}
                                        </div>

                                        <div className='flex flex-col items-center justify-center gap-4 border-t pt-3 md:hidden'>
                                            {renderSocialLinks()}
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-center gap-4 pt-4'>
                                        <WebPush />
                                        <div className='flex items-center justify-between gap-2 md:justify-end'>
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
