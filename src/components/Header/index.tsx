import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { useMedia } from "hooks/useMedia";

import s from "./header.module.scss";

interface IProps {}

export const Header: React.FC<IProps> = () => {
  const isDesktop = useMedia("(min-width: 900px)");

  return (
    <div className={s.header}>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </div>
  );
};
