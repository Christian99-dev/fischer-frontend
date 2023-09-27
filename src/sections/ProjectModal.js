import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import ImageFilter from "../components/ImageFilter";
import Title from "../components/Title";
import Slider from "../components/Slider";

const ProjectModal = ({ open, closeButton, data }) => {
  useEffect(() => {
    openBox(0);
  }, []);

  const [boxesOpen, setBoxesOpen] = useState(
    new Array(data.projekte.lenght).fill(false)
  );

  const openBox = (index) => {
    const newBoxes = new Array(data.projekte.lenght).fill(false);
    newBoxes[index] = true;
    setBoxesOpen(newBoxes);
  };

  return (
    <Modal
      nobackground={"true"}
      open={open}
      closeButton={closeButton}
      layer={2}
    >
      <ProjectModalStyle>
        <Slider
          onSlideChange={(swiper) => {
            openBox(swiper.realIndex);
          }}
          items={data.projekte.map((item, index) => (
            <ImageFilter
              key={index}
              loading={false}
              src={item.bild}
              background="true"
            />
          ))}
        />
        {data.projekte.map((item, index) => {
          return (
            <TextBox
              open={boxesOpen[index]}
              data={item}
              key={index}
              left={(index % 2 == 0).toString()}
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
`;

const TextBox = ({ open, data, left }) => {
  return (
    <TextBoxStyle
      className={(open ? "open" : "false") + " " + (left == "true" ? "left" : "right")}
    >
      <div className="title-wrapper">
        <div className="extra-bar" />
        <Title left="true" text={data.name} />
      </div>
      <p>{data.beschreibung}</p>
    </TextBoxStyle>
  );
};

const TextBoxStyle = styled.div`
  width: min-content;
  position: absolute;
  z-index: 210;
  color: white;
  background: rgba(0, 0, 0, 0.7);

  bottom: var(--space-lg);
  padding: var(--space-lg);
  padding-left: 0px;
  min-height: 300px;

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
    font-size: var(--fs-2);
  }
`;
