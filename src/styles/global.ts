import { createGlobalStyle } from "styled-components";
import constants from "./constants";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Fira Code", monospace;
        font-size: 1.4rem;
        line-height: 3rem;
        color: ${constants.colors.black}
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
