import React, { useState } from "react";
import styled from "styled-components";
import { responsiveCSS } from "../theme/responsive";

const Accordion = ({ data, show }) => {
  const [items, setItems] = useState(new Array(data.length).fill(false));

  const openItem = (index) => {
    let newArray = new Array(data.length).fill(false);
    newArray[index] = true;
    setItems(newArray);
  };

  if (show)
    return (
      <AccordionStyle>
        <div className="container">
          {data.map((item, index) => (
            <div
              onKeyUp={() => openItem(index)}
              role="button"
              tabIndex={0}
              className={"item" + (items[index] ? " open" : "")}
              key={index}
              onClick={() => openItem(index)}
            >
              <h3>{item.ueberschrift}</h3>
              <div className="text">
                <div>
                  <p className="dot">•</p>
                  <p>{item.beschreibung}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AccordionStyle>
    );
};

export default Accordion;

const AccordionStyle = styled.div`
  color: white;
  z-index: 120;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .container {
    text-align: center;
    ${responsiveCSS("width", 50, 50, 50, 70, 80, 80, "%")}

    .item {
      transition: background-color 0.1s ease-out;
      background-color: transparent;

      h3 {
        color: rgba(255, 255, 255, 0.7);
        transition: color 0.1s ease-out;
        font-weight: 500;
        font-size: var(--fs-4);
        padding: var(--space-xxl) 0;
        border-bottom: rgba(255, 255, 255, 0.5) solid 1px;
        transition: border-color 0.1s ease-out;
      }

      .text {
        padding: 0;
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

      &.open {
        background-color: var(--blue);
        transition: background-color 0.2s ease-in;

        h3 {
          color: white;
          transition: color 0.15s ease-in;
          border-bottom: white solid 1px;
          transition: border-color 0.2s ease-in;
        }

        .text {
          padding: var(--space-xxl) 0;
          grid-template-rows: 1fr;
          transition: grid-template-rows 0.15s ease-in;
        }
      }
    }
  }
`;
