import React from "react";
import classname from "classnames";
import s from "./Modal.module.scss";

interface IModal {
  active: boolean;
  setActive: (value: boolean) => void;
  children?: React.ReactNode;
}

const Modal: React.FC<IModal> = (props): JSX.Element => {
  const { active, setActive, children } = props;

  return (
    <div
      className={active ? classname(s.modal, s.active) : s.modal}
      onClick={(e) => {
        e.stopPropagation()
        setActive(false)
      }}
    >
      <div
        className={
          active ? classname(s.modal_content, s.active) : s.modal_content
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
