import React, { useEffect } from "react";
import AcceptButton from "../../utils/buttons/accept-button";
import { ORDER_DETAILS_TXT } from "../../../utils/consts/ui-consts/order-details-consts";
import orderDetailsStyles from "./order-details.module.css";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../../services/utils/machine/machine";
import { sendOrder } from "../../../services/redux/actions/burger-constructor/burger-constructor";

const OrderDetails = ({ handleShowModal }) => {
  const { order, orderStatus, cart, bun } = useSelector(
    (store) => store.constructor
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const formedData = {
      ingredients: [bun._id, ...cart.map((item) => item._id), bun._id],
    };

    dispatch(sendOrder(formedData));
    // eslint-disable-next-line
  }, []);

  const content = setContent(orderStatus);

  return content ? content : <View />;

  function View() {
    return (
      <div style={{ textAlign: "center" }} className="pb-15 pt-8 pl-25 pr-25">
        <h2
          className={`text text_type_digits-large ${orderDetailsStyles.details__header}`}
        >
          {order.number}
        </h2>
        <p className="mt-8 mb-15 text text_type_main-medium">
          {ORDER_DETAILS_TXT.P_ID}
        </p>

        <AcceptButton onClick={handleShowModal} />
        <p className="mb-2 mt-15 text text_type_main-default">
          {ORDER_DETAILS_TXT.P_STARTED_COOKING}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          {ORDER_DETAILS_TXT.P_WAIT}
        </p>
      </div>
    );
  }
};

OrderDetails.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
};

export default OrderDetails;
