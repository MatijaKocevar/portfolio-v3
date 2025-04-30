import { useState, useEffect } from 'react';

type DeviceType = {
    isMobile: boolean;
    isPortrait: boolean;
};

export function useDeviceType(): DeviceType {
    const [deviceType, setDeviceType] = useState<DeviceType>({
        isMobile: false,
        isPortrait: true,
    });

    useEffect(() => {
        const checkDevice = () => {
            const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
            const isPortrait = window.innerHeight > window.innerWidth;

            setDeviceType({
                isMobile: !isDesktop,
                isPortrait,
            });
        };

        checkDevice();

        window.addEventListener('resize', checkDevice);
        window.addEventListener('orientationchange', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
            window.removeEventListener('orientationchange', checkDevice);
        };
    }, []);

    return deviceType;
}
