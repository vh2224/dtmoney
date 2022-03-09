import {createGlobalStyle} from 'styled-components';


export const GlobalStyles = createGlobalStyle`

:root {
    --background: #F0F2F5;
    --red: #E54E4D;
    --blue: #5429cc;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    @media (max-width: 768px){
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}



button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`