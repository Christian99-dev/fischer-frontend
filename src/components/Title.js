import React from "react";
import { css, styled } from "styled-components";

const Title = ({ text, left, center, className="title" }) => {
  if (center) {
    return (
      <TitleCenterStyle className={className}>
        <div className="filler" />
        <h2>{text}</h2>
        <div className="filler right" />
      </TitleCenterStyle>
    );
  }
  return (
    <TitleStyle className={className} left={left}>
      {text}
    </TitleStyle>
  );
};

export default Title;

const BaseFont = css`
  background-color: transparent;
  color: white;
  font-weight: 500;
  font-size: var(--fs-1);
`;

const BaseBorder = css`
  border-bottom: 2px solid white;
`;

const TitleStyle = styled.h2`
  ${BaseFont}
  ${BaseBorder}
  text-align: left;
  padding-right: ${(props) => props.right};
  margin-left: ${(props) => props.left};
  padding-bottom: var(--space-md);
`;

const TitleCenterStyle = styled.div`
  display: flex;

  .filler {
    flex: 1;

    &.right {
      ${BaseBorder}
    }
  }
  h2 {
    ${BaseFont}
    ${BaseBorder}
    padding-bottom: var(--space-md);
  }
`;
