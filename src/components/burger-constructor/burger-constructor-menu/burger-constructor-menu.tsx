import React, { memo, useCallback, FC } from "react";
import menuStyles from "./burger-constructor-menu.module.css";

import ConstructorBanner from "../../utils/dummy/constructor-banner";
import { useDispatch, useSelector } from "react-redux";

import ConstructorDraggableElement from "../constructor-draggable-element/constructor-draggable-element";
import { NEW_CART_ORDER } from "../../../services/redux/actions/burger-constructor/burger-constructor";
import { TCart } from "../../../utils/types/component-types/cart.types";
import IMenu from "./burger-menu.types";

const Menu: FC<IMenu> = memo(({ isDragging }) => {
  const cart = useSelector<any, TCart[]>((store) => store.constructor.cart);
  const dispatch = useDispatch();

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
