import React, { memo, useCallback, useContext, useState } from "react";
import { BUTTON } from "../../utils/consts/buttons-text";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import MenuWrapper from "./menu-wrapper";
import Menu from "./menu";
import Total from "./total";
import useNormaService from "../../services/useNormaService";
import { CartDataContext } from "../../contexts/cartDataContext";

const BurgerConstructor = memo(() => {
  const [modalActive, setModalActive] = useState(false);
  const { sendOrder, loading, error } = useNormaService();
  const [orderId, setOrderId] = useState();
  const { cart } = useContext(CartDataContext);
  const handleShowModal = useCallback(() => {
    setModalActive((modalActive) => !modalActive);
  }, []);
  const handleOrderSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = cart.map((item) => item._id);
      sendOrder(formData).then((res) => setOrderId(res.order.number));
      handleShowModal();
    },
    // eslint-disable-next-line
    [cart]
  );

  return (
    <section className="pt-15 pl-3">
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
      <Total>
        <Button
          onClick={(e) => handleOrderSubmit(e)}
          disabled={modalActive}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          {BUTTON.SEND}
        </Button>
      </Total>
      {modalActive && (
        <Modal handleShowModal={handleShowModal}>
          <OrderDetails
            loading={loading}
            error={error}
            orderNumber={orderId}
            handleShowModal={handleShowModal}
          />
        </Modal>
      )}
    </section>
  );
});

export default BurgerConstructor;
