import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { db } from 'config/firebase';

import { enterRoom } from 'state/app';

import { Container, OptionChannel } from './Option.styles';

type Props = {
    id?: string;
    Icon?: any;
    title: string;
    addChannel?: boolean;
};

const Option: FC<Props> = ({ id, Icon, title, addChannel }: Props) => {
    const dispatch = useDispatch();

    const addChannelAction = () => {
        // eslint-disable-next-line no-alert
        const channelName = prompt('Please enter channel name:');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            });
        }
    };
    const selectChannelAction = () => {
        if (id) {
            dispatch(enterRoom({ roomId: id }));
        }
    };

    return (
        <Container
            onClick={addChannel ? addChannelAction : selectChannelAction}
        >
            {Icon && <Icon style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <OptionChannel>
                    <span>#</span>
                    {title}
                </OptionChannel>
            )}
        </Container>
    );
};

export default Option;
