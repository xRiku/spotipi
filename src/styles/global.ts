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
        background: #121214;
        -webkit-font-smoothing: antialised;
        overflow-y: scroll;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        /* color: #fff; */
    }

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    ul {
        list-style: none;
    }

    [disabled] {
        opacity: 0.6;
    }
`