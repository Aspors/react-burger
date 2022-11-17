import React, { memo, useCallback } from "react";
import { BUTTON } from "../../utils/consts/buttons-text";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import MenuWrapper from "./menu-wrapper/menu-wrapper";
import Menu from "./burger-constructor-menu/burger-constructor-menu";
import Total from "./total/total";
import { useSelector, useDispatch } from "react-redux";
import {
  CLEAR_CART,
  sendOrder,
  TOGGLE_CONSTRUCTOR_MODAL,
} from "../../services/actions/burger-constructor/burger-constructor";

const BurgerConstructor = memo(() => {
  const dispatch = useDispatch();
  const { cart, bun, isModalActive } = useSelector(
    (store) => store.constructor
  );

  const handleShowModal = useCallback(() => {
    dispatch({ type: TOGGLE_CONSTRUCTOR_MODAL });
  }, [dispatch]);
  const handleCloseModal = () => {
    dispatch({ type: CLEAR_CART });

    handleShowModal();
  };

  const handleOrderSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formedData = {
        ingredients: [bun._id, ...cart.map((item) => item._id), bun._id],
      };
      dispatch(sendOrder(formedData));
      handleShowModal();
    },
    // eslint-disable-next-line
    [cart]
  );

  const isButtonDisabled = isModalActive || !cart.length || !bun;

  return (
    <section className="pt-15 pl-3">
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
      <Total>
        <Button
          onClick={(e) => handleOrderSubmit(e)}
          disabled={isButtonDisabled}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          {BUTTON.SEND}
        </Button>
      </Total>
      {isModalActive && (
        <Modal handleShowModal={handleCloseModal}>
          <OrderDetails handleShowModal={handleCloseModal} />
        </Modal>
      )}
    </section>
  );
});

export default BurgerConstructor;
