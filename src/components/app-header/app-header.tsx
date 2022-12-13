import React, { memo } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./app-header.module.css";

import { Link } from "react-router-dom";

import ConstructorLink from "./constructor-link/constructor-link";
import OrderLineLink from "./order-line-link/order-line-link";
import ProfileLink from "./profile-link/profile-link";

const AppHeader = memo(() => {
  return (
    <header className={appHeaderStyles.header}>
      <div className="container">
        <div className={appHeaderStyles.header__inner}>
          <nav className={appHeaderStyles.nav}>
            <ul className={appHeaderStyles.nav__list}>
              <ConstructorLink />
              <OrderLineLink />
            </ul>
          </nav>
          <Link className={appHeaderStyles.header__logo} to="/">
            <Logo />
          </Link>
          <nav className={appHeaderStyles.nav}>
            <ul className={appHeaderStyles.nav__list}>
              <ProfileLink />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});

export default AppHeader;
