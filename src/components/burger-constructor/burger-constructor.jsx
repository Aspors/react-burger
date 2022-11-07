import React, { memo, useCallback, useState } from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import buregerConstructorStyles from "./burger-constructor.module.css";
import { MENU_TYPE } from "../../utils/consts/common-consts";
import { BUTTON } from "../../utils/consts/buttons-text";
import PropTypes from "prop-types";
import { goodsItemTypes } from "../../utils/types/common-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = memo((props) => {
  const [modalActive, setModalActive] = useState(false);
  const { cart } = props;
  const bun = cart.find((item) => item.type === MENU_TYPE.BUN);
  const handleShowModal = useCallback(() => {
    setModalActive((modalActive) => !modalActive);
  }, []);

  function handleOrderSubmit(e) {
    e.preventDefault();
    handleShowModal();
  }
  return (
    <section className="pt-15 pl-3">
      <div className="pl-8 pr-3">
        <ConstructorElement
          type="top"
          isLocked
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <ul className={buregerConstructorStyles.constructor__menu}>
        {cart.map(({ name, price, image, type }, index) => {
          if (type === MENU_TYPE.BUN) return null;

          return (
            <li
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              key={index}>
              <DragIcon />
              <ConstructorElement
                key={index}
                text={name}
                price={price}
                thumbnail={image}
              />
            </li>
          );
        })}
      </ul>
      <div className="pl-8 pr-3">
        <ConstructorElement
          type="bottom"
          isLocked
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={buregerConstructorStyles.constructor__total}>
        <span
          style={{ display: "flex", gap: 8 }}
          className="text text_type_digits-medium">
          610 <CurrencyIcon type="primary" />
        </span>
        <Button
          onClick={(e) => handleOrderSubmit(e)}
          disabled={modalActive}
          htmlType="submit"
          type="primary"
          size="medium">
          {BUTTON.SEND}
        </Button>
      </div>
      {modalActive && (
        <Modal handleShowModal={handleShowModal}>
          <OrderDetails handleShowModal={handleShowModal} />
        </Modal>
      )}
    </section>
  );
});

BurgerConstructor.propTypes = {
  cart: PropTypes.arrayOf(goodsItemTypes),
};

export default BurgerConstructor;
