import React from "react";
import { styled } from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

const Fourmular = () => {
  return (
    <FourmularStyled>
      <Input text="Name" textarea/>
      <Input text="Name"  />
      <Button text="Nachricht Senden" />
    </FourmularStyled>
  );
};

const FourmularStyled = styled.section`
  display: flex;
  background-color: var(--blue);
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 100px;
  flex-direction: column;
  input,
  button,
  textarea {
    width: 300px;
  }
`;

export default Fourmular;
