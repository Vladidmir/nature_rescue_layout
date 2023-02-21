import React, { useState } from "react";
import s from "./AcordionMenu.module.scss";

interface IProps {
  title: string;
  description: string;
  questionIsOpen: boolean;
}

export const AccordionMenu: React.FC<IProps> = ({
  title,
  description,
  questionIsOpen,
}) => {
  const [isOpen, setOpen] = useState<boolean>(questionIsOpen);

  return (
    <div className={s.Acordion}>
      <div className={s.AcordionHeader}>
        <h3 className={s.AcordionTitle}>{title}</h3>
        <button
          className={s.AcordionBtn}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div
            className={
              isOpen
                ? `${s.AcordionBtnIcon} ${s.AcordionBtnIconOpen}`
                : s.AcordionBtnIcon
            }
          >
            {}
          </div>
        </button>
      </div>
      <div
        className={
          isOpen
            ? `${s.AcordionContent} ${s.AcordionContentOpen}`
            : s.AcordionContent
        }
      >
        <p className={s.AcordionDescription}>{description}</p>
      </div>
      <hr className={s.AcordionEndline} />
    </div>
  );
};
