'use client';

import { useEffect } from 'react';

interface IosNavigator extends Navigator {
    standalone?: boolean;
}

export const PullToRefresh = () => {
    useEffect(() => {
        const isIosPwa = typeof window !== 'undefined' && (window.navigator as IosNavigator).standalone === true;

        const initPullToRefresh = async () => {
            if (isIosPwa) {
                const PullToRefresh = (await import('pulltorefreshjs')).default;
                PullToRefresh.init({
                    mainElement: '.main-content',
                    shouldPullToRefresh: () => {
                        const preventPTR = document.querySelector('.prevent-ptr');
                        if (preventPTR) return false;

                        const scrollContainerElement = document.querySelector('.main-content');
                        const scrollableElement = document.querySelector('.scrollable-element');

                        const scrollContainerElementRect = scrollContainerElement?.getBoundingClientRect();
                        const scrollElementRect = scrollableElement?.getBoundingClientRect();

                        return scrollContainerElementRect?.top === scrollElementRect?.top;
                    },
                    onRefresh() {
                        window.location.reload();
                    },
                });
            }
        };

        initPullToRefresh();

        return () => {
            if (isIosPwa) {
                import('pulltorefreshjs').then(({ default: PullToRefresh }) => {
                    PullToRefresh.destroyAll();
                });
            }
        };
    }, []);

    return null;
};
