import { createGlobalStyle } from 'styled-components';
import { theme } from './theme.ts';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: system-ui, Helvetica, Arial, sans-serif;
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.primary};
        background-color: ${theme.colors.background};
        line-height: 1.5;
        min-height: 100vh;
        display: grid;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: ${theme.fontSizes['3xl']};
    }

    h2 {
        font-size: ${theme.fontSizes['2xl']};
    }

    h3 {
        font-size: ${theme.fontSizes.xl};
    }

    p {
        font-size: ${theme.fontSizes.base};
    }

    a {
        text-decoration: none;
        color: ${theme.colors.accent};
    }

    button {
        cursor: pointer;
    }


    @media (max-width: 768px) {
        body {
            font-size: ${theme.fontSizes.sm};
        }

        h1 {
            font-size: ${theme.fontSizes['2xl']};
        }

        h2 {
            font-size: ${theme.fontSizes.xl};
        }
    }
`;

export default GlobalStyles;
