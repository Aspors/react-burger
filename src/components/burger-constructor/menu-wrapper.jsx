import React, { memo, useContext } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CartDataContext } from "../../contexts/cartDataContext";
import { MENU_TYPE } from "../../utils/consts/common-consts";
import Dummy from "../utils/dummy/dummy";

const MenuWrapper = memo(({ children }) => {
  const { cart } = useContext(CartDataContext);
  const bunItem = cart.find(({ type }) => type === MENU_TYPE.BUN);
  const bun = bunItem ? bunItem : null;

  const EmptyBun = ({ type }) => {
    return (
      <div className="pl-8 pr-3">
        <Dummy type={type} text={"Выберите булку"} />
      </div>
    );
  };

  const Bun = ({ type }) => {
    if (!bun) return <EmptyBun type={type} />;
    return (
      <div className="pl-8 pr-3">
        <ConstructorElement
          type={type}
          isLocked
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
    );
  };

  return (
    <>
      <Bun type="top" />
      {children}
      <Bun type="bottom" />
    </>
  );
});

export default MenuWrapper;
