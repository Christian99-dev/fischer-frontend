import React from "react";
import styled from "styled-components";
import GatsbyImgFilter from "./GatsbyImgFilter";
import Icon from "./Icon";
import { device } from "../theme/breakpoints";

const ImageButton = ({ text, background, onClick }) => {
  return (
    <ImageButtonStyle onClick={onClick}>
      <div className="middle-textbox">
        <h2>{text}</h2>
        <Icon name="add" />
      </div>
      <GatsbyImgFilter
        image={background}
        color="var(--blue)"
        hover="true"
        opacity={0}
        background
      />
    </ImageButtonStyle>
  );
};

const ImageButtonStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: black;
  flex: 1;
  height: 100%;
  width: 100%;
  
  .middle-textbox {
    padding: var(--space-xl);
    background-color: rgba(0, 0, 0, 0.8);
    pointer-events: none;
    position: absolute;
    text-align: center;
    z-index: 30;
    top: 40%;
    transition: top 0.2s ease;

    white-space: nowrap;

    h2 {
      color: white;
      position: relative;
      font-size: var(--fs-4);
      font-weight: 500;
      padding-bottom: var(--space-xl);
    }

    .icon {
      position: relative;
    }
  }
  &:hover {
    .middle-textbox {
      display: flex;
      justify-content: center;
      flex-direction: column;
      transition: top 0.2s ease;
      top: 35%;
    }
  }

  @media ${device.tablet} {
    align-items: center;
    .middle-textbox {
      position: relative;
      top: unset;
      h2 {
        padding: 0;
      }
      .icon {
        display: none;
      }
    }
  }
`;

export default ImageButton;
