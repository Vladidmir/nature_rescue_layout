import { ContentContainer } from "components";

import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedIn.svg";
import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <ContentContainer>
      <div className={s.footer}>
        <div className={s.footerContacts}>
          <h1 className={s.title}>Contacts</h1>
          <p>2019 Rootz Foundation. All rights reserved</p>
        </div>

        <div className={s.footerHeadquarters}>
          <h1 className={s.title}>Headquarters</h1>
          <p>
            1234 Taliban.
            <br /> Los Angeles, La 1234567. <br />
            (123) 456-7890
          </p>
        </div>

        <div className={s.footerMedia}>
          <h1 className={s.title}>Social media</h1>
          <div className={s.links}>
            <a
              target="_blank"
              href={"https://github.com/Vladidmir?tab=repositories"}
              rel="noreferrer"
            >
              <TwitterIcon color={"#333333"} fontSize={32} />
            </a>
            <a
              target="_blank"
              href={"https://github.com/Vladidmir?tab=repositories"}
              rel="noreferrer"
            >
              <FacebookIcon color={"#333333"} fontSize={32} />
            </a>
            <a
              target="_blank"
              href={"https://github.com/Vladidmir?tab=repositories"}
              rel="noreferrer"
            >
              <LinkedinIcon color={"#333333"} fontSize={32} />
            </a>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
