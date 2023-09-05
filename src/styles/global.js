import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --blue: #164194;
        --light-blue: #0095D0;
        
    }

    *{
        padding: 0;
        box-sizing: border-box;
        margin: 0;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }


    }
    button{
        cursor:pointer;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight: 600;
        color: black;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`