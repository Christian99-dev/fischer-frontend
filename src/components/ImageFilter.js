import React from "react";
import { styled } from "styled-components";

const ImageFilter = ({
  src,
  alt,
  color,
  className = "image-filter",
  objectFit = "cover",
  opacity = 0.5,
  hover,
}) => {
  return (
    <ImageFilterStyle
      className={className}
      color={color}
      opacity={opacity}
      objectfit={objectFit}
      hover={hover}
    >
      <div className="filter" />
      <img alt={alt} src={src} />
    </ImageFilterStyle>
  );
};

export default ImageFilter;

const ImageFilterStyle = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;

  &:hover {
    img {
      transform: ${(props) => (props.hover ? "scale(1.05)" : "none")};
      transition: transform 0.25s ease-in;
    }
  }

  .filter,
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: ${(props) => props.objectfit};
    z-index: 10;
    transition: transform 0.25s ease-out;
  }

  .filter {
    background-color: ${(props) => props.color};
    opacity: ${(props) => props.opacity};
    z-index: 11;
  }
`;
