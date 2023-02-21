import { ContentContainer } from "components/containers/ContentContainer";

import teamLaptop from "../../../assets/img/team/team_laptop.png";
import teamMobile from "../../../assets/img/team/team_mobile.png";

import { useMedia } from "hooks/useMedia";
import { Position } from "store/slices/navigationSlice";

import s from "./teamPage.module.scss";

export const TeamPage = () => {
  const isLaptop = useMedia("(min-width: 900px)");
  return (
    <div className={s.page}>
      <div className={s.pageAnchor} id={`${Position.Team}`}></div>
      <ContentContainer>
        <div className={s.team}>
          <h2 className={s.teamTitle}>Our top team</h2>
          <h3 className={s.teamSubtitle}>
            Learn more about how you can save our planet's nature
          </h3>
          <div className={s.teamPhotos}>
            <img src={isLaptop ? teamLaptop : teamMobile} alt="Team Photos" />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
