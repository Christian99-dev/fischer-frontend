import React, { useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import ImageFilter from "../components/ImageFilter";
import Title from "../components/Title";

const ProjectModal = ({ open, closeButton, data }) => {
  return (
    <Modal
      nobackground={"true"}
      open={open}
      closeButton={closeButton}
      layer={2}
    >
      <ProjectModalStyle>
        <Box data={data.projekte[0]} left="true" />
      </ProjectModalStyle>
    </Modal>
  );
};

export default ProjectModal;

const ProjectModalStyle = styled.div`
  color: white;
`;

const Box = ({ data, left }) => {
  // const [read, setReadMore] = useState(false);
  return (
    <BoxStyle left={left}>
      {JSON.stringify(data)}
      <div className="textbox">
        <div className="title-wrapper">
          <div className="extra-bar" />
          <Title left="true" text={data.name} />
        </div>
        <p>{data.beschreibung}</p>
      </div>
      <ImageFilter
        loading={false}
        src={data.bild}
        opacity={0}
        background="true"
      />
    </BoxStyle>
  );
};

const BoxStyle = styled.div`
  color: white;
  height: 100%;
  width: 100%;
  
  .textbox {
    width: 300px;
    position: absolute;
    z-index: 210;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    left: var(--space-lg);
    bottom: var(--space-lg);
    padding: var(--space-lg);
    padding-left: 0px;

    .title-wrapper {
      display: flex;
      margin-bottom: var(--space-lg);
      .extra-bar {
        min-width: var(--space-lg);
        border-bottom: 2px solid white;
      }
    }

    p {
      font-size: var(--fs-6);
      line-height: 1.7;
      padding-left: var(--space-lg);
    }

    .title{
      font-size: var(--fs-2);
    }
  }
`;
