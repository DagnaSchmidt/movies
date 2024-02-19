"use client"
import { useEffect, useState } from 'react';


export default function useDeviceWidth() {
    const [deviceWidth, setDeviceWidth] = useState(0);

    useEffect(() => {
        setDeviceWidth(window.innerWidth);

        function handleResize() {
            setDeviceWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

        // eslint-disable-next-line
    }, []);

    return deviceWidth;
};
