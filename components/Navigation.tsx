import Link from 'next/link';
import { Github, Linkedin, FileText } from 'lucide-react';
import LanguageToggleButton from './LanguageToggleButton';

const Navigation = () => {
    const links = [
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/education', label: 'Education' },
        { href: '/experience', label: 'Experience' },
        { href: '/skills', label: 'Skills' },
        { href: '/interests', label: 'Interests' },
    ];

    const socialLinks = [
        {
            href: 'https://github.com/MatijaKocevar',
            icon: Github,
            label: 'GitHub',
        },
        {
            href: 'https://www.linkedin.com/in/matija-ko%C4%8Devar-59a198109/',
            icon: Linkedin,
            label: 'LinkedIn',
        },
        {
            href: 'https://drive.google.com/file/d/1a7A1h59XqKjEQ6zNjrlA5oWAMhsIqi1n/view',
            icon: FileText,
            label: 'CV',
        },
    ];

    return (
        <nav className='sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm'>
            <div className='relative flex w-full items-center justify-between px-8 py-4'>
                <div className='mx-auto flex w-full items-center justify-between'>
                    <Link href='/' className='text-xl font-bold'>
                        Matija Kočevar
                    </Link>
                    <div className='hidden items-center gap-6 md:flex'>
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className='transition-colors hover:text-foreground/80'
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className='flex items-center gap-4 border-l pl-6'>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='rounded-full p-2 transition-colors hover:bg-foreground/10'
                                    aria-label={link.label}
                                >
                                    <link.icon className='h-5 w-5' />
                                </a>
                            ))}
                        </div>
                        <div className='flex items-center gap-2'>
                            <LanguageToggleButton />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
