import { css } from "styled-components";
import { responsiveCSS } from "../services/Theme/responsive";

export default css`
  :root {
    ${responsiveCSS("--space-xxs",    0,  4,   4,   0,  0,  0)};
    ${responsiveCSS("--space-xs",     0,  8,   4,   0,  0,  0)};
    ${responsiveCSS("--space-sm",     0,  12,  8,   0,  0,  0)};
    ${responsiveCSS("--space-md",     0,  20,  12,  0,  0,  0)};
    ${responsiveCSS("--space-lg",     0,  32,  20,  0,  0,  0)};
    ${responsiveCSS("--space-xl",     0,  52,  28,  0,  0,  0)};
    ${responsiveCSS("--space-xxl",    0,  80,  44,  0,  0,  0)};
    ${responsiveCSS("--space-xxxl",   0,  160, 112, 0,  0,  0)};
    ${responsiveCSS("--space-giant",  600,  480, 320, 160,  100,  69)};
  }
`;
