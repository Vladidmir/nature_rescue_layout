import React from "react";
import s from "./burgerButton.module.scss";

interface BurgerButtonProps {
  onClick: () => void;
  open: boolean;
}

export const BurgerButton: React.FC<BurgerButtonProps> = (props) => {
  const { onClick, open } = props;
  return (
    <div
      className={`${s.burger} ${open ? s.burgerOpen : ""}`}
      onClick={onClick}
    >
      <span />
    </div>
  );
};
