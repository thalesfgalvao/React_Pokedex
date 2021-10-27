import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.2%;
    }
    body{
        font-family: 'Roboto', sans-serif;
    }
`
export default GlobalStyles;