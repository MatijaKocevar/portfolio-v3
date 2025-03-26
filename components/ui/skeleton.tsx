import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-primary/10 transition-all duration-1000 ease-in-out', className)}
            {...props}
        />
    );
}

export { Skeleton };
