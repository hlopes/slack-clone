import { FC } from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem;

    > img {
        height: 5rem;
        border-radius: 0.8rem;
    }
`;

const Info = styled.div`
    padding-left: 1rem;

    > h4 {
        > span {
            margin-left: 0.4rem;
            color: gray;
            font-weight: 300;
            font-size: 1rem;
        }
    }
`;

type Props = {
    message: string;
    timestamp: any;
    user: string;
    userImage: string;
};

const Message: FC<Props> = ({ message, timestamp, user, userImage }: Props) => {
    return (
        <Container>
            <img src={userImage} />
            <Info>
                <h4>
                    {user}{' '}
                    <span>{new Date(timestamp?.toDate())?.toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </Info>
        </Container>
    );
};

export default Message;
