import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ImgFilter = ({ image, background, color, opacity, hover }) => {
  return (
    <ImgFilterWrapper
      hover={hover}
      opacity={opacity}
      color={color}
      className={background && "background"}
    >
      <div className="filter" />
      <GatsbyImage
        image={getImage(image.localFile)}
        alt={image.alternativeText}
        className="img"
      />
    </ImgFilterWrapper>
  );
};

export default ImgFilter;

const ImgFilterWrapper = styled.div`
  position: relative;
  height: 20px;
  width: 20px;

  &.background {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  &:hover {
    .img {
      img {
        transform: ${(props) => (props.hover ? "scale(1.05)" : "none")};
        transition: transform 0.2s ease-in;
      }
    }
  }

  .filter,
  .img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .filter {
    z-index: 20;
    opacity: ${(props) => props.opacity};
    background-color: ${(props) => props.color};
  }

  .img {
    z-index: 19;
    object-fit: cover;

    img {
      transition: transform 0.1s ease-out;
    }
  }
`;
