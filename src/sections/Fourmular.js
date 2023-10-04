import React from "react";
import { styled } from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import { graphql, useStaticQuery } from "gatsby";

const Fourmular = () => {
  const {
    ueberschrift,
    vorname,
    nachname,
    strasseHausnummer,
    plzOrt,
    email,
    anliegen,
    button,
  } = useStaticQuery(graphql`
    query {
      strapiFormular {
        ueberschrift: Ueberschrift
        vorname: Vorname
        nachname: Nachname
        strasseHausnummer: StrasseHausnummer
        plzOrt: PlzOrt
        email: Email
        anliegen: Anliegen
        button: Button
      }
    }
  `).strapiFormular;

  return (
    <FourmularStyled>
      <Title text={ueberschrift} center />
      <div className="form">
        <Input className="vorname" placeholder={vorname} />
        <Input className="nachname" placeholder={nachname} />
        <Input className="straße" placeholder={strasseHausnummer} />
        <Input className="plz" placeholder={plzOrt} />
        <Input className="email" placeholder={email} />
        <Input className="anliegen" placeholder={anliegen} textarea />
        <Button text={button} />
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
