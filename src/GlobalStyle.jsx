import { createGlobalStyle } from 'styled-components';
import FormulaA from './assets/fonts/FORMULA-A.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Formula-A';
        src: url(${FormulaA});
        font-display: swap;
    }
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        /* color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);*/
        /* background-color: #000000; */

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        /* -moz-osx-font-smoothing: grayscale; */
        /* -webkit-text-size-adjust: 100%; */

        --background-1:         #323232;
        --background-1-light:   #424242;
        --background-1-dark:    #2d2d2d;
        --background-2:         #848fa5;
        --background-3:         #6d98ba;
        --accent-color:         #ca9867;
        --accent-color-dark:    #c28850;
        --accent-color-light:   #cfa276;
        --accent-color-dark:    #c28850;
        --font-color:           #f5fbef;
        --success-color:        #00ff00;
        }
    * {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
