import React, { memo, useCallback } from "react";
import menuStyles from "./burger-constructor-menu.module.css";

import ConstructorBanner from "../../utils/dummy/constructor-banner";
import { useDispatch, useSelector } from "react-redux";

import ConstructorDraggableElement from "../constructor-draggable-element/constructor-draggable-element";
import { NEW_CART_ORDER } from "../../../services/actions/burger-constructor/burger-constructor";

const Menu = memo(() => {
  const { cart } = useSelector((store) => store.constructor);
  const dispatch = useDispatch();
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragElement = cart[dragIndex];
      const newCart = [...cart];

      newCart.splice(dragIndex, 1);
      newCart.splice(hoverIndex, 0, dragElement);

      dispatch({ type: NEW_CART_ORDER, payload: newCart });
    },
    [cart, dispatch]
  );
  return cart.length !== 0 ? (
    <ul className={menuStyles.constructor__menu}>
      {cart.map((item, index) => {
        return (
          <ConstructorDraggableElement
            key={item.key}
            id={item.key}
            {...item}
            moveCard={moveCard}
            index={index}
          />
        );
      })}
    </ul>
  ) : (
    <ConstructorBanner />
  );
});

export default Menu;
