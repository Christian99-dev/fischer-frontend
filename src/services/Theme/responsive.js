import { device } from "../../theme/breakpoints";

export const responsiveCSS = (
  name,
  desktopXL,
  desktop,
  laptop,
  tablet,
  mobile,
  end = "px"
) => {
  return `
    ${name} : ${desktop}${end};
    @media ${device.desktopXL}    {${name} : ${desktopXL}${end}}
    @media ${device.laptop}       {${name} : ${laptop}${end}}
    @media ${device.tablet}       {${name} : ${tablet}${end}}
    @media ${device.mobile}       {${name} : ${mobile}${end}}
  `;
};