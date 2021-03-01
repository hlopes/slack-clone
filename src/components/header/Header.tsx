import {
    AccessTime,
    Search as SearchIcon,
    HelpOutline,
} from '@material-ui/icons';

import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../config/firebase';

import { Container, Left, StyledAvatar, Search, Right } from './Header.styles';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Container>
            <Left>
                <StyledAvatar
                    onClick={() => auth.signOut()}
                    src={user?.photoURL}
                    alt={user?.displayName}
                />
                <AccessTime />
            </Left>
            <Search>
                <SearchIcon />
                <input placeholder="search" />
            </Search>
            <Right>
                <HelpOutline />
            </Right>
        </Container>
    );
};

export default Header;
