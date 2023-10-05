import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import spacing from "./spacing";
import typescale from "./typescaleDynamic";
import font from "./font";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        line-height: 1;
        box-sizing: border-box;
        font-family: 'Lato', normal;
    }
    
    ${colors}
    ${spacing}
    ${typescale}
    ${font}
    
`;

export default GlobalStyle;
