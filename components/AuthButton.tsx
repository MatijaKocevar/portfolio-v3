'use client';

import { SignInButton, SignOutButton, useAuth } from '@clerk/nextjs';
import { Button } from './ui/button';
import Link from 'next/link';

interface AuthButtonProps {
    className?: string;
}

export function AuthButton({ className }: AuthButtonProps) {
    const { isSignedIn } = useAuth();

    return (
        <div className={className}>
            {isSignedIn ? (
                <SignOutButton>
                    <Button variant='outline' size='sm'>
                        Sign Out
                    </Button>
                </SignOutButton>
            ) : (
                <SignInButton>
                    <Button size='sm'>Sign In</Button>
                </SignInButton>
            )}
        </div>
    );
}

export function UserProfileButton() {
    const { isSignedIn } = useAuth();

    if (!isSignedIn) return null;

    return (
        <Link href='/user-profile'>
            <Button variant='ghost' size='sm'>
                My Profile
            </Button>
        </Link>
    );
}
