import React from "react";
import { styled } from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import { graphql, useStaticQuery } from "gatsby";
import { device } from "../theme/breakpoints";
import * as yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

  const onSubmit = (values, actions) => {
    actions.resetForm();
    send({
      vorname: values.vorname,
      nachname: values.nachname,
      strasseHausnummer: values.strasseHausnummer,
      plzOrt: values.plzOrt,
      email: values.email,
      anliegen: values.anliegen,
    });
  };

  const send = ({
    vorname,
    nachname,
    strasseHausnummer,
    plzOrt,
    email,
    anliegen,
  }) => {
    console.log(vorname, nachname, strasseHausnummer, plzOrt, email, anliegen);
    toast.success("Ihre Nachricht wurde erfolgreich abgeschickt!", { theme: "colored" });
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      vorname: "",
      nachname: "",
      strasseHausnummer: "",
      plzOrt: "",
      email: "",
      anliegen: "",
    },
    validationSchema: yup.object().shape({
      vorname: yup.string().required("Name darf nicht leer sein."),
      nachname: yup.string().required("Nachname darf nicht leer sein."),
      strasseHausnummer: yup
        .string()
        .required("Straße + Hausnummer darf nicht leer sein"),
      plzOrt: yup.string().required("Plz + Ort darf nicht leer sein."),
      email: yup
        .string()
        .email("Bitte gültige Email eingeben.")
        .required("Email darf nicht leer sein."),
      anliegen: yup.string().required("Anliegen darf nicht leer sein."),
    }),
    onSubmit,
  });

  const checkErrors = () => {
    if (errors.vorname) toast.error(errors.vorname, { theme: "colored" });
    if (errors.nachname) toast.error(errors.nachname, { theme: "colored" });
    if (errors.strasseHausnummer)
      toast.error(errors.strasseHausnummer, { theme: "colored" });
    if (errors.plzOrt) toast.error(errors.plzOrt, { theme: "colored" });
    if (errors.email) toast.error(errors.email, { theme: "colored" });
    if (errors.anliegen) toast.error(errors.anliegen, { theme: "colored" });
  };

  return (
    <>
      <StyledToastContainer />
      <FourmularStyled>
        <Title text={ueberschrift} center />
        <form className="form" onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            value={values.vorname}
            name="vorname"
            className="vorname"
            placeholder={vorname}
          />
          <Input
            onChange={handleChange}
            value={values.nachname}
            name="nachname"
            className="nachname"
            placeholder={nachname}
          />
          <Input
            onChange={handleChange}
            value={values.strasseHausnummer}
            name="strasseHausnummer"
            className="straße"
            placeholder={strasseHausnummer}
          />
          <Input
            onChange={handleChange}
            value={values.plzOrt}
            name="plzOrt"
            className="plz"
            placeholder={plzOrt}
          />
          <Input
            onChange={handleChange}
            value={values.email}
            name="email"
            className="email"
            placeholder={email}
          />
          <Input
            onChange={handleChange}
            value={values.anliegen}
            name="anliegen"
            className="anliegen"
            placeholder={anliegen}
            textarea
          />
          <Button text={button} type="submit" onClick={checkErrors} />
        </form>
      </FourmularStyled>
    </>
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
    height: min-content;
    display: grid;
    gap: var(--space-md);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 var(--space-giant);
    grid-template-areas:
      "vorname  nachname"
      "straße   textarea"
      "plz      textarea"
      "email    textarea"
      "button   button";

    button {
      grid-area: button;
    }

    textarea {
      grid-area: textarea;
    }
    .plz {
      grid-area: plz;
    }
    .straße {
      grid-area: straße;
    }
    .email {
      grid-area: email;
    }
    .vorname {
      grid-area: vorname;
    }
    .nachname {
      grid-area: nachname;
    }
  }

  @media ${device.tablet} {
    .form {
      padding: 0 var(--space-xxxl);
      grid-template-rows: 1fr 1fr 1fr 1fr 3fr;
      grid-template-areas:
        "vorname  nachname"
        "straße   straße"
        "plz      plz"
        "email    email"
        "textarea textarea"
        "button   button";
    }
  }

  @media ${device.tablet_sm} {
    .form {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 3fr;
      grid-template-areas:
        "vorname"
        "nachname"
        "straße"
        "plz"
        "email"
        "textarea"
        "button";
    }
  }
`;

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast is passed to toastClassName */
  .toast {
    /* font-size: var(--fs-3); */
  }

  /* .body is passed to bodyClassName */
  .body {
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;

export default Fourmular;
