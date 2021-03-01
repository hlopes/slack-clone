import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'state/buildStore';

import { HydrationRenderProvider } from 'helpers/useHydrationRender';
import { ViewportProvider } from 'helpers/useViewport';

type ProvidersProps = {
    children: any;
};

const Providers = ({ children }: ProvidersProps) => {
    return (
        <Provider store={store}>
            <Router>
                <HydrationRenderProvider>
                    <ViewportProvider>{children}</ViewportProvider>
                </HydrationRenderProvider>
            </Router>
        </Provider>
    );
};

export default Providers;
