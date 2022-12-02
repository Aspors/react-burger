import React from "react";
import AcceptButton from "../../utils/buttons/accept-button";
import { ORDER_DETAILS_TXT } from "../../../utils/consts/ui-consts/order-details-consts";
import orderDetailsStyles from "./order-details.module.css";
import PropTypes from "prop-types";
import Spinner from "../../utils/spinner/spinner";
import ErrorMessage from "../../utils/error-message/error-message";
import { useSelector } from "react-redux";
import {
  _ERROR,
  _IDLE,
  _LOADING,
} from "../../../services/utils/machine/machine";

const OrderDetails = ({ handleShowModal }) => {
  const { order, orderStatus } = useSelector((store) => store.constructor);

  switch (orderStatus) {
    case _LOADING: {
      return <Spinner />;
    }
    case _ERROR: {
      return (
        <div style={{ width: 400, height: 400 }}>
          <ErrorMessage />
        </div>
      );
    }
    case _IDLE: {
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
    default: {
      throw new Error("Wrong order status type");
    }
  }
};

OrderDetails.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
};

export default OrderDetails;
