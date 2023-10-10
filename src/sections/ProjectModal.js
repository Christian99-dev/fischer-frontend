import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import Title from "../components/Title";
import Slider from "../components/Slider";
import GatsbyImgFilter from "../components/GatsbyImgFilter";
import { device } from "../theme/breakpoints";

const ProjectModal = ({ open, closeButton, data }) => {
  const { projekte } = data;

  useEffect(() => {
    openBox(0);
  }, []); // eslint-disable-line

  const openBox = (index) => {
    const newBoxes = new Array(data.projekte.lenght).fill(false);
    newBoxes[index] = true;
    setBoxesOpen(newBoxes);
  };

  const [boxesOpen, setBoxesOpen] = useState(
    new Array(projekte.lenght).fill(false)
  );

  return (
    <Modal nobackground="true" open={open} closeButton={closeButton} layer={2}>
      <ProjectModalStyle>
        <Slider
          onSlideChange={(swiper) => {
            openBox(swiper.realIndex);
          }}
          items={data.projekte.map((projekt, index) => (
            <GatsbyImgFilter
              key={index}
              image={projekt.bild}
              background="true"
            ></GatsbyImgFilter>
          ))}
        />
        {projekte.map((item, index) => {
          return (
            <TextBox
              open={boxesOpen[index]}
              data={item}
              key={index}
              left={(index % 2 === 0).toString()}
            />
          );
        })}
      </ProjectModalStyle>
    </Modal>
  );
};

export default ProjectModal;

const ProjectModalStyle = styled.div`
  height: 100%;
  position: relative;

  .slider{
    .swiper{
      position: relative;
      z-index: 120;
    }
  }
`;

const TextBox = ({ open, data, left }) => {
  return (
    <TextBoxStyle
      className={
        (open ? "open" : "false") + " " + (left === "true" ? "left" : "right")
      }
    >
      <div className="title-wrapper">
        <div className="extra-bar" />
        <Title left="true" text={data.titel} tag="h4" />
      </div>
      <p>{data.beschreibung}</p>
    </TextBoxStyle>
  );
};

const TextBoxStyle = styled.div`
  position: absolute;
  z-index: 210;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  bottom: var(--space-lg);
  padding: var(--space-lg);
  padding-left: 0px;
  width: min-content;
  height: min-content;

  &.left {
    left: var(--space-lg);
  }

  &.right {
    right: var(--space-lg);
  }

  &.true {
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }

  &.false {
    opacity: 0;
    transition: opacity 0.15s ease-out;
  }

  .title-wrapper {
    display: flex;
    margin-bottom: var(--space-lg);

    .title {
      min-width: 250px;
    }

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

  .title {
    h4 {
      font-size: var(--fs-2);
    }
  }

  @media ${device.mobile} {
    &.right,
    &.left {
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
    }

    .title-wrapper {
      .title {
        min-width: min-content;
      }
    }
  }
`;
