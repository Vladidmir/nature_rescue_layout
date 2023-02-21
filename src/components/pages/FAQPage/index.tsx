import { useState } from "react";

import { AccordionMenu, Button, ContentContainer } from "components";
import { FAQData } from "./questions";

import s from "./FAQPage.module.scss";
import { Position } from "store/slices/navigationSlice";

export const FAQPage = () => {
  const [questions] = useState(FAQData);

  return (
    <ContentContainer>
      <div className={s.FAQ}>
        <div className={s.FAQAnchor} id={`${Position["Our mission"]}`}></div>
        <div className={s.encourageBlock}>
          <h1>Ready to Get started?</h1>
          <p>
            When pattern is mentioned in interior design, it is easy to asso-
            ciate it with a geometric patterned wallpaper or colourful prints on
            interior fabrics.
          </p>
          <Button laout="primary" className={s.contactButton}>
            Contact Us
          </Button>
        </div>
        <div>
          {questions.map(({ title, description, id, isOpen }) => (
            <AccordionMenu
              key={id}
              description={description}
              title={title}
              questionIsOpen={isOpen}
            />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};
