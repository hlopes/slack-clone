import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    font-size: 1.2rem;
    cursor: pointer;

    :hover {
        background-color: #340e36;
        opacity: 0.9;
    }

    > .MuiSvgIcon-root {
        font-size: 4rem;
    }

    > h3 {
        font-weight: 500;

        > span {
            padding: 1.5rem;
        }
    }
`;

export const OptionChannel = styled.h3`
    padding: 1rem 0;
    font-weight: 300;
`;
