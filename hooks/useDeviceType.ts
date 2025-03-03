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
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const isPortrait = window.innerHeight > window.innerWidth;

            setDeviceType({
                isMobile,
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
