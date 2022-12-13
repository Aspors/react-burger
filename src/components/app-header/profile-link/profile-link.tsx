import appHeaderStyles from "../app-header.module.css";
import { Link, useRouteMatch } from "react-router-dom";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BUTTON } from "../../../utils/consts/ui-consts/buttons-text";
import React from "react";

const ProfileLink = () => {
  const isProfile = useRouteMatch("/profile");
  return (
    <li className={appHeaderStyles["nav__list-item"]}>
      <Link className={appHeaderStyles["nav__list-link"]} to="/profile">
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
  );
};

export default ProfileLink;
