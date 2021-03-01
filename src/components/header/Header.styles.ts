import styled from '@emotion/styled';

import { Avatar } from '@material-ui/core';

import { white, mainColor1, gray } from 'theme/colors';

export const Container = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
    color: ${white};
    background-color: var(--slack-color);
`;

export const Left = styled.div`
    display: flex;
    flex: 0.3;
    align-items: center;
    margin-left: 2rem;

    > .MuiSvgIcon-root {
        margin-right: 3rem;
        margin-left: auto;
    }
`;

export const Search = styled.div`
    display: flex;
    flex: 0.4;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 5rem;
    color: ${gray};
    background-color: ${mainColor1};
    border: 0.1rem solid ${gray};
    border-radius: 0.6rem;

    > input {
        min-width: 30vw;
        color: ${white};
        text-align: center;
        background-color: transparent;
        border: none;
        outline: 0;
    }
`;

export const Right = styled.div`
    display: flex;
    flex: 0.3;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-right: 2rem;
        margin-left: auto;
    }
`;

export const StyledAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;
