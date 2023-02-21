import { useState } from "react";
import logo from "../../../assets/img/Logo.png";

import { BurgerButton, Button } from "components";
import NavLink from "../NavLink";

import s from "./mobileHeader.module.scss";
import { routes } from "../routes";
import { Position } from "store/slices/navigationSlice";

export const MobileHeader = () => {
  const [displayNavigation, setDisplayNavigation] = useState(false);

  const onToggleNavigation = () => {
    setDisplayNavigation((displayNavigation) => !displayNavigation);
  };

  return (
    <div className={s.menu}>
      <a className={s.navigationLogo} href="#">
        <img src={logo} alt="Rootz" />
      </a>
      <BurgerButton open={displayNavigation} onClick={onToggleNavigation} />
      <div
        style={{
          display: "flex",
          transform: `translateY(${displayNavigation ? 115 + "px" : `-100vh`})`,
        }}
        className={s.navigation}
      >
        <ul className={s.navigationLinks}>
          {routes.map((route) => (
            <li key={route} onClick={onToggleNavigation}>
              <NavLink type={route} />
            </li>
          ))}
        </ul>

        <Button
          onClick={onToggleNavigation}
          laout="nav"
          className={s.navigationApplyBtn}
        >
          <NavLink
            styles={{ fontWeight: 700, fontSize: 16 }}
            type={Position.Apply}
          >
            Apply
          </NavLink>
        </Button>
      </div>
    </div>
  );
};
