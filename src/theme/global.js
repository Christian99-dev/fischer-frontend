import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import spacing from "./spacing";
import font from "./font";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        line-height: 1;
        box-sizing: border-box;
        background-color: salmon;
    }
    
    ${colors}
    ${spacing}
    ${font}
    ${variables}
    
`;

export default GlobalStyle;
