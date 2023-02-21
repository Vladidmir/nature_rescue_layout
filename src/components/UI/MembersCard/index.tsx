import parrotImg from "../../../assets/img/home/Parrot.png";
import s from "./membersCard.module.scss";

export const MembersCard = () => {
  return (
    <div className={s.card}>
      <img className={s.parrot} src={parrotImg} alt="Parrot img" />
      <div className={s.square}>
        <div className={s.members}>
          <p className={s.text}>Members</p>
          <p className={s.count}>29 128</p>
        </div>
      </div>
    </div>
  );
};
