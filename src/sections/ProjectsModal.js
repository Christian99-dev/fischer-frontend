import React, { useEffect, useState } from "react";
import { FetchProjects } from "../data/fetch";
import Modal from "../components/Modal";
import styled from "styled-components";
import ImageFilter from "../components/ImageFilter";
import Icon from "../components/Icon";
import ProjectModal from "./ProjectModal";

const ProjectsModal = ({ open, closeButton }) => {
  const { data } = FetchProjects();
  const [modals, setModals] = useState([]);
  useEffect(() => {
    if (data && modals.length === 0)
      setModals(new Array(data.kategorien.length).fill(false));
  }, [data, modals]);

  const openModal = (index) => {
    setModals((prevModals) => {
      const newModals = [...prevModals];
      newModals[index] = true;
      return newModals;
    });
  };

  const closeModal = (index) => {
    setModals((prevModals) => {
      const newModals = [...prevModals];
      newModals[index] = false;
      return newModals;
    });
  };

  return (
    <Modal open={open} closeButton={closeButton}>
      <ProjectsModalStyle>
        {data &&
          data.kategorien
            .sort((a, b) => a.order - b.order)
            .filter((a) => a.order <= 4)
            .map((kategorie, index) => (
              <React.Fragment key={index}>
                <BoxStyle className="auswahl" onClick={() => openModal(index)}>
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
                {open && modals.length > 0 && <ProjectModal
                  data={data.kategorien[index]}
                  open={modals[index]}
                  closeButton={() => closeModal(index)}
                />}
              </React.Fragment>
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
