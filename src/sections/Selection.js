import React, { useState } from "react";
import { FetchSelection } from "../data/fetch";
import { styled } from "styled-components";
import ImageFilter from "../components/ImageFilter";
import Icon from "../components/Icon";
import AboutUsModal from "./AboutUsModal";
import LeistungenModal from "./LeistungenModal";
import ProjectsModal from "./ProjectsModal";

const Selection = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showLeistungen, setShowLeistungen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  return (
    <SelectionStyle id="selection">
      <Card identifier="projekte" onClick={() => setShowProjects(true)} />
      <Card identifier="leistungen" onClick={() => setShowLeistungen(true)} />
      <Card identifier="ueberuns" onClick={() => setShowAboutUs(true)} />
      <AboutUsModal
        open={showAboutUs}
        closeButton={() => setShowAboutUs(false)}
      />
      <LeistungenModal
        open={showLeistungen}
        closeButton={() => setShowLeistungen(false)}
      />
      <ProjectsModal
        open={showProjects}
        closeButton={() => setShowProjects(false)}
      />
    </SelectionStyle>
  );
};

export default Selection;

const SelectionStyle = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: var(--space-xxl) var(--space-xxxl);
  justify-content: space-between;
  gap: var(--space-lg);
`;

const Card = ({ identifier, onClick }) => {
  const { data } = FetchSelection();
  const background = data && data[identifier].background;

  return (
    <CardStyle onClick={onClick}>
      <div className="textbox">
        {data && <h2>{data[identifier].name}</h2>}
        <Icon name="add" />
      </div>
      <ImageFilter
        background="true"
        color="var(--blue)"
        src={background}
        opacity={0.55}
        alt={data ? data[identifier].name + " Auswahlbild" : "Auswahlbild"}
        loading={!data}
        hover="true"
      />
    </CardStyle>
  );
};

const CardStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: black;

  .textbox {
    pointer-events: none;
    position: absolute;
    top: 40%;
    text-align: center;

    h2 {
      color: white;
      position: relative;
      z-index: 20;
      font-size: var(--fs-4);
      font-weight: 500;
      padding-bottom: var(--space-xl);
    }

    .icon {
      position: relative;
      z-index: 20;
    }
  }
`;
