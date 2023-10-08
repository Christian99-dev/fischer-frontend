import { css } from "styled-components";
import { responsiveCSS } from "../services/Theme/responsive";

export default css`
  :root {
    ${responsiveCSS("--fs-bigtitle", 120, 110, 100, 80, 60, 50)}
    ${responsiveCSS("--fs-6", 16, 13, 13, 13, 13, 13)}
  }
`;
