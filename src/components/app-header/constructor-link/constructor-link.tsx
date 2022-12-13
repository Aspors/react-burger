import appHeaderStyles from "../app-header.module.css";
import { Link, useRouteMatch } from "react-router-dom";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BUTTON } from "../../../utils/consts/ui-consts/buttons-text";
import React from "react";

const ConstructorLink = () => {
  const isHome = useRouteMatch("/");
  const isIngredients = useRouteMatch("/ingredients");
  return (
    <li className={appHeaderStyles["nav__list-item"]}>
      <Link className={appHeaderStyles["nav__list-link"]} to="/">
        <BurgerIcon
          type={isHome?.isExact || isIngredients ? "primary" : "secondary"}
        />
        <span
          className={`${appHeaderStyles["nav__list-span"]} ${
            (isHome?.isExact || isIngredients) && appHeaderStyles.active
          }`}
        >
          {BUTTON.CONSTRUCTOR}
        </span>
      </Link>
    </li>
  );
};

export default ConstructorLink;
