import React, { CSSProperties } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  Position,
  setCurrentPosition,
} from "../../../store/slices/navigationSlice";
import s from "./navLink.module.scss";

interface Props {
  type: Position;
  children?: React.ReactNode;
  styles?: CSSProperties;
  // navLinkHandler: (e: React.MouseEvent, type: Position) => void;
}

const NavLink: React.FC<Props> = ({ type, styles }) => {
  const currentPosition = useAppSelector(
    (state) => state.navigationReduser.currentPosition
  );

  const dispatch = useAppDispatch();

  const navLinkHandler = (position: Position): void => {
    dispatch(setCurrentPosition(position));
  };

  return (
    <a
      style={styles ? styles : {}}
      onClick={(e) => navLinkHandler(type)}
      className={
        currentPosition === type ? `${s.link} ${s.linkActive}` : s.link
      }
      href={`#${type}`}
    >
      {Position[type]}
    </a>
  );
};

export default NavLink;
