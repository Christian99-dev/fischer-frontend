import React from "react";
import { FetchProjects } from "../data/fetch";
import Modal from "../components/Modal";
import styled from "styled-components";
import ImageFilter from "../components/ImageFilter";

const ProjectsModal = ({ open, closeButton }) => {
  const { data } = FetchProjects();
  return (
    <Modal open={open} closeButton={closeButton}>
      <ProjectsModalStyle>
        <ImageFilter
          loading={!data}
          src={data && data.kategorien[0].background}
          background={true}
          opacity={0.7}
          color="var(--blue)"
          alt={"Projecte Hintergrundbild"}
        />
      </ProjectsModalStyle>
    </Modal>
  );
};

export default ProjectsModal;

const ProjectsModalStyle = styled.div`
  color: white;
`;
