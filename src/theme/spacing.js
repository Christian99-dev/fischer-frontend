import { css } from "styled-components";
import { responsiveCSS } from "../services/Theme/responsive";

export default css`
  :root {
    ${responsiveCSS("--space-xxs",                    0, 4, 0, 0, 0)};
    ${responsiveCSS("--space-xs",                     0, 8, 0, 0, 0)};
    ${responsiveCSS("--space-sm",                     0, 12, 0, 0, 0)};
    ${responsiveCSS("--space-md",                     0, 20, 0, 0, 0)};
    ${responsiveCSS("--space-lg",                     0, 32, 0, 0, 0)};
    ${responsiveCSS("--space-xl",                     0, 52, 0, 0, 0)};
    ${responsiveCSS("--space-xxl",                    0, 80, 60, 40, 20)};
    ${responsiveCSS("--space-xxxl" /* 0 20 10 6 3 */, 0, 160, 80, 56, 40)}; 
    ${responsiveCSS("--space-giant",                  0, 480, 0, 0, 0)};
  }
`;
