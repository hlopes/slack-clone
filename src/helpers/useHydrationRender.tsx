import { FC, createContext, useState, useEffect, useContext } from 'react';

export const HydrationRenderContext = createContext<boolean>(true);

const useHydrationRenderProviderValue = () => {
    const [isHydrationRender, setIsHydrationRender] = useState(true);

    useEffect(() => {
        setIsHydrationRender(false);
    }, []);

    return isHydrationRender;
};

export const HydrationRenderProvider: FC = (props) => {
    const isHydrationRender = useHydrationRenderProviderValue();

    return (
        <HydrationRenderContext.Provider value={isHydrationRender} {...props} />
    );
};

export const useHydrationRender = () =>
    useContext<boolean>(HydrationRenderContext);

export default useHydrationRender;
