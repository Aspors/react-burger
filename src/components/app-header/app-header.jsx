import React, { memo } from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./app-header.module.css";
import { BUTTON } from "../../utils/consts/ui-consts/buttons-text";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/consts/sevice-consts/routes.consts";

const AppHeader = memo(() => {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTES.HOME;
  const isProfile = pathname === ROUTES.PROFILE;
  return (
    <header className={appHeaderStyles.header}>
      <div className="container">
        <div className={appHeaderStyles.header__inner}>
          <nav className={appHeaderStyles.nav}>
            <ul className={appHeaderStyles.nav__list}>
              <li className={appHeaderStyles["nav__list-item"]}>
                <Link className={appHeaderStyles["nav__list-link"]} to="/">
                  <BurgerIcon type={isHome ? "primary" : "secondary"} />
                  <span
                    className={`${appHeaderStyles["nav__list-span"]} ${
                      isHome && appHeaderStyles.active
                    }`}
                  >
                    {BUTTON.CONSTRUCTOR}
                  </span>
                </Link>
              </li>
              <li className={appHeaderStyles["nav__list-item"]}>
                <Link className={appHeaderStyles["nav__list-link"]} to="/">
                  <ListIcon type="secondary" />
                  <span className={appHeaderStyles["nav__list-span"]}>
                    {BUTTON.LINE}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <Link className={appHeaderStyles.header__logo} to="/">
            <Logo />
          </Link>
          <nav className={appHeaderStyles.nav}>
            <ul className={appHeaderStyles.nav__list}>
              <li className={appHeaderStyles["nav__list-item"]}>
                <Link
                  className={appHeaderStyles["nav__list-link"]}
                  to="/profile"
                >
                  <ProfileIcon type={isProfile ? "primary" : "secondary"} />
                  <span
                    className={`${appHeaderStyles["nav__list-span"]} ${
                      isProfile && appHeaderStyles["active"]
                    }`}
                  >
                    {BUTTON.PROFILE_MENU}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});

export default AppHeader;
