import { MembersCard, ContentContainer, SearchPlaceInput } from "components";
import headdline from "../../../assets/img/home/Headline.png";

import { Position } from "store/slices/navigationSlice";
import s from "./mainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={s.root}>
      <div id={`${Position.Home}`} className={s.rootAnchor}></div>

      <ContentContainer>
        <div className={s.greetingContent}>
          <div className={s.encourage}>
            <div className={s.headline}>
              <img className={s.headline} src={headdline} alt={"some text"} />
            </div>
            <p className={s.subtitle}>
              The scale of the challenges facing our planet can seem daunting,
              but we can all do something.
            </p>
            <div className={s.input}>
              <SearchPlaceInput />
            </div>
          </div>
          <div className={s.memberBlock}>
            <MembersCard />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
