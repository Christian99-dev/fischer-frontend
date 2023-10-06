import { css } from "styled-components";
import { responsiveCSS } from "../services/Theme/responsive";

export default css`
  :root {
    ${responsiveCSS("--space-xxs",    8,  4,   4,       4,    2,   2)};
    ${responsiveCSS("--space-xs",     16,  8,   6,       6,    4,   4)};
    ${responsiveCSS("--space-sm",     24,  12,  8,       8,    6,   6)};
    ${responsiveCSS("--space-md",     36,  20,  12,     10,    8,   8)};
    ${responsiveCSS("--space-lg",     50,  32,  20,     16,    12,  10)};
    ${responsiveCSS("--space-xl",     80,  52,  28,     20,    16,  14)};
    ${responsiveCSS("--space-xxl",    100,  80,  44,     32,    24,  20)};
    ${responsiveCSS("--space-xxxl",   200,  160, 112,    60,    40,  32)};
    ${responsiveCSS("--space-giant",  600,  480, 200, 160,    80,  60)};
  }
`;
