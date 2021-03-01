import { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';

import { db } from 'config/firebase';
import { selectRoomId } from 'state/app/slice';

import { useCollection, useDocument } from 'react-firebase-hooks/firestore';

import ChatInput from './input';
import Message from './message';

import {
    Container,
    Header,
    HeaderLeft,
    HeaderRight,
    ChatMessages,
    ChatBottom,
} from './Chat.styles';

const Chat: FC = () => {
    const bottomRef: any = useRef(null);
    const roomId = useSelector(selectRoomId);

    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );

    const [roomMessages, loading] = useCollection(
        roomId &&
            db
                .collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
    );

    useEffect(
        () =>
            !loading &&
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' }),
        [roomId, bottomRef, loading, roomMessages]
    );

    return (
        <Container>
            {roomDetails && roomMessages && (
                <>
                    <Header>
                        <HeaderLeft>
                            <h4>
                                <strong># {roomDetails?.data()?.name}</strong>
                                <StarBorderOutlined />
                            </h4>
                        </HeaderLeft>
                        <HeaderRight>
                            <p>
                                <InfoOutlined /> Details
                            </p>
                        </HeaderRight>
                    </Header>
                    <ChatMessages>
                        {roomMessages?.docs?.map((doc: any) => {
                            const {
                                message,
                                timestamp,
                                user,
                                userImage,
                            } = doc.data();

                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            );
                        })}
                        <ChatBottom ref={bottomRef} />
                    </ChatMessages>
                    <ChatInput
                        channelId={roomId}
                        channelName={roomDetails?.data()?.name}
                    />
                </>
            )}
        </Container>
    );
};

export default Chat;
