import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 1080px) {
            font-size: 87.5%;
        }
        
    }
    body  {
        background: #242425;
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: #fff
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
    }
`