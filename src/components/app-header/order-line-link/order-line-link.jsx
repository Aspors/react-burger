import appHeaderStyles from "../app-header.module.css";
import { Link } from "react-router-dom";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BUTTON } from "../../../utils/consts/ui-consts/buttons-text";
import React from "react";

const OrderLineLink = () => {
  return (
    <li className={appHeaderStyles["nav__list-item"]}>
      <Link className={appHeaderStyles["nav__list-link"]} to="/">
        <ListIcon type="secondary" />
        <span className={appHeaderStyles["nav__list-span"]}>{BUTTON.LINE}</span>
      </Link>
    </li>
  );
};

export default OrderLineLink;
