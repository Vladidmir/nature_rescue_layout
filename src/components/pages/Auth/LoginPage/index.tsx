import { ContentContainer, Form } from "components";
import { Position } from "store/slices/navigationSlice";

import s from "./loginPage.module.scss";

export const LoginPage = () => {
  return (
    <ContentContainer>
      <div className={s.page}>
        <div className={s.pageAnchor} id={`${Position.Apply}`}></div>
        <div className={s.info}>
          <h1 className={s.infoTitle}>Get started today!</h1>
          <h3 className={s.infoSubtitle}>
            Learn more about how you can save our planet's nature. From smart
            consumption to switching to renewable energy, each of us can do our
            part to save the planet
          </h3>
        </div>
        <Form laout="login" />
      </div>
    </ContentContainer>
  );
};
