import { useCollection } from 'react-firebase-hooks/firestore';
import {
    FiberManualRecord,
    Create,
    InsertComment,
    Inbox,
    Drafts,
    BookmarkBorder,
    PeopleAlt,
    Apps,
    FileCopy,
    ExpandLess,
    ExpandMore,
    Add,
} from '@material-ui/icons';

import { auth, db } from 'config/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import Option from './option';

import { Container, Header, Info } from './Sidebar.styles';

const options = [
    {
        icon: InsertComment,
        title: 'Threads',
    },
    {
        icon: Inbox,
        title: 'Mentions & Reactions',
    },
    {
        icon: Drafts,
        title: 'Saved Items',
    },
    {
        icon: BookmarkBorder,
        title: 'Channel browser',
    },
    {
        icon: PeopleAlt,
        title: 'People & user groups',
    },
    {
        icon: Apps,
        title: 'Apps',
    },
    {
        icon: FileCopy,
        title: 'File browser',
    },
    {
        icon: ExpandLess,
        title: 'Show less',
    },
];

const Sidebar = () => {
    const [user] = useAuthState(auth);
    const [channels] = useCollection(db.collection('rooms'));

    return (
        <Container>
            <Header>
                <Info>
                    <h2>PAPA FAM HQ</h2>
                    <h3>
                        <FiberManualRecord />
                        {user?.displayName}
                    </h3>
                </Info>
                <Create />
            </Header>
            {options.map((option, index) => (
                <Option key={index} Icon={option.icon} title={option.title} />
            ))}
            <hr />
            <Option Icon={ExpandMore} title="Channels" />
            <hr />
            <Option Icon={Add} title="Add Channel" addChannel />
            {channels?.docs?.map((doc: any) => (
                <Option id={doc.id} key={doc.id} title={doc.data().name} />
            ))}
        </Container>
    );
};

export default Sidebar;
