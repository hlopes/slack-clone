import { useEffect } from 'react';

type Args = {
    root: null | { current: any };
    target: { current: any };
    onIntersect: () => void;
    threshold: number;
    rootMargin: string;
};

const useIntersectionObserver = ({
    root = null,
    target,
    onIntersect,
    threshold = 1.0,
    rootMargin = '0px',
}: Args) => {
    useEffect(() => {
        if (!target || !target.current) {
            return;
        }

        const observer = new IntersectionObserver(onIntersect, {
            root: root && root.current,
            rootMargin,
            threshold,
        });

        const currentTarget = target.current;

        observer.observe(currentTarget);

        return () => {
            observer.unobserve(currentTarget);
        };
    }, [onIntersect, root, rootMargin, target, threshold]);
};

export default useIntersectionObserver;
