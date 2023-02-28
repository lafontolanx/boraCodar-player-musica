import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: var(--purple-900);
        -webkit-font-smoothing: antialiased;
    }

    :root {
        --black: #000000;
        --white: #FFFFFF;
        --gray-50: #E1E1E6;
        --gray-100: #D9D9D9;
        --gray-200: #C4C4CC;
        --gray-500: #39314F;
        --purple-800: #2A2141;
        --purple-900: #0F0D13;
    }
`