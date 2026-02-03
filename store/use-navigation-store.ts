import { create } from 'zustand';
import { Github, Linkedin, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface NavigationStore {
    links: Array<{ href: string; labelKey: string }>;
    socialLinks: Array<{
        href: string;
        icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
        label: string;
        tooltipKey: string;
    }>;
}

const useNavigationStore = create<NavigationStore>(() => ({
    links: [
        { href: '/about', labelKey: 'nav.about' },
        { href: '/experience', labelKey: 'nav.experience' },
        { href: '/projects', labelKey: 'nav.projects' },
        { href: '/skills', labelKey: 'nav.skills' },
        { href: '/interests', labelKey: 'nav.interests' },
    ],
    socialLinks: [
        {
            href: 'https://github.com/MatijaKocevar',
            icon: Github,
            label: 'GitHub',
            tooltipKey: 'nav.openGithub',
        },
        {
            href: 'https://www.linkedin.com/in/matija-ko%C4%8Devar-59a198109/',
            icon: Linkedin,
            label: 'LinkedIn',
            tooltipKey: 'nav.openLinkedIn',
        },
    ],
}));

export default useNavigationStore;
