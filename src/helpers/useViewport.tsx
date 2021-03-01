// @ts-nocheck
import React, {
    useState,
    useCallback,
    useMemo,
    useEffect,
    useContext,
} from 'react';

import * as media from 'theme/custom-media';

type Watcher = {
    name: string;
    query: {
        matches: any;
    };
};

function reduceBreakpointMatchers(breakpointWatchers: Watcher[] = []) {
    return breakpointWatchers.reduce(
        (breakpoints, watcher) => ({
            ...breakpoints,
            [watcher.name]: !!watcher.query.matches,
        }),
        {}
    );
}

type MediaWatcher = {
    clientMatchers?: [];
};

function getBreakpointMatches(mediaWatchers: MediaWatcher = {}) {
    const clientBreakpointMatches = reduceBreakpointMatchers(
        mediaWatchers.clientMatchers
    );

    return {
        ...clientBreakpointMatches,
    };
}

const breakpoints = {
    extraSmall: media.extraSmall,
    small: media.small,
    medium: media.medium,
    gteSmall: media.gteSmall,
    lteSmall: media.lteSmall,
};

const ViewportContext = React.createContext({});

export const ViewportProvider = ({ ...props }) => {
    const isTouchDevice = useMemo(
        () =>
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0,
        []
    );

    const mediaWatchers = useMemo(() => {
        const clientMatchers = Object.entries(breakpoints).map(
            ([breakpoint, query]) => ({
                name: breakpoint,
                query:
                    typeof window !== 'undefined' && window.matchMedia
                        ? window.matchMedia(query)
                        : {},
            })
        );

        return {
            clientMatchers,
        };
    }, []);

    const [breakpoint, setBreakpoint] = useState(
        getBreakpointMatches(mediaWatchers)
    );

    const update = useCallback(() => {
        setBreakpoint(getBreakpointMatches(mediaWatchers));
    }, [mediaWatchers]);

    useEffect(() => {
        for (const { query } of mediaWatchers.clientMatchers) {
            if (query.addListener) {
                query.addListener(update);
            }
        }

        return () => {
            for (const { query } of mediaWatchers.clientMatchers) {
                if (query.removeListener) {
                    query.removeListener(update);
                }
            }
        };
    }, [mediaWatchers, update]);

    const value = useMemo(() => ({ ...breakpoint, isTouchDevice }), [
        breakpoint,
        isTouchDevice,
    ]);

    return <ViewportContext.Provider value={value} {...props} />;
};

const useViewport = () => useContext(ViewportContext);

export default useViewport;
