import React, { useEffect, useRef, useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import { FetchLeistungen } from "../data/fetch";
import ImageFilter from "../components/ImageFilter";

const LeistungenModal = ({ open, closeButton }) => {
  const { data } = FetchLeistungen();
  const [heights, setHeights] = useState([]);
  console.log("reload", heights);
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
          <div className="grid">
            {data.leistungen
              .sort((a, b) => a.order - b.order)
              .map((leistung, index) => (
                <BoxStyle
                  pheight={heights[index]}
                  key={index}
                  className="leistung"
                >
                  <h3>{leistung.title}</h3>
                  <p className="main">{leistung.text}</p>
                  <p
                    className="height-calculation"
                    ref={(el) => {
                      if(el && el?.clientHeight !== 0 && heights.length < data.leistungen.length){
                        setHeights(old => [...old, el.clientHeight])
                      }
                    }}
                  >
                    {leistung.text}
                  </p>
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
  transition: background-color 0.2s ease-out;

  h3 {
    font-weight: 500;
    font-size: var(--fs-4);
  }

  p {
    padding-top: var(--space-md);
    text-align: center;
    font-weight: 300;
    font-size: var(--fs-5);
    line-height: 1.2;
    overflow: hidden;

    &.main {
      height: 0px;
      transition: height 0.2s ease-out;
    }

    &.height-calculation {
      position: absolute;
      opacity: 0;
      z-index: -99;
      pointer-events: none;
    }
  }

  &:not(:nth-child(3n)) {
    border-right: white solid 1px;
  }

  &:not(:nth-last-child(-n + 3)) {
    border-bottom: white solid 1px;
  }

  &:hover {
    background-color: var(--blue);
    transition: background-color 0.2s ease-in;
    p.main {
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    z-index: 120;
    position: relative;
    padding: var(--space-xxl);
    color: white;
    width: 100%;
    height: 100%;
  }
`;
