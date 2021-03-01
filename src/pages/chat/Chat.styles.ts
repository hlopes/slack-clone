import styled from '@emotion/styled';

export const Container = styled.div`
    flex: 0.7;
    flex-grow: 1;
    padding-top: 6rem;
    overflow-y: scroll;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 0.1rem solid lightgray;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        margin-right: 2rem;
        text-transform: lowercase;

        > .MuiSvgIcon-root {
            margin-left: 2rem;
            font-size: 1.8rem;
        }
    }
`;

export const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 1.4rem;

        > .MuiSvgIcon-root {
            margin-right: 0.5rem;
            font-size: 1.6rem;
        }
    }
`;

export const ChatMessages = styled.div``;

export const ChatBottom = styled.div`
    padding-bottom: 10rem;
`;
