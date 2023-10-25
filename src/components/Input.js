import React from "react";
import { css, styled } from "styled-components";

const Input = ({ placeholder, value, textarea, className, onChange, name }) => {

    if(textarea)
        return <TextareaStyle onChange={onChange} name={name} className={className} value={value} placeholder={placeholder}/>
    else 
        return <InputStyle onChange={onChange} name={name} className={className} value={value} placeholder={placeholder}/>

};

const BaseStyle = css`
  color: white;
  background-color: transparent;
  border: 2px var(--white) solid;
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--fs-4);
  border-color: var(--grey);
  transition: border-color 0.2s ease-out;
  width: 100%;
  font-weight: 500;

  &::placeholder {
    color: var(--grey);
    font-weight: 300;
  }

  &:hover {
    border-color: var(--dark-grey);
    transition: border-color 0.2s ease-in;
  }

  &:focus,
  &:not(:placeholder-shown) {
    outline: none;
    border-color: white;
    transition: border-color 0.2s ease-in;
  }
`;

const InputStyle = styled.input`
  ${BaseStyle}
`;

const TextareaStyle = styled.textarea`
  ${BaseStyle}
  height: 100%;
`;

export default Input;
