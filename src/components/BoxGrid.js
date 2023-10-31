import React from "react";
import styled from "styled-components";

const BoxGrid = ({ show, data }) => {
  if (show)
    return (
      <GridStyle className={"_" + data.length}>
        {data.map((item, index) => (
          <BoxStyle key={index} className="leistung">
            <h3>{item.ueberschrift}</h3>
            <div className="text">
              <div>
                <p className="dot">•</p>
                <p>{item.beschreibung}</p>
              </div>
            </div>
          </BoxStyle>
        ))}
      </GridStyle>
    );
};

export default BoxGrid;

const GridStyle = styled.div`
  display: grid;
  z-index: 120;
  position: relative;
  padding: var(--space-xxxl);
  color: white;
  width: 100%;
  height: 100%;

  &._2 {
    display: flex;
    flex-direction: row;

    .leistung:nth-child(1) {
      border-right: white solid 1px;
    }
  }

  &._3 {
    display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a a a a"
      "b b c c";

    .leistung:nth-child(1) {
      border-bottom: white solid 1px;
      grid-area: a;
    }
    .leistung:nth-child(2) {
      border-right: white solid 1px;
      grid-area: b;
    }
    .leistung:nth-child(3) {
      grid-area: c;
    }
  }

  &._4 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .leistung:nth-child(1) {
      border-right: white solid 1px;
      border-bottom: white solid 1px;
    }

    .leistung:nth-child(2) {
      border-bottom: white solid 1px;
    }

    .leistung:nth-child(3) {
      border-right: white solid 1px;
    }
  }

  &._5 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a a a b b b"
      "c c d d e e";

    .leistung:nth-child(1) {
      border-bottom: white solid 1px;
      border-right: white solid 1px;
      grid-area: a;
    }
    .leistung:nth-child(2) {
      border-bottom: white solid 1px;
      grid-area: b;
    }
    .leistung:nth-child(3) {
      border-right: white solid 1px;
      grid-area: c;
    }
    .leistung:nth-child(4) {
      border-right: white solid 1px;
      grid-area: d;
    }
    .leistung:nth-child(5) {
      grid-area: e;
    }
  }

  &._6 {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .leistung:not(:nth-child(3n)) {
      border-right: white solid 1px;
    }

    .leistung:not(:nth-last-child(-n + 3)) {
      border-bottom: white solid 1px;
    }
  }
`;

const BoxStyle = styled.div`
  padding: 0 var(--space-xxl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.1s ease-out;

  h3 {
    font-weight: 500;
    font-size: var(--fs-4);
    text-align: center;
  }

  .text {
    padding-top: var(--space-sm);
    text-align: center;
    font-weight: 300;
    font-size: var(--fs-5);
    line-height: 1.2;

    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.1s ease-out;

    > div {
      overflow: hidden;
    }

    .dot {
      padding-bottom: var(--space-sm);
      font-size: var(--fs-5);
    }
  }

  &:hover {
    background-color: var(--dark-blue);
    transition: background-color 0.2s ease-in;

    .text {
      grid-template-rows: 1fr;
      transition: grid-template-rows 0.15s ease-in;
    }
  }
`;
