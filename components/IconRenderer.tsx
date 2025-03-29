'use client';

import { ComponentProps, useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface IconRendererProps extends ComponentProps<'svg'> {
    name: string;
    className?: string;
}

export default function IconRenderer({ name, className, ...props }: IconRendererProps) {
    const [Icon, setIcon] = useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const loadIcon = async () => {
            try {
                const icon = await import(`@/public/icons/${name}.svg`);
                setIcon(() => icon.default);
                setError(false);
            } catch (err) {
                console.error(`Failed to load icon: ${name}`, err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        loadIcon();
    }, [name]);

    if (error) return null;
    if (isLoading) return <Skeleton className={className} />;
    if (!Icon) return null;

    return <Icon className={className} {...props} />;
}
