import { css } from "styled-components";
import { responsiveCSS } from "../services/Theme/responsive";

export default css`
  :root {
    ${responsiveCSS("--fs-bigtitle", 120, 110, 100, 90, 60)}
  }

  /* lobster-two-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lobster Two";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/lobster-two-v20-latin/lobster-two-v20-latin-regular.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lobster-two-italic - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lobster Two";
    font-style: italic;
    font-weight: 400;
    src: url("/fonts/lobster-two-v20-latin/lobster-two-v20-latin-italic.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lobster-two-700 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lobster Two";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/lobster-two-v20-latin/lobster-two-v20-latin-700.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lobster-two-700italic - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lobster Two";
    font-style: italic;
    font-weight: 700;
    src: url("/fonts/lobster-two-v20-latin/lobster-two-v20-latin-700italic.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  // LATO

  /* lato-100 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: normal;
    font-weight: 100;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-100.woff2") format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lato-100italic - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: italic;
    font-weight: 100;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-100italic.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lato-300 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-300.woff2") format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lato-300italic - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: italic;
    font-weight: 300;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-300italic.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lato-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-regular.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lato-italic - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: italic;
    font-weight: 400;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-italic.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lato-700 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-700.woff2") format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lato-700italic - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: italic;
    font-weight: 700;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-700italic.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lato-900 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: normal;
    font-weight: 900;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-900.woff2") format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* lato-900italic - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Lato";
    font-style: italic;
    font-weight: 900;
    src: url("/fonts/lato-v24-latin/lato-v24-latin-900italic.woff2")
      format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
`;
