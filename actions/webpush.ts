'use server';

import webpush, { type PushSubscription } from 'web-push';

webpush.setVapidDetails(
    'mailto:matija.kocev@gmail.com',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!,
);

let subscription: PushSubscription | null = null;

export async function subscribeUser(sub: PushSubscription) {
    subscription = sub;

    return { success: true };
}

export async function unsubscribeUser() {
    subscription = null;

    return { success: true };
}

export async function sendNotification(message: string, url: string = '/') {
    if (!subscription) {
        throw new Error('No subscription available');
    }

    try {
        await webpush.sendNotification(
            subscription as PushSubscription,
            JSON.stringify({
                title: 'Test Notification',
                body: message,
                url: url,
            }),
        );
        return { success: true };
    } catch (error) {
        console.error('Error sending push notification:', error);
        return { success: false, error: 'Failed to send notification' };
    }
}
