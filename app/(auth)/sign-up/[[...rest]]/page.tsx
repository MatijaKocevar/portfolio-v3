'use client';

import { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
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

export default function SignUpPage() {
    const { isLoaded, signUp } = useSignUp();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const t = useTranslations('auth.signUp');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isLoaded) {
            return;
        }

        if (password !== confirmPassword) {
            setError(t('errors.passwordMismatch'));

            return;
        }

        try {
            setIsLoading(true);
            setError('');

            await signUp.create({
                emailAddress,
                password,
                firstName,
                lastName,
            });

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

            router.push('/verify');
            router.refresh();
        } catch (err: unknown) {
            const clerkError = err as ClerkError;

            setError(clerkError.errors?.[0]?.message || t('errors.default'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex h-full items-center justify-center p-4'>
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

                        <div className='grid grid-cols-2 gap-4'>
                            <div className='space-y-2'>
                                <Label htmlFor='firstName'>{t('firstNameLabel')}</Label>
                                <Input
                                    id='firstName'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    autoComplete='given-name'
                                />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='lastName'>{t('lastNameLabel')}</Label>
                                <Input
                                    id='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    autoComplete='family-name'
                                />
                            </div>
                        </div>

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
                                minLength={8}
                                autoComplete='new-password'
                            />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='confirmPassword'>{t('confirmPasswordLabel')}</Label>
                            <Input
                                id='confirmPassword'
                                type='password'
                                placeholder={t('confirmPasswordPlaceholder')}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                minLength={8}
                                autoComplete='new-password'
                            />
                        </div>

                        <Button type='submit' className='w-full' disabled={isLoading}>
                            {isLoading ? t('loadingButton') : t('submitButton')}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-center'>
                    <Button variant='link' onClick={() => router.push('/sign-in')} disabled={isLoading}>
                        {t('hasAccountText')}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
