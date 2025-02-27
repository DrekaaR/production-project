import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
    useEffect(() => {
        if (__PROJECT__ !== 'story' && __PROJECT__ !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
};
