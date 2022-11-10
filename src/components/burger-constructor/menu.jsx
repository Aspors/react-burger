import React, { memo, useContext } from "react";
import burgerConstructorStyles from "./burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { MENU_TYPE } from "../../utils/consts/common-consts";
import { CartDataContext } from "../../contexts/cartDataContext";
import ConstructorBanner from "../utils/dummy/constructor-banner";

const Menu = memo(() => {
  const { cart, setCart } = useContext(CartDataContext);

  const handleDelete = (key) => {
    const newCart = cart.filter((item) => item.key !== key);
    setCart(newCart);
  };

  const isIngredientExists = cart.find((item) => item.type !== MENU_TYPE.BUN);

  const ConstructorList = () => {
    return cart.map(({ type, key, name, price, image }) => {
      if (type === MENU_TYPE.BUN) return null;
      return (
        <li
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
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
