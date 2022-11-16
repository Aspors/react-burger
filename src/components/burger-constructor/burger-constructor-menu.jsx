import React, { memo, useMemo } from "react";
import burgerConstructorStyles from "./burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { MENU_TYPE } from "../../utils/consts/common-consts";
import ConstructorBanner from "../utils/dummy/constructor-banner";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM } from "../../services/actions/burger-constructor/burger-constructor";

const Menu = memo(() => {
  const { cart } = useSelector((store) => store.constructor);
  const dispatch = useDispatch();
  const handleDelete = (key) => {
    dispatch({ type: DELETE_ITEM, payload: key });
  };

  const isIngredientExists = useMemo(
    () => cart.find((item) => item.type !== MENU_TYPE.BUN),
    [cart]
  );

  const ConstructorList = () => {
    return cart.map(({ key, name, price, image }) => {
      return (
        <li
          className={burgerConstructorStyles["constructor__menu-list"]}
          key={key}
        >
          <DragIcon type="primary" />
          <ConstructorElement
            text={name}
            price={price}
            handleClose={() => handleDelete(key)}
            thumbnail={image}
          />
        </li>
      );
    });
  };

  return isIngredientExists ? (
    <ul className={burgerConstructorStyles.constructor__menu}>
      <ConstructorList />
    </ul>
  ) : (
    <ConstructorBanner />
  );
});

export default Menu;
