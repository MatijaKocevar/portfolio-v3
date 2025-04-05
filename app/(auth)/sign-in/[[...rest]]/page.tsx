'use client';

import { useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function SignInPage() {
    const { isLoaded, signIn, setActive } = useSignIn();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

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

            if (result.status === 'complete') {
                await setActive({ session: result.createdSessionId });

                router.push('/');
            } else {
                console.error('Sign in failed', result);

                setError('Something went wrong. Please try again.');
            }

            //eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.error('Error during sign in:', err);

            setError(err.errors?.[0]?.message || 'Failed to sign in. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex h-full items-start justify-center p-4'>
            <Card className='my-auto w-full max-w-md'>
                <CardHeader>
                    <CardTitle className='text-2xl'>Sign In</CardTitle>
                    <CardDescription>Enter your email and password to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        {error && (
                            <Alert variant='destructive'>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
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
                            />
                        </div>
                        <Button type='submit' className='w-full' disabled={isLoading}>
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-center'>
                    <Button variant='link' onClick={() => router.push('/sign-up')} disabled={isLoading}>
                        Don&apos;t have an account? Sign up
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
