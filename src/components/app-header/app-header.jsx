import React, { Component } from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./app-header.module.css";

export default class AppHeader extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <header className={appHeaderStyles.header}>
        <div className="container">
          <div className={appHeaderStyles.header__inner}>
            <nav className={appHeaderStyles.nav}>
              <ul className={appHeaderStyles.nav__list}>
                <li className={appHeaderStyles["nav__list-item"]}>
                  <a href="#" className={appHeaderStyles["nav__list-link"]}>
                    <BurgerIcon type="primary" />
                    <span className={appHeaderStyles["nav__list-span"]}>
                      Конструктор
                    </span>
                  </a>
                </li>
                <li className={appHeaderStyles["nav__list-item"]}>
                  <a href="#" className={appHeaderStyles["nav__list-link"]}>
                    <ListIcon type="secondary" />
                    <span className={appHeaderStyles["nav__list-span"]}>
                      Лента заказов
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <a className={appHeaderStyles.header__logo} href="#">
              <Logo />
            </a>
            <nav className={appHeaderStyles.nav}>
              <ul className={appHeaderStyles.nav__list}>
                <li className={appHeaderStyles["nav__list-item"]}>
                  <a className={appHeaderStyles["nav__list-link"]} href="#">
                    <ProfileIcon type="secondary" />
                    <span className={appHeaderStyles["nav__list-span"]}>
                      Личный кабинет
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
