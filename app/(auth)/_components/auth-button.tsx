'use client';

import { SignOutButton, useAuth } from '@clerk/nextjs';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface AuthButtonProps {
    className?: string;
    onClick?: () => void;
    isLoggedIn?: boolean;
}

export function AuthButton({ className, onClick, isLoggedIn: initialLoggedIn }: AuthButtonProps) {
    const { isSignedIn } = useAuth();
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(initialLoggedIn);
    const t = useTranslations('auth');

    useEffect(() => {
        if (isSignedIn !== undefined) {
            setLoggedIn(isSignedIn);
        }
    }, [isSignedIn]);

    const handleSignInClick = () => {
        if (onClick) {
            onClick();
        }

        router.push('/sign-in');
    };

    return (
        <div className={className}>
            {loggedIn ? (
                <SignOutButton>
                    <Button variant='outline' size='sm'>
                        {t('signOut')}
                    </Button>
                </SignOutButton>
            ) : (
                <Button size='sm' onClick={handleSignInClick}>
                    {t('signIn.title')}
                </Button>
            )}
        </div>
    );
}

export function UserProfileButton() {
    const { isSignedIn } = useAuth();

    if (!isSignedIn) {
        return null;
    }

    return (
        <Link href='/user-profile'>
            <Button variant='ghost' size='sm'>
                My Profile
            </Button>
        </Link>
    );
}
