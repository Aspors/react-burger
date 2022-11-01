import React, { memo } from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./app-header.module.css";
import { BUTTON } from "../../utils/consts/buttons-text";

const AppHeader = memo(() => {
  return (
    <header className={appHeaderStyles.header}>
      <div className="container">
        <div className={appHeaderStyles.header__inner}>
          <nav className={appHeaderStyles.nav}>
            <ul className={appHeaderStyles.nav__list}>
              <li className={appHeaderStyles["nav__list-item"]}>
                <a className={appHeaderStyles["nav__list-link"]} href="/">
                  <BurgerIcon type="primary" />
                  <span className={appHeaderStyles["nav__list-span"]}>
                    {BUTTON.CONSTRUCTOR}
                  </span>
                </a>
              </li>
              <li className={appHeaderStyles["nav__list-item"]}>
                <a className={appHeaderStyles["nav__list-link"]} href="/">
                  <ListIcon type="secondary" />
                  <span className={appHeaderStyles["nav__list-span"]}>
                    {BUTTON.LINE}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <a className={appHeaderStyles.header__logo} href="/">
            <Logo />
          </a>
          <nav className={appHeaderStyles.nav}>
            <ul className={appHeaderStyles.nav__list}>
              <li className={appHeaderStyles["nav__list-item"]}>
                <a className={appHeaderStyles["nav__list-link"]} href="/">
                  <ProfileIcon type="secondary" />
                  <span className={appHeaderStyles["nav__list-span"]}>
                    {BUTTON.PROFILE_MENU}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});

export default AppHeader;
