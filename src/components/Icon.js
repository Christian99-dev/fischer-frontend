import React from "react";
import { responsiveCSS } from "../services/Theme/responsive";
import { styled } from "gatsby-plugin-styled-components";
import addIcon from "../../static/Icons/add.svg";
import closeIcon from "../../static/Icons/close.svg";
import downIcon from "../../static/Icons/down.svg";
import houseIcon from "../../static/Icons/house.svg";
import leftIcon from "../../static/Icons/left.svg";
import leftIconBlack from "../../static/Icons/leftBlack.svg";
import rightIcon from "../../static/Icons/right.svg";

const Icon = ({ zIndex, name, onClick, className = "icon" }) => {
  const icons = new Map([
    ["add", addIcon],
    ["close", closeIcon],
    ["down", downIcon],
    ["house", houseIcon],
    ["left", leftIcon],
    ["left-black", leftIconBlack],
    ["right", rightIcon],
  ]);

  return (
    <IconStyle
      style={{ zIndex: zIndex }}
      onClick={onClick}
      className={className}
      src={icons.get(name)}
      alt={name + " icon"}
    ></IconStyle>
  );
};

const IconStyle = styled.img`
  ${responsiveCSS("height", 50, 40, 30, 20, 15)}
`;

export default Icon;
