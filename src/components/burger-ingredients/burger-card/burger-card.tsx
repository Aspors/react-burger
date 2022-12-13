import burgerCardStyles from "./burger-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { memo, SyntheticEvent } from "react";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import IBurgerCard from "./burger-card.types";

const BurgerCard: React.FC<IBurgerCard> = memo(({ item, bun, itemsAmount }) => {
  const { _id, type, price, name, image } = item;

  const location = useLocation();
  const [{ isDrag }, ref] = useDrag({
    type: type,
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const handleDrag = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  const opacity = isDrag ? 0 : 1;
  return (
    <Link
      draggable
      style={{ opacity }}
      ref={ref}
      onDrag={(e) => handleDrag(e)}
      tabIndex={0}
      to={{
        pathname: `ingredients/${_id}`,
        state: { background: location },
      }}
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
    </Link>
  );
});

export default BurgerCard;
