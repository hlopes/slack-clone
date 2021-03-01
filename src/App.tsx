import React, { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from 'config/firebase';

import Providers from 'helpers/Providers';
import ErrorBoundary from 'components/error-boundary';
import Layout from 'components/layout';
import Login from 'components/login/Login';
import { globalStyles } from 'theme/global';

import { Home, NotFound } from './pages';

const App: FC = () => {
    const [user] = useAuthState(auth);

    return (
        <Providers>
            <ErrorBoundary>
                {globalStyles}
                {!user ? (
                    <Login />
                ) : (
                    <Layout>
                        <Switch>
                            <Suspense fallback={<div>Loading</div>}>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                            </Suspense>
                            <Route path="/*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Layout>
                )}
            </ErrorBoundary>
        </Providers>
    );
};

export default App;
