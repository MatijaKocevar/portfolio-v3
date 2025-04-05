'use client';

import { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoaded) return;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
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

            //eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.error('Error during sign up:', err);
            setError(err.errors?.[0]?.message || 'Failed to sign up. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex h-full items-center justify-center p-4'>
            <Card className='my-auto w-full max-w-md'>
                <CardHeader>
                    <CardTitle className='text-2xl'>Sign Up</CardTitle>
                    <CardDescription>Create your account to get started</CardDescription>
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
                                <Label htmlFor='firstName'>First name</Label>
                                <Input
                                    id='firstName'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='lastName'>Last name</Label>
                                <Input
                                    id='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='name@example.com'
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                id='password'
                                type='password'
                                placeholder='••••••••'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={8}
                            />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='confirmPassword'>Confirm Password</Label>
                            <Input
                                id='confirmPassword'
                                type='password'
                                placeholder='••••••••'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <Button type='submit' className='w-full' disabled={isLoading}>
                            {isLoading ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-center'>
                    <Button variant='link' onClick={() => router.push('/sign-in')} disabled={isLoading}>
                        Already have an account? Sign in
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
