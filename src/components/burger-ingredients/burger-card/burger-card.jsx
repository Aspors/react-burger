import burgerCardStyles from "./burger-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { memo } from "react";
import { useDrag } from "react-dnd";

const BurgerCard = memo(({ handleItemClick, item, bun, itemsAmount }) => {
  const { _id, type, price, name, image } = item;
  const [{ isDrag }, ref] = useDrag({
    type: type,
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const handleDrag = (e) => {
    e.stopPropagation();
  };

  const opacity = isDrag ? 0 : 1;
  return (
    <li
      draggable
      style={{ opacity }}
      ref={ref}
      onDrag={(e) => handleDrag(e)}
      onClick={(e) => handleItemClick(e)}
      tabIndex={0}
      data-key={_id}
      className={burgerCardStyles.menu__item}
    >
      {itemsAmount !== 0 && <Counter count={itemsAmount} />}
      {bun && bun._id === item._id ? <Counter count={2} /> : null}
      <img src={image} alt={type} className="menu__item-img" />
      <span
        className={
          "text text_type_digits-default " +
          burgerCardStyles["menu__item-price"]
        }
      >
        {price}
        <CurrencyIcon type="primary" />
      </span>
      <span
        className="text text_type_main-default"
        style={{ textAlign: "center" }}
      >
        {name}
      </span>
    </li>
  );
});

export default BurgerCard;
