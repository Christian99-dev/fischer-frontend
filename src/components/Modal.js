import React from "react";
import { styled } from "styled-components";
import Icon from "./Icon";

const Modal = ({ noBackground, open, children, closeButton, layer = 1 }) => {
  return (
    <ModalStyle
      style={{ zIndex: layer * 100 }}
      noBackground={noBackground}
      className={open ? "open" : "close"}
    >
      <div className="box">
        <Icon zIndex={layer * 100 + 50} name="close" onClick={closeButton} />
        {children}
      </div>
    </ModalStyle>
  );
};

export default Modal;

const ModalStyle = styled.div`
  &.close {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.07s ease-out;
  }

  &.open {
    opacity: 1;
    transition: opacity 0.1s ease-in;
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${(props) => !props.noBackground && "background-color: rgba(0, 0, 0, 0.4);"}
  .box {
    .icon {
      cursor: pointer;
      position: absolute;
      right: var(--space-lg);
      top: var(--space-lg);
    }

    position: fixed;
    background-color: black;
    top: var(--space-lg);
    left: var(--space-lg);
    right: var(--space-lg);
    bottom: var(--space-lg);
    border-radius: 5px;
  }
`;
