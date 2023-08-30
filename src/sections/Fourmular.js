import React from "react";
import { styled } from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";

const Fourmular = () => {
  return (
    <FourmularStyled>
      <Title text="Schreibe mir eine Nachricht" center />
      <div className="form">
        <Input className="vorname" text="Vorname" />
        <Input className="nachname" text="Nachname" />
        <Input className="straße" text="Straße u. Hausnummer" />
        <Input className="plz" text="Plz u. Ort" />
        <Input className="email" text="Email" />
        <Input className="anliegen" text="Ihr Anliegen" textarea />
        <Button text="Nachricht Senden" />
      </div>
    </FourmularStyled>
  );
};

const FourmularStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: var(--blue);

  .title {
    margin-bottom: var(--space-xxl);
  }

  .form {
    display: grid;
    gap: var(--space-md);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 var(--space-giant);
    grid-template-areas:
      ". ."
      ". textarea"
      ". textarea"
      ". textarea"
      "button button";

    button {
      grid-area: button;
    }
    
    textarea {
      grid-area: textarea;
    }
  }
`;

export default Fourmular;
