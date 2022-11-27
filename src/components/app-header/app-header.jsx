import React, { memo } from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./app-header.module.css";
import { BUTTON } from "../../utils/consts/buttons-text";
import { Link } from "react-router-dom";

const AppHeader = memo(() => {
  return (
    <header className={appHeaderStyles.header}>
      <div className="container">
        <div className={appHeaderStyles.header__inner}>
          <nav className={appHeaderStyles.nav}>
            <ul className={appHeaderStyles.nav__list}>
              <li className={appHeaderStyles["nav__list-item"]}>
                <Link className={appHeaderStyles["nav__list-link"]} to="/">
                  <BurgerIcon type="primary" />
                  <span className={appHeaderStyles["nav__list-span"]}>
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
                  <ProfileIcon type="secondary" />
                  <span className={appHeaderStyles["nav__list-span"]}>
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
