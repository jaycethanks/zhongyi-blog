import { useState, useEffect } from 'react';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const isMobileDevice = /Mobile/i.test(navigator.userAgent);
        setIsMobile(isMobileDevice);
    }, []);

    return isMobile;
}