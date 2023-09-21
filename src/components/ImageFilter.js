import React, { useState } from "react";
import { styled } from "styled-components";

const ImageFilter = ({
  background,
  src,
  alt,
  color,
  className = "image-filter",
  objectFit = "cover",
  opacity = 0.5,
  hover,
  loading,
  imageZindex,
  filterZindex,
}) => {
  const [imgLoaded, setImgLoaded] = useState(!loading);
  return (
    <ImageFilterStyle
      className={!background ? className : className + " background"}
      color={color}
      opacity={opacity}
      objectfit={objectFit}
      hover={hover}
    >
      <div className={"filter " + imgLoaded} />
      {!loading && (
        <img
          alt={alt}
          src={src}
          onLoad={() => {
            setImgLoaded(true);
          }}
        />
      )}
    </ImageFilterStyle>
  );
};

export default ImageFilter;

const ImageFilterStyle = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  &.background{
    position: absolute;
    top: 0;
  }

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
    z-index: 11;

    &.false {
      opacity: 1;
    }

    &.true {
      opacity: ${(props) => props.opacity};
      transition: opacity 0.4s ease-in;
    }
  }
`;
