import React from "react";
import addIcon from "../../static/Icons/add.svg";
import { responsiveCSS } from "../services/Theme/responsive";
import { styled } from "styled-components";

const Icon = ({ name }) => {
  const icons = new Map([["add", addIcon]]);
  return <IconStyle className="icon" src={icons.get(name)} alt={name + " icon"}></IconStyle>;
};

const IconStyle = styled.img`
  ${responsiveCSS("height", 60, 50, 40, 30, 25)}
`;

export default Icon;
