import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import styles from "./Header.module.scss";
import logo from "../../images/icons/logo.svg";

import path from "../../services/routerPath.json";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import { useTranslation } from "react-i18next";
import { header } from "../../translations/ua/common.json";
import { useMatch, Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const { t } = useTranslation();
  const isTestLink = useMatch(path.testLink);
  const isTest = useMatch(path.test);

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.Header}>
        <nav className={styles.Nav}>
          <Link to={path.home}>
            <img src={logo} alt="Logo" />
          </Link>
          <Navigation />
        </nav>
        {!isTest && !isTestLink && (
          <Link to={path.testLink} className={styles.button}>
            <Fade duration={500}>
              <Button width={220} color="black" bgColor="white">
                <span>{t(header.btn)}</span>
                <SvgArrow size={20} orientation="right" />
              </Button>
            </Fade>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
