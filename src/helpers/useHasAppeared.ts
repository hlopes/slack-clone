// @ts-nocheck
import { useCallback, useState } from 'react';

import useIntersectionObserver from './useIntersectionObserver';

const useHasAppeared = (targetRef, { threshold }) => {
    const [hasAppeared, setHasAppeared] = useState(false);

    useIntersectionObserver({
        target: targetRef,
        threshold,
        onIntersect: useCallback(
            ([{ isIntersecting }], observer) => {
                if (isIntersecting) {
                    setHasAppeared(isIntersecting);
                    observer.disconnect();
                }
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [targetRef]
        ),
    });

    return hasAppeared;
};

export default useHasAppeared;
