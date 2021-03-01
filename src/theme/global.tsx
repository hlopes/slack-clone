import React from 'react';
import { css, Global } from '@emotion/react';

import normalize from './normalize';
import variables from './variables';

export const globalStyles = (
    <Global
        styles={css`
            ${normalize}
            ${variables}

            *,
            *::before,
            *::after {
                box-sizing: border-box;
                margin: 0;
            }

            html {
                /**
                 * Font size 10px on default browser settings.
                 * It's used as 62.5% to adapt to changes 
                 * in the browser's default font-size.
                 */
                font-size: 62.5%;
            }

            body {
                min-height: 100%;
                overflow-x: hidden;
                font-size: 1.6rem;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                    'Droid Sans', 'Helvetica Neue', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            body,
            #root {
                display: flex;
                flex: 1 0 auto;
                flex-direction: column;
            }

            #root {
                min-height: 100%;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin: 0;
                font-size: 1.8rem;
            }

            ul,
            li {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            /**
             * Override Firefox's stylesheet for red box
             * shadow on invalid fields
             * @see view-source:resource://gre-resources/forms.css
             */

            :not(output):-moz-ui-invalid {
                box-shadow: none;
            }

            :not(output):-moz-ui-invalid:-moz-focusring {
                box-shadow: none;
            }

            /**
             * Accessibility improvements
             */

            [role='tooltip'] {
                display: none;
            }
        `}
    />
);
