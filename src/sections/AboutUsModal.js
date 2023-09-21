import React from "react";
import Modal from "../components/Modal";
import { styled } from "styled-components";
import ImageFilter from "../components/ImageFilter";
import { FetchAboutUs } from "../data/fetch";

const AboutUsModal = ({ open, closeButton }) => {
  const { data, loading } = FetchAboutUs();
  return (
    <Modal open={open} closeButton={closeButton}>
      <AboutUsModalStyle>
        <ImageFilter
          src={!loading && data.background}
          loading={!data}
          color="var(--blue)"
          opacity={0.55}
          alt={"Über Uns Hintergrundbild"}
          background="true"
        />
        {data && (
          <div className="textsection">
            <h1>{data.title}</h1>
            <p>{data.text}</p>
          </div>
        )}
      </AboutUsModalStyle>
    </Modal>
  );
};

export default AboutUsModal;

const AboutUsModalStyle = styled.div`
  color: white;
  .textsection{
    position: absolute;
    z-index: 120;
    padding: var(--space-xxl);
    width: 60%;
    h1{
      font-size: calc(var(--fs-bigtitle) / 1.5);
      font-family: "Lobster Two", normal;
      font-weight: 100;
      padding-bottom: var(--space-lg);
    }
    p{
      line-height: 1.5;
      font-size: var(--fs-5);
    }
  }
`;
