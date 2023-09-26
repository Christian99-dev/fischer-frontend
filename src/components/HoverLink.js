import { Link } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";

const HoverLink = ({ to, text, className = "link", gatsbyLink }) => {
  if (gatsbyLink) {
    return (
      <GatsbyLinkStyle className={className} to={to}>
        {text}
      </GatsbyLinkStyle>
    );
  } else {
    return (
      <LinkStyle className={className} href={to}>
        {text}
      </LinkStyle>
    );
  }
};

export default HoverLink;

const textStyle = css`
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: opacity 0.1s ease-out;
  opacity: 1;

  &:hover {
    transition: opacity 0.2s ease-in;
    opacity: 0.7;
  }
`;

const GatsbyLinkStyle = styled(Link)`
  ${textStyle}
`;

const LinkStyle = styled.a`
  ${textStyle}
`;
