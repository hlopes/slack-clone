import { FC, useRef } from 'react';
import { Button } from '@material-ui/core';
import firebase from 'firebase';

import { auth, db } from 'config/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Container } from './Input.styles';

type Props = {
    channelId: string;
    channelName?: string;
};

const Input: FC<Props> = ({ channelId, channelName }: Props) => {
    const [user] = useAuthState(auth);
    const inputRef: any = useRef(null);

    const sendMessage = (e: any) => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        if (inputRef.current) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: inputRef.current?.value,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user?.displayName,
                userImage: user?.photoURL,
            });
        }

        inputRef.current.value = '';
    };

    return (
        <Container>
            {channelName && (
                <form>
                    <input
                        ref={inputRef}
                        placeholder={`Message #${channelName}`}
                    />
                    <Button hidden type={'submit'} onClick={sendMessage}>
                        SEND
                    </Button>
                </form>
            )}
        </Container>
    );
};

export default Input;
