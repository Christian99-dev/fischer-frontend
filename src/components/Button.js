import React from "react";
import { styled } from "styled-components";

const Button = ({ text, onClick, type }) => {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      <div className="inner">{text}</div>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  padding: 2px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  background-color: white;
  
  .inner{
    font-size: var(--fs-4);
    border: 2px var(--blue) solid;
    padding: calc(var(--space-xs) - 0px) var(--space-sm);
    background-color: white;
    font-weight: 500;
    transition: all 0.2s ease-out;
  }

  &:hover, &:active{
    transition: all 0.2s ease-in;
    .inner{
      background-color: var(--blue);
      border-color:  var(--blue);
      transition: all 0.2s ease-in;
      color: white;
    }
  }
`;

export default Button;
