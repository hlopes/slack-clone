import { FC, ReactNode } from 'react';

import Header from 'components/header';
import Sidebar from 'components/sidebar';

import { Body } from './Layout.styles';

type Props = {
    children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <Body>
                <Sidebar />
                {children}
            </Body>
        </>
    );
};

export default Layout;
