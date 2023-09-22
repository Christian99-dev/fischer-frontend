import React from "react";
import { FetchProjects } from "../data/fetch";
import Modal from "../components/Modal";
import styled from "styled-components";
import ImageFilter from "../components/ImageFilter";
import Icon from "../components/Icon";

const ProjectsModal = ({ open, closeButton }) => {
  const { data } = FetchProjects();
  return (
    <Modal open={open} closeButton={closeButton}>
      <ProjectsModalStyle>
        {data &&
          data.kategorien.sort((a,b) => a.order - b.order).filter(a => a.order <= 2).map((kategorie, index) => (
            <BoxStyle key={index} className="auswahl">
              <div className="textbox">
                {data && <h2>{kategorie.name}</h2>}
                <Icon name="add" className="add-icon" />
              </div>
              <ImageFilter
                loading={!data}
                src={kategorie.background}
                opacity={0.6}
                color="var(--blue)"
                alt={"Projecte Hintergrundbild"}
                hover="true"
                background="true"
              />
            </BoxStyle>
          ))}
      </ProjectsModalStyle>
    </Modal>
  );
};

export default ProjectsModal;

const ProjectsModalStyle = styled.div`
  display: flex;
  height: 100%;
`;

const BoxStyle = styled.div`
  cursor: pointer;
  width: 100%;
  position: relative;
  .textbox {
    pointer-events: none;
    position: absolute;
    top: 40%;
    text-align: center;
    width: 100%;

    h2 {
      text-align: center;
      color: white;
      position: relative;
      z-index: 20;
      font-size: var(--fs-4);
      font-weight: 500;
      padding-bottom: var(--space-xl);
    }

    .add-icon {
      position: relative;
      z-index: 20;
    }
  }
`;
