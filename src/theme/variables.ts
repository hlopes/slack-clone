import { css } from '@emotion/react';

import { slack } from './colors';

export default css`
    :root {
        --viewport-height: 100vh;
        --viewport-width: 100vw;

        --slack-color: ${slack};
    }
`;
