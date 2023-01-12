import React, { memo, useCallback, FC } from "react";
import menuStyles from "./burger-constructor-menu.module.css";

import ConstructorBanner from "../../utils/dummy/constructor-banner";

import ConstructorDraggableElement from "../constructor-draggable-element/constructor-draggable-element";

import IMenu from "./burger-menu.types";
import { NEW_CART_ORDER } from "../../../services/redux/actions/burger-constructor/burger-constructor.consts";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

const Menu: FC<IMenu> = memo(({ isDragging }) => {
  const cart = useAppSelector((store) => store.constructor.cart);
  const dispatch = useAppDispatch();

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragElement = cart[dragIndex];
      const newCart = [...cart];

      newCart.splice(dragIndex, 1);
      newCart.splice(hoverIndex, 0, dragElement);

      dispatch({ type: NEW_CART_ORDER, payload: newCart });
    },
    [cart, dispatch]
  );
  const dragging = isDragging ? menuStyles.dragging : "";
  return cart.length !== 0 ? (
    <ul className={`${menuStyles.constructor__menu} ${dragging}`}>
      {cart.map(({ key, ...item }, index) => {
        return (
          <ConstructorDraggableElement
            key={key}
            id={key}
            {...item}
            moveCard={moveCard}
            index={index}
          />
        );
      })}
    </ul>
  ) : (
    <ConstructorBanner extraClass={dragging} />
  );
});

export default Menu;
