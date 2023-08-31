import React from "react";
import { FetchSelection } from "../data/fetch";
import { styled } from "styled-components";
import ImageFilter from "../components/ImageFilter";
import Icon from "../components/Icon";

const Selection = () => {
  return (
    <SelectionStyle>
      <Card identifier="projekte" />
      <Card identifier="leistungen" />
      <Card identifier="ueberuns" />
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

const Card = ({ identifier }) => {
  const { data } = FetchSelection();
  const background = data && data[identifier].background;

  return (
      <CardStyle>
        <div className="textbox">
          {data && <h2>{data[identifier].name}</h2>}
          <Icon name="add" />
        </div>
        <ImageFilter
          color="var(--blue)"
          src={background}
          opacity={0.55}
          alt={data ? data[identifier].name + " Auswahlbild" : "Auswahlbild"}
          loading={!data}
          hover
        />
      </CardStyle>
    
  );
};

const CardStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;

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

  .image-filter {
    position: absolute;
    top: 0;
  }
`;
