'use client';

import { useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ClerkError {
    errors?: Array<{ message: string }>;
}

export default function SignInPage() {
    const { isLoaded, signIn, setActive } = useSignIn();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const t = useTranslations('auth.signIn');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isLoaded) return;

        try {
            setIsLoading(true);
            setError('');

            const result = await signIn.create({
                identifier: emailAddress,
                password,
            });

            if (result.status === 'complete' && result.createdSessionId) {
                await setActive({ session: result.createdSessionId });

                router.push('/');
                router.refresh();
            } else {
                setError(t('errors.default'));
            }
        } catch (err: unknown) {
            const clerkError = err as ClerkError;

            setError(clerkError.errors?.[0]?.message || t('errors.invalidCredentials'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex h-full items-start justify-center p-4'>
            <Card className='my-auto w-full max-w-md'>
                <CardHeader>
                    <CardTitle className='text-2xl'>{t('title')}</CardTitle>
                    <CardDescription>{t('description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        {error && (
                            <Alert variant='destructive'>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <div className='space-y-2'>
                            <Label htmlFor='email'>{t('emailLabel')}</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder={t('emailPlaceholder')}
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                required
                                autoComplete='email'
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='password'>{t('passwordLabel')}</Label>
                            <Input
                                id='password'
                                type='password'
                                placeholder={t('passwordPlaceholder')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete='current-password'
                            />
                        </div>
                        <Button type='submit' className='w-full' disabled={isLoading}>
                            {isLoading ? t('loadingButton') : t('submitButton')}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-center'>
                    <Button variant='link' onClick={() => router.push('/sign-up')} disabled={isLoading}>
                        {t('noAccountText')}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
