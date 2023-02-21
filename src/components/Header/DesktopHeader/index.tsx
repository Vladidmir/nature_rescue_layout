import logo from "../../../assets/img/Logo.png";

import { Button } from "components";
import NavLink from "../NavLink";

import { routes } from "../routes";
import s from "./desktopHeader.module.scss";
import { Position } from "store/slices/navigationSlice";

export const DesktopHeader = () => {
  return (
    <div className={s.navigation}>
      <a className={s.navigationLogo} href="#">
        <img src={logo} alt="Rootz" />
      </a>

      <ul className={s.links}>
        {routes.map((link) => (
          <li key={link}>
            <NavLink type={link} />
          </li>
        ))}
      </ul>

      <Button laout="nav" className={s.navigationApplyBtn}>
        <NavLink
          styles={{ fontWeight: 700, fontSize: 16 }}
          type={Position.Apply}
        >
          Apply
        </NavLink>
      </Button>
    </div>
  );
};
