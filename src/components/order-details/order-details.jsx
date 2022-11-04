import React from "react";
import AcceptButton from "../../utils/buttons/accept-button";
import { ORDER_DETAILS_TXT } from "../../utils/consts/order-details-consts";
import orderDetailsStyles from "./order-details.module.css";
import PropTypes from "prop-types";

const OrderDetails = ({ orderNumber = "034536", handleShowModal }) => {
  return (
    <div style={{ textAlign: "center" }} className="pb-15 pt-8 pl-25 pr-25">
      <h2
        className={`text text_type_digits-large ${orderDetailsStyles.details__header}`}>
        {orderNumber}
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
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.string,
  handleShowModal: PropTypes.func.isRequired,
};

export default OrderDetails;
