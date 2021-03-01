import styled from '@emotion/styled';

import { white, mainColor2 } from '../../theme/colors';

export const Container = styled.div`
    flex: 0.3;
    max-width: 26rem;
    margin-top: 6rem;
    color: ${white};
    background-color: var(--slack-color);
    border: 0.1rem solid ${mainColor2};

    > hr {
        margin: 1rem 0;
        border: 0.1rem solid #49274b;
    }
`;

export const Header = styled.div`
    display: flex;
    padding: 1.3rem;
    border-bottom: 0.1rem solid ${mainColor2};

    > .MuiSvgIcon-root {
        padding: 0.8rem;
        color: ${mainColor2};
        font-size: 2.6rem;
        background-color: ${white};
        border-radius: 2rem;
    }
`;

export const Info = styled.div`
    flex: 1;

    > h2 {
        margin-bottom: 0.5rem;
        font-weight: 900;
        font-size: 1.5rem;
    }

    > h3 {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 1.3rem;
    }

    > h3 > .MuiSvgIcon-root {
        margin-top: 0.1rem;
        margin-right: 0.2rem;
        color: green;
        font-size: 1.4rem;
    }
`;
