import React, { useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import { FetchLeistungen } from "../data/fetch";
import ImageFilter from "../components/ImageFilter";

const LeistungenModal = ({ open, closeButton }) => {
  const { data } = FetchLeistungen();
  const [heights, setHeights] = useState([]);
  return (
    <Modal open={open} closeButton={closeButton}>
      <LeistungenModalStyle>
        <ImageFilter
          loading={!data}
          src={data?.background}
          background="true"
          opacity={0.8}
          color="var(--blue)"
          alt={"Projecte Hintergrundbild"}
        />
        {data && (
          <div className={"grid _" + data.leistungen.length}>
            {data.leistungen
              .sort((a, b) => a.order - b.order)
              .map((leistung, index) => (
                <BoxStyle
                  pheight={heights[index]}
                  key={index}
                  className="leistung"
                >
                  <h3>{leistung.title}</h3>
                  <div className="text main">
                    <p className="dot">•</p>
                    <p>{leistung.text}</p>
                  </div>
                  <div
                    className="text height-calculation"
                    ref={(el) => {
                      if (
                        el &&
                        el?.clientHeight !== 0 &&
                        heights.length < data.leistungen.length
                      ) {
                        setHeights((old) => [...old, el.clientHeight]);
                      }
                    }}
                  >
                    <p className="dot">•</p>
                    <p>{leistung.text}</p>
                  </div>
                </BoxStyle>
              ))}
          </div>
        )}
      </LeistungenModalStyle>
    </Modal>
  );
};

export default LeistungenModal;

const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--space-md) var(--space-xxl);
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.1s ease-out;

  h3 {
    font-weight: 500;
    font-size: var(--fs-4);
  }

  .text {
    padding-top: var(--space-sm);
    text-align: center;
    font-weight: 300;
    font-size: var(--fs-5);
    line-height: 1.2;
    overflow: hidden;

    .dot {
      padding-bottom: var(--space-sm);
      font-size: var(--fs-5);
    }

    &.main {
      height: 0px;
      transition: height 0.1s ease-out;
    }

    &.height-calculation {
      position: absolute;
      opacity: 0;
      z-index: -99;
      pointer-events: none;
    }
  }

  &:hover {
    background-color: var(--blue);
    transition: background-color 0.2s ease-in;
    .text.main {
      height: ${(props) => (props.pheight ? props.pheight + "px" : "0px")};
      transition: height 0.2s ease-in;
    }
  }
`;

const LeistungenModalStyle = styled.div`
  width: 100%;
  height: 100%;
  .grid {
    display: grid;
    z-index: 120;
    position: relative;
    padding: var(--space-xxl);
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
  }
`;
